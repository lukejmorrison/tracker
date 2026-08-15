import { Link } from "@tanstack/react-router";
import { StatusBadge } from "@/components/status-badge";
import { atlasStatus, isLiveStatus, menuItemCount, proceedingsFor, type Country } from "@/data";
import { cn } from "@/lib/utils";

const RAIL: Record<ReturnType<typeof atlasStatus>, string> = {
  blocked: "bg-blocked",
  filter: "bg-filter",
  restricted: "bg-warn",
  demand: "bg-demand",
  open: "bg-open",
};

export function CountryCard({
  country,
  hint,
}: {
  country: Country;
  hint?: boolean;
}) {
  const status = atlasStatus(country);
  const live = proceedingsFor(country.code).filter((p) => isLiveStatus(p.status)).length;
  const named = menuItemCount(country.code);
  const bits = [
    hint ? "your locale" : null,
    live ? `${live} live` : null,
    named ? `${named} named` : null,
  ].filter(Boolean);

  return (
    <Link
      to="/country/$code"
      params={{ code: country.code }}
      className="group block rounded-xl border border-border bg-surface p-4 transition-colors duration-150 hover:border-line"
    >
      <div className="flex items-start gap-3">
        <span
          className={cn("mt-1 block h-9 w-1 shrink-0 rounded-full", RAIL[status])}
          aria-hidden
        />
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-2">
            <div className="min-w-0">
              <p className="truncate font-medium text-fg">{country.name}</p>
              <p className="font-mono text-xs uppercase tracking-wider text-subtle">
                {country.code}
                {bits.length ? ` · ${bits.join(" · ")}` : ""}
              </p>
            </div>
            <StatusBadge country={country} />
          </div>
          <p className="mt-2 line-clamp-2 text-sm text-muted">{country.snapshot}</p>
        </div>
      </div>
    </Link>
  );
}
