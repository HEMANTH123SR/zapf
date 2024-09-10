import Link from "next/link";
import { Equal } from "lucide-react";

export const Nav = () => {
  return (
    <header
      className="w-full z-10 flex justify-between items-center custom-dashed-border px-7 lg:px-14 py-3 lg:py-5 bg-white "
      style={{ backgroundImage: "url('/left-right.svg')", fontWeight: "500" }}
    >
      <nav className="flex space-x-9 items-center text-black ">
        <Link href={"/"} className="flex items-center justify-center ">
          <img className="h-14 sm:h-16 w-auto  " src="/zapfolio-logo.png" />
        </Link>

        <Link href={"/"} className="lg:block hidden">
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
        <div className=" justify-center items-center space-x-2 hidden lg:flex">
          <div className="relative flex items-center justify-center w-2 h-2">
            <div className="absolute h-2 w-2 bg-black rounded-full"></div>
            <div className="absolute h-2 w-2 bg-black rounded-full animate-ping"></div>
            <div className="absolute h-2 w-2 bg-black opacity-75 rounded-full animate-pulse"></div>
          </div>
          <Link href={"/sign-in"}>Sign In</Link>
        </div>
        {/* <div className=" lg:hidden">
          <Equal
            className="h-7 w-7 sm:h-8 sm:w-8 cursor-pointer text-[#2C2B2B] "
            strokeWidth={2.5}
          />
        </div> */}
        <Link
          href={""}
          className="border  lowercase text-black px-4 py-2 rounded-lg lg:hidden "
        >
          Sign In
        </Link>
        <Link
          href={"/themes"}
          className="bg-black text-white px-4 py-2 rounded-lg lg:block hidden"
        >
          Get Started
        </Link>
      </div>
    </header>
  );
};
