import { Section } from "@/components";
import { AchievementCard } from "./components";

const ACHIEVEMENTS = [
  {
    label: "Качество",
    value: "0% → 89%",
    description: "Покрытие критичных сценариев + стабильный регресс в CI.",
  },
  {
    label: "Дизайн‑система",
    value: "Tokens → UI",
    description: "Токены, компоненты, темизация и единые правила сборки интерфейса.",
  },
  {
    label: "Доступность",
    value: "a11y by default",
    description: "Фокус‑стили, клавиатура, контраст, семантика, аудит.",
  },
  {
    label: "Скорость",
    value: "быстрее релизы",
    description: "Quality gates, предсказуемые изменения, меньше сюрпризов в проде.",
  },
] as const;

export function AchievementsSection() {
  return (
    <Section
      id="achievements"
      title="Результаты"
      description="Коротко о том, что обычно улучшается после внедрения системного подхода."
      size="wide"
      tone="tight"
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {ACHIEVEMENTS.map((a) => (
          <AchievementCard
            key={`${a.label}-${a.value}`}
            label={a.label}
            value={a.value}
            description={a.description}
          />
        ))}
      </div>
    </Section>
  );
}
