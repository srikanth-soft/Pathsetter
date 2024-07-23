import React, { useEffect, useRef, useState } from "react";
import { CiCircleCheck } from "react-icons/ci";
import { CiSquarePlus } from "react-icons/ci";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import "./styles/TrackUser.css"
const TrackUser = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
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
  
  return (
    <div >
       <div ref={containerRef} className={`grid mt-10  md:grid-cols-2 gap-10 p-5 md:p-10 max-w-[1440px] m-auto mb-10 border-[#1e253f] border-[0.2px] rounded-lg relative overflow-hidden track-radial-gradient`}>
      <div className={`border-[#1e253f] border-[0.2px] rounded-lg p-5 md:p-10 text-white opacity-0 ${isVisible ? "track-right-in" : ""} `}>

        <div className="flex gap-4">
          <div>
            <p className="text-[13px]">SPENT</p>
            <div className="h-1 w-auto bg-[#33363e] rounded-md mt-3"></div>
          </div>
          <div>
            <p className="text-[13px]">REMAINING</p>
            <div className="h-1 w-auto bg-purple-700 rounded-md mt-3"></div>
          </div>
        </div>
        <div className="mt-2">
          <div className="flex items-center gap-2">
            <p>$210.90 </p>
            <AiOutlineExclamationCircle
              size={15}
              color="#5e6374"
            ></AiOutlineExclamationCircle>
          </div>
          <p className="text-[7px] text-[#8d8d8d] tracking-widest">CREDITS</p>
        </div>
        <LineGraph></LineGraph>
        <div className="flex justify-between">
          <div>
            <ul className="list-disc">
              <li className="marker:text-purple-500 text-[10px]">
                Reamining Credits
              </li>
              <li className="marker:text-purple-700 text-[10px]">
                Total Balance
              </li>
            </ul>
          </div>
          {/* <div className="flex items-center gap-3">
            <div className="rounded-[50%]  bg-slate-800 h-[30px] w-[30px] flex justify-center items-center">
              <p className="text-[15px]">PJ</p>
            </div>
            <div>
              <p>Penny Jen</p>
              <p className="text-[7px] text-[#8d8d8d]">2 hours ago</p>
            </div>
          </div> */}
        </div>
      </div>
      <div className={`opacity-0 ${isVisible ? "track-left-in" : ""} `}>

        <p className="bg-[#151531] text-[#535a8a] p-2 rounded-md inline font-medium">
          DASHBOARD
        </p>
        <p className="text-center md:text-left text-[50px] font-medium text-white">
          <span className="  bg-gradient-to-br from-green-400 via-blue-600 to-purple-600 text-transparent bg-clip-text">
            Track
          </span>{" "}
          user activity and control access.
        </p>
        <p className="text-[#5e6374]">
          Access <span className="text-[#535a8a]">valuable insights</span> into
          customer behavior,
          <br />
          identity areas for improvement, manage support
          <br />
          requests and make data-driven decisions.
        </p>
        <div className="mt-5">
          <div className="flex items-center gap-3 mb-3">
            <CiCircleCheck size={30} color="#5e6374"></CiCircleCheck>
            <p className="text-[#5e6374]">Customer Balance</p>
          </div>
          <div className="flex items-center gap-3 mb-3">
            <CiCircleCheck size={30} color="#5e6374"></CiCircleCheck>
            <p className="text-[#5e6374]">Template Category Access</p>
          </div>
          <div className="flex items-center gap-3">
            <CiCircleCheck size={30} color="#5e6374"></CiCircleCheck>
            <p className="text-[#5e6374]">User Spending</p>
          </div>
        </div>
        <button className="absolute right-4 bottom-4">
          <CiSquarePlus size={30} color="#5e6374"></CiSquarePlus>
        </button>
      </div>
    </div>
    </div>
   
  );
};
const LineGraph = () => {
  // Sample data for the graph
  const data = [50, 70, 30, 90, 60, 40];

  return (
    <div className="flex justify-center gap-5 items-center h-64  p-4 rounded-md shadow-md">
      <div className="relative flex flex-col items-center">
        <div>
          <div
            className="h-10 w-1 rounded-lg"
            style={{ background: "linear-gradient(180deg, #a855f7, #6b21a8)" }}
          ></div>
          <div className="mt-2 h-10 w-1 bg-purple-700 rounded-lg opacity-50 transform scale-y-[-1] bg-gradient-to-b from-purple-700 to-transparent"></div>
        </div>
        <p className="text-purple-400 text-[13px] mt-3">50</p>
      </div>
      <div className="relative flex flex-col items-center">
        <div>
          <div
            className="h-10 w-1 rounded-lg"
            style={{ background: "linear-gradient(180deg, #a855f7, #6b21a8)" }}
          ></div>
          <div className="mt-2 h-10 w-1 bg-purple-700 rounded-lg opacity-50 transform scale-y-[-1] bg-gradient-to-b from-purple-700 to-transparent"></div>
        </div>
        <p className="text-purple-400 text-[13px] mt-3">50</p>
      </div>
      <div className="relative flex flex-col items-center">
        <div>
          <div
            className="h-10 w-1 rounded-lg"
            style={{ background: "linear-gradient(180deg, #a855f7, #6b21a8)" }}
          ></div>
          <div className="mt-2 h-10 w-1 bg-purple-700 rounded-lg opacity-50 transform scale-y-[-1] bg-gradient-to-b from-purple-700 to-transparent"></div>
        </div>
        <p className="text-purple-400 text-[13px] mt-3">50</p>
      </div>
      <div className="relative flex flex-col items-center">
        <div>
          <div
            className="h-10 w-1 rounded-lg"
            style={{ background: "linear-gradient(180deg, #a855f7, #6b21a8)" }}
          ></div>
          <div className="mt-2 h-10 w-1 bg-purple-700 rounded-lg opacity-50 transform scale-y-[-1] bg-gradient-to-b from-purple-700 to-transparent"></div>
        </div>
        <p className="text-purple-400 text-[13px] mt-3">50</p>
      </div>
      <div className="relative flex flex-col items-center">
        <div>
          <div
            className="h-10 w-1 rounded-lg"
            style={{ background: "linear-gradient(180deg, #a855f7, #6b21a8)" }}
          ></div>
          <div className="mt-2 h-10 w-1 bg-purple-700 rounded-lg opacity-50 transform scale-y-[-1] bg-gradient-to-b from-purple-700 to-transparent"></div>
        </div>
        <p className="text-purple-400 text-[13px] mt-3">50</p>
      </div>
      <div className="relative flex flex-col items-center">
        <div>
          <div
            className="h-10 w-1 rounded-lg"
            style={{ background: "linear-gradient(180deg, #a855f7, #6b21a8)" }}
          ></div>
          <div className="mt-2 h-10 w-1 bg-purple-700 rounded-lg opacity-50 transform scale-y-[-1] bg-gradient-to-b from-purple-700 to-transparent"></div>
        </div>
        <p className="text-purple-400 text-[13px] mt-3">50</p>
      </div>
      <div className="relative flex flex-col items-center">
        <div>
          <div
            className="h-10 w-1 rounded-lg"
            style={{ background: "linear-gradient(180deg, #a855f7, #6b21a8)" }}
          ></div>
          <div className="mt-2 h-10 w-1 bg-purple-700 rounded-lg opacity-50 transform scale-y-[-1] bg-gradient-to-b from-purple-700 to-transparent"></div>
        </div>
        <p className="text-purple-400 text-[13px] mt-3">50</p>
      </div>
      <div className="relative flex flex-col items-center">
        <div>
          <div
            className="h-10 w-1 rounded-lg"
            style={{ background: "linear-gradient(180deg, #a855f7, #6b21a8)" }}
          ></div>
          <div className="mt-2 h-10 w-1 bg-purple-700 rounded-lg opacity-50 transform scale-y-[-1] bg-gradient-to-b from-purple-700 to-transparent"></div>
        </div>
        <p className="text-purple-400 text-[13px] mt-3">50</p>
      </div>
    
    </div>
  );
};



export default TrackUser;
