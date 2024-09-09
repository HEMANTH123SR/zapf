"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GetStartedBtn } from "@/components/GetStartedBtn";
import { Zap } from "lucide-react";
import { newAgeFontBold } from "@/lib/fonts/font";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const Slider = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-150vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );

    return () => {
      pin.kill();
    };
  }, []);

  return (
    <section className="overflow-hidden" ref={triggerRef}>
      <div ref={sectionRef} className="flex h-screen w-[240vw]">
        <div className="h-full w-full flex justify-evenly items-center">
          <div className="flex justify-center items-center h-full">
            <div className="flex flex-col space-y-3">
              <span className="text-[#BABBBA]">features</span>
              <div className="flex flex-col text-6xl text-black">
                <h1 className="font-extrabold">Your Portfolio,</h1>
                <h1 className="font-extralight">Your Way</h1>
              </div>
              <p
                className={`text-lg tracking-wide text-black py-2 ${newAgeFontBold.className}`}
              >
                {`Create a stunning portfolio in minutes, not hours.`}
              </p>
              <div className="flex justify-start items-center">
                <GetStartedBtn title="Build Now" Icon={Zap} />
              </div>
            </div>
          </div>
          <div className="flex h-full justify-center items-center">
            <div className="flex flex-col w-[670px] p-4">
              {/* <img
                className="w-full h-96 rounded-2xl h-auto border-2"
                src="/api/placeholder/670/384"
                alt="Various portfolio templates"
              /> */}
              <div className="w-full h-96 rounded-2xl bg-[#EFEFEE] border-2"></div>
              <div className="flex pl-6 flex-col text-black">
                <h1 className="text-2xl pt-5 font-semibold capitalize">
                  Choose Your Style
                </h1>
                <p className="text-sm font-light capitalize">
                  Select from a variety of professional templates
                </p>
              </div>
            </div>
          </div>
          <div className="flex h-full justify-center items-center">
            <div className="flex flex-col w-[670px] p-4">
              {/* <img
                className="w-full h-96 rounded-2xl h-auto border-2"
                src="/api/placeholder/670/384"
                alt="Custom theme editor"
              /> */}
              <div className="w-full h-96 rounded-2xl bg-[#EFEFEE] border-2"></div>

              <div className="flex pl-6 flex-col text-black">
                <h1 className="text-2xl pt-5 font-semibold capitalize">
                  Customize Your Theme
                </h1>
                <p className="text-sm font-light capitalize">
                  Personalize colors, fonts, and layouts with ease
                </p>
              </div>
            </div>
          </div>
          <div className="flex h-full justify-center items-center">
            <div className="flex flex-col w-[670px] p-4">
              {/* <img
                className="w-full h-96 rounded-2xl h-auto border-2"
                src="/api/placeholder/670/384"
                alt="LinkedIn profile import"
              /> */}
              <div className="w-full h-96 rounded-2xl bg-[#EFEFEE] border-2"></div>

              <div className="flex pl-6 flex-col text-black">
                <h1 className="text-2xl pt-5 font-semibold capitalize">
                  Import from LinkedIn
                </h1>
                <p className="text-sm font-light capitalize">
                  Instantly populate your portfolio with your LinkedIn profile
                </p>
              </div>
            </div>
          </div>
          <div className="flex h-full justify-center items-center">
            <div className="flex flex-col w-[670px] p-4">
              {/* <img
                className="w-full h-96 rounded-2xl h-auto border-2"
                src="/api/placeholder/670/384"
                alt="AI-powered portfolio assistant"
              /> */}
              <div className="w-full h-96 rounded-2xl bg-[#EFEFEE] border-2"></div>

              <div className="flex pl-6 flex-col text-black">
                <h1 className="text-2xl pt-5 font-semibold capitalize">
                  Meet Zappy AI
                </h1>
                <p className="text-sm font-light capitalize">
                  Let our AI assistant help craft your perfect portfolio
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
