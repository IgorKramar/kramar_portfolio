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

  const mailto = `mailto:${email}`;

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
    } catch {
      // If clipboard is blocked, fall back to opening the mail client.
      window.location.href = mailto;
    }
  };

  return (
    <button
      type="button"
      onClick={onCopy}
      className={cx(
        "inline-flex items-center justify-between gap-2 rounded-xl",
        "bg-white/5 px-3 py-2 text-sm text-white/85 ring-1 ring-white/10",
        "transition hover:bg-white/10 hover:text-white",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60",
        className,
      )}
      aria-label="Скопировать почту"
    >
      {copied ? (
        <>
          <span>Скопировано</span>
          <CheckIcon className="h-4 w-4 text-emerald-300" />
        </>
      ) : (
        <>
          <span>{email}</span>
          <CopyIcon className="h-4 w-4 text-white/60" />
        </>
      )}
    </button>
  );
}
