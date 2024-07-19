import React, { useEffect, useRef } from 'react';
import "./styles/svg.css"
const MainSVG3 = () => {
  const pathRef = useRef(null);

  useEffect(() => {
    const length = pathRef.current.getTotalLength();
    pathRef.current.style.strokeDasharray = `20 ${length}`; // 10px segment followed by the rest
    pathRef.current.style.strokeDashoffset = length;
  }, []);

  return (
    <svg
    className='hidden md:block'
      viewBox="0 0 996 758"
      fill="none"
      style={{ width: "100%", height: "100%"}} // Make SVG responsive
    >
      <path
        d="M995.617 219C963.927 152.374 911.85 45.79 895.15 28.7871C870.563 3.75504 839.632 4.23006 839.632 4.23006L286.055 1C286.055 1 245.986 1.00001 226.502 17.799C201.024 39.7669 189.055 64.3187 189.055 64.3187L51.2118 311.671C51.2118 311.671 9.26264 392.215 3.5423 426.233C-2.17804 460.252 3.5423 496.772 3.5423 496.772C3.5423 496.772 13.4989 543.197 36.7203 598.328C55.6702 643.317 83.7384 702.32 110.636 757"
        stroke="#758694"
        strokeWidth="3"
        fill="none"
        style={{opacity:0.2,filter: "blur(1px)"}}
      />
      <path
        ref={pathRef}
        className="animated-path"
        
        d="M995.617 219C963.927 152.374 911.85 45.79 895.15 28.7871C870.563 3.75504 839.632 4.23006 839.632 4.23006L286.055 1C286.055 1 245.986 1.00001 226.502 17.799C201.024 39.7669 189.055 64.3187 189.055 64.3187L51.2118 311.671C51.2118 311.671 9.26264 392.215 3.5423 426.233C-2.17804 460.252 3.5423 496.772 3.5423 496.772C3.5423 496.772 13.4989 543.197 36.7203 598.328C55.6702 643.317 83.7384 702.32 110.636 757"
        stroke="#758694"
        strokeWidth="4"
        // strokeLinecap="round"
        fill="none"
        filter="url(#shadow)"
      />
    </svg>
  );
};

export default MainSVG3;






