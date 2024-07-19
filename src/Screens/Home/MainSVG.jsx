import React, { useEffect, useRef } from 'react';
import "./styles/svg.css"
const MainSVG = () => {
  const pathRef = useRef(null);

  useEffect(() => {
    const length = pathRef.current.getTotalLength();
    pathRef.current.style.strokeDasharray = `20 ${length}`; // 10px segment followed by the rest
    pathRef.current.style.strokeDashoffset = length;
  }, []);

  return (
    <svg
    className='hidden md:block'
      viewBox="0 0 1240 758"
      fill="none"
      style={{ width: "100%", height: "100%", }} // Make SVG responsive
    >
      <path
        d="M0 220C0 220 99.5864 53.8192 130.079 28.7871C160.571 3.75504 198.931 4.23006 198.931 4.23006L885.475 1C885.475 1 935.17 1.00001 959.333 17.799C990.931 39.7669 1005.77 64.3187 1005.77 64.3187L1176.73 311.671C1176.73 311.671 1228.75 392.215 1235.85 426.233C1242.94 460.252 1235.85 496.772 1235.85 496.772C1235.85 496.772 1223.5 543.197 1194.7 598.328C1171.2 643.317 1136.39 702.32 1103.03 757"
        stroke="#758694"
        strokeWidth="3"
        fill="none"
        style={{opacity:0.2,filter: "blur(1px)"}}
      />
      <path
        ref={pathRef}
        className="animated-path"
        
        d="M0 220C0 220 99.5864 53.8192 130.079 28.7871C160.571 3.75504 198.931 4.23006 198.931 4.23006L885.475 1C885.475 1 935.17 1.00001 959.333 17.799C990.931 39.7669 1005.77 64.3187 1005.77 64.3187L1176.73 311.671C1176.73 311.671 1228.75 392.215 1235.85 426.233C1242.94 460.252 1235.85 496.772 1235.85 496.772C1235.85 496.772 1223.5 543.197 1194.7 598.328C1171.2 643.317 1136.39 702.32 1103.03 757"
        stroke="#758694"
        strokeWidth="4"
        // strokeLinecap="round"
        fill="none"
        filter="url(#shadow)"
      />
    </svg>
  );
};

export default MainSVG;






