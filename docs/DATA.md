# Data guide

The atlas is static TypeScript, compiled by hand from primary sources. There is no scraper and no unpublished API.

| File | Holds |
| --- | --- |
| [`src/data/countries.ts`](../src/data/countries.ts) | Country rows: access, demand, volume, restrictions, snapshot, gap |
| [`src/data/proceedings.ts`](../src/data/proceedings.ts) | Court, regulator, legislative, agency-order files |
| [`src/data/menu.ts`](../src/data/menu.ts) | Named duty lists and volume splits (Japan, UK, …) |
| [`src/data/filters.ts`](../src/data/filters.ts) | Open-source algorithm filters + reporting period |
| [`src/data/types.ts`](../src/data/types.ts) | Shared types |

## Adding a proceeding

Append to `PROCEEDINGS` in `proceedings.ts`:

```ts
{
  id: "gb-ofcom-grok",          // country-slug, stable
  countryCode: "GB",
  title: "Ofcom investigation of X — Grok sexualised imagery",
  court: "Ofcom",
  kind: "regulator",            // court | regulator | legislature | agency-order
  status: "pending",            // pending | appealed | decided | complied | monitoring | died | active-order
  filed: "12 January 2026",
  updated: "3 February 2026",   // last public date, not today
  summary: "…",
  atStake: "…",
  source: "Ofcom",
  sourceUrl: "https://…",
}
```

Rules:

- `updated` is the date on the source, not the date of the commit.
- Open investigations stay `pending` or `monitoring` until the source publishes a decision. Do not write an outcome you do not have.
- `died` is for bills that never became law (e.g. Canada C-63).
- One primary `sourceUrl`. Supporting coverage can live in the summary.

## Adding a named-duty track

If X or a regulator published a list or a split, add a `MenuTrack` in `menu.ts`. Do not invent a finer split than the source.

- `kind: "volume-split"` — Japan’s 96 / 4.
- `kind: "named-duties"` — the UK’s 19 + 7.

Then set `country.gap` to the thing the source still hides (the URL list, the All-others fold-in).

## Adding a country

`country()` in `countries.ts`. Minimum: `code`, `name`, `region`, `access`, `demand`, `restrictions`, `snapshot`.

- `cwcUsed: true` only if X has said Country Withheld Content was used there.
- `inEuAggregate: true` when the global table has no standalone row.
- `gap` is one sentence. If we have nothing specific to name, say so.

## Encyclopedia (background)

National-block rows may carry an `encyclopedia` pair. Grokipedia (`grokipedia.com/page/{WikiTitle}`) is first when a probed article exists; Wikipedia stays. Neither is a court citation.

Refresh the live-slug catalog with `node scripts/probe-grokipedia.mjs`. There is no Grokipedia article for “Censorship of X” — country pages (China, Iran, Pakistan, …) are used instead.

## What never goes in

Inferred percentages. Screenshot-only withholdings. Characterizations without a mechanism. See [FEEDBACK.md](FEEDBACK.md).
