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
              className={`w-[135px] h-[135px] flex flex-col justify-center items-center svg-glass  rounded-[15%] image-end ${item.position}`}
            >
              <div
                className={`relative h-[50px] w-[50px] rounded-[50%] flex justify-center items-center mt-5 backdrop-blur-sm`}
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
          <svg width="343" height="239" viewBox="0 0 343 239" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path className="line" strokeWidth={2} d="M0 1C0 1 59.1724 1 61.2857 1C63.399 1 64.6611 1.43217 66.2167 2.52113C67.7724 3.61008 77.5738 13.6322 112.005 48.9155L143 82" stroke="white"/>
          <path className="line" strokeWidth={2} d="M343 1C343 1 284.241 1 282.143 1C280.044 1 278.791 1.43217 277.246 2.52113C275.702 3.61008 265.969 13.6322 231.778 48.9155L201 82" stroke="white"/>
          <path className="line" strokeWidth={2} d="M343 238C343 238 284.241 238 282.143 238C280.044 238 278.791 237.568 277.246 236.479C275.702 235.39 265.969 225.368 231.778 190.085L201 157" stroke="white"/>
          <path className="line" strokeWidth={2} d="M0 238C0 238 59.1724 238 61.2857 238C63.399 238 64.6611 237.568 66.2167 236.479C67.7724 235.39 77.5738 225.368 112.005 190.085L143 157" stroke="white"/>
          <path className="line" strokeWidth={2} d="M0 119L125 119" stroke="white"/>
          <path className="line" strokeWidth={2} d="M343 119L219 121" stroke="white"></path>
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
