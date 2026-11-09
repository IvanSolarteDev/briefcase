import type { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children,
  className = "",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`rounded-xl bg-accent px-4 py-1.5 text-sm font-medium text-accent-foreground transition-colors duration-300 hover:opacity-80 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
