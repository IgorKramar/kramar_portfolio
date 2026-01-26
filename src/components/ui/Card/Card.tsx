import type { ReactNode } from "react";
import { cx } from "@/utils";

export interface CardProps {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
}

export function Card({ children, className, interactive = false }: CardProps) {
  return (
    <div
      className={cx(
        "relative overflow-hidden rounded-2xl",
        "border border-border-default bg-bg-elevated backdrop-blur-xl",
        "shadow-lg",
        interactive &&
          "transition-transform duration-300 will-change-transform hover:-translate-y-0.5 focus-within:-translate-y-0.5",
        className,
      )}
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -inset-12 opacity-0 transition-opacity duration-300 [background:radial-gradient(700px_circle_at_20%_15%,var(--color-accent-subtle),transparent_55%)] group-hover:opacity-100" />
        <div className="absolute -inset-[2px] opacity-60 [background:conic-gradient(from_180deg_at_50%_50%,var(--color-accent-subtle),var(--color-sky-subtle),var(--color-emerald-subtle),var(--color-accent-subtle))] blur-2xl" />
        <div className="absolute inset-0 opacity-70 [mask-image:linear-gradient(to_bottom,black,transparent)] [background:linear-gradient(115deg,transparent,var(--color-bg-interactive),transparent)] motion-safe:animate-[sheen_10s_ease-in-out_infinite]" />
      </div>
      <div className="relative">{children}</div>
    </div>
  );
}
