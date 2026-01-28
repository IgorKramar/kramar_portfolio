"use client";

import { useMemo, useState } from "react";
import { Container } from "@/components/layout";
import { useTranslation } from "@/contexts";
import {
  TECH_CATEGORIES,
  TECH_STACK,
} from "@/data";
import type { TechCategory as TechCategoryType } from '@/interfaces';
import { CategoryFilter, TechCard } from "../components";

export function StackGridSection() {
  const t = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState<
    TechCategoryType | "all"
  >("all");

  const filteredTechs = useMemo(() => {
    if (selectedCategory === "all") return TECH_STACK;
    return TECH_STACK.filter((tech) => tech.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section className="relative py-12 sm:py-16">
      <Container>
        {/* Filters */}
        <div className="sticky top-20 z-30 -mx-4 bg-bg-base/80 px-4 py-4 backdrop-blur-xl sm:-mx-6 sm:px-6">
          <CategoryFilter
            categories={TECH_CATEGORIES}
            selected={selectedCategory}
            onSelect={setSelectedCategory}
          />
        </div>

        {/* Grid or Empty state */}
        {filteredTechs.length > 0 ? (
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredTechs.map((tech) => (
              <TechCard key={tech.id} tech={tech} />
            ))}
          </div>
        ) : (
          <div className="mt-16 text-center">
            <div className="text-6xl">🚀</div>
            <p className="mt-4 text-lg text-text-secondary">{t.stack.empty}</p>
          </div>
        )}
      </Container>
    </section>
  );
}
