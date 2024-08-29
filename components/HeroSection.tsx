import { newAgeFont } from "@/lib/fonts/font";
import { GetStartedBtn } from "@/components/GetStartedBtn";
export const HeroSection = () => {
  return (
    <section
      className={`w-full flex  flex-col items-center justify-center my-20 ${newAgeFont.className}`}
    >
      <div className="group p-1 rounded-full hover:border">
        <div className="bg-[#F6F6F8] rounded-full px-4 py-2 border flex space-x-2 items-center justify-center  group-hover:cursor-pointer">
          <img className="h-4 w-4" src="/sparkles-black.svg" />
          <span className="text-sm">
            Make Your LinkedIn Page a Portfolio Website With One Click
          </span>
        </div>
      </div>

      {/* hero text */}
      <div className="my-8 flex flex-col justify-center items-center text-black">
        <h1 className={` text-8xl text-center`}>LinkedIn Pages</h1>
        <h1 className={`text-8xl text-center`}>into Portfolio Sites</h1>
      </div>
      {/* sub heading */}
      <div className="flex mb-7 flex-col  text-sm text-black justify-center items-center">
        <h4 className="text-xl">
          Create a Professional Portfolio Website from Your LinkedIn and
        </h4>
        <h4 className="text-xl">Get Noticed Instantly</h4>
      </div>
      <div className=" flex justify-center items-center">
        <GetStartedBtn />
      </div>
    </section>
  );
};
