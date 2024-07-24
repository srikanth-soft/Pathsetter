import React, { useEffect, useState } from "react";
import FixedNavbar from "./FixedNavbar";
import { AiFillThunderbolt } from "react-icons/ai";
import MainSVG from "./MainSVG";
import logo from "../../assets/images/pathsetterLogo.png";
import MainSVG2 from "./MainSVG2";
import bgPng from "../../assets/images/gradientPng.png";
import bgTop from "../../assets/images/gradientTop.png";

import ToggleMenu from "./ToggleMenu";
import MainSVG3 from "./MainSVG3";
const MainSection = () => {
  const [animated, setAnimated] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimated(true);
    }, 100);

    return () => {
      clearTimeout(timeout);
    };
  }, []);
  return (
    <div className="relative ">
      <div className="h-[70vh] absolute left-[0] bottom-0">
        <MainSVG></MainSVG>
      </div>
      <div className="h-[70vh] absolute right-[0] bottom-0">
        <MainSVG3></MainSVG3>
      </div>
      <div className="h-[70vh] absolute right-0 bottom-0 ">
        <MainSVG2></MainSVG2>
      </div>
      <div
        id="mainContainer"
        className="h-[100vh] max-w-[1350px] mx-auto w-full flex flex-col justify-center items-center relative text-white"
      >
        <img
          width="100%"
          src={bgTop}
          alt=""
          className="absolute left-1/2 transform -translate-x-1/2 top-[-25%] md:top-[-70%] w-full"
        />

        <img
          src={bgPng}
          alt=""
          className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-full md:w-4/5 md:top-1/2"
        />
        <div className="absolute left-5 top-2 flex gap-3 items-center">
          <img src={logo} className="h-[30px]"></img>
          <p className="text-[40px] font-medium">Pathsetter</p>
        </div>

        <ToggleMenu></ToggleMenu>

        {/* <ScrollTopButton></ScrollTopButton> */}
        <FixedNavbar></FixedNavbar>
        <div
          className={`text-[13px] md:text-[20px] flex gap-2 items-center opacity-0 ${
            animated ? "animate-slide-up1" : ""
          }`}
        >
          <div className={`flex gap-2 z-20`}>
            <div>
              <p className=" text-[13px] font-medium bg-gradient-to-br from-green-400 via-blue-600 to-purple-600 text-transparent bg-clip-text">
                N
              </p>
            </div>
            <div>
              <p className="text-[13px] font-medium bg-gradient-to-br from-green-400 via-blue-600 to-purple-600 text-transparent bg-clip-text">
                E
              </p>
            </div>
            <div>
              <p className="text-[13px] font-medium bg-gradient-to-br from-green-400 via-blue-600 to-purple-600 text-transparent bg-clip-text">
                W
              </p>
            </div>
          </div>
          <div className="text-center">
            <p className="font-bold bg-gradient-to-br from-green-400 via-blue-600 to-purple-600 text-transparent bg-clip-text">
              Next-generation of Artificial Intelligence
            </p>
          </div>
        </div>
        <h1
          className={`text-[40px] font-bold opacity-0 text-center mt-10 ${
            animated ? "animate-slide-up2" : ""
          } md:text-[80px]`}
        >
          Boost your Buz <br /> With AI{" "}
          <AiFillThunderbolt
            // size={100}
            className="text-[40px] md:text-[80px]"
            color={"#f4ad43"}
            style={{ display: "inline" }}
          />
        </h1>
        <p
          className={`text-[10px] md:text-[20px] text-center  opacity-0  ${
            animated ? "animate-slide-up3" : ""
          } `}
        >
          Take your business growth and experience to the <br /> next level and
          boost your productivity
        </p>
      </div>
    </div>
  );
};

export default MainSection;
