import type { Dictionary } from "@/interfaces";

export const en: Dictionary = {
  meta: {
    title: "Igor Kramar — Senior Frontend / UI Systems Architect",
    description:
      "Portfolio: UI architecture, design systems, tokens, theming, accessibility, testing and quality.",
  },

  nav: {
    home: "Home",
    projects: "Cases",
    experience: "Experience",
    contact: "Contact",
  },

  hero: {
    role: "Senior Frontend Engineer",
    name: "Igor Kramar",
    subtitle: "UI Systems Architect",
    description:
      "I design design systems, implement tokens and theming, set up quality gates. I make interfaces build fast, look consistent and work for everyone.",
    stats: {
      experience: "years of experience",
      projects: "projects",
      systems: "UI systems",
    },
    stack: "Main stack",
    status: "Status",
    statusText: "Open to opportunities",
    availability: "Remote or hybrid · Moscow ±3 hours",
  },

  achievements: {
    label: "Results",
    title: "What changes after a systematic approach",
    description:
      "Measurable improvements in quality, speed and development predictability",
    items: [
      {
        metric: "89%",
        metricSuffix: "coverage",
        label: "Testing",
        description:
          "From zero to stable regression in CI. Critical scenarios under control.",
        highlight: "0% → 89%",
      },
      {
        metric: "40+",
        metricSuffix: "components",
        label: "Design System",
        description:
          "Tokens, theming, documentation. Single source of truth for the whole team.",
        highlight: "Tokens → UI",
      },
      {
        metric: "AA",
        metricSuffix: "WCAG",
        label: "Accessibility",
        description:
          "Semantics, keyboard, focus management, contrast. a11y as part of Definition of Done.",
        highlight: "a11y by default",
      },
      {
        metric: "2×",
        metricSuffix: "faster",
        label: "Release Speed",
        description:
          "Quality gates, automation, predictable changes. Fewer surprises in production.",
        highlight: "CI/CD",
      },
    ],
    impact: {
      title: "Total Impact",
      subtitle: "Results of implementation on real projects",
      stats: [
        { value: "7+", label: "years in production" },
        { value: "500K+", label: "users" },
        { value: "15+", label: "teams using" },
      ],
    },
  },

  principles: {
    label: "Philosophy",
    title: "Principles I follow",
    description:
      "How I make decisions in interfaces, architecture and quality. These principles have been formed over years and tested on real projects.",
    quote:
      '"Good code is not the one that works today, but the one that is easy to change tomorrow"',
    items: [
      {
        title: "System over heroism",
        subtitle: "Scalability",
        description:
          "I fix rules: tokens, component contracts, guidelines. The team moves faster and more predictably.",
        keywords: ["Design Tokens", "API Contracts", "Guidelines"],
      },
      {
        title: "Accessibility is part of quality",
        subtitle: "Inclusivity",
        description:
          "Semantics, keyboard, focus states, contrast. This reduces bugs and improves UX for all users.",
        keywords: ["WCAG 2.1", "Screen Readers", "Keyboard Nav"],
      },
      {
        title: "Quality is measurable",
        subtitle: "Metrics",
        description:
          "Types, linters, tests, regressions and quality gates — so releases are routine, not lottery.",
        keywords: ["TypeScript", "Testing", "CI/CD"],
      },
      {
        title: "DX = business speed",
        subtitle: "Productivity",
        description:
          "Clear component APIs, documentation, templates and CI: less friction, less context, more results.",
        keywords: ["Storybook", "Documentation", "Templates"],
      },
    ],
  },

  contact: {
    badge: "Open to opportunities",
    title: "Let's work",
    titleAccent: "together",
    description:
      "Looking for interesting projects where quality, system and attention to detail matter",
    emailLabel: "Write to me",
    sendEmail: "Send email",
    copyEmail: "Copy",
    copied: "Copied!",
    or: "or",
    socials: "Social networks",
    responseTime: "Usually respond within 24 hours",
    timezone: "Moscow, UTC+3",
  },

  footer: {
    role: "Senior Frontend / UI Architect",
    description: "UI Kit, design tokens, theming, accessibility, testing and DX.",
    write: "Write",
    navigation: "Navigation",
    contacts: "Contacts",
    aboutSite: "This site",
    aboutSiteText:
      "Fast, accessible, no heavy dependencies. Glass, thin borders, calm animations.",
    sourceCode: "Source code",
    copyright: "Igor Kramar",
  },

  common: {
    telegram: "Telegram",
    github: "GitHub",
    email: "Email",
    toTop: "To top",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    toggleTheme: "Toggle theme",
    lightTheme: "Enable light theme",
    darkTheme: "Enable dark theme",
  },
};
