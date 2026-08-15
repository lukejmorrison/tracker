import { atlasStatus } from "./countries";
import { menuItemCount } from "./menu";
import { isLiveStatus, proceedingsFor } from "./proceedings";
import { atlasRank } from "./rank";
import type { Country } from "./types";

export type HeatTone = "blocked" | "filter" | "restricted" | "live" | "demand" | "named" | "open";

/**
 * Visual heat for the homepage map. Same order as atlasRank — not a
 * freedom score. Canada is “live” even though atlasStatus is Open.
 */
export function heatTone(c: Country): HeatTone {
  const rank = atlasRank(c);
  if (rank === 0) return "blocked";
  if (rank === 1) return "filter";
  if (rank === 2) return "restricted";
  if (rank === 3) return "live";
  if (rank === 4) return "demand";
  if (rank === 5) return "named";
  return "open";
}

export function heatLabel(c: Country): string {
  const tone = heatTone(c);
  if (tone === "live") {
    const n = proceedingsFor(c.code).filter((p) => isLiveStatus(p.status)).length;
    return `${n} live ${n === 1 ? "file" : "files"}`;
  }
  if (tone === "named") {
    const n = menuItemCount(c.code);
    return `${n} named ${n === 1 ? "duty" : "duties"}`;
  }
  return atlasStatus(c) === "demand" ? "High demand" : atlasStatus(c)[0].toUpperCase() + atlasStatus(c).slice(1);
}

/** Compiled countries too small for the 110m land polygons. */
export const HEAT_MARKERS: { code: string; name: string; lon: number; lat: number }[] = [
  { code: "HK", name: "Hong Kong", lon: 114.17, lat: 22.32 },
  { code: "SG", name: "Singapore", lon: 103.82, lat: 1.35 },
];
