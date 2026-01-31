// src/components/pages/experience/components/ExperienceCard/ExperienceCard.tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { Card, Badge, Button } from "@/components/ui";
import { useLocale } from "@/contexts";
import type { Experience } from "@/interfaces";
import { cx } from "@/utils";

interface ExperienceCardProps {
  experience: Experience;
  isExpanded: boolean;
  onToggle: () => void;
}

export function ExperienceCard({ experience, isExpanded, onToggle }: ExperienceCardProps) {
  const { locale } = useLocale();

  return (
    <Card className="group relative overflow-hidden p-6 sm:p-8">
      {/* Highlight glow */}
      {experience.highlight && (
        <div
          aria-hidden
          className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-accent/20 blur-3xl"
        />
      )}

      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-2xl font-semibold text-text-primary">
            {experience.company}
          </h3>
          <p className="mt-1 text-lg text-accent">{experience.role[locale]}</p>

          {/* Meta info */}
          <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-text-muted">
            <span className="flex items-center gap-1">
              <FaClock className="h-3 w-3" />
              {experience.period.start} — {experience.period.end || "настоящее время"}
            </span>
            {experience.location && (
              <span className="flex items-center gap-1">
                <FaMapMarkerAlt className="h-3 w-3" />
                {experience.location}
              </span>
            )}
          </div>
        </div>

        {/* Expand button */}
        <Button
          variant="ghost"
          size="sm"
          onClick={onToggle}
          className="group/btn"
        >
          <FaChevronDown
            className={cx(
              "h-4 w-4 transition-transform",
              isExpanded && "rotate-180"
            )}
          />
        </Button>
      </div>

      {/* Key metrics */}
      <div className="mt-6 grid grid-cols-3 gap-4">
        {experience.keyMetrics.map((metric, i) => (
          <div
            key={i}
            className="rounded-xl bg-bg-interactive p-3 text-center ring-1 ring-border-subtle"
          >
            <div className="text-2xl">{metric.icon}</div>
            <div className="mt-1 text-lg font-semibold text-text-primary">
              {metric.value}
            </div>
            <div className="text-xs text-text-muted">{metric.label[locale]}</div>
          </div>
        ))}
      </div>

      {/* Tech stack */}
      <div className="mt-6 flex flex-wrap gap-2">
        {experience.techStack.slice(0, 5).map((tech) => (
          <Badge key={tech} variant="outline">
            {tech}
          </Badge>
        ))}
        {experience.techStack.length > 5 && (
          <Badge variant="outline">+{experience.techStack.length - 5}</Badge>
        )}
      </div>

      {/* Expandable content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="mt-6 space-y-4 border-t border-border-default pt-6">
              <p className="text-text-secondary">{experience.description[locale]}</p>

              {/* Achievements */}
              <div className="space-y-3">
                <h4 className="font-semibold text-text-primary">Ключевые достижения:</h4>
                {experience.achievements.map((achievement, i) => (
                  <motion.div
                    key={i}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <div className="flex-1">
                      <p className="text-sm text-text-secondary">
                        {achievement.text[locale]}
                      </p>
                      {achievement.impact && (
                        <span className="mt-1 inline-block text-sm font-semibold text-accent">
                          → {achievement.impact}
                        </span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  );
}
