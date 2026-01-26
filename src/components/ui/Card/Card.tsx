import type { ReactNode } from "react";
import { cx } from "@/utils";

export interface CardProps {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
};

export function Card({ children, className, interactive = false }: CardProps) {
  return (
    <div
      className={cx(
        "relative overflow-hidden rounded-2xl",
        "border border-white/10 bg-neutral-950/35 backdrop-blur-xl",
        "shadow-[0_20px_90px_-55px_rgba(0,0,0,0.95)]",
        interactive &&
          "transition-transform duration-300 will-change-transform hover:-translate-y-0.5 focus-within:-translate-y-0.5",
        className,
      )}
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -inset-12 opacity-0 transition-opacity duration-300 [background:radial-gradient(700px_circle_at_20%_15%,rgba(217,70,239,0.18),transparent_55%)] group-hover:opacity-100" />
        <div className="absolute -inset-[2px] opacity-60 [background:conic-gradient(from_180deg_at_50%_50%,rgba(217,70,239,0.22),rgba(56,189,248,0.10),rgba(34,197,94,0.08),rgba(217,70,239,0.22))] blur-2xl" />
        <div className="absolute inset-0 opacity-70 [mask-image:linear-gradient(to_bottom,black,transparent)] [background:linear-gradient(115deg,transparent,rgba(255,255,255,0.07),transparent)] motion-safe:animate-[sheen_10s_ease-in-out_infinite]" />
      </div>
      <div className="relative">{children}</div>
    </div>
  );
}
