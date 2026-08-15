# Contributing

Two useful contributions: **a sourced correction** and **a compiled row**.

## Run it first

```bash
git clone https://github.com/lukejmorrison/tracker.git
cd tracker
npm install
npm run dev
```

Open [http://127.0.0.1:8080](http://127.0.0.1:8080). Full walkthrough: [docs/LOCAL.md](docs/LOCAL.md).

Need Node 22+. Nothing else — no database, no keys.

## 1. File it

After you have seen the page locally, open the matching issue:

- [Correction](https://github.com/lukejmorrison/tracker/issues/new?template=correction.yml)
- [Missing proceeding](https://github.com/lukejmorrison/tracker/issues/new?template=missing-proceeding.yml)
- [Named duties](https://github.com/lukejmorrison/tracker/issues/new?template=named-duties.yml)
- [Product](https://github.com/lukejmorrison/tracker/issues/new?template=product.yml)

Or use `/feedback` on your local copy — same four lanes.

Read [docs/FEEDBACK.md](docs/FEEDBACK.md) before you write. No primary source → it will not be compiled. Include the path you tested (`/country/JP`).

## 2. Or send the row

If you already know the shape, open a PR that touches only:

- `src/data/proceedings.ts` and/or
- `src/data/menu.ts` and/or
- `src/data/countries.ts` (snapshot + gap)

Follow [docs/DATA.md](docs/DATA.md). One proceeding per PR unless they are the same file in two courts.

Do not reformat unrelated countries. Do not bump `updated` to today.

## 3. Check

```bash
npm run check        # tsc --noEmit
```

Open `/country/XX` and `/courts` and confirm the new card renders with the source link.

Optional: `npm run build && npm run preview` to see the production build.

## Editorial

This is a reference work. We compile mechanisms, not arguments. If the source is an investigation, the card says it is an investigation. If the source is a 96% grouping, we do not invent the other 4%.

Questions: open a product issue, or leave a note on an existing `verified` ticket.
