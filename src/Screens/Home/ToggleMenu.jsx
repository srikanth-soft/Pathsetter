import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import "./styles/ToggleMenu.css";
import { Link } from "react-router-dom";
const ToggleMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative toggle-menu">
      <button
        className="fixed top-5 right-4 z-50 p-2 bg-white text-black rounded-md "
        onClick={toggleMenu}
      >
        {isOpen ? <IoClose size={23}></IoClose> : <IoMenu size={23}></IoMenu>}
      </button>
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#03091d] text-white transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-500 ease-in-out z-40`}
      >
        <div className="p-4 pt-20">
          <ul>
            <li className="mb-4 p-2 rounded-md hover:bg-white hover:text-black transition-all duration-500 ease-in-out">
              <a href="#home">Home</a>
            </li>
            <Link  className="mb-4 p-2 rounded-md hover:bg-white hover:text-black transition-all duration-500 ease-in-out">
              About Us
            </Link>
            <li className="mb-4 p-2 rounded-md hover:bg-white hover:text-black transition-all duration-500 ease-in-out">
              <a href="#services">Products</a>
            </li>
            <li className="mb-4 p-2 rounded-md hover:bg-white hover:text-black transition-all duration-500 ease-in-out">
              <a href="#contact">FAQs</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ToggleMenu;
