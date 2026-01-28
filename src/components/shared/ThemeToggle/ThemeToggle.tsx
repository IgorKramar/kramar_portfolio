"use client";

import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "@/components/icons";
import { useLocale, useTheme } from "@/contexts";
import { cx } from "@/utils";

export interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        type="button"
        className={cx(
          "inline-flex h-9 w-9 items-center justify-center rounded-xl",
          "bg-bg-interactive ring-1 ring-border-default",
          "text-text-secondary",
          className
        )}
        aria-label="Toggle theme"
        disabled
      >
        <span className="h-4 w-4" />
      </button>
    );
  }

  return <ThemeToggleInner className={className} />;
}

function ThemeToggleInner({ className }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const { t } = useLocale();

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
        className
      )}
      aria-label={theme === "dark" ? t.common.lightTheme : t.common.darkTheme}
    >
      {theme === "dark" ? (
        <SunIcon className="h-4 w-4" />
      ) : (
        <MoonIcon className="h-4 w-4" />
      )}
    </button>
  );
}
