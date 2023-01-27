import Image from "next/image";
import React, { FC } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import SocialMediaNav from "./SocialMediaNav";
import useHamToggle from "../hooks/useHamToggle";

const navLinks = [
  {
    title: "About",
    href: "#about",
    underline: "straight.svg",
  },
  {
    title: "Projects",
    href: "#projects",
    underline: "less-straight.svg",
  },
  {
    title: "Contact",
    href: "#contact",
    underline: "wonky.svg",
  },
];

export const Nav: FC = () => {
  const { isMenuOpen, setIsMenuOpen } = useHamToggle();

  return (
    <nav>
      <ul className="hidden lg:flex gap-14 text-base lowercase font-semibold">
        {navLinks.map((navLink) => (
          <li
            key={navLink.title}
            className="relative text-center w-[80px] group/nav-link"
          >
            <a href={navLink.href} className="block py-2">
              {navLink.title}
            </a>
            <div className="translate-y-[-90px] absolute group-hover/nav-link:block group-hover/nav-link:translate-y-1 duration-300 transition ease-icon-in-out">
              <Image
                src={`/underlines/${navLink.underline}`}
                width={80}
                height={0}
                alt="underline"
              />
            </div>
          </li>
        ))}
      </ul>
      <div className={"fixed top-0 lg:hidden"}>
        <ul
          className={`${
            isMenuOpen ? "left-0" : "left-[-100%]"
          } transition-[left] w-screen bg-secondary text-dark-grey font-semibold duration-500 fixed flex flex-col h-screen justify-center items-center gap-16 text-3xl lowercase`}
        >
          {navLinks.map((navLink) => (
            <li key={navLink.title}>
              <a
                href={navLink.href}
                className="hover:text-secondary-darker transition duration-200 ease-icon-in-out"
                onClick={() => setIsMenuOpen(false)}
              >
                {navLink.title}
              </a>
            </li>
          ))}
          {/* not showing large font size */}
          <SocialMediaNav large />
        </ul>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="h-[80px] fixed right-6 text-2xl hover:text-secondary-darker duration-200 ease-icon-in-out"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
          {/* will eventually be something like
            <HamIcon /> and can use hamtoggle inside its own component?
          */}
        </button>
      </div>
    </nav>
  );
};
