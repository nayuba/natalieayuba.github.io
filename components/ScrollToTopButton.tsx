import React, { FC } from "react";
import { FaChevronUp } from "react-icons/fa";

const ScrollToTopButton: FC = () => (
  // add detect scroll position hook here
  <a href="#" title="Scroll to top" className="fixed bottom-6 right-6 rounded-full text-2xl text-white bg-secondary p-3 drop-shadow-deep hover:translate-y-[-2px] duration:300 ease-icon-in-out hidden lg:block">
    <FaChevronUp />
  </a>
);

export default ScrollToTopButton;
