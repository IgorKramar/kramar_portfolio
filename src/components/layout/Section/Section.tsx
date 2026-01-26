import type { ReactNode } from "react";
import { cx } from "@/utils";
import { Container } from "../Container";

export interface SectionProps {
  children: ReactNode;
  id?: string;
  title?: string;
  description?: string;
  size?: "default" | "narrow" | "wide";
  tone?: "normal" | "tight" | "loose";
  className?: string;
};

export function Section({
  children,
  id,
  title,
  description,
  size = "default",
  tone = "normal",
  className,
}: SectionProps) {
  const padY =
    tone === "tight"
      ? "py-10 sm:py-12"
      : tone === "loose"
        ? "py-20 sm:py-24"
        : "py-14 sm:py-16";

  return (
    <section
      id={id}
      className={cx(
        // чтобы якорь не уезжал под фиксированный Header
        "scroll-mt-28",
        padY,
        className,
      )}
    >
      <Container size={size}>
        {(title || description) && (
          <header className="mb-8 sm:mb-10">
            {title && (
              <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base">
                {description}
              </p>
            )}
          </header>
        )}

        {children}
      </Container>
    </section>
  );
}
