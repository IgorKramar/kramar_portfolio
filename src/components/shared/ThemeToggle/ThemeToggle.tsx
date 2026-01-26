"use client";

import { MoonIcon, SunIcon } from "@/components/icons";
import { useTheme } from "@/contexts";
import { cx } from "@/utils";

export interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={cx(
        "inline-flex h-9 w-9 items-center justify-center rounded-xl",
        "bg-bg-interactive ring-1 ring-border-default",
        "text-text-secondary",
        "transition hover:bg-bg-interactive-hover hover:text-text-primary",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring",
        className,
      )}
      aria-label={theme === "dark" ? "Включить светлую тему" : "Включить тёмную тему"}
    >
      {theme === "dark" ? (
        <SunIcon className="h-4 w-4" />
      ) : (
        <MoonIcon className="h-4 w-4" />
      )}
    </button>
  );
}
