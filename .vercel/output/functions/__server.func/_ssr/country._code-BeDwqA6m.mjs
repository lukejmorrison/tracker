import { o as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as BookmarkCheck, i as Bookmark, r as ExternalLink } from "../_libs/lucide-react.mjs";
import { a as formatInt, n as Route$1, o as formatPct } from "./router-7-FUcM5U.mjs";
import { t as Badge } from "./badge-Bo2iZtSc.mjs";
import { i as REPORT_PERIOD } from "./filters-M1K64594.mjs";
import { a as atlasStatus, i as StatusBadge, s as getCountry, t as COUNTRY_LIST } from "./status-badge-DsPKrqIN.mjs";
import { t as Button } from "./button-Dhw87EDV.mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/country._code-BeDwqA6m.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var KIND_TONE = {
	"national-block": {
		tone: "blocked",
		label: "National block"
	},
	algorithm: {
		tone: "filter",
		label: "Algorithm filter"
	},
	withhold: {
		tone: "warn",
		label: "Jurisdiction withhold"
	},
	"legal-demand": {
		tone: "demand",
		label: "Legal demand"
	},
	intermittent: {
		tone: "warn",
		label: "Intermittent"
	}
};
function RestrictionList({ items }) {
	if (items.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "rounded-xl border border-border bg-surface px-5 py-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm text-muted",
			children: "No published government ranking filter, national block, or named withholding regime for this country. Ordinary X Rules still apply globally."
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex flex-col gap-4",
		children: items.map((item) => {
			const meta = KIND_TONE[item.kind];
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "rounded-xl border border-border bg-surface p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								tone: meta.tone,
								children: meta.label
							}),
							item.verified ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: "Verified source" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: "Reported" }),
							item.since ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-xs text-subtle",
								children: item.since
							}) : null
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-3 font-display text-xl tracking-tight text-fg",
						children: item.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted",
						children: item.summary
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 grid gap-3 sm:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-lg bg-blocked-dim px-4 py-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-medium uppercase tracking-wider text-blocked",
								children: "Not allowed"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-fg",
								children: item.notAllowed
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-lg bg-open-dim px-4 py-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-medium uppercase tracking-wider text-open",
								children: "Still allowed"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-fg",
								children: item.stillAllowed
							})]
						})]
					}),
					item.exception ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 text-sm text-muted",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-fg",
							children: "Exception. "
						}), item.exception]
					}) : null,
					item.legalBasis ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 text-sm text-subtle",
						children: ["Basis: ", item.legalBasis]
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: item.sourceUrl,
						target: "_blank",
						rel: "noreferrer",
						className: "mt-3 inline-block text-sm text-muted underline-offset-4 hover:text-fg hover:underline",
						children: item.source
					})
				]
			}, item.id);
		})
	});
}
var useWatchlist = create()(persist((set, get) => ({
	codes: [],
	toggle: (code) => set((s) => ({ codes: s.codes.includes(code) ? s.codes.filter((c) => c !== code) : [...s.codes, code] })),
	has: (code) => get().codes.includes(code)
}), { name: "tracker-watchlist" }));
function CountryPage() {
	const { code } = Route$1.useParams();
	const country = getCountry(code);
	if (!country) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "max-w-lg py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-3xl tracking-tight",
				children: "Not in the atlas"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 text-sm text-muted",
				children: [
					"No compiled entry for ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono text-fg",
						children: code.toUpperCase()
					}),
					". The country may have no public filter, block, or named transparency row yet."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/",
				className: "mt-6 inline-block text-sm text-muted underline-offset-4 hover:text-fg hover:underline",
				children: "Back to all countries"
			})
		]
	});
	const status = atlasStatus(country);
	const watched = useWatchlist((s) => s.codes.includes(country.code));
	const toggle = useWatchlist((s) => s.toggle);
	const peers = (0, import_react.useMemo)(() => {
		return COUNTRY_LIST.filter((c) => c.region === country.region && c.code !== country.code).slice(0, 4);
	}, [country]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "text-sm text-muted underline-offset-4 hover:text-fg hover:underline",
					children: "All countries"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex flex-wrap items-start justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-mono text-xs uppercase tracking-widest text-subtle",
							children: [
								country.code,
								" · ",
								country.region.replace("-", " ")
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-2 font-display text-4xl tracking-tight sm:text-5xl",
							children: country.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 flex flex-wrap items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { country }),
								country.inEuAggregate ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: "Inside EU aggregate" }) : null,
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, { children: ["Access ", country.access === "available" ? "open" : country.access] })
							]
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						onClick: () => toggle(country.code),
						"aria-pressed": watched,
						children: [watched ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookmarkCheck, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bookmark, {}), watched ? "Watching" : "Watch"]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 max-w-2xl text-base text-muted",
					children: country.snapshot
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "grid gap-3 sm:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
						label: "Access",
						value: country.access === "blocked" ? "Blocked" : country.access === "restricted" ? "Restricted" : "Available",
						note: "Can ordinary users load X?"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
						label: "Removal requests",
						value: country.removal ? formatInt(country.removal.received) : country.inEuAggregate ? "EU row" : "Not broken out",
						note: country.removal ? `${formatPct(country.removal.rate)} actioned · ${country.removal.period}` : country.inEuAggregate ? `EU total 3,831 · 90.42% · ${REPORT_PERIOD}` : `Folded into All others · ${REPORT_PERIOD}`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Metric, {
						label: "Info requests",
						value: country.info ? formatInt(country.info.received) : "Not named",
						note: country.info ? `${formatPct(country.info.rate)} disclosed · ${country.info.period}` : "No standalone row in the latest global table"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl tracking-tight",
					children: "Allowed and not allowed"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 max-w-2xl text-sm text-muted",
					children: "This is what public sources currently show — not a live feed of every withheld post. Individual jurisdiction withholdings still only appear as a notice when opened from that country."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RestrictionList, { items: country.restrictions })
				})
			] }),
			status === "open" && country.restrictions.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-xl border border-border bg-surface px-5 py-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-xl tracking-tight",
					children: "What that means"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-3 list-disc space-y-2 pl-5 text-sm text-muted",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "X loads without a national block." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "No government ranking filter is published in x-algorithm for this country." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Global X Rules (spam, child safety, violent threats) still apply everywhere." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "A future court order could still produce a jurisdiction withhold that only locals see." })
					]
				})]
			}) : null,
			country.code === "BR" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/filters",
				className: "inline-flex items-center gap-2 text-sm text-muted underline-offset-4 hover:text-fg hover:underline",
				children: ["Open the Brazil2026ElectionFilter file notes", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-3.5" })]
			}) : null,
			peers.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-xl tracking-tight",
				children: "Same region"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 flex flex-wrap gap-2",
				children: peers.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/country/$code",
					params: { code: p.code },
					className: "rounded-sm border border-border px-3 py-2 text-sm text-muted hover:border-line hover:text-fg",
					children: p.name
				}, p.code))
			})] }) : null
		]
	});
}
function Metric({ label, value, note }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl border border-border bg-surface px-4 py-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs uppercase tracking-wider text-subtle",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 font-display text-2xl tracking-tight",
				children: value
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-xs text-muted",
				children: note
			})
		]
	});
}
//#endregion
export { CountryPage as component };
