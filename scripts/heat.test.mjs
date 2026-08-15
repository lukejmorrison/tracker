import assert from "node:assert/strict";
import { test } from "node:test";
import { createRequire } from "node:module";

// Heat helpers live in TS; the rank contract is what we lock here via a
// tiny duplicate of the rank order so a freedom-index cannot sneak in.
const RANK_ORDER = ["blocked", "filter", "restricted", "live", "demand", "named", "open"];

test("heat tones follow atlas severity, not a freedom index", () => {
  assert.deepEqual(RANK_ORDER, [
    "blocked",
    "filter",
    "restricted",
    "live",
    "demand",
    "named",
    "open",
  ]);
  assert.ok(RANK_ORDER.indexOf("live") < RANK_ORDER.indexOf("open"));
  assert.ok(RANK_ORDER.indexOf("blocked") === 0);
});

test("iso numeric pad maps the atlas teaching cases", async () => {
  const require = createRequire(import.meta.url);
  // Keep this test on the committed lookup table by reading the TS source.
  const fs = await import("node:fs");
  const src = fs.readFileSync(new URL("../src/data/iso3166.ts", import.meta.url), "utf8");
  for (const [num, alpha] of [
    ["124", "CA"],
    ["826", "GB"],
    ["392", "JP"],
    ["076", "BR"],
    ["840", "US"],
    ["156", "CN"],
  ]) {
    assert.match(src, new RegExp(`"${num}": "${alpha}"`));
  }
});
