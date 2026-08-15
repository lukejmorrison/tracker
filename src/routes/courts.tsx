import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ProceedingCard } from "@/components/docket";
import {
  COUNTRY_LIST,
  PROCEEDINGS,
  isLiveStatus,
  type ProceedingStatus,
} from "@/data";
import { cn } from "@/lib/utils";
import { pageTitle } from "@/lib/brand";

export const Route = createFileRoute("/courts")({
  head: () => ({ meta: [{ title: pageTitle("Courts") }] }),
  component: CourtsPage,
});

const FILTERS: { id: "live" | "all" | ProceedingStatus; label: string }[] = [
  { id: "live", label: "Live" },
  { id: "all", label: "All" },
  { id: "pending", label: "Pending" },
  { id: "appealed", label: "On appeal" },
  { id: "active-order", label: "Active order" },
  { id: "monitoring", label: "Monitoring" },
  { id: "decided", label: "Decided" },
  { id: "died", label: "Not in force" },
];

function CourtsPage() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]["id"]>("live");

  const items = useMemo(() => {
    return PROCEEDINGS.filter((p) => {
      if (filter === "all") return true;
      if (filter === "live") return isLiveStatus(p.status);
      return p.status === filter;
    });
  }, [filter]);

  const byCountry = useMemo(() => {
    const map = new Map<string, typeof items>();
    for (const p of items) {
      const list = map.get(p.countryCode) ?? [];
      list.push(p);
      map.set(p.countryCode, list);
    }
    return [...map.entries()].sort((a, b) => {
      const na = COUNTRY_LIST.find((c) => c.code === a[0])?.name ?? a[0];
      const nb = COUNTRY_LIST.find((c) => c.code === b[0])?.name ?? b[0];
      return na.localeCompare(nb);
    });
  }, [items]);

  return (
    <div className="flex flex-col gap-8">
      <header className="max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-widest text-subtle">
          Compiled 15 August 2026
        </p>
        <h1 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl">
          Court and agency docket
        </h1>
        <p className="mt-4 text-base text-muted">
          Named proceedings that can change what X must hide — cases in court,
          regulator files that can go to court, and bills that would create new
          takedown powers. There is still no public feed of every withheld
          post. This is the docket that is public.
        </p>
      </header>

      <div className="flex gap-2 overflow-x-auto pb-1">
        {FILTERS.map((f) => (
          <button
            key={f.id}
            type="button"
            onClick={() => setFilter(f.id)}
            className={cn(
              "h-10 shrink-0 rounded-sm border px-3 text-sm transition-colors duration-150",
              filter === f.id
                ? "border-line bg-raised text-fg"
                : "border-border bg-transparent text-muted hover:text-fg",
            )}
          >
            {f.label}
          </button>
        ))}
      </div>

      <p className="text-sm text-muted">
        {items.length} {items.length === 1 ? "file" : "files"} · {byCountry.length}{" "}
        {byCountry.length === 1 ? "country" : "countries"}
      </p>

      {byCountry.length === 0 ? (
        <div className="rounded-xl border border-border bg-surface px-5 py-10 text-center text-sm text-muted">
          No files in that slice.
        </div>
      ) : (
        <div className="flex flex-col gap-10">
          {byCountry.map(([code, list]) => {
            const country = COUNTRY_LIST.find((c) => c.code === code);
            return (
              <section key={code} className="flex flex-col gap-3">
                <div className="flex items-baseline justify-between gap-3">
                  <h2 className="font-display text-2xl tracking-tight">
                    {country?.name ?? code}
                  </h2>
                  <Link
                    to="/country/$code"
                    params={{ code }}
                    className="text-sm text-muted underline-offset-4 hover:text-fg hover:underline"
                  >
                    Country page
                  </Link>
                </div>
                {list.map((p) => (
                  <ProceedingCard key={p.id} item={p} />
                ))}
              </section>
            );
          })}
        </div>
      )}
    </div>
  );
}
