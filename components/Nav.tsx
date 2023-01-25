import Image from "next/image";
import React, { FC, useState } from "react";
import { FaHamburger, FaTimes } from "react-icons/fa";
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

export const Nav: FC = () => (
  <nav className="hidden lg:block">
    <ul className="flex gap-14 text-base lowercase font-semibold">
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
  </nav>
);

export const Ham: FC = () => {
  const { setIsMenuOpen, isMenuOpen } = useHamToggle();

  return (
    <div className=" flex items-center lg:hidden">
      <button
        title="Menu"
        className="text-2xl hover:text-secondary-darker duration-200 ease-icon-in-out"
        onClick={() => setIsMenuOpen(true)}
      >
        <FaHamburger />
      </button>
      {isMenuOpen && (
        <nav className="absolute w-screen h-screen left-0 top-0 bg-[rgba(0,0,0,0.98)] text-white ">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-6 right-6 text-xl hover:text-secondary-darker transition-colors duration-200 ease-icon-in-out"
          >
            <FaTimes />
          </button>
          <ul className=" flex flex-col h-full justify-center items-center gap-16 text-3xl lowercase">
            {navLinks.map((navLink) => (
              <li key={navLink.title}>
                <a
                  href={navLink.href}
                  className="hover:text-secondary transition-colors duration-200 ease-icon-in-out"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {navLink.title}
                </a>
              </li>
            ))}
            {/* not showing large font size */}
            <SocialMediaNav large />
          </ul>
        </nav>
      )}
    </div>
  );
};
