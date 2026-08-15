export const APP_NAME = "tracker";
export const APP_DOMAIN = "tracker.wizwam.com";
export const APP_ORIGIN = "https://tracker.wizwam.com";
export const GROK_DOMAIN = "gov-tracker.grok.me";
export const GROK_ORIGIN = "https://gov-tracker.grok.me";
export const APP_TITLE = "tracker · what governments require X to hide";
export const APP_DESCRIPTION =
  "See what governments require X to hide — by country. Named duties, court files, and the official transparency tables. Not a live withheld-post catalog.";

export const PUBLIC_HOSTS = {
  wizwam: { host: APP_DOMAIN, origin: APP_ORIGIN },
  grok: { host: GROK_DOMAIN, origin: GROK_ORIGIN },
} as const;

/** Trailing slash — what the header prints. */
export function displayOrigin(origin: string): string {
  return origin.endsWith("/") ? origin : `${origin}/`;
}

/**
 * Which public URL to show for this request host.
 * tracker.wizwam.com and gov-tracker.grok.me are first-class.
 * Local / preview hosts keep the origin the browser actually has.
 */
export function originForHost(hostHeader: string | undefined | null): string {
  const raw = (hostHeader ?? "").trim().toLowerCase();
  if (!raw) return APP_ORIGIN;
  const host = raw.split(":")[0] ?? raw;
  if (host === GROK_DOMAIN || host.endsWith(`.${GROK_DOMAIN}`)) return GROK_ORIGIN;
  if (host === APP_DOMAIN || host === `www.${APP_DOMAIN}`) return APP_ORIGIN;
  if (host === "localhost" || host === "127.0.0.1" || host === "0.0.0.0" || host === "[::1]") {
    return `http://${raw}`;
  }
  return `https://${host}`;
}

export function pageTitle(lead: string): string {
  return `${lead} · tracker`;
}
