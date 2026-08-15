import { createFileRoute, Link } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { BRAZIL_FILTER } from "@/data";
import { pageTitle } from "@/lib/brand";

export const Route = createFileRoute("/filters")({
  head: () => ({ meta: [{ title: pageTitle("Filters") }] }),
  component: FiltersPage,
});

function FiltersPage() {
  const filter = BRAZIL_FILTER;

  return (
    <div className="flex flex-col gap-10">
      <header className="max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-widest text-subtle">
          Open-source algorithm
        </p>
        <h1 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl">
          Government filters in For You
        </h1>
        <p className="mt-4 text-base text-muted">
          The For You pipeline now ships government-required ranking filters in
          public source. Today there is one. If another government forces a
          similar rule, it should appear here the same way — named, scoped, and
          readable.
        </p>
      </header>

      <article className="rounded-xl border border-border bg-surface p-5 sm:p-7">
        <div className="flex flex-wrap items-center gap-2">
          <Badge tone="filter">Live</Badge>
          <Badge>Verified in repo</Badge>
          <span className="font-mono text-xs text-subtle">Added {filter.added}</span>
        </div>
        <h2 className="mt-4 font-display text-3xl tracking-tight">{filter.name}</h2>
        <p className="mt-3 max-w-2xl text-sm text-muted">{filter.summary}</p>

        <dl className="mt-6 grid gap-4 sm:grid-cols-2">
          <Fact label="Country" value={filter.countryName} />
          <Fact label="Accounts on the list" value={`~${filter.accounts}`} />
          <Fact label="Scope" value={filter.scope} />
          <Fact label="Exception" value={filter.exception} />
        </dl>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg bg-blocked-dim px-4 py-3">
            <p className="text-xs font-medium uppercase tracking-wider text-blocked">
              Not allowed
            </p>
            <p className="mt-1 text-sm text-fg">
              For You will not recommend posts from TSE-listed 2026 candidate
              accounts to people who do not already follow them.
            </p>
          </div>
          <div className="rounded-lg bg-open-dim px-4 py-3">
            <p className="text-xs font-medium uppercase tracking-wider text-open">
              Still allowed
            </p>
            <p className="mt-1 text-sm text-fg">
              Followers still see the posts. Following timelines, Search, profiles,
              and paid boosting sit outside this filter.
            </p>
          </div>
        </div>

        <p className="mt-5 text-sm text-muted">
          <span className="text-fg">Legal basis. </span>
          {filter.legalBasis}
        </p>
        <p className="mt-2 font-mono text-xs text-subtle">{filter.sourcePath}</p>
        <div className="mt-4 flex flex-wrap gap-3">
          <a
            href={filter.sourceUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-muted underline-offset-4 hover:text-fg hover:underline"
          >
            Read the filter
            <ExternalLink className="size-3.5" />
          </a>
          <a
            href={filter.announcementUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-muted underline-offset-4 hover:text-fg hover:underline"
          >
            X Brazil announcement
            <ExternalLink className="size-3.5" />
          </a>
          <Link
            to="/country/$code"
            params={{ code: "BR" }}
            className="text-sm text-muted underline-offset-4 hover:text-fg hover:underline"
          >
            Open Brazil in the atlas
          </Link>
        </div>
      </article>

      <section>
        <h2 className="font-display text-2xl tracking-tight">Sample listed handles</h2>
        <p className="mt-2 max-w-2xl text-sm text-muted">
          Handles copied from comments in the filter file. User ids in the repo
          are obfuscated; usernames were published for transparency. This is a
          sample, not the full ~665-account list.
        </p>
        <ul className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {filter.sampleAccounts.map((a) => (
            <li key={a.handle}>
              <a
                href={`https://x.com/${a.handle}`}
                target="_blank"
                rel="noreferrer"
                className="block rounded-lg border border-border bg-surface px-3 py-2 font-mono text-sm text-muted hover:border-line hover:text-fg"
              >
                @{a.handle}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="max-w-2xl">
        <h2 className="font-display text-2xl tracking-tight">How visibility works</h2>
        <p className="mt-3 text-sm text-muted">
          After ranking, visibility-filtering returns ALLOW, INTERSTITIAL, or
          DROP for each viewer and post. Rules can read labels, blocks, mutes,
          follows, account status, settings, and the viewer’s country. Some
          rules apply only to out-of-network recommendations — which is why
          following an account can restore posts the For You filter would drop.
        </p>
        <p className="mt-3 text-sm text-muted">
          Country withholdings are different: a post can stay online globally
          and only show a notice inside one jurisdiction. Those notices are not
          aggregated into a public post list yet.
        </p>
      </section>
    </div>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs uppercase tracking-wider text-subtle">{label}</dt>
      <dd className="mt-1 text-sm text-fg">{value}</dd>
    </div>
  );
}
