"use client";

import { useEffect, useRef, useState } from "react";
import { FaCheck, FaChevronDown, FaGlobe } from "react-icons/fa6";
import { useLocale } from "@/contexts";
import type { Locale } from "@/interfaces";
import { cx } from "@/utils";

export interface LocaleToggleProps {
  className?: string;
  variant?: "full" | "compact";
}

interface LocaleOption {
  code: Locale;
  label: string;
  nativeLabel: string;
  flag: string;
}

const LOCALES: LocaleOption[] = [
  { code: "ru", label: "Russian", nativeLabel: "Русский", flag: "🇷🇺" },
  { code: "en", label: "English", nativeLabel: "English", flag: "🇬🇧" },
  { code: "zh", label: "Chinese", nativeLabel: "中文", flag: "🇨🇳" },
  { code: "es", label: "Spanish", nativeLabel: "Español", flag: "🇪🇸" },
  { code: "de", label: "German", nativeLabel: "Deutsch", flag: "🇩🇪" },
  { code: "fr", label: "French", nativeLabel: "Français", flag: "🇫🇷" },
  { code: "kz", label: "Kazakh", nativeLabel: "Қазақша", flag: "🇰🇿" },
];


export function LocaleToggle({ className, variant = "compact" }: LocaleToggleProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        type="button"
        className={cx(
          "inline-flex h-9 items-center justify-center gap-1.5 rounded-xl px-2.5",
          "bg-bg-interactive ring-1 ring-border-default",
          "text-sm font-medium text-text-secondary",
          className
        )}
        disabled
      >
        <FaGlobe className="h-3.5 w-3.5" />
        <span className="text-xs uppercase">RU</span>
      </button>
    );
  }

  return <LocaleToggleInner className={className} variant={variant} />;
}

function LocaleToggleInner({ className, variant }: LocaleToggleProps) {
  const { locale, setLocale } = useLocale();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const currentLocale = LOCALES.find((l) => l.code === locale) || LOCALES[0];

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  // Clean up timeout
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleSelect = (code: Locale) => {
    setLocale(code);
    // Delay close for smooth animation
    timeoutRef.current = setTimeout(() => setIsOpen(false), 150);
  };

  return (
    <div ref={containerRef} className={cx("relative", className)}>
      {/* Trigger button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={cx(
          "group inline-flex h-9 items-center justify-center gap-1.5 rounded-xl",
          "bg-bg-interactive ring-1 ring-border-default",
          "text-sm font-medium text-text-secondary",
          "transition-all duration-200",
          "hover:bg-bg-interactive-hover hover:text-text-primary hover:ring-border-strong",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring",
          isOpen && "bg-bg-interactive-hover ring-border-strong",
          variant === "full" ? "px-3" : "px-2.5"
        )}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label={`${currentLocale.nativeLabel}. Change language`}
      >
        {/* Globe icon with subtle animation */}
        <FaGlobe
          className={cx(
            "h-3.5 w-3.5 transition-transform duration-300",
            isOpen && "rotate-12"
          )}
        />

        {/* Current locale */}
        {variant === "full" ? (
          <span className="hidden sm:inline">{currentLocale.nativeLabel}</span>
        ) : (
          <span className="text-xs font-semibold uppercase tracking-wide">
            {currentLocale.code}
          </span>
        )}

        {/* Chevron */}
        <FaChevronDown
          className={cx(
            "h-2.5 w-2.5 text-text-muted transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>

      {/* Dropdown */}
      <div
        className={cx(
          "absolute right-0 top-full z-50 mt-2 min-w-45 origin-top-right",
          "transition-all duration-200 ease-out",
          isOpen
            ? "scale-100 opacity-100"
            : "pointer-events-none scale-95 opacity-0"
        )}
      >
        {/* Dropdown card - dark glass */}
        <div className="overflow-hidden rounded-xl border border-border-default bg-bg-base/90 shadow-xl backdrop-blur-2xl backdrop-saturate-150">
          {/* Subtle inner glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-xl"
          >
            <div className="absolute inset-0 opacity-40 [background:radial-gradient(150px_circle_at_50%_0%,var(--color-accent-subtle),transparent_70%)]" />
            <div className="absolute inset-0 bg-linear-to-b from-white/3 to-transparent" />
          </div>

          {/* Top shine */}
          <div
            aria-hidden
            className="absolute inset-x-0 top-0 h-px [background:linear-gradient(90deg,transparent,var(--color-border-strong)_50%,transparent)]"
          />

          {/* Options list */}
          <div className="relative p-1.5" role="listbox">
            {LOCALES.map((option) => {
              const isSelected = option.code === locale;

              return (
                <button
                  key={option.code}
                  type="button"
                  role="option"
                  aria-selected={isSelected}
                  onClick={() => handleSelect(option.code)}
                  className={cx(
                    "group flex w-full items-center gap-3 rounded-lg px-3 py-2.5",
                    "text-left text-sm transition-all duration-150",
                    "focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-focus-ring",
                    isSelected
                      ? "bg-accent/20 text-text-primary ring-1 ring-accent/30"
                      : "text-text-secondary hover:bg-white/5 hover:text-text-primary"
                  )}
                >
                  {/* Flag with hover scale */}
                  <span
                    className={cx(
                      "text-base transition-transform duration-200",
                      !isSelected && "group-hover:scale-110"
                    )}
                  >
                    {option.flag}
                  </span>

                  {/* Labels */}
                  <div className="flex flex-1 flex-col gap-0.5">
                    <span className="font-medium leading-none">{option.nativeLabel}</span>
                    <span
                      className={cx(
                        "text-xs leading-none",
                        isSelected ? "text-accent" : "text-text-muted"
                      )}
                    >
                      {option.label}
                    </span>
                  </div>

                  {/* Check mark */}
                  <div
                    className={cx(
                      "flex h-5 w-5 items-center justify-center rounded-full transition-all duration-200",
                      isSelected
                        ? "bg-accent text-white scale-100"
                        : "scale-0"
                    )}
                  >
                    <FaCheck className="h-2.5 w-2.5" />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Bottom hint */}
          <div className="border-t border-white/6 px-3 py-2">
            <p className="text-center text-[10px] uppercase tracking-wider text-text-muted/70">
              {locale === "ru" ? "Язык интерфейса" : "Interface language"}
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}
