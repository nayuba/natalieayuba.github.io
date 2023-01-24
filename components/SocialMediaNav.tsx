import React, { FC } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SocialMediaIcon } from "./Icon";

const SocialMediaNav: FC<{includeTooltips?: boolean}> = ({includeTooltips}) => {
  const socials = [
    {
      title: "Github",
      href: "https://github.com/natalieayuba",
      icon: <FaGithub />,
    },
    {
      title: "LinkedIn",
      href: "https://www.linkedin.com/in/natalieayuba/",
      icon: <FaLinkedin />,
    },
  ];
  return (
    <nav>
      <ul className="flex gap-4">
        {socials.map((social) => (
          <li key={social.href}>
            <SocialMediaIcon title={includeTooltips ? social.title : ""} href={social.href} icon={social.icon} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SocialMediaNav;
