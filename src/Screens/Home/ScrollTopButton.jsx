import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
const ScrollTopButton = () => {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <a
      href="#mainContainer"
      className={`${
        scrollY > 740 ? "fixed" : "hidden"
      } bottom-2 right-2 bg-green-500 rounded-md h-10 w-10 z-40 flex justify-center items-center`}
    >
      <FaArrowUp></FaArrowUp>
    </a>
  );
};
export default ScrollTopButton;
