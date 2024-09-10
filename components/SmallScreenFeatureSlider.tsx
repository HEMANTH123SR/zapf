"use client";
import { newAgeFontBold } from "@/lib/fonts/font";
import Link from "next/link";

interface SlideContentProps {
  title: string;
  description: string;
  imgAlt: string;
}

export const SmallScreenFeatureSlider = () => {
  const slideContents: SlideContentProps[] = [
    {
      title: "Choose Your Style",
      description: "Select from a variety of professional templates",
      imgAlt: "Various portfolio templates",
    },
    {
      title: "Import from LinkedIn",
      description:
        "Instantly populate your portfolio with your LinkedIn profile",
      imgAlt: "LinkedIn profile import",
    },
    {
      title: "Meet Zappy AI",
      description: "Let our AI assistant help craft your perfect portfolio",
      imgAlt: "AI-powered portfolio assistant",
    },
  ];
  return (
    <div
      className="flex flex-col w-full justify-center items-center lg:hidden py-10 px-3"
      style={{ lineHeight: 1, backgroundImage: "url('/top.svg')" }}
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
          <Link
            href={"/themes"}
            className="bg-black text-white px-4 py-2.5 rounded-lg"
          >
            Get Started
          </Link>
        </div>
      </div>
      <div
        className="flex mt-8 w-full flex-col justify-center items-center 
space-y-8
        sm:space-y-12
        md:space-y-16

     "
      >
        {slideContents.map((content, index) => (
          <SlideContent {...content} key={index} />
        ))}
      </div>
    </div>
  );
};

const SlideContent = ({
  title,
  description,
  imgAlt,
}: {
  title: string;
  description: string;
  imgAlt: string;
}) => {
  return (
    <div
      className="flex w-11/12 sm:w-10/12  md:w-9/12 justify-center items-center m-4 cursor-pointer"
      style={{ lineHeight: 1 }}
    >
      <div className="flex flex-col w-full ">
        <div className="w-full h-64 sm:h-72 md:h-72 rounded-2xl bg-[#EFEFEE] border" />
        <div className="flex pl-6 flex-col text-black">
          <h2 className="text-[1.2rem] sm:text-[1.5rem] md:text-[1.6rem] pt-4 md:pt-4 font-semibold capitalize">
            {title}
          </h2>
          <p className="text-xs md:text-sm font-light capitalize">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
