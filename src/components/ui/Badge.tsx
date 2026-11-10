import type { HTMLAttributes } from "react";

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: "default" | "accent";
  tone?: "angular" | "react" | "node" | "ui" | "css" | "tailwind" | "bootstrap" | "dotnet";
};

const variantClasses = {
  default: "border-border bg-surface text-muted",
  accent: "border-accent/70 bg-accent/10 text-accent",
};

const toneClasses = {
  angular: "border-red-500/60 bg-red-500/10 text-red-700 dark:text-red-300",
  react: "border-sky-500/60 bg-sky-500/10 text-sky-700 dark:text-sky-300",
  node: "border-green-600/60 bg-green-500/10 text-green-800 dark:text-green-300",
  ui: "border-fuchsia-500/60 bg-fuchsia-500/10 text-fuchsia-800 dark:text-fuchsia-300",
  css: "border-blue-600/60 bg-blue-500/10 text-blue-800 dark:text-blue-300",
  tailwind: "border-cyan-500/60 bg-cyan-500/10 text-cyan-800 dark:text-cyan-300",
  bootstrap: "border-violet-500/60 bg-violet-500/10 text-violet-800 dark:text-violet-300",
  dotnet: "border-purple-500/60 bg-purple-500/10 text-purple-800 dark:text-purple-300",
};

export default function Badge({
  children,
  className = "",
  variant = "default",
  tone,
  ...props
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-medium leading-4 ${tone ? toneClasses[tone] : variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}
