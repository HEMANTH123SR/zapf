"use client";
import React, { useState } from "react";

export const GetEarlyAccess = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Email submitted:", email);
  };

  return (
    <div className="lowercase  p-1 rounded-full border z-50 bg-white bg-opacity-65 ">
      <div className="rounded-full  flex justify-center items-center h-11 sm:h-12 xl:h-16 pl-3 sm:pl-7 p-1.5 border     group-hover:cursor-pointer">
        <input
          type="email"
          placeholder="your email address"
          className="sm:min-w-[200px] md:min-w-[400px]  outline-none font-extralight
          text-sm
          sm:text-base md:text-lg text-[#373636] h-auto  "
        />
        <button className="px-4 py-2 xl:py-2.5 min-w-24  opacity-95 rounded-full   bg-[#2C2B2B] text-white text-sm sm:text-base">
          <span className="md:hidden">start now</span>
          <span className="hidden md:block">Join the Waitlist</span>
        </button>
      </div>
    </div>
  );
};
