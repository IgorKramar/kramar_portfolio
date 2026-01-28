import type { Dictionary } from "@/interfaces";

export const es: Dictionary = {
  meta: {
    title: "Igor Kramar — Senior Frontend / Arquitecto de Sistemas UI",
    description:
      "Portafolio: arquitectura UI, sistemas de diseño, tokens, tematización, accesibilidad, pruebas y calidad.",
  },

  nav: {
    home: "Inicio",
    stack: "Stack",
    projects: "Casos",
    experience: "Experiencia",
    contact: "Contacto",
  },

  hero: {
    role: "Senior Frontend Engineer",
    name: "Igor Kramar",
    subtitle: "Arquitecto de Sistemas UI",
    description:
      "Diseño sistemas de diseño, implemento tokens y tematización, configuro quality gates. Hago que las interfaces se construyan rápido, se vean consistentes y funcionen para todos.",
    stats: {
      experience: "años de experiencia",
      projects: "proyectos",
      systems: "sistemas UI",
    },
    stack: "Stack principal",
    status: "Estado",
    statusText: "Abierto a oportunidades",
    availability: "Remoto o híbrido · Moscú ±3 horas",
  },

  achievements: {
    label: "Resultados",
    title: "Qué cambia después de un enfoque sistemático",
    description:
      "Mejoras medibles en calidad, velocidad y previsibilidad del desarrollo",
    items: [
      {
        metric: "89%",
        metricSuffix: "cobertura",
        label: "Testing",
        description:
          "De cero a regresión estable en CI. Escenarios críticos bajo control.",
        highlight: "0% → 89%",
      },
      {
        metric: "40+",
        metricSuffix: "componentes",
        label: "Sistema de Diseño",
        description:
          "Tokens, tematización, documentación. Única fuente de verdad para todo el equipo.",
        highlight: "Tokens → UI",
      },
      {
        metric: "AA",
        metricSuffix: "WCAG",
        label: "Accesibilidad",
        description:
          "Semántica, teclado, gestión de foco, contraste. a11y como parte de Definition of Done.",
        highlight: "a11y by default",
      },
      {
        metric: "2×",
        metricSuffix: "más rápido",
        label: "Velocidad de Releases",
        description:
          "Quality gates, automatización, cambios predecibles. Menos sorpresas en producción.",
        highlight: "CI/CD",
      },
    ],
    impact: {
      title: "Impacto Total",
      subtitle: "Resultados de implementación en proyectos reales",
      stats: [
        { value: "7+", label: "años en producción" },
        { value: "500K+", label: "usuarios" },
        { value: "15+", label: "equipos usando" },
      ],
    },
  },

  principles: {
    label: "Filosofía",
    title: "Principios que sigo",
    description:
      "Cómo tomo decisiones en interfaces, arquitectura y calidad. Estos principios se han formado a lo largo de años y probado en proyectos reales.",
    quote:
      '"El buen código no es el que funciona hoy, sino el que es fácil de cambiar mañana"',
    items: [
      {
        title: "Sistema sobre heroísmo",
        subtitle: "Escalabilidad",
        description:
          "Fijo reglas: tokens, contratos de componentes, guías. El equipo avanza más rápido y predecible.",
        keywords: ["Design Tokens", "API Contracts", "Guidelines"],
      },
      {
        title: "Accesibilidad es parte de la calidad",
        subtitle: "Inclusividad",
        description:
          "Semántica, teclado, estados de foco, contraste. Esto reduce bugs y mejora UX para todos.",
        keywords: ["WCAG 2.1", "Screen Readers", "Keyboard Nav"],
      },
      {
        title: "La calidad es medible",
        subtitle: "Métricas",
        description:
          "Tipos, linters, tests, regresiones y quality gates — para que los releases sean rutina, no lotería.",
        keywords: ["TypeScript", "Testing", "CI/CD"],
      },
      {
        title: "DX = velocidad del negocio",
        subtitle: "Productividad",
        description:
          "APIs de componentes claras, documentación, plantillas y CI: menos fricción, menos contexto, más resultados.",
        keywords: ["Storybook", "Documentation", "Templates"],
      },
    ],
  },

  contact: {
    badge: "Abierto a oportunidades",
    title: "Trabajemos",
    titleAccent: "juntos",
    description:
      "Busco proyectos interesantes donde importen la calidad, el sistema y la atención al detalle",
    emailLabel: "Escríbeme",
    sendEmail: "Enviar email",
    copyEmail: "Copiar",
    copied: "¡Copiado!",
    or: "o",
    socials: "Redes sociales",
    responseTime: "Normalmente respondo en 24 horas",
    timezone: "Moscú, UTC+3",
  },

  footer: {
    role: "Senior Frontend / Arquitecto UI",
    description:
      "UI Kit, design tokens, tematización, accesibilidad, testing y DX.",
    write: "Escribir",
    navigation: "Navegación",
    contacts: "Contactos",
    aboutSite: "Este sitio",
    aboutSiteText:
      "Rápido, accesible, sin dependencias pesadas. Vidrio, bordes finos, animaciones tranquilas.",
    sourceCode: "Código fuente",
    copyright: "Igor Kramar",
  },

  common: {
    telegram: "Telegram",
    github: "GitHub",
    email: "Email",
    toTop: "Arriba",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    toggleTheme: "Cambiar tema",
    lightTheme: "Activar tema claro",
    darkTheme: "Activar tema oscuro",
  },

  stack: {
    meta: {
      title: "Stack",
      description: "Stack tecnológico y herramientas con las que trabajo.",
    },
    hero: {
      label: "Tecnologías",
      title: "Mi",
      titleAccent: "stack",
      description:
        "Herramientas y tecnologías para crear aplicaciones rápidas, accesibles y escalables.",
    },
    filters: {
      all: "Todos",
    },
    levels: {
      expert: "Experto",
      advanced: "Avanzado",
      familiar: "Familiar",
    },
    categories: {
      frontend: "Frontend",
      backend: "Backend",
      database: "Bases de datos",
      devops: "DevOps",
      testing: "Testing",
      tools: "Herramientas",
      ai: "AI / ML",
    },
    stats: {
      total: "tecnologías",
      categories: "categorías",
      years: "años experiencia",
    },
    empty: "Tecnologías próximamente",
  },
};
