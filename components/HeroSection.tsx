"use client";
import Particles from "@/components/magicui/particles";
import { newAgeFont } from "@/lib/fonts/font";
import { Zap, File } from "lucide-react";
import { GetStartedBtn } from "@/components/GetStartedBtn";
import { MarqueeDemo } from "@/components/ScrollingFeatures";
export const HeroSection = () => {
  return (
    <section
      className={`w-full  relative flex  flex-col items-center justify-center my-20  ${newAgeFont.className} px-2`}
    >
      <div className="group p-1 rounded-full hover:border z-10">
        <div className="bg-[#F6F6F8] rounded-full px-4 py-2 border flex space-x-2 items-center justify-center  group-hover:cursor-pointer">
          <img className="h-4 w-4" src="/sparkles-black.svg" />
          <span className="text-sm">
            One Click Can Turn Your LinkedIn Profile Into Portfolio And Resume!
          </span>
        </div>
      </div>

      {/* hero text */}
      <div className="my-8 flex flex-col justify-center items-center text-black">
        <h1 className="text-8xl text-center">
          Your Ideal Portfolio and Resume in a ZAP!!
        </h1>
      </div>
      {/* sub heading */}
      <div className="flex mb-7 flex-col  text-sm text-black justify-center items-center">
        <h4 className="text-xl">
          Create a Professional Portfolio Website from Your LinkedIn and
        </h4>
        <h4 className="text-xl">Get Noticed Instantly</h4>
      </div>

      <div className="z-50 flex justify-center space-x-12 items-center">
        <GetStartedBtn title="create your portfolio" Icon={Zap} />
        <GetStartedBtn title="create your resume" Icon={File} />
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
          <source src="/preview_video.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      {/* <Particles
        className="absolute inset-0"
        quantity={500}
        ease={80}
        color={"#000000"}
        refresh
      /> */}

    </section>
  );
};
