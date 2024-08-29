import { newAgeFont } from "@/lib/fonts/font";
import { HeroSectionActionButtons } from "@/components/HeroSectionActionButtons";
export const HeroSection = () => {
  return (
    <section
      className={`w-full flex  flex-col items-center justify-center my-20 ${newAgeFont.className}`}
    >
      <div className="group p-1 rounded-full hover:border">
        <div className="bg-[#F6F6F8] rounded-full px-4 py-2 border flex space-x-2 items-center justify-center  group-hover:cursor-pointer">
          <img className="h-4 w-4" src="/sparkles-black.svg" />
          <span className="text-sm">
          One Click Can Turn Your LinkedIn Profile Into Portfolio And Resume!
          </span>
        </div>
      </div>

      {/* hero text */}
      <div className="my-8 flex flex-col justify-center items-center text-black">
        <h1 className="text-8xl text-center">Your Ideal Portfolio and Resume in a ZAP!!</h1>
        {/* <h1 className="text-8xl text-center">Ready in Minutes!</h1> */}
      </div>
      {/* sub heading */}
      <div className="flex mb-7 flex-col  text-sm text-black justify-center items-center">
        <h4 className="text-xl">
          Create a Professional Portfolio Website from Your LinkedIn and
        </h4>
        <h4 className="text-xl">Get Noticed Instantly</h4>
      </div>

      <HeroSectionActionButtons />
    </section>
  );
};
