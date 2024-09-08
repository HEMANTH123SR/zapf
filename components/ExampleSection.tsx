import { InfiniteMovingCards } from "@/components/infinite-moving-cards";
export const ExampleSection = () => {
  return (
    <div className="w-full h-[900px] py-24">
      <div className="flex flex-col justify-center items-center space-y-6 mb-14">
        <span className=" text-[#C5C5C4]">Example</span>
        <h3 className="text-black text-5xl  max-w-4xl text-center">
          Discover How Others Showcase Their Professional Journey On Zapfolio.
        </h3>
      </div>
      <InfiniteMovingCards />
    </div>
  );
};
