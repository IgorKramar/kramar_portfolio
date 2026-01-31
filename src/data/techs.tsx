import {
  FaCode,
  FaServer,
  FaDatabase,
  FaRocket,
  FaFlask,
  FaWrench,
  FaBrain,
  FaReact,
  FaVuejs
} from "react-icons/fa6";
import { GiPineapple } from "react-icons/gi";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiVite,
  SiRedux,
  SiFramer,
  SiStorybook,
  SiRadixui,
  SiCss3,
  SiWebpack,
  SiGraphql,
  SiReactquery,
  SiZod,
  SiReacthookform,
  SiBun,
  SiAstro,
  SiPwa,
  SiQwik,
  SiTestinglibrary,
  SiVuedotjs,
  SiNuxtdotjs,
  SiQuasar,
  SiVuetify,
  SiVitest,
  SiReactrouter,
  SiMui,
  SiAntdesign,
  SiChakraui,
  SiMobx,
  SiReacttable,
  SiSwr,
  SiMantine,
  SiRemix,
    SiJest,
  SiCypress,
  SiPuppeteer,
  SiSelenium,
} from "react-icons/si";
import { RiEmotion2Line } from "react-icons/ri";
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
  // === EXPERT ===

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
  // === REDUX TOOLKIT ===
  {
    id: "redux",
    name: "Redux Toolkit",
    icon: <SiRedux className="h-5 w-5" />,
    level: "expert",
    category: "frontend",
    description: {
      ru: "Современное управление состоянием. RTK Query для работы с API, createSlice для редьюсеров, middleware для сайд-эффектов. Настраиваю DevTools, оптимизирую селекторы с reselect, управляю нормализованными данными.",
      en: "Modern state management. RTK Query for API work, createSlice for reducers, middleware for side effects. Configure DevTools, optimize selectors with reselect, manage normalized data.",
      zh: "现代状态管理。RTK Query用于API工作，createSlice用于reducers，middleware用于副作用。配置DevTools，使用reselect优化选择器，管理规范化数据。",
      es: "Gestión de estado moderna. RTK Query para trabajo con API, createSlice para reducers, middleware para efectos secundarios. Configuro DevTools, optimizo selectores con reselect, gestiono datos normalizados.",
      de: "Modernes State Management. RTK Query für API-Arbeit, createSlice für Reducer, Middleware für Seiteneffekte. Konfiguriere DevTools, optimiere Selektoren mit reselect, verwalte normalisierte Daten.",
      fr: "Gestion d'état moderne. RTK Query pour le travail API, createSlice pour les reducers, middleware pour les effets de bord. Je configure DevTools, j'optimise les sélecteurs avec reselect, je gère les données normalisées.",
      kz: "Заманауи күй басқару. API жұмысы үшін RTK Query, reducer үшін createSlice, жанама әсерлер үшін middleware. DevTools баптаймын, reselect арқылы селекторларды оңтайландырамын.",
    },
    tags: ["RTK", "RTK Query", "Reselect", "Immer", "DevTools", "Thunks"],
    highlight: false,
  },

    // === REACT ROUTER ===
  {
    id: "react-router",
    name: "React Router",
    icon: <SiReactrouter className="h-5 w-5" />,
    level: "expert",
    category: "frontend",
    description: {
      ru: "Стандарт роутинга для React. Глубокое понимание v6 с data APIs, loaders, actions. Настраиваю nested layouts, error boundaries, оптимистичные обновления. Работаю с форм-экшенами, streaming SSR. Создаю type-safe роуты с генерацией типов.",
      en: "Routing standard for React. Deep understanding of v6 with data APIs, loaders, actions. Configure nested layouts, error boundaries, optimistic updates. Work with form actions, streaming SSR. Create type-safe routes with type generation.",
      zh: "React的路由标准。深入理解v6的数据API、加载器、动作。配置嵌套布局、错误边界、乐观更新。使用表单动作、流式SSR。通过类型生成创建类型安全的路由。",
      es: "Estándar de enrutamiento para React. Comprensión profunda de v6 con APIs de datos, loaders, actions. Configuro layouts anidados, error boundaries, actualizaciones optimistas. Trabajo con form actions, streaming SSR.",
      de: "Routing-Standard für React. Tiefes Verständnis von v6 mit Data APIs, Loaders, Actions. Konfiguriere Nested Layouts, Error Boundaries, optimistische Updates. Arbeite mit Form Actions, Streaming SSR.",
      fr: "Standard de routage pour React. Compréhension approfondie de v6 avec data APIs, loaders, actions. Je configure les layouts imbriqués, error boundaries, mises à jour optimistes. Je travaille avec form actions, streaming SSR.",
      kz: "React үшін роутинг стандарты. v6 data APIs, loaders, actions терең түсіну. Nested layouts, error boundaries, оптимистік жаңартулар баптаймын. Form actions, streaming SSR жұмыс істеймін.",
    },
    tags: ["v6", "Data Router", "Loaders", "Actions", "Nested", "Type-safe"],
    highlight: true,
  },

  // === MUI (MATERIAL-UI) ===
  {
    id: "mui",
    name: "MUI (Material-UI)",
    icon: <SiMui className="h-5 w-5" />,
    level: "expert",
    category: "frontend",
    description: {
      ru: "Компоненты Material Design для React. Создаю кастомные темы через createTheme, styled API, sx prop. Оптимизирую bundle size через модульные импорты. Расширяю компоненты через slots API. Настраиваю CSS-in-JS с emotion, создаю дизайн-токены.",
      en: "Material Design components for React. Create custom themes via createTheme, styled API, sx prop. Optimize bundle size through modular imports. Extend components via slots API. Configure CSS-in-JS with emotion, create design tokens.",
      zh: "React的Material Design组件。通过createTheme、styled API、sx prop创建自定义主题。通过模块化导入优化bundle大小。通过slots API扩展组件。使用emotion配置CSS-in-JS，创建设计令牌。",
      es: "Componentes Material Design para React. Creo temas personalizados vía createTheme, styled API, sx prop. Optimizo bundle size con imports modulares. Extiendo componentes vía slots API. Configuro CSS-in-JS con emotion.",
      de: "Material Design Komponenten für React. Erstelle Custom Themes via createTheme, styled API, sx prop. Optimiere Bundle Size durch modulare Imports. Erweitere Components via Slots API. Konfiguriere CSS-in-JS mit emotion.",
      fr: "Composants Material Design pour React. Je crée des thèmes personnalisés via createTheme, styled API, sx prop. J'optimise la taille du bundle avec imports modulaires. J'étends les composants via slots API.",
      kz: "React үшін Material Design компоненттері. createTheme, styled API, sx prop арқылы кастомды темалар жасаймын. Модульдік импорт арқылы bundle size оңтайландырамын.",
    },
    tags: ["v5", "Material Design", "Theming", "styled", "sx prop", "Data Grid"],
    highlight: true,
  },

  // === ZUSTAND ===
  {
    id: "zustand",
    name: "Zustand",
    icon: <SiMobx className="h-5 w-5" />,
    level: "expert",
    category: "frontend",
    description: {
      ru: "Минималистичное управление состоянием. Создаю stores с TypeScript, middleware для persist, devtools. Использую subscriptions, transient updates, slices pattern. Интегрирую с React Suspense, SSR. Меньше бойлерплейта чем Redux, полный контроль.",
      en: "Minimalist state management. Create stores with TypeScript, middleware for persist, devtools. Use subscriptions, transient updates, slices pattern. Integrate with React Suspense, SSR. Less boilerplate than Redux, full control.",
      zh: "极简状态管理。使用TypeScript创建stores，用于persist、devtools的中间件。使用订阅、瞬态更新、切片模式。与React Suspense、SSR集成。比Redux更少的样板代码，完全控制。",
      es: "Gestión de estado minimalista. Creo stores con TypeScript, middleware para persist, devtools. Uso subscriptions, actualizaciones transient, patrón slices. Integro con React Suspense, SSR. Menos boilerplate que Redux.",
      de: "Minimalistisches State Management. Erstelle Stores mit TypeScript, Middleware für Persist, DevTools. Nutze Subscriptions, Transient Updates, Slices Pattern. Integriere mit React Suspense, SSR.",
      fr: "Gestion d'état minimaliste. Je crée des stores avec TypeScript, middleware pour persist, devtools. J'utilise subscriptions, mises à jour transitoires, pattern slices. J'intègre avec React Suspense, SSR.",
      kz: "Минималистік күй басқару. TypeScript-пен stores жасаймын, persist, devtools үшін middleware. Subscriptions, transient updates, slices pattern қолданамын.",
    },
    tags: ["Bears", "Middleware", "TypeScript", "Persist", "Slices", "DevTools"],
    highlight: false,
  },

  // === REACT TABLE (TANSTACK TABLE) ===
  {
    id: "react-table",
    name: "TanStack Table",
    icon: <SiReacttable className="h-5 w-5" />,
    level: "expert",
    category: "frontend",
    description: {
      ru: "Headless UI для таблиц. Создаю сложные data grids с сортировкой, фильтрацией, пагинацией. Виртуализация через @tanstack/react-virtual, column resizing, row selection. Кастомные рендереры ячеек, группировка, aggregation. Полная типизация.",
      en: "Headless UI for tables. Create complex data grids with sorting, filtering, pagination. Virtualization via @tanstack/react-virtual, column resizing, row selection. Custom cell renderers, grouping, aggregation. Full typing.",
      zh: "表格的Headless UI。创建具有排序、过滤、分页的复杂数据网格。通过@tanstack/react-virtual虚拟化、列调整大小、行选择。自定义单元格渲染器、分组、聚合。完整类型化。",
      es: "Headless UI para tablas. Creo data grids complejos con ordenamiento, filtrado, paginación. Virtualización vía @tanstack/react-virtual, redimensión de columnas, selección de filas. Renderers personalizados, agrupación.",
      de: "Headless UI für Tabellen. Erstelle komplexe Data Grids mit Sortierung, Filterung, Pagination. Virtualisierung via @tanstack/react-virtual, Column Resizing, Row Selection. Custom Cell Renderer, Gruppierung.",
      fr: "Headless UI pour tables. Je crée des grilles de données complexes avec tri, filtrage, pagination. Virtualisation via @tanstack/react-virtual, redimensionnement de colonnes, sélection de lignes.",
      kz: "Кестелер үшін Headless UI. Сұрыптау, сүзу, пагинациямен күрделі data grids жасаймын. @tanstack/react-virtual арқылы виртуализация, column resizing, row selection.",
    },
    tags: ["v8", "Headless", "Virtualization", "Sorting", "Filtering", "TypeScript"],
    highlight: false,
  },

  // === SWR ===
  {
    id: "swr",
    name: "SWR",
    icon: <SiSwr className="h-5 w-5" />,
    level: "expert",
    category: "frontend",
    description: {
      ru: "Data fetching от Vercel. Stale-while-revalidate стратегия, автоматический ретрай, дедупликация запросов. Настраиваю глобальную конфигурацию, middleware, оптимистичные обновления. Использую с TypeScript, infinite loading, подписки через SSE.",
      en: "Data fetching by Vercel. Stale-while-revalidate strategy, automatic retry, request deduplication. Configure global configuration, middleware, optimistic updates. Use with TypeScript, infinite loading, subscriptions via SSE.",
      zh: "Vercel的数据获取。Stale-while-revalidate策略、自动重试、请求去重。配置全局配置、中间件、乐观更新。与TypeScript、无限加载、通过SSE的订阅一起使用。",
      es: "Data fetching de Vercel. Estrategia stale-while-revalidate, reintentos automáticos, deduplicación de requests. Configuro configuración global, middleware, actualizaciones optimistas. Uso con TypeScript, carga infinita.",
      de: "Data Fetching von Vercel. Stale-while-revalidate Strategie, automatischer Retry, Request-Deduplizierung. Konfiguriere globale Konfiguration, Middleware, optimistische Updates. Nutze mit TypeScript, Infinite Loading.",
      fr: "Data fetching par Vercel. Stratégie stale-while-revalidate, retry automatique, déduplication de requêtes. Je configure la configuration globale, middleware, mises à jour optimistes.",
      kz: "Vercel-ден data fetching. Stale-while-revalidate стратегиясы, автоматты қайта сұрау, сұраулар дедупликациясы. Глобалды конфигурация, middleware, оптимистік жаңартулар баптаймын.",
    },
    tags: ["Cache", "Revalidation", "Focus", "Polling", "SSR", "Suspense"],
    highlight: false,
  },

  // === CHAKRA UI ===
  {
    id: "chakra-ui",
    name: "Chakra UI",
    icon: <SiChakraui className="h-5 w-5" />,
    level: "expert",
    category: "frontend",
    description: {
      ru: "Модульная компонентная библиотека. Создаю темы с дизайн-токенами, color modes, responsive styles. Использую style props, составные компоненты, hooks. Полная доступность из коробки. Интеграция с Framer Motion для анимаций.",
      en: "Modular component library. Create themes with design tokens, color modes, responsive styles. Use style props, compound components, hooks. Full accessibility out of the box. Integration with Framer Motion for animations.",
      zh: "模块化组件库。使用设计令牌、颜色模式、响应式样式创建主题。使用样式属性、复合组件、hooks。开箱即用的完全可访问性。与Framer Motion集成实现动画。",
      es: "Biblioteca de componentes modular. Creo temas con design tokens, modos de color, estilos responsive. Uso style props, componentes compuestos, hooks. Accesibilidad completa out of the box.",
      de: "Modulare Component Library. Erstelle Themes mit Design Tokens, Color Modes, Responsive Styles. Nutze Style Props, Compound Components, Hooks. Volle Barrierefreiheit out of the box.",
      fr: "Bibliothèque de composants modulaire. Je crée des thèmes avec design tokens, modes de couleur, styles responsive. J'utilise style props, composants composés, hooks.",
      kz: "Модульдік компонент кітапханасы. Дизайн токендермен, color modes, responsive styles темалар жасаймын. Style props, құрамдас компоненттер, hooks қолданамын.",
    },
    tags: ["v2", "Theming", "Style Props", "Accessibility", "Color Modes", "Hooks"],
    highlight: false,
  },

  // === ANT DESIGN ===
  {
    id: "antd",
    name: "Ant Design",
    icon: <SiAntdesign className="h-5 w-5" />,
    level: "expert",
    category: "frontend",
    description: {
      ru: "Enterprise UI библиотека. Настраиваю ConfigProvider для тем, локализации. Использую Form с валидацией, Table с виртуализацией, ProComponents для админок. Tree-shaking через babel-plugin-import. Кастомизация через CSS variables.",
      en: "Enterprise UI library. Configure ConfigProvider for themes, localization. Use Form with validation, Table with virtualization, ProComponents for admin panels. Tree-shaking via babel-plugin-import. Customization through CSS variables.",
      zh: "企业级UI库。配置ConfigProvider用于主题、本地化。使用带验证的Form、带虚拟化的Table、用于管理面板的ProComponents。通过babel-plugin-import进行tree-shaking。通过CSS变量定制。",
      es: "Biblioteca UI empresarial. Configuro ConfigProvider para temas, localización. Uso Form con validación, Table con virtualización, ProComponents para paneles admin. Tree-shaking vía babel-plugin-import.",
      de: "Enterprise UI Library. Konfiguriere ConfigProvider für Themes, Lokalisierung. Nutze Form mit Validierung, Table mit Virtualisierung, ProComponents für Admin Panels. Tree-shaking via babel-plugin-import.",
      fr: "Bibliothèque UI entreprise. Je configure ConfigProvider pour thèmes, localisation. J'utilise Form avec validation, Table avec virtualisation, ProComponents pour panneaux admin.",
      kz: "Enterprise UI кітапханасы. Темалар, локализация үшін ConfigProvider баптаймын. Валидациямен Form, виртуализациямен Table, админ панельдер үшін ProComponents қолданамын.",
    },
    tags: ["v5", "Enterprise", "Forms", "Tables", "ProComponents", "Design Language"],
    highlight: false,
  },

  // === EMOTION ===
  {
    id: "emotion",
    name: "Emotion",
    icon: <RiEmotion2Line className="h-5 w-5" />,
    level: "expert",
    category: "frontend",
    description: {
      ru: "CSS-in-JS с отличной производительностью. Использую styled components, css prop, theming. Server-side рендеринг, critical CSS extraction. Создаю переиспользуемые стили через composition. Интеграция с TypeScript для type-safe стилей.",
      en: "CSS-in-JS with excellent performance. Use styled components, css prop, theming. Server-side rendering, critical CSS extraction. Create reusable styles through composition. Integration with TypeScript for type-safe styles.",
      zh: "具有出色性能的CSS-in-JS。使用styled components、css prop、主题化。服务器端渲染、关键CSS提取。通过组合创建可重用样式。与TypeScript集成实现类型安全的样式。",
      es: "CSS-in-JS con excelente rendimiento. Uso styled components, css prop, theming. Renderizado server-side, extracción de CSS crítico. Creo estilos reutilizables mediante composición.",
      de: "CSS-in-JS mit exzellenter Performance. Nutze Styled Components, CSS Prop, Theming. Server-side Rendering, Critical CSS Extraction. Erstelle wiederverwendbare Styles durch Composition.",
      fr: "CSS-in-JS avec excellentes performances. J'utilise styled components, css prop, theming. Rendu côté serveur, extraction CSS critique. Je crée des styles réutilisables par composition.",
      kz: "Өнімділігі жоғары CSS-in-JS. Styled components, css prop, theming қолданамын. Server-side рендеринг, critical CSS extraction. Composition арқылы қайта пайдаланылатын стильдер жасаймын.",
    },
    tags: ["CSS-in-JS", "styled", "css prop", "SSR", "Theming", "TypeScript"],
    highlight: false,
  },

  // === MANTINE ===
  {
    id: "mantine",
    name: "Mantine",
    icon: <SiMantine className="h-5 w-5" />,
    level: "expert",
    category: "frontend",
    description: {
      ru: "Полнофункциональная React библиотека. 100+ компонентов, hooks, form management. Встроенные notifications, modals manager, spotlight. Dark theme, RTL, полная типизация. CSS-in-JS через emotion, кастомизация через MantineProvider.",
      en: "Full-featured React library. 100+ components, hooks, form management. Built-in notifications, modals manager, spotlight. Dark theme, RTL, full typing. CSS-in-JS via emotion, customization through MantineProvider.",
      zh: "功能齐全的React库。100+组件、hooks、表单管理。内置通知、模态管理器、spotlight。暗主题、RTL、完整类型化。通过emotion的CSS-in-JS，通过MantineProvider定制。",
      es: "Biblioteca React completa. 100+ componentes, hooks, gestión de formularios. Notificaciones integradas, gestor de modales, spotlight. Tema oscuro, RTL, tipado completo. CSS-in-JS vía emotion.",
      de: "Voll ausgestattete React Library. 100+ Components, Hooks, Form Management. Eingebaute Notifications, Modals Manager, Spotlight. Dark Theme, RTL, volle Typisierung. CSS-in-JS via emotion.",
      fr: "Bibliothèque React complète. 100+ composants, hooks, gestion de formulaires. Notifications intégrées, gestionnaire de modales, spotlight. Thème sombre, RTL, typage complet.",
      kz: "Толық функционалды React кітапханасы. 100+ компонент, hooks, form management. Кірістірілген notifications, modals manager, spotlight. Dark theme, RTL, толық типтеу.",
    },
    tags: ["v7", "Components", "Hooks", "Forms", "Notifications", "TypeScript"],
    highlight: false,
  },

  // === REMIX ===
  {
    id: "remix",
    name: "Remix",
    icon: <SiRemix className="h-5 w-5" />,
    level: "expert",
    category: "frontend",
    description: {
      ru: "Фулстек фреймворк с фокусом на веб-стандарты. Nested routing, data loading через loaders, mutations через actions. Progressive enhancement, работа без JS. Streaming, error boundaries, оптимистичные обновления. Деплой на edge.",
      en: "Fullstack framework focused on web standards. Nested routing, data loading via loaders, mutations via actions. Progressive enhancement, works without JS. Streaming, error boundaries, optimistic updates. Edge deployment.",
      zh: "专注于Web标准的全栈框架。嵌套路由、通过loaders的数据加载、通过actions的变更。渐进增强、无JS工作。流式传输、错误边界、乐观更新。边缘部署。",
      es: "Framework fullstack enfocado en estándares web. Enrutamiento anidado, carga de datos vía loaders, mutaciones vía actions. Mejora progresiva, funciona sin JS. Streaming, error boundaries.",
      de: "Fullstack Framework mit Fokus auf Web-Standards. Nested Routing, Data Loading via Loaders, Mutations via Actions. Progressive Enhancement, funktioniert ohne JS. Streaming, Error Boundaries.",
      fr: "Framework fullstack axé sur les standards web. Routage imbriqué, chargement de données via loaders, mutations via actions. Amélioration progressive, fonctionne sans JS.",
      kz: "Веб-стандарттарға бағытталған fullstack фреймворк. Nested routing, loaders арқылы data loading, actions арқылы mutations. Progressive enhancement, JS-сіз жұмыс істейді.",
    },
    tags: ["SSR", "Loaders", "Actions", "Progressive", "Edge", "Web Standards"],
    highlight: true,
  },

    // === STORYBOOK ===
  {
    id: "storybook",
    name: "Storybook",
    icon: <SiStorybook className="h-5 w-5" />,
    level: "expert",
    category: "frontend",
    description: {
      ru: "Документация и тестирование компонентов. Настраиваю addon'ы для a11y, viewport, controls. Пишу stories с различными состояниями, создаю интерактивную документацию. Интегрирую visual regression тесты.",
      en: "Component documentation and testing. Configure addons for a11y, viewport, controls. Write stories with various states, create interactive documentation. Integrate visual regression tests.",
      zh: "组件文档和测试。配置a11y、viewport、controls插件。编写具有各种状态的stories，创建交互式文档。集成视觉回归测试。",
      es: "Documentación y testing de componentes. Configuro addons para a11y, viewport, controls. Escribo stories con varios estados, creo documentación interactiva. Integro tests de regresión visual.",
      de: "Komponenten-Dokumentation und Testing. Konfiguriere Addons für a11y, Viewport, Controls. Schreibe Stories mit verschiedenen Zuständen, erstelle interaktive Dokumentation. Integriere Visual Regression Tests.",
      fr: "Documentation et test des composants. Je configure les addons pour a11y, viewport, controls. J'écris des stories avec différents états, je crée une documentation interactive. J'intègre des tests de régression visuelle.",
      kz: "Компоненттер құжаттамасы және тестілеу. a11y, viewport, controls үшін addon баптаймын. Әртүрлі күйлермен stories жазамын, интерактивті құжаттама жасаймын. Visual regression тесттерді біріктіремін.",
    },
    tags: ["CSF3", "Addons", "Chromatic", "Play", "Interaction", "MDX"],
    highlight: true,
  },

    // === CSS/SASS ===
  {
    id: "css-sass",
    name: "CSS / Sass",
    icon: <SiCss3 className="h-5 w-5" />,
    level: "expert",
    category: "frontend",
    description: {
      ru: "Глубокое знание CSS и препроцессоров. CSS Grid, Flexbox, Custom Properties, @layer, @container. В Sass использую миксины, функции, модульную архитектуру. Оптимизирую Critical CSS, настраиваю PostCSS.",
      en: "Deep knowledge of CSS and preprocessors. CSS Grid, Flexbox, Custom Properties, @layer, @container. In Sass use mixins, functions, modular architecture. Optimize Critical CSS, configure PostCSS.",
      zh: "深入了解CSS和预处理器。CSS Grid、Flexbox、自定义属性、@layer、@container。在Sass中使用mixins、函数、模块化架构。优化Critical CSS，配置PostCSS。",
      es: "Conocimiento profundo de CSS y preprocesadores. CSS Grid, Flexbox, Custom Properties, @layer, @container. En Sass uso mixins, funciones, arquitectura modular. Optimizo Critical CSS, configuro PostCSS.",
      de: "Tiefes Wissen über CSS und Präprozessoren. CSS Grid, Flexbox, Custom Properties, @layer, @container. In Sass nutze Mixins, Funktionen, modulare Architektur. Optimiere Critical CSS, konfiguriere PostCSS.",
      fr: "Connaissance approfondie de CSS et des préprocesseurs. CSS Grid, Flexbox, Custom Properties, @layer, @container. Dans Sass j'utilise mixins, fonctions, architecture modulaire. J'optimise le Critical CSS, je configure PostCSS.",
      kz: "CSS және препроцессорларды терең білу. CSS Grid, Flexbox, Custom Properties, @layer, @container. Sass-та mixins, функциялар, модульдік архитектура қолданамын. Critical CSS оңтайландырамын, PostCSS баптаймын.",
    },
    tags: ["Grid", "Flexbox", "Variables", "Animations", "Modules", "PostCSS"],
    highlight: false,
  },

    // === TANSTACK QUERY ===
  {
    id: "tanstack-query",
    name: "TanStack Query",
    icon: <SiReactquery className="h-5 w-5" />,
    level: "expert",
    category: "frontend",
    description: {
      ru: "Мощное управление серверным состоянием. Настраиваю кеширование, фоновые обновления, оптимистичные мутации. Использую infinite queries для пагинации, parallel queries, prefetching. Интегрирую с SSR в Next.js.",
      en: "Powerful server state management. Configure caching, background updates, optimistic mutations. Use infinite queries for pagination, parallel queries, prefetching. Integrate with SSR in Next.js.",
      zh: "强大的服务器状态管理。配置缓存、后台更新、乐观变更。使用infinite queries进行分页，parallel queries，预取。与Next.js中的SSR集成。",
      es: "Potente gestión de estado del servidor. Configuro caché, actualizaciones en segundo plano, mutaciones optimistas. Uso infinite queries para paginación, parallel queries, prefetching. Integro con SSR en Next.js.",
      de: "Leistungsstarkes Server State Management. Konfiguriere Caching, Hintergrund-Updates, optimistische Mutationen. Nutze Infinite Queries für Pagination, Parallel Queries, Prefetching. Integriere mit SSR in Next.js.",
      fr: "Gestion puissante de l'état serveur. Je configure le cache, les mises à jour en arrière-plan, les mutations optimistes. J'utilise infinite queries pour la pagination, parallel queries, prefetching. J'intègre avec SSR dans Next.js.",
      kz: "Қуатты сервер күйін басқару. Кэштеу, фондық жаңартулар, оптимистік мутациялар баптаймын. Пагинация үшін infinite queries, parallel queries, prefetching қолданамын. Next.js-те SSR-мен біріктіремін.",
    },
    tags: ["v5", "Mutations", "Infinite", "Suspense", "Devtools", "Hydration"],
    highlight: true,
  },

    // === REACT HOOK FORM ===
  {
    id: "react-hook-form",
    name: "React Hook Form",
    icon: <SiReacthookform className="h-5 w-5" />,
    level: "expert",
    category: "frontend",
    description: {
      ru: "Эффективные формы без ререндеров. Использую Controller для интеграции UI библиотек, настраиваю сложную валидацию с Zod/Yup. Работаю с динамическими полями, field arrays, условной логикой. Оптимизирую производительность больших форм.",
      en: "Efficient forms without re-renders. Use Controller for UI library integration, configure complex validation with Zod/Yup. Work with dynamic fields, field arrays, conditional logic. Optimize performance of large forms.",
      zh: "无重新渲染的高效表单。使用Controller集成UI库，使用Zod/Yup配置复杂验证。处理动态字段、字段数组、条件逻辑。优化大型表单的性能。",
      es: "Formularios eficientes sin re-renders. Uso Controller para integración de librerías UI, configuro validación compleja con Zod/Yup. Trabajo con campos dinámicos, field arrays, lógica condicional. Optimizo rendimiento de formularios grandes.",
      de: "Effiziente Formulare ohne Re-Renders. Nutze Controller für UI Library Integration, konfiguriere komplexe Validierung mit Zod/Yup. Arbeite mit dynamischen Feldern, Field Arrays, bedingter Logik. Optimiere Performance großer Formulare.",
      fr: "Formulaires efficaces sans re-renders. J'utilise Controller pour l'intégration de bibliothèques UI, je configure une validation complexe avec Zod/Yup. Je travaille avec des champs dynamiques, field arrays, logique conditionnelle. J'optimise les performances des grands formulaires.",
      kz: "Қайта рендерсіз тиімді формалар. UI кітапханаларын біріктіру үшін Controller қолданамын, Zod/Yup арқылы күрделі валидация баптаймын. Динамикалық өрістермен, field arrays, шартты логикамен жұмыс істеймін.",
    },
    tags: ["v7", "Controller", "useForm", "Validation", "DevTools", "Performance"],
    highlight: true,
  },

    // === WEBPACK ===
  {
    id: "webpack",
    name: "Webpack",
    icon: <SiWebpack className="h-5 w-5" />,
    level: "expert",
    category: "frontend",
    description: {
      ru: "Настройка сложных сборок. Конфигурирую loaders, plugins, оптимизирую бандлы через code splitting и tree shaking. Настраиваю Module Federation для микрофронтендов, анализирую bundle size, пишу кастомные плагины.",
      en: "Complex build configuration. Configure loaders, plugins, optimize bundles through code splitting and tree shaking. Set up Module Federation for microfrontends, analyze bundle size, write custom plugins.",
      zh: "复杂构建配置。配置加载器、插件，通过代码分割和tree shaking优化包。为微前端设置Module Federation，分析bundle大小，编写自定义插件。",
      es: "Configuración de builds complejos. Configuro loaders, plugins, optimizo bundles con code splitting y tree shaking. Configuro Module Federation para microfrontends, analizo bundle size, escribo plugins personalizados.",
      de: "Komplexe Build-Konfiguration. Konfiguriere Loader, Plugins, optimiere Bundles durch Code Splitting und Tree Shaking. Richte Module Federation für Microfrontends ein, analysiere Bundle Size, schreibe Custom Plugins.",
      fr: "Configuration de builds complexes. Je configure loaders, plugins, j'optimise les bundles avec code splitting et tree shaking. Je configure Module Federation pour les microfrontends, j'analyse la taille des bundles, j'écris des plugins personnalisés.",
      kz: "Күрделі құрастыруларды баптау. Loaders, plugins конфигурациялаймын, code splitting және tree shaking арқылы bundle оңтайландырамын. Микрофронтендтер үшін Module Federation орнатамын.",
    },
    tags: ["v5", "Module Federation", "SWC", "Code Splitting", "HMR", "Optimization"],
    highlight: false,
  },

  // === VUE 3 ===
  {
    id: "vue",
    name: "Vue 3",
    icon: <SiVuedotjs className="h-5 w-5" />,
    level: "expert",
    category: "frontend",
    description: {
      ru: "Прогрессивный фреймворк с Composition API. Глубокое понимание реактивности на Proxy, компилятора шаблонов, Virtual DOM. Создаю переиспользуемые composables, работаю с Suspense, Teleport, Fragment. Оптимизирую производительность через compiler hints.",
      en: "Progressive framework with Composition API. Deep understanding of Proxy-based reactivity, template compiler, Virtual DOM. Create reusable composables, work with Suspense, Teleport, Fragment. Optimize performance through compiler hints.",
      zh: "具有Composition API的渐进式框架。深入理解基于Proxy的响应性、模板编译器、虚拟DOM。创建可重用的composables，使用Suspense、Teleport、Fragment。通过编译器提示优化性能。",
      es: "Framework progresivo con Composition API. Comprensión profunda de reactividad basada en Proxy, compilador de plantillas, Virtual DOM. Creo composables reutilizables, trabajo con Suspense, Teleport, Fragment.",
      de: "Progressives Framework mit Composition API. Tiefes Verständnis von Proxy-basierter Reaktivität, Template Compiler, Virtual DOM. Erstelle wiederverwendbare Composables, arbeite mit Suspense, Teleport, Fragment.",
      fr: "Framework progressif avec Composition API. Compréhension approfondie de la réactivité basée sur Proxy, compilateur de templates, Virtual DOM. Je crée des composables réutilisables, travaille avec Suspense, Teleport, Fragment.",
      kz: "Composition API бар прогрессивті фреймворк. Proxy негізіндегі реактивтілік, template compiler, Virtual DOM терең түсіну. Қайта пайдаланылатын composables жасаймын.",
    },
    tags: ["Composition API", "Reactivity", "SFC", "TypeScript", "Vapor Mode", "SSR"],
    highlight: true,
  },

  // === NUXT 3 ===
  {
    id: "nuxt",
    name: "Nuxt 3",
    icon: <SiNuxtdotjs className="h-5 w-5" />,
    level: "expert",
    category: "frontend",
    description: {
      ru: "Фулстек фреймворк на Vue 3. Настраиваю Nitro сервер, auto-imports, file-based routing. Работаю с useFetch, useAsyncData, создаю API routes. Использую гибридный рендеринг, Island компоненты, layers для модульности.",
      en: "Fullstack framework on Vue 3. Configure Nitro server, auto-imports, file-based routing. Work with useFetch, useAsyncData, create API routes. Use hybrid rendering, Island components, layers for modularity.",
      zh: "基于Vue 3的全栈框架。配置Nitro服务器、自动导入、基于文件的路由。使用useFetch、useAsyncData，创建API路由。使用混合渲染、Island组件、layers实现模块化。",
      es: "Framework fullstack en Vue 3. Configuro servidor Nitro, auto-imports, routing basado en archivos. Trabajo con useFetch, useAsyncData, creo rutas API. Uso renderizado híbrido, componentes Island.",
      de: "Fullstack Framework auf Vue 3. Konfiguriere Nitro Server, Auto-Imports, File-based Routing. Arbeite mit useFetch, useAsyncData, erstelle API Routes. Nutze Hybrid Rendering, Island Components.",
      fr: "Framework fullstack sur Vue 3. Je configure le serveur Nitro, auto-imports, routing basé sur fichiers. Je travaille avec useFetch, useAsyncData, crée des routes API. J'utilise le rendu hybride, composants Island.",
      kz: "Vue 3 негізіндегі fullstack фреймворк. Nitro сервер, auto-imports, file-based routing баптаймын. useFetch, useAsyncData жұмыс істеймін, API routes жасаймын.",
    },
    tags: ["Nitro", "Universal", "Hybrid", "Islands", "Auto-imports", "Layers"],
    highlight: true,
  },

  // === PINIA ===
  {
    id: "pinia",
    name: "Pinia",
    icon: <GiPineapple className="h-5 w-5" />,
    level: "expert",
    category: "frontend",
    description: {
      ru: "Современное управление состоянием для Vue. Полная поддержка TypeScript, модульная архитектура, интуитивный API. Создаю composable stores, использую $patch для оптимизации, настраиваю пл Интеграция с Vue DevTools.",
      en: "Modern state management for Vue. Full TypeScript support, modular architecture, intuitive API. Create composable stores, use $patch for optimization, configure plugins. Integration with Vue DevTools.",
      zh: "Vue的现代状态管理。完整的TypeScript支持、模块化架构、直观的API。创建可组合的stores，使用$patch优化，配置插件。与Vue DevTools集成。",
      es: "Gestión de estado moderna para Vue. Soporte completo de TypeScript, arquitectura modular, API intuitiva. Creo stores composables, uso $patch para optimización, configuro plugins.",
      de: "Modernes State Management für Vue. Volle TypeScript Unterstützung, modulare Architektur, intuitive API. Erstelle Composable Stores, nutze $patch für Optimierung, konfiguriere Plugins.",
      fr: "Gestion d'état moderne pour Vue. Support TypeScript complet, architecture modulaire, API intuitive. Je crée des stores composables, utilise $patch pour l'optimisation, configure des plugins.",
      kz: "Vue үшін заманауи күй басқару. Толық TypeScript қолдау, модульдік архитектура, интуитивті API. Composable stores жасаймын, $patch оңтайландыру үшін қолданамын.",
    },
    tags: ["Stores", "Composables", "DevTools", "Plugins", "HMR", "SSR"],
    highlight: true,
  },

  // === VUEUSE ===
  {
    id: "vueuse",
    name: "VueUse",
    icon: <FaVuejs className="h-5 w-5" />,
    level: "expert",
    category: "frontend",
    description: {
      ru: "Коллекция Vue composables. Использую для работы с браузерными API, анимациями, состоянием. Создаю кастомные composables на основе VueUse паттернов. Интегрирую с @vueuse/motion, @vueuse/gesture для интерактивности.",
      en: "Collection of Vue composables. Use for browser APIs, animations, state. Create custom composables based on VueUse patterns. Integrate with @vueuse/motion, @vueuse/gesture for interactivity.",
      zh: "Vue composables集合。用于浏览器API、动画、状态。基于VueUse模式创建自定义composables。与@vueuse/motion、@vueuse/gesture集成实现交互性。",
      es: "Colección de composables Vue. Uso para APIs del navegador, animaciones, estado. Creo composables personalizados basados en patrones VueUse. Integro con @vueuse/motion, @vueuse/gesture.",
      de: "Sammlung von Vue Composables. Nutze für Browser APIs, Animationen, State. Erstelle Custom Composables basierend auf VueUse Patterns. Integriere mit @vueuse/motion, @vueuse/gesture.",
      fr: "Collection de composables Vue. J'utilise pour les APIs navigateur, animations, état. Je crée des composables personnalisés basés sur les patterns VueUse. J'intègre avec @vueuse/motion, @vueuse/gesture.",
      kz: "Vue composables жинағы. Браузер API, анимациялар, күй жұмысы үшін қолданамын. VueUse паттерндері негізінде кастомды composables жасаймын.",
    },
    tags: ["Composables", "Utilities", "Browser API", "Sensors", "Animation", "State"],
    highlight: false,
  },

  // === VUETIFY 3 ===
  {
    id: "vuetify",
    name: "Vuetify 3",
    icon: <SiVuetify className="h-5 w-5" />,
    level: "expert",
    category: "frontend",
    description: {
      ru: "Material Design компоненты для Vue 3. Настраиваю темы через SASS переменные, создаю кастомные компоненты. Использую treeshaking для оптимизации, настраиваю blueprints. Полная поддержка a11y и RTL.",
      en: "Material Design components for Vue 3. Configure themes via SASS variables, create custom components. Use treeshaking for optimization, configure blueprints. Full a11y and RTL support.",
      zh: "Vue 3的Material Design组件。通过SASS变量配置主题，创建自定义组件。使用treeshaking优化，配置blueprints。完整的a11y和RTL支持。",
      es: "Componentes Material Design para Vue 3. Configuro temas vía variables SASS, creo componentes personalizados. Uso treeshaking para optimización, configuro blueprints.",
      de: "Material Design Komponenten für Vue 3. Konfiguriere Themes über SASS Variablen, erstelle Custom Components. Nutze Treeshaking für Optimierung, konfiguriere Blueprints.",
      fr: "Composants Material Design pour Vue 3. Je configure les thèmes via variables SASS, crée des composants personnalisés. J'utilise le treeshaking pour l'optimisation, configure les blueprints.",
      kz: "Vue 3 үшін Material Design компоненттері. SASS айнымалылары арқылы темалар баптаймын, кастомды компоненттер жасаймын. Оңтайландыру үшін treeshaking қолданамын.",
    },
    tags: ["Material", "Components", "Theming", "Grid", "Forms", "Data Tables"],
    highlight: false,
  },

  // === VITEST ===
  {
    id: "vitest",
    name: "Vitest",
    icon: <SiVitest className="h-5 w-5" />,
    level: "expert",
    category: "testing",
    description: {
      ru: "Быстрое тестирование на Vite. Пишу unit и интеграционные тесты для Vue компонентов. Использую @vue/test-utils, happy-dom, coverage через c8. Настраиваю in-source testing, snapshot testing, моки модулей.",
      en: "Fast testing on Vite. Write unit and integration tests for Vue components. Use @vue/test-utils, happy-dom, coverage via c8. Configure in-source testing, snapshot testing, module mocks.",
      zh: "基于Vite的快速测试。为Vue组件编写单元和集成测试。使用@vue/test-utils、happy-dom、通过c8的覆盖率。配置源内测试、快照测试、模块模拟。",
      es: "Testing rápido en Vite. Escribo tests unitarios e integración para componentes Vue. Uso @vue/test-utils, happy-dom, coverage vía c8. Configuro in-source testing, snapshot testing, mocks.",
      de: "Schnelles Testing auf Vite. Schreibe Unit und Integration Tests für Vue Components. Nutze @vue/test-utils, happy-dom, Coverage über c8. Konfiguriere In-Source Testing, Snapshot Testing, Module Mocks.",
      fr: "Tests rapides sur Vite. J'écris des tests unitaires et d'intégration pour composants Vue. J'utilise @vue/test-utils, happy-dom, coverage via c8. Je configure in-source testing, snapshot testing, mocks.",
      kz: "Vite негізінде жылдам тестілеу. Vue компоненттері үшін unit және интеграциялық тесттер жазамын. @vue/test-utils, happy-dom, c8 арқылы coverage қолданамын.",
    },
    tags: ["Vue Testing", "Vite", "Coverage", "Mocking", "Snapshots", "Watch Mode"],
    highlight: false,
  },

  // === QUASAR ===
  {
    id: "quasar",
    name: "Quasar Framework",
    icon: <SiQuasar className="h-5 w-5" />,
    level: "expert",
    category: "frontend",
    description: {
      ru: "Кроссплатформенный фреймворк на Vue. Создаю SPA, SSR, PWA, мобильные и desktop приложения из одной кодовой базы. Использую Quasar CLI, более 70 компонентов, директивы, плагины. Capacitor/Cordova для мобильных, Electron для desktop.",
      en: "Cross-platform framework on Vue. Create SPA, SSR, PWA, mobile and desktop apps from one codebase. Use Quasar CLI, 70+ components, directives, plugins. Capacitor/Cordova for mobile, Electron for desktop.",
      zh: "基于Vue的跨平台框架。从一个代码库创建SPA、SSR、PWA、移动和桌面应用。使用Quasar CLI、70+组件、指令、插件。移动端用Capacitor/Cordova，桌面用Electron。",
      es: "Framework multiplataforma en Vue. Creo SPA, SSR, PWA, apps móviles y desktop desde una base de código. Uso Quasar CLI, 70+ componentes, directivas, plugins. Capacitor/Cordova para móvil, Electron para desktop.",
      de: "Cross-Platform Framework auf Vue. Erstelle SPA, SSR, PWA, Mobile und Desktop Apps aus einer Codebase. Nutze Quasar CLI, 70+ Components, Directives, Plugins. Capacitor/Cordova für Mobile, Electron für Desktop.",
      fr: "Framework multiplateforme sur Vue. Je crée SPA, SSR, PWA, apps mobiles et desktop depuis une base de code. J'utilise Quasar CLI, 70+ composants, directives, plugins. Capacitor/Cordova pour mobile, Electron pour desktop.",
      kz: "Vue негізіндегі кроссплатформалық фреймворк. Бір код базасынан SPA, SSR, PWA, мобильді және desktop қосымшалар жасаймын. Quasar CLI, 70+ компонент қолданамын.",
    },
    tags: ["Cross-platform", "Mobile", "Desktop", "PWA", "Material", "CLI"],
    highlight: false,
  },

  // === VUE ROUTER ===
  {
    id: "vue-router",
    name: "Vue Router 4",
    icon: <FaVuejs className="h-5 w-5" />,
    level: "expert",
    category: "frontend",
    description: {
      ru: "Официальный роутер для Vue 3. Настраиваю nested routes, guards, lazy loading. Использую composition API с useRoute/useRouter. Работаю с динамическими routes, meta полями, scroll behavior. Интегрирую с Pinia для route-based состояния.",
      en: "Official router for Vue 3. Configure nested routes, guards, lazy loading. Use composition API with useRoute/useRouter. Work with dynamic routes, meta fields, scroll behavior. Integrate with Pinia for route-based state.",
      zh: "Vue 3的官方路由器。配置嵌套路由、守卫、懒加载。使用composition API的useRoute/useRouter。处理动态路由、meta字段、滚动行为。与Pinia集成实现基于路由的状态。",
      es: "Router oficial para Vue 3. Configuro rutas anidadas, guards, lazy loading. Uso composition API con useRoute/useRouter. Trabajo con rutas dinámicas, campos meta, scroll behavior.",
      de: "Offizieller Router für Vue 3. Konfiguriere Nested Routes, Guards, Lazy Loading. Nutze Composition API mit useRoute/useRouter. Arbeite mit dynamischen Routes, Meta Fields, Scroll Behavior.",
      fr: "Routeur officiel pour Vue 3. Je configure les routes imbriquées, guards, lazy loading. J'utilise composition API avec useRoute/useRouter. Je travaille avec routes dynamiques, champs meta, scroll behavior.",
      kz: "Vue 3 үшін ресми роутер. Nested routes, guards, lazy loading баптаймын. useRoute/useRouter composition API қолданамын. Динамикалық routes, meta өрістермен жұмыс істеймін.",
    },
    tags: ["Navigation", "Guards", "Nested", "Dynamic", "History", "Transitions"],
    highlight: false,
  },

  // === UNPLUGIN-VUE-COMPONENTS ===
  {
    id: "unplugin-vue",
    name: "Unplugin Vue Components",
    icon: <SiVite className="h-5 w-5" />,
    level: "expert",
    category: "frontend",
    description: {
      ru: "Auto-import компонентов и иконок. Настраиваю для Vue 3, поддержка TypeScript. Работает с любыми UI библиотеками: Element Plus, Ant Design Vue, Vuetify. Интеграция с unplugin-icons для 100k+ иконок. Tree-shaking из коробки.",
      en: "Auto-import components and icons. Configure for Vue 3, TypeScript support. Works with any UI libraries: Element Plus, Ant Design Vue, Vuetify. Integration with unplugin-icons for 100k+ icons. Tree-shaking out of the box.",
      zh: "自动导入组件和图标。为Vue 3配置，TypeScript支持。与任何UI库配合：Element Plus、Ant Design Vue、Vuetify。与unplugin-icons集成提供100k+图标。开箱即用的tree-shaking。",
      es: "Auto-import de componentes e iconos. Configuro para Vue 3, soporte TypeScript. Funciona con cualquier librería UI: Element Plus, Ant Design Vue, Vuetify. Integración con unplugin-icons para 100k+ iconos.",
      de: "Auto-Import von Components und Icons. Konfiguriere für Vue 3, TypeScript Support. Funktioniert mit allen UI Libraries: Element Plus, Ant Design Vue, Vuetify. Integration mit unplugin-icons für 100k+ Icons.",
      fr: "Auto-import de composants et icônes. Je configure pour Vue 3, support TypeScript. Fonctionne avec toutes les bibliothèques UI: Element Plus, Ant Design Vue, Vuetify. Intégration avec unplugin-icons pour 100k+ icônes.",
      kz: "Компоненттер мен иконкаларды auto-import. Vue 3 үшін баптаймын, TypeScript қолдау. Кез келген UI кітапханалармен жұмыс істейді. 100k+ иконкалар үшін unplugin-icons интеграциясы.",
    },
    tags: ["Auto-import", "DX", "Icons", "TypeScript", "Tree-shaking", "Vite"],
    highlight: false,
  },

  // === HISTOIRE ===
  {
    id: "histoire",
    name: "Histoire",
    icon: <GiPineapple className="h-5 w-5" />,
    level: "expert",
    category: "frontend",
    description: {
      ru: "Storybook альтернатива для Vue. Быстрее благодаря Vite, нативная поддержка Vue 3. Создаю stories с контролами, документацию компонентов. Поддержка dark mode, responsive preview. Интегрирую с CI для визуальных регрессий.",
      en: "Storybook alternative for Vue. Faster thanks to Vite, native Vue 3 support. Create stories with controls, component documentation. Dark mode support, responsive preview. Integrate with CI for visual regressions.",
      zh: "Vue的Storybook替代品。借助Vite更快，原生Vue 3支持。创建带控件的stories，组件文档。支持暗模式、响应式预览。与CI集成进行视觉回归。",
      es: "Alternativa a Storybook para Vue. Más rápido gracias a Vite, soporte nativo Vue 3. Creo stories con controles, documentación de componentes. Soporte dark mode, preview responsive.",
      de: "Storybook Alternative für Vue. Schneller dank Vite, native Vue 3 Unterstützung. Erstelle Stories mit Controls, Component Dokumentation. Dark Mode Support, Responsive Preview.",
      fr: "Alternative à Storybook pour Vue. Plus rapide grâce à Vite, support natif Vue 3. Je crée des stories avec contrôles, documentation de composants. Support dark mode, preview responsive.",
      kz: "Vue үшін Storybook баламасы. Vite арқасында жылдамырақ, Vue 3 нативті қолдау. Контролдармен stories, компонент құжаттамасын жасаймын. Dark mode, responsive preview қолдау.",
    },
    tags: ["Stories", "Documentation", "Vite", "Controls", "Dark Mode", "HMR"],
    highlight: false,
  },

  // === JEST ===
  {
    id: "jest",
    name: "Jest",
    icon: <SiJest className="h-5 w-5" />,
    level: "expert",
    category: "testing",
    description: {
      ru: "Универсальный test runner от Meta. Настраиваю для React/Vue/Node проектов. Snapshot testing, мокирование модулей, coverage отчёты. Параллельное выполнение, watch mode. Создаю custom matchers, трансформеры. Интеграция с CI/CD, оптимизация производительности.",
      en: "Universal test runner by Meta. Configure for React/Vue/Node projects. Snapshot testing, module mocking, coverage reports. Parallel execution, watch mode. Create custom matchers, transformers. CI/CD integration, performance optimization.",
      zh: "Meta的通用测试运行器。为React/Vue/Node项目配置。快照测试、模块模拟、覆盖率报告。并行执行、监视模式。创建自定义匹配器、转换器。CI/CD集成、性能优化。",
      es: "Test runner universal de Meta. Configuro para proyectos React/Vue/Node. Snapshot testing, mocking de módulos, reportes de cobertura. Ejecución paralela, watch mode. Creo custom matchers, transformers.",
      de: "Universeller Test Runner von Meta. Konfiguriere für React/Vue/Node Projekte. Snapshot Testing, Module Mocking, Coverage Reports. Parallele Ausführung, Watch Mode. Erstelle Custom Matchers, Transformer.",
      fr: "Test runner universel par Meta. Je configure pour projets React/Vue/Node. Tests de snapshots, mocking de modules, rapports de couverture. Exécution parallèle, mode watch. Je crée des matchers personnalisés.",
      kz: "Meta-дан әмбебап test runner. React/Vue/Node жобалары үшін баптаймын. Snapshot testing, модульдерді мокирлеу, coverage есептер. Параллель орындау, watch mode.",
    },
    tags: ["v29", "Snapshots", "Mocking", "Coverage", "Watch", "Parallel"],
    highlight: true,
  },

  // === CYPRESS ===
  {
    id: "cypress",
    name: "Cypress",
    icon: <SiCypress className="h-5 w-5" />,
    level: "expert",
    category: "testing",
    description: {
      ru: "E2E тестирование в браузере. Пишу тесты для критических user flows, интеграционные тесты. Time travel debugging, автоматические ретраи, network stubbing. Component testing для React/Vue. Настраиваю CI с параллелизацией, visual regression через Percy.",
      en: "E2E testing in browser. Write tests for critical user flows, integration tests. Time travel debugging, automatic retries, network stubbing. Component testing for React/Vue. Configure CI with parallelization, visual regression via Percy.",
      zh: "浏览器中的E2E测试。为关键用户流程编写测试、集成测试。时间旅行调试、自动重试、网络存根。React/Vue的组件测试。配置带并行化的CI，通过Percy进行视觉回归。",
      es: "Testing E2E en navegador. Escribo tests para flujos críticos de usuario, tests de integración. Time travel debugging, reintentos automáticos, network stubbing. Component testing para React/Vue.",
      de: "E2E Testing im Browser. Schreibe Tests für kritische User Flows, Integration Tests. Time Travel Debugging, automatische Retries, Network Stubbing. Component Testing für React/Vue.",
      fr: "Tests E2E dans le navigateur. J'écris des tests pour flux utilisateur critiques, tests d'intégration. Débogage time travel, réessais automatiques, network stubbing. Tests de composants pour React/Vue.",
      kz: "Браузерде E2E тестілеу. Критикалық user flows үшін тесттер, интеграциялық тесттер жазамын. Time travel debugging, автоматты қайталау, network stubbing.",
    },
    tags: ["v13", "E2E", "Component", "Time Travel", "CI", "Visual Testing"],
    highlight: true,
  },

  // === TESTING LIBRARY ===
  {
    id: "testing-library",
    name: "Testing Library",
    icon: <SiTestinglibrary className="h-5 w-5" />,
    level: "expert",
    category: "testing",
    description: {
      ru: "Тестирование с фокусом на пользователя. React Testing Library, Vue Testing Library, user-event. Запросы по доступности: getByRole, getByLabelText. Асинхронные утилиты: waitFor, findBy. Custom queries, тестирование hooks. Лучшие практики для maintainable тестов.",
      en: "User-focused testing. React Testing Library, Vue Testing Library, user-event. Accessibility queries: getByRole, getByLabelText. Async utilities: waitFor, findBy. Custom queries, hooks testing. Best practices for maintainable tests.",
      zh: "以用户为中心的测试。React Testing Library、Vue Testing Library、user-event。可访问性查询：getByRole、getByLabelText。异步工具：waitFor、findBy。自定义查询、hooks测试。可维护测试的最佳实践。",
      es: "Testing centrado en el usuario. React Testing Library, Vue Testing Library, user-event. Queries de accesibilidad: getByRole, getByLabelText. Utilidades asíncronas: waitFor, findBy. Custom queries, testing de hooks.",
      de: "Nutzer-fokussiertes Testing. React Testing Library, Vue Testing Library, user-event. Accessibility Queries: getByRole, getByLabelText. Async Utilities: waitFor, findBy. Custom Queries, Hooks Testing.",
      fr: "Tests centrés sur l'utilisateur. React Testing Library, Vue Testing Library, user-event. Requêtes d'accessibilité : getByRole, getByLabelText. Utilitaires asynchrones : waitFor, findBy.",
      kz: "Пайдаланушыға бағытталған тестілеу. React Testing Library, Vue Testing Library, user-event. Қолжетімділік сұраулары: getByRole, getByLabelText. Асинхронды утилиталар: waitFor, findBy.",
    },
    tags: ["RTL", "user-event", "Queries", "Accessibility", "Best Practices", "Hooks"],
    highlight: true,
  },

  // === MSW (MOCK SERVICE WORKER) ===
  {
    id: "msw",
    name: "MSW (Mock Service Worker)",
    icon: <SiSelenium className="h-5 w-5" />,
    level: "expert",
    category: "testing",
    description: {
      ru: "API мокирование через Service Workers. Перехватываю запросы на уровне сети, работает в браузере и Node. Создаю реалистичные моки для разработки и тестов. REST и GraphQL handlers, условные ответы, задержки. Интеграция с любыми test runners.",
      en: "API mocking via Service Workers. Intercept requests at network level, works in browser and Node. Create realistic mocks for development and tests. REST and GraphQL handlers, conditional responses, delays. Integration with any test runners.",
      zh: "通过Service Workers进行API模拟。在网络层拦截请求，在浏览器和Node中工作。为开发和测试创建真实的模拟。REST和GraphQL处理程序、条件响应、延迟。与任何测试运行器集成。",
      es: "Mocking de API vía Service Workers. Intercepto requests a nivel de red, funciona en navegador y Node. Creo mocks realistas para desarrollo y tests. Handlers REST y GraphQL, respuestas condicionales.",
      de: "API Mocking via Service Workers. Intercepte Requests auf Netzwerk-Ebene, funktioniert in Browser und Node. Erstelle realistische Mocks für Entwicklung und Tests. REST und GraphQL Handler.",
      fr: "Mocking d'API via Service Workers. J'intercepte les requêtes au niveau réseau, fonctionne dans le navigateur et Node. Je crée des mocks réalistes pour développement et tests.",
      kz: "Service Workers арқылы API мокирлеу. Желі деңгейінде сұрауларды ұстаймын, браузер және Node жұмыс істейді. Даму және тесттер үшін реалистік моктар жасаймын.",
    },
    tags: ["v2", "Service Worker", "REST", "GraphQL", "Mocking", "Network"],
    highlight: false,
  },

  // === Advanced ===

  // === FRAMER MOTION ===
  {
    id: "framer-motion",
    name: "Framer Motion",
    icon: <SiFramer className="h-5 w-5" />,
    level: "advanced",
    category: "frontend",
    description: {
      ru: "Продвинутые анимации и жесты. Создаю плавные переходы между страницами, микроанимации компонентов, drag & drop интерфейсы. Работаю с layout анимациями, shared transitions, scroll-triggered эффектами.",
      en: "Advanced animations and gestures. Create smooth page transitions, component microanimations, drag & drop interfaces. Work with layout animations, shared transitions, scroll-triggered effects.",
      zh: "高级动画和手势。创建平滑的页面过渡、组件微动画、拖放界面。处理布局动画、共享过渡、滚动触发效果。",
      es: "Animaciones y gestos avanzados. Creo transiciones suaves entre páginas, microanimaciones de componentes, interfaces drag & drop. Trabajo con animaciones de layout, transiciones compartidas, efectos scroll-triggered.",
      de: "Fortgeschrittene Animationen und Gesten. Erstelle sanfte Seitenübergänge, Komponenten-Mikroanimationen, Drag & Drop Interfaces. Arbeite mit Layout-Animationen, Shared Transitions, Scroll-getriggerten Effekten.",
      fr: "Animations et gestes avancés. Je crée des transitions fluides entre pages, des microanimations de composants, des interfaces drag & drop. Je travaille avec des animations de layout, des transitions partagées, des effets scroll-triggered.",
      kz: "Жетілдірілген анимациялар және қимылдар. Беттер арасында тегіс ауысулар, компоненттердің микроанимациялары, drag & drop интерфейстер жасаймын. Layout анимациялармен, shared transitions, scroll-triggered эффектілермен жұмыс істеймін.",
    },
    tags: ["Gestures", "Spring", "Variants", "Layout", "AnimatePresence", "SVG"],
    highlight: false,
  },

  // === PUPPETEER ===
  {
    id: "puppeteer",
    name: "Puppeteer",
    icon: <SiPuppeteer className="h-5 w-5" />,
    level: "advanced",
    category: "testing",
    description: {
      ru: "Headless Chrome автоматизация. Генерирую PDF, скриншоты, pre-rendering для SPA. Автоматизирую форм-сабмиты, скрейпинг данных. Performance testing через Chrome DevTools Protocol. Использую для visual regression, мониторинга доступности.",
      en: "Headless Chrome automation. Generate PDFs, screenshots, pre-rendering for SPAs. Automate form submits, data scraping. Performance testing via Chrome DevTools Protocol. Use for visual regression, accessibility monitoring.",
      zh: "无头Chrome自动化。生成PDF、截图、SPA预渲染。自动化表单提交、数据抓取。通过Chrome DevTools协议进行性能测试。用于视觉回归、可访问性监控。",
      es: "Automatización de Chrome headless. Genero PDFs, capturas, pre-rendering para SPAs. Automatizo envíos de formularios, scraping de datos. Testing de rendimiento vía Chrome DevTools Protocol.",
      de: "Headless Chrome Automatisierung. Generiere PDFs, Screenshots, Pre-Rendering für SPAs. Automatisiere Form Submits, Data Scraping. Performance Testing via Chrome DevTools Protocol.",
      fr: "Automatisation Chrome headless. Je génère des PDFs, captures d'écran, pré-rendu pour SPAs. J'automatise les soumissions de formulaires, scraping de données. Tests de performance via Chrome DevTools Protocol.",
      kz: "Headless Chrome автоматтандыру. PDF, скриншоттар, SPA үшін pre-rendering генерациялаймын. Форм жіберулерді, деректер скрейпингін автоматтандырамын.",
    },
    tags: ["Headless", "Chrome", "PDF", "Screenshots", "Scraping", "CDP"],
    highlight: false,
  },

  // === RADIX UI ===
  {
    id: "radix-ui",
    name: "Radix UI",
    icon: <SiRadixui className="h-5 w-5" />,
    level: "advanced",
    category: "frontend",
    description: {
      ru: "Headless компоненты с полной доступностью. Использую для создания кастомных UI библиотек с правильной семантикой, управлением фокуса и клавиатурной навигацией. Стилизую через Tailwind или CSS-in-JS.",
      en: "Headless components with full accessibility. Use for creating custom UI libraries with proper semantics, focus management and keyboard navigation. Style through Tailwind or CSS-in-JS.",
      zh: "具有完全可访问性的无头组件。用于创建具有正确语义、焦点管理和键盘导航的自定义UI库。通过Tailwind或CSS-in-JS进行样式设置。",
      es: "Componentes headless con accesibilidad completa. Uso para crear librerías UI personalizadas con semántica correcta, gestión de foco y navegación por teclado. Estilizo con Tailwind o CSS-in-JS.",
      de: "Headless Komponenten mit voller Barrierefreiheit. Nutze für Custom UI Libraries mit korrekter Semantik, Fokus-Management und Tastaturnavigation. Style durch Tailwind oder CSS-in-JS.",
      fr: "Composants headless avec accessibilité complète. J'utilise pour créer des bibliothèques UI personnalisées avec une sémantique correcte, gestion du focus et navigation au clavier. Je stylise avec Tailwind ou CSS-in-JS.",
      kz: "Толық қолжетімділігі бар headless компоненттер. Дұрыс семантика, фокус басқару және пернетақта навигациясы бар кастомды UI кітапханаларын жасау үшін қолданамын. Tailwind немесе CSS-in-JS арқылы стильдеймін.",
    },
    tags: ["Primitives", "ARIA", "Unstyled", "Composable", "WAI-ARIA", "Portal"],
    highlight: false,
  },

  // === GRAPHQL ===
  {
    id: "graphql",
    name: "GraphQL",
    icon: <SiGraphql className="h-5 w-5" />,
    level: "advanced",
    category: "frontend",
    description: {
      ru: "Работа с GraphQL API. Apollo Client для кеширования и управления состоянием, оптимистичные обновления, подписки через WebSocket. Генерирую типы из схемы, настраиваю фрагменты, работаю с директивами.",
      en: "Working with GraphQL API. Apollo Client for caching and state management, optimistic updates, subscriptions via WebSocket. Generate types from schema, configure fragments, work with directives.",
      zh: "使用GraphQL API。Apollo Client用于缓存和状态管理，乐观更新，通过WebSocket订阅。从schema生成类型，配置fragments，使用directives。",
      es: "Trabajo con API GraphQL. Apollo Client para caché y gestión de estado, actualizaciones optimistas, suscripciones vía WebSocket. Genero tipos desde schema, configuro fragmentos, trabajo con directivas.",
      de: "Arbeit mit GraphQL API. Apollo Client für Caching und State Management, optimistische Updates, Subscriptions über WebSocket. Generiere Typen aus Schema, konfiguriere Fragmente, arbeite mit Direktiven.",
      fr: "Travail avec API GraphQL. Apollo Client pour le cache et la gestion d'état, mises à jour optimistes, souscriptions via WebSocket. Je génère des types depuis le schéma, configure les fragments, travaille avec les directives.",
      kz: "GraphQL API-мен жұмыс. Кэштеу және күй басқару үшін Apollo Client, оптимистік жаңартулар, WebSocket арқылы жазылулар. Схемадан типтер генерациялаймын, фрагменттер баптаймын.",
    },
    tags: ["Apollo", "Codegen", "Fragments", "Subscriptions", "Cache", "Schema"],
    highlight: false,
  },

  // === ZOD ===
  {
    id: "zod",
    name: "Zod",
    icon: <SiZod className="h-5 w-5" />,
    level: "advanced",
    category: "frontend",
    description: {
      ru: "Runtime валидация с TypeScript. Создаю схемы для форм, API responses, environment variables. Использую для type-safe parsing, генерации типов, валидации на клиенте и сервере. Интегрирую с React Hook Form.",
      en: "Runtime validation with TypeScript. Create schemas for forms, API responses, environment variables. Use for type-safe parsing, type generation, client and server validation. Integrate with React Hook Form.",
      zh: "带TypeScript的运行时验证。为表单、API响应、环境变量创建模式。用于类型安全解析、类型生成、客户端和服务器验证。与React Hook Form集成。",
      es: "Validación en runtime con TypeScript. Creo esquemas para formularios, respuestas API, variables de entorno. Uso para parsing type-safe, generación de tipos, validación en cliente y servidor. Integro con React Hook Form.",
      de: "Runtime-Validierung mit TypeScript. Erstelle Schemas für Formulare, API Responses, Umgebungsvariablen. Nutze für type-safe Parsing, Typgenerierung, Client- und Server-Validierung. Integriere mit React Hook Form.",
      fr: "Validation runtime avec TypeScript. Je crée des schémas pour formulaires, réponses API, variables d'environnement. J'utilise pour le parsing type-safe, génération de types, validation client et serveur. J'intègre avec React Hook Form.",
      kz: "TypeScript-пен runtime валидация. Формалар, API жауаптары, environment variables үшін схемалар жасаймын. Type-safe parsing, тип генерациясы, клиент және сервер валидациясы үшін қолданамын.",
    },
    tags: ["Schema", "Validation", "Type-safe", "Parsing", "Transform", "Refine"],
    highlight: false,
  },

  // === PLAYWRIGHT ===
  {
    id: "playwright",
    name: "Playwright",
    icon: <SiTestinglibrary className="h-5 w-5" />,
    level: "advanced",
    category: "testing",
    description: {
      ru: "E2E тестирование нового поколения. Автоматизирую тесты для Chrome, Firefox, Safari. Параллельное выполнение, auto-wait, network interception. Использую для визуальных регрессий, API тестов, компонентного тестирования. Интеграция с CI/CD.",
      en: "Next-gen E2E testing. Automate tests for Chrome, Firefox, Safari. Parallel execution, auto-wait, network interception. Use for visual regressions, API tests, component testing. CI/CD integration.",
      zh: "下一代E2E测试。为Chrome、Firefox、Safari自动化测试。并行执行、自动等待、网络拦截。用于视觉回归、API测试、组件测试。CI/CD集成。",
      es: "Testing E2E de nueva generación. Automatizo tests para Chrome, Firefox, Safari. Ejecución paralela, auto-wait, intercepción de red. Uso para regresiones visuales, tests API, testing de componentes. Integración CI/CD.",
      de: "E2E Testing der nächsten Generation. Automatisiere Tests für Chrome, Firefox, Safari. Parallele Ausführung, Auto-Wait, Network Interception. Nutze für visuelle Regressionen, API Tests, Component Testing. CI/CD Integration.",
      fr: "Tests E2E nouvelle génération. J'automatise les tests pour Chrome, Firefox, Safari. Exécution parallèle, auto-wait, interception réseau. J'utilise pour régressions visuelles, tests API, tests de composants. Intégration CI/CD.",
      kz: "Жаңа буын E2E тестілеу. Chrome, Firefox, Safari үшін тесттерді автоматтандырамын. Параллель орындау, auto-wait, network interception. Визуалды регрессиялар, API тесттер үшін қолданамын.",
    },
    tags: ["E2E", "Cross-browser", "Auto-wait", "Screenshots", "Trace", "Codegen"],
    highlight: true,
  },

  // === PWA / SERVICE WORKERS ===
  {
    id: "pwa",
    name: "PWA / Service Workers",
    icon: <SiPwa className="h-5 w-5" />,
    level: "advanced",
    category: "frontend",
    description: {
      ru: "Нативный опыт в вебе. Настраиваю Service Workers для offline-режима, push-уведомления, background sync. Создаю app manifest, оптимизирую кеширование через Workbox. Реализую install prompts, share targets, файловый доступ через новые Web APIs.",
      en: "Native experience on the web. Configure Service Workers for offline mode, push notifications, background sync. Create app manifest, optimize caching through Workbox. Implement install prompts, share targets, file access via new Web APIs.",
      zh: "网络上的原生体验。配置Service Workers用于离线模式、推送通知、后台同步。创建应用清单，通过Workbox优化缓存。实现安装提示、共享目标、通过新Web API的文件访问。",
      es: "Experiencia nativa en la web. Configuro Service Workers para modo offline, notificaciones push, background sync. Creo app manifest, optimizo caché con Workbox. Implemento install prompts, share targets, acceso a archivos vía nuevas Web APIs.",
      de: "Native Experience im Web. Konfiguriere Service Workers für Offline-Modus, Push-Benachrichtigungen, Background Sync. Erstelle App Manifest, optimiere Caching durch Workbox. Implementiere Install Prompts, Share Targets, Dateizugriff über neue Web APIs.",
      fr: "Expérience native sur le web. Je configure Service Workers pour mode hors ligne, notifications push, synchronisation en arrière-plan. Je crée le manifest, j'optimise le cache avec Workbox. J'implémente install prompts, share targets, accès aux fichiers via nouvelles Web APIs.",
      kz: "Вебтегі нативті тәжірибе. Offline режимі, push хабарландырулар, background sync үшін Service Workers баптаймын. App manifest жасаймын, Workbox арқылы кэштеуді оңтайландырамын.",
    },
    tags: ["Offline", "Push", "Workbox", "Web Share", "Install", "Cache API"],
    highlight: false,
  },

    // === ASTRO ===
  {
    id: "astro",
    name: "Astro",
    icon: <SiAstro className="h-5 w-5" />,
    level: "advanced",
    category: "frontend",
    description: {
      ru: "Islands архитектура для максимальной производительности. Создаю статические сайты с частичной гидратацией, интегрирую React/Vue/Svelte компоненты. Использую Content Collections, View Transitions API, edge-first подход. Оптимальный выбор для контент-сайтов.",
      en: "Islands architecture for maximum performance. Create static sites with partial hydration, integrate React/Vue/Svelte components. Use Content Collections, View Transitions API, edge-first approach. Optimal choice for content sites.",
      zh: "用于最佳性能的Islands架构。创建具有部分水合的静态站点，集成React/Vue/Svelte组件。使用Content Collections、View Transitions API、边缘优先方法。内容网站的最佳选择。",
      es: "Arquitectura Islands para máximo rendimiento. Creo sitios estáticos con hidratación parcial, integro componentes React/Vue/Svelte. Uso Content Collections, View Transitions API, enfoque edge-first. Elección óptima para sitios de contenido.",
      de: "Islands-Architektur für maximale Performance. Erstelle statische Seiten mit partieller Hydration, integriere React/Vue/Svelte Komponenten. Nutze Content Collections, View Transitions API, Edge-first Ansatz. Optimale Wahl für Content-Seiten.",
      fr: "Architecture Islands pour des performances maximales. Je crée des sites statiques avec hydratation partielle, j'intègre des composants React/Vue/Svelte. J'utilise Content Collections, View Transitions API, approche edge-first. Choix optimal pour les sites de contenu.",
      kz: "Максималды өнімділік үшін Islands архитектурасы. Ішінара гидратациямен статикалық сайттар жасаймын, React/Vue/Svelte компоненттерін біріктіремін. Content Collections, View Transitions API, edge-first тәсілін қолданамын.",
    },
    tags: ["v4", "Islands", "Zero JS", "Partial Hydration", "Content", "SSG"],
    highlight: true,
  },

  // === Знаком ===

  // === BUN ===
  {
    id: "bun",
    name: "Bun",
    icon: <SiBun className="h-5 w-5" />,
    level: "familiar",
    category: "frontend",
    description: {
      ru: "All-in-one JavaScript runtime. Заменяет Node.js, npm, webpack, Jest. Молниеносная скорость благодаря Zig и JavaScriptCore. Использую для быстрых скриптов, тестирования, сборки. Встроенный транспайлер TypeScript, SQLite, WebSockets.",
      en: "All-in-one JavaScript runtime. Replaces Node.js, npm, webpack, Jest. Lightning speed thanks to Zig and JavaScriptCore. Use for quick scripts, testing, building. Built-in TypeScript transpiler, SQLite, WebSockets.",
      zh: "一体化JavaScript运行时。替代Node.js、npm、webpack、Jest。借助Zig和JavaScriptCore实现闪电般的速度。用于快速脚本、测试、构建。内置TypeScript转译器、SQLite、WebSockets。",
      es: "Runtime JavaScript todo-en-uno. Reemplaza Node.js, npm, webpack, Jest. Velocidad relámpago gracias a Zig y JavaScriptCore. Uso para scripts rápidos, testing, build. Transpilador TypeScript integrado, SQLite, WebSockets.",
      de: "All-in-one JavaScript Runtime. Ersetzt Node.js, npm, webpack, Jest. Blitzschnell dank Zig und JavaScriptCore. Nutze für schnelle Skripte, Testing, Building. Eingebauter TypeScript Transpiler, SQLite, WebSockets.",
      fr: "Runtime JavaScript tout-en-un. Remplace Node.js, npm, webpack, Jest. Vitesse éclair grâce à Zig et JavaScriptCore. J'utilise pour des scripts rapides, tests, build. Transpileur TypeScript intégré, SQLite, WebSockets.",
      kz: "All-in-one JavaScript runtime. Node.js, npm, webpack, Jest алмастырады. Zig және JavaScriptCore арқасында өте жылдам. Жылдам скрипттер, тестілеу, құрастыру үшін қолданамын.",
    },
    tags: ["v1.0", "Runtime", "Package Manager", "Bundler", "Test Runner", "Fast"],
    highlight: false,
  },

    // === QWIK ===
  {
    id: "qwik",
    name: "Qwik",
    icon: <SiQwik className="h-5 w-5" />,
    level: "familiar",
    category: "frontend",
    description: {
      ru: "Resumability вместо hydration. Загружает только необходимый код при взаимодействии. Lazy loading по умолчанию, O(1) время загрузки независимо от размера приложения. Сериализация состояния, fine-grained реактивность, edge-оптимизация.",
      en: "Resumability instead of hydration. Loads only necessary code on interaction. Lazy loading by default, O(1) load time regardless of app size. State serialization, fine-grained reactivity, edge optimization.",
      zh: "可恢复性而非水合。仅在交互时加载必要代码。默认延迟加载，无论应用大小，O(1)加载时间。状态序列化、细粒度反应性、边缘优化。",
      es: "Resumability en lugar de hidratación. Carga solo código necesario en interacción. Lazy loading por defecto, tiempo O(1) independiente del tamaño. Serialización de estado, reactividad fine-grained, optimización edge.",
      de: "Resumability statt Hydration. Lädt nur notwendigen Code bei Interaktion. Lazy Loading by default, O(1) Ladezeit unabhängig von App-Größe. State-Serialisierung, Fine-grained Reaktivität, Edge-Optimierung.",
      fr: "Resumability au lieu d'hydratation. Charge uniquement le code nécessaire à l'interaction. Lazy loading par défaut, temps O(1) quelle que soit la taille. Sérialisation d'état, réactivité fine-grained, optimisation edge.",
      kz: "Hydration орнына resumability. Өзара әрекеттесу кезінде тек қажетті кодты жүктейді. Әдепкі бойынша lazy loading, қолданба өлшеміне қарамастан O(1) жүктеу уақыты.",
    },
    tags: ["Resumable", "Lazy", "Fine-grained", "Zero JS", "Signals", "Edge"],
    highlight: false,
  },
];
