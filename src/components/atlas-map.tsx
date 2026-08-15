import { useMemo, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { geoNaturalEarth1, geoPath } from "d3-geo";
import { feature } from "topojson-client";
import type { Topology, GeometryCollection } from "topojson-specification";
import { COUNTRY_LIST, getCountry } from "@/data";
import { HEAT_MARKERS, heatLabel, heatTone, type HeatTone } from "@/data/heat";
import { alpha2FromNumeric } from "@/data/iso3166";
import { cn } from "@/lib/utils";
// Natural Earth 110m via world-atlas (BSD). ISO numeric ids mapped in iso3166.ts.
import world from "@/data/world-110m.json";

const WIDTH = 960;
const HEIGHT = 460;

const FILL: Record<HeatTone | "void", string> = {
  blocked: "var(--color-blocked)",
  filter: "var(--color-filter)",
  restricted: "var(--color-warn)",
  live: "#d4a05a",
  demand: "var(--color-demand)",
  named: "color-mix(in oklab, var(--color-filter) 70%, var(--color-fg))",
  open: "color-mix(in oklab, var(--color-open) 45%, var(--color-raised))",
  void: "var(--color-raised)",
};

type WorldObjects = {
  countries: GeometryCollection<{ name: string }>;
  land: GeometryCollection;
};

type Hover = {
  code: string;
  name: string;
  label: string;
  tone: HeatTone | "void";
};

export function AtlasMap({ activeCodes }: { activeCodes: Set<string> }) {
  const navigate = useNavigate();
  const [hover, setHover] = useState<Hover | null>(null);

  const { paths, projection } = useMemo(() => {
    const topology = world as unknown as Topology<WorldObjects>;
    const collection = feature(topology, topology.objects.countries);
    const projection = geoNaturalEarth1().fitExtent(
      [
        [8, 12],
        [WIDTH - 8, HEIGHT - 8],
      ],
      collection,
    );
    const path = geoPath(projection);
    const paths = collection.features.map((f) => {
      const iso = alpha2FromNumeric(f.id as string | number | undefined);
      const name = (f.properties as { name?: string } | null)?.name ?? iso ?? "Unknown";
      return {
        iso,
        name,
        d: path(f) ?? "",
      };
    });
    return { paths, projection };
  }, []);

  const compiled = useMemo(() => {
    const map = new Map(COUNTRY_LIST.map((c) => [c.code, c]));
    return map;
  }, []);

  const go = (code: string | null) => {
    if (!code || !compiled.has(code)) return;
    void navigate({ to: "/country/$code", params: { code } });
  };

  const tipFor = (iso: string | null, fallbackName: string): Hover => {
    if (!iso) return { code: "", name: fallbackName, label: "Not in this atlas", tone: "void" };
    const country = compiled.get(iso);
    if (!country) return { code: iso, name: fallbackName, label: "Not in this atlas", tone: "void" };
    return {
      code: iso,
      name: country.name,
      label: heatLabel(country),
      tone: heatTone(country),
    };
  };

  return (
    <section className="rounded-xl border border-border bg-surface p-5 sm:p-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 className="font-display text-xl tracking-tight">Where the compiled record is hot</h2>
          <p className="mt-1 max-w-2xl text-sm text-muted">
            Same severity order as the list — blocks, the Brazil filter, live
            court files — not a freedom score. Dim countries are not in this
            atlas yet. Click a lit country to open it.
          </p>
        </div>
        {hover ? (
          <p className="font-mono text-xs text-muted">
            <span className="text-fg">{hover.name}</span>
            {hover.code ? ` · ${hover.code}` : ""} · {hover.label}
          </p>
        ) : (
          <p className="font-mono text-xs text-muted">Hover or tap a country</p>
        )}
      </div>

      <div className="mt-4 overflow-hidden">
        <svg
          viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
          role="img"
          aria-label="World map of compiled government action on X"
          className="h-auto w-full"
        >
          {paths.map((p, i) => {
            const country = p.iso ? compiled.get(p.iso) : undefined;
            const tone = country ? heatTone(country) : "void";
            const inView = p.iso ? activeCodes.has(p.iso) : false;
            const lit = !!country && inView;
            return (
              <path
                key={`${p.iso ?? "x"}-${i}`}
                d={p.d}
                fill={FILL[tone]}
                fillOpacity={country ? (lit ? 1 : 0.22) : 0.55}
                stroke="var(--color-bg)"
                strokeWidth={0.6}
                tabIndex={country ? 0 : undefined}
                role={country ? "link" : undefined}
                aria-label={
                  country ? `${country.name}, ${heatLabel(country)}` : undefined
                }
                className={cn(country && "cursor-pointer outline-none")}
                onMouseEnter={() => setHover(tipFor(p.iso, p.name))}
                onMouseLeave={() => setHover(null)}
                onFocus={() => setHover(tipFor(p.iso, p.name))}
                onBlur={() => setHover(null)}
                onClick={() => go(p.iso)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    go(p.iso);
                  }
                }}
              />
            );
          })}
          {HEAT_MARKERS.map((m) => {
            const country = getCountry(m.code);
            if (!country) return null;
            const pt = projection([m.lon, m.lat]);
            if (!pt) return null;
            const lit = activeCodes.has(m.code);
            const tone = heatTone(country);
            return (
              <circle
                key={m.code}
                cx={pt[0]}
                cy={pt[1]}
                r={5}
                fill={FILL[tone]}
                fillOpacity={lit ? 1 : 0.22}
                stroke="var(--color-fg)"
                strokeWidth={0.8}
                tabIndex={0}
                role="link"
                aria-label={`${country.name}, ${heatLabel(country)}`}
                className="cursor-pointer outline-none"
                onMouseEnter={() => setHover(tipFor(m.code, m.name))}
                onMouseLeave={() => setHover(null)}
                onFocus={() => setHover(tipFor(m.code, m.name))}
                onBlur={() => setHover(null)}
                onClick={() => go(m.code)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    go(m.code);
                  }
                }}
              />
            );
          })}
        </svg>
      </div>

      <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted">
        {(
          [
            ["blocked", "National block"],
            ["filter", "Open-source filter"],
            ["restricted", "Restricted"],
            ["live", "Live court / agency file"],
            ["demand", "High demand"],
            ["open", "Compiled, quiet"],
            ["void", "Not in this atlas"],
          ] as const
        ).map(([tone, label]) => (
          <li key={tone} className="inline-flex items-center gap-1.5">
            <span
              className="size-2 rounded-full"
              style={{ background: FILL[tone] }}
            />
            {label}
          </li>
        ))}
      </ul>
    </section>
  );
}
