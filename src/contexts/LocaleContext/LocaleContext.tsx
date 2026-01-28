"use client";

import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import type { Dictionary, Locale } from "@/interfaces";
import { getDictionary } from "@/data";

interface LocaleContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  t: Dictionary;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

const STORAGE_KEY = "locale";
const DEFAULT_LOCALE: Locale = "ru";

function detectSystemLocale(): Locale {
  if (typeof window === "undefined") return DEFAULT_LOCALE;

  const browserLang = navigator.language.toLowerCase();

  if (browserLang.startsWith("ru")) return "ru";
  if (browserLang.startsWith("en")) return "en";

  return DEFAULT_LOCALE;
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const stored = localStorage.getItem(STORAGE_KEY) as Locale | null;

    if (stored && (stored === "ru" || stored === "en")) {
      setLocaleState(stored);
    } else {
      const detected = detectSystemLocale();
      setLocaleState(detected);
    }
  }, []);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem(STORAGE_KEY, newLocale);
    document.documentElement.setAttribute("lang", newLocale);
  }, []);

  const toggleLocale = useCallback(() => {
    setLocale(locale === "ru" ? "en" : "ru");
  }, [locale, setLocale]);

  // Update html lang attribute
  useEffect(() => {
    if (mounted) {
      document.documentElement.setAttribute("lang", locale);
    }
  }, [locale, mounted]);

  const t = getDictionary(locale);

  if (!mounted) {
    // SSR: return default locale dictionary
    return (
      <LocaleContext.Provider
        value={{
          locale: DEFAULT_LOCALE,
          setLocale: () => {},
          toggleLocale: () => {},
          t: getDictionary(DEFAULT_LOCALE),
        }}
      >
        {children}
      </LocaleContext.Provider>
    );
  }

  return (
    <LocaleContext.Provider value={{ locale, setLocale, toggleLocale, t }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within LocaleProvider");
  }
  return context;
}

export function useTranslation() {
  const { t } = useLocale();
  return t;
}
