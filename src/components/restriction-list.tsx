import { Badge } from "@/components/ui/badge";
import type { Restriction, RestrictionKind } from "@/data";

const KIND_TONE: Record<
  RestrictionKind,
  { tone: "blocked" | "filter" | "warn" | "demand" | "default"; label: string }
> = {
  "national-block": { tone: "blocked", label: "National block" },
  algorithm: { tone: "filter", label: "Algorithm filter" },
  withhold: { tone: "warn", label: "Jurisdiction withhold" },
  "legal-demand": { tone: "demand", label: "Legal demand" },
  intermittent: { tone: "warn", label: "Intermittent" },
};

export function RestrictionList({ items }: { items: Restriction[] }) {
  if (items.length === 0) {
    return (
      <div className="rounded-xl border border-border bg-surface px-5 py-6">
        <p className="text-sm text-muted">
          No published government ranking filter, national block, or named
          withholding regime for this country. Ordinary X Rules still apply
          globally.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {items.map((item) => {
        const meta = KIND_TONE[item.kind];
        return (
          <article
            key={item.id}
            className="rounded-xl border border-border bg-surface p-5"
          >
            <div className="flex flex-wrap items-center gap-2">
              <Badge tone={meta.tone}>{meta.label}</Badge>
              {item.verified ? (
                <Badge>Verified source</Badge>
              ) : (
                <Badge>Reported</Badge>
              )}
              {item.since ? (
                <span className="font-mono text-xs text-subtle">{item.since}</span>
              ) : null}
            </div>
            <h3 className="mt-3 font-display text-xl tracking-tight text-fg">
              {item.title}
            </h3>
            <p className="mt-2 text-sm text-muted">{item.summary}</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <div className="rounded-lg bg-blocked-dim px-4 py-3">
                <p className="text-xs font-medium uppercase tracking-wider text-blocked">
                  Not allowed
                </p>
                <p className="mt-1 text-sm text-fg">{item.notAllowed}</p>
              </div>
              <div className="rounded-lg bg-open-dim px-4 py-3">
                <p className="text-xs font-medium uppercase tracking-wider text-open">
                  Still allowed
                </p>
                <p className="mt-1 text-sm text-fg">{item.stillAllowed}</p>
              </div>
            </div>
            {item.exception ? (
              <p className="mt-3 text-sm text-muted">
                <span className="text-fg">Exception. </span>
                {item.exception}
              </p>
            ) : null}
            {item.legalBasis ? (
              <p className="mt-2 text-sm text-subtle">Basis: {item.legalBasis}</p>
            ) : null}
            <div className="mt-3 flex flex-col gap-1">
              <a
                href={item.sourceUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-block text-sm text-muted underline-offset-4 hover:text-fg hover:underline"
              >
                {item.source}
              </a>
              {item.encyclopedia?.grokipedia &&
              item.encyclopedia.grokipedia.href !== item.sourceUrl ? (
                <a
                  href={item.encyclopedia.grokipedia.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block text-sm text-muted underline-offset-4 hover:text-fg hover:underline"
                >
                  Grokipedia · {item.encyclopedia.grokipedia.title}
                </a>
              ) : null}
              {item.encyclopedia?.wikipedia &&
              item.encyclopedia.wikipedia.href !== item.sourceUrl ? (
                <a
                  href={item.encyclopedia.wikipedia.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block text-sm text-muted underline-offset-4 hover:text-fg hover:underline"
                >
                  Wikipedia · {item.encyclopedia.wikipedia.title}
                </a>
              ) : null}
            </div>
          </article>
        );
      })}
    </div>
  );
}
