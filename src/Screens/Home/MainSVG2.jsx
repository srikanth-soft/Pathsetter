import React, { useEffect, useRef } from "react";
import "./styles/svg.css";

const MainSVG2 = () => {
  const pathRef = useRef(null);

  useEffect(() => {
    const length = pathRef.current.getTotalLength();
    pathRef.current.style.strokeDasharray = `20 ${length}`; // 10px segment followed by the rest
    pathRef.current.style.strokeDashoffset = length;
  }, []);

  return (
    <svg
      viewBox="0 0 356 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ height: "100%", width: "100%" }} // Make SVG responsive
    >
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: "#FF5F6D", stopOpacity: 1 }} />
          <stop
            offset="100%"
            style={{ stopColor: "#FFC371", stopOpacity: 1 }}
          />
        </linearGradient>
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow
            dx="0"
            dy="0"
            stdDeviation="5"
            floodColor="#000000"
            floodOpacity="0.5"
          />
        </filter>
      </defs>
      <path
        className="md:hidden"
        d="M70.5001 559L23.5002 415.5C2.13192 365.706 -2.8799 341.813 5.00016 313L92.5001 88.5001C145.33 -10.6738 207.193 -22.5237 357 35.5001"
        stroke="#758694"
        strokeWidth="3"
        fill="none"
        style={{ opacity: 0.2, filter: "blur(1px)" }}
      />
      <path
        ref={pathRef}
        className="animated-path2 md:hidden"
        d="M70.5001 559L23.5002 415.5C2.13192 365.706 -2.8799 341.813 5.00016 313L92.5001 88.5001C145.33 -10.6738 207.193 -22.5237 357 35.5001"
        stroke="#758694"
        strokeWidth="4"
        // strokeLinecap="round"
        fill="none"
        filter="url(#shadow)"
      />
    </svg>
  );
};

export default MainSVG2;

{
  /* <svg width="356" height="560" viewBox="0 0 356 560" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M70.5001 559L23.5002 415.5C2.13192 365.706 -2.8799 341.813 5.00016 313L92.5001 88.5001C145.33 -10.6738 207.193 -22.5237 357 35.5001" stroke="black"/>
</svg> */
}
