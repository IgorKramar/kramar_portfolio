import { cx } from "@/utils";
import type { ButtonSize, ButtonVariant } from "./types";

export function buttonClasses(variant: ButtonVariant, size: ButtonSize) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl font-semibold outline-none " +
    "transition focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-0 " +
    "disabled:opacity-50 disabled:pointer-events-none";

  const sizes =
    size === "sm"
      ? "h-9 px-3 text-sm"
      : size === "lg"
        ? "h-12 px-5 text-base"
        : "h-10 px-4 text-sm";

  const variants =
    variant === "primary"
      ? [
          "bg-transparent text-text-primary",
          "ring-1 ring-border-strong",
          "hover:bg-bg-interactive hover:ring-text-primary",
          "shadow-[0_0_20px_-5px_var(--color-accent-subtle)]",
        ].join(" ")
      : variant === "secondary"
        ? [
            "bg-bg-interactive text-text-primary",
            "ring-1 ring-border-default backdrop-blur-xl",
            "hover:bg-bg-interactive-hover hover:ring-border-strong",
          ].join(" ")
        : [
            "bg-transparent text-text-secondary",
            "hover:bg-bg-interactive hover:text-text-primary",
          ].join(" ");

  const accent =
    variant === "primary"
      ? ""
      : "shadow-[inset_0_0_0_1px_var(--color-accent-muted)]";

  return cx(base, sizes, variants, accent);
}
