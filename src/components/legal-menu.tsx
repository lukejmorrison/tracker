import { Badge } from "@/components/ui/badge";
import type { MenuItem, MenuTrack } from "@/data";
import { cn } from "@/lib/utils";

export function LegalMenu({ tracks }: { tracks: MenuTrack[] }) {
  if (tracks.length === 0) return null;

  return (
    <div className="flex flex-col gap-8">
      {tracks.map((track) => (
        <article key={track.id}>
          <h3 className="font-display text-xl tracking-tight">{track.title}</h3>
          <p className="mt-2 max-w-2xl text-sm text-muted">{track.intro}</p>

          {track.kind === "volume-split" ? (
            <div className="mt-5 flex flex-col gap-3">
              {track.items.map((item) => (
                <VolumeRow key={item.id} item={item} />
              ))}
            </div>
          ) : (
            <ul className="mt-5 grid gap-2 sm:grid-cols-2">
              {track.items.map((item) => (
                <DutyCard key={item.id} item={item} />
              ))}
            </ul>
          )}

          <a
            href={track.sourceUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-block text-sm text-muted underline-offset-4 hover:text-fg hover:underline"
          >
            {track.source}
          </a>
        </article>
      ))}
    </div>
  );
}

function VolumeRow({ item }: { item: MenuItem }) {
  const share = item.share ?? 0;
  return (
    <div
      className={cn(
        "rounded-xl border px-4 py-4",
        item.highlight ? "border-line bg-raised" : "border-border bg-surface",
      )}
    >
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <p className="font-medium text-fg">{item.label}</p>
        <p className="font-mono text-sm text-fg">{share}%</p>
      </div>
      <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-border">
        <div
          className={cn("h-full rounded-full", item.highlight ? "bg-demand" : "bg-subtle")}
          style={{ width: `${Math.min(100, share)}%` }}
        />
      </div>
      <p className="mt-2 text-xs text-subtle">{item.statute}</p>
      {item.note ? <p className="mt-2 text-sm text-muted">{item.note}</p> : null}
    </div>
  );
}

function DutyCard({ item }: { item: MenuItem }) {
  return (
    <li
      className={cn(
        "rounded-xl border px-4 py-3",
        item.highlight ? "border-line bg-raised" : "border-border bg-surface",
      )}
    >
      <div className="flex flex-wrap items-center gap-2">
        {item.highlight ? <Badge tone="warn">Live fight</Badge> : null}
        {item.audience === "minors" ? <Badge>Minors only</Badge> : null}
        {item.audience === "in-country" ? <Badge>In-country</Badge> : null}
      </div>
      <p className={cn("text-sm font-medium text-fg", item.highlight ? "mt-2" : "")}>
        {item.label}
      </p>
      {item.note ? <p className="mt-1 text-sm text-muted">{item.note}</p> : null}
    </li>
  );
}
