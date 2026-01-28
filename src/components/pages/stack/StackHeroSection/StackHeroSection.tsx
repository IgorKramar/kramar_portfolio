"use client";

import { Container } from "@/components/layout";
import { useTranslation } from "@/contexts";
import { TECH_CATEGORIES, TECH_STACK } from "@/data";

export function StackHeroSection() {
  const t = useTranslation();

  const stats = [
    { value: `${TECH_STACK.length}+`, label: t.stack.stats.total },
    { value: String(TECH_CATEGORIES.length), label: t.stack.stats.categories },
    { value: "7+", label: t.stack.stats.years },
  ];

  return (
    <section className="relative -mt-24 overflow-hidden pt-44 sm:pt-52">
      {/* Background effects */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-10 left-1/2 h-150 w-250 -translate-x-1/2 rounded-full opacity-60 blur-3xl [background:radial-gradient(closest-side,var(--color-sky-subtle),transparent)]" />
        <div className="absolute -top-5 right-[15%] h-125 w-150 rounded-full opacity-40 blur-3xl [background:radial-gradient(closest-side,var(--color-accent-subtle),transparent)]" />
      </div>

      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <div className="text-sm font-medium uppercase tracking-widest text-accent">
            {t.stack.hero.label}
          </div>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-text-primary sm:text-5xl lg:text-6xl">
            {t.stack.hero.title}{" "}
            <span className="text-text-secondary">{t.stack.hero.titleAccent}</span>
          </h1>

          <p className="mt-4 text-base text-text-tertiary sm:text-lg">
            {t.stack.hero.description}
          </p>

          {/* Stats */}
          <div className="mt-8 flex flex-wrap justify-center gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-semibold text-text-primary sm:text-3xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-text-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </Container>

      {/* Fade out */}
      <div
        aria-hidden
        className="pointer-events-none relative mt-8 h-16 [background:linear-gradient(to_bottom,transparent,var(--color-bg-base))]"
      />
    </section>
  );
}
