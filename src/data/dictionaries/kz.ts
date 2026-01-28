import type { Dictionary } from "@/interfaces";

export const kz: Dictionary = {
  meta: {
    title: "Игорь Крамарь — Senior Frontend / UI жүйелер архитекторы",
    description:
      "Портфолио: UI архитектурасы, дизайн жүйелері, токендер, тақырыптау, қолжетімділік, тестілеу және сапа.",
  },

  nav: {
    home: "Басты бет",
    projects: "Жобалар",
    experience: "Тәжірибе",
    contact: "Байланыс",
  },

  hero: {
    role: "Senior Frontend Engineer",
    name: "Игорь Крамарь",
    subtitle: "UI жүйелер архитекторы",
    description:
      "Дизайн жүйелерін жобалаймын, токендер мен тақырыптауды енгіземін, сапа қақпаларын орнатамын. Интерфейстер тез құрылып, біркелкі көрініп, барлығына жұмыс істейтіндей етемін.",
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
    description: "Сапа, жылдамдық және әзірлеудің болжамдылығындағы өлшенетін жақсартулар",
    items: [
      {
        metric: "89%",
        metricSuffix: "қамту",
        label: "Тестілеу",
        description: "Нөлден CI-дағы тұрақты регрессияға дейін. Маңызды сценарийлер бақылауда.",
        highlight: "0% → 89%",
      },
      {
        metric: "40+",
        metricSuffix: "компонент",
        label: "Дизайн жүйесі",
        description: "Токендер, тақырыптау, құжаттама. Бүкіл команда үшін жалғыз шындық көзі.",
        highlight: "Tokens → UI",
      },
      {
        metric: "AA",
        metricSuffix: "WCAG",
        label: "Қолжетімділік",
        description:
          "Семантика, пернетақта, фокус басқару, контраст. a11y Definition of Done бөлігі ретінде.",
        highlight: "a11y by default",
      },
      {
        metric: "2×",
        metricSuffix: "жылдам",
        label: "Шығарылым жылдамдығы",
        description:
          "Сапа қақпалары, автоматтандыру, болжамды өзгерістер. Өндірісте аз тосын сыйлар.",
        highlight: "CI/CD",
      },
    ],
    impact: {
      title: "Жалпы әсер",
      subtitle: "Нақты жобалардағы енгізу нәтижелері",
      stats: [
        { value: "7+", label: "жыл өндірісте" },
        { value: "500K+", label: "пайдаланушы" },
        { value: "15+", label: "команда қолданады" },
      ],
    },
  },

  principles: {
    label: "Философия",
    title: "Ұстанатын қағидаларым",
    description:
      "Интерфейстерде, архитектурада және сапада шешім қалай қабылдаймын. Бұл қағидалар жылдар бойы қалыптасып, нақты жобаларда тексерілген.",
    quote: "«Жақсы код бүгін жұмыс істейтін емес, ертең оңай өзгертілетін код»",
    items: [
      {
        title: "Жүйе батырлықтан маңызды",
        subtitle: "Масштабталу",
        description:
          "Ережелерді бекітемін: токендер, компонент келісімшарттары, нұсқаулықтар. Команда жылдамырақ және болжамдырақ жылжиды.",
        keywords: ["Design Tokens", "API Contracts", "Guidelines"],
      },
      {
        title: "Қолжетімділік — сапаның бөлігі",
        subtitle: "Инклюзивтілік",
        description:
          "Семантика, пернетақта, фокус күйлері, контраст. Бұл қателерді азайтады және барлық пайдаланушылар үшін UX жақсартады.",
        keywords: ["WCAG 2.1", "Screen Readers", "Keyboard Nav"],
      },
      {
        title: "Сапа өлшенеді",
        subtitle: "Метрикалар",
        description:
          "Типтер, линтерлер, тесттер, регрессиялар және сапа қақпалары — шығарылымдар лотерея емес, күнделікті болуы үшін.",
        keywords: ["TypeScript", "Testing", "CI/CD"],
      },
      {
        title: "DX = бизнес жылдамдығы",
        subtitle: "Өнімділік",
        description:
          "Түсінікті компонент API, құжаттама, шаблондар және CI: аз үйкеліс, аз контекст, көбірек нәтиже.",
        keywords: ["Storybook", "Documentation", "Templates"],
      },
    ],
  },

  contact: {
    badge: "Ұсыныстарға ашық",
    title: "Бірге",
    titleAccent: "жұмыс істейік",
    description: "Сапа, жүйе және егжей-тегжейге назар аудару маңызды қызықты жобаларды іздеймін",
    emailLabel: "Маған жазыңыз",
    sendEmail: "Хат жіберу",
    copyEmail: "Көшіру",
    copied: "Көшірілді!",
    or: "немесе",
    socials: "Әлеуметтік желілер",
    responseTime: "Әдетте 24 сағат ішінде жауап беремін",
    timezone: "Мәскеу, UTC+3",
  },

  footer: {
    role: "Senior Frontend / UI архитектор",
    description: "UI Kit, дизайн токендері, тақырыптау, қолжетімділік, тестілеу және DX.",
    write: "Жазу",
    navigation: "Навигация",
    contacts: "Байланыстар",
    aboutSite: "Бұл сайт",
    aboutSiteText:
      "Жылдам, қолжетімді, ауыр тәуелділіктерсіз. Шыны, жіңішке жиектер, тыныш анимациялар.",
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
    lightTheme: "Жарық тақырыпты қосу",
    darkTheme: "Қараңғы тақырыпты қосу",
  },
};
