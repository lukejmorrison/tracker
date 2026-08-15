import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import { FEEDBACK_REPO, LANES, chooseIssueUrl, issueUrl } from "@/lib/feedback";

export const Route = createFileRoute("/feedback")({ component: FeedbackPage });

function FeedbackPage() {
  return (
    <div className="flex flex-col gap-10">
      <header className="max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-widest text-subtle">
          Feedback framework
        </p>
        <h1 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl">
          Report a gap
        </h1>
        <p className="mt-4 text-base text-muted">
          The atlas gets sharper when people send named, sourced holes — and worse
          when we absorb rumor. A primary source URL is required. Individual
          withheld posts are still not in any public catalog; a screenshot of a
          notice is a prompt to look, not a row.
        </p>
      </header>

      <section className="grid gap-3 sm:grid-cols-2">
        {LANES.map((lane) => (
          <a
            key={lane.id}
            href={issueUrl(lane.id)}
            target="_blank"
            rel="noreferrer"
            className="group rounded-xl border border-border bg-surface px-5 py-5 hover:border-line"
          >
            <div className="flex items-start justify-between gap-3">
              <h2 className="font-display text-xl tracking-tight">{lane.title}</h2>
              <ExternalLink className="mt-1 size-3.5 shrink-0 text-subtle" />
            </div>
            <p className="mt-2 text-sm text-muted">{lane.body}</p>
          </a>
        ))}
      </section>

      <section className="max-w-2xl rounded-xl border border-border bg-surface px-5 py-5">
        <h2 className="font-display text-xl tracking-tight">The bar</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted">
          <li>Country, primary source URL, last public date, one sentence on what should change.</li>
          <li>We compile lists as the publisher grouped them. No inferred 4% splits.</li>
          <li>Open investigations stay investigations until the source publishes a decision.</li>
          <li>No source → it does not land.</li>
        </ul>
        <div className="mt-4 flex flex-wrap gap-4 text-sm">
          <a
            href={chooseIssueUrl()}
            target="_blank"
            rel="noreferrer"
            className="text-muted underline-offset-4 hover:text-fg hover:underline"
          >
            All issue types
          </a>
          <a
            href={`${FEEDBACK_REPO}/blob/main/docs/FEEDBACK.md`}
            target="_blank"
            rel="noreferrer"
            className="text-muted underline-offset-4 hover:text-fg hover:underline"
          >
            Full framework
          </a>
          <a
            href={`${FEEDBACK_REPO}/blob/main/docs/VISION.md`}
            target="_blank"
            rel="noreferrer"
            className="text-muted underline-offset-4 hover:text-fg hover:underline"
          >
            Vision
          </a>
        </div>
      </section>
    </div>
  );
}
