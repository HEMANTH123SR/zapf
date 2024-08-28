"use client";
import { ArrowRight } from "lucide-react";
import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";

export const GetStartedBtn = () => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const arrowRef = useRef<SVGSVGElement | null>(null);
  const roundedDivRef = useRef<HTMLDivElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    if (isHovered) {
      gsap.to(roundedDivRef.current, {
        duration: 0.5,
        height: "3rem",
        width: "3rem",
        borderRadius: "0.5rem",
        opacity: 1,
        marginLeft: 0,
        yoyo:true,
      });
      gsap.to(arrowRef.current, {
        delay: 0.5,
        duration: 0.7,
        height: "1.75rem",
        width: "1.75rem",
        opacity: 1,
        x: 38,
        color: "#000000",
        display: "relative",
        yoyo:true
      });
    } else {
      gsap.to(roundedDivRef.current, {
        duration: 0.3,
        delay: 0.3,
        height: "0.70rem",
        width: "0.70rem",
        borderRadius: "9999px",
        opacity: 0.9,
        marginLeft: "1.25rem",
      });
      gsap.to(arrowRef.current, {
        duration: 0.3,
        x: 0,
        opacity:0,
      });
    }
  }, [isHovered]);

  return (
    <button
      ref={buttonRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="flex relative items-center justify-center gap-2 h-14 rounded-lg bg-black text-white transition-colors duration-300 text-lg w-auto p-2"
    >
      <ArrowRight
        ref={arrowRef}
        className="text-blue-500 absolute z-10 h-7 w-9 opacity-0  -left-6 "
      />
      <div
        className="h-[0.70rem] w-[0.70rem] rounded-full  ml-5 bg-white  mr-4"
        ref={roundedDivRef}
      ></div>
      <span className="pr-5">Get a free quote</span>
    </button>
  );
};
