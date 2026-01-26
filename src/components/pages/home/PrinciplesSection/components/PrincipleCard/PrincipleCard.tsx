import { Card, CardShell } from "@/components";

export interface PrincipleCardProps {
  number: string;
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  keywords: readonly string[];
}

export function PrincipleCard({
  number,
  icon,
  title,
  subtitle,
  description,
  keywords,
}: PrincipleCardProps) {
  return (
    <CardShell>
      <Card interactive className="group relative flex h-full flex-col overflow-hidden p-6">
        {/* Background number */}
        <div
          aria-hidden
          className="absolute -right-2 -top-2 text-[72px] font-bold leading-none text-text-primary opacity-[0.03]"
        >
          {number}
        </div>

        {/* Header */}
        <div className="relative flex items-start justify-between gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-bg-interactive text-xl ring-1 ring-border-default transition-transform duration-300 group-hover:scale-110">
            {icon}
          </div>
          <div className="text-xs font-medium uppercase tracking-wider text-accent">
            {subtitle}
          </div>
        </div>

        {/* Title */}
        <h3 className="relative mt-5 text-lg font-semibold tracking-tight text-text-primary">
          {title}
        </h3>

        {/* Description */}
        <p className="mt-3 flex-1 text-sm leading-relaxed text-text-secondary">
          {description}
        </p>

        {/* Keywords */}
        <div className="mt-5 flex flex-wrap gap-2">
          {keywords.map((keyword) => (
            <span
              key={keyword}
              className="rounded-md bg-bg-interactive px-2 py-1 text-xs text-text-muted ring-1 ring-border-subtle"
            >
              {keyword}
            </span>
          ))}
        </div>

        {/* Hover line — с отступами слева и справа */}
        <div
          aria-hidden
          className="absolute bottom-3 left-6 right-6 h-0.5 scale-x-0 bg-gradient-to-r from-accent via-sky to-emerald transition-transform duration-500 ease-out group-hover:scale-x-100"
        />
      </Card>
    </CardShell>
  );
}
