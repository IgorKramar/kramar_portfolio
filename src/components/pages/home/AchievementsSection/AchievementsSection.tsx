import {
  FaBolt,
  FaChartLine,
  FaPalette,
  FaUniversalAccess,
} from "react-icons/fa6";
import { Card, Container } from "@/components";
import { AchievementCard } from "./components";

const ACHIEVEMENTS = [
  {
    icon: <FaChartLine className="text-2xl text-text-primary transition-colors duration-300 group-hover:text-accent" />,
    metric: "89%",
    metricSuffix: "покрытие",
    label: "Тестирование",
    description:
      "С нуля до стабильного регресса в CI. Критичные сценарии под контролем.",
    highlight: "0% → 89%",
  },
  {
    icon: <FaPalette className="text-2xl text-text-primary transition-colors duration-300 group-hover:text-accent" />,
    metric: "40+",
    metricSuffix: "компонентов",
    label: "Дизайн-система",
    description:
      "Токены, темизация, документация. Единый источник правды для всей команды.",
    highlight: "Tokens → UI",
  },
  {
    icon: <FaUniversalAccess className="text-2xl text-text-primary transition-colors duration-300 group-hover:text-accent" />,
    metric: "AA",
    metricSuffix: "WCAG",
    label: "Доступность",
    description:
      "Семантика, клавиатура, фокус-менеджмент, контраст. a11y как часть Definition of Done.",
    highlight: "a11y by default",
  },
  {
    icon: <FaBolt className="text-2xl text-text-primary transition-colors duration-300 group-hover:text-accent" />,
    metric: "2×",
    metricSuffix: "быстрее",
    label: "Скорость релизов",
    description:
      "Quality gates, автоматизация, предсказуемые изменения. Меньше сюрпризов в проде.",
    highlight: "CI/CD",
  },
] as const;

const IMPACT_STATS = [
  { value: "7+", label: "лет в продакшене" },
  { value: "500K+", label: "пользователей" },
  { value: "15+", label: "команд используют" },
];

export function AchievementsSection() {
  return (
    <section id="achievements" className="relative py-20 sm:py-28">
      {/* Background accent */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-150 w-200 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 blur-3xl [background:radial-gradient(closest-side,var(--color-accent-subtle),transparent)]" />
      </div>

      <Container className="relative">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="text-sm font-medium uppercase tracking-widest text-accent">
            Результаты
          </div>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
            Что меняется после
            <br />
            <span className="text-text-secondary">системного подхода</span>
          </h2>
          <p className="mt-4 text-base text-text-tertiary sm:text-lg">
            Измеримые улучшения в качестве, скорости и предсказуемости
            разработки
          </p>
        </div>

        {/* Main grid */}
        <div className="mt-14 grid gap-4 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4">
          {ACHIEVEMENTS.map((item, index) => (
            <AchievementCard key={item.label} {...item} index={index} />
          ))}
        </div>

        {/* Bottom impact bar */}
        <Card className="mt-10 sm:mt-14" glow={false}>
          <div className="flex flex-col items-center justify-between gap-6 px-6 py-6 sm:flex-row sm:px-10 sm:py-8">
            <div className="text-center sm:text-left">
              <div className="text-lg font-semibold text-text-primary sm:text-xl">
                Суммарный импакт
              </div>
              <div className="mt-1 text-sm text-text-tertiary">
                Результаты внедрения на реальных проектах
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-8 sm:gap-12">
              {IMPACT_STATS.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-semibold text-text-primary sm:text-3xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs text-text-muted">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </Container>
    </section>
  );
}
