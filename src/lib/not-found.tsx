import { Link } from "@tanstack/react-router";

export function NotFoundPage({
  title = "Not found",
  body = "That page is not in this atlas.",
}: {
  title?: string;
  body?: string;
  data?: unknown;
}) {
  return (
    <div className="max-w-lg py-10">
      <h1 className="font-display text-3xl tracking-tight">{title}</h1>
      <p className="mt-3 text-sm text-muted">{body}</p>
      <Link
        to="/"
        className="mt-6 inline-block text-sm text-muted underline-offset-4 hover:text-fg hover:underline"
      >
        Back to all countries
      </Link>
    </div>
  );
}
