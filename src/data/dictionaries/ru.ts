import type { Dictionary } from "@/interfaces";

export const ru: Dictionary = {
  meta: {
    title: "Игорь Крамарь — Senior Frontend / Архитектор UI-систем",
    description:
      "Портфолио: UI архитектура, дизайн-системы, токены, темизация, доступность, тестирование и качество.",
  },

  nav: {
    home: "Главная",
    projects: "Кейсы",
    experience: "Опыт",
    contact: "Связаться",
  },

  hero: {
    role: "Senior Frontend Engineer",
    name: "Игорь Крамарь",
    subtitle: "Архитектор UI-систем",
    description:
      "Проектирую дизайн-системы, внедряю токены и темизацию, настраиваю quality gates. Делаю так, чтобы интерфейсы собирались быстро, выглядели консистентно и работали для всех.",
    stats: {
      experience: "лет опыта",
      projects: "проектов",
      systems: "UI-систем",
    },
    stack: "Основной стек",
    status: "Статус",
    statusText: "Открыт к предложениям",
    availability: "Удалёнка или гибрид · Москва ±3 часа",
  },

  achievements: {
    label: "Результаты",
    title: "Что меняется после системного подхода",
    description:
      "Измеримые улучшения в качестве, скорости и предсказуемости разработки",
    items: [
      {
        metric: "89%",
        metricSuffix: "покрытие",
        label: "Тестирование",
        description:
          "С нуля до стабильного регресса в CI. Критичные сценарии под контролем.",
        highlight: "0% → 89%",
      },
      {
        metric: "40+",
        metricSuffix: "компонентов",
        label: "Дизайн-система",
        description:
          "Токены, темизация, документация. Единый источник правды для всей команды.",
        highlight: "Tokens → UI",
      },
      {
        metric: "AA",
        metricSuffix: "WCAG",
        label: "Доступность",
        description:
          "Семантика, клавиатура, фокус-менеджмент, контраст. a11y как часть Definition of Done.",
        highlight: "a11y by default",
      },
      {
        metric: "2×",
        metricSuffix: "быстрее",
        label: "Скорость релизов",
        description:
          "Quality gates, автоматизация, предсказуемые изменения. Меньше сюрпризов в проде.",
        highlight: "CI/CD",
      },
    ],
    impact: {
      title: "Суммарный импакт",
      subtitle: "Результаты внедрения на реальных проектах",
      stats: [
        { value: "7+", label: "лет в продакшене" },
        { value: "500K+", label: "пользователей" },
        { value: "15+", label: "команд используют" },
      ],
    },
  },

  principles: {
    label: "Философия",
    title: "Принципы, которым следую",
    description:
      "Как я принимаю решения в интерфейсах, архитектуре и качестве. Эти принципы формировались годами и проверены на реальных проектах.",
    quote:
      "«Хороший код — это не тот, который работает сегодня, а тот, который легко изменить завтра»",
    items: [
      {
        title: "Система важнее героизма",
        subtitle: "Масштабируемость",
        description:
          "Фиксирую правила: токены, контракты компонентов, гайдлайны. Команда двигается быстрее и предсказуемее.",
        keywords: ["Design Tokens", "API Contracts", "Guidelines"],
      },
      {
        title: "Доступность — часть качества",
        subtitle: "Инклюзивность",
        description:
          "Семантика, клавиатура, фокус-состояния, контраст. Это уменьшает баги и улучшает UX всем пользователям.",
        keywords: ["WCAG 2.1", "Screen Readers", "Keyboard Nav"],
      },
      {
        title: "Качество измеримо",
        subtitle: "Метрики",
        description:
          "Типы, линтеры, тесты, регрессии и quality gates — чтобы релизы были рутиной, а не лотереей.",
        keywords: ["TypeScript", "Testing", "CI/CD"],
      },
      {
        title: "DX = скорость бизнеса",
        subtitle: "Продуктивность",
        description:
          "Понятные API компонентов, документация, шаблоны и CI: меньше трения, меньше контекста, больше результата.",
        keywords: ["Storybook", "Documentation", "Templates"],
      },
    ],
  },

  contact: {
    badge: "Открыт к предложениям",
    title: "Давайте работать",
    titleAccent: "вместе",
    description:
      "Ищу интересные проекты, где важны качество, система и внимание к деталям",
    emailLabel: "Напишите мне",
    sendEmail: "Написать письмо",
    copyEmail: "Скопировать",
    copied: "Скопировано!",
    or: "или",
    socials: "Социальные сети",
    responseTime: "Обычно отвечаю в течение 24 часов",
    timezone: "Москва, UTC+3",
  },

  footer: {
    role: "Senior Frontend / UI Architect",
    description: "UI Kit, дизайн-токены, темизация, доступность, тестирование и DX.",
    write: "Написать",
    navigation: "Навигация",
    contacts: "Контакты",
    aboutSite: "Этот сайт",
    aboutSiteText:
      "Быстрый, доступный, без тяжёлых зависимостей. Стекло, тонкие границы, спокойные анимации.",
    sourceCode: "Исходный код",
    copyright: "Игорь Крамарь",
  },

  common: {
    telegram: "Telegram",
    github: "GitHub",
    email: "Email",
    toTop: "Наверх",
    openMenu: "Открыть меню",
    closeMenu: "Закрыть меню",
    toggleTheme: "Переключить тему",
    lightTheme: "Включить светлую тему",
    darkTheme: "Включить тёмную тему",
  },
};
