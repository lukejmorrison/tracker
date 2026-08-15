# Feedback framework

The atlas is a compiled record. It gets sharper when people send **named, sourced** gaps — and worse when we absorb rumor.

This is the only intake path. Use `/feedback` on a [local copy](LOCAL.md) or on [tracker.wizwam.com/feedback](https://tracker.wizwam.com/feedback), or [open a GitHub issue](https://github.com/lukejmorrison/tracker/issues/new/choose).

## The bar

A report lands only if it includes:

1. **A country** (ISO code or name).
2. **A primary source URL** — judgment, docket, regulator statement, statute, or an X transparency / help page. News is supporting, not sufficient, unless it quotes the order.
3. **A last public date** (when the source last said this).
4. **What should change** on the page — one sentence.

No source → labeled `needs-source` and closed if none arrives.

If you reproduced it on a local copy, say so and include the path (`/country/GB`). See [LOCAL.md](LOCAL.md).

“I opened X in [country] and a post was withheld” is useful as a *prompt to look*, not as a row. Individual withholdings are still not in any public catalog. We will not invent one from screenshots.

## Four lanes

| Lane | Use when | Template |
| --- | --- | --- |
| **Correction** | A number, date, status, statute name, or “still allowed” line is wrong | [correction](https://github.com/lukejmorrison/tracker/issues/new?template=correction.yml) |
| **Missing proceeding** | A named court, regulator, or legislative file is public and not on the docket | [missing-proceeding](https://github.com/lukejmorrison/tracker/issues/new?template=missing-proceeding.yml) |
| **Named duties** | X or a government published a category list / split we did not compile | [named-duties](https://github.com/lukejmorrison/tracker/issues/new?template=named-duties.yml) |
| **Product** | The page is true but still does not move the needle — UX, missing comparison, unclear gap | [product](https://github.com/lukejmorrison/tracker/issues/new?template=product.yml) |

Pick one lane. A file that is both a correction *and* a new proceeding: file the proceeding; mention the stale line in the body.

## What we will compile

- Court petitions, judgments, appeals, and published agency orders that change what X must hide or disclose.
- Regulator investigations **as investigations** (status: pending / monitoring) until there is a decision.
- Statutes and bills that create or kill takedown powers, with in-force vs died made obvious.
- Category splits and duty lists **as the publisher grouped them**. We do not subdivide a 96% bucket.

## What we will not compile

- Anonymous “my tweet vanished” reports without a legal instrument.
- Political characterizations (“this government is the worst”) in place of a mechanism.
- Inferred percentages, invented UK/EU country splits, or estimated URL counts.
- Findings on an open file. “No findings yet” stays on the card until the source changes.

## Triage

Maintainers apply one label and one status.

| Label | Meaning |
| --- | --- |
| `needs-source` | No primary URL, or the URL does not support the claim |
| `verified` | Source checked; ready to compile |
| `in-atlas` | Shipped on a country page / docket |
| `wont-compile` | Out of bar (rumor, inference, duplicate, not about X’s legal layer) |
| `duplicate` | Already filed or already on the page |

SLA we aim for: a first human read within a week. Compilation happens when the source is checked, not when the issue is loud.

## How a row is written

Once verified, the change lands in:

- `src/data/proceedings.ts` — court / regulator / bill
- `src/data/menu.ts` — named duty list or volume split
- `src/data/countries.ts` — access, volume, snapshot, gap sentence

Every card keeps `updated` as the last *public* date, not the date we typed it. See [DATA.md](DATA.md).

## Tone

Corrections are welcome. Advocacy is not a source. If the page is incomplete, say what is missing and point at the record. That is how Japan stopped being “69k requests” and became a 96 / 4 split plus a 7-day honor window.
