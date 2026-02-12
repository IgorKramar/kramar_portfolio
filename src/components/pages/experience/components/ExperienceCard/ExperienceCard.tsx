"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaChevronDown,
  FaMapMarkerAlt,
  FaClock,
  FaCheckCircle,
  FaPalette,
  FaUniversalAccess,
  FaArrowRight,
  FaRocket,
  FaChartLine,
  FaTachometerAlt,
  FaUsers,
  FaExchangeAlt,
  FaShieldAlt,
  FaServer,
  FaBolt,
  FaRedo,
  FaUserGraduate,
  FaProjectDiagram,
  FaDollarSign,
  FaChartArea,
  FaEye,
  FaHourglass,
  FaCogs,
} from "react-icons/fa";
import { Card, Badge, Button } from "@/components/ui";
import { useLocale } from "@/contexts";
import type { Experience } from "@/interfaces";
import { cx } from "@/utils";

const iconMap: Record<string, React.ReactNode> = {
  check: <FaCheckCircle className="h-4 w-4" />,
  palette: <FaPalette className="h-4 w-4" />,
  accessibility: <FaUniversalAccess className="h-4 w-4" />,
  rocket: <FaRocket className="h-4 w-4" />,
  chart: <FaChartLine className="h-4 w-4" />,
  speed: <FaTachometerAlt className="h-4 w-4" />,
  team: <FaUsers className="h-4 w-4" />,
  transaction: <FaExchangeAlt className="h-4 w-4" />,
  coverage: <FaShieldAlt className="h-4 w-4" />,
  users: <FaUsers className="h-4 w-4" />,
  server: <FaServer className="h-4 w-4" />,
  performance: <FaBolt className="h-4 w-4" />,
  realtime: <FaClock className="h-4 w-4" />,
  optimize: <FaRedo className="h-4 w-4" />,
  mentor: <FaUserGraduate className="h-4 w-4" />,
  projects: <FaProjectDiagram className="h-4 w-4" />,
  revenue: <FaDollarSign className="h-4 w-4" />,
  traffic: <FaChartArea className="h-4 w-4" />,
  visitors: <FaEye className="h-4 w-4" />,
  loadtime: <FaHourglass className="h-4 w-4" />,
  automation: <FaCogs className="h-4 w-4" />,
};

interface ExperienceCardProps {
  experience: Experience;
  isExpanded: boolean;
  onToggle: () => void;
}

export function ExperienceCard({
  experience,
  isExpanded,
  onToggle,
}: ExperienceCardProps) {
  const { locale, t } = useLocale();
  const [isTextExpanded, setIsTextExpanded] = useState(false);

  // Форматирование даты
  const formatDate = (dateStr: string) => {
    const [year, month] = dateStr.split("-");
    const monthName =
      t.experience.months[month as keyof typeof t.experience.months];
    return `${monthName} ${year}`;
  };

  // Обрезка текста для превью
  const truncateText = (text: string, maxLength: number = 250) => {
    if (text.length <= maxLength) return text;
    const trimmed = text.substring(0, maxLength).trim();
    const lastSpace = trimmed.lastIndexOf(" ");
    return trimmed.substring(0, lastSpace) + "...";
  };

  const descriptionText = experience.description[locale];
  const needsTruncation = descriptionText.length > 250;
  const displayText = isTextExpanded
    ? descriptionText
    : truncateText(descriptionText);

  // Формат работы
  const workFormat = {
    remote: t.experience.card.remote,
    hybrid: t.experience.card.hybrid,
    office: t.experience.card.office,
  }[experience.format];

  return (
    <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-bg-elevated to-bg-subtle/30 p-0 ring-1 ring-border-subtle transition-all hover:ring-border-default">
      {/* Индикатор текущей работы */}
      {!experience.period.end && (
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
      )}

      <div className="px-6 py-5 sm:px-8 sm:py-6">
        {/* Заголовок */}
        <header className="text-left">
          <h3 className="text-2xl font-bold text-text-primary">
            {experience.company}
          </h3>

          <p className="mt-1.5 text-lg font-medium text-accent">
            {experience.role[locale]}
          </p>

          {/* Метаданные */}
          <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-text-tertiary">
            <span className="flex items-center gap-1.5">
              <FaClock className="h-3 w-3" />
              {formatDate(experience.period.start)} —{" "}
              {experience.period.end ? (
                formatDate(experience.period.end)
              ) : (
                <span className="text-emerald font-medium">
                  {t.experience.card.present}
                </span>
              )}
            </span>

            {experience.location && (
              <span className="flex items-center gap-1.5">
                <FaMapMarkerAlt className="h-3 w-3" />
                {experience.location}
              </span>
            )}

            <Badge variant="outline" className="h-5 px-2 text-xs">
              {workFormat}
            </Badge>
          </div>
        </header>

        {/* Описание - ВАЖНО: text-left вместо justify */}
        <section className="mt-5 text-left">
          <p className="text-sm leading-[1.7] text-text-secondary">
            {displayText}
          </p>

          {needsTruncation && (
            <button
              onClick={() => setIsTextExpanded(!isTextExpanded)}
              className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent/80"
            >
              {isTextExpanded
                ? t.experience.card.readLess
                : t.experience.card.readMore}
              <FaArrowRight
                className={cx(
                  "h-3 w-3 transition-transform",
                  isTextExpanded && "rotate-270",
                )}
              />
            </button>
          )}
        </section>

        {/* Метрики */}
        <section className="mt-6 grid grid-cols-3 gap-4">
          {experience.keyMetrics.map((metric, i) => (
            <div key={i} className="text-center">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-bg-base/50 text-accent ring-1 ring-border-subtle">
                {iconMap[metric.icon]}
              </div>
              <div className="mt-2 text-xl font-bold text-text-primary">
                {metric.value}
              </div>
              <div className="text-[10px] font-medium uppercase tracking-wide text-text-muted">
                {metric.label[locale]}
              </div>
            </div>
          ))}
        </section>

        {/* Технологии */}
        <section className="mt-6 text-left">
          <div className="flex flex-wrap gap-1.5">
            {experience.techStack.map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="h-6 border-border-subtle bg-bg-base/30 px-2 text-[11px] hover:border-accent/30"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </section>

        {/* Кнопка достижений */}
        <div className="mt-6 flex items-center justify-between border-t border-border-subtle pt-4">
          <span className="text-xs font-medium uppercase tracking-wide text-text-muted">
            {t.experience.card.achievements}
          </span>

          <Button
            variant="ghost"
            size="sm"
            onClick={onToggle}
            className="h-7 gap-1.5 px-3"
          >
            <span className="text-xs">
              {isExpanded
                ? t.experience.card.showLess
                : t.experience.card.showMore}
            </span>
            <FaChevronDown
              className={cx(
                "h-3 w-3 transition-transform",
                isExpanded && "rotate-180",
              )}
            />
          </Button>
        </div>

        {/* Достижения - text-left */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <section className="mt-4 space-y-4 text-left">
                {experience.achievements.map((achievement, i) => (
                  <motion.article
                    key={i}
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.05 }}
                    className="relative"
                  >
                    {/* Номер и текст на одном уровне */}
                    <div className="flex gap-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10 text-[10px] font-bold text-accent">
                        {String(i + 1).padStart(2, "0")}
                      </span>

                      <div className="flex-1 space-y-2">
                        {/* Текст достижения - text-left */}
                        <p className="text-left text-sm leading-[1.7] text-text-secondary">
                          {achievement.text[locale]}
                        </p>

                        {/* Impact и теги */}
                        {(achievement.impact || achievement.tags) && (
                          <div className="flex flex-wrap items-center gap-1.5">
                            {achievement.impact && (
                              <span className="inline-flex items-center gap-1 rounded-full bg-accent/10 px-2 py-0.5">
                                <FaRocket className="h-2.5 w-2.5 text-accent" />
                                <span className="text-[11px] font-semibold text-accent">
                                  {achievement.impact}
                                </span>
                              </span>
                            )}

                            {achievement.tags?.map((tag) => (
                              <span
                                key={tag}
                                className="rounded bg-bg-interactive px-1.5 py-0.5 text-[10px] text-text-muted"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.article>
                ))}
              </section>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Card>
  );
}
