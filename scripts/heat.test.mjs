import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";

const heatSrc = readFileSync(new URL("../src/data/heat.ts", import.meta.url), "utf8");
const rankSrc = readFileSync(new URL("../src/data/rank.ts", import.meta.url), "utf8");
const isoSrc = readFileSync(new URL("../src/data/iso3166.ts", import.meta.url), "utf8");

test("heat tones follow atlasRank, not a freedom index", () => {
  assert.match(rankSrc, /not a freedom index/);
  assert.match(heatSrc, /freedom score/);
  assert.match(rankSrc, /"blocked"\) return 0/);
  assert.match(rankSrc, /"filter"\) return 1/);
  assert.match(rankSrc, /"restricted"\) return 2/);
  assert.match(rankSrc, /isLiveStatus\(p\.status\)\)\) return 3/);
  assert.match(rankSrc, /"demand"\) return 4/);
  assert.match(rankSrc, /menuItemCount\(c\.code\) > 0\) return 5/);
  assert.match(heatSrc, /rank === 0\) return "blocked"/);
  assert.match(heatSrc, /rank === 1\) return "filter"/);
  assert.match(heatSrc, /rank === 2\) return "restricted"/);
  assert.match(heatSrc, /rank === 3\) return "live"/);
  assert.match(heatSrc, /rank === 4\) return "demand"/);
  assert.match(heatSrc, /rank === 5\) return "named"/);
  assert.match(heatSrc, /return "open"/);
});

test("iso numeric pad maps the atlas teaching cases", () => {
  for (const [num, alpha] of [
    ["124", "CA"],
    ["826", "GB"],
    ["392", "JP"],
    ["076", "BR"],
    ["840", "US"],
    ["156", "CN"],
  ]) {
    assert.match(isoSrc, new RegExp(`"${num}": "${alpha}"`));
  }
});
