import type { ButtonHTMLAttributes, ReactNode } from "react";

type IconButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "children"
> & {
  icon: ReactNode;
  "aria-label": string;
};

export default function IconButton({
  icon,
  className = "",
  type = "button",
  ...props
}: IconButtonProps) {
  return (
    <button
      type={type}
      className={`grid size-10 place-items-center rounded-full border border-border text-foreground transition-colors duration-300 hover:bg-surface ${className}`}
      {...props}
    >
      {icon}
    </button>
  );
}
