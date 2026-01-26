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
        "bg-bg-interactive px-3 py-2 text-sm text-text-primary ring-1 ring-border-default",
        "transition hover:bg-bg-interactive-hover",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring",
        className,
      )}
    >
      <span>{label}</span>
      <ExternalIcon className="h-4 w-4 text-text-tertiary" />
    </a>
  );
}
