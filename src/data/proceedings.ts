export type ProceedingKind = "court" | "regulator" | "legislature" | "agency-order";

export type ProceedingStatus =
  | "pending"
  | "appealed"
  | "decided"
  | "complied"
  | "monitoring"
  | "died"
  | "active-order";

export type Proceeding = {
  id: string;
  countryCode: string;
  title: string;
  court: string;
  kind: ProceedingKind;
  status: ProceedingStatus;
  filed?: string;
  decided?: string;
  updated: string;
  summary: string;
  atStake: string;
  outcome?: string;
  source: string;
  sourceUrl: string;
};

export const STATUS_COPY: Record<
  ProceedingStatus,
  { label: string; tone: "warn" | "filter" | "default" | "open" | "blocked" | "demand" }
> = {
  pending: { label: "Pending", tone: "warn" },
  appealed: { label: "On appeal", tone: "filter" },
  decided: { label: "Decided", tone: "default" },
  complied: { label: "Complied / lifted", tone: "open" },
  monitoring: { label: "Monitoring", tone: "demand" },
  died: { label: "Died / not in force", tone: "default" },
  "active-order": { label: "Active order", tone: "blocked" },
};

export const KIND_COPY: Record<ProceedingKind, string> = {
  court: "Court",
  regulator: "Regulator",
  legislature: "Legislature",
  "agency-order": "Agency order",
};

export const PROCEEDINGS: Proceeding[] = [
  {
    id: "ca-bc-iipa",
    countryCode: "CA",
    title: "X Corp. petition of a B.C. Intimate Images Protection Act order",
    court: "Supreme Court of British Columbia (from B.C. Civil Resolution Tribunal)",
    kind: "court",
    status: "pending",
    filed: "November 2025",
    updated: "13 November 2025",
    summary:
      "The B.C. Civil Resolution Tribunal ordered X to take down a non-consensual intimate image and later imposed a $100,000 penalty after X geo-blocked the post in Canada instead of deleting it worldwide. X petitioned the B.C. Supreme Court in November 2025 to quash the global-takedown penalty. The Attorney General of B.C. joined to defend the statute. No later public disposition was found as of this compilation.",
    atStake:
      "Whether a Canadian provincial order can force worldwide deletion, or whether geo-blocking inside Canada is enough. X argues a global order would let the most restrictive jurisdiction set the internet’s floor.",
    source: "B.C. government statement / CBC reporting",
    sourceUrl: "https://news.gov.bc.ca/releases/2025AG0066-001118",
  },
  {
    id: "ca-opc-grok",
    countryCode: "CA",
    title: "OPC investigation of X Corp. and xAI (Grok image generation)",
    court: "Office of the Privacy Commissioner of Canada (Federal Court available next)",
    kind: "regulator",
    status: "monitoring",
    filed: "January 2026",
    decided: "11 June 2026 (findings)",
    updated: "11 June 2026",
    summary:
      "The Privacy Commissioner found X and xAI breached PIPEDA by launching Grok image generation without adequate safeguards against sexualized deepfakes. The office is monitoring remediation. If unsatisfied it can take the matter to the Federal Court — the current statute does not give the OPC its own fines or binding orders.",
    atStake:
      "Privacy-law consequences for generative tools on X in Canada, and whether the file hardens into a Federal Court proceeding.",
    source: "Office of the Privacy Commissioner / IAPP",
    sourceUrl:
      "https://www.priv.gc.ca/en/opc-actions-and-decisions/investigations/investigations-into-businesses/2026/pipeda-2026-004/",
  },
  {
    id: "ca-c63",
    countryCode: "CA",
    title: "Bill C-63, Online Harms Act",
    court: "44th Parliament (House of Commons)",
    kind: "legislature",
    status: "died",
    filed: "26 February 2024",
    decided: "6 January 2025 (died on the Order Paper)",
    updated: "30 March 2026",
    summary:
      "Would have created a Digital Safety Commission with power to order platforms to make specified harmful content inaccessible in Canada, plus Criminal Code and Canadian Human Rights Act hate-speech expansions. Reached second-reading debate on 23 September 2024. Died when Parliament prorogued in January 2025. A March 2026 academic forum treated successor legislation as likely, not enacted.",
    atStake:
      "A standing federal takedown-and-audit regime for social platforms. It is not law. Nothing in C-63 currently binds X.",
    outcome: "Died on the Order Paper. Government has said the policy commitment remains.",
    source: "Canadian Heritage / LEGISinfo C-63",
    sourceUrl: "https://www.canada.ca/en/canadian-heritage/services/online-harms.html",
  },
  {
    id: "ca-c11-fca",
    countryCode: "CA",
    title: "Online Streaming Act (C-11) — Federal Court of Appeal challenges",
    court: "Federal Court of Appeal; CRTC",
    kind: "court",
    status: "pending",
    filed: "July 2024 (industry applications)",
    updated: "21 May 2026",
    summary:
      "C-11 brought online streaming under the Broadcasting Act. Industry groups (including MPA–Canada) challenged CRTC contribution orders. The Federal Court of Appeal agreed to hear the case and partially stayed payments. On 21 May 2026 the CRTC raised contribution levels again. This file is about broadcasting levies and discoverability, not a post-by-post X speech filter — included because C-11’s social-media reach was the live Canadian speech-regulation fight for years.",
    atStake:
      "How far Ottawa can regulate online audio/video undertakings, including discoverability on social platforms. Not an X ranking-filter case.",
    source: "CRTC 2026-96 / public litigation reporting",
    sourceUrl: "https://crtc.gc.ca/eng/archive/2026/2026-96.htm",
  },
  {
    id: "ca-cce-2021",
    countryCode: "CA",
    title: "Commissioner of Canada Elections — 2021 special-ballot post",
    court: "Commissioner of Canada Elections (legal demand to X)",
    kind: "agency-order",
    status: "decided",
    filed: "2021 election cycle (disclosed in an X transparency report)",
    updated: "Historic transparency example",
    summary:
      "X reported a legal demand from the Commissioner of Canada Elections over a post about special ballots in the 2021 general election. X removed the post under its Civic Integrity policy. That is the named Canadian example in X’s own removal-request write-up — not a reported open court file today.",
    atStake: "Election-administration speech taken down after a federal elections-law demand.",
    outcome: "Post removed under X Civic Integrity.",
    source: "X Transparency Center — removal requests (Canada example)",
    sourceUrl: "https://transparency.x.com/en/reports/removal-requests",
  },
  {
    id: "br-stf-2024",
    countryCode: "BR",
    title: "STF suspension of X in Brazil (PET 12.404 and related orders)",
    court: "Supremo Tribunal Federal — Justice Alexandre de Moraes; First Panel",
    kind: "court",
    status: "complied",
    filed: "7 August 2024 (account-block orders); 30 August 2024 (national suspension)",
    decided: "8 October 2024 (service restored after compliance)",
    updated: "8 October 2024",
    summary:
      "After X closed its Brazilian office and did not appoint a local representative, Justice Moraes ordered a nationwide suspension. A First Panel confirmed the order. X later paid fines, named a representative, and blocked specified accounts. The ban was lifted on 8 October 2024.",
    atStake: "Whether Brazil can take the entire service offline to enforce local court orders.",
    outcome: "Ban lifted after X complied. Access is open again.",
    source: "STF / contemporaneous court reporting",
    sourceUrl: "https://apnews.com/article/brazil-x-elon-musk-supreme-court-de-moraes-e32c4b4171e78cbe8994f53713a922f7",
  },
  {
    id: "br-tse-2026",
    countryCode: "BR",
    title: "TSE 2026 election — recommendation-system exclusion",
    court: "Tribunal Superior Eleitoral (electoral law + open-source filter)",
    kind: "agency-order",
    status: "active-order",
    filed: "2026 election cycle",
    updated: "14 August 2026",
    summary:
      "Brazilian electoral law requires recommendation systems to exclude channels reported to the Electoral Court. X implemented this as Brazil2026ElectionFilter in the public For You code on 14 August 2026. TSE has also been pushing broader 2026 platform-compliance plans.",
    atStake:
      "For You visibility of ~665 TSE-listed candidate accounts unless the viewer already follows them.",
    source: "x-algorithm Brazil2026ElectionFilter",
    sourceUrl:
      "https://github.com/xai-org/x-algorithm/blob/main/home-mixer/filters/brazil_2026_election_filter.rs",
  },
  {
    id: "au-fca-499",
    countryCode: "AU",
    title: "eSafety Commissioner v X Corp [2024] FCA 499",
    court: "Federal Court of Australia",
    kind: "court",
    status: "decided",
    filed: "April 2024",
    decided: "14 May 2024",
    updated: "14 May 2024",
    summary:
      "eSafety sought to force worldwide removal of material after a stabbing video. The Court refused to extend an interim injunction and treated geo-blocking as a reasonable step under s 109 of the Online Safety Act. eSafety later discontinued that injunction fight.",
    atStake: "Global deletion versus Australia-only withholding after a removal notice.",
    outcome: "Injunction not extended. Geo-blocking accepted as a reasonable step in that case.",
    source: "Federal Court of Australia — [2024] FCA 499",
    sourceUrl: "https://www.judgments.fedcourt.gov.au/judgments/Judgments/fca/single/2024/2024fca0499",
  },
  {
    id: "au-vid956",
    countryCode: "AU",
    title: "X Corp v eSafety Commissioner — BOSE reporting notice",
    court: "Federal Court of Australia; Full Court",
    kind: "court",
    status: "decided",
    filed: "2023 (VID956/2023)",
    decided: "4 October 2024 (single judge); 31 July 2025 (Full Court)",
    updated: "31 July 2025",
    summary:
      "X argued it did not inherit Twitter Inc.’s duty to answer a February 2023 Basic Online Safety Expectations notice. Wheelahan J dismissed the case on 4 October 2024. The Full Court dismissed the appeal with costs on 31 July 2025.",
    atStake: "Whether X must answer Australian transparency notices issued to pre-merger Twitter.",
    outcome: "X lost at first instance and on appeal. Later civil-penalty proceedings followed.",
    source: "eSafety / Federal Court [2025] FCAFC 99",
    sourceUrl: "https://www.esafety.gov.au/newsroom/media-releases/full-federal-court-rejects-x-corp-appeal",
  },
  {
    id: "au-res-2026",
    countryCode: "AU",
    title: "Classification of X under the Relevant Electronic Services Standard",
    court: "Federal Court of Australia (Justice Raper)",
    kind: "court",
    status: "decided",
    decided: "12 August 2026",
    updated: "12 August 2026",
    summary:
      "The Court held X is a social media service and is not also a “relevant electronic service” for the extra RES Standard. That blocked an overlapping regulatory track eSafety had pursued (potential penalties reported up to A$49.5 million on that theory).",
    atStake: "Whether X can be stacked under two Online Safety Act classes at once.",
    outcome: "X won this classification fight. Ordinary social-media safety duties remain.",
    source: "Contemporaneous Federal Court reporting, 12 August 2026",
    sourceUrl: "https://www.esafety.gov.au/industry/legal-proceedings-involving-esafety",
  },
  {
    id: "in-wp13710",
    countryCode: "IN",
    title: "X (Twitter) v Union of India — WP 13710/2022",
    court: "High Court of Karnataka",
    kind: "court",
    status: "decided",
    filed: "2022",
    decided: "30 June 2023",
    updated: "30 June 2023",
    summary:
      "X challenged account-level blocking under IT Act s 69A. The High Court held the government may block entire accounts, not only individual posts, and dismissed the petition, citing delay in compliance.",
    atStake: "Account-wide blocking versus tweet-level blocking under s 69A.",
    outcome: "Petition dismissed. Account-level 69A blocks stand.",
    source: "Karnataka High Court / case summaries",
    sourceUrl: "https://globalfreedomofexpression.columbia.edu/cases/x-formerly-twitter-v-union-of-india-2/",
  },
  {
    id: "in-sahyog",
    countryCode: "IN",
    title: "X Corp v Union of India — Sahyog portal (WP 7405/2025)",
    court: "High Court of Karnataka; Supreme Court appeal announced",
    kind: "court",
    status: "appealed",
    filed: "2025",
    decided: "24 September 2025 (single judge)",
    updated: "6 October 2025",
    summary:
      "X argued MeitY’s Sahyog portal used IT Act s 79(3)(b) to dodge the stricter s 69A blocking procedure from Shreya Singhal. On 24 September 2025 the Karnataka High Court upheld Sahyog and said a foreign company cannot claim Article 19 protections. X said it would appeal to the Supreme Court of India.",
    atStake:
      "Whether India can run mass takedowns through an administrative portal instead of formal 69A blocking orders.",
    outcome: "Lost at the High Court. Appeal to the Supreme Court announced.",
    source: "Karnataka HC WP 7405/2025 / SFLC.in analysis",
    sourceUrl: "https://sflc.in/xcorp-judgment-analysis/",
  },
  {
    id: "tr-aym-126",
    countryCode: "TR",
    title: "Constitutional Court challenge to 126 account blocks",
    court: "Turkish Constitutional Court",
    kind: "court",
    status: "pending",
    filed: "25 March 2025",
    updated: "5 August 2026",
    summary:
      "X filed an individual application against a BTK order to block 126 accounts inside Turkey. In August 2026 X said that challenge was still pending after a further Istanbul-court order against a presidential-candidacy account of Ekrem İmamoğlu. Blocked accounts remain visible outside Turkey.",
    atStake: "In-country account blocks during protest and election-adjacent speech.",
    source: "X Global Government Affairs / contemporaneous reporting",
    sourceUrl: "https://x.com/GlobalAffairs/status/1904865920042045668",
  },
  {
    id: "us-murthy",
    countryCode: "US",
    title: "Murthy v. Missouri (government–platform jawboning)",
    court: "Supreme Court of the United States",
    kind: "court",
    status: "decided",
    decided: "26 June 2024",
    updated: "26 June 2024",
    summary:
      "States and users alleged federal officials coerced platforms, including Twitter/X, into suppressing COVID and election speech. The Supreme Court held the plaintiffs lacked standing and did not reach the First Amendment merits. It is the lead U.S. case on government pressure to moderate — not a takedown order against X.",
    atStake: "When government communication with platforms becomes unconstitutional coercion.",
    outcome: "Dismissed on standing. No injunction against federal agencies.",
    source: "Supreme Court of the United States",
    sourceUrl: "https://www.supremecourt.gov/opinions/23pdf/23-411_3dq3.pdf",
  },
  {
    id: "gb-osa",
    countryCode: "GB",
    title: "Online Safety Act 2023 — illegal-content and child-safety duties",
    court: "Ofcom (judicial review in the High Court)",
    kind: "regulator",
    status: "active-order",
    filed: "2023 (Act); illegal-content codes 2025; child-safety 25 July 2025",
    updated: "15 August 2026",
    summary:
      "The Act is in force. X’s own UK page lists 19 illegal-content categories it geo-restricts and 7 child-harmful categories it restricts from minors. Ofcom can fine up to 10% of qualifying worldwide revenue or apply to court to block a service. There is still no published X-vs-Ofcom merits judgment on a specific takedown notice.",
    atStake: "Statutory, named removal duties inside the UK — appealable by judicial review.",
    source: "Online Safety Act 2023 / X UK duties page",
    sourceUrl: "https://help.x.com/en/rules-and-policies/uk-resources",
  },
  {
    id: "gb-ofcom-grok",
    countryCode: "GB",
    title: "Ofcom investigation of X — Grok sexualised imagery",
    court: "Ofcom (provisional decision, then possible High Court review)",
    kind: "regulator",
    status: "pending",
    filed: "12 January 2026 (formal investigation); first contact 5 January 2026",
    updated: "3 February 2026",
    summary:
      "Ofcom opened a formal investigation into whether X assessed and mitigated the risk of Grok-generated sexual deepfakes of real people — including children — spreading on the service, and whether it took them down quickly. On 3 February 2026 Ofcom said it is gathering evidence under binding information notices, working with the ICO, and that standalone chatbot image-creation sits partly outside the Act. No findings and no provisional decision yet.",
    atStake:
      "Whether X breached UK illegal-content duties on intimate-image abuse and CSEA. Fines, and in the extreme a court-ordered UK block, are the statutory ceiling — none of that has been decided.",
    source: "Ofcom — Investigation into X and scope of the Online Safety Act",
    sourceUrl:
      "https://www.ofcom.org.uk/online-safety/illegal-and-harmful-content/investigation-into-x-and-scope-of-the-online-safety-act",
  },
  {
    id: "gb-ico-grok",
    countryCode: "GB",
    title: "ICO investigation of X and xAI — Grok personal-data processing",
    court: "Information Commissioner’s Office (UK GDPR / DPA 2018)",
    kind: "regulator",
    status: "pending",
    filed: "3 February 2026",
    updated: "3 February 2026",
    summary:
      "The ICO opened formal investigations into X Internet Unlimited Company and X.AI LLC over processing of personal data in Grok and its potential to produce harmful sexualised image and video content. Parallel to Ofcom, not a speech-ranking case. No findings yet.",
    atStake: "UK data-protection consequences for Grok image generation of real people.",
    source: "ICO statement, 3 February 2026",
    sourceUrl:
      "https://ico.org.uk/about-the-ico/media-centre/news-and-blogs/2026/02/ico-announces-investigation-into-grok/",
  },
  {
    id: "gb-cat1",
    countryCode: "GB",
    title: "Ofcom Category 1 designation of X",
    court: "Ofcom Register of Categorised Services",
    kind: "agency-order",
    status: "active-order",
    decided: "10 July 2026 (register published)",
    updated: "10 July 2026",
    summary:
      "Ofcom listed X (X Internet Unlimited Company) as a Category 1 social media service. Category 1 adds duties on user empowerment, identity verification, news-publisher and journalistic content, content of democratic importance, and freedom-of-expression assessments — on top of the illegal-content and child-safety codes already in force. Additional-duties codes were out for consultation when the register landed.",
    atStake:
      "The extra Category 1 rulebook. Journalism and democratic-importance content get more protection, not less, under those duties.",
    source: "Ofcom Register of Categorised Services",
    sourceUrl:
      "https://www.ofcom.org.uk/online-safety/illegal-and-harmful-content/register-of-categorised-services-and-list-emerging-category-1-services",
  },
  {
    id: "jp-idpa",
    countryCode: "JP",
    title: "MIC designation of X under the Information Distribution Platform Act",
    court: "Ministry of Internal Affairs and Communications (総務省)",
    kind: "agency-order",
    status: "active-order",
    filed: "1 April 2025 (Act in force)",
    decided: "30 April 2025 (X designated)",
    updated: "2026 (Article 28 report)",
    summary:
      "MIC designated X a large specified telecommunications provider on 30 April 2025. X must run a Japanese rights-infringement window, decide deletion requests within 7 days, staff an infringement-investigation role, and publish an annual Article 28 compliance report. Failure to follow a ministerial correction order can carry a fine of up to ¥100 million. This is the private-party honor/privacy track — not the 69k government crime-ad demand pile.",
    atStake:
      "A statutory 7-day clock on 名誉毀損 and privacy takedowns in Japan, with a public yearly report. Not a political ranking filter.",
    source: "MIC designation list / X Japan IDPA Compliance Report",
    sourceUrl: "https://transparency.x.com/en/reports/japan-idpa-compliance-report",
  },
  {
    id: "de-dsa",
    countryCode: "DE",
    title: "DSA illegal-content orders (Germany / EU)",
    court: "National courts + EU Digital Services Coordinator path",
    kind: "agency-order",
    status: "active-order",
    updated: "H2 2024 report",
    summary:
      "Germany sits inside the EU DSA. Member-state authorities can issue orders to act against illegal content; X’s latest global table rolls those into the EU row (3,831 requests, 90.42% actioned). Historic NetzDG court withholdings (e.g. Berlin regional court) remain the older template.",
    atStake: "Jurisdiction-scoped withholdings for German viewers after a valid order.",
    source: "X Transparency Report H2 2024 / DSA",
    sourceUrl: "https://transparency.x.com/en/reports/global-reports/2025-transparency-report",
  },
];

export function proceedingsFor(code: string): Proceeding[] {
  return PROCEEDINGS.filter((p) => p.countryCode.toUpperCase() === code.toUpperCase()).sort(
    (a, b) => statusRank(a.status) - statusRank(b.status),
  );
}

export function liveProceedings(): Proceeding[] {
  return PROCEEDINGS.filter((p) =>
    ["pending", "appealed", "monitoring", "active-order"].includes(p.status),
  );
}

function statusRank(s: ProceedingStatus): number {
  const order: ProceedingStatus[] = [
    "pending",
    "appealed",
    "active-order",
    "monitoring",
    "decided",
    "complied",
    "died",
  ];
  return order.indexOf(s);
}

export function isLiveStatus(s: ProceedingStatus): boolean {
  return s === "pending" || s === "appealed" || s === "monitoring" || s === "active-order";
}
