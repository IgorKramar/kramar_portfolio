import { Card, CardShell } from "@/components";

export interface AchievementCardProps {
  icon: string;
  metric: string;
  metricSuffix: string;
  label: string;
  description: string;
  highlight: string;
  index: number;
}

export function AchievementCard({
  icon,
  metric,
  metricSuffix,
  label,
  description,
  highlight,
  index,
}: AchievementCardProps) {
  return (
    <CardShell>
      <Card
        interactive
        className="group relative h-full overflow-hidden p-6 sm:p-7"
      >
        {/* Index number */}
        <div
          aria-hidden
          className="absolute -right-2 -top-4 text-[80px] font-bold leading-none text-text-primary opacity-[0.03] sm:text-[100px]"
        >
          {String(index + 1).padStart(2, "0")}
        </div>

        {/* Icon */}
        <div className="relative mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-bg-interactive text-2xl ring-1 ring-border-default">
          {icon}
        </div>

        {/* Metric */}
        <div className="relative">
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-semibold tracking-tight text-text-primary sm:text-5xl">
              {metric}
            </span>
            <span className="text-sm text-text-muted">{metricSuffix}</span>
          </div>
        </div>

        {/* Label */}
        <div className="mt-3 text-sm font-medium uppercase tracking-wider text-accent">
          {label}
        </div>

        {/* Description */}
        <p className="mt-3 text-sm leading-relaxed text-text-secondary">
          {description}
        </p>

        {/* Highlight tag */}
        <div className="mt-5 inline-flex items-center rounded-full bg-bg-interactive px-3 py-1.5 text-xs font-medium text-text-tertiary ring-1 ring-border-default">
          {highlight}
        </div>

        {/* Hover glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-accent/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
        />
      </Card>
    </CardShell>
  );
}
