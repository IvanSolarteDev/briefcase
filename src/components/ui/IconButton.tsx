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
      className={`grid size-10 place-items-center rounded-full border border-border text-foreground transition-all duration-200 hover:scale-105 hover:border-accent hover:bg-accent/10 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent motion-reduce:transition-none ${className}`}
      {...props}
    >
      {icon}
    </button>
  );
}
