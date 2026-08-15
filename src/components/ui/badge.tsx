import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-sm px-2 py-0.5 text-xs font-medium tracking-wide",
  {
    variants: {
      tone: {
        default: "bg-raised text-muted",
        open: "bg-open-dim text-open",
        warn: "bg-warn-dim text-warn",
        blocked: "bg-blocked-dim text-blocked",
        filter: "bg-filter-dim text-filter",
        demand: "bg-demand-dim text-demand",
      },
    },
    defaultVariants: { tone: "default" },
  },
);

export function Badge({
  className,
  tone,
  ...props
}: React.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return <span className={cn(badgeVariants({ tone, className }))} {...props} />;
}
