import { Achievement, Experience } from "@/interfaces";

export const EXPERIENCE_DATA: Experience[] = [
  {
    id: "gems",
    company: "Gems Development",
    role: {
      ru: "Senior Frontend Developer",
      en: "Senior Frontend Developer",
      zh: "高级前端开发工程师",
      es: "Desarrollador Frontend Senior",
      fr: "Développeur Frontend Senior",
      de: "Senior Frontend-Entwickler",
      kz: "Senior Frontend әзірлеуші",
    },
    period: {
      start: "2025-10",
    },
    location: "Москва",
    format: "hybrid",
    type: "fulltime",
    description: {
      ru: "Отвечаю за развитие фронтенд-платформы и качество поставки. Построил систему темизации и доступности (a11y) для UI Kit с token-подходом.",
      en: "Leading frontend platform development and delivery quality. Built theming and accessibility system for UI Kit with token-based approach.",
      zh: "负责前端平台开发和交付质量。为UI Kit构建了基于令牌的主题化和可访问性系统。",
      es: "Liderando el desarrollo de plataforma frontend y calidad de entrega. Construí sistema de tematización y accesibilidad para UI Kit con enfoque basado en tokens.",
      fr: "Direction du développement de la plateforme frontend et de la qualité de livraison. Construction d'un système de thématisation et d'accessibilité pour UI Kit avec approche basée sur les tokens.",
      de: "Leitung der Frontend-Plattform-Entwicklung und Lieferqualität. Aufbau eines Theming- und Accessibility-Systems für UI Kit mit Token-basiertem Ansatz.",
      kz: "Frontend платформасын дамыту және жеткізу сапасын басқару. UI Kit үшін токен негізіндегі тақырыптау және қолжетімділік жүйесін құрдым.",
    },
    keyMetrics: [
      {
        icon: "✅",
        value: "89%",
        label: {
          ru: "Покрытие тестами",
          en: "Test Coverage",
          zh: "测试覆盖率",
          es: "Cobertura de pruebas",
          fr: "Couverture des tests",
          de: "Testabdeckung",
          kz: "Тест қамтуы",
        }
      },
      {
        icon: "🎨",
        value: "40+",
        label: {
          ru: "UI компонентов",
          en: "UI Components",
          zh: "UI组件",
          es: "Componentes UI",
          fr: "Composants UI",
          de: "UI-Komponenten",
          kz: "UI компоненттері",
        }
      },
      {
        icon: "♿",
        value: "AA",
        label: {
          ru: "WCAG уровень",
          en: "WCAG Level",
          zh: "WCAG等级",
          es: "Nivel WCAG",
          fr: "Niveau WCAG",
          de: "WCAG-Level",
          kz: "WCAG деңгейі",
        }
      },
    ],
    techStack: ["React", "TypeScript", "Design Tokens", "Jest", "Playwright", "Storybook"],
    achievements: [
      {
        text: {
          ru: "Внедрил систему темизации и a11y для внутреннего UI Kit с token-подходом",
          en: "Implemented theming and a11y system for internal UI Kit with token approach",
          zh: "为内部UI Kit实施了基于令牌的主题化和a11y系统",
          es: "Implementé sistema de tematización y a11y para UI Kit interno con enfoque de tokens",
          fr: "Implémentation d'un système de thématisation et a11y pour UI Kit interne avec approche par tokens",
          de: "Implementierung eines Theming- und a11y-Systems für internes UI Kit mit Token-Ansatz",
          kz: "Ішкі UI Kit үшін токен тәсілімен тақырыптау және a11y жүйесін енгіздім",
        },
        impact: "40+ компонентов",
        tags: ["Design System", "a11y"]
      },
      {
        text: {
          ru: "Довёл покрытие автотестами до 89% для критичной логики",
          en: "Increased test coverage to 89% for critical logic",
          zh: "将关键逻辑的测试覆盖率提高到89%",
          es: "Aumenté la cobertura de pruebas al 89% para lógica crítica",
          fr: "Augmentation de la couverture des tests à 89% pour la logique critique",
          de: "Erhöhung der Testabdeckung auf 89% für kritische Logik",
          kz: "Критикалық логика үшін автотест қамтуын 89%-ға дейін жеткіздім",
        },
        impact: "0% → 89%",
        tags: ["Testing", "Quality"]
      },
      {
        text: {
          ru: "Настроил CI/CD и стабильные окружения для фронтенда",
          en: "Set up CI/CD and stable environments for frontend",
          zh: "为前端配置了CI/CD和稳定环境",
          es: "Configuré CI/CD y entornos estables para frontend",
          fr: "Configuration de CI/CD et d'environnements stables pour le frontend",
          de: "Einrichtung von CI/CD und stabilen Umgebungen für Frontend",
          kz: "Frontend үшін CI/CD және тұрақты орталарды баптадым",
        },
        tags: ["DevOps", "Infrastructure"]
      },
    ],
    highlight: true,
  },
  // ... остальные компании по аналогии
];

export function getTotalExperience(): string {
  return "7 лет 10 месяцев";
}

export function getKeyAchievements(): Achievement[] {
  // Топ достижения для hero секции
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
