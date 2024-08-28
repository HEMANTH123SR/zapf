import { newAgeFont } from "@/lib/fonts/font";
import {AnimatedQuoteButton} from "@/components/GetStartedBtn"
export const HeroSection = () => {
  return (
    <section className="w-full flex  flex-col items-center justify-center my-20">
      <div className="group p-1 rounded-full hover:border">
        <div className="bg-[#F6F6F8] rounded-full px-4 py-2 border flex space-x-2 items-center justify-center  group-hover:cursor-pointer">
          <img className="h-4 w-4" src="/sparkles-black.svg" />
          <span className="text-sm">
            Make Your LinkedIn Page a Portfolio Website With One Click
          </span>
        </div>
      </div>

      {/* hero text */}
      <div className="my-7 flex flex-col justify-center items-center text-black">
        <h1 className={`${newAgeFont.className} text-8xl text-center`}>
          LinkedIn Pages
        </h1>
        <h1 className={`${newAgeFont.className} text-8xl text-center`}>
          into Portfolio Sites
        </h1>
      </div>
      <div className="my-5 flex justify-center items-center">
        <AnimatedQuoteButton/>
      </div>
    </section>
  );
};
