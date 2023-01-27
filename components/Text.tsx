import React, { FC } from "react";

interface TextProps {
  text: string | JSX.Element;
  className?: string;
}

interface LinkTextProps extends TextProps {
  href: string;
  external?: boolean;
}

export const H1: FC<TextProps> = ({ text }) => <h1 className="h1">{text}</h1>;

export const H2: FC<TextProps> = ({ text }) => <h2 className="h2">{text}</h2>;

export const H3: FC<TextProps> = ({ text, className }) => (
  <h3 className={`h3${` ${className}` ?? ""}`}>{text}</h3>
);

export const BodyText: FC<TextProps> = ({ text, className }) => (
  <p className={`body-text${` ${className}` ?? ""}`}>{text}</p>
);

export const SecondaryText: FC<TextProps> = ({ text }) => (
  <p className={"secondary-text"}>{text}</p>
);

export const LinkText: FC<LinkTextProps> = ({ text, href, external }) => (
  <a
    href={href}
    target={external ? "_blank" : ""}
    rel={external ? "noreferrer" : ""}
    className={"link-text"}
  >
    {text}
  </a>
);
