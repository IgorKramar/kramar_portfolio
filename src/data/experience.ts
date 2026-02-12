import type { Achievement, Experience } from "@/interfaces";

export const EXPERIENCE_DATA: Experience[] = [
  {
    id: "gems",
    company: "Gems Development",
    companyUrl: "https://gems.pro",
    role: {
      ru: "Senior Frontend Developer",
      en: "Senior Frontend Developer",
      zh: "高级前端开发工程师",
      es: "Desarrollador Frontend Senior",
      fr: "Développeur Frontend Senior",
      de: "Senior Frontend-Entwickler",
      kz: "Senior Frontend әzіrlеushі",
    },
    period: {
      start: "2025-10",
      end: "2026-01",
    },
    location: "Омск",
    format: "hybrid",
    type: "fulltime",
    description: {
      ru: "Отвечал за развитие фронтенд‑платформы и качество поставки. Ключевым результатом стала проработка и внедрение доскональной системы темизации и доступности (a11y) для внутреннего UI Kit: выстроил token‑подход, правила темизации, обеспечил консистентность компонентов и предсказуемое поведение в разных сценариях, чтобы дизайн‑система была реально переиспользуемой и масштабируемой. Параллельно системно поднял качество кода: довёл покрытие автотестами до 89% для критичной логики и компонентов, настроил практики и контроль в пайплайне. Также взял на себя инженерную инфраструктуру фронтенда: настроил сборку и деплой, выстроил стабильные окружения и процесс доставки изменений.",
      en: "Responsible for frontend platform development and delivery quality. Key achievement was the design and implementation of a comprehensive theming and accessibility (a11y) system for the internal UI Kit: established token-based approach, theming rules, ensured component consistency and predictable behavior across scenarios to make the design system truly reusable and scalable. Systematically improved code quality: increased test coverage to 89% for critical logic and components, set up practices and pipeline controls. Also took ownership of frontend engineering infrastructure: configured build and deployment, established stable environments and change delivery process.",
      zh: "负责前端平台开发和交付质量。关键成果是为内部UI Kit设计和实施了全面的主题化和可访问性(a11y)系统。",
      es: "Responsable del desarrollo de la plataforma frontend y la calidad de entrega.",
      fr: "Responsable du développement de la plateforme frontend et de la qualité de livraison.",
      de: "Verantwortlich für die Frontend-Plattform-Entwicklung und Lieferqualität.",
      kz: "Frontend платформасын дамыту және жеткізу сапасына жауапты болдым.",
    },
    keyMetrics: [
      {
        icon: "check",
        value: "89%",
        label: {
          ru: "Покрытие тестами",
          en: "Test Coverage",
          zh: "测试覆盖率",
          es: "Cobertura de pruebas",
          fr: "Couverture des tests",
          de: "Testabdeckung",
          kz: "Тест қамтуы",
        },
      },
      {
        icon: "palette",
        value: "40+",
        label: {
          ru: "UI компонентов",
          en: "UI Components",
          zh: "UI组件",
          es: "Componentes UI",
          fr: "Composants UI",
          de: "UI-Komponenten",
          kz: "UI компоненттері",
        },
      },
      {
        icon: "accessibility",
        value: "AA",
        label: {
          ru: "WCAG уровень",
          en: "WCAG Level",
          zh: "WCAG等级",
          es: "Nivel WCAG",
          fr: "Niveau WCAG",
          de: "WCAG-Level",
          kz: "WCAG деңгейі",
        },
      },
    ],
    techStack: [
      "Vue 3",
      "Nuxt 3",
      "TypeScript",
      "Pinia",
      "Vuetify 3",
      "Design Tokens",
      "Vitest",
      "Playwright",
      "Histoire",
      "Vite",
      "CI/CD",
    ],
    achievements: [
      {
        text: {
          ru: "Спроектировал и внедрил систему темизации и a11y для внутреннего UI Kit на Vue 3 с token-подходом",
          en: "Designed and implemented theming and a11y system for internal Vue 3 UI Kit with token approach",
          zh: "为内部Vue 3 UI Kit设计并实施了基于令牌的主题化和a11y系统",
          es: "Diseñé e implementé sistema de tematización y a11y para UI Kit interno en Vue 3 con enfoque de tokens",
          fr: "Conçu et implémenté un système de thématisation et a11y pour UI Kit interne en Vue 3 avec approche par tokens",
          de: "Entwarf und implementierte Theming- und a11y-System für internes Vue 3 UI Kit mit Token-Ansatz",
          kz: "Vue 3 негізіндегі ішкі UI Kit үшін токен-тәсілімен тақырыптау және a11y жүйесін жобаладым",
        },
        impact: "40+ компонентов",
        tags: ["Vue 3", "Design System", "a11y", "Theming"],
      },
      {
        text: {
          ru: "Довёл покрытие автотестами до 89% используя Vitest и Vue Test Utils",
          en: "Increased test coverage to 89% using Vitest and Vue Test Utils",
          zh: "使用Vitest和Vue Test Utils将测试覆盖率提高到89%",
          es: "Aumenté la cobertura de pruebas al 89% usando Vitest y Vue Test Utils",
          fr: "Augmenté la couverture de tests à 89% avec Vitest et Vue Test Utils",
          de: "Erhöhte Testabdeckung auf 89% mit Vitest und Vue Test Utils",
          kz: "Vitest және Vue Test Utils қолданып автотест қамтуын 89%-ға дейін жеткіздім",
        },
        impact: "0% → 89%",
        tags: ["Testing", "Vitest", "Quality"],
      },
      {
        text: {
          ru: "Разработал фронтенд для систем геосервисов и документооборота на Nuxt 3",
          en: "Developed frontend for geo-services and document management systems on Nuxt 3",
          zh: "在Nuxt 3上开发了地理服务和文档管理系统的前端",
          es: "Desarrollé frontend para sistemas de geoservicios y gestión documental en Nuxt 3",
          fr: "Développé le frontend pour les systèmes de géoservices et de gestion documentaire sur Nuxt 3",
          de: "Entwickelte Frontend für Geo-Services und Dokumentenmanagementsysteme auf Nuxt 3",
          kz: "Nuxt 3 негізінде геосервистер және құжат айналымы жүйелері үшін фронтенд әзірледім",
        },
        impact: "2 системы",
        tags: ["Nuxt 3", "GeoServices", "Enterprise"],
      },
    ],

    highlight: true,
  },
];

export function getTotalExperience(): string {
  return "7+ лет";
}

export function getKeyAchievements(): Achievement[] {
  return [
    {
      text: {
        ru: "Построил микрофронтенд архитектуру для 2M+ пользователей",
        en: "Built microfrontend architecture for 2M+ users",
        zh: "为200万+用户构建了微前端架构",
        es: "Construí arquitectura de microfrontends para 2M+ usuarios",
        fr: "Construction d'une architecture microfrontend pour 2M+ utilisateurs",
        de: "Aufbau einer Microfrontend-Architektur für 2M+ Nutzer",
        kz: "2M+ пайдаланушы үшін микрофронтенд архитектурасын құрдым",
      },
      impact: "2M+ users",
    },
    {
      text: {
        ru: "Внедрил систему дизайн-токенов с полной темизацией",
        en: "Implemented design token system with full theming",
        zh: "实施了完整主题化的设计令牌系统",
        es: "Implementé sistema de design tokens con tematización completa",
        fr: "Implémentation d'un système de design tokens avec thématisation complète",
        de: "Implementierung eines Design-Token-Systems mit vollständigem Theming",
        kz: "Толық тақырыптаумен дизайн-токендер жүйесін енгіздім",
      },
      impact: "40+ components",
    },
    {
      text: {
        ru: "Довёл покрытие тестами до 89% с нуля",
        en: "Increased test coverage from 0% to 89%",
        zh: "将测试覆盖率从0%提高到89%",
        es: "Aumenté la cobertura de pruebas del 0% al 89%",
        fr: "Augmentation de la couverture des tests de 0% à 89%",
        de: "Erhöhung der Testabdeckung von 0% auf 89%",
        kz: "Тест қамтуын нөлден 89%-ға дейін жеткіздім",
      },
      impact: "0% → 89%",
    },
  ];
}
