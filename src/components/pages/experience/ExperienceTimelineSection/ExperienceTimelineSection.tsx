"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExperienceCard } from "../components/ExperienceCard";
import { useLocale } from "@/contexts";
import { EXPERIENCE_DATA } from "@/data/experience";
import { cx } from "@/utils";

export function ExperienceTimelineSection() {
  const { locale, t } = useLocale();
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Заголовок секции */}
      <div className="mb-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-text-primary sm:text-4xl">
            {t.experience.hero.title}
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            {t.experience.hero.subtitle}
          </p>
        </motion.div>
      </div>

      {/* Timeline для десктопа, список для мобилки */}
      <div className="relative">
        {/* Вертикальная линия timeline - только на десктопе */}
        <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-border-default to-transparent md:block" />

        {/* Карточки опыта */}
        <div className="space-y-8 md:space-y-16">
          {EXPERIENCE_DATA.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={cx(
                "relative",
                // На десктопе - зигзаг, на мобилке - просто стэк
                "md:flex md:items-center",
                index % 2 === 0 ? "md:justify-start" : "md:justify-end",
              )}
            >
              {/* Timeline точка - только на десктопе */}
              <div className="absolute left-1/2 hidden -translate-x-1/2 md:block">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                  className="relative"
                >
                  {/* Внешний круг */}
                  <div className="h-4 w-4 rounded-full bg-bg-elevated ring-4 ring-bg-base">
                    {/* Внутренняя точка */}
                    <div
                      className={cx(
                        "absolute inset-1 rounded-full",
                        !experience.period.end
                          ? "animate-pulse bg-emerald"
                          : "bg-accent",
                      )}
                    />
                  </div>

                  {/* Линия-коннектор к карточке - только на десктопе */}
                  <div
                    className={cx(
                      "absolute top-1/2 h-px w-8 -translate-y-1/2 bg-border-subtle",
                      index % 2 === 0 ? "-right-8" : "-left-8",
                    )}
                  />
                </motion.div>
              </div>

              {/* Карточка опыта */}
              <div
                className={cx(
                  "w-full",
                  // На десктопе - половина ширины с отступом от центра
                  "md:w-[calc(50%-2rem)]",
                  // Позиционирование для зигзага на десктопе
                  index % 2 === 0 ? "md:pr-8" : "md:pl-8",
                )}
              >
                <ExperienceCard
                  experience={experience}
                  isExpanded={expandedId === experience.id}
                  onToggle={() => handleToggle(experience.id)}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Индикатор конца timeline - только на десктопе */}
        <div className="mt-16 hidden justify-center md:flex">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: EXPERIENCE_DATA.length * 0.1 }}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-bg-elevated ring-4 ring-bg-base"
          >
            <div className="h-6 w-6 rounded-full bg-gradient-to-br from-accent to-sky" />
          </motion.div>
        </div>
      </div>

      {/* Мобильный индикатор общего опыта */}
      <div className="mt-12 flex justify-center md:hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: EXPERIENCE_DATA.length * 0.1 }}
          className="inline-flex items-center gap-2 rounded-full bg-bg-elevated px-4 py-2 ring-1 ring-border-subtle"
        >
          <span className="text-sm font-medium text-text-secondary">
            {t.common.totalExperience}:
          </span>
          <span className="text-sm font-bold text-accent">
            7+ {t.common.years}
          </span>
        </motion.div>
      </div>
    </section>
  );
}
