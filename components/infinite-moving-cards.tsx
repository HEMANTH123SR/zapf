"use client";

import React, { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

const PortfolioExamples = [
  {
    img: "/examples/perryw.png",
    themeName: "perryw",
    audienceFit: ["enterprenuers", "student", "lorem"],
  },
  {
    img: "/examples/pacolui.png",
    themeName: "pacolui",
    audienceFit: ["enterprenuers", "student", "lorem"],
  },
  {
    img: "/examples/nico.png",
    themeName: "nico",
    audienceFit: ["enterprenuers", "student", "lorem"],
  },
  {
    img: "/examples/juul.png",
    themeName: "juul",
    audienceFit: ["enterprenuers", "student", "lorem"],
  },
  {
    img: "/examples/dillion.png",
    themeName: "dillion",
    audienceFit: ["enterprenuers", "student", "lorem"],
  },
  {
    img: "/examples/albert.png",
    themeName: "albert",
    audienceFit: ["enterprenuers", "student", "lorem"],
  },
];

export function InfiniteMovingCards() {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationId: number;
    let startTime: number | null = null;
    const duration = 50000; // Duration for one full cycle (in milliseconds)

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = (elapsed % duration) / duration;

      if (!isHovered) {
        container.scrollLeft =
          progress * (container.scrollWidth - container.clientWidth);
      }

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, [isHovered]);

  return (
    <div className="w-full overflow-hidden ">
      <div className="container mx-auto  ">
        <div
          className="flex overflow-x-hidden"
          ref={containerRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {PortfolioExamples.map((example, index) => (
            <Card
              key={index}
              style={{
                minWidth: "700px",
                height: "auto",
              }}
              className="m-6 border-none shadow-none transition-transform duration-300 "
            >
              <CardContent className="p-4">
                {/* <img
                  src={example.img}
                  alt={`Example ${index + 1}`}
                  className="w-full border rounded-xl h-auto object-cover"
                /> */}
                <div className="w-full h-96 rounded-2xl bg-[#EFEFEE] border-2"></div>
              </CardContent>
              <CardFooter className="p-2 pl-7 flex flex-col justify-start items-start">
                <h3 className="text-lg font-bold uppercase">
                  {example.themeName}
                </h3>
                <p className="text-sm text-gray-600 capitalize">
                  Audience Fit:{" "}
                  {example.audienceFit.map((fit, index) => {
                    return (
                      <span key={index}>{`${fit} ${
                        index !== example.audienceFit.length - 1 ? "·" : ""
                      } `}</span>
                    );
                  })}
                </p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
