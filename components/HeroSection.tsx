"use client";

import { newAgeFont } from "@/lib/fonts/font";
import { Zap, File, Accessibility } from "lucide-react";
import { GetStartedBtn } from "@/components/GetStartedBtn";
import { GetEarlyAccess } from "@/components/GetEarrlyAcess";
import { MarqueeDemo } from "@/components/ScrollingFeatures";
export const HeroSection = () => {
  return (
    <section
      className={`w-full  relative flex  lowercase flex-col items-center justify-center my-20  ${newAgeFont.className} px-2`}
    >
      <div className="group p-1 rounded-full hover:border z-10">
        <div className="bg-[#F6F6F8] rounded-full px-4 py-2 border flex space-x-2 items-center justify-center  group-hover:cursor-pointer">
          <img className="h-4 w-4" src="/sparkles-black.svg" />
          <span className="text-sm">Your Professional Portfolio in a ZAP!</span>
        </div>
      </div>

      {/* hero text */}
      <div className="my-8 flex flex-col justify-center items-center text-black">
        <h1 className="text-8xl text-center px-14">
          Transform LinkedIn to Portfolio in Seconds{" "}
        </h1>
      </div>
      {/* sub heading */}
      <div className="flex mt-2 mb-3 flex-col  text-sm text-black justify-center items-center">
        <h4 className="text-xl">
          Add you email address to get early access to Zapfolio
        </h4>
      </div>

      <div className="z-50 flex justify-center space-x-12 items-center">
        <GetEarlyAccess />
      </div>

      <MarqueeDemo />
      <div className="flex  justify-between w-full">
        <img className="h-4 w-4 relative -left-4 -top-2" src="/star.svg" />
        <img className="h-4 w-4 relative -right-4 -top-2" src="/star.svg" />
      </div>
      <div className="relative z-50 w-screen flex justify-center items-center">
        <video
          className="mt-24  -bottom-1/2 border rounded-2xl w-[95vw] h-auto max-h-[80vh]   object-cover object-top"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/default-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};
