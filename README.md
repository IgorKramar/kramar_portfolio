# Сайт-портфолио Игоря Крамаря

Персональный сайт‑портфолио как демонстрация инженерного подхода к фронтенду: UI‑архитектура, дизайн‑система на Tailwind, доступность, предсказуемые компоненты, аккуратные микро‑анимации и чистая структура проекта.

---

## Почему этот репозиторий стоит смотреть

Этот проект сделан не “как лендинг”, а как маленький продукт:

- **Компонентная архитектура**: UI‑слой (`src/components/ui`), layout‑слой (`src/components/layout`), page‑секции (`src/components/pages/...`), shared‑атомики (`src/components/shared`).
- **Предсказуемые API компонентов**: типизация, `asChild` для `Button`, строгие пропсы, минимальный runtime‑код.
- **A11y/UX by default**: focus-visible стили, клавиатурная навигация, skip‑link в шапке, аккуратные hover/active состояния.
- **Микро‑анимации без шума**: sheen/aurora эффекты, уважение к `prefers-reduced-motion` (`src/hooks/usePrefersReducedMotion`).
- **Данные отдельно от UI**: навигация/контакты вынесены в `src/data/*`, что упрощает поддержку и тестирование.

---

## Технологии

- Next.js (App Router)
- React + TypeScript
- Tailwind CSS v4
- Минимальные зависимости (цель — прозрачность и контроль)
- Иконки — локальные SVG‑компоненты (`src/components/icons`)

---

## Структура проекта

Коротко о слоях:

- `src/app/*` — App Router, layout, глобальные стили
- `src/components/ui/*` — базовые UI‑примитивы (Button, Card, Badge…)
- `src/components/layout/*` — Header/Footer/Container/Section
- `src/components/pages/home/*` — секции главной страницы (Hero, Achievements, Principles, Contact)
- `src/components/shared/*` — переиспользуемые “атомики” (например, контакты/копирование email)
- `src/data/*` — конфиги/контент (контакты, навигация)
- `src/utils/*` — утилиты (например `cx`)
- `src/hooks/*` — хуки (например `usePrefersReducedMotion`)

---

## Качество и стандарты

Этот проект — про системность:

- **Типы как контракт**: компоненты принимают ровно то, что им нужно.
- **Управляемая сложность**: эффекты и интерактив вынесены в правильные места (`Header`/`Footer` — клиентские; секции — в основном серверные).
- **Повторное использование**: `ContactLink` и `EmailCopyButton` применяются и в `ContactSection`, и в `Footer` (без копипасты).
- **Уважение к доступности**: `prefers-reduced-motion`, `focus-visible`, семантика.

---

## Быстрый старт

Требования:
- Node.js 18+ (рекомендовано 20+)
- pnpm (проект использует pnpm)

Установка и запуск:

```bash
pnpm install
pnpm dev
```

Сборка/проверка:

```bash
pnpm build
pnpm start
```

---

## Настройка контента

- Контакты: `src/data/contacts.ts`
- Навигация: `src/data/navigation.ts`
- Главная (секции): `src/components/pages/home/*`

---

## Деплой

Проект подходит для деплоя на:
- Vercel (рекомендуется для Next.js)
- Любой хостинг, где можно запускать Node.js (или делать статическую генерацию, если потребуется)

---

## Roadmap (опционально)

Если захочу расширить проект, логичные шаги:
- `app/sitemap.ts` + `app/robots.ts` для SEO и индексации
- Open Graph image (`app/opengraph-image.tsx`)
- Страница кейсов с типизированной схемой данных и валидацией
- Лёгкий e2e “smoke” тест для критичных сценариев

---

## Автор

Игорь Крамарь  
Senior Frontend / Архитектор UI‑систем

- Telegram: https://t.me/spider_HH_jerusalem
- GitHub: https://github.com/IgorKramar
- Email: i@ikramar.ru