export type Locale = "ru" | "en" | "zh" | "es" | "de" | "fr" | "kz";

export interface Dictionary {
  meta: {
    title: string;
    description: string;
  };

  nav: {
    home: string;
    stack: string;
    projects: string;
    experience: string;
    contact: string;
  };

  hero: {
    role: string;
    name: string;
    subtitle: string;
    description: string;
    stats: {
      experience: string;
      projects: string;
      systems: string;
    };
    stack: string;
    status: string;
    statusText: string;
    availability: string;
  };

  achievements: {
    label: string;
    title: string;
    description: string;
    items: {
      metric: string;
      metricSuffix: string;
      label: string;
      description: string;
      highlight: string;
    }[];
    impact: {
      title: string;
      subtitle: string;
      stats: { value: string; label: string }[];
    };
  };

  principles: {
    label: string;
    title: string;
    description: string;
    quote: string;
    items: {
      title: string;
      subtitle: string;
      description: string;
      keywords: string[];
    }[];
  };

  contact: {
    badge: string;
    title: string;
    titleAccent: string;
    description: string;
    emailLabel: string;
    sendEmail: string;
    copyEmail: string;
    copied: string;
    or: string;
    socials: string;
    responseTime: string;
    timezone: string;
  };

  footer: {
    role: string;
    description: string;
    write: string;
    navigation: string;
    contacts: string;
    aboutSite: string;
    aboutSiteText: string;
    sourceCode: string;
    copyright: string;
  };

  common: {
    telegram: string;
    github: string;
    email: string;
    toTop: string;
    openMenu: string;
    closeMenu: string;
    toggleTheme: string;
    lightTheme: string;
    darkTheme: string;
  };

  stack: {
    meta: {
      title: string;
      description: string;
    };
    hero: {
      label: string;
      title: string;
      titleAccent: string;
      description: string;
    };
    filters: {
      all: string;
    };
    levels: {
      expert: string;
      advanced: string;
      familiar: string;
    };
    categories: {
      frontend: string;
      backend: string;
      database: string;
      devops: string;
      testing: string;
      tools: string;
      ai: string;
    };
    stats: {
      total: string;
      categories: string;
      years: string;
    };
    empty: string;
  };

  experience?: {
  meta?: {
    title: string;
    description: string;
  };
  hero?: {
    badge: string;
    title: string;
    subtitle: string;
  };
};
}
