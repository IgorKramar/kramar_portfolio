import { Card, CardShell } from "@/components";

export interface AchievementCardProps {
  label: string;
  value: string;
  description: string;
}

export function AchievementCard({ label, value, description }: AchievementCardProps) {
  return (
    <CardShell>
      <Card className="p-5 sm:p-6">
        <div className="text-xs font-medium tracking-tight text-white/55">{label}</div>
        <div className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          {value}
        </div>
        <div className="mt-3 text-sm leading-relaxed text-white/70">{description}</div>
      </Card>
    </CardShell>
  );
}
