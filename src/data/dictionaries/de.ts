import type { Dictionary } from "@/interfaces";

export const de: Dictionary = {
  meta: {
    title: "Igor Kramar — Senior Frontend / UI-Systemarchitekt",
    description:
      "Portfolio: UI-Architektur, Design-Systeme, Tokens, Theming, Barrierefreiheit, Testing und Qualität.",
  },

  nav: {
    home: "Startseite",
    stack: "Stack",
    projects: "Projekte",
    experience: "Erfahrung",
    contact: "Kontakt",
  },

  hero: {
    role: "Senior Frontend Engineer",
    name: "Igor Kramar",
    subtitle: "UI-Systemarchitekt",
    description:
      "Ich entwerfe Design-Systeme, implementiere Tokens und Theming, richte Quality Gates ein. Ich sorge dafür, dass Interfaces schnell gebaut werden, konsistent aussehen und für alle funktionieren.",
    stats: {
      experience: "Jahre Erfahrung",
      projects: "Projekte",
      systems: "UI-Systeme",
    },
    stack: "Haupt-Stack",
    status: "Status",
    statusText: "Offen für Angebote",
    availability: "Remote oder Hybrid · Moskau ±3 Stunden",
  },

  achievements: {
    label: "Ergebnisse",
    title: "Was sich nach einem systematischen Ansatz ändert",
    description:
      "Messbare Verbesserungen in Qualität, Geschwindigkeit und Vorhersagbarkeit der Entwicklung",
    items: [
      {
        metric: "89%",
        metricSuffix: "Abdeckung",
        label: "Testing",
        description:
          "Von null zu stabiler Regression in CI. Kritische Szenarien unter Kontrolle.",
        highlight: "0% → 89%",
      },
      {
        metric: "40+",
        metricSuffix: "Komponenten",
        label: "Design-System",
        description:
          "Tokens, Theming, Dokumentation. Einzige Wahrheitsquelle für das gesamte Team.",
        highlight: "Tokens → UI",
      },
      {
        metric: "AA",
        metricSuffix: "WCAG",
        label: "Barrierefreiheit",
        description:
          "Semantik, Tastatur, Fokus-Management, Kontrast. a11y als Teil der Definition of Done.",
        highlight: "a11y by default",
      },
      {
        metric: "2×",
        metricSuffix: "schneller",
        label: "Release-Geschwindigkeit",
        description:
          "Quality Gates, Automatisierung, vorhersagbare Änderungen. Weniger Überraschungen in Produktion.",
        highlight: "CI/CD",
      },
    ],
    impact: {
      title: "Gesamtwirkung",
      subtitle: "Ergebnisse der Implementierung in realen Projekten",
      stats: [
        { value: "7+", label: "Jahre in Produktion" },
        { value: "500K+", label: "Benutzer" },
        { value: "15+", label: "Teams nutzen es" },
      ],
    },
  },

  principles: {
    label: "Philosophie",
    title: "Prinzipien, denen ich folge",
    description:
      "Wie ich Entscheidungen in Interfaces, Architektur und Qualität treffe. Diese Prinzipien wurden über Jahre geformt und in realen Projekten getestet.",
    quote:
      '"Guter Code ist nicht der, der heute funktioniert, sondern der, der morgen leicht zu ändern ist"',
    items: [
      {
        title: "System über Heldentum",
        subtitle: "Skalierbarkeit",
        description:
          "Ich lege Regeln fest: Tokens, Komponenten-Verträge, Richtlinien. Das Team bewegt sich schneller und vorhersagbarer.",
        keywords: ["Design Tokens", "API Contracts", "Guidelines"],
      },
      {
        title: "Barrierefreiheit ist Teil der Qualität",
        subtitle: "Inklusivität",
        description:
          "Semantik, Tastatur, Fokus-Zustände, Kontrast. Das reduziert Bugs und verbessert UX für alle.",
        keywords: ["WCAG 2.1", "Screen Readers", "Keyboard Nav"],
      },
      {
        title: "Qualität ist messbar",
        subtitle: "Metriken",
        description:
          "Typen, Linter, Tests, Regressionen und Quality Gates — damit Releases Routine sind, keine Lotterie.",
        keywords: ["TypeScript", "Testing", "CI/CD"],
      },
      {
        title: "DX = Geschäftsgeschwindigkeit",
        subtitle: "Produktivität",
        description:
          "Klare Komponenten-APIs, Dokumentation, Vorlagen und CI: weniger Reibung, weniger Kontext, mehr Ergebnisse.",
        keywords: ["Storybook", "Documentation", "Templates"],
      },
    ],
  },

  contact: {
    badge: "Offen für Angebote",
    title: "Lass uns zusammen",
    titleAccent: "arbeiten",
    description:
      "Suche interessante Projekte, bei denen Qualität, System und Liebe zum Detail wichtig sind",
    emailLabel: "Schreib mir",
    sendEmail: "E-Mail senden",
    copyEmail: "Kopieren",
    copied: "Kopiert!",
    or: "oder",
    socials: "Soziale Netzwerke",
    responseTime: "Antworte normalerweise innerhalb von 24 Stunden",
    timezone: "Moskau, UTC+3",
  },

  footer: {
    role: "Senior Frontend / UI-Architekt",
    description:
      "UI Kit, Design-Tokens, Theming, Barrierefreiheit, Testing und DX.",
    write: "Schreiben",
    navigation: "Navigation",
    contacts: "Kontakte",
    aboutSite: "Diese Seite",
    aboutSiteText:
      "Schnell, barrierefrei, ohne schwere Abhängigkeiten. Glas, dünne Ränder, ruhige Animationen.",
    sourceCode: "Quellcode",
    copyright: "Igor Kramar",
  },

  common: {
    telegram: "Telegram",
    github: "GitHub",
    email: "E-Mail",
    toTop: "Nach oben",
    openMenu: "Menü öffnen",
    closeMenu: "Menü schließen",
    toggleTheme: "Theme wechseln",
    lightTheme: "Helles Theme aktivieren",
    darkTheme: "Dunkles Theme aktivieren",
    totalExperience: "Gesamterfahrung",
    years: "Jahre",
  },

  stack: {
    meta: {
      title: "Stack",
      description: "Tech-Stack und Tools, mit denen ich arbeite.",
    },
    hero: {
      label: "Technologien",
      title: "Mein",
      titleAccent: "Stack",
      description:
        "Tools und Technologien für schnelle, barrierefreie und skalierbare Anwendungen.",
    },
    filters: {
      all: "Alle",
    },
    levels: {
      expert: "Experte",
      advanced: "Fortgeschritten",
      familiar: "Vertraut",
    },
    categories: {
      frontend: "Frontend",
      backend: "Backend",
      database: "Datenbanken",
      devops: "DevOps",
      testing: "Testing",
      tools: "Tools",
      ai: "AI / ML",
    },
    stats: {
      total: "Technologien",
      categories: "Kategorien",
      years: "Jahre Erfahrung",
    },
    empty: "Technologien demnächst",
  },
  experience: {
    meta: {
      title: "Berufserfahrung",
      description: "Berufserfahrung und wichtige Erfolge.",
    },
    hero: {
      badge: "Jahre Erfahrung",
      title: "Berufserfahrung",
      subtitle: "Aufbau skalierbarer Systeme und Teams",
    },
    card: {
      present: "Heute",
      achievements: "Wichtige Erfolge",
      showMore: "Anzeigen",
      showLess: "Verbergen",
      readMore: "Mehr lesen",
      readLess: "Einklappen",
      technologies: "Technologien",
      remote: "Remote",
      hybrid: "Hybrid",
      office: "Büro",
      featured: "Hervorgehoben",
    },
    months: {
      "01": "Jan",
      "02": "Feb",
      "03": "Mär",
      "04": "Apr",
      "05": "Mai",
      "06": "Jun",
      "07": "Jul",
      "08": "Aug",
      "09": "Sep",
      "10": "Okt",
      "11": "Nov",
      "12": "Dez",
    },
  },
};
