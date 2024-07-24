import React, { useEffect, useRef, useState } from "react";
import "./styles/svg.css"; // Ensure you import the CSS file

const FooterLines = () => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(ref.current); // Stop observing after it becomes visible
          }
        },
        { threshold: 0.1 } // Adjust this value based on when you want the animation to start
      );
  
      if (ref.current) {
        observer.observe(ref.current);
      }
  
      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }, []);
  
    return (
      <div className="w-full overflow-hidden " ref={ref}>
        <svg
          viewBox="0 0 1920 126"
          fill="none"
          className={`svg-animation  ${isVisible ? "animate" : ""}`}
        >
          {/* Original lines */}
          <path
            d="M0 124.722H490L603 3.22223H961"
            stroke="#5e6374"
            strokeWidth={1.5}
          />
          <path
            d="M602.5 3.22222C602.5 3.22222 465.5 -1.77778 453.5 3.22222C441.5 8.22222 336 124.222 336 124.222"
            stroke="#5e6374"
            strokeWidth={1.5}
          />
          {/* Mirror */}
          <path
            d="M1922 124.722H1432.5L1319.5 3.22223H961.5"
            stroke="#5e6374"
            strokeWidth={1.5}
          />
          <path
            d="M1319.5 3.22224C1319.5 3.22224 1463 -0.277757 1468.5 3.22224C1474 6.72224 1586 124.222 1586 124.222"
            stroke="#5e6374"
            strokeWidth={1.5}
          />
          <path
            d="M1649.5 3.22223H1851.5"
            stroke="#5e6374"
            strokeWidth={1.5}
          />
          <path
            d="M229.5 64.2222L179.5 3.22223H47.5"
            stroke="#5e6374"
            strokeWidth={1.5}
          />
        </svg>
      </div>
    );
  };
  
  export default FooterLines;
