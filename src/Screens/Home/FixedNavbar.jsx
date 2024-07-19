import React, { useEffect, useState } from "react";
import "./styles/fixedNavbar.css"
import { Link } from "react-router-dom";
const FixedNavbar = () => {
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
      <nav className={`bg-black   text-[13px] font-medium text-[#919191] rounded-md p-4 ${scrollY>740?"fixed":"absolute"} transition z-30 top-2 max-lg:right-2`}>
        <button className="headerButton hover:text-white">HOME</button>
        <Link className="headerButton hover:text-white">About Us</Link>
        <button className="headerButton hover:text-white">Products</button>
        <button className="headerButton hover:text-white">FAQs</button>
        <button className="text-[13px] text-black rounded-sm px-1 py-[1px] font-medium bg-gradient-to-br from-green-400 via-blue-600 to-purple-600 ">CTA</button>
      </nav>
  );
};

export default FixedNavbar;
