import type { Locale } from "@/interfaces";

export interface Achievement {
  text: Record<Locale, string>;
  impact?: string;
  tags?: string[];
}

export interface Experience {
  id: string;
  company: string;
  companyUrl?: string;
  logo: string;

  role: Record<Locale, string>;
  period: {
    start: string;
    end?: string; // undefined = настоящее время
  };
  location?: string;
  format: "remote" | "hybrid" | "office";
  type: "fulltime" | "contract" | "freelance";

  description: Record<Locale, string>;

  keyMetrics: {
    icon: string;
    value: string;
    label: Record<Locale, string>;
  }[];

  techStack: string[];

  achievements: Achievement[];

  project?: Record<Locale, string>;

  highlight?: boolean;
}
