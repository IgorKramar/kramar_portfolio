// src/components/pages/experience/ExperienceHeroSection/ExperienceHeroSection.tsx
"use client";

import { Container } from "@/components/layout";
import { Badge } from "@/components/ui";
import { useLocale } from "@/contexts";
import { getTotalExperience, getKeyAchievements } from "@/data/experience";
import { motion } from "framer-motion";

export function ExperienceHeroSection() {
  const { t, locale } = useLocale();
  const totalExp = getTotalExperience();
  const topAchievements = getKeyAchievements().slice(0, 3);

  return (
    <section className="relative -mt-24 overflow-hidden pt-44 sm:pt-52">
      {/* Animated gradient background */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 left-1/2 h-150 w-200 -translate-x-1/2 animate-pulse rounded-full opacity-30 blur-3xl [background:radial-gradient(closest-side,var(--color-accent-subtle),transparent)]" />
        <div className="absolute right-0 top-1/2 h-100 w-100 -translate-y-1/2 animate-pulse rounded-full opacity-20 blur-3xl delay-700 [background:radial-gradient(closest-side,var(--color-emerald-subtle),transparent)]" />
      </div>

      <Container className="relative">
        <div className="mx-auto max-w-4xl text-center">
          {/* Experience badge with animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="accent" className="inline-flex gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald" />
              </span>
              {totalExp} {t.experience?.hero?.badge || "years of experience"}
            </Badge>
          </motion.div>

          {/* Title with gradient */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl"
          >
            <span className="bg-linear-to-r from-text-primary via-accent to-text-primary bg-clip-text text-transparent">
              {t.experience?.hero?.title || "Professional Experience"}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg text-text-tertiary sm:text-xl"
          >
            {t.experience?.hero?.subtitle ||
              "Building scalable systems and teams"}
          </motion.p>

          {/* Key metrics carousel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-wrap justify-center gap-6"
          >
            {topAchievements.map((achievement, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="group relative"
              >
                <div className="absolute -inset-2 rounded-2xl bg-linear-to-r from-accent/20 to-sky/20 opacity-0 blur-xl transition-opacity group-hover:opacity-100" />
                <div className="relative rounded-2xl bg-bg-elevated px-6 py-4 ring-1 ring-border-default">
                  <div className="text-2xl font-bold text-accent">
                    {achievement.impact}
                  </div>
                  <div className="mt-1 text-sm text-text-secondary">
                    {achievement.text[locale]}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
