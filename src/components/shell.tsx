import type { ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { useCurrentUserState } from "@/lib/auth/use-current-user";
import { UserButton } from "@/lib/auth/gates";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/", label: "Atlas" },
  { to: "/courts", label: "Courts" },
  { to: "/filters", label: "Filters" },
  { to: "/sources", label: "Sources" },
] as const;

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
            <span className="truncate font-mono text-xs text-subtle">.grok.me</span>
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
            <AuthSlot />
          </nav>
        </div>
      </header>
      <main className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-10">{children}</main>
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 text-xs text-subtle sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>Compiled from the open-source X algorithm and X Transparency Reports.</p>
          <p className="flex flex-wrap gap-x-4 gap-y-1">
            <Link to="/feedback" className="hover:text-fg">
              Report a gap
            </Link>
            <a
              href="https://github.com/lukejmorrison/tracker"
              target="_blank"
              rel="noreferrer"
              className="hover:text-fg"
            >
              Source
            </a>
            <span>Not an official X product.</span>
          </p>
        </div>
      </footer>
    </div>
  );
}

function AuthSlot() {
  const { user, isPending } = useCurrentUserState();
  if (isPending) {
    return <div className="ml-1 size-8 animate-pulse rounded-full bg-raised" />;
  }
  if (user) {
    return (
      <div className="ml-1 hidden sm:block">
        <UserButton />
      </div>
    );
  }
  return (
    <Link
      to="/login"
      className="ml-1 rounded-sm border border-border px-3 py-2 text-sm text-muted hover:bg-raised hover:text-fg"
    >
      Sign in
    </Link>
  );
}
