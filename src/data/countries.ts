import { BRAZIL_FILTER, REPORT_PERIOD } from "./filters";
import type { Country, Region, Restriction } from "./types";

const H2 = REPORT_PERIOD;

const tseFilter: Restriction = {
  id: "br-tse-2026",
  kind: "algorithm",
  title: "TSE 2026 candidate For You filter",
  summary: BRAZIL_FILTER.summary,
  notAllowed:
    "For You does not recommend posts from ~665 accounts reported to Brazil’s Electoral Court for the 2026 election.",
  stillAllowed:
    "Following those accounts still surfaces their posts. Following timelines, Search, and paid boosting are outside this filter. All other accounts are unaffected by it.",
  exception: BRAZIL_FILTER.exception,
  legalBasis: BRAZIL_FILTER.legalBasis,
  source: "x-algorithm · Brazil2026ElectionFilter",
  sourceUrl: BRAZIL_FILTER.sourceUrl,
  since: BRAZIL_FILTER.added,
  verified: true,
};

function country(c: Country): Country {
  return c;
}

export const COUNTRIES: Country[] = [
  country({
    code: "BR",
    name: "Brazil",
    region: "americas",
    access: "available",
    demand: "moderate",
    restrictions: [
      tseFilter,
      {
        id: "br-2024-block",
        kind: "intermittent",
        title: "Nationwide block (lifted)",
        summary:
          "X was blocked in Brazil from 30 August to 8 October 2024 after a Supreme Court order over a local legal representative and prior TSE takedown fights. Access was restored after compliance and fines.",
        notAllowed: "The entire service was unreachable inside Brazil during the block.",
        stillAllowed: "Service is available again. The remaining live restriction is the 2026 election recommendation filter.",
        since: "30 August 2024 – 8 October 2024",
        legalBasis: "STF / TSE orders (2024)",
        source: "STF / contemporaneous court reporting",
        sourceUrl: "https://apnews.com/article/brazil-x-elon-musk-supreme-court-de-moraes-e32c4b4171e78cbe8994f53713a922f7",
        verified: true,
      },
    ],
    snapshot:
      "The only country with a government-required filter published in the open-source For You code. Access is open; recommendations are not fully open.",
  }),
  country({
    code: "JP",
    name: "Japan",
    region: "asia-pacific",
    access: "available",
    demand: "extreme",
    removal: { period: H2, received: 69186, actioned: 57867, rate: 83.64 },
    info: { period: H2, received: 2607, actioned: 1559, rate: 59.8 },
    cwcUsed: true,
    gap: "X published the 96 / 4 category split and an annual IDPA Article 28 zip. It does not publish the 57,867 actioned URLs.",
    restrictions: [
      {
        id: "jp-crime-ads",
        kind: "legal-demand",
        title: "Crime-ad legal demands — 96% of the pile",
        summary:
          "Japan filed 69,186 removal requests in H2 2024 — half of every legal demand X received worldwide. X says 96% referred to laws on financial crime, narcotics, and prostitution. Volume rose 27%; accounts specified rose 30%. Action rate: 83.64% (57,867).",
        notAllowed:
          "Posts and accounts named in actioned Japanese legal demands — overwhelmingly ads and solicitations for illegal finance, drugs, and paid sex.",
        stillAllowed:
          "X is fully reachable. There is no Japan For You ranking filter in the public algorithm. Political speech is not what produced the 69k. The 16% of requests X refused stay up.",
        legalBasis:
          "Japanese criminal process (出資法 / 詐欺, 覚せい剤取締法, 大麻取締法, 売春防止法) via legal demand, then Country Withheld Content",
        source: "X Transparency Center — removal requests + H2 2024 table",
        sourceUrl: "https://transparency.x.com/en/reports/removal-requests",
        verified: true,
      },
      {
        id: "jp-idpa",
        kind: "legal-demand",
        title: "情プラ法 — 7-day honor and rights window",
        summary:
          "The Information Distribution Platform Act (旧プロバイダ責任制限法, in force 1 April 2025) is a different track from the 69k government demands. MIC designated X a large specified provider on 30 April 2025. Private parties can file a rights-infringement request; X must decide within 7 days and publish an annual Article 28 report.",
        notAllowed:
          "Posts X accepts as rights-infringing after an IDPA filing — typically 名誉毀損, privacy / portrait rights, non-consensual intimate images.",
        stillAllowed:
          "A filing is not an automatic takedown. X can refuse. Refused posts stay up. This is not a government candidate list and not the source of the 69k crime-ad volume.",
        legalBasis: "情報流通プラットフォーム対処法 Arts. 5–6, 28",
        source: "X Japan IDPA Compliance Report · MIC designation",
        sourceUrl: "https://transparency.x.com/en/reports/japan-idpa-compliance-report",
        since: "1 April 2025 (Act) · 30 April 2025 (X designated)",
        verified: true,
      },
    ],
    snapshot:
      "Open access. Half of all global legal demands. 96% are crime ads — finance, drugs, prostitution — not a political ranking filter. Honor takedowns run on a separate 7-day private-party track.",
  }),
  country({
    code: "TR",
    name: "Turkey",
    region: "europe",
    access: "available",
    demand: "high",
    removal: { period: H2, received: 11107, actioned: 9514, rate: 85.66 },
    restrictions: [
      {
        id: "tr-law-5651",
        kind: "legal-demand",
        title: "Law 5651 and disinformation rules",
        summary:
          "Second-highest named requester in H2 2024. Turkey has a long record of court and agency orders covering insult, “disinformation,” and national-security claims. X was briefly blocked in 2014; it is accessible today.",
        notAllowed:
          "Posts and accounts specified in actioned Turkish legal demands (9,514 of 11,107 requests in H2 2024).",
        stillAllowed:
          "The service is reachable. Content not covered by an actioned order remains visible. There is no open-source For You filter for Turkey.",
        legalBasis: "Law No. 5651; later disinformation amendments",
        source: "X Transparency Report, H2 2024",
        sourceUrl: "https://transparency.x.com/en/reports/removal-requests",
        verified: true,
      },
    ],
    snapshot:
      "Accessible, but one of the most aggressive legal-demand regimes on the platform.",
  }),
  country({
    code: "KR",
    name: "South Korea",
    region: "asia-pacific",
    access: "available",
    demand: "high",
    removal: { period: H2, received: 1835, actioned: 1649, rate: 89.86 },
    restrictions: [
      {
        id: "kr-44-7",
        kind: "legal-demand",
        title: "Article 44-7 batch reports",
        summary:
          "South Korea’s communications law lets agencies file batch illegal-content reports (defamation, election, and other listed categories). Action rate in H2 2024 was 89.86%.",
        notAllowed: "Content covered by actioned KCSC / Article 44-7 reports.",
        stillAllowed:
          "X is fully accessible. There is no published algorithm-level country filter.",
        legalBasis: "Network Act Article 44-7",
        source: "X Transparency Report, H2 2024",
        sourceUrl: "https://transparency.x.com/en/reports/global-reports/2025-transparency-report",
        verified: true,
      },
    ],
    snapshot: "Open access with a high action rate on a smaller request volume than Japan or Turkey.",
  }),
  country({
    code: "US",
    name: "United States",
    region: "americas",
    access: "available",
    demand: "moderate",
    info: { period: H2, received: 3788, actioned: 2975, rate: 78.54 },
    restrictions: [
      {
        id: "us-info",
        kind: "legal-demand",
        title: "Information requests, not a speech filter",
        summary:
          "The US leads emergency and routine information requests (3,788 in H2 2024, 78.54% disclosed). It is not a top content-removal requester. There is no open-source US government ranking filter.",
        notAllowed:
          "Account records disclosed under valid legal process. Isolated takedowns when a court order meets X’s legal bar.",
        stillAllowed:
          "Political speech is broadly available. The First Amendment constrains government-ordered political takedowns. For You has no US-government filter in the public repo.",
        legalBasis: "Subpoena, court order, SCA / emergency process",
        source: "X Transparency Report, H2 2024",
        sourceUrl: "https://transparency.x.com/en/reports/information-requests",
        verified: true,
      },
    ],
    snapshot:
      "Highest-profile information-request jurisdiction. Content removals are not the main lever.",
  }),
  country({
    code: "GB",
    name: "United Kingdom",
    region: "europe",
    access: "available",
    demand: "moderate",
    info: { period: H2, received: 806, actioned: 379, rate: 47.02 },
    cwcUsed: true,
    gap: "X published the named UK duty list. It folded UK removal counts into All others. The live named proceeding is Ofcom’s 12 January 2026 Grok investigation — no findings yet.",
    restrictions: [
      {
        id: "gb-osa-illegal",
        kind: "withhold",
        title: "19 named illegal-content duties inside the UK",
        summary:
          "X’s own UK Online Safety page lists the offences it geo-restricts for every UK user: terrorism, CSEA, intimate-image abuse, false communications, fraud, weapons, and 13 more. Country Withheld Content has been used in the UK. The H2 2024 global table does not publish a UK removal count.",
        notAllowed:
          "The 19 named illegal categories on X’s UK duties page, including intimate-image abuse and CSEA — the subject of Ofcom’s open investigation.",
        stillAllowed:
          "X loads. There is no UK For You ranking filter. Journalism and content of democratic importance have extra Category 1 protections under the Act. Legal adult speech stays up for adults. Unactioned legal demands stay up.",
        legalBasis: "Online Safety Act 2023 · Ofcom illegal-content codes (in force 2025)",
        source: "X Help — United Kingdom Online Safety Information",
        sourceUrl: "https://help.x.com/en/rules-and-policies/uk-resources",
        verified: true,
      },
      {
        id: "gb-osa-children",
        kind: "withhold",
        title: "7 child-harmful categories — minors only",
        summary:
          "Separate from the illegal-content list. X says it restricts eating-disorder, body-stigma, depression, bullying, harmful-substance, dangerous-stunt, and adult-nudity material from UK minors. Adults are not the audience of this duty.",
        notAllowed: "Those 7 categories, for UK accounts X treats as under 18.",
        stillAllowed:
          "The same material can remain visible to UK adults unless it is also illegal. This is not a nationwide political filter.",
        legalBasis: "Online Safety Act 2023 · Ofcom child-safety duties (in force 25 July 2025)",
        source: "X Help — United Kingdom Online Safety Information",
        sourceUrl: "https://help.x.com/en/rules-and-policies/uk-resources",
        verified: true,
      },
    ],
    snapshot:
      "Open access. 19 named illegal duties + 7 child-only duties, from X’s own UK page. Ofcom opened a formal Grok investigation on 12 January 2026. Removal volume is still not broken out.",
  }),
  country({
    code: "IN",
    name: "India",
    region: "asia-pacific",
    access: "available",
    demand: "high",
    restrictions: [
      {
        id: "in-it-rules",
        kind: "legal-demand",
        title: "IT Rules blocking orders",
        summary:
          "India has been a perennial top-five legal-demand country. X now files monthly Information Technology Rules reports. Latest global table folds India into “All others” (11,047 requests, 62.86% actioned across that bucket).",
        notAllowed:
          "URLs and accounts named in MeitY / IT Rules orders that X actioned. Often national-security, communal, or court-ordered speech.",
        stillAllowed:
          "The service is available. Unactioned orders stay up. No India-specific For You filter is in the public algorithm.",
        legalBasis: "IT Act §69A; IT Rules 2021",
        source: "X country reports / IT Rules monthly PDFs",
        sourceUrl: "https://transparency.x.com/en/reports/countries/in",
        verified: true,
      },
    ],
    snapshot:
      "Available nationwide, with a dense blocking-order regime and monthly statutory reports.",
  }),
  country({
    code: "DE",
    name: "Germany",
    region: "europe",
    access: "available",
    demand: "moderate",
    inEuAggregate: true,
    restrictions: [
      {
        id: "de-dsa-netzdg",
        kind: "withhold",
        title: "DSA + historic NetzDG withholdings",
        summary:
          "Germany sits inside the EU aggregate (3,831 removal requests, 90.42% actioned in H2 2024). Illegal-content orders and DSA systemic-risk duties can produce country-level withholdings that only display a notice inside the jurisdiction.",
        notAllowed:
          "Content withheld for German/EU viewers after a valid order (hate speech, unconstitutional symbols, and other listed illegal categories).",
        stillAllowed:
          "The same posts may remain visible outside Germany. X itself is not blocked. No DE algorithm filter is published.",
        legalBasis: "Digital Services Act; remnants of NetzDG practice",
        source: "X Transparency Report, H2 2024 (EU row)",
        sourceUrl: "https://transparency.x.com/en/reports/global-reports/2025-transparency-report",
        verified: true,
      },
    ],
    snapshot: "Open access. Country withholdings exist; they are not listed post-by-post in public.",
  }),
  country({
    code: "FR",
    name: "France",
    region: "europe",
    access: "available",
    demand: "moderate",
    inEuAggregate: true,
    restrictions: [
      {
        id: "fr-dsa",
        kind: "withhold",
        title: "DSA removal orders",
        summary:
          "France appears in X’s DSA transparency filings as a member-state issuer of illegal-content orders (hate speech, unsafe products). Volume is inside the EU aggregate, not a standalone global-report row.",
        notAllowed: "Items X withholds or removes after a valid French/EU order.",
        stillAllowed:
          "X is available. There is no France-specific For You filter in the public repo.",
        legalBasis: "DSA; French criminal law",
        source: "X DSA Transparency Report + H2 2024 EU aggregate",
        sourceUrl: "https://transparency.x.com/dsa-transparency-report-2025-april.html",
        verified: true,
      },
    ],
    snapshot: "Accessible. Orders exist; the public catalog of withheld posts does not.",
  }),
  country({
    code: "ES",
    name: "Spain",
    region: "europe",
    access: "available",
    demand: "moderate",
    inEuAggregate: true,
    restrictions: [
      {
        id: "es-dsa",
        kind: "withhold",
        title: "DSA illegal-content orders",
        summary:
          "Spain is named in X’s April 2025 DSA report for illegal-or-harmful-speech orders. Withholdings can be jurisdiction-scoped.",
        notAllowed: "Content actioned under a valid Spanish/EU order.",
        stillAllowed: "Full access to X. No published ES ranking filter.",
        legalBasis: "DSA",
        source: "X DSA Transparency Report, April 2025",
        sourceUrl: "https://transparency.x.com/dsa-transparency-report-2025-april.html",
        verified: true,
      },
    ],
    snapshot: "Open access, EU-law withholdings possible, no algorithm filter.",
  }),
  country({
    code: "IT",
    name: "Italy",
    region: "europe",
    access: "available",
    demand: "moderate",
    inEuAggregate: true,
    restrictions: [
      {
        id: "it-dsa",
        kind: "legal-demand",
        title: "Local-law / DSA withholdings",
        summary:
          "Italy has used local-law and trusted-flagger paths for hate-speech withholdings. Latest volume sits in the EU aggregate.",
        notAllowed: "Jurisdiction-withheld posts after a valid order.",
        stillAllowed: "X is available nationwide. No IT For You filter is published.",
        legalBasis: "DSA; Italian criminal law",
        source: "X Transparency Center (EU aggregate)",
        sourceUrl: "https://transparency.x.com/en",
        verified: true,
      },
    ],
    snapshot: "Available. EU illegal-content rules apply; no open-source filter.",
  }),
  country({
    code: "NL",
    name: "Netherlands",
    region: "europe",
    access: "available",
    demand: "low",
    inEuAggregate: true,
    restrictions: [
      {
        id: "nl-dsa",
        kind: "legal-demand",
        title: "DSA member-state duties",
        summary: "Covered by the EU aggregate. No Netherlands-specific ranking filter.",
        notAllowed: "Content X withholds after a valid NL/EU order.",
        stillAllowed: "Service available. Most speech is not pre-filtered in For You by a government list.",
        legalBasis: "DSA",
        source: "X Transparency Report, H2 2024 (EU row)",
        sourceUrl: "https://transparency.x.com/en/reports/global-reports/2025-transparency-report",
        verified: true,
      },
    ],
    snapshot: "Open access. No published national algorithm filter.",
  }),
  country({
    code: "IE",
    name: "Ireland",
    region: "europe",
    access: "available",
    demand: "low",
    inEuAggregate: true,
    restrictions: [
      {
        id: "ie-dsa",
        kind: "legal-demand",
        title: "DSA coordinating authority",
        summary:
          "Ireland hosts X’s EU establishment and the DSA Digital Services Coordinator relationship. That is a regulatory seat, not a published ranking filter.",
        notAllowed: "Content removed or withheld under valid EU/Irish process.",
        stillAllowed: "X is available. No IE For You filter in the public repo.",
        legalBasis: "DSA",
        source: "X Transparency Center",
        sourceUrl: "https://transparency.x.com/en",
        verified: true,
      },
    ],
    snapshot: "Available. Regulatory home for X in the EU, not a block.",
  }),
  country({
    code: "PL",
    name: "Poland",
    region: "europe",
    access: "available",
    demand: "low",
    inEuAggregate: true,
    restrictions: [
      {
        id: "pl-dsa",
        kind: "legal-demand",
        title: "DSA member-state orders",
        summary: "Included in the EU aggregate. No Poland-specific algorithm filter.",
        notAllowed: "Items withheld after a valid PL/EU order.",
        stillAllowed: "Full access. No published ranking filter.",
        legalBasis: "DSA",
        source: "X Transparency Report, H2 2024 (EU row)",
        sourceUrl: "https://transparency.x.com/en/reports/global-reports/2025-transparency-report",
        verified: true,
      },
    ],
    snapshot: "Open access under the EU DSA umbrella.",
  }),
  country({
    code: "SE",
    name: "Sweden",
    region: "europe",
    access: "available",
    demand: "low",
    inEuAggregate: true,
    restrictions: [],
    snapshot: "Available. No open-source filter. Volume is inside the EU aggregate.",
  }),
  country({
    code: "CA",
    name: "Canada",
    region: "americas",
    access: "available",
    demand: "low",
    restrictions: [
      {
        id: "ca-open",
        kind: "legal-demand",
        title: "Case-by-case legal process — no ranking filter",
        summary:
          "X is fully available in Canada. There is no Canada entry in the open-source For You filters. Historic transparency reports list Canada among countries where X has used Country Withheld Content after a valid legal demand. The live fight is not a federal ranking statute — it is a B.C. court petition over whether an intimate-image order must delete a post worldwide.",
        notAllowed:
          "A post can be withheld for Canadian viewers after a legally sufficient order (court, CRT, or elections commissioner). B.C.’s Intimate Images Protection Act requires deletion, not merely a Canada geo-block — that reading is being tested in the B.C. Supreme Court. Global X Rules still apply.",
        stillAllowed:
          "Ordinary political speech. No TSE-style candidate ranking filter. Bill C-63 (Online Harms Act) died in January 2025 and does not bind X. Geo-blocking versus global deletion is the open legal question, not a national block.",
        legalBasis:
          "Charter s. 2(b); Criminal Code; B.C. Intimate Images Protection Act; Canada Elections Act; PIPEDA",
        source: "Compiled docket · August 2026",
        sourceUrl: "https://news.gov.bc.ca/releases/2025AG0066-001118",
        verified: true,
      },
    ],
    snapshot:
      "Open access. No ranking filter. A B.C. Supreme Court petition over a global takedown order is the live speech-adjacent file; C-63 is not law.",
  }),
  country({
    code: "AU",
    name: "Australia",
    region: "asia-pacific",
    access: "available",
    demand: "moderate",
    restrictions: [
      {
        id: "au-esafety",
        kind: "legal-demand",
        title: "eSafety Commissioner orders",
        summary:
          "Australia’s eSafety Commissioner has issued removal notices (including a high-profile 2024 fight X contested). The service stayed up. No AU filter is in the public algorithm.",
        notAllowed: "Specific items covered by notices X complied with.",
        stillAllowed:
          "Nationwide access. X has publicly challenged some notices rather than applying a silent global filter.",
        legalBasis: "Online Safety Act 2021",
        source: "X Transparency Center / public litigation record",
        sourceUrl: "https://transparency.x.com/en",
        verified: true,
      },
    ],
    snapshot: "Available. Regulator can demand takedowns; there is no published ranking filter.",
  }),
  country({
    code: "NZ",
    name: "New Zealand",
    region: "asia-pacific",
    access: "available",
    demand: "low",
    restrictions: [],
    snapshot: "Available. No published algorithm filter; not a named top requester.",
  }),
  country({
    code: "MX",
    name: "Mexico",
    region: "americas",
    access: "available",
    demand: "low",
    restrictions: [],
    snapshot: "Available. No open-source government filter. Volume in “All others.”",
  }),
  country({
    code: "AR",
    name: "Argentina",
    region: "americas",
    access: "available",
    demand: "low",
    restrictions: [],
    snapshot: "Available. No published ranking filter.",
  }),
  country({
    code: "CL",
    name: "Chile",
    region: "americas",
    access: "available",
    demand: "low",
    restrictions: [],
    snapshot: "Available. No published ranking filter.",
  }),
  country({
    code: "CO",
    name: "Colombia",
    region: "americas",
    access: "available",
    demand: "low",
    restrictions: [],
    snapshot: "Available. No published ranking filter.",
  }),
  country({
    code: "PE",
    name: "Peru",
    region: "americas",
    access: "available",
    demand: "low",
    restrictions: [],
    snapshot: "Available. No published ranking filter.",
  }),
  country({
    code: "VE",
    name: "Venezuela",
    region: "americas",
    access: "available",
    demand: "low",
    restrictions: [
      {
        id: "ve-block-lifted",
        kind: "intermittent",
        title: "Nationwide block (lifted January 2026)",
        summary:
          "Venezuela blocked X from August 2024 through 13 January 2026 amid protest-related speech claims. The block is reported lifted.",
        notAllowed: "The entire service was unreachable during the block.",
        stillAllowed: "Access has been restored. No VE filter is in the public algorithm.",
        since: "8 August 2024 – 13 January 2026",
        source: "Public reporting / Censorship of X",
        sourceUrl: "https://en.wikipedia.org/wiki/Censorship_of_X",
        verified: true,
      },
    ],
    snapshot: "Access restored in 2026 after a 17-month national block.",
  }),
  country({
    code: "CN",
    name: "China",
    region: "asia-pacific",
    access: "blocked",
    demand: "unbroken",
    restrictions: [
      {
        id: "cn-gfw",
        kind: "national-block",
        title: "Great Firewall block",
        summary:
          "X has been blocked in the PRC since 2009. This is a network-level ban, not a ranking filter inside X.",
        notAllowed: "The entire service is inaccessible on ordinary Chinese networks.",
        stillAllowed:
          "Some users reach X via unauthorized circumvention. Chinese diplomats and state media operate accounts from outside the block.",
        since: "2009",
        legalBasis: "PRC internet-control regime",
        source: "Public record",
        sourceUrl: "https://en.wikipedia.org/wiki/Censorship_of_X",
        verified: true,
      },
    ],
    snapshot: "Nationally blocked. There is nothing to recommend or withhold because the site does not load.",
  }),
  country({
    code: "IR",
    name: "Iran",
    region: "mena",
    access: "blocked",
    demand: "unbroken",
    restrictions: [
      {
        id: "ir-block",
        kind: "national-block",
        title: "Nationwide block",
        summary: "Blocked since the 2009 election protests. Access is typically VPN-only.",
        notAllowed: "Ordinary Iranian networks cannot reach X.",
        stillAllowed: "Circumvention tools are widely used; they are not an X product.",
        since: "2009",
        source: "Public record",
        sourceUrl: "https://en.wikipedia.org/wiki/Censorship_of_X",
        verified: true,
      },
    ],
    snapshot: "Blocked at the network layer since 2009.",
  }),
  country({
    code: "KP",
    name: "North Korea",
    region: "asia-pacific",
    access: "blocked",
    demand: "unbroken",
    restrictions: [
      {
        id: "kp-block",
        kind: "national-block",
        title: "Total information blockade",
        summary: "Unauthorized internet access, including X, is prohibited.",
        notAllowed: "X is not available on sanctioned domestic networks.",
        stillAllowed: "Nothing for ordinary residents.",
        since: "2016 (reported)",
        source: "Public record",
        sourceUrl: "https://en.wikipedia.org/wiki/Censorship_of_X",
        verified: true,
      },
    ],
    snapshot: "Blocked. Not an X-side filter — a national information ban.",
  }),
  country({
    code: "RU",
    name: "Russia",
    region: "europe",
    access: "blocked",
    demand: "high",
    restrictions: [
      {
        id: "ru-block",
        kind: "national-block",
        title: "Roskomnadzor restriction (2022–)",
        summary:
          "Russia throttled then blocked X around the February 2022 invasion of Ukraine. Historically Russia was a top legal-demand country; the live control is now a network block, with VPN workarounds.",
        notAllowed: "Direct access from ordinary Russian ISPs.",
        stillAllowed: "VPN access is widely reported. Accounts still exist and can be viewed from outside Russia.",
        since: "February–March 2022",
        legalBasis: "Roskomnadzor restriction orders",
        source: "Public record",
        sourceUrl: "https://en.wikipedia.org/wiki/Censorship_of_X",
        verified: true,
      },
    ],
    snapshot: "Blocked on domestic networks. Older transparency rows still show heavy legal-demand history.",
  }),
  country({
    code: "MM",
    name: "Myanmar",
    region: "asia-pacific",
    access: "blocked",
    demand: "unbroken",
    restrictions: [
      {
        id: "mm-block",
        kind: "national-block",
        title: "Junta block after the 2021 coup",
        summary: "Twitter/X was ordered blocked on 5 February 2021 and remains blocked.",
        notAllowed: "Nationwide access on ordinary connections.",
        stillAllowed: "Circumvention only.",
        since: "5 February 2021",
        source: "Public record",
        sourceUrl: "https://en.wikipedia.org/wiki/Censorship_of_X",
        verified: true,
      },
    ],
    snapshot: "Blocked since the 2021 coup.",
  }),
  country({
    code: "TM",
    name: "Turkmenistan",
    region: "asia-pacific",
    access: "blocked",
    demand: "unbroken",
    restrictions: [
      {
        id: "tm-block",
        kind: "national-block",
        title: "Foreign social-network block",
        summary: "Foreign social networks including X are generally inaccessible.",
        notAllowed: "Ordinary access to X.",
        stillAllowed: "Nothing on sanctioned domestic networks.",
        source: "Public record",
        sourceUrl: "https://en.wikipedia.org/wiki/Censorship_of_X",
        verified: true,
      },
    ],
    snapshot: "Blocked as part of a near-total social-media ban.",
  }),
  country({
    code: "PK",
    name: "Pakistan",
    region: "asia-pacific",
    access: "restricted",
    demand: "moderate",
    restrictions: [
      {
        id: "pk-intermittent",
        kind: "intermittent",
        title: "Intermittent national blocks",
        summary:
          "Pakistan blocked X in February 2024 ahead of elections. Access was reported restored on 7 May 2025. Blocks can return; PECA remains a takedown tool.",
        notAllowed: "During block windows, the entire service. Between blocks, PECA-ordered items X actioned.",
        stillAllowed: "Access is reported restored as of mid-2025. No PK algorithm filter is published.",
        since: "February 2024 – 7 May 2025 (latest long block)",
        legalBasis: "PECA; PTA directions",
        source: "Public record",
        sourceUrl: "https://en.wikipedia.org/wiki/Censorship_of_X",
        verified: true,
      },
    ],
    snapshot: "Access is back, but the recent multi-month block is the live context.",
  }),
  country({
    code: "AE",
    name: "United Arab Emirates",
    region: "mena",
    access: "available",
    demand: "moderate",
    restrictions: [
      {
        id: "ae-local-law",
        kind: "withhold",
        title: "Local-law withholdings",
        summary:
          "UAE has used batch legal reports. X can withhold accounts or posts for UAE viewers rather than delete them globally.",
        notAllowed: "Content withheld inside the UAE after a valid local-law demand.",
        stillAllowed: "The same items may remain visible outside the UAE. X itself is not blocked.",
        legalBasis: "UAE cybercrime / content law",
        source: "X Transparency Center (historic country examples)",
        sourceUrl: "https://transparency.x.com/en/reports/removal-requests",
        verified: true,
      },
    ],
    snapshot: "Accessible, with jurisdiction-scoped withholdings.",
  }),
  country({
    code: "SA",
    name: "Saudi Arabia",
    region: "mena",
    access: "available",
    demand: "moderate",
    restrictions: [
      {
        id: "sa-local-law",
        kind: "withhold",
        title: "Local-law withholdings",
        summary:
          "Saudi authorities issue legal demands; X may withhold for that jurisdiction. Not a published ranking filter.",
        notAllowed: "Items withheld for Saudi viewers after a valid order.",
        stillAllowed: "Service is reachable. Global visibility can differ from in-country visibility.",
        legalBasis: "Saudi cybercrime and media law",
        source: "X Transparency Center",
        sourceUrl: "https://transparency.x.com/en",
        verified: true,
      },
    ],
    snapshot: "Available, with local-law withholdings that are not individually listed in public.",
  }),
  country({
    code: "QA",
    name: "Qatar",
    region: "mena",
    access: "available",
    demand: "low",
    restrictions: [],
    snapshot: "Available. No published ranking filter.",
  }),
  country({
    code: "IL",
    name: "Israel",
    region: "mena",
    access: "available",
    demand: "moderate",
    restrictions: [
      {
        id: "il-orders",
        kind: "legal-demand",
        title: "Court and emergency orders",
        summary:
          "Israel issues legal demands; wartime emergency orders have been reported. Not broken out as a named H2 2024 removal row.",
        notAllowed: "Items X actioned after a valid Israeli order.",
        stillAllowed: "X is available. No IL algorithm filter is in the public repo.",
        legalBasis: "Israeli court / emergency process",
        source: "X Transparency Center",
        sourceUrl: "https://transparency.x.com/en",
        verified: true,
      },
    ],
    snapshot: "Available. Demands exist; they are not an open-source ranking filter.",
  }),
  country({
    code: "UA",
    name: "Ukraine",
    region: "europe",
    access: "available",
    demand: "low",
    restrictions: [],
    snapshot: "Available. No published ranking filter.",
  }),
  country({
    code: "TW",
    name: "Taiwan",
    region: "asia-pacific",
    access: "available",
    demand: "low",
    restrictions: [],
    snapshot: "Available. Historic isolated withholdings; no ranking filter.",
  }),
  country({
    code: "HK",
    name: "Hong Kong",
    region: "asia-pacific",
    access: "available",
    demand: "low",
    restrictions: [
      {
        id: "hk-ns",
        kind: "legal-demand",
        title: "National-security legal process",
        summary:
          "Hong Kong’s national-security law can generate takedown or account demands. X is not blocked the way it is on the mainland.",
        notAllowed: "Items X actioned after a valid HK order.",
        stillAllowed: "The site loads. No HK For You filter is published.",
        legalBasis: "Hong Kong National Security Law",
        source: "Public record",
        sourceUrl: "https://transparency.x.com/en",
        verified: true,
      },
    ],
    snapshot: "Accessible, unlike mainland China. Legal-demand risk is the live constraint.",
  }),
  country({
    code: "SG",
    name: "Singapore",
    region: "asia-pacific",
    access: "available",
    demand: "low",
    restrictions: [
      {
        id: "sg-pofma",
        kind: "legal-demand",
        title: "POFMA correction / takedown powers",
        summary:
          "Singapore can order corrections or disablement under POFMA. That is not a published For You filter.",
        notAllowed: "Specified posts subject to a POFMA direction X complies with.",
        stillAllowed: "X is available. Unaffected speech stays up.",
        legalBasis: "Protection from Online Falsehoods and Manipulation Act",
        source: "Public statute / X Transparency Center",
        sourceUrl: "https://transparency.x.com/en",
        verified: true,
      },
    ],
    snapshot: "Available. Targeted statutory orders, not a ranking blocklist.",
  }),
  country({
    code: "MY",
    name: "Malaysia",
    region: "asia-pacific",
    access: "available",
    demand: "low",
    restrictions: [],
    snapshot: "Available. No published ranking filter.",
  }),
  country({
    code: "ID",
    name: "Indonesia",
    region: "asia-pacific",
    access: "available",
    demand: "moderate",
    restrictions: [
      {
        id: "id-kominfo",
        kind: "legal-demand",
        title: "Kominfo takedown orders",
        summary:
          "Indonesia’s communications ministry issues content orders. X is available; there is no ID filter in the public algorithm.",
        notAllowed: "URLs/accounts X actioned after a valid Kominfo order.",
        stillAllowed: "Nationwide access. Unactioned speech stays up.",
        legalBasis: "ITE Law / Kominfo regulations",
        source: "X Transparency Center",
        sourceUrl: "https://transparency.x.com/en",
        verified: true,
      },
    ],
    snapshot: "Available, with a ministry-order regime.",
  }),
  country({
    code: "TH",
    name: "Thailand",
    region: "asia-pacific",
    access: "available",
    demand: "moderate",
    restrictions: [
      {
        id: "th-lèse",
        kind: "legal-demand",
        title: "Lèse-majesté and Computer Crime Act orders",
        summary:
          "Thai courts and agencies regularly seek removal of royal-insult and other Computer Crime Act content.",
        notAllowed: "Items X withholds or removes after a valid Thai order.",
        stillAllowed: "X is available. No TH ranking filter is published.",
        legalBasis: "Criminal Code §112; Computer Crime Act",
        source: "X Transparency Center",
        sourceUrl: "https://transparency.x.com/en",
        verified: true,
      },
    ],
    snapshot: "Available. Local-law withholdings, especially lèse-majesté, are the constraint.",
  }),
  country({
    code: "VN",
    name: "Vietnam",
    region: "asia-pacific",
    access: "available",
    demand: "moderate",
    restrictions: [
      {
        id: "vn-local",
        kind: "legal-demand",
        title: "Local cybersecurity orders",
        summary: "Vietnam issues takedown demands under cybersecurity and press rules. X is not nationally blocked.",
        notAllowed: "Items X actioned after a valid Vietnamese order.",
        stillAllowed: "Service available. No VN For You filter in the public repo.",
        legalBasis: "Cybersecurity Law",
        source: "X Transparency Center",
        sourceUrl: "https://transparency.x.com/en",
        verified: true,
      },
    ],
    snapshot: "Available, with a state takedown regime.",
  }),
  country({
    code: "PH",
    name: "Philippines",
    region: "asia-pacific",
    access: "available",
    demand: "low",
    restrictions: [],
    snapshot: "Available. No published ranking filter.",
  }),
  country({
    code: "ZA",
    name: "South Africa",
    region: "africa",
    access: "available",
    demand: "low",
    restrictions: [],
    snapshot: "Available. No published ranking filter.",
  }),
  country({
    code: "NG",
    name: "Nigeria",
    region: "africa",
    access: "available",
    demand: "low",
    restrictions: [
      {
        id: "ng-2021-block",
        kind: "intermittent",
        title: "Nationwide block (lifted 2022)",
        summary:
          "Nigeria blocked Twitter from 5 June 2021 to 13 January 2022 after the platform removed a presidential post. Access has been restored.",
        notAllowed: "The entire service during the 2021–22 block.",
        stillAllowed: "X is available today. No NG algorithm filter is published.",
        since: "5 June 2021 – 13 January 2022",
        source: "Public record",
        sourceUrl: "https://en.wikipedia.org/wiki/Censorship_of_X",
        verified: true,
      },
    ],
    snapshot: "Available. The 2021 national block is historical, not current.",
  }),
  country({
    code: "EG",
    name: "Egypt",
    region: "mena",
    access: "available",
    demand: "low",
    restrictions: [],
    snapshot: "Available. Not in the current blocked set. No published ranking filter.",
  }),
  country({
    code: "KE",
    name: "Kenya",
    region: "africa",
    access: "available",
    demand: "low",
    restrictions: [],
    snapshot: "Available. No published ranking filter.",
  }),
  country({
    code: "GH",
    name: "Ghana",
    region: "africa",
    access: "available",
    demand: "low",
    restrictions: [],
    snapshot: "Available. First appeared as a legal-demand country in an earlier transparency cycle.",
  }),
  country({
    code: "AT",
    name: "Austria",
    region: "europe",
    access: "available",
    demand: "low",
    inEuAggregate: true,
    restrictions: [],
    snapshot: "Available. EU DSA applies. No published ranking filter.",
  }),
  country({
    code: "BE",
    name: "Belgium",
    region: "europe",
    access: "available",
    demand: "low",
    inEuAggregate: true,
    restrictions: [],
    snapshot: "Available. EU DSA applies. No published ranking filter.",
  }),
  country({
    code: "PT",
    name: "Portugal",
    region: "europe",
    access: "available",
    demand: "low",
    inEuAggregate: true,
    restrictions: [],
    snapshot: "Available. EU DSA applies. No published ranking filter.",
  }),
  country({
    code: "GR",
    name: "Greece",
    region: "europe",
    access: "available",
    demand: "low",
    inEuAggregate: true,
    restrictions: [],
    snapshot: "Available. EU DSA applies. No published ranking filter.",
  }),
  country({
    code: "FI",
    name: "Finland",
    region: "europe",
    access: "available",
    demand: "low",
    inEuAggregate: true,
    restrictions: [],
    snapshot: "Available. EU DSA applies. No published ranking filter.",
  }),
  country({
    code: "DK",
    name: "Denmark",
    region: "europe",
    access: "available",
    demand: "low",
    inEuAggregate: true,
    restrictions: [],
    snapshot: "Available. EU DSA applies. No published ranking filter.",
  }),
  country({
    code: "NO",
    name: "Norway",
    region: "europe",
    access: "available",
    demand: "low",
    restrictions: [],
    snapshot: "Available. Not in the EU row. No published ranking filter.",
  }),
  country({
    code: "CH",
    name: "Switzerland",
    region: "europe",
    access: "available",
    demand: "low",
    restrictions: [],
    snapshot: "Available. No published ranking filter.",
  }),
  country({
    code: "CZ",
    name: "Czechia",
    region: "europe",
    access: "available",
    demand: "low",
    inEuAggregate: true,
    restrictions: [],
    snapshot: "Available. EU DSA applies. No published ranking filter.",
  }),
  country({
    code: "RO",
    name: "Romania",
    region: "europe",
    access: "available",
    demand: "low",
    inEuAggregate: true,
    restrictions: [],
    snapshot: "Available. EU DSA applies. No published ranking filter.",
  }),
  country({
    code: "HU",
    name: "Hungary",
    region: "europe",
    access: "available",
    demand: "low",
    inEuAggregate: true,
    restrictions: [],
    snapshot: "Available. EU DSA applies. No published ranking filter.",
  }),
];

export const COUNTRY_LIST: Country[] = COUNTRIES.filter((c) => c.code && c.name);

export const REGIONS: { id: Region | "all"; label: string }[] = [
  { id: "all", label: "All regions" },
  { id: "americas", label: "Americas" },
  { id: "europe", label: "Europe" },
  { id: "mena", label: "Middle East" },
  { id: "africa", label: "Africa" },
  { id: "asia-pacific", label: "Asia-Pacific" },
];

export function getCountry(code: string): Country | undefined {
  return COUNTRY_LIST.find((c) => c.code.toLowerCase() === code.toLowerCase());
}

export type AtlasStatus = "blocked" | "filter" | "restricted" | "demand" | "open";

export function atlasStatus(c: Country): AtlasStatus {
  if (c.access === "blocked") return "blocked";
  if (c.restrictions.some((r) => r.kind === "algorithm")) return "filter";
  if (c.access === "restricted") return "restricted";
  if (c.demand === "extreme" || c.demand === "high") return "demand";
  if (c.restrictions.some((r) => r.kind === "withhold" || r.kind === "intermittent")) {
    return "restricted";
  }
  return "open";
}

export const STATUS_META: Record<
  AtlasStatus,
  { label: string; short: string; tone: "blocked" | "filter" | "warn" | "demand" | "open" }
> = {
  blocked: { label: "Nationally blocked", short: "Blocked", tone: "blocked" },
  filter: { label: "Open-source government filter", short: "Filter", tone: "filter" },
  restricted: { label: "Restricted or withheld", short: "Restricted", tone: "warn" },
  demand: { label: "High government demand", short: "High demand", tone: "demand" },
  open: { label: "No published restriction", short: "Open", tone: "open" },
};

export function countryMatchesQuery(c: Country, q: string): boolean {
  if (!q.trim()) return true;
  const n = q.trim().toLowerCase();
  return c.name.toLowerCase().includes(n) || c.code.toLowerCase().includes(n);
}

export function guessLocalCountry(): string | null {
  if (typeof navigator === "undefined") return null;
  const loc = navigator.language || "";
  const parts = loc.split("-");
  const region = parts[1];
  if (region && getCountry(region)) return region.toUpperCase();
  return null;
}
