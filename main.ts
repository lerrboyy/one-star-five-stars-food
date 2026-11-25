import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "One star: Earth charges for water, queues for everything, and rains without warning, but the nasi goreng is worth the whole miserable trip.";

const MAX_CHARS = 200;

function fail(message: string): never {
  throw new Error(message);
}

const chars = [...ENTRY];
if (chars.length < 1 || chars.length > MAX_CHARS) {
  fail(`entry must be 1 to ${MAX_CHARS} characters, got ${chars.length}`);
}
if (ENTRY.trim().length === 0) {
  fail("entry must not be only white space");
}
if (/[\u00a0\u2000-\u200b\u202f\u205f\u2060\u3000\ufeff]/.test(ENTRY)) {
  fail("entry must not contain invisible or zero-width characters");
}
if (/[\r\n]/.test(ENTRY)) {
  fail("entry must be a single line with no newline characters");
}
const terminators = ENTRY.match(/[.!?]/g) ?? [];
if (terminators.length !== 1 || !ENTRY.endsWith(".")) {
  fail("entry must be exactly one sentence ending with a period");
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, ENTRY, "utf8");

const roundTrip = readFileSync(outPath, "utf8");
if (roundTrip !== ENTRY) {
  fail("read-back of entry.txt does not match the entry text");
}
if (!Buffer.from(roundTrip, "utf8").equals(Buffer.from(ENTRY, "utf8"))) {
  fail("read-back bytes of entry.txt do not match the entry bytes");
}
if (roundTrip.endsWith("\n")) {
  fail("entry.txt must not end with a trailing newline");
}
console.log(`wrote ${outPath} (${chars.length} characters, 1 sentence)`);
