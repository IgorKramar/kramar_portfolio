export type Locale = "ru" | "en" | "zh" | "es" | "de" | "fr" | "kz";

export interface Dictionary {
  // Meta
  meta: {
    title: string;
    description: string;
  };

  // Navigation
  nav: {
    home: string;
    projects: string;
    experience: string;
    contact: string;
  };

  // Hero
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

  // Achievements
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

  // Principles
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

  // Contact
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

  // Footer
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

  // Common
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
}
