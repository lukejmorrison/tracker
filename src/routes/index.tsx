import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { AtlasMap } from "@/components/atlas-map";
import { CountryCard } from "@/components/country-card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  AS_OF,
  COUNTRY_LIST,
  GLOBAL_STATS,
  REGIONS,
  REPORT_PERIOD,
  STATUS_META,
  atlasStatus,
  compareAtlas,
  countryMatchesQuery,
  guessLocalCountry,
  type AtlasStatus,
  type Region,
} from "@/data";
import { formatInt, formatPct } from "@/lib/utils";
import { cn } from "@/lib/utils";
import { pageTitle } from "@/lib/brand";

type SearchParams = {
  q?: string;
  region?: string;
  status?: string;
};

export const Route = createFileRoute("/")({
  validateSearch: (raw: Record<string, unknown>): SearchParams => ({
    q: typeof raw.q === "string" ? raw.q : undefined,
    region: typeof raw.region === "string" ? raw.region : undefined,
    status: typeof raw.status === "string" ? raw.status : undefined,
  }),
  head: () => ({
    meta: [{ title: pageTitle("Atlas") }],
  }),
  component: Home,
});

const STATUSES: { id: "all" | AtlasStatus; label: string }[] = [
  { id: "all", label: "All" },
  { id: "blocked", label: "Blocked" },
  { id: "filter", label: "Filter" },
  { id: "restricted", label: "Restricted" },
  { id: "demand", label: "High demand" },
  { id: "open", label: "Open" },
];

const CHART = [
  { name: "Japan", received: 69186 },
  { name: "Turkey", received: 11107 },
  { name: "All others", received: 11047 },
  { name: "European Union", received: 3831 },
  { name: "South Korea", received: 1835 },
];
const CHART_MAX = 69186;

function Home() {
  const search = Route.useSearch();
  const navigate = Route.useNavigate();
  const [localHint] = useState(() => guessLocalCountry());

  const q = search.q ?? "";
  const region = (search.region ?? "all") as Region | "all";
  const status = (search.status ?? "all") as "all" | AtlasStatus;

  const setParam = (patch: SearchParams) => {
    void navigate({
      to: "/",
      search: {
        q: patch.q !== undefined ? patch.q || undefined : search.q,
        region: patch.region !== undefined ? (patch.region === "all" ? undefined : patch.region) : search.region,
        status: patch.status !== undefined ? (patch.status === "all" ? undefined : patch.status) : search.status,
      },
    });
  };

  const filtered = useMemo(() => {
    return COUNTRY_LIST.filter((c) => {
      if (!countryMatchesQuery(c, q)) return false;
      if (region !== "all" && c.region !== region) return false;
      if (status !== "all" && atlasStatus(c) !== status) return false;
      return true;
    }).sort(compareAtlas);
  }, [q, region, status]);

  const counts = useMemo(() => {
    const base = { blocked: 0, filter: 0, restricted: 0, demand: 0, open: 0 };
    for (const c of COUNTRY_LIST) base[atlasStatus(c)] += 1;
    return base;
  }, []);

  const activeCodes = useMemo(() => new Set(filtered.map((c) => c.code)), [filtered]);

  const local = localHint ? COUNTRY_LIST.find((c) => c.code === localHint) : undefined;
  const localInView =
    !!local &&
    countryMatchesQuery(local, q) &&
    (region === "all" || local.region === region) &&
    (status === "all" || atlasStatus(local) === status);

  return (
    <div className="flex flex-col gap-10">
      <section className="grid gap-8 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <p className="font-mono text-xs uppercase tracking-widest text-muted">
            Compiled {AS_OF} · demand figures {REPORT_PERIOD}
          </p>
          <h1 className="mt-3 font-display text-3xl tracking-tight text-fg sm:text-5xl">
            What is allowed.
            <br />
            What is not.
            <span className="text-muted"> By country.</span>
          </h1>
          <p className="mt-5 max-w-xl text-base text-muted">
            Governments can force X to hide posts, rank them down, or block the
            whole service. X now publishes the ranking filters in the open-source
            algorithm. This atlas puts those filters next to national blocks and
            the latest transparency-report demand — so you can see your country
            beside everyone else’s.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <Badge tone="filter">1 open-source government filter</Badge>
            <Badge tone="blocked">{GLOBAL_STATS.blockedCountries} national blocks</Badge>
            <Badge tone="demand">
              {formatInt(GLOBAL_STATS.removalRequests)} removal requests · {REPORT_PERIOD}
            </Badge>
          </div>
        </div>
        <aside className="grid grid-cols-2 gap-3 lg:col-span-5">
          <Stat
            label="Open-source filters"
            value={String(GLOBAL_STATS.openSourceFilters)}
            note="Brazil 2026 election"
          />
          <Stat
            label="Removal requests"
            value={formatInt(GLOBAL_STATS.removalRequests)}
            note={`${formatPct(GLOBAL_STATS.removalRate)} actioned · ${REPORT_PERIOD}`}
          />
          <Stat
            label="Info requests"
            value={formatInt(GLOBAL_STATS.infoRequests)}
            note={`${formatPct(GLOBAL_STATS.infoRate)} disclosed`}
          />
          <Stat
            label="Countries ever demanding"
            value={String(GLOBAL_STATS.countriesEverDemanding)}
            note="Since the first transparency report"
          />
        </aside>
      </section>

      <section className="rounded-xl border border-border bg-surface p-5 sm:p-6">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="font-display text-xl tracking-tight">Government removal demand</h2>
            <p className="mt-1 text-sm text-muted">
              Named rows from the {REPORT_PERIOD} global report. EU is one
              bucket. Most other countries sit in “All others.”
            </p>
          </div>
          <Link
            to="/sources"
            className="text-sm text-muted underline-offset-4 hover:text-fg hover:underline"
          >
            How this is counted
          </Link>
        </div>
        <div className="mt-5 flex flex-col gap-3">
          {CHART.map((row) => (
            <div
              key={row.name}
              className="grid grid-cols-[7.5rem_1fr_4.5rem] items-center gap-3 sm:grid-cols-[9rem_1fr_5rem]"
            >
              <span className="truncate text-sm text-muted">{row.name}</span>
              <span className="h-2 rounded-full bg-raised">
                <span
                  className="block h-2 rounded-full bg-filter"
                  style={{ width: `${Math.max(6, (row.received / CHART_MAX) * 100)}%` }}
                />
              </span>
              <span className="text-right font-mono text-xs tabular-nums text-muted">
                {formatInt(row.received)}
              </span>
            </div>
          ))}
        </div>
      </section>

      <AtlasMap activeCodes={activeCodes} />

      {local && localInView ? (
        <section>
          <p className="font-mono text-xs uppercase tracking-widest text-muted">
            Suggested from your locale
          </p>
          <div className="mt-3 max-w-xl">
            <CountryCard country={local} hint />
          </div>
        </section>
      ) : local && (q || region !== "all" || status !== "all") ? (
        <p className="text-sm text-muted">
          Your locale ({local.name}) is not in this view.
        </p>
      ) : null}

      <section className="flex flex-col gap-5">
        <div className="flex flex-col gap-4">
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted" />
            <Input
              id="country-filter"
              name="q"
              value={q}
              onChange={(e) => setParam({ q: e.target.value })}
              placeholder="Filter by country or code"
              className="pl-10"
              aria-label="Filter countries"
            />
          </div>
          <div className="flex flex-col gap-3">
            <ChipRow
              items={REGIONS.map((r) => ({ id: r.id, label: r.label }))}
              value={region}
              onChange={(id) => setParam({ region: id })}
            />
            <ChipRow
              items={STATUSES}
              value={status}
              onChange={(id) => setParam({ status: id })}
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted">
          {(Object.keys(STATUS_META) as AtlasStatus[]).map((key) => (
            <span key={key} className="inline-flex items-center gap-1.5">
              <span className={cn("size-2 rounded-full", railDot(key))} />
              {STATUS_META[key].label}
              <span className="tabular-nums">{counts[key]}</span>
            </span>
          ))}
        </div>

        <p className="text-sm text-muted">
          {filtered.length} {filtered.length === 1 ? "country" : "countries"} · sorted by
          severity
        </p>

        {filtered.length === 0 ? (
          <div className="rounded-xl border border-border bg-surface px-5 py-10 text-center text-sm text-muted">
            No countries match those filters.
          </div>
        ) : (
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {filtered.map((c) => (
              <CountryCard key={c.code} country={c} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

function Stat({ label, value, note }: { label: string; value: string; note: string }) {
  return (
    <div className="rounded-xl border border-border bg-surface px-4 py-4">
      <p className="text-xs uppercase tracking-wider text-muted">{label}</p>
      <p className="mt-2 font-display text-3xl tabular-nums tracking-tight">{value}</p>
      <p className="mt-1 text-xs text-muted">{note}</p>
    </div>
  );
}

function ChipRow<T extends string>({
  items,
  value,
  onChange,
}: {
  items: { id: T; label: string }[];
  value: T;
  onChange: (id: T) => void;
}) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-1">
      {items.map((item) => {
        const active = item.id === value;
        return (
          <button
            key={item.id}
            type="button"
            aria-pressed={active}
            onClick={() => onChange(item.id)}
            className={cn(
              "h-10 shrink-0 rounded-sm border px-3 text-sm transition-colors duration-150",
              active
                ? "border-line bg-raised text-fg"
                : "border-border bg-transparent text-muted hover:text-fg",
            )}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}

function railDot(status: AtlasStatus): string {
  if (status === "blocked") return "bg-blocked";
  if (status === "filter") return "bg-filter";
  if (status === "restricted") return "bg-warn";
  if (status === "demand") return "bg-demand";
  return "bg-open";
}
