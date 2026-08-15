/**
 * Encyclopedia layer — background timeline, not a court citation.
 *
 * Grokipedia (grokipedia.com, xAI) uses Wikipedia-style slugs:
 *   https://en.wikipedia.org/wiki/Title  →  https://grokipedia.com/page/Title
 *
 * There is no Grokipedia article for "Censorship of X" (probed 15 Aug 2026).
 * Country-specific pages that do exist are preferred when we have one.
 * Wikipedia is always kept.
 */

export const GROKIPEDIA_ORIGIN = "https://grokipedia.com";
export const WIKI_CENSORSHIP_OF_X = "https://en.wikipedia.org/wiki/Censorship_of_X";

export type EncyclopediaLink = {
  title: string;
  href: string;
};

export type EncyclopediaPair = {
  grokipedia?: EncyclopediaLink;
  wikipedia: EncyclopediaLink;
};

/** Slugs we HEAD/GET-checked on grokipedia.com on 15 August 2026. */
export const GROKIPEDIA_LIVE_SLUGS = [
  "Twitter",
  "X_(social_network)",
  "Twitter_under_Elon_Musk",
  "X_Corp.",
  "Internet_censorship",
  "Internet_censorship_in_China",
  "Internet_censorship_in_Iran",
  "Internet_censorship_in_Pakistan",
  "Internet_in_Myanmar",
  "Internet_in_North_Korea",
  "Censorship_in_Russia",
  "Censorship_in_Turkey",
  "Censorship",
  "great_firewall",
  "Social_media_in_China",
  "Roskomnadzor",
] as const;

export const GROKIPEDIA_MISSING_SLUGS = [
  "Censorship_of_X",
  "Censorship_of_Twitter",
  "Blocking_of_X",
  "Blocking_of_X_in_Brazil",
  "Blocking_of_Twitter_in_Nigeria",
  "Internet_censorship_in_Russia",
  "Internet_censorship_in_Myanmar",
  "Internet_censorship_in_North_Korea",
  "Internet_censorship_in_Turkmenistan",
  "Internet_censorship_in_Venezuela",
] as const;

const LIVE = new Set<string>(GROKIPEDIA_LIVE_SLUGS);

/** Best Grokipedia page for a compiled national-block country. */
export const GROKIPEDIA_BY_COUNTRY: Record<string, { title: string; slug: string }> = {
  CN: { title: "Internet censorship in China", slug: "Internet_censorship_in_China" },
  IR: { title: "Internet censorship in Iran", slug: "Internet_censorship_in_Iran" },
  KP: { title: "Internet in North Korea", slug: "Internet_in_North_Korea" },
  RU: { title: "Censorship in Russia", slug: "Censorship_in_Russia" },
  MM: { title: "Internet in Myanmar", slug: "Internet_in_Myanmar" },
  PK: { title: "Internet censorship in Pakistan", slug: "Internet_censorship_in_Pakistan" },
};

export function wikiTitleFromUrl(href: string): string | null {
  try {
    const u = new URL(href);
    if (!u.hostname.endsWith("wikipedia.org")) return null;
    const m = u.pathname.match(/\/wiki\/([^#]+)/);
    return m ? decodeURIComponent(m[1]) : null;
  } catch {
    return null;
  }
}

export function grokipediaPageUrl(slug: string): string {
  return `${GROKIPEDIA_ORIGIN}/page/${slug}`;
}

export function grokipediaSlugIsLive(slug: string): boolean {
  return LIVE.has(slug);
}

/** Map a Wikipedia URL to a Grokipedia URL only when we have probed that slug. */
export function grokipediaForWikiUrl(href: string): EncyclopediaLink | undefined {
  const title = wikiTitleFromUrl(href);
  if (!title) return undefined;
  if (!LIVE.has(title)) return undefined;
  return { title: title.replace(/_/g, " "), href: grokipediaPageUrl(title) };
}

export function encyclopediaForCountry(code: string): EncyclopediaPair {
  const wikipedia: EncyclopediaLink = {
    title: "Censorship of X",
    href: WIKI_CENSORSHIP_OF_X,
  };
  const mapped = GROKIPEDIA_BY_COUNTRY[code];
  if (mapped && LIVE.has(mapped.slug)) {
    return {
      grokipedia: { title: mapped.title, href: grokipediaPageUrl(mapped.slug) },
      wikipedia,
    };
  }
  const sameSlug = grokipediaForWikiUrl(wikipedia.href);
  return { grokipedia: sameSlug, wikipedia };
}

export function preferredEncyclopedia(pair: EncyclopediaPair): EncyclopediaLink {
  return pair.grokipedia ?? pair.wikipedia;
}

export function encyclopediaLabel(kind: "grokipedia" | "wikipedia", title: string): string {
  return kind === "grokipedia" ? `Grokipedia · ${title}` : `Wikipedia · ${title}`;
}

/** Fill source / sourceUrl / encyclopedia for a national-block row. */
export function wikiBlockSources(code: string): {
  source: string;
  sourceUrl: string;
  encyclopedia: EncyclopediaPair;
} {
  const encyclopedia = encyclopediaForCountry(code);
  const pref = preferredEncyclopedia(encyclopedia);
  const kind = encyclopedia.grokipedia ? "grokipedia" : "wikipedia";
  return {
    source: encyclopediaLabel(kind, pref.title),
    sourceUrl: pref.href,
    encyclopedia,
  };
}
