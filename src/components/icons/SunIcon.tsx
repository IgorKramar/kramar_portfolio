export interface SunIconProps {
  className?: string;
}

export function SunIcon({ className = "h-4 w-4" }: SunIconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M12 2v2m0 16v2M2 12h2m16 0h2m-4.93-7.07 1.41-1.41M4.52 19.48l1.41-1.41m0-12.14L4.52 4.52m14.96 14.96-1.41-1.41"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}
