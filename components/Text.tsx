import React, { FC } from "react";

interface TextProps {
  text: string | JSX.Element;
  className?: string;
}

interface LinkTextProps extends TextProps {
  href: string;
  external?: boolean;
}

function ifClassNameExists(className: string | undefined) {
  return ` ${className}` ?? "";
}

export const H1: FC<TextProps> = ({ text }) => (
  <h1 className="font-bold text-6xl">{text}</h1>
);

export const H2: FC<TextProps> = ({ text }) => (
  <h2 className="font-bold text-5xl lowercase text-center mb-6">{text}</h2>
);

export const H3: FC<TextProps> = ({ text, className }) => (
  <h3 className={`h3${ifClassNameExists(className)}`}>{text}</h3>
);

export const BodyText: FC<TextProps> = ({ text, className }) => (
  <p className={`body-text${ifClassNameExists(className)}`}>{text}</p>
);

export const SecondaryText: FC<TextProps> = ({ text }) => (
  <p className={"text-sm"}>{text}</p>
);

export const LinkText: FC<LinkTextProps> = ({ text, href, external }) => (
  <a
    href={href}
    target={external ? "_blank" : ""}
    rel={external ? "noreferrer" : ""}
    className={"font-semibold text-secondary-darker hover:underline"}
  >
    {text}
  </a>
);
