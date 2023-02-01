import React, { FC } from "react";

export interface IconProps {
  title?: string;
  href: string;
  icon: JSX.Element;
  className?: string;
  external?: boolean;
}

const Icon: FC<IconProps> = ({ title, href, icon, external, className }) => (
  <a
    title={title}
    href={href}
    target={external ? "_blank" : ""}
    rel={external ? "noreferrer" : ""}
    className={`text-xl hover:text-secondary-darker duration-200 ease-slow-in-out${` ${className}` ?? ""}`}
  >
    {icon}
  </a>
);

const SocialMediaIcon: FC<IconProps> = ({ title, href, icon, className }) => (
  <Icon title={title} href={href} icon={icon} className={className} external />
);

export { Icon, SocialMediaIcon };
