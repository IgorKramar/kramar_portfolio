import { Section } from "@/components";
import { PrincipleCard } from "./components";

const PRINCIPLES = [
  {
    title: "Система важнее героизма",
    description:
      "Фиксирую правила: токены, контракты компонентов, гайдлайны. Команда двигается быстрее и предсказуемее.",
  },
  {
    title: "Доступность — часть качества",
    description:
      "Семантика, клавиатура, фокус‑состояния, контраст. Это уменьшает баги и улучшает UX всем пользователям.",
  },
  {
    title: "Качество измеримо",
    description:
      "Типы, линтеры, тесты, регрессии и quality gates — чтобы релизы были рутиной, а не лотереей.",
  },
  {
    title: "DX = скорость бизнеса",
    description:
      "Понятные API компонентов, документация, шаблоны и CI: меньше трения, меньше контекста, больше результата.",
  },
] as const;

export function PrinciplesSection() {
  return (
    <Section
      id="principles"
      title="Принципы"
      description="Как я принимаю решения в интерфейсах, архитектуре и качестве."
      size="wide"
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {PRINCIPLES.map((p) => (
          <PrincipleCard
            key={p.title}
            title={p.title}
            description={p.description}
          />
        ))}
      </div>
    </Section>
  );
}
