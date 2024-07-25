import React, { useEffect, useRef, useState } from "react";
import { IoMdSettings } from "react-icons/io";
import { FaUnlock } from "react-icons/fa";
import { AiFillThunderbolt } from "react-icons/ai";
import { VscGraph } from "react-icons/vsc";
import { FaUserEdit } from "react-icons/fa";
import { GiArtificialIntelligence } from "react-icons/gi";
import logo from "../../assets/images/pathsetterLogo.png";
import "./styles/Features.css";

const Features = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target); // Stop observing after visibility is set
          }
        });
      },
      { threshold: 0.4 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);
  const containerRefs = useRef([]);
  const [isIcons, setIsIcons] = useState(Array(6).fill(false));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = containerRefs.current.indexOf(entry.target);
            setIsIcons((prev) => {
              const newVisible = [...prev];
              newVisible[index] = true;
              return newVisible;
            });
            observer.unobserve(entry.target); // Stop observing after visibility is set
          }
        });
      },
      { threshold: 0.4 }
    );

    containerRefs.current.forEach((containerRef) => {
      if (containerRef) {
        observer.observe(containerRef);
      }
    });

    return () => {
      containerRefs.current.forEach((containerRef) => {
        if (containerRef) {
          observer.unobserve(containerRef);
        }
      });
    };
  }, []);
  const items = [
    {
      text: "AIO Platform",
      icon: <AiFillThunderbolt size={50} color="ad5311" />,
      bgColor: "#2d211e",
    },
    {
      text: "Customization",
      icon: <FaUserEdit size={50} color="657f39" />,
      bgColor: "#26332d",
    },
    {
      text: "AI Powered",
      icon: <GiArtificialIntelligence size={50} color="ce49de" />,
      bgColor: "#301a46",
    },
    {
      text: "Dashboard",
      icon: <VscGraph size={50} color="c6b971" />,
      bgColor: "#323332",
    },
    {
      text: "2FA",
      icon: <FaUnlock size={50} color="784eaa" />,
      bgColor: "#262147",
    },
    {
      text: "Support",
      icon: <IoMdSettings size={50} color="68dac8" />,
      bgColor: "#1e3a47",
    },
  ];
  const SixLineSvg = () => {
    const items = [
      {
        text: "AIO Platform",
        icon: <AiFillThunderbolt size={20} color="ad5311" />,
        bgColor: "#2d211e",
        position: "image1",
      },
      {
        text: "Customization",
        icon: <FaUserEdit size={20} color="657f39" />,
        bgColor: "#26332d",
        position: "image2",
      },
      {
        text: "AI Powered",
        icon: <GiArtificialIntelligence size={20} color="ce49de" />,
        bgColor: "#301a46",
        position: "image3",
      },
      {
        text: "Dashboard",
        icon: <VscGraph size={20} color="c6b971" />,
        bgColor: "#323332",
        position: "image4",
      },
      {
        text: "2FA",
        icon: <FaUnlock size={20} color="784eaa" />,
        bgColor: "#262147",
        position: "image5",
      },
      {
        text: "Support",
        icon: <IoMdSettings size={20} color="68dac8" />,
        bgColor: "#1e3a47",
        position: "image6",
      },
    ];
    return (
      <div className="six-line-svg">

        <img src={logo} className="image-center" alt="logo" />

        {items.map((item, i) => {
          return (
            <div
              className={`w-[145px] h-[145px] flex flex-col justify-center items-center svg-glass  rounded-[15%] image-end ${item.position}`}
            >
              <div
                className={`relative h-[50px] w-[50px] rounded-[50%] flex justify-center items-center mt-5`}
                style={{ backgroundColor: item.bgColor }}
              >
                {item.icon}
              </div>
              <p className="relative text-white mb-5 font-semibold mt-5">
                {item.text}
              </p>
            </div>
          );
        })}

        <svg
          className="w-full h-auto"
          viewBox="0 0 739 314"
          fill="none"
        >
          <path
            className="line"
            strokeWidth={2}
            d="M125 1C125 1 209 1 212 1C215 1 216.792 1.56822 219 3C221.208 4.43178 235.122 17.6091 284 64L328 107.5"
            stroke="white"
          />
          <path
            className="line"
            strokeWidth={2}
            d="M613 1C613 1 529 1 526 1C523 1 521.208 1.56822 519 3C516.792 4.43178 502.878 17.6091 454 64L410 107.5"
            stroke="white"
          />
          <path
            className="line"
            strokeWidth={2}
            d="M613 313.5C613 313.5 529 313.5 526 313.5C523 313.5 521.208 312.932 519 311.5C516.792 310.068 502.878 296.891 454 250.5L410 207"
            stroke="white"
          />
          <path
            className="line"
            strokeWidth={2}
            d="M125 313.5C125 313.5 209 313.5 212 313.5C215 313.5 216.792 312.932 219 311.5C221.208 310.068 235.122 296.891 284 250.5L328 207"
            stroke="white"
          />
          <path
            className="line"
            strokeWidth={2}
            d="M0 157H302.5"
            stroke="white"
          />
          <path
            className="line"
            strokeWidth={2}
            d="M738.5 159H436"
            stroke="white"
          />
        </svg>
      </div>
    );
  };
  return (
    <div ref={containerRef}>
      <div className="grid p-5  gap-4  min-h-[100vh] max-w-[1440px] m-auto py-20  md:grid-cols-2 ml:p-0 md:py-20">
        <div
          className={`opacity-0 text-center md:text-left  flex flex-col items-center md:items-start justify-center ${
            isVisible ? "track-right-in" : ""
          }`}
        >
          <p className="bg-[#151531] text-[#535a8a] p-2 rounded-md inline font-medium">
            AI POWERED BUZ SOLUTIONS
          </p>
          <h2 className="text-white text-[50px] md:text-[70px]">
            Meet your new <br /> intelligent buz
          </h2>
          <p className="text-[50px] font-medium bg-gradient-to-br from-green-400 via-blue-600 to-purple-600 text-transparent bg-clip-text">
            {" "}
            AI Modal
          </p>
          <p className="text-[#5e6374]">
            Select an Ai Platform and input some basic <br />
            information about your idea,brand,
            <br />
            product,or service, and the AI would <br /> generate a unique,
            <span className="text-[#535a8a]">
              {" "}
              engaging piece of content
            </span>{" "}
            in seconds.
          </p>
        </div>

        <div className="grid  grid-cols-2 pt-5 md:pt-0 lg:grid-cols-3 self-center gap-5 xl:hidden">
          {items.map((item, index) => (
            <div
              key={index}
              ref={(el) => (containerRefs.current[index] = el)}
              className={`relative  max-w-[250px]   flex flex-col justify-center items-center feature-glass  rounded-[15%] transform transition-transform duration-500 ${
                isIcons[index] ? "scale-100" : "scale-0"
              }`}
            >
              <div
                className={`relative h-[100px] w-[100px] rounded-[50%] flex justify-center items-center mt-5`}
                style={{ backgroundColor: item.bgColor }}
              >
                {item.icon}
              </div>
              <p className="relative text-white mb-5 font-semibold mt-5">
                {item.text}
              </p>
            </div>
          ))}
        </div>
        <div className=" pt-5 md:pt-0  self-center hidden xl:block">
          <SixLineSvg></SixLineSvg>
        </div>
      </div>
    </div>
  );
};

export default Features;
