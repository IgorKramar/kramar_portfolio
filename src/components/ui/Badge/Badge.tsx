import type { HTMLAttributes } from "react";
import { cx } from "@/utils";

export type BadgeVariant = "neutral" | "accent" | "outline";

export type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: BadgeVariant;
};

export function Badge({ variant = "neutral", className, ...rest }: BadgeProps) {
  const base =
    "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium tracking-tight select-none";

  const variants =
    variant === "accent"
      ? "bg-accent-subtle text-accent-text ring-1 ring-accent/20"
      : variant === "outline"
        ? "bg-transparent text-text-secondary ring-1 ring-border-strong"
        : "bg-bg-interactive text-text-secondary ring-1 ring-border-default";

  return <span {...rest} className={cx(base, variants, className)} />;
}
