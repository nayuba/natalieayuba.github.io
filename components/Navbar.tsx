import Hamburger from "hamburger-react";
import Image from "next/image";
import React, { FC, useEffect, useState } from "react";
import SocialMediaNav from "./SocialMediaNav";

const navLinks = [
  {
    title: "About",
    href: "/#about",
    underline: "after:content-straight",
  },
  {
    title: "Projects",
    href: "/#projects",
    underline: "after:content-less-straight",
  },
  {
    title: "Contact",
    href: "/#contact",
    underline: "after:content-wonky",
  },
];

const Navbar: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    isMenuOpen
      ? (document.documentElement.style.overflow = "hidden")
      : (document.documentElement.style.overflow = "unset");
  }, [isMenuOpen]);

  return (
    <nav>
      <ul className="hidden md:flex items-center gap-6 text-base lowercase font-semibold">
        {navLinks.map((navLink) => (
          <li key={navLink.title} className="relative">
            <a href={navLink.href} className={`p-4 ${navLink.underline} after:absolute after:block after:left-0 after:right-0 after:top-6 after:opacity-0 hover:after:translate-y-1 hover:after:opacity-100 after:duration-150 after:transition-all after:ease-in`}>
              {navLink.title}
            </a>
          </li>
        ))}
        <SocialMediaNav />
      </ul>
      {/* Mobile menu */}
      <div className={"fixed top-0 md:hidden"}>
        <ul
          className={`${
            isMenuOpen ? "left-0" : "-left-full"
          } transition-[left] w-full bg-primary text-dark-grey font-semibold duration-500 fixed flex flex-col h-screen justify-center items-center gap-14 text-2xl lowercase`}
        >
          {navLinks.map((navLink) => (
            <li key={navLink.title}>
              <a
                href={navLink.href}
                className="hover:text-secondary-dark transition duration-200 ease-slow-in-out"
                onClick={() => setIsMenuOpen(false)}
              >
                {navLink.title}
              </a>
            </li>
          ))}
          <SocialMediaNav large />
        </ul>
        {/* Hamburger menu */}
        <div className="fixed flex items-center h-[80px] right-6 text-2xl hover:text-secondary-dark transition-colors duration-200 ease-slow-in-out">
          <Hamburger
            toggled={isMenuOpen}
            toggle={setIsMenuOpen}
            rounded
            label="Show menu"
            distance="sm"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
