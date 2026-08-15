export const APP_NAME = "tracker";
export const APP_DOMAIN = "tracker.wizwam.com";
export const APP_ORIGIN = "https://tracker.wizwam.com";
export const APP_TITLE = "tracker · what governments require X to hide";
export const APP_DESCRIPTION =
  "See what governments require X to hide — by country. Named duties, court files, and the official transparency tables. Not a live withheld-post catalog.";

export function pageTitle(lead: string): string {
  return `${lead} · tracker`;
}
