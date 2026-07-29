import Image from "next/image";

type LogoProps = {
  className?: string;
  variant?: "mark" | "full";
};

export function Logo({ className = "", variant = "full" }: LogoProps) {
  const mark = (
    <span className="relative block h-8 w-8 shrink-0 overflow-hidden rounded-lg">
      <Image
        src="/images/logo-mark.png"
        alt="TG Performance"
        fill
        sizes="32px"
        className="object-cover"
      />
    </span>
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
