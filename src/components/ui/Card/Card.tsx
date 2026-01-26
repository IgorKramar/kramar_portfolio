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
        interactive &&
          "transition-transform duration-300 will-change-transform hover:-translate-y-0.5 focus-within:-translate-y-0.5",
        className,
      )}
    >
      {/* Glow effects — теперь с rounded и без выхода за границы */}
      {glow && (
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
          <div className="absolute inset-0 opacity-0 transition-opacity duration-300 [background:radial-gradient(600px_circle_at_50%_50%,var(--color-accent-subtle),transparent_60%)] group-hover:opacity-100" />
          <div className="absolute inset-0 opacity-40 [background:radial-gradient(800px_circle_at_30%_20%,var(--color-sky-subtle),transparent_50%)]" />
        </div>
      )}
      <div className="relative">{children}</div>
    </div>
  );
}
