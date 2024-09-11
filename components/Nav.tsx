"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

const getDaysRemaining = (targetDate: any) => {
  const today = new Date();
  const timeDifference = new Date(targetDate).getTime() - today.getTime();
  const daysRemaining = Math.ceil(timeDifference / (1000 * 3600 * 24));
  return daysRemaining > 0 ? daysRemaining : 0; // Return 0 if the date has passed
};

export const Nav = () => {
  const [daysRemaining, setDaysRemaining] = useState(21);
  useEffect(() => {
    // Target date (20 days from today)
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 20);

    // Update days remaining
    const intervalId = setInterval(() => {
      setDaysRemaining(getDaysRemaining(targetDate));
    }, 1000 * 60 * 60 * 24); // Update every day

    // Cleanup interval
    return () => clearInterval(intervalId);
  }, []);
  return (
    <header
      className="w-full z-10 flex justify-between items-center custom-dashed-border px-3 lg:px-14 py-3 lg:py-5 bg-white text-[1.1rem]"
      style={{
        backgroundImage: "url('/left-right.svg')",
        fontWeight: "500",
        lineHeight: 1,
      }}
    >
      <nav className="flex space-x-9 items-center text-black ">
        <Link href={"/"} className="flex items-center justify-center mr-4 ">
          <img
            className="h-[2.4rem] sm:h-10 lg:h-14  w-auto  "
            src="/full-logo.png"
          />
        </Link>

        <Link href={"/"} className="lg:block hidden ">
          Themes
        </Link>
        <Link href={"/"} className="lg:block hidden">
          Dashboard
        </Link>

        <Link href={"/"} className="lg:block hidden">
          Pricing
        </Link>
      </nav>
      <div className="flex space-x-8 items-center">
        <Link
          href={""}
          className="border text-sm sm:text-base lowercase text-black  px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg lg:hidden "
        >
          launch: {daysRemaining}d
        </Link>
        <Link
          href={"/themes"}
          className="bg-black text-white px-4 py-2.5 rounded-lg lg:block hidden"
        >
          launching in {daysRemaining}d
        </Link>
      </div>
    </header>
  );
};
