// "use client";

// import { useState, useEffect } from "react";

// export function Footer() {
// const [currentTime, setCurrentTime] = useState("");

// useEffect(() => {
//   const updateTime = () => {
//     const now = new Date();
//     setCurrentTime(
//       now.toLocaleTimeString("en-GB", {
//         hour: "2-digit",
//         minute: "2-digit",
//         second: "2-digit",
//       })
//     );
//   };

//   updateTime();
//   const timer = setInterval(updateTime, 1000);

//   return () => clearInterval(timer);
// }, []);

//   return (
//     <footer className="py-8   text-black">
// <div className="px-3  mx-auto">
//   {/* <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-center mb-8">
//     zapfolio
//   </h1> */}
//   <img
//     className="w-full h-auto "
//     src="/zapfolio-text-logo-background-white.png"
//     alt="Zapfolio Logo"
//   />

//   {/* <img
//     className="w-full h-auto "
//     src="/zapfolio-logo.png"
//     alt="Zapfolio Logo"
//   /> */}
//   <div className="flex flex-col px-6 sm:flex-row justify-between items-center text-xs sm:text-sm">
//     <p className="mb-2 sm:mb-0">© Zapfolio</p>
//     <p className="mb-2 sm:mb-0">Bangalore → {currentTime}</p>
//     <p>hello@zapfolio.com</p>
//   </div>
// </div>
//     </footer>
//   );
// }
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
    <footer className=" text-black py-16 px-6">
      <div className=" flex flex-col">
        <div className="flex px-12 w-full justify-between items-start">
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
              <h3 className="text-lg font-semibold">Other Links</h3>
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

        {/* <div
          className="mt-8 pt-8   flex flex-wrap justify-between items-center"
          style={{
            backgroundImage: "url('/top.svg')",
          }}
        >
          <div className="w-full flex justify-center items-center">
            <img
              className="w-full px-6"
              alt="logo"
              src="zapfolio-text-logo-background-white.png"
            />
          </div>
        </div> */}
        {/* Bottom - Social Media and Legal */}
        <div
          className="mt-8 pt-8   flex flex-wrap justify-between items-center"
          style={{ backgroundImage: "url('/top.svg')" }}
        ></div>

        <div className="px-3  mx-auto">
          <img
            className="w-full h-auto "
            src="/zapfolio-text-logo-background-white.png"
            alt="Zapfolio Logo"
          />

          <div className="flex flex-col px-6 sm:flex-row justify-between items-center text-xs sm:text-sm">
            <p className="mb-2 sm:mb-0">© Zapfolio</p>
            <p className="mb-2 sm:mb-0">Bangalore → {currentTime}</p>
            <p>hello@zapfolio.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
