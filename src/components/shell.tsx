import type { ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import {
  BookOpen,
  CircleDot,
  Flag,
  Github,
  MessageSquarePlus,
  Plus,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  GITHUB_DISCUSSIONS,
  GITHUB_ISSUES,
  GITHUB_NEW_ISSUE,
  GITHUB_REPO,
  GITHUB_VISION,
} from "@/lib/repo";

const NAV = [
  { to: "/", label: "Atlas" },
  { to: "/courts", label: "Courts" },
  { to: "/filters", label: "Filters" },
  { to: "/sources", label: "Sources" },
] as const;

type ProjectLink = {
  label: string;
  icon: LucideIcon;
  href?: string;
  to?: "/feedback";
};

const PROJECT_LINKS: ProjectLink[] = [
  { href: GITHUB_REPO, label: "GitHub", icon: Github },
  { href: GITHUB_DISCUSSIONS, label: "Discussions", icon: MessageSquarePlus },
  { href: GITHUB_ISSUES, label: "Open issues", icon: CircleDot },
  { href: GITHUB_NEW_ISSUE, label: "New issue", icon: Plus },
  { to: "/feedback", label: "Report a gap", icon: Flag },
  { href: GITHUB_VISION, label: "Vision", icon: BookOpen },
];

export function Shell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div className="min-h-dvh bg-bg text-fg">
      <header className="sticky top-0 z-40 border-b border-border bg-bg/90 backdrop-blur-sm">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 px-4 sm:h-16 sm:px-6">
          <Link to="/" className="flex min-w-0 items-baseline gap-1.5">
            <span className="font-display text-lg tracking-tight text-fg sm:text-xl">
              tracker
            </span>
            <span className="truncate font-mono text-xs text-muted">.wizwam.com</span>
          </Link>
          <nav className="flex items-center gap-1 sm:gap-2">
            {NAV.map((item) => {
              const active =
                item.to === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.to);
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={cn(
                    "rounded-sm px-2 py-2 text-sm transition-colors duration-150 sm:px-3",
                    active ? "text-fg" : "text-muted hover:text-fg",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </header>
      <main className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-10">{children}</main>
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-5 px-4 py-8 text-xs text-muted sm:px-6">
          <nav aria-label="Project" className="flex flex-wrap gap-2">
            {PROJECT_LINKS.map((item) => {
              const Icon = item.icon;
              const className =
                "inline-flex min-h-11 items-center gap-2 rounded-md border border-border bg-surface px-3 py-2 text-sm text-fg hover:border-line";
              if (item.to) {
                return (
                  <Link key={item.label} to={item.to} className={className}>
                    <Icon className="size-4 shrink-0" aria-hidden />
                    {item.label}
                  </Link>
                );
              }
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className={className}
                >
                  <Icon className="size-4 shrink-0" aria-hidden />
                  {item.label}
                </a>
              );
            })}
          </nav>
          <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
            <p>Compiled from the open-source X algorithm and X Transparency Reports.</p>
            <p>Not an official X product.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
