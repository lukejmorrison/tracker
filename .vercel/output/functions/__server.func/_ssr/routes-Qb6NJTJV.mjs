import { o as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Search } from "../_libs/lucide-react.mjs";
import { a as formatInt, i as cn, o as formatPct, r as Route$5 } from "./router-7-FUcM5U.mjs";
import { t as Badge } from "./badge-Bo2iZtSc.mjs";
import { i as REPORT_PERIOD, r as GLOBAL_STATS, t as AS_OF } from "./filters-M1K64594.mjs";
import { a as atlasStatus, c as guessLocalCountry, i as StatusBadge, n as REGIONS, o as countryMatchesQuery, r as STATUS_META, t as COUNTRY_LIST } from "./status-badge-DsPKrqIN.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Qb6NJTJV.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var RAIL = {
	blocked: "bg-blocked",
	filter: "bg-filter",
	restricted: "bg-warn",
	demand: "bg-demand",
	open: "bg-open"
};
function CountryCard({ country, hint }) {
	const status = atlasStatus(country);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/country/$code",
		params: { code: country.code },
		className: "group block rounded-xl border border-border bg-surface p-4 transition-colors duration-150 hover:border-line",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-start gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: cn("mt-1 block h-9 w-1 shrink-0 rounded-full", RAIL[status]),
				"aria-hidden": true
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0 flex-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start justify-between gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "truncate font-medium text-fg",
							children: country.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-mono text-xs uppercase tracking-wider text-subtle",
							children: [country.code, hint ? " · your locale" : ""]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { country })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 line-clamp-2 text-sm text-muted",
					children: country.snapshot
				})]
			})]
		})
	});
}
function Input({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		className: cn("flex h-11 w-full rounded-md border border-border bg-surface px-3 text-sm text-fg outline-none placeholder:text-subtle focus-visible:border-line", className),
		...props
	});
}
var STATUSES = [
	{
		id: "all",
		label: "All"
	},
	{
		id: "blocked",
		label: "Blocked"
	},
	{
		id: "filter",
		label: "Filter"
	},
	{
		id: "restricted",
		label: "Restricted"
	},
	{
		id: "demand",
		label: "High demand"
	},
	{
		id: "open",
		label: "Open"
	}
];
var CHART = [
	{
		name: "Japan",
		received: 69186
	},
	{
		name: "Turkey",
		received: 11107
	},
	{
		name: "All others",
		received: 11047
	},
	{
		name: "European Union",
		received: 3831
	},
	{
		name: "South Korea",
		received: 1835
	}
];
var CHART_MAX = 69186;
function Home() {
	const search = Route$5.useSearch();
	const navigate = Route$5.useNavigate();
	const [localHint] = (0, import_react.useState)(() => guessLocalCountry());
	const q = search.q ?? "";
	const region = search.region ?? "all";
	const status = search.status ?? "all";
	const setParam = (patch) => {
		navigate({
			to: "/",
			search: {
				q: patch.q !== void 0 ? patch.q || void 0 : search.q,
				region: patch.region !== void 0 ? patch.region === "all" ? void 0 : patch.region : search.region,
				status: patch.status !== void 0 ? patch.status === "all" ? void 0 : patch.status : search.status
			}
		});
	};
	const filtered = (0, import_react.useMemo)(() => {
		return COUNTRY_LIST.filter((c) => {
			if (!countryMatchesQuery(c, q)) return false;
			if (region !== "all" && c.region !== region) return false;
			if (status !== "all" && atlasStatus(c) !== status) return false;
			return true;
		}).sort((a, b) => a.name.localeCompare(b.name));
	}, [
		q,
		region,
		status
	]);
	const counts = (0, import_react.useMemo)(() => {
		const base = {
			blocked: 0,
			filter: 0,
			restricted: 0,
			demand: 0,
			open: 0
		};
		for (const c of COUNTRY_LIST) base[atlasStatus(c)] += 1;
		return base;
	}, []);
	const local = localHint ? COUNTRY_LIST.find((c) => c.code === localHint) : void 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "grid gap-8 lg:grid-cols-12 lg:gap-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-7",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-mono text-xs uppercase tracking-widest text-subtle",
							children: ["As of ", AS_OF]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "mt-3 font-display text-3xl tracking-tight text-fg sm:text-5xl",
							children: [
								"What is allowed.",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"What is not.",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted",
									children: " By country."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-xl text-base text-muted",
							children: "Governments can force X to hide posts, rank them down, or block the whole service. X now publishes the ranking filters in the open-source algorithm. This atlas puts those filters next to national blocks and the latest transparency-report demand — so you can see your country beside everyone else’s."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex flex-wrap gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									tone: "filter",
									children: "1 open-source government filter"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
									tone: "blocked",
									children: [GLOBAL_STATS.blockedCountries, " national blocks"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
									tone: "demand",
									children: [formatInt(GLOBAL_STATS.removalRequests), " removal requests"]
								})
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "grid grid-cols-2 gap-3 lg:col-span-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							label: "Open-source filters",
							value: String(GLOBAL_STATS.openSourceFilters),
							note: "Brazil 2026 election"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							label: "Removal requests",
							value: formatInt(GLOBAL_STATS.removalRequests),
							note: `${formatPct(GLOBAL_STATS.removalRate)} actioned · ${REPORT_PERIOD}`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							label: "Info requests",
							value: formatInt(GLOBAL_STATS.infoRequests),
							note: `${formatPct(GLOBAL_STATS.infoRate)} disclosed`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
							label: "Countries ever demanding",
							value: String(GLOBAL_STATS.countriesEverDemanding),
							note: "Since the first transparency report"
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-xl border border-border bg-surface p-5 sm:p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-end justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-xl tracking-tight",
						children: "Government removal demand"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 text-sm text-muted",
						children: [
							"Named rows from the ",
							REPORT_PERIOD,
							" global report. EU is one bucket. Most other countries sit in “All others.”"
						]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/sources",
						className: "text-sm text-muted underline-offset-4 hover:text-fg hover:underline",
						children: "How this is counted"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-5 flex flex-col gap-3",
					children: CHART.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-[7.5rem_1fr_4.5rem] items-center gap-3 sm:grid-cols-[9rem_1fr_5rem]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "truncate text-sm text-muted",
								children: row.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "h-2 rounded-full bg-raised",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block h-2 rounded-full bg-filter",
									style: { width: `${Math.max(6, row.received / CHART_MAX * 100)}%` }
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-right font-mono text-xs tabular-nums text-subtle",
								children: formatInt(row.received)
							})
						]
					}, row.name))
				})]
			}),
			local ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-xs uppercase tracking-widest text-subtle",
				children: "Suggested from your locale"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 max-w-xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountryCard, {
					country: local,
					hint: true
				})
			})] }) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "flex flex-col gap-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-subtle" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: q,
								onChange: (e) => setParam({ q: e.target.value }),
								placeholder: "Filter by country or code",
								className: "pl-10",
								"aria-label": "Filter countries"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChipRow, {
								items: REGIONS.map((r) => ({
									id: r.id,
									label: r.label
								})),
								value: region,
								onChange: (id) => setParam({ region: id })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChipRow, {
								items: STATUSES,
								value: status,
								onChange: (id) => setParam({ status: id })
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-x-4 gap-y-1 text-xs text-subtle",
						children: Object.keys(STATUS_META).map((key) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-1.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("size-2 rounded-full", railDot(key)) }),
								STATUS_META[key].label,
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "tabular-nums text-muted",
									children: counts[key]
								})
							]
						}, key))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-muted",
						children: [
							filtered.length,
							" ",
							filtered.length === 1 ? "country" : "countries"
						]
					}),
					filtered.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "rounded-xl border border-border bg-surface px-5 py-10 text-center text-sm text-muted",
						children: "No countries match those filters."
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-3 sm:grid-cols-2 xl:grid-cols-3",
						children: filtered.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountryCard, { country: c }, c.code))
					})
				]
			})
		]
	});
}
function Stat({ label, value, note }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl border border-border bg-surface px-4 py-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs uppercase tracking-wider text-subtle",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 font-display text-3xl tabular-nums tracking-tight",
				children: value
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-xs text-muted",
				children: note
			})
		]
	});
}
function ChipRow({ items, value, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex gap-2 overflow-x-auto pb-1",
		children: items.map((item) => {
			const active = item.id === value;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => onChange(item.id),
				className: cn("h-10 shrink-0 rounded-sm border px-3 text-sm transition-colors duration-150", active ? "border-line bg-raised text-fg" : "border-border bg-transparent text-muted hover:text-fg"),
				children: item.label
			}, item.id);
		})
	});
}
function railDot(status) {
	if (status === "blocked") return "bg-blocked";
	if (status === "filter") return "bg-filter";
	if (status === "restricted") return "bg-warn";
	if (status === "demand") return "bg-demand";
	return "bg-open";
}
//#endregion
export { Home as component };
