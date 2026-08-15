#!/usr/bin/env node
/**
 * Probe grokipedia.com for Wikipedia-style slugs.
 * Usage: node scripts/probe-grokipedia.mjs [Title_One Title_Two ...]
 * Default: slugs listed in src/data/encyclopedia.ts live + missing catalogs.
 */
const DEFAULT = [
  "Censorship_of_X",
  "Censorship_of_Twitter",
  "Internet_censorship_in_China",
  "Internet_censorship_in_Iran",
  "Internet_censorship_in_Pakistan",
  "Internet_in_Myanmar",
  "Internet_in_North_Korea",
  "Censorship_in_Russia",
  "Censorship_in_Turkey",
  "X_(social_network)",
  "Twitter",
];

const slugs = process.argv.slice(2);
const list = slugs.length ? slugs : DEFAULT;

for (const slug of list) {
  const url = `https://grokipedia.com/page/${slug}`;
  try {
    const res = await fetch(url, { redirect: "follow", headers: { "user-agent": "tracker-probe/1.0" } });
    const text = await res.text();
    const missing = res.status === 404 || /doesn't exist yet/i.test(text);
    console.log(`${missing ? "MISS" : "LIVE"} ${res.status} ${slug}`);
  } catch (err) {
    console.log(`ERR  ${slug} ${err instanceof Error ? err.message : err}`);
  }
}
