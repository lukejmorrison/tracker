import { Link } from "@tanstack/react-router";
import {
  APP_ORIGIN,
  displayOrigin,
  originForHost,
} from "@/lib/brand";

/** Same globe + live-point as public/favicon.svg, drawn with theme tokens. */
export function SiteGlyph({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <rect width="32" height="32" rx="7" className="fill-bg stroke-border" strokeWidth="1" />
      <circle cx="16" cy="16" r="9" className="fill-none stroke-accent" strokeWidth="1.4" />
      <ellipse cx="16" cy="16" rx="4" ry="9" className="fill-none stroke-accent" strokeWidth="1.15" />
      <path
        d="M7 16h18"
        className="stroke-accent"
        strokeWidth="1.15"
        fill="none"
      />
      <circle cx="21" cy="12.2" r="1.7" fill="#d4a05a" />
    </svg>
  );
}

function publicUrl(): string {
  if (typeof window === "undefined") return displayOrigin(APP_ORIGIN);
  return displayOrigin(originForHost(window.location.host));
}

export function SiteMark() {
  return (
    <Link to="/" className="flex min-w-0 items-center gap-2">
      <SiteGlyph className="size-7 shrink-0 sm:size-8" />
      <span className="flex min-w-0 flex-col justify-center">
        <span className="font-display text-lg leading-none tracking-tight text-fg sm:text-xl">
          tracker
        </span>
        <span
          suppressHydrationWarning
          className="mt-0.5 truncate font-mono text-[10px] leading-none text-muted sm:text-xs"
        >
          {publicUrl()}
        </span>
      </span>
    </Link>
  );
}
