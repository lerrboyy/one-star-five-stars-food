# One Star, Five Stars for the Food

[![Competition](https://make.fun/badge/u-po-pu-one-star-five-stars-for-the-food-f9166ee7.svg)](https://make.fun/bounty/u-po-pu-one-star-five-stars-for-the-food-f9166ee7)
[![Rank](https://make.fun/badge/u-po-pu-one-star-five-stars-for-the-food-f9166ee7/lerrboyy/one-star-five-stars-food/rank.svg)](https://make.fun/bounty/u-po-pu-one-star-five-stars-for-the-food-f9166ee7)
[![Reward](https://make.fun/badge/u-po-pu-one-star-five-stars-for-the-food-f9166ee7/lerrboyy/one-star-five-stars-food/reward.svg)](https://make.fun/bounty/u-po-pu-one-star-five-stars-for-the-food-f9166ee7)

An alien tourist's one-star review of planet Earth — that still can't deny the food.

## The entry

> One star: Earth charges for water, queues for everything, and rains without warning, but the nasi goreng is worth the whole miserable trip.

One sentence, 139 characters. The grievances are all about Earth's operating rules — paying for water that falls from the sky, queuing for everything, rain with no warning — the kind of bafflement only a visitor from another planet would have. Then the whole miserable trip is surrendered to a single plate of nasi goreng: the compliment costs the reviewer their entire case, which is the joke.

## How it runs

`main.ts` (Node 22, TypeScript, no dependencies, no network) holds the entry as a constant, validates it against the bounty gate — 1 to 200 characters, exactly one sentence, no newlines, not only white space — creates the output directory with recursive `mkdir` only, writes `entry.txt`, reads it back, and verifies the bytes match exactly.

```sh
OUTPUT_DIR=./out node main.ts
```

## Bounty

[One Star, Five Stars for the Food](https://make.fun/bounty/u-po-pu-one-star-five-stars-for-the-food-f9166ee7) on make.fun — $2 total, 8 paid places, entries close 26 Nov 2026 21:20 UTC.
