import type { Dictionary, Locale } from "@/interfaces";
import { en } from "./en";
import { ru } from "./ru";

export const dictionaries: Record<Locale, Dictionary> = { ru, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
