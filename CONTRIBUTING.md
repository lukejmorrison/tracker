# Contributing

Two useful contributions: **a sourced correction** and **a compiled row**.

## 1. File it first

Open the matching issue so the source is on the record:

- [Correction](https://github.com/lukejmorrison/tracker/issues/new?template=correction.yml)
- [Missing proceeding](https://github.com/lukejmorrison/tracker/issues/new?template=missing-proceeding.yml)
- [Named duties](https://github.com/lukejmorrison/tracker/issues/new?template=named-duties.yml)
- [Product](https://github.com/lukejmorrison/tracker/issues/new?template=product.yml)

Read [docs/FEEDBACK.md](docs/FEEDBACK.md) before you write. No primary source → it will not be compiled.

## 2. Or send the row

If you already know the shape, open a PR that touches only:

- `src/data/proceedings.ts` and/or
- `src/data/menu.ts` and/or
- `src/data/countries.ts` (snapshot + gap)

Follow [docs/DATA.md](docs/DATA.md). One proceeding per PR unless they are the same file in two courts.

Do not reformat unrelated countries. Do not bump `updated` to today.

## 3. Local check

```bash
npm install
npm run typecheck
npm run dev
```

Open `/country/XX` and `/courts` and confirm the new card renders with the source link.

## Editorial

This is a reference work. We compile mechanisms, not arguments. If the source is an investigation, the card says it is an investigation. If the source is a 96% grouping, we do not invent the other 4%.

Questions: open a product issue, or leave a note on an existing `verified` ticket.
