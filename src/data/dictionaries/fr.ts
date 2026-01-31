import type { Dictionary } from "@/interfaces";

export const fr: Dictionary = {
  meta: {
    title: "Igor Kramar — Senior Frontend / Architecte Systèmes UI",
    description:
      "Portfolio : architecture UI, systèmes de design, tokens, thématisation, accessibilité, tests et qualité.",
  },

  nav: {
    home: "Accueil",
    stack: "Stack",
    projects: "Projets",
    experience: "Expérience",
    contact: "Contact",
  },

  hero: {
    role: "Senior Frontend Engineer",
    name: "Igor Kramar",
    subtitle: "Architecte Systèmes UI",
    description:
      "Je conçois des systèmes de design, implémente des tokens et la thématisation, configure des quality gates. Je fais en sorte que les interfaces se construisent rapidement, soient cohérentes et fonctionnent pour tous.",
    stats: {
      experience: "ans d'expérience",
      projects: "projets",
      systems: "systèmes UI",
    },
    stack: "Stack principal",
    status: "Statut",
    statusText: "Ouvert aux opportunités",
    availability: "Télétravail ou hybride · Moscou ±3 heures",
  },

  achievements: {
    label: "Résultats",
    title: "Ce qui change après une approche systématique",
    description:
      "Améliorations mesurables en qualité, vitesse et prévisibilité du développement",
    items: [
      {
        metric: "89%",
        metricSuffix: "couverture",
        label: "Tests",
        description:
          "De zéro à une régression stable en CI. Scénarios critiques sous contrôle.",
        highlight: "0% → 89%",
      },
      {
        metric: "40+",
        metricSuffix: "composants",
        label: "Système de Design",
        description:
          "Tokens, thématisation, documentation. Source unique de vérité pour toute l'équipe.",
        highlight: "Tokens → UI",
      },
      {
        metric: "AA",
        metricSuffix: "WCAG",
        label: "Accessibilité",
        description:
          "Sémantique, clavier, gestion du focus, contraste. a11y comme partie de la Definition of Done.",
        highlight: "a11y by default",
      },
      {
        metric: "2×",
        metricSuffix: "plus rapide",
        label: "Vitesse de Release",
        description:
          "Quality gates, automatisation, changements prévisibles. Moins de surprises en production.",
        highlight: "CI/CD",
      },
    ],
    impact: {
      title: "Impact Total",
      subtitle: "Résultats d'implémentation sur des projets réels",
      stats: [
        { value: "7+", label: "ans en production" },
        { value: "500K+", label: "utilisateurs" },
        { value: "15+", label: "équipes utilisent" },
      ],
    },
  },

  principles: {
    label: "Philosophie",
    title: "Principes que je suis",
    description:
      "Comment je prends des décisions dans les interfaces, l'architecture et la qualité. Ces principes se sont formés au fil des années et ont été testés sur des projets réels.",
    quote:
      "« Le bon code n'est pas celui qui fonctionne aujourd'hui, mais celui qui est facile à modifier demain »",
    items: [
      {
        title: "Système plutôt qu'héroïsme",
        subtitle: "Évolutivité",
        description:
          "Je fixe des règles : tokens, contrats de composants, guides. L'équipe avance plus vite et de manière plus prévisible.",
        keywords: ["Design Tokens", "API Contracts", "Guidelines"],
      },
      {
        title: "L'accessibilité fait partie de la qualité",
        subtitle: "Inclusivité",
        description:
          "Sémantique, clavier, états de focus, contraste. Cela réduit les bugs et améliore l'UX pour tous.",
        keywords: ["WCAG 2.1", "Screen Readers", "Keyboard Nav"],
      },
      {
        title: "La qualité est mesurable",
        subtitle: "Métriques",
        description:
          "Types, linters, tests, régressions et quality gates — pour que les releases soient routine, pas loterie.",
        keywords: ["TypeScript", "Testing", "CI/CD"],
      },
      {
        title: "DX = vitesse business",
        subtitle: "Productivité",
        description:
          "APIs de composants claires, documentation, templates et CI : moins de friction, moins de contexte, plus de résultats.",
        keywords: ["Storybook", "Documentation", "Templates"],
      },
    ],
  },

  contact: {
    badge: "Ouvert aux opportunités",
    title: "Travaillons",
    titleAccent: "ensemble",
    description:
      "Je cherche des projets intéressants où la qualité, le système et l'attention aux détails comptent",
    emailLabel: "Écrivez-moi",
    sendEmail: "Envoyer un email",
    copyEmail: "Copier",
    copied: "Copié !",
    or: "ou",
    socials: "Réseaux sociaux",
    responseTime: "Je réponds généralement sous 24 heures",
    timezone: "Moscou, UTC+3",
  },

  footer: {
    role: "Senior Frontend / Architecte UI",
    description:
      "UI Kit, design tokens, thématisation, accessibilité, tests et DX.",
    write: "Écrire",
    navigation: "Navigation",
    contacts: "Contacts",
    aboutSite: "Ce site",
    aboutSiteText:
      "Rapide, accessible, sans dépendances lourdes. Verre, bordures fines, animations calmes.",
    sourceCode: "Code source",
    copyright: "Igor Kramar",
  },

  common: {
    telegram: "Telegram",
    github: "GitHub",
    email: "Email",
    toTop: "En haut",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    toggleTheme: "Changer de thème",
    lightTheme: "Activer le thème clair",
    darkTheme: "Activer le thème sombre",
  },

  stack: {
    meta: {
      title: "Stack",
      description: "Stack technologique et outils avec lesquels je travaille.",
    },
    hero: {
      label: "Technologies",
      title: "Mon",
      titleAccent: "stack",
      description:
        "Outils et technologies pour créer des applications rapides, accessibles et évolutives.",
    },
    filters: {
      all: "Tous",
    },
    levels: {
      expert: "Expert",
      advanced: "Avancé",
      familiar: "Familier",
    },
    categories: {
      frontend: "Frontend",
      backend: "Backend",
      database: "Bases de données",
      devops: "DevOps",
      testing: "Tests",
      tools: "Outils",
      ai: "AI / ML",
    },
    stats: {
      total: "technologies",
      categories: "catégories",
      years: "ans d'expérience",
    },
    empty: "Technologies à venir",
  },
  experience: {
    meta: {
      title: "Expérience",
      description: "Expérience professionnelle et réalisations clés.",
    },
    hero: {
      badge: "ans d'expérience",
      title: "Expérience Professionnelle",
      subtitle: "Construction de systèmes et d'équipes évolutifs",
    },
  },
};
