"use client";

import { useEffect, useState } from "react";
import { useLocale } from "@/contexts";
import { cx } from "@/utils";

export interface LocaleToggleProps {
  className?: string;
}

export function LocaleToggle({ className }: LocaleToggleProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        type="button"
        className={cx(
          "inline-flex h-9 items-center justify-center gap-1 rounded-xl px-2",
          "bg-bg-interactive ring-1 ring-border-default",
          "text-sm font-medium text-text-secondary",
          className
        )}
        disabled
      >
        <span className="w-5 text-center">RU</span>
        <span className="text-text-muted">/</span>
        <span className="w-5 text-center text-text-muted">EN</span>
      </button>
    );
  }

  return <LocaleToggleInner className={className} />;
}

function LocaleToggleInner({ className }: LocaleToggleProps) {
  const { locale, toggleLocale } = useLocale();

  return (
    <button
      type="button"
      onClick={toggleLocale}
      className={cx(
        "inline-flex h-9 items-center justify-center gap-1 rounded-xl px-2",
        "bg-bg-interactive ring-1 ring-border-default",
        "text-sm font-medium",
        "transition hover:bg-bg-interactive-hover",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring",
        className
      )}
      aria-label={locale === "ru" ? "Switch to English" : "Переключить на русский"}
    >
      <span
        className={cx(
          "w-5 text-center transition-colors",
          locale === "ru" ? "text-text-primary" : "text-text-muted"
        )}
      >
        RU
      </span>
      <span className="text-text-muted">/</span>
      <span
        className={cx(
          "w-5 text-center transition-colors",
          locale === "en" ? "text-text-primary" : "text-text-muted"
        )}
      >
        EN
      </span>
    </button>
  );
}
