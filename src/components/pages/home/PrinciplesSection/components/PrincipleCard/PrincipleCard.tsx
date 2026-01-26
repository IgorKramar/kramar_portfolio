import { Card, CardShell, CheckIcon } from "@/components";

export interface PrincipleCardProps {
  title: string;
  description: string;
}

export function PrincipleCard({ title, description }: PrincipleCardProps) {
  return (
    <CardShell>
      <Card className="p-5 sm:p-6">
        <div className="flex items-start gap-3">
          <span className="mt-0.5 inline-grid h-9 w-9 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10">
            <CheckIcon className="h-4 w-4 text-emerald-200" />
          </span>

          <div>
            <div className="text-base font-semibold tracking-tight text-white">
              {title}
            </div>
            <div className="mt-2 text-sm leading-relaxed text-white/70">
              {description}
            </div>
          </div>
        </div>
      </Card>
    </CardShell>
  );
}
