"use client";

import { Card, CardShell } from "@/components/ui";
import { useLocale } from "@/contexts";
import type { Tech } from "@/interfaces";
import { cx } from "@/utils";

export interface TechCardProps {
  tech: Tech;
}

const LEVEL_STYLES = {
  expert: "bg-emerald/20 text-emerald ring-emerald/30",
  advanced: "bg-sky/20 text-sky ring-sky/30",
  familiar: "bg-accent/20 text-accent ring-accent/30",
};

const LEVEL_DOTS = {
  expert: 3,
  advanced: 2,
  familiar: 1,
};

const LEVEL_COLORS = {
  expert: "bg-emerald",
  advanced: "bg-sky",
  familiar: "bg-accent",
};

export function TechCard({ tech }: TechCardProps) {
  const { locale, t } = useLocale();

  return (
    <CardShell>
      <Card interactive className="group relative h-full overflow-hidden">
        <div className="relative p-5">
          {/* Highlight glow for featured techs */}
          {tech.highlight && (
            <div
              aria-hidden
              className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-accent/10 blur-2xl transition-opacity duration-500 group-hover:bg-accent/20"
            />
          )}

          {/* Header */}
          <div className="flex items-start justify-between gap-3">
            {/* Icon container */}
            <div
              className={cx(
                "flex h-12 w-12 items-center justify-center rounded-xl text-xl",
                "bg-bg-interactive ring-1 ring-border-default",
                "transition-all duration-300 group-hover:scale-110 group-hover:ring-border-strong",
                "text-text-secondary group-hover:text-text-primary"
              )}
            >
              {tech.icon}
            </div>

            {/* Level dots */}
            <div className="flex items-center gap-1">
              {Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={i}
                  className={cx(
                    "h-1.5 w-1.5 rounded-full transition-all duration-300",
                    i < LEVEL_DOTS[tech.level]
                      ? LEVEL_COLORS[tech.level]
                      : "bg-border-default"
                  )}
                />
              ))}
            </div>
          </div>

          {/* Name */}
          <h3 className="mt-4 text-lg font-semibold text-text-primary">
            {tech.name}
          </h3>

          {/* Level badge */}
          <div
            className={cx(
              "mt-2 inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ring-1",
              LEVEL_STYLES[tech.level]
            )}
          >
            {t.stack.levels[tech.level]}
          </div>

          {/* Description */}
          <p className="mt-3 text-sm leading-relaxed text-text-secondary">
            {tech.description[locale]}
          </p>

          {/* Tags */}
          {tech.tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-1.5">
              {tech.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md bg-bg-interactive px-2 py-0.5 text-xs text-text-muted ring-1 ring-border-subtle transition-colors group-hover:text-text-tertiary"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Hover glow */}
          <div
            aria-hidden
            className={cx(
              "pointer-events-none absolute -bottom-16 -right-16 h-32 w-32 rounded-full blur-3xl",
              "opacity-0 transition-opacity duration-500 group-hover:opacity-100",
              tech.level === "expert"
                ? "bg-emerald/20"
                : tech.level === "advanced"
                  ? "bg-sky/20"
                  : "bg-accent/20"
            )}
          />
        </div>
      </Card>
    </CardShell>
  );
}
