import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";

const src = readFileSync(new URL("../src/data/encyclopedia.ts", import.meta.url), "utf8");

test("Grokipedia URL scheme matches Wikipedia titles", () => {
  assert.match(src, /GROKIPEDIA_ORIGIN = "https:\/\/grokipedia.com"/);
  assert.match(src, /GROKIPEDIA_ORIGIN\}\/page\/\$\{slug\}/);
});

test("Censorship of X is recorded as missing on Grokipedia", () => {
  assert.match(src, /"Censorship_of_X"/);
  assert.match(src, /GROKIPEDIA_MISSING_SLUGS/);
});

test("country mappings point at probed-live slugs", () => {
  const pairs = [
    ["CN", "Internet_censorship_in_China"],
    ["IR", "Internet_censorship_in_Iran"],
    ["KP", "Internet_in_North_Korea"],
    ["RU", "Censorship_in_Russia"],
    ["MM", "Internet_in_Myanmar"],
    ["PK", "Internet_censorship_in_Pakistan"],
  ];
  for (const [code, slug] of pairs) {
    assert.match(src, new RegExp(`${code}: \\{[\\s\\S]*?slug: "${slug}"`));
    assert.match(src, new RegExp(`"${slug}"`));
  }
});
