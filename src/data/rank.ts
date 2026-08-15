import { atlasStatus } from "./countries";
import type { Country } from "./types";
import { menuItemCount } from "./menu";
import { isLiveStatus, proceedingsFor } from "./proceedings";

/** Lower is more severe. Used for the atlas default sort — not a freedom index. */
export function atlasRank(c: Country): number {
  const s = atlasStatus(c);
  if (s === "blocked") return 0;
  if (s === "filter") return 1;
  if (s === "restricted") return 2;
  if (proceedingsFor(c.code).some((p) => isLiveStatus(p.status))) return 3;
  if (s === "demand") return 4;
  if (menuItemCount(c.code) > 0) return 5;
  return 6;
}

export function compareAtlas(a: Country, b: Country): number {
  const d = atlasRank(a) - atlasRank(b);
  if (d !== 0) return d;
  return a.name.localeCompare(b.name);
}
