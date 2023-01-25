import { useState } from "react";

const useHamToggle = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return { isMenuOpen, setIsMenuOpen };
};

export default useHamToggle;
