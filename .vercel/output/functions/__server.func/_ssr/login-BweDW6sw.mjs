import { b as require_jsx_runtime, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as signIn, t as GROK_PROVIDERS } from "./router-7-FUcM5U.mjs";
import { t as Button } from "./button-Dhw87EDV.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/login-BweDW6sw.js
var import_jsx_runtime = require_jsx_runtime();
function Login() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-md py-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-xs uppercase tracking-widest text-subtle",
				children: "Account"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-3xl tracking-tight",
				children: "Sign in"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm text-muted",
				children: "Optional. The atlas is public. Sign in if you want your session remembered across visits."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 flex flex-col gap-3",
				children: GROK_PROVIDERS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					type: "button",
					variant: "outline",
					onClick: () => signIn(p.providerId, { callbackURL: "/" }),
					children: ["Continue with ", p.label]
				}, p.providerId))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/",
				className: "mt-8 inline-block text-sm text-muted underline-offset-4 hover:text-fg hover:underline",
				children: "Back to the atlas"
			})
		]
	});
}
//#endregion
export { Login as component };
