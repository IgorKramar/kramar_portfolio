import {
  FaCode,
  FaServer,
  FaDatabase,
  FaRocket,
  FaFlask,
  FaWrench,
  FaBrain,
  FaReact,
} from "react-icons/fa6";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiVite,
} from "react-icons/si";
import type { Tech, TechCategoryInfo } from "@/interfaces";

export const TECH_CATEGORIES: TechCategoryInfo[] = [
  {
    id: "frontend",
    icon: <FaCode className="h-4 w-4" />,
  },
  {
    id: "backend",
    icon: <FaServer className="h-4 w-4" />,
  },
  {
    id: "database",
    icon: <FaDatabase className="h-4 w-4" />,
  },
  {
    id: "devops",
    icon: <FaRocket className="h-4 w-4" />,
  },
  {
    id: "testing",
    icon: <FaFlask className="h-4 w-4" />,
  },
  {
    id: "tools",
    icon: <FaWrench className="h-4 w-4" />,
  },
  {
    id: "ai",
    icon: <FaBrain className="h-4 w-4" />,
  },
];

export const TECH_STACK: Tech[] = [
  // === REACT ===
  {
    id: "react",
    name: "React",
    icon: <FaReact className="h-6 w-6" />,
    level: "expert",
    category: "frontend",
    description: {
      ru: "Основа всех моих проектов. Глубокое понимание Virtual DOM, Fiber, Concurrent Mode. Создаю переиспользуемые компоненты с продуманным API, оптимизирую рендеры, управляю сложным состоянием.",
      en: "Foundation of all my projects. Deep understanding of Virtual DOM, Fiber, Concurrent Mode. I create reusable components with thoughtful API, optimize renders, manage complex state.",
      zh: "我所有项目的基础。深入理解Virtual DOM、Fiber、Concurrent Mode。创建具有深思熟虑API的可重用组件，优化渲染，管理复杂状态。",
      es: "Base de todos mis proyectos. Comprensión profunda de Virtual DOM, Fiber, Concurrent Mode. Creo componentes reutilizables con API bien pensada, optimizo renders, gestiono estado complejo.",
      de: "Grundlage aller meiner Projekte. Tiefes Verständnis von Virtual DOM, Fiber, Concurrent Mode. Ich erstelle wiederverwendbare Komponenten mit durchdachter API, optimiere Renders, verwalte komplexen State.",
      fr: "Base de tous mes projets. Compréhension approfondie du Virtual DOM, Fiber, Concurrent Mode. Je crée des composants réutilisables avec une API réfléchie, j'optimise les rendus, je gère l'état complexe.",
      kz: "Барлық жобаларымның негізі. Virtual DOM, Fiber, Concurrent Mode терең түсіну. API ойластырылған қайта пайдаланылатын компоненттер жасаймын, рендерлерді оңтайландырамын.",
    },
    tags: ["Hooks", "Suspense", "RSC", "Context", "Portal", "Memo"],
    highlight: true,
  },

  // === TYPESCRIPT ===
  {
    id: "typescript",
    name: "TypeScript",
    icon: <SiTypescript className="h-5 w-5" />,
    level: "expert",
    category: "frontend",
    description: {
      ru: "Строгая типизация — основа надёжного кода. Использую продвинутые типы: generics, mapped types, conditional types, template literals. Настраиваю строгие правила, пишу type guards, создаю типобезопасные API.",
      en: "Strict typing is the foundation of reliable code. I use advanced types: generics, mapped types, conditional types, template literals. Configure strict rules, write type guards, create type-safe APIs.",
      zh: "严格类型是可靠代码的基础。使用高级类型：泛型、映射类型、条件类型、模板文字。配置严格规则，编写类型守卫，创建类型安全的API。",
      es: "La tipificación estricta es la base del código confiable. Uso tipos avanzados: genéricos, tipos mapeados, tipos condicionales, literales de plantilla. Configuro reglas estrictas, escribo type guards, creo APIs type-safe.",
      de: "Strikte Typisierung ist die Grundlage zuverlässigen Codes. Ich verwende fortgeschrittene Typen: Generics, Mapped Types, Conditional Types, Template Literals. Konfiguriere strikte Regeln, schreibe Type Guards, erstelle typsichere APIs.",
      fr: "Le typage strict est la base d'un code fiable. J'utilise des types avancés : génériques, types mappés, types conditionnels, littéraux de modèle. Je configure des règles strictes, j'écris des type guards, je crée des API type-safe.",
      kz: "Қатаң типтеу — сенімді кодтың негізі. Жетілдірілген типтер қолданамын: generics, mapped types, conditional types. Қатаң ережелер орнатамын, type guards жазамын.",
    },
    tags: ["Strict", "Generics", "Utility Types", "Decorators", "Zod"],
    highlight: true,
  },

  // === NEXT.JS ===
  {
    id: "nextjs",
    name: "Next.js",
    icon: <SiNextdotjs className="h-5 w-5" />,
    level: "expert",
    category: "frontend",
    description: {
      ru: "Фреймворк для продакшена. App Router, Server Components, ISR для оптимальной производительности. Настраиваю middleware, API routes, оптимизирую бандл. Опыт с Edge Runtime и streaming SSR.",
      en: "Production framework. App Router, Server Components, ISR for optimal performance. Configure middleware, API routes, optimize bundle. Experience with Edge Runtime and streaming SSR.",
      zh: "生产框架。App Router、Server Components、ISR实现最佳性能。配置中间件、API路由、优化bundle。具有Edge Runtime和流式SSR经验。",
      es: "Framework de producción. App Router, Server Components, ISR para rendimiento óptimo. Configuro middleware, rutas API, optimizo bundle. Experiencia con Edge Runtime y streaming SSR.",
      de: "Production Framework. App Router, Server Components, ISR für optimale Performance. Konfiguriere Middleware, API Routes, optimiere Bundle. Erfahrung mit Edge Runtime und Streaming SSR.",
      fr: "Framework de production. App Router, Server Components, ISR pour des performances optimales. Je configure le middleware, les routes API, j'optimise le bundle. Expérience avec Edge Runtime et streaming SSR.",
      kz: "Өндіріс фреймворкі. App Router, Server Components, ISR оңтайлы өнімділік үшін. Middleware, API routes баптаймын, bundle оңтайландырамын.",
    },
    tags: ["App Router", "RSC", "ISR", "Middleware", "Edge", "PPR"],
    highlight: true,
  },

  // === TAILWIND CSS ===
  {
    id: "tailwindcss",
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="h-5 w-5" />,
    level: "expert",
    category: "frontend",
    description: {
      ru: "Utility-first подход для быстрой разработки. Создаю кастомные дизайн-токены, настраиваю темы, пишу плагины. Использую JIT, container queries, arbitrary values. Оптимизирую CSS для продакшена.",
      en: "Utility-first approach for rapid development. Create custom design tokens, configure themes, write plugins. Use JIT, container queries, arbitrary values. Optimize CSS for production.",
      zh: "实用优先的快速开发方法。创建自定义设计令牌，配置主题，编写插件。使用JIT、容器查询、任意值。为生产优化CSS。",
      es: "Enfoque utility-first para desarrollo rápido. Creo tokens de diseño personalizados, configuro temas, escribo plugins. Uso JIT, container queries, valores arbitrarios. Optimizo CSS para producción.",
      de: "Utility-first Ansatz für schnelle Entwicklung. Erstelle Custom Design Tokens, konfiguriere Themes, schreibe Plugins. Nutze JIT, Container Queries, Arbitrary Values. Optimiere CSS für Production.",
      fr: "Approche utility-first pour un développement rapide. Je crée des design tokens personnalisés, configure des thèmes, écris des plugins. J'utilise JIT, container queries, valeurs arbitraires. J'optimise le CSS pour la production.",
      kz: "Жылдам әзірлеу үшін utility-first тәсілі. Кастомды дизайн токендер жасаймын, темалар баптаймын, плагиндер жазамын. JIT, container queries қолданамын.",
    },
    tags: ["v4", "JIT", "Design Tokens", "Theming", "Container Queries"],
    highlight: true,
  },

  // === VITE ===
  {
    id: "vite",
    name: "Vite",
    icon: <SiVite className="h-5 w-5" />,
    level: "expert",
    category: "frontend",
    description: {
      ru: "Молниеносная сборка на ESM. Настраиваю dev-сервер, HMR, оптимизацию бандлов. Пишу плагины, настраиваю алиасы, работаю с воркерами. Использую для библиотек компонентов и SPA.",
      en: "Lightning-fast ESM build. Configure dev server, HMR, bundle optimization. Write plugins, set up aliases, work with workers. Use for component libraries and SPAs.",
      zh: "基于ESM的闪电般快速构建。配置开发服务器、HMR、bundle优化。编写插件，设置别名，使用workers。用于组件库和SPA。",
      es: "Construcción ultrarrápida con ESM. Configuro servidor dev, HMR, optimización de bundles. Escribo plugins, configuro alias, trabajo con workers. Uso para librerías de componentes y SPAs.",
      de: "Blitzschneller ESM Build. Konfiguriere Dev-Server, HMR, Bundle-Optimierung. Schreibe Plugins, richte Aliase ein, arbeite mit Workern. Nutze für Component Libraries und SPAs.",
      fr: "Build ultra-rapide avec ESM. Je configure le serveur de dev, HMR, l'optimisation des bundles. J'écris des plugins, configure des alias, travaille avec des workers. J'utilise pour les bibliothèques de composants et les SPA.",
      kz: "ESM негізінде жылдам құрастыру. Dev сервер, HMR, bundle оңтайландыру баптаймын. Плагиндер жазамын, alias орнатамын, воркерлермен жұмыс істеймін.",
    },
    tags: ["ESM", "HMR", "Rollup", "Plugin API", "SSR", "Library Mode"],
    highlight: false,
  },
];
