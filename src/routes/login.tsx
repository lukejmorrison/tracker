import { createFileRoute, Link } from "@tanstack/react-router";
import { GROK_PROVIDERS, authEnabled, signIn } from "@/lib/auth/client";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/login")({ component: Login });

function Login() {
  return (
    <div className="mx-auto max-w-md py-8">
      <p className="font-mono text-xs uppercase tracking-widest text-subtle">Account</p>
      <h1 className="mt-2 font-display text-3xl tracking-tight">Sign in</h1>
      <p className="mt-3 text-sm text-muted">
        Optional. The atlas is public. Sign in if you want your session remembered
        across visits.
      </p>
      <div className="mt-8 flex flex-col gap-3">
        {authEnabled ? (
          GROK_PROVIDERS.map((p) => (
            <Button
              key={p.providerId}
              type="button"
              variant="outline"
              onClick={() => signIn(p.providerId, { callbackURL: "/" })}
            >
              Continue with {p.label}
            </Button>
          ))
        ) : (
          <p className="text-sm text-muted">Sign-in is disabled.</p>
        )}
      </div>
      <Link
        to="/"
        className="mt-8 inline-block text-sm text-muted underline-offset-4 hover:text-fg hover:underline"
      >
        Back to the atlas
      </Link>
    </div>
  );
}
