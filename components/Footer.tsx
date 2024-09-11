"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FaYoutube, FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";

export const Footer = () => {
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
    <footer className=" text-black pb-6 lg:py-16 sm:px-3 md:px-6 ">
      <div className=" flex flex-col">
        <div className=" hidden xl:flex px-12 w-full justify-between items-start">
          <div className="">
            <div className="flex space-x-1.5 justify-start items-center mb-4 pl-5">
              <div className="h-2 w-2 bg-black rounded-full mb-1"></div>
              <h3 className="text-xl font-semibold">social links</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Link
                href={""}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-[#F2F3F2] border"
              >
                <AiFillInstagram className="h-7 w-8 text-black" />
              </Link>
              <Link
                href={""}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-[#F2F3F2] border"
              >
                <FaLinkedinIn className="h-7 w-8 text-black" />
              </Link>
              <Link
                href={""}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-[#F2F3F2] border"
              >
                <FaTwitter className="h-7 w-8 text-black" />
              </Link>
              <Link
                href={""}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-[#F2F3F2] border"
              >
                <FaYoutube className="h-7 w-8 text-black" />
              </Link>
            </div>
          </div>
          {/* Center - Quick Links */}
          <div className="">
            <div className="flex space-x-1.5 justify-start items-center mb-4 pl-5">
              <div className="h-2 w-2 bg-black rounded-full mb-2"></div>
              <h3 className="text-lg font-semibold">Quick Links</h3>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {[
                "Themes",
                "Dashboard",
                "Pricing",
                "About Us",
                "How It Works",
                "Testimonials",
              ].map((link) => (
                <div
                  key={link}
                  className="flex justify-center items-center w-40"
                >
                  <Link
                    href={`/${link.toLowerCase().replace(" ", "-")}`}
                    className=" transition-colors bg-[#F2F3F2] w-full text-center rounded-2xl border p-2.5"
                  >
                    {link}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className="">
            <div className="flex space-x-1.5 justify-start items-center mb-4 pl-5">
              <div className="h-2 w-2 bg-black rounded-full mb-2"></div>
              <h3 className="text-lg font-semibold">Legals</h3>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {["Privacy Policy", "Terms of Service"].map((link) => (
                <div
                  key={link}
                  className="flex justify-center items-center w-52"
                >
                  <Link
                    href={`/${link.toLowerCase().replace(" ", "-")}`}
                    className=" transition-colors bg-[#F2F3F2] w-full text-center rounded-2xl border p-2.5"
                  >
                    {link}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col px-1.5 w-full justify-center items-center xl:hidden">
          <div className="text-[2.5rem] py-4 sm:text-[3.3rem] md:text-[4.2rem] lg:text-[5.0rem font-semibold sm:hidden  text-center px-2.5 ">
            Quick Links
          </div>
          <div className="flex flex-wrap justify-center items-center gap-3">
            {[
              "Support",
              "Dashboard",
              "Pricing",
              "About Us",
              "How It Works",
              "Testimonials",
              "Privacy Policy",
              "Terms of Service",
            ].map((link) => (
              <div key={link} className="flex  justify-center items-center">
                <Link
                  href={`/${link.toLowerCase().replace(" ", "-")}`}
                  className="text-sm transition-colors bg-[#F2F3F2] w-full text-center rounded-xl border px-3 py-1.5"
                >
                  {link}
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div
          className="mt-8 pt-8   flex flex-wrap justify-between items-center"
          style={{ backgroundImage: "url('/top.svg')" }}
        ></div>

        <div className=" md:px-3   mx-auto">
          <img
            className="w-full h-auto pb-7"
            src="/full-logo.png"
            alt="Zapfolio Logo"
          />

          <div className="flex f px-6 flex-row justify-center md:justify-between  items-center text-xs sm:text-sm">
            <p className="mb-2 hidden md:block">© Zapfolio</p>
            <p className="mb-2 hidden md:block ">Bangalore → {currentTime}</p>
            <p className="flex justify-center items-center">
              support@zapfolio.in
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
