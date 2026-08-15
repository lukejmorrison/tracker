import type { MenuTrack } from "./types";

const OSA = "Online Safety Act 2023 · X UK duties page";
const OSA_URL = "https://help.x.com/en/rules-and-policies/uk-resources";

const JP_RR = "X Transparency Center — removal requests";
const JP_RR_URL = "https://transparency.x.com/en/reports/removal-requests";

export const MENU_TRACKS: MenuTrack[] = [
  {
    id: "jp-volume",
    countryCode: "JP",
    title: "Where Japan’s 69,186 legal demands actually go",
    intro:
      "Japan filed half of all legal removal demands X received worldwide in H2 2024. X itself itemized the pile as one grouped category — not as political speech.",
    kind: "volume-split",
    source: JP_RR,
    sourceUrl: JP_RR_URL,
    items: [
      {
        id: "jp-crime-ads",
        label: "Financial crime, narcotics, and prostitution",
        statute:
          "X’s own grouping. Typical Japanese bases: 出資法 / 詐欺, 覚せい剤取締法 / 大麻取締法, 売春防止法",
        share: 96,
        audience: "in-country",
        highlight: true,
        note: "This is the volume story. Ads and solicitations for illegal finance, drugs, and paid sex — not a ranking filter of politicians.",
      },
      {
        id: "jp-other",
        label: "Everything else X did not itemize",
        statute: "Honor (名誉毀損), privacy, copyright, and other local-law demands",
        share: 4,
        audience: "in-country",
        note: "X does not publish a further split. Japanese honor and privacy law is a real takedown path — it is not where the 69k came from.",
      },
    ],
  },
  {
    id: "jp-idpa",
    countryCode: "JP",
    title: "Private-party honor and rights track (情プラ法)",
    intro:
      "Separate from the government legal-demand pile. Since 1 April 2025 the Information Distribution Platform Act requires designated large platforms — X was designated 30 April 2025 — to take a rights-infringement deletion request, decide within 7 days, and publish an annual Article 28 report.",
    kind: "named-duties",
    source: "X Japan IDPA Compliance Report · MIC designation list",
    sourceUrl: "https://transparency.x.com/en/reports/japan-idpa-compliance-report",
    items: [
      {
        id: "jp-idpa-honor",
        label: "Defamation / 名誉毀損",
        statute: "IDPA Art. 5–6 + Civil Code 709 / Penal Code 230",
        audience: "everyone",
        highlight: true,
        note: "The live Japanese speech fight. A private party files; X must answer in 7 days. Not a government ranking list.",
      },
      {
        id: "jp-idpa-privacy",
        label: "Privacy and portrait rights",
        statute: "IDPA + 個人情報保護法 / 肖像権",
        audience: "everyone",
      },
      {
        id: "jp-idpa-revenge",
        label: "Non-consensual intimate images",
        statute: "私事性的画像被害防止法 (2014) + IDPA window",
        audience: "everyone",
      },
      {
        id: "jp-idpa-window",
        label: "7-day decide-or-refuse clock",
        statute: "IDPA designated-provider duty",
        audience: "everyone",
        note: "X published a Japanese report form and an Article 28 compliance zip for 2026. It does not publish the underlying URL list here.",
      },
    ],
  },
  {
    id: "gb-illegal",
    countryCode: "GB",
    title: "What X itself says it restricts for every UK user",
    intro:
      "Copied from X’s UK Online Safety page — not inferred from the transparency totals. The H2 2024 global table does not break out UK removal volume (it sits in All others). These are the named illegal-content duties X says it geo-restricts in the United Kingdom.",
    kind: "named-duties",
    source: OSA,
    sourceUrl: OSA_URL,
    items: [
      {
        id: "gb-intimate",
        label: "Intimate image abuse",
        statute: OSA,
        audience: "everyone",
        highlight: true,
        note: "Live Ofcom file. Opened 12 January 2026 over Grok sexualised deepfakes of real people.",
      },
      {
        id: "gb-csea",
        label: "Child sexual exploitation and abuse",
        statute: OSA,
        audience: "everyone",
        highlight: true,
        note: "In the same Ofcom investigation. Ofcom says some standalone-chatbot image creation sits outside the Act — the investigation is about what spread on X.",
      },
      {
        id: "gb-terror",
        label: "Terrorist content",
        statute: OSA,
        audience: "everyone",
      },
      {
        id: "gb-selfharm",
        label: "Encouraging or assisting self-harm",
        statute: OSA,
        audience: "everyone",
      },
      {
        id: "gb-suicide",
        label: "Encouraging or assisting suicide",
        statute: OSA,
        audience: "everyone",
      },
      {
        id: "gb-harass",
        label: "Harassment, stalking, threats, abuse, hate offences",
        statute: OSA,
        audience: "everyone",
      },
      {
        id: "gb-drugs",
        label: "Drugs and psychoactive substances",
        statute: OSA,
        audience: "everyone",
      },
      {
        id: "gb-weapons",
        label: "Firearms and other weapons",
        statute: OSA,
        audience: "everyone",
      },
      {
        id: "gb-immigration",
        label: "Unlawful immigration",
        statute: OSA,
        audience: "everyone",
      },
      {
        id: "gb-trafficking",
        label: "Human trafficking",
        statute: OSA,
        audience: "everyone",
      },
      {
        id: "gb-sex-exploit",
        label: "Sexual exploitation of adults",
        statute: OSA,
        audience: "everyone",
      },
      {
        id: "gb-extreme-porn",
        label: "Extreme pornography",
        statute: OSA,
        audience: "everyone",
      },
      {
        id: "gb-cyberflash",
        label: "Cyberflashing",
        statute: OSA,
        audience: "everyone",
      },
      {
        id: "gb-fraud",
        label: "Fraud and other financial offences",
        statute: OSA,
        audience: "everyone",
      },
      {
        id: "gb-foreign",
        label: "Foreign interference",
        statute: OSA,
        audience: "everyone",
      },
      {
        id: "gb-false",
        label: "False communications",
        statute: OSA,
        audience: "everyone",
        note: "A named OSA offence. Not a general ‘misinformation’ filter — it is the statutory false-communications crime.",
      },
      {
        id: "gb-animal",
        label: "Animal welfare",
        statute: OSA,
        audience: "everyone",
      },
      {
        id: "gb-torture",
        label: "Obscene content showing torture of humans or animals",
        statute: OSA,
        audience: "everyone",
      },
      {
        id: "gb-epilepsy",
        label: "Epilepsy trolling",
        statute: OSA,
        audience: "everyone",
      },
    ],
  },
  {
    id: "gb-children",
    countryCode: "GB",
    title: "Restricted from minors in the UK — not from adults",
    intro:
      "X’s own child-safety list under the Act. Adults in the UK can still see this material unless it is also illegal. That distinction is the point.",
    kind: "named-duties",
    source: OSA,
    sourceUrl: OSA_URL,
    items: [
      {
        id: "gb-ed",
        label: "Encouraging or assisting eating disorders",
        statute: OSA,
        audience: "minors",
      },
      {
        id: "gb-body",
        label: "Body-stigma content",
        statute: OSA,
        audience: "minors",
      },
      {
        id: "gb-depression",
        label: "Depression content",
        statute: OSA,
        audience: "minors",
      },
      {
        id: "gb-bullying",
        label: "Bullying content",
        statute: OSA,
        audience: "minors",
      },
      {
        id: "gb-harmful-sub",
        label: "Harmful substances",
        statute: OSA,
        audience: "minors",
      },
      {
        id: "gb-stunts",
        label: "Dangerous stunts and challenges",
        statute: OSA,
        audience: "minors",
      },
      {
        id: "gb-nudity-child",
        label: "Adult nudity harmful to children",
        statute: OSA,
        audience: "minors",
      },
    ],
  },
];

export function menuFor(code: string): MenuTrack[] {
  return MENU_TRACKS.filter((t) => t.countryCode.toUpperCase() === code.toUpperCase());
}

export function menuItemCount(code: string): number {
  return menuFor(code).reduce((n, t) => n + t.items.length, 0);
}
