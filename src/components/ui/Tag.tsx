export function Tag({
  children,
  tone = "neutral",
}: {
  children: React.ReactNode;
  tone?: "neutral" | "onDark";
}) {
  const styles =
    tone === "onDark"
      ? "border-white/20 text-white/80"
      : "border-line text-anthracite-soft";

  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs ${styles}`}
    >
      {children}
    </span>
  );
}
