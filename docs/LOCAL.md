# Run it locally

No account, no database, no API key. The atlas is compiled TypeScript.

## Need

- [Node.js 22+](https://nodejs.org/) (`.nvmrc` is `22`)
- Git

```bash
git clone https://github.com/lukejmorrison/tracker.git
cd tracker
npm install
npm run dev
```

Open [http://127.0.0.1:8080](http://127.0.0.1:8080).

If 8080 is taken:

```bash
PORT=5173 npm run dev
```

## What to click

These pages are the product. If one of them is wrong, that is the report.

| Path | What you should see |
| --- | --- |
| `/` | Atlas, sorted by severity. Japan is not “69k” without the 96 / 4 split nearby. |
| `/country/JP` | 96 / 4 volume split + 情プラ法 7-day track |
| `/country/GB` | 19 + 7 named duties, live Ofcom / ICO files |
| `/country/CA` | Open access + live B.C. / OPC / C-63 docket |
| `/country/BR` | TSE 2026 filter + 2024 STF block (lifted) |
| `/courts` | Live files across countries |
| `/sources` | Primary sources, Wikipedia demoted |
| `/feedback` | Four lanes that open GitHub issue forms |

Search `japan` should return Japan only. `/country/ZZ` should 404.

## Check before you file or PR

```bash
npm run check        # TypeScript
```

Optional production-shaped build (slow the first time):

```bash
npm run build
npm run preview      # same port as dev
```

`DATABASE_URL` is not required. `npm run build` skips the Postgres migrator when it is unset.

## Then file feedback

Do not email a screenshot into the void. After you have reproduced it locally:

1. Open `/feedback` on your local copy, or go straight to [new issue](https://github.com/lukejmorrison/tracker/issues/new/choose).
2. Pick one lane: correction / missing proceeding / named duties / product.
3. Include **country**, **primary source URL**, **last public date**, and the path you tested (`/country/GB`).
4. Say you reproduced it locally (and the Node version if it is a build/run bug).

The bar is in [FEEDBACK.md](FEEDBACK.md). No primary source → it does not compile.

## Common snags

| Symptom | Fix |
| --- | --- |
| `Need Node 22+` / odd Vite errors | `node -v` — use 22. `nvm use` if you have nvm. |
| Port 8080 in use | `PORT=5173 npm run dev` |
| `npm ci` fails | Use `npm install` unless you are matching CI exactly |
| Sign-in does nothing useful | Expected. The atlas is public. Auth is leftover and not required to test. |

How a row is written: [DATA.md](DATA.md). Why totals fail: [VISION.md](VISION.md).
