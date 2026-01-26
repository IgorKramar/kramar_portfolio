export interface CheckIconProps {
    className?: string;
}

export function CheckIcon(props: CheckIconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={props.className ?? "h-4 w-4"}
      fill="none"
    >
      <path
        d="M20 7L10 17l-5-5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}