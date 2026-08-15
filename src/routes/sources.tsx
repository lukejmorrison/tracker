import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import {
  AS_OF,
  GLOBAL_STATS,
  REPORT_PERIOD,
  WHAT_WE_CANNOT_SEE,
  WHAT_WE_CAN_SEE,
} from "@/data";
import { formatInt, formatPct } from "@/lib/utils";
import { pageTitle } from "@/lib/brand";

export const Route = createFileRoute("/sources")({
  head: () => ({ meta: [{ title: pageTitle("Sources") }] }),
  component: SourcesPage,
});

const LINKS = [
  {
    title: "xai-org/x-algorithm",
    href: "https://github.com/xai-org/x-algorithm",
    note: "Open-source For You pipeline, including Brazil2026ElectionFilter.",
  },
  {
    title: "Brazil2026ElectionFilter.rs",
    href: "https://github.com/xai-org/x-algorithm/blob/main/home-mixer/filters/brazil_2026_election_filter.rs",
    note: "The only government-required ranking filter in the public repo as of this compilation.",
  },
  {
    title: "X Transparency Report (H2 2024)",
    href: "https://transparency.x.com/en/reports/global-reports/2025-transparency-report",
    note: "Named removal and information-request rows used for Japan, Turkey, South Korea, EU, US, UK.",
  },
  {
    title: "Removal requests",
    href: "https://transparency.x.com/en/reports/removal-requests",
    note: "Japan’s 96% crime-ad split, CWC country list, and historic withholding examples.",
  },
  {
    title: "Information requests",
    href: "https://transparency.x.com/en/reports/information-requests",
    note: "US, Japan, EU, and UK information-request rows.",
  },
  {
    title: "X UK Online Safety page",
    href: "https://help.x.com/en/rules-and-policies/uk-resources",
    note: "X’s own list of 19 illegal-content and 7 child-harmful categories geo-restricted in the UK.",
  },
  {
    title: "Ofcom investigation into X (Grok imagery)",
    href: "https://www.ofcom.org.uk/online-safety/illegal-and-harmful-content/investigation-into-x-and-scope-of-the-online-safety-act",
    note: "Formal investigation opened 12 January 2026; status update 3 February 2026. No findings yet.",
  },
  {
    title: "ICO investigation into Grok",
    href: "https://ico.org.uk/about-the-ico/media-centre/news-and-blogs/2026/02/ico-announces-investigation-into-grok/",
    note: "Parallel UK data-protection file, opened 3 February 2026.",
  },
  {
    title: "Japan IDPA (情プラ法) compliance report",
    href: "https://transparency.x.com/en/reports/japan-idpa-compliance-report",
    note: "X’s Article 28 report after MIC designated it a large specified provider on 30 April 2025.",
  },
  {
    title: "India IT Rules reports",
    href: "https://transparency.x.com/en/reports/countries/in",
    note: "Monthly statutory reports — India is not a named H2 2024 global-removal row.",
  },
  {
    title: "TSE open data, 2026 candidates",
    href: "https://dadosabertos.tse.jus.br/dataset/candidatos-2026",
    note: "Dataset cited in the filter source as the electoral-court list.",
  },
  {
    title: "B.C. AG statement on X / Intimate Images Protection Act",
    href: "https://news.gov.bc.ca/releases/2025AG0066-001118",
    note: "X’s November 2025 B.C. Supreme Court petition of a CRT global-takedown order.",
  },
  {
    title: "OPC PIPEDA-2026-004",
    href: "https://www.priv.gc.ca/en/opc-actions-and-decisions/investigations/investigations-into-businesses/2026/pipeda-2026-004/",
    note: "Privacy Commissioner findings on X/xAI Grok image generation (11 June 2026).",
  },
  {
    title: "eSafety legal proceedings involving X",
    href: "https://www.esafety.gov.au/industry/legal-proceedings-involving-esafety",
    note: "Australian Federal Court docket index for X Corp matters.",
  },
];

function SourcesPage() {
  return (
    <div className="flex flex-col gap-10">
      <header className="max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-widest text-muted">
          Methodology · compiled {AS_OF}
        </p>
        <h1 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl">
          What this tracker can see
        </h1>
        <p className="mt-4 text-base text-muted">
          Compiled from public algorithm source, X’s transparency tables, and named
          court or regulator files. {formatInt(GLOBAL_STATS.removalRequests)}{" "}
          removal requests in {REPORT_PERIOD}, {formatPct(GLOBAL_STATS.removalRate)}{" "}
          actioned. Individual withheld posts are still not in any public catalog.
        </p>
      </header>

      <section className="grid gap-4 md:grid-cols-2">
        <div>
          <h2 className="font-display text-2xl tracking-tight">In public</h2>
          <ul className="mt-4 flex flex-col gap-4">
            {WHAT_WE_CAN_SEE.map((item) => (
              <li key={item.title} className="rounded-xl border border-border bg-surface px-4 py-4">
                <p className="font-medium text-fg">{item.title}</p>
                <p className="mt-1 text-sm text-muted">{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-display text-2xl tracking-tight">Still invisible</h2>
          <ul className="mt-4 flex flex-col gap-4">
            {WHAT_WE_CANNOT_SEE.map((item) => (
              <li key={item.title} className="rounded-xl border border-border bg-surface px-4 py-4">
                <p className="font-medium text-fg">{item.title}</p>
                <p className="mt-1 text-sm text-muted">{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section>
        <h2 className="font-display text-2xl tracking-tight">Primary sources</h2>
        <ul className="mt-4 flex flex-col gap-2">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-start justify-between gap-4 rounded-xl border border-border bg-surface px-4 py-3 hover:border-line"
              >
                <span>
                  <span className="text-sm font-medium text-fg">{link.title}</span>
                  <span className="mt-1 block text-sm text-muted">{link.note}</span>
                </span>
                <ExternalLink className="mt-0.5 size-3.5 shrink-0 text-muted" />
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="font-display text-2xl tracking-tight">Background, not a citation</h2>
        <p className="mt-2 max-w-2xl text-sm text-muted">
          Useful as a timeline index. Not a primary source for any row in this atlas.
        </p>
        <a
          href="https://en.wikipedia.org/wiki/Censorship_of_X"
          target="_blank"
          rel="noreferrer"
          className="mt-4 flex items-start justify-between gap-4 rounded-xl border border-border bg-surface px-4 py-3 hover:border-line"
        >
          <span>
            <span className="text-sm font-medium text-fg">Censorship of X (encyclopedia)</span>
            <span className="mt-1 block text-sm text-muted">
              National-block timeline. Use the court or agency record before this page.
            </span>
          </span>
          <ExternalLink className="mt-0.5 size-3.5 shrink-0 text-muted" />
        </a>
      </section>
    </div>
  );
}
