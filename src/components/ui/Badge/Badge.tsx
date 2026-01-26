import type { HTMLAttributes } from "react";
import { cx } from "@/utils";

export type BadgeVariant = "neutral" | "fuchsia" | "outline";

export type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: BadgeVariant;
};

export function Badge({ variant = "neutral", className, ...rest }: BadgeProps) {
  const base =
    "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium " +
    "tracking-tight select-none";

  const variants =
    variant === "fuchsia"
      ? "bg-fuchsia-400/12 text-fuchsia-100 ring-1 ring-fuchsia-300/20"
      : variant === "outline"
        ? "bg-transparent text-white/70 ring-1 ring-white/15"
        : "bg-white/5 text-white/70 ring-1 ring-white/10";

  return <span {...rest} className={cx(base, variants, className)} />;
}
