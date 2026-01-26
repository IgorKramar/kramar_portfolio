import { cx } from "@/utils";
import type { ButtonSize, ButtonVariant } from "./types";

export function buttonClasses(variant: ButtonVariant, size: ButtonSize) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl font-semibold outline-none " +
    "transition focus-visible:ring-2 focus-visible:ring-fuchsia-300/60 focus-visible:ring-offset-0 " +
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
          "bg-white text-neutral-950",
          "hover:bg-white/90",
          "shadow-[0_18px_60px_-35px_rgba(255,255,255,0.65)]",
        ].join(" ")
      : variant === "secondary"
        ? [
            "bg-white/5 text-white ring-1 ring-white/10 backdrop-blur-xl",
            "hover:bg-white/10 hover:ring-white/15",
          ].join(" ")
        : [
            "bg-transparent text-white/85",
            "hover:bg-white/5 hover:text-white",
          ].join(" ");

  // subtle fuchsia edge highlight for secondary/ghost
  const accent =
    variant === "primary"
      ? ""
      : "shadow-[inset_0_0_0_1px_rgba(217,70,239,0.08)]";

  return cx(base, sizes, variants, accent);
}
