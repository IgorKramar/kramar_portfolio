"use client";

import { useTranslation } from "@/contexts";
import type { TechCategory, TechCategoryInfo } from "@/interfaces";
import { cx } from "@/utils";

export interface CategoryFilterProps {
  categories: TechCategoryInfo[];
  selected: TechCategory | "all";
  onSelect: (category: TechCategory | "all") => void;
}

export function CategoryFilter({
  categories,
  selected,
  onSelect,
}: CategoryFilterProps) {
  const t = useTranslation();

  return (
    <div className="flex flex-wrap justify-center gap-2">
      {/* All button */}
      <button
        type="button"
        onClick={() => onSelect("all")}
        className={cx(
          "group inline-flex items-center gap-2.5 rounded-xl px-4 py-2.5 text-sm font-medium",
          "ring-1 transition-all duration-200",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring",
          selected === "all"
            ? "bg-accent/15 text-accent ring-accent/30 shadow-[0_0_20px_-5px_var(--color-accent-subtle)]"
            : "bg-bg-interactive text-text-secondary ring-border-default hover:bg-bg-interactive-hover hover:text-text-primary hover:ring-border-strong"
        )}
      >
        <span
          className={cx(
            "flex h-6 w-6 items-center justify-center rounded-lg transition-all duration-200",
            selected === "all"
              ? "bg-accent/20 text-accent"
              : "bg-bg-subtle text-text-muted group-hover:bg-bg-muted group-hover:text-text-secondary"
          )}
        >
          ✦
        </span>
        <span>{t.stack.filters.all}</span>
      </button>

      {/* Category buttons */}
      {categories.map((cat) => {
        const isSelected = selected === cat.id;

        return (
          <button
            key={cat.id}
            type="button"
            onClick={() => onSelect(cat.id)}
            className={cx(
              "group inline-flex items-center gap-2.5 rounded-xl px-4 py-2.5 text-sm font-medium",
              "ring-1 transition-all duration-200",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring",
              isSelected
                ? "bg-accent/15 text-accent ring-accent/30 shadow-[0_0_20px_-5px_var(--color-accent-subtle)]"
                : "bg-bg-interactive text-text-secondary ring-border-default hover:bg-bg-interactive-hover hover:text-text-primary hover:ring-border-strong"
            )}
          >
            <span
              className={cx(
                "flex h-6 w-6 items-center justify-center rounded-lg transition-all duration-200",
                isSelected
                  ? "bg-accent/20 text-accent"
                  : "bg-bg-subtle text-text-muted group-hover:bg-bg-muted group-hover:text-text-secondary"
              )}
            >
              {cat.icon}
            </span>
            <span>{t.stack.categories[cat.id]}</span>
          </button>
        );
      })}
    </div>
  );
}
