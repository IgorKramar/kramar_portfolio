"use client";

import { useEffect, useState } from "react";
import { CheckIcon, CopyIcon } from "@/components/icons";
import { cx } from "@/utils";

export interface EmailCopyButtonProps {
  email: string;
  className?: string;
}

export function EmailCopyButton({ email, className }: EmailCopyButtonProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const t = window.setTimeout(() => setCopied(false), 1200);
    return () => window.clearTimeout(t);
  }, [copied]);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <button
      type="button"
      onClick={onCopy}
      className={cx(
        "inline-flex items-center justify-between gap-2 rounded-xl",
        "bg-bg-interactive px-3 py-2 text-sm text-text-primary ring-1 ring-border-default",
        "transition hover:bg-bg-interactive-hover",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring",
        className,
      )}
      aria-label="Скопировать почту"
    >
      {copied ? (
        <>
          <span>Скопировано</span>
          <CheckIcon className="h-4 w-4 text-emerald" />
        </>
      ) : (
        <>
          <span>{email}</span>
          <CopyIcon className="h-4 w-4 text-text-tertiary" />
        </>
      )}
    </button>
  );
}
