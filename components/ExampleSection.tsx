import { PortfolioMarquee } from "@/components/infinite-moving-cards";
export const PortfoliosExamplesSection = () => {
  return (
    <div className="w-full py-11 sm:py-16  xl:py-24" style={{ lineHeight: 1 }}>
      <div className="flex flex-col justify-center items-center space-y-6 mb-14">
        <span className="text-sm lg:text-base text-[#C5C5C4] rounded-md px-2.5 py-0.5 border">
          Example
        </span>
        <h3 className="text-[2.8rem] sm:text-[3.8rem] md:text-[4.5rem] lg:text-[5.4rem] xl:text-8xl text-center px-2.5 ">
          Featured Portfolios
        </h3>
        <span className="text-black text-lg px-3 text-center">
          Discover How Others Showcase , Their Portfolio On Zapfolio.
        </span>
      </div>
      <PortfolioMarquee />
    </div>
  );
};
