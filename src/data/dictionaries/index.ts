import type { Dictionary, Locale } from "@/interfaces";
import { de } from "./de";
import { en } from "./en";
import { es } from "./es";
import { fr } from "./fr";
import { kz } from "./kz";
import { ru } from "./ru";
import { zh } from "./zh";

export const dictionaries: Record<Locale, Dictionary> = {
  ru,
  en,
  zh,
  es,
  de,
  fr,
  kz,
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
