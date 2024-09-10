"use client";

import React, { useEffect, useRef, memo } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GetStartedBtn } from "@/components/GetStartedBtn";
import { Zap } from "lucide-react";
import { newAgeFontBold } from "@/lib/fonts/font";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface SlideContentProps {
  title: string;
  description: string;
  imgAlt: string;
}

const SlideContent: React.FC<SlideContentProps> = memo(
  ({ title, description, imgAlt }) => (
    <div className="flex h-full justify-center items-center">
      <div className="flex flex-col w-[670px] p-4">
        <div className="w-full h-96 rounded-2xl bg-[#EFEFEE] border-2" />
        <div className="flex pl-6 flex-col text-black">
          <h2 className="text-2xl pt-5 font-semibold capitalize">{title}</h2>
          <p className="text-sm font-light capitalize">{description}</p>
        </div>
      </div>
    </div>
  )
);

SlideContent.displayName = "SlideContent";

const slideContents: SlideContentProps[] = [
  {
    title: "Choose Your Style",
    description: "Select from a variety of professional templates",
    imgAlt: "Various portfolio templates",
  },
  {
    title: "Customize Your Theme",
    description: "Personalize colors, fonts, and layouts with ease",
    imgAlt: "Custom theme editor",
  },
  {
    title: "Import from LinkedIn",
    description: "Instantly populate your portfolio with your LinkedIn profile",
    imgAlt: "LinkedIn profile import",
  },
  {
    title: "Meet Zappy AI",
    description: "Let our AI assistant help craft your perfect portfolio",
    imgAlt: "AI-powered portfolio assistant",
  },
];

export const LargeScreenFeatureSlider: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const pin = gsap.fromTo(
      sectionRef.current,
      { translateX: 0 },
      {
        translateX: "-200vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "3000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );

    return () => {
      if (pin) pin.kill();
    };
  }, []);

  return (
    <section
      className="overflow-hidden hidden lg:block"
      ref={triggerRef}
      style={{ lineHeight: 1, backgroundImage: "url('/top.svg')" }}
    >
      <div
        ref={sectionRef}
        className=" h-screen flex lg:w-[380vw] xl:w-[300vw]  "
      >
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
                Create a stunning portfolio in minutes, not hours.
              </p>
              <div className="flex justify-start items-center">
                <GetStartedBtn title="Build Now" Icon={Zap} />
              </div>
            </div>
          </div>
          {slideContents.map((content, index) => (
            <SlideContent key={index} {...content} />
          ))}
        </div>
      </div>
    </section>
  );
};
