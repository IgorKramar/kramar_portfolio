import type { Dictionary } from "@/interfaces";

export const kz: Dictionary = {
  meta: {
    title: "Игорь Крамарь — Senior Frontend / UI жүйелер архитекторы",
    description:
      "Портфолио: UI архитектурасы, дизайн жүйелері, токендер, тақырыптау, қолжетімділік, тестілеу және сапа.",
  },

  nav: {
    home: "Басты бет",
    stack: "Стек",
    projects: "Жобалар",
    experience: "Тәжірибе",
    contact: "Байланыс",
  },

  hero: {
    role: "Senior Frontend Engineer",
    name: "Игорь Крамарь",
    subtitle: "UI жүйелер архитекторы",
    description:
      "Дизайн жүйелерін жобалаймын, токендер мен тақырыптауды енгіземін, сапа қақпаларын орнатамын.",
    stats: {
      experience: "жыл тәжірибе",
      projects: "жоба",
      systems: "UI жүйе",
    },
    stack: "Негізгі стек",
    status: "Күй",
    statusText: "Ұсыныстарға ашық",
    availability: "Қашықтан немесе гибрид · Мәскеу ±3 сағат",
  },

  achievements: {
    label: "Нәтижелер",
    title: "Жүйелі тәсілден кейін не өзгереді",
    description: "Сапа, жылдамдық және болжамдылықтағы жақсартулар",
    items: [
      {
        metric: "89%",
        metricSuffix: "қамту",
        label: "Тестілеу",
        description: "Нөлден CI-дағы тұрақты регрессияға дейін.",
        highlight: "0% → 89%",
      },
      {
        metric: "40+",
        metricSuffix: "компонент",
        label: "Дизайн жүйесі",
        description: "Токендер, тақырыптау, құжаттама.",
        highlight: "Tokens → UI",
      },
      {
        metric: "AA",
        metricSuffix: "WCAG",
        label: "Қолжетімділік",
        description: "Семантика, пернетақта, фокус, контраст.",
        highlight: "a11y by default",
      },
      {
        metric: "2×",
        metricSuffix: "жылдам",
        label: "Шығарылым жылдамдығы",
        description: "Quality gates, автоматтандыру.",
        highlight: "CI/CD",
      },
    ],
    impact: {
      title: "Жалпы әсер",
      subtitle: "Нақты жобалардағы нәтижелер",
      stats: [
        { value: "7+", label: "жыл өндірісте" },
        { value: "500K+", label: "пайдаланушы" },
        { value: "15+", label: "команда" },
      ],
    },
  },

  principles: {
    label: "Философия",
    title: "Ұстанатын қағидаларым",
    description:
      "Интерфейстерде, архитектурада және сапада шешім қалай қабылдаймын.",
    quote: "«Жақсы код — ертең оңай өзгертілетін код»",
    items: [
      {
        title: "Жүйе батырлықтан маңызды",
        subtitle: "Масштабталу",
        description:
          "Ережелерді бекітемін: токендер, келісімшарттар, нұсқаулықтар.",
        keywords: ["Design Tokens", "API Contracts", "Guidelines"],
      },
      {
        title: "Қолжетімділік — сапаның бөлігі",
        subtitle: "Инклюзивтілік",
        description: "Семантика, пернетақта, фокус күйлері, контраст.",
        keywords: ["WCAG 2.1", "Screen Readers", "Keyboard Nav"],
      },
      {
        title: "Сапа өлшенеді",
        subtitle: "Метрикалар",
        description: "Типтер, линтерлер, тесттер, quality gates.",
        keywords: ["TypeScript", "Testing", "CI/CD"],
      },
      {
        title: "DX = бизнес жылдамдығы",
        subtitle: "Өнімділік",
        description: "Түсінікті API, құжаттама, шаблондар.",
        keywords: ["Storybook", "Documentation", "Templates"],
      },
    ],
  },

  contact: {
    badge: "Ұсыныстарға ашық",
    title: "Бірге",
    titleAccent: "жұмыс істейік",
    description: "Сапа маңызды қызықты жобаларды іздеймін",
    emailLabel: "Маған жазыңыз",
    sendEmail: "Хат жіберу",
    copyEmail: "Көшіру",
    copied: "Көшірілді!",
    or: "немесе",
    socials: "Әлеуметтік желілер",
    responseTime: "24 сағат ішінде жауап беремін",
    timezone: "Мәскеу, UTC+3",
  },

  footer: {
    role: "Senior Frontend / UI архитектор",
    description: "UI Kit, токендер, тақырыптау, қолжетімділік, тестілеу.",
    write: "Жазу",
    navigation: "Навигация",
    contacts: "Байланыстар",
    aboutSite: "Бұл сайт",
    aboutSiteText: "Жылдам, қолжетімді, ауыр тәуелділіктерсіз.",
    sourceCode: "Бастапқы код",
    copyright: "Игорь Крамарь",
  },

  common: {
    telegram: "Telegram",
    github: "GitHub",
    email: "Email",
    toTop: "Жоғарыға",
    openMenu: "Мәзірді ашу",
    closeMenu: "Мәзірді жабу",
    toggleTheme: "Тақырыпты ауыстыру",
    lightTheme: "Жарық тақырып",
    darkTheme: "Қараңғы тақырып",
  },

  stack: {
    meta: {
      title: "Стек",
      description: "Технологиялық стек және құралдар.",
    },
    hero: {
      label: "Технологиялар",
      title: "Менің",
      titleAccent: "стегім",
      description: "Жылдам, қолжетімді қосымшалар құру үшін құралдар.",
    },
    filters: {
      all: "Барлығы",
    },
    levels: {
      expert: "Сарапшы",
      advanced: "Жетілдірілген",
      familiar: "Таныс",
    },
    categories: {
      frontend: "Фронтенд",
      backend: "Бэкенд",
      database: "Дерекқорлар",
      devops: "DevOps",
      testing: "Тестілеу",
      tools: "Құралдар",
      ai: "AI / ML",
    },
    stats: {
      total: "технология",
      categories: "санат",
      years: "жыл тәжірибе",
    },
    empty: "Технологиялар жақында",
  },
  experience: {
    meta: {
      title: "Жұмыс тәжірибесі",
      description: "Кәсіби тәжірибе және негізгі жетістіктер.",
    },
    hero: {
      badge: "жыл тәжірибе",
      title: "Кәсіби тәжірибе",
      subtitle: "Масштабталатын жүйелер мен командалар құру",
    },
    card: {
      present: "қазіргі уақыт",
      achievements: "Негізгі жетістіктер",
      showMore: "Көрсету",
      showLess: "Жасыру",
      readMore: "Толығырақ",
      readLess: "Жию",
      technologies: "Технологиялар",
      remote: "Қашықтан",
      hybrid: "Аралас",
      office: "Кеңсе",
      featured: "Таңдаулы",
    },
    months: {
      "01": "қаң",
      "02": "ақп",
      "03": "нау",
      "04": "сәу",
      "05": "мам",
      "06": "мау",
      "07": "шіл",
      "08": "там",
      "09": "қыр",
      "10": "қаз",
      "11": "қар",
      "12": "жел",
    },
  },
};
