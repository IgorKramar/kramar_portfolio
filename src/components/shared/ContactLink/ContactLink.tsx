import { ExternalIcon } from "@/components/icons";
import { cx } from "@/utils";

export interface ContactLinkProps {
  href: string;
  label: string;
  className?: string;
}

export function ContactLink({ href, label, className }: ContactLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={cx(
        "inline-flex items-center justify-between gap-2 rounded-xl",
        "bg-white/5 px-3 py-2 text-sm text-white/85 ring-1 ring-white/10",
        "transition hover:bg-white/10 hover:text-white",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60",
        className,
      )}
    >
      <span>{label}</span>
      <ExternalIcon className="h-4 w-4 text-white/60" />
    </a>
  );
}
