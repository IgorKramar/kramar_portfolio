import type { ReactNode } from "react";
import { cx } from "@/utils";

export interface CardProps {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
  glow?: boolean;
}

export function Card({
  children,
  className,
  interactive = false,
  glow = true,
}: CardProps) {
  return (
    <div
      className={cx(
        "relative rounded-2xl",
        "border border-border-default bg-bg-elevated backdrop-blur-xl",
        "shadow-lg",
        "in-data-[theme='light']:bg-[linear-gradient(135deg,oklch(1_0_0/0.95),oklch(0.98_0.005_270/0.9))]",
        "in-data-[theme='light']:shadow-[0_1px_0_oklch(1_0_0/0.8)_inset,0_4px_24px_-8px_oklch(0.2_0.02_270/0.1)]",
        interactive &&
          "transition-transform duration-300 will-change-transform hover:-translate-y-0.5 focus-within:-translate-y-0.5",
        className,
      )}
    >
      {glow && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl"
        >
          <div className="absolute inset-0 opacity-0 transition-opacity duration-300 [background:radial-gradient(600px_circle_at_50%_50%,var(--color-accent-subtle),transparent_60%)] group-hover:opacity-100 in-data-[theme='light']:group-hover:opacity-60" />
          <div className="absolute inset-0 opacity-40 [background:radial-gradient(800px_circle_at_30%_20%,var(--color-sky-subtle),transparent_50%)] in-data-[theme='light']:opacity-20" />
          <div className="absolute inset-x-4 top-0 hidden h-px in-data-[theme='light']:block [background:linear-gradient(90deg,transparent,oklch(1_0_0/0.7),transparent)]" />
        </div>
      )}
      <div className="relative">{children}</div>
    </div>
  );
}
