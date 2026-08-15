import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as ExternalLink } from "../_libs/lucide-react.mjs";
import { a as formatInt, o as formatPct } from "./router-7-FUcM5U.mjs";
import { a as WHAT_WE_CANNOT_SEE, i as REPORT_PERIOD, o as WHAT_WE_CAN_SEE, r as GLOBAL_STATS, t as AS_OF } from "./filters-M1K64594.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/sources-Cfe-KSQi.js
var import_jsx_runtime = require_jsx_runtime();
var LINKS = [
	{
		title: "xai-org/x-algorithm",
		href: "https://github.com/xai-org/x-algorithm",
		note: "Open-source For You pipeline, including Brazil2026ElectionFilter."
	},
	{
		title: "Brazil2026ElectionFilter.rs",
		href: "https://github.com/xai-org/x-algorithm/blob/main/home-mixer/filters/brazil_2026_election_filter.rs",
		note: "The only government-required ranking filter in the public repo as of this compilation."
	},
	{
		title: "X Transparency Report (H2 2024)",
		href: "https://transparency.x.com/en/reports/global-reports/2025-transparency-report",
		note: "Named removal and information-request rows used for Japan, Turkey, South Korea, EU, US, UK."
	},
	{
		title: "Removal requests",
		href: "https://transparency.x.com/en/reports/removal-requests",
		note: "Historic country insight and withholding examples."
	},
	{
		title: "Information requests",
		href: "https://transparency.x.com/en/reports/information-requests",
		note: "US, Japan, EU, and UK information-request rows."
	},
	{
		title: "India IT Rules reports",
		href: "https://transparency.x.com/en/reports/countries/in",
		note: "Monthly statutory reports — India is not a named H2 2024 global-removal row."
	},
	{
		title: "TSE open data, 2026 candidates",
		href: "https://dadosabertos.tse.jus.br/dataset/candidatos-2026",
		note: "Dataset cited in the filter source as the electoral-court list."
	},
	{
		title: "Censorship of X (encyclopedia)",
		href: "https://en.wikipedia.org/wiki/Censorship_of_X",
		note: "National-block timeline for China, Iran, Russia, Myanmar, North Korea, Turkmenistan, Pakistan, Venezuela."
	}
];
function SourcesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "max-w-2xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-mono text-xs uppercase tracking-widest text-subtle",
						children: ["Methodology · compiled ", AS_OF]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 font-display text-4xl tracking-tight sm:text-5xl",
						children: "What this tracker can see"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 text-base text-muted",
						children: [
							"There is still no single public list of every withheld post. Grok’s answer on 15 August 2026 said as much. This app does not invent that list. It joins the three layers that ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "are" }),
							" public: the algorithm repo, transparency-report aggregates, and national access blocks."
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "grid gap-3 sm:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl border border-border bg-surface px-4 py-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs uppercase tracking-wider text-subtle",
								children: "Removals"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 font-display text-2xl tabular-nums",
								children: formatInt(GLOBAL_STATS.removalRequests)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1 text-xs text-muted",
								children: [
									formatPct(GLOBAL_STATS.removalRate),
									" actioned · ",
									REPORT_PERIOD
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl border border-border bg-surface px-4 py-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs uppercase tracking-wider text-subtle",
								children: "Information"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 font-display text-2xl tabular-nums",
								children: formatInt(GLOBAL_STATS.infoRequests)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1 text-xs text-muted",
								children: [
									formatPct(GLOBAL_STATS.infoRate),
									" disclosed · ",
									REPORT_PERIOD
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl border border-border bg-surface px-4 py-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs uppercase tracking-wider text-subtle",
								children: "Live filters"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 font-display text-2xl tabular-nums",
								children: GLOBAL_STATS.openSourceFilters
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-muted",
								children: "Published in x-algorithm"
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "grid gap-4 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl border border-border bg-surface p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-xl tracking-tight",
						children: "Public"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 space-y-4",
						children: WHAT_WE_CAN_SEE.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium text-fg",
							children: item.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted",
							children: item.body
						})] }, item.title))
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl border border-border bg-surface p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-xl tracking-tight",
						children: "Still dark"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 space-y-4",
						children: WHAT_WE_CANNOT_SEE.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium text-fg",
							children: item.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted",
							children: item.body
						})] }, item.title))
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl tracking-tight",
				children: "How statuses are assigned"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
				className: "mt-4 max-w-2xl list-decimal space-y-2 pl-5 text-sm text-muted",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-fg",
						children: "Blocked"
					}), " — the service is unreachable on ordinary domestic networks."] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-fg",
						children: "Filter"
					}), " — a government-required rule exists in the public For You source."] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-fg",
						children: "Restricted"
					}), " — intermittent national blocks, or documented jurisdiction withholdings, without a published ranking filter."] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-fg",
						children: "High demand"
					}), " — named as a high-volume legal-demand country in the latest global report (or a perennial top requester such as India)."] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-fg",
						children: "Open"
					}), " — no published ranking filter, no national block, and no named high-volume row. Global X Rules still apply. A future withhold would not appear here until it is public."] })
				]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl tracking-tight",
				children: "Primary sources"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-4 divide-y divide-border rounded-xl border border-border bg-surface",
				children: LINKS.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: link.href,
					target: "_blank",
					rel: "noreferrer",
					className: "flex items-start justify-between gap-4 px-4 py-4 hover:bg-raised",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-medium text-fg",
						children: link.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted",
						children: link.note
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "mt-0.5 size-4 shrink-0 text-subtle" })]
				}) }, link.href))
			})] })
		]
	});
}
//#endregion
export { SourcesPage as component };
