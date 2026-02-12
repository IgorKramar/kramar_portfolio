"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExperienceCard } from "../components/ExperienceCard";
import { CompanyLogo } from "../components/CompanyLogo";
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
    <section className="relative mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Timeline */}
      <div className="relative">
        {/* Вертикальная линия timeline - только на десктопе */}
        <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-border-default to-transparent md:block" />

        {/* Карточки опыта с логотипами */}
        <div className="space-y-8 md:space-y-16">
          {EXPERIENCE_DATA.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {/* Контейнер для карточки и логотипа */}
              <div
                className={cx(
                  "flex items-center gap-4",
                  // На мобилке - логотип слева, карточка справа
                  "flex-col sm:flex-row",
                  // На десктопе - зигзаг
                  "md:flex-row",
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse",
                )}
              >
                {/* Логотип компании - на мобилке сверху, на десктопе сбоку */}
                <div className="shrink-0 sm:block">
                  <motion.div
                    initial={{ scale: 0, rotate: -10 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                  >
                    <CompanyLogo
                      company={experience.company}
                      logo={experience.logo}
                      url={experience.companyUrl}
                    />
                  </motion.div>
                </div>

                {/* Timeline точка - только на десктопе между логотипом и карточкой */}
                <div className="relative hidden md:block">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
                    className="relative"
                  >
                    <div className="h-4 w-4 rounded-full bg-bg-elevated ring-4 ring-bg-base">
                      <div
                        className={cx(
                          "absolute inset-1 rounded-full",
                          !experience.period.end
                            ? "animate-pulse bg-emerald"
                            : "bg-accent",
                        )}
                      />
                    </div>
                  </motion.div>
                </div>

                {/* Карточка опыта */}
                <div className="flex-1">
                  <ExperienceCard
                    experience={experience}
                    isExpanded={expandedId === experience.id}
                    onToggle={() => handleToggle(experience.id)}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Индикатор конца timeline */}
        <div className="mt-16 flex justify-center">
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
    </section>
  );
}
