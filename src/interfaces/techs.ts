import type { ReactNode } from "react";
import type { Locale } from "./i18n";

export type TechLevel = "expert" | "advanced" | "familiar";

export type TechCategory =
  | "frontend"
  | "backend"
  | "database"
  | "devops"
  | "testing"
  | "tools"
  | "ai";

export interface Tech {
  id: string;
  name: string;
  icon: ReactNode;
  level: TechLevel;
  category: TechCategory;
  description: Record<Locale, string>;
  tags: string[];
  highlight?: boolean;
}

export interface TechCategoryInfo {
  id: TechCategory;
  icon: ReactNode;
}
