import React, { FC } from "react";
import { FaChevronUp } from "react-icons/fa";

const ScrollToTopButton: FC = () => (
  <a href="#" className="fixed bottom-6 right-6 rounded-full text-2xl text-white bg-secondary p-3 drop-shadow-deep">
    <FaChevronUp />
  </a>
);

export default ScrollToTopButton;
