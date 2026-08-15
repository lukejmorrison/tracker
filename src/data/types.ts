export type Region =
  | "americas"
  | "europe"
  | "mena"
  | "africa"
  | "asia-pacific";

export type AccessStatus = "available" | "restricted" | "blocked";

export type DemandLevel = "unbroken" | "low" | "moderate" | "high" | "extreme";

export type RestrictionKind =
  | "national-block"
  | "algorithm"
  | "withhold"
  | "legal-demand"
  | "intermittent";

export type Restriction = {
  id: string;
  kind: RestrictionKind;
  title: string;
  summary: string;
  notAllowed: string;
  stillAllowed: string;
  exception?: string;
  legalBasis?: string;
  source: string;
  sourceUrl: string;
  since?: string;
  verified: boolean;
  /** Background encyclopedia pair. Grokipedia first when a probed page exists. */
  encyclopedia?: {
    grokipedia?: { title: string; href: string };
    wikipedia?: { title: string; href: string };
  };
};

export type RequestStats = {
  period: string;
  received: number;
  actioned: number;
  rate: number;
};

export type MenuAudience = "everyone" | "minors" | "in-country";

export type MenuKind = "volume-split" | "named-duties";

export type MenuItem = {
  id: string;
  label: string;
  statute: string;
  share?: number;
  audience: MenuAudience;
  highlight?: boolean;
  note?: string;
};

export type MenuTrack = {
  id: string;
  countryCode: string;
  title: string;
  intro: string;
  kind: MenuKind;
  source: string;
  sourceUrl: string;
  items: MenuItem[];
};

export type Country = {
  code: string;
  name: string;
  region: Region;
  access: AccessStatus;
  demand: DemandLevel;
  removal?: RequestStats;
  info?: RequestStats;
  inEuAggregate?: boolean;
  cwcUsed?: boolean;
  gap?: string;
  restrictions: Restriction[];
  snapshot: string;
};

export type AlgorithmFilter = {
  id: string;
  name: string;
  countryCode: string;
  countryName: string;
  added: string;
  accounts: number;
  scope: string;
  exception: string;
  legalBasis: string;
  sourcePath: string;
  sourceUrl: string;
  announcementUrl: string;
  summary: string;
  sampleAccounts: { handle: string; note?: string }[];
};
