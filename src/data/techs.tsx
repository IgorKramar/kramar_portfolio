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
  // === WEBPACK ===
  {
    id: "webpack",
    name: "Webpack",
    icon: <SiWebpack className="h-5 w-5" />,
    level: "advanced",
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
];
