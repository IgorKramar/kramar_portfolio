// src/components/pages/experience/ExperienceTimelineSection/ExperienceTimelineSection.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/layout";
import { Badge, Button } from "@/components/ui";
import { useTranslation } from "@/contexts";
import { EXPERIENCE_DATA } from "@/data/experience";
import { ExperienceCard } from "../components";
import { cx } from "@/utils";

export function ExperienceTimelineSection() {
  const t = useTranslation();
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <section className="relative py-20">
      <Container>
        {/* Timeline line */}
        <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-linear-to-b from-transparent via-border-strong to-transparent" />

        {/* Experience items */}
        <div className="relative space-y-16">
          {EXPERIENCE_DATA.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className={cx(
                "relative grid gap-8 lg:grid-cols-2",
                index % 2 === 0 ? "lg:text-right" : "lg:text-left"
              )}
            >
              {/* Timeline dot */}
              <div className="absolute left-1/2 top-8 z-10 -translate-x-1/2">
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="relative h-4 w-4"
                >
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex h-4 w-4 rounded-full bg-accent ring-4 ring-bg-base" />
                </motion.div>
              </div>

              {/* Content */}
              <div className={index % 2 === 0 ? "lg:order-1" : "lg:order-2"}>
                <ExperienceCard
                  experience={exp}
                  isExpanded={selectedId === exp.id}
                  onToggle={() => setSelectedId(selectedId === exp.id ? null : exp.id)}
                />
              </div>

              {/* Empty column for alternating layout */}
              <div className={index % 2 === 0 ? "lg:order-2" : "lg:order-1"} />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
