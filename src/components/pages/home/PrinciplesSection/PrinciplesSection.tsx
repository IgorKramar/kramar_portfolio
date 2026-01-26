import { FaBolt, FaC, FaChartBar, FaUniversalAccess } from "react-icons/fa6";
import { Container } from "@/components";
import { PrincipleCard } from "./components";

const PRINCIPLES = [
  {
    number: "01",
    icon: <FaC className="text-2xl icon-outline text-text-primary group-hover:text-accent transition-colors duration-300" />,
    title: "Система важнее героизма",
    subtitle: "Масштабируемость",
    description:
      "Фиксирую правила: токены, контракты компонентов, гайдлайны. Команда двигается быстрее и предсказуемее.",
    keywords: ["Design Tokens", "API Contracts", "Guidelines"],
  },
  {
    number: "02",
    icon: <FaUniversalAccess className="text-2xl icon-outline text-text-primary group-hover:text-accent transition-colors duration-300" />,
    title: "Доступность — часть качества",
    subtitle: "Инклюзивность",
    description:
      "Семантика, клавиатура, фокус‑состояния, контраст. Это уменьшает баги и улучшает UX всем пользователям.",
    keywords: ["WCAG 2.1", "Screen Readers", "Keyboard Nav"],
  },
  {
    number: "03",
    icon: <FaChartBar className="text-2xl icon-outline text-text-primary group-hover:text-accent transition-colors duration-300" />,
    title: "Качество измеримо",
    subtitle: "Метрики",
    description:
      "Типы, линтеры, тесты, регрессии и quality gates — чтобы релизы были рутиной, а не лотереей.",
    keywords: ["TypeScript", "Testing", "CI/CD"],
  },
  {
    number: "04",
    icon: <FaBolt className="text-2xl icon-outline text-text-primary group-hover:text-accent transition-colors duration-300" />,
    title: "DX = скорость бизнеса",
    subtitle: "Продуктивность",
    description:
      "Понятные API компонентов, документация, шаблоны и CI: меньше трения, меньше контекста, больше результата.",
    keywords: ["Storybook", "Documentation", "Templates"],
  },
] as const;

export function PrinciplesSection() {
  return (
    <section id="principles" className="relative py-20 sm:py-28">
      {/* Background */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-1/4 h-[500px] w-[500px] rounded-full opacity-30 blur-3xl [background:radial-gradient(closest-side,var(--color-emerald-subtle),transparent)]" />
        <div className="absolute bottom-0 left-1/4 h-[400px] w-[600px] rounded-full opacity-20 blur-3xl [background:radial-gradient(closest-side,var(--color-sky-subtle),transparent)]" />
      </div>

      <Container size="wide" className="relative">
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="text-sm font-medium uppercase tracking-widest text-accent">
              Философия
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
              Принципы,
              <br />
              <span className="text-text-secondary">которым следую</span>
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-text-tertiary">
              Как я принимаю решения в интерфейсах, архитектуре и качестве. Эти
              принципы формировались годами и проверены на реальных проектах.
            </p>

            {/* Quote */}
            <blockquote className="mt-8 border-l-2 border-accent/50 pl-4">
              <p className="text-sm italic text-text-secondary">
                «Хороший код — это не тот, который работает сегодня, а тот,
                который легко изменить завтра»
              </p>
            </blockquote>
          </div>

          {/* Cards */}
          <div className="lg:col-span-7">
            <div className="grid gap-4 sm:grid-cols-2">
              {PRINCIPLES.map((principle) => (
                <PrincipleCard key={principle.number} {...principle} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
