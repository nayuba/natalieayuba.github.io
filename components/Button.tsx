import { appendClassName } from "@/utils/classNameUtils";
import React, { FC } from "react";

export interface ButtonProps {
  text: string;
  href: string;
  iconLeft?: JSX.Element;
  iconRight?: JSX.Element;
  className?: string;
  external?: boolean;
}

const Button: FC<ButtonProps> = ({
  text,
  href,
  iconLeft,
  iconRight,
  className,
  external = false,
}) => (
  <a
    href={href}
    target={external ? "_blank" : ""}
    rel={external ? "noreferrer" : ""}
    className={"btn" + appendClassName(className)}
  >
    {iconLeft && <span className="text-lg">{iconLeft}</span>}
    {text}
    {iconRight && <span className="text-xl">{iconRight}</span>}
  </a>
);

export default Button;
