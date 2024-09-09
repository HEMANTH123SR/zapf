"use client";

import { useState, useEffect } from "react";

export function Footer() {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="py-8   text-black">
      <div className="px-3  mx-auto">
        {/* <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-center mb-8">
          zapfolio
        </h1> */}
        <img
          className="w-full h-auto "
          src="/zapfolio-text-logo-background-white.png"
          alt="Zapfolio Logo"
        />

        {/* <img
          className="w-full h-auto "
          src="/zapfolio-logo.png"
          alt="Zapfolio Logo"
        /> */}
        <div className="flex flex-col px-6 sm:flex-row justify-between items-center text-xs sm:text-sm">
          <p className="mb-2 sm:mb-0">© Zapfolio</p>
          <p className="mb-2 sm:mb-0">Bangalore → {currentTime}</p>
          <p>hello@zapfolio.com</p>
        </div>
      </div>
    </footer>
  );
}
