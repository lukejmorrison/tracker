//#region node_modules/.nitro/vite/services/ssr/assets/filters-M1K64594.js
var REPORT_PERIOD = "July–December 2024";
var AS_OF = "15 August 2026";
var GLOBAL_STATS = {
	removalRequests: 97006,
	removalActioned: 79438,
	removalRate: 81.89,
	infoRequests: 20925,
	infoDisclosed: 10581,
	infoRate: 50.57,
	countriesEverDemanding: 95,
	openSourceFilters: 1,
	blockedCountries: 6
};
var BRAZIL_FILTER = {
	id: "brazil-2026-election",
	name: "Brazil2026ElectionFilter",
	countryCode: "BR",
	countryName: "Brazil",
	added: "14 August 2026",
	accounts: 665,
	scope: "For You recommendations only. Posts from listed accounts are dropped from the recommendation pipeline.",
	exception: "Viewers who already follow the account still see those posts. Paid boosting is carved out in the cited electoral-law text.",
	legalBasis: "Brazilian electoral law — application providers that use a recommendation system must exclude channels and profiles reported to the Electoral Court (TSE), except paid boosting.",
	sourcePath: "home-mixer/filters/brazil_2026_election_filter.rs",
	sourceUrl: "https://github.com/xai-org/x-algorithm/blob/main/home-mixer/filters/brazil_2026_election_filter.rs",
	announcementUrl: "https://x.com/XBR/status/2088341967864320507",
	summary: "The only government-required filter currently published in the open-source For You algorithm. It removes posts from about 665 TSE-listed 2026 candidate accounts unless the viewer follows them. It is not a site-wide ban and is not a public list of every withheld post.",
	sampleAccounts: [
		{ handle: "cirogomes" },
		{ handle: "geraldoalckmin" },
		{ handle: "FlavioBolsonaro" },
		{ handle: "CarlosBolsonaro" },
		{ handle: "eduardopaes" },
		{ handle: "ManuelaDavila" },
		{ handle: "HenriqueFontana" },
		{ handle: "ciro_nogueira" },
		{ handle: "AlicePortugal" },
		{ handle: "RicardoBarrosPP" },
		{ handle: "andrekamai" },
		{ handle: "costa_rui" },
		{ handle: "alexandrekalil" },
		{ handle: "marcelvanhattem" },
		{ handle: "BohnGass" },
		{ handle: "Sen_Cristovam" },
		{ handle: "pedro_lupion" },
		{ handle: "renildo" },
		{ handle: "DepArthurMaia" },
		{ handle: "zeca_dirceu" }
	]
};
var WHAT_WE_CAN_SEE = [
	{
		title: "Open-source algorithm filters",
		body: "Government-required ranking filters shipped in xai-org/x-algorithm. Today that is one filter: Brazil2026ElectionFilter."
	},
	{
		title: "Aggregate government demands",
		body: "X Transparency Reports publish removal and information-request volume by country or region, plus action rates."
	},
	{
		title: "National access blocks",
		body: "Some governments block the entire service at the network layer. That is visible from outside the platform."
	}
];
var WHAT_WE_CANNOT_SEE = [
	{
		title: "A public list of every withheld post",
		body: "Individual country withholdings only show a notice when the post is opened from that jurisdiction. There is still no single public catalog of those posts."
	},
	{
		title: "Exact live account lists beyond the filter file",
		body: "The Brazil filter publishes obfuscated user ids plus handles. Other withholdings are not enumerated in the algorithm repo."
	},
	{
		title: "Per-country EU and “all others” splits",
		body: "The latest global report rolls the EU into one row and lumps most remaining countries into “All others.”"
	}
];
//#endregion
export { WHAT_WE_CANNOT_SEE as a, REPORT_PERIOD as i, BRAZIL_FILTER as n, WHAT_WE_CAN_SEE as o, GLOBAL_STATS as r, AS_OF as t };
