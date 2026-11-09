import { NavLink } from "react-router-dom";
import type { NavLinkProps } from "react-router-dom";

type LinkProps = Omit<NavLinkProps, "className"> & {
  className?: NavLinkProps["className"];
};

export default function Link({ className, ...props }: LinkProps) {
  return (
    <NavLink
      {...props}
      className={(state) => {
        const customClassName =
          typeof className === "function" ? className(state) : className;

        return [
          "rounded-full px-4 py-2 text-sm transition-colors",
          state.isActive
            ? "border border-border text-foreground"
            : "text-muted hover:text-foreground",
          customClassName,
        ]
          .filter(Boolean)
          .join(" ");
      }}
    />
  );
}
