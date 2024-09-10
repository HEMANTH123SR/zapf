"use client";
import { newAgeFontBold } from "@/lib/fonts/font";
import { GetStartedSmallBtn } from "@/components/GetStartedBtn";
import { Zap } from "lucide-react";
export const SmallScreenFeatureSlider = () => {
  return (
    <div
      className="flex flex-col w-full justify-center items-center lg:hidden py-10 px-3"
      style={{ lineHeight: 1 }}
    >
      <div className="flex flex-col  sm:space-y-1.5">
        <span className="text-[#BABBBA] text-sm">features</span>
        <h1 className="font-extrabold text-[2.2rem] sm:text-[2.7rem] md:text-[3.4rem] text-black">
          Your Portfolio, Your Way
        </h1>
        <p
          className={`text-sm md:text-lg tracking-wide text-black py-2 ${newAgeFontBold.className}`}
        >
          Create a stunning portfolio in minutes, not hours.
        </p>
        <div className="flex justify-start items-center">
          <GetStartedSmallBtn title="Build Now" Icon={Zap} />
        </div>
      </div>
    </div>
  );
};
