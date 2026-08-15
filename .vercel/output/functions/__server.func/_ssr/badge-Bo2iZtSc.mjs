import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { i as cn } from "./router-7-FUcM5U.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/badge-Bo2iZtSc.js
var import_jsx_runtime = require_jsx_runtime();
var badgeVariants = cva("inline-flex items-center rounded-sm px-2 py-0.5 text-xs font-medium tracking-wide", {
	variants: { tone: {
		default: "bg-raised text-muted",
		open: "bg-open-dim text-open",
		warn: "bg-warn-dim text-warn",
		blocked: "bg-blocked-dim text-blocked",
		filter: "bg-filter-dim text-filter",
		demand: "bg-demand-dim text-demand"
	} },
	defaultVariants: { tone: "default" }
});
function Badge({ className, tone, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn(badgeVariants({
			tone,
			className
		})),
		...props
	});
}
//#endregion
export { Badge as t };
