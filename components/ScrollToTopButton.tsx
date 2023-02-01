import React, { FC, useEffect, useState } from "react";
import { FaChevronUp } from "react-icons/fa";

const ScrollToTopButton: FC = () => {
  const [visible, setVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const toggleVisible = () => {
    window.scrollY > 400 ? setVisible(true) : setVisible(false);
  };
  
  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
  }, []);

  return (
    <button
      title="Scroll to top"
      onClick={scrollToTop}
      className={`${
        visible ? "md:block" : "md:hidden"
      } fixed bottom-6 right-6 rounded-full text-2xl text-white bg-secondary p-3 drop-shadow-deep hover:translate-y-[-2px] duration:300 ease-slow-in-out hidden`}
    >
      <FaChevronUp />
    </button>
  );
};

export default ScrollToTopButton;
