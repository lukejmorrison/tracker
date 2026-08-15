import { Badge } from "@/components/ui/badge";
import { STATUS_META, atlasStatus, type Country } from "@/data";

export function StatusBadge({ country }: { country: Country }) {
  const status = atlasStatus(country);
  const meta = STATUS_META[status];
  return <Badge tone={meta.tone}>{meta.short}</Badge>;
}
