type LogoProps = {
  className?: string;
  variant?: "mark" | "full";
};

export function Logo({ className = "", variant = "full" }: LogoProps) {
  const mark = (
    <svg
      viewBox="0 0 44 44"
      width="32"
      height="32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect
        x="1.25"
        y="1.25"
        width="41.5"
        height="41.5"
        rx="10"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <rect x="9" y="14" width="11" height="3" rx="1.5" fill="currentColor" />
      <rect x="13" y="14" width="3" height="16" rx="1.5" fill="currentColor" />
      <path
        d="M34 17a8 8 0 1 0 0 10"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <rect x="29.5" y="20.5" width="5" height="3" rx="1.2" fill="currentColor" />
    </svg>
  );

  if (variant === "mark") {
    return <span className={className}>{mark}</span>;
  }

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      {mark}
      <span className="text-[15px] font-semibold tracking-tight leading-none">
        TG Performance
      </span>
    </span>
  );
}
