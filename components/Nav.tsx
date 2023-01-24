import Image from "next/image";
import React, { FC } from "react";

const Nav: FC = () => (
  <nav>
    <ul className="flex gap-14 text-base lowercase font-semibold">
      {[
        ["About", "#about", "straight.svg"],
        ["Projects", "#projects", "less-straight.svg"],
        ["Contact", "#contact", "wonky.svg"],
      ].map(([text, href, line]) => (
        <li key={text} className="relative w-[80px] text-center">
          <a href={href}>{text}</a>
          <Image
            src={`/underlines/${line}`}
            width={70}
            height={0}
            alt="underline"
            className={`absolute left-[50%] translate-x-[-50%]${
              line === "straight.svg" ? " top-7" : ""
            }`}
          />
        </li>
      ))}
    </ul>
  </nav>
);

export default Nav;
