import type { AnchorHTMLAttributes } from "react";
import { NavLink } from "react-router-dom";
import type { NavLinkProps } from "react-router-dom";

type InternalLinkProps = Omit<
  NavLinkProps,
  "className" | "target" | "rel"
> & {
  className?: NavLinkProps["className"];
  openInNewTab?: boolean;
  href?: never;
};

type ExternalLinkProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "href" | "className" | "target" | "rel"
> & {
  href: string;
  to?: never;
  className?: string;
  openInNewTab?: boolean;
};

type LinkProps = InternalLinkProps | ExternalLinkProps;

export default function Link(props: LinkProps) {
  if ("href" in props && typeof props.href === "string") {
    const {
      href,
      className = "",
      openInNewTab = false,
      ...anchorProps
    } = props;

    return (
      <a
        {...anchorProps}
        href={href}
        target={openInNewTab ? "_blank" : undefined}
        rel={openInNewTab ? "noopener noreferrer" : undefined}
        className={className}
      />
    );
  }

  const { className, openInNewTab = false, ...navLinkProps } = props;

  return (
    <NavLink
      {...navLinkProps}
      target={openInNewTab ? "_blank" : undefined}
      rel={openInNewTab ? "noopener noreferrer" : undefined}
      className={(state) => {
        const customClassName =
          typeof className === "function" ? className(state) : className;

        return [
          "rounded-full border px-4 py-2 text-sm transition-all duration-200 hover:scale-105 active:scale-95",
          state.isActive
            ? "border-accent/50 bg-accent/10 text-accent shadow-sm"
            : "border-transparent text-muted hover:border-border hover:text-foreground",
          customClassName,
        ]
          .filter(Boolean)
          .join(" ");
      }}
    />
  );
}
