import { useMemo } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Bookmark, BookmarkCheck, ExternalLink } from "lucide-react";
import { Docket } from "@/components/docket";
import { LegalMenu } from "@/components/legal-menu";
import { RestrictionList } from "@/components/restriction-list";
import { StatusBadge } from "@/components/status-badge";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  COUNTRY_LIST,
  REPORT_PERIOD,
  atlasStatus,
  getCountry,
  isLiveStatus,
  menuFor,
  menuItemCount,
  proceedingsFor,
} from "@/data";
import { formatInt, formatPct } from "@/lib/utils";
import { useWatchlist } from "@/store/watchlist";

export const Route = createFileRoute("/country/$code")({
  component: CountryPage,
});

function CountryPage() {
  const { code } = Route.useParams();
  const country = getCountry(code);
  if (!country) {
    return (
      <div className="max-w-lg py-10">
        <h1 className="font-display text-3xl tracking-tight">Not in the atlas</h1>
        <p className="mt-3 text-sm text-muted">
          No compiled entry for <span className="font-mono text-fg">{code.toUpperCase()}</span>.
          The country may have no public filter, block, or named transparency row yet.
        </p>
        <Link
          to="/"
          className="mt-6 inline-block text-sm text-muted underline-offset-4 hover:text-fg hover:underline"
        >
          Back to all countries
        </Link>
      </div>
    );
  }

  const status = atlasStatus(country);
  const watched = useWatchlist((s) => s.codes.includes(country.code));
  const toggle = useWatchlist((s) => s.toggle);
  const docket = proceedingsFor(country.code);
  const liveCount = docket.filter((p) => isLiveStatus(p.status)).length;
  const tracks = menuFor(country.code);
  const named = menuItemCount(country.code);

  const peers = useMemo(() => {
    return COUNTRY_LIST.filter(
      (c) => c.region === country.region && c.code !== country.code,
    ).slice(0, 4);
  }, [country]);

  return (
    <div className="flex flex-col gap-8">
      <div>
        <Link
          to="/"
          className="text-sm text-muted underline-offset-4 hover:text-fg hover:underline"
        >
          All countries
        </Link>
        <div className="mt-4 flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-subtle">
              {country.code} · {country.region.replace("-", " ")}
            </p>
            <h1 className="mt-2 font-display text-4xl tracking-tight sm:text-5xl">
              {country.name}
            </h1>
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <StatusBadge country={country} />
              {country.inEuAggregate ? <Badge>Inside EU aggregate</Badge> : null}
              <Badge>
                Access {country.access === "available" ? "open" : country.access}
              </Badge>
              {country.cwcUsed ? <Badge tone="warn">CWC used here</Badge> : null}
              {named > 0 ? <Badge>{named} named duties</Badge> : null}
              {liveCount > 0 ? (
                <Badge tone="warn">
                  {liveCount} live {liveCount === 1 ? "proceeding" : "proceedings"}
                </Badge>
              ) : null}
            </div>
          </div>
          <Button
            variant="outline"
            onClick={() => toggle(country.code)}
            aria-pressed={watched}
          >
            {watched ? <BookmarkCheck /> : <Bookmark />}
            {watched ? "Watching" : "Watch"}
          </Button>
        </div>
        <p className="mt-5 max-w-2xl text-base text-muted">{country.snapshot}</p>
      </div>

      <section className="grid gap-3 sm:grid-cols-3">
        <Metric
          label="Access"
          value={
            country.access === "blocked"
              ? "Blocked"
              : country.access === "restricted"
                ? "Restricted"
                : "Available"
          }
          note="Can ordinary users load X?"
        />
        <Metric
          label="Removal requests"
          value={
            country.removal
              ? formatInt(country.removal.received)
              : country.inEuAggregate
                ? "EU row"
                : "Not broken out"
          }
          note={
            country.removal
              ? `${formatPct(country.removal.rate)} actioned · ${country.removal.period}`
              : country.inEuAggregate
                ? `EU total 3,831 · 90.42% · ${REPORT_PERIOD}`
                : `Folded into All others · ${REPORT_PERIOD}`
          }
        />
        <Metric
          label="Court & agency files"
          value={docket.length ? String(docket.length) : "None compiled"}
          note={
            liveCount
              ? `${liveCount} still live or unresolved`
              : docket.length
                ? "All compiled files are closed or not in force"
                : "No named public docket as of 15 August 2026"
          }
        />
      </section>

      {tracks.length > 0 ? (
        <section>
          <h2 className="font-display text-2xl tracking-tight">What is actually restricted</h2>
          <p className="mt-2 max-w-2xl text-sm text-muted">
            Named categories from X’s own country pages and statutory lists — not a live
            feed of every withheld post. Totals without a split are how most of the
            official report still reads.
          </p>
          <div className="mt-5">
            <LegalMenu tracks={tracks} />
          </div>
        </section>
      ) : null}

      {country.gap ? (
        <section className="rounded-xl border border-border bg-surface px-5 py-5">
          <h2 className="font-display text-xl tracking-tight">What is still not listed</h2>
          <p className="mt-2 text-sm text-muted">{country.gap}</p>
        </section>
      ) : null}

      <section>
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="font-display text-2xl tracking-tight">Court and agency docket</h2>
            <p className="mt-2 max-w-2xl text-sm text-muted">
              Named proceedings that were public as of 15 August 2026 — cases in
              court, regulator files that can go to court, and statutes that
              would create new takedown powers. This is not a live court feed.
              Each card shows the last public date we have.
            </p>
          </div>
          <Link
            to="/courts"
            className="text-sm text-muted underline-offset-4 hover:text-fg hover:underline"
          >
            All countries
          </Link>
        </div>
        <div className="mt-5">
          <Docket items={docket} countryName={country.name} />
        </div>
      </section>

      <section>
        <h2 className="font-display text-2xl tracking-tight">Allowed and not allowed</h2>
        <p className="mt-2 max-w-2xl text-sm text-muted">
          What public sources currently show — not a live feed of every
          withheld post. Individual jurisdiction withholdings still only appear
          as a notice when opened from that country.
        </p>
        <div className="mt-5">
          <RestrictionList items={country.restrictions} />
        </div>
      </section>

      {status === "open" && country.restrictions.length === 0 ? (
        <section className="rounded-xl border border-border bg-surface px-5 py-5">
          <h2 className="font-display text-xl tracking-tight">What that means</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted">
            <li>X loads without a national block.</li>
            <li>No government ranking filter is published in x-algorithm for this country.</li>
            <li>
              Global X Rules (spam, child safety, violent threats) still apply everywhere.
            </li>
            <li>
              A future court order could still produce a jurisdiction withhold that
              only locals see.
            </li>
          </ul>
        </section>
      ) : null}

      {country.code === "BR" ? (
        <Link
          to="/filters"
          className="inline-flex items-center gap-2 text-sm text-muted underline-offset-4 hover:text-fg hover:underline"
        >
          Open the Brazil2026ElectionFilter file notes
          <ExternalLink className="size-3.5" />
        </Link>
      ) : null}

      {peers.length > 0 ? (
        <section>
          <h2 className="font-display text-xl tracking-tight">Same region</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {peers.map((p) => (
              <Link
                key={p.code}
                to="/country/$code"
                params={{ code: p.code }}
                className="rounded-sm border border-border px-3 py-2 text-sm text-muted hover:border-line hover:text-fg"
              >
                {p.name}
              </Link>
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}

function Metric({
  label,
  value,
  note,
}: {
  label: string;
  value: string;
  note: string;
}) {
  return (
    <div className="rounded-xl border border-border bg-surface px-4 py-4">
      <p className="text-xs uppercase tracking-wider text-subtle">{label}</p>
      <p className="mt-2 font-display text-2xl tracking-tight">{value}</p>
      <p className="mt-1 text-xs text-muted">{note}</p>
    </div>
  );
}
