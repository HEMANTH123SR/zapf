"use client";
import { GetEarlyAccess } from "@/components/GetEarrlyAcess";
import { MarqueeDemo } from "@/components/ScrollingFeatures";
export const HeroSection = () => {
  return (
    <section
      className={`w-full  relative flex  lowercase flex-col items-center justify-center
my-10 sm:my-14 lg:my-16 xl:my-20  px-2`}
    >
      <div className="group p-1 rounded-full hover:border z-10">
        <div className="bg-[#F6F6F8] rounded-full px-4 py-2 border flex space-x-2 items-center justify-center  group-hover:cursor-pointer">
          <img className="h-3 w-3 sm:h-4 sm:w-4" src="/sparkles-black.svg" />
          <span
            className="text-[0.67rem] sm:text-xs md:text-sm"
            style={{
              lineHeight: 1,
            }}
          >
            Your Professional Portfolio in a ZAP!
          </span>
        </div>
      </div>

      {/* hero text */}
      <div className="my-5 sm:my-8 flex flex-col justify-center items-center text-black">
        <h1
          className="text-[2.4rem] hidden sm:block sm:text-[3.8rem] md:text-[4.5rem] lg:text-[5.4rem] xl:text-8xl  text-center px-1.5 sm:px-3 xl:px-14"
          style={{ lineHeight: 1 }}
        >
          Transform LinkedIn to Portfolio in seconds
        </h1>
        <h1
          className="text-[2.4rem] sm:hidden  text-center px-1.5 "
          style={{ lineHeight: 1 }}
        >
          Transform LinkedIn to Portfolio
        </h1>
      </div>

      {/* sub heading */}
      <div className="flex mt-2 mb-3 flex-col  text-sm text-black justify-center items-center">
        <h4
          className="text-xs sm:text-base lg:text-[1.15rem] xl:text-xl"
          style={{ lineHeight: 1 }}
        >
          Add you email address to get early access to Zapfolio
        </h4>
      </div>

      <div className="z-50 flex justify-center  items-center">
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
