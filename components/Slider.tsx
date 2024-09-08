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
    <section className="overflow-hidden " ref={triggerRef}>
      <div ref={sectionRef} className="flex h-screen w-[240vw]">
        <div className="h-full w-full flex justify-evenly items-center">
          <div className="flex justify-center items-center h-full">
            <div className="flex flex-col space-y-3">
              <span className="text-[#BABBBA]">solution</span>
              <div className="flex flex-col text-6xl text-black">
                <h1 className="font-extrabold">We do things a</h1>
                <h1 className="font-extralight">bit differently</h1>
              </div>
              <p
                className={`text-lg tracking-wide text-black py-2 ${newAgeFontBold.className}`}
              >
                {`Our goal is to be someone we'd want to do business with.`}
              </p>
              <div className="flex justify-start items-center">
                <GetStartedBtn title="get started" Icon={Zap} />
              </div>
            </div>
          </div>
          <div className=" flex h-full justify-center items-center">
            <div className="flex flex-col w-[670px]  p-4">
              <img
                className="w-full  h-96 rounded-2xl  h-auto border-2"
                src="https://cdn.dribbble.com/userupload/15398124/file/original-9d101902a47dbfff7fbb42596d50b922.png?resize=1200x900"
              />
              <div className="flex pl-6 flex-col  text-black">
                <h1 className="text-2xl pt-5 font-semibold capitalize">
                  Choose A Portfolios
                </h1>
                <p className="text-sm font-light capitalize">
                  pick a portfolio among this vast opitions
                </p>
              </div>
            </div>
          </div>
          <div className=" flex h-full justify-center items-center">
            <div className="flex flex-col w-[670px]  p-4">
              <img
                className="w-full h-96 rounded-2xl h-auto border-2"
                src="https://cdn.dribbble.com/userupload/13028668/file/original-a9166bf7c9ca9544813928b26880462c.png?resize=1200x900"
              />
              <div className="flex pl-6 flex-col  text-black">
                <h1 className="text-2xl pt-5 font-semibold capitalize">
                  Customize your portfolio
                </h1>
                <p className="text-sm font-light capitalize">
                  by using our custom portfolio theme you can customize your
                  portfolio
                </p>
              </div>
            </div>
          </div>

          <div className=" flex h-full justify-center items-center">
            <div className="flex flex-col w-[670px]  p-4">
              <img
                className="w-full h-96 rounded-2xl h-auto border-2"
                src="https://cdn.dribbble.com/userupload/6415193/file/original-68117c91bb4a3846a749a5beeb6a4ae2.jpg?resize=1200x900"
              />
              <div className="flex pl-6 flex-col  text-black">
                <h1 className="text-2xl pt-5 font-semibold capitalize">
                  Choose A Resume
                </h1>
                <p className="text-sm font-light capitalize">
                  pick a resume among this vast opitions
                </p>
              </div>
            </div>
          </div>

          <div className=" flex h-full justify-center items-center">
            <div className="flex flex-col w-[670px]  p-4">
              <img
                className="w-full h-96 rounded-2xl h-auto border-2"
                src="https://cdn.dribbble.com/userupload/10809716/file/original-c1ecfd6b32f70a0f795b259516c81628.jpg?resize=1200x900"
              />
              <div className="flex pl-6 flex-col  text-black">
                <h1 className="text-2xl pt-5 font-semibold capitalize">
                  Customize you resume
                </h1>
                <p className="text-sm font-light capitalize">
                  by picking custom resume editor you can customize your resume{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
