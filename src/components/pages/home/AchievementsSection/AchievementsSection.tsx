"use client";

import {
  FaBolt,
  FaChartLine,
  FaPalette,
  FaUniversalAccess,
} from "react-icons/fa6";
import { Card, Container } from "@/components";
import { useTranslation } from "@/contexts";
import { AchievementCard } from "./components";

const ICONS = [
  <FaChartLine key="chart" className="text-2xl text-text-primary transition-colors duration-300 group-hover:text-accent" />,
  <FaPalette key="palette" className="text-2xl text-text-primary transition-colors duration-300 group-hover:text-accent" />,
  <FaUniversalAccess key="access" className="text-2xl text-text-primary transition-colors duration-300 group-hover:text-accent" />,
  <FaBolt key="bolt" className="text-2xl text-text-primary transition-colors duration-300 group-hover:text-accent" />,
];

export function AchievementsSection() {
  const t = useTranslation();

  const achievements = t.achievements.items.map((item, index) => ({
    ...item,
    icon: ICONS[index],
  }));

  return (
    <section id="achievements" className="relative py-12 sm:py-16">
      {/* Background accent */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-150 w-200 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 blur-3xl [background:radial-gradient(closest-side,var(--color-accent-subtle),transparent)]" />
      </div>

      <Container className="relative">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="text-sm font-medium uppercase tracking-widest text-accent">
            {t.achievements.label}
          </div>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
            {t.achievements.title}
          </h2>
          <p className="mt-4 text-base text-text-tertiary sm:text-lg">
            {t.achievements.description}
          </p>
        </div>

        {/* Main grid */}
        <div className="mt-14 grid gap-4 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4">
          {achievements.map((item, index) => (
            <AchievementCard key={item.label} {...item} index={index} />
          ))}
        </div>

        {/* Bottom impact bar */}
        <Card className="mt-10 sm:mt-14" glow={false}>
          <div className="flex flex-col items-center justify-between gap-6 px-6 py-6 sm:flex-row sm:px-10 sm:py-8">
            <div className="text-center sm:text-left">
              <div className="text-lg font-semibold text-text-primary sm:text-xl">
                {t.achievements.impact.title}
              </div>
              <div className="mt-1 text-sm text-text-tertiary">
                {t.achievements.impact.subtitle}
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-8 sm:gap-12">
              {t.achievements.impact.stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-semibold text-text-primary sm:text-3xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs text-text-muted">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </Container>
    </section>
  );
}
