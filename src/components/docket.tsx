import { Badge } from "@/components/ui/badge";
import {
  KIND_COPY,
  STATUS_COPY,
  isLiveStatus,
  type Proceeding,
} from "@/data";

export function Docket({ items, countryName }: { items: Proceeding[]; countryName: string }) {
  if (items.length === 0) {
    return (
      <div className="rounded-xl border border-border bg-surface px-5 py-6">
        <p className="text-sm text-muted">
          No named public court, regulator, or legislative file involving X was
          compiled for {countryName} as of 15 August 2026. That does not mean
          no one has ever asked for a takedown — only that there is no
          published proceeding we can put on this docket. Individual
          withholdings can still appear as an in-country notice.
        </p>
      </div>
    );
  }

  const live = items.filter((p) => isLiveStatus(p.status));
  const closed = items.filter((p) => !isLiveStatus(p.status));

  return (
    <div className="flex flex-col gap-6">
      {live.length > 0 ? (
        <div className="flex flex-col gap-3">
          <p className="font-mono text-xs uppercase tracking-widest text-subtle">
            Live or unresolved
          </p>
          {live.map((p) => (
            <ProceedingCard key={p.id} item={p} />
          ))}
        </div>
      ) : null}
      {closed.length > 0 ? (
        <div className="flex flex-col gap-3">
          <p className="font-mono text-xs uppercase tracking-widest text-subtle">
            Closed or not in force
          </p>
          {closed.map((p) => (
            <ProceedingCard key={p.id} item={p} />
          ))}
        </div>
      ) : null}
    </div>
  );
}

export function ProceedingCard({ item }: { item: Proceeding }) {
  const status = STATUS_COPY[item.status];
  return (
    <article className="rounded-xl border border-border bg-surface p-5">
      <div className="flex flex-wrap items-center gap-2">
        <Badge tone={status.tone}>{status.label}</Badge>
        <Badge>{KIND_COPY[item.kind]}</Badge>
        <span className="font-mono text-xs text-subtle">Updated {item.updated}</span>
      </div>
      <h3 className="mt-3 font-display text-xl tracking-tight text-fg">{item.title}</h3>
      <p className="mt-1 text-sm text-muted">{item.court}</p>
      <p className="mt-3 text-sm text-muted">{item.summary}</p>
      <div className="mt-4 rounded-lg bg-raised px-4 py-3">
        <p className="text-xs font-medium uppercase tracking-wider text-subtle">At stake</p>
        <p className="mt-1 text-sm text-fg">{item.atStake}</p>
      </div>
      {item.outcome ? (
        <p className="mt-3 text-sm text-muted">
          <span className="text-fg">Outcome. </span>
          {item.outcome}
        </p>
      ) : null}
      <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-subtle">
        {item.filed ? <span>Opened {item.filed}</span> : null}
        {item.decided ? <span>Decided {item.decided}</span> : null}
      </div>
      <a
        href={item.sourceUrl}
        target="_blank"
        rel="noreferrer"
        className="mt-3 inline-block text-sm text-muted underline-offset-4 hover:text-fg hover:underline"
      >
        {item.source}
      </a>
    </article>
  );
}
