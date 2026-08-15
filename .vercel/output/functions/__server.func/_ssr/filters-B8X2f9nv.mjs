import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as ExternalLink } from "../_libs/lucide-react.mjs";
import { t as Badge } from "./badge-Bo2iZtSc.mjs";
import { n as BRAZIL_FILTER } from "./filters-M1K64594.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/filters-B8X2f9nv.js
var import_jsx_runtime = require_jsx_runtime();
function FiltersPage() {
	const filter = BRAZIL_FILTER;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "max-w-2xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-xs uppercase tracking-widest text-subtle",
						children: "Open-source algorithm"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 font-display text-4xl tracking-tight sm:text-5xl",
						children: "Government filters in For You"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-base text-muted",
						children: "The For You pipeline now ships government-required ranking filters in public source. Today there is one. If another government forces a similar rule, it should appear here the same way — named, scoped, and readable."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "rounded-xl border border-border bg-surface p-5 sm:p-7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								tone: "filter",
								children: "Live"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: "Verified in repo" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-mono text-xs text-subtle",
								children: ["Added ", filter.added]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 font-display text-3xl tracking-tight",
						children: filter.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-2xl text-sm text-muted",
						children: filter.summary
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "mt-6 grid gap-4 sm:grid-cols-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
								label: "Country",
								value: filter.countryName
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
								label: "Accounts on the list",
								value: `~${filter.accounts}`
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
								label: "Scope",
								value: filter.scope
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
								label: "Exception",
								value: filter.exception
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 grid gap-3 sm:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-lg bg-blocked-dim px-4 py-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-medium uppercase tracking-wider text-blocked",
								children: "Not allowed"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-fg",
								children: "For You will not recommend posts from TSE-listed 2026 candidate accounts to people who do not already follow them."
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-lg bg-open-dim px-4 py-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-medium uppercase tracking-wider text-open",
								children: "Still allowed"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-fg",
								children: "Followers still see the posts. Following timelines, Search, profiles, and paid boosting sit outside this filter."
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-5 text-sm text-muted",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-fg",
							children: "Legal basis. "
						}), filter.legalBasis]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 font-mono text-xs text-subtle",
						children: filter.sourcePath
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 flex flex-wrap gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: filter.sourceUrl,
								target: "_blank",
								rel: "noreferrer",
								className: "inline-flex items-center gap-1.5 text-sm text-muted underline-offset-4 hover:text-fg hover:underline",
								children: ["Read the filter", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-3.5" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: filter.announcementUrl,
								target: "_blank",
								rel: "noreferrer",
								className: "inline-flex items-center gap-1.5 text-sm text-muted underline-offset-4 hover:text-fg hover:underline",
								children: ["X Brazil announcement", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-3.5" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/country/$code",
								params: { code: "BR" },
								className: "text-sm text-muted underline-offset-4 hover:text-fg hover:underline",
								children: "Open Brazil in the atlas"
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl tracking-tight",
					children: "Sample listed handles"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 max-w-2xl text-sm text-muted",
					children: "Handles copied from comments in the filter file. User ids in the repo are obfuscated; usernames were published for transparency. This is a sample, not the full ~665-account list."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-5 grid grid-cols-2 gap-2 sm:grid-cols-4",
					children: filter.sampleAccounts.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: `https://x.com/${a.handle}`,
						target: "_blank",
						rel: "noreferrer",
						className: "block rounded-lg border border-border bg-surface px-3 py-2 font-mono text-sm text-muted hover:border-line hover:text-fg",
						children: ["@", a.handle]
					}) }, a.handle))
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "max-w-2xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl tracking-tight",
						children: "How visibility works"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-muted",
						children: "After ranking, visibility-filtering returns ALLOW, INTERSTITIAL, or DROP for each viewer and post. Rules can read labels, blocks, mutes, follows, account status, settings, and the viewer’s country. Some rules apply only to out-of-network recommendations — which is why following an account can restore posts the For You filter would drop."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-muted",
						children: "Country withholdings are different: a post can stay online globally and only show a notice inside one jurisdiction. Those notices are not aggregated into a public post list yet."
					})
				]
			})
		]
	});
}
function Fact({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
		className: "text-xs uppercase tracking-wider text-subtle",
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
		className: "mt-1 text-sm text-fg",
		children: value
	})] });
}
//#endregion
export { FiltersPage as component };
