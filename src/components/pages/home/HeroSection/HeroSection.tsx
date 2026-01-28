"use client";

import Image from "next/image";
import { Card, Container } from "@/components";
import { useTranslation } from "@/contexts";

const STATS_KEYS = ["experience", "projects", "systems"] as const;
const STATS_VALUES = ["7+", "50+", "12+"];
const STACK = ["React", "TypeScript", "Next.js", "Design Tokens", "a11y"];

export function HeroSection() {
  const t = useTranslation();

  const stats = STATS_KEYS.map((key, i) => ({
    value: STATS_VALUES[i],
    label: t.hero.stats[key],
  }));

  return (
    <section id="top" className="relative -mt-24 overflow-hidden pt-42 sm:pt-52">
      {/* Background effects */}
      <div aria-hidden className="pointer-events-none absolute inset-0 top-0">
        <div className="absolute -top-10 left-1/2 h-150 w-250 -translate-x-1/2 rounded-full opacity-70 blur-3xl [background:radial-gradient(closest-side,var(--color-accent-subtle),transparent)]" />
        <div className="absolute -top-5 left-[15%] h-125 w-150 rounded-full opacity-45 blur-3xl [background:radial-gradient(closest-side,var(--color-sky-subtle),transparent)]" />
        <div className="absolute inset-0 opacity-50 [background:linear-gradient(110deg,transparent,var(--color-bg-interactive),transparent)]" />
      </div>

      <Container className="relative">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left — text */}
          <div className="order-2 lg:order-1">
            <div className="text-sm font-medium uppercase tracking-widest text-accent">
              {t.hero.role}
            </div>

            <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-text-primary sm:text-5xl lg:text-6xl">
              {t.hero.name}
            </h1>

            <p className="mt-4 text-lg font-medium text-text-secondary sm:text-xl">
              {t.hero.subtitle}
            </p>

            <p className="mt-6 max-w-lg text-base leading-relaxed text-text-tertiary">
              {t.hero.description}
            </p>

            {/* Stats */}
            <div className="mt-8 flex flex-wrap gap-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-semibold text-text-primary sm:text-3xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-sm text-text-muted">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — portrait */}
          <div className="order-1 flex justify-center lg:order-2">
            <div className="relative">
              {/* Glow */}
              <div
                aria-hidden
                className="absolute -inset-4 rounded-full opacity-60 blur-3xl [background:radial-gradient(closest-side,var(--color-accent-subtle),var(--color-sky-subtle),transparent)]"
              />

              <div className="relative">
                {/* Decorative rings */}
                <div
                  aria-hidden
                  className="absolute -inset-2 rounded-full border border-border-default opacity-50"
                />
                <div
                  aria-hidden
                  className="absolute -inset-4 rounded-full border border-border-subtle opacity-30"
                />

                {/* Image */}
                <div className="relative h-52 w-52 overflow-hidden rounded-full ring-1 ring-border-default sm:h-64 sm:w-64 lg:h-72 lg:w-72">
                  <Image
                    src="/hero.jpg"
                    alt={t.hero.name}
                    fill
                    className="object-cover object-center"
                    priority
                  />
                </div>

                {/* Floating dots */}
                <div
                  aria-hidden
                  className="absolute -right-1 top-6 h-2.5 w-2.5 rounded-full bg-accent/60 blur-[2px]"
                />
                <div
                  aria-hidden
                  className="absolute -left-2 bottom-10 h-2 w-2 rounded-full bg-sky/50 blur-[1px]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Card with stack and status */}
        <Card className="mt-10 p-5 sm:mt-12 sm:p-6">
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <div className="text-xs font-medium uppercase tracking-widest text-text-muted">
                {t.hero.stack}
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {STACK.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg bg-bg-interactive px-3 py-1.5 text-sm text-text-secondary ring-1 ring-border-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <div className="text-xs font-medium uppercase tracking-widest text-text-muted">
                {t.hero.status}
              </div>
              <div className="mt-3 flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald" />
                </span>
                <span className="text-sm text-text-primary">
                  {t.hero.statusText}
                </span>
              </div>
              <div className="mt-2 text-sm text-text-tertiary">
                {t.hero.availability}
              </div>
            </div>
          </div>
        </Card>
      </Container>

      {/* Section fade out */}
      <div
        aria-hidden
        className="pointer-events-none relative mt-8 h-16 sm:mt-12 sm:h-20 [background:linear-gradient(to_bottom,transparent,var(--color-bg-base))]"
      />
    </section>
  );
}
