import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import { newAgeFont } from "@/lib/fonts/font";
import {
  Brain,
  Bot,
  Code,
  LayoutTemplate,
  SquareBottomDashedScissors,
  ChartNoAxesCombined,
  GripVertical,
  Linkedin,
} from "lucide-react";

const FeatureCard = ({
  name,
  Icon,
}: {
  name: string;
  Icon: React.ElementType;
}) => {
  return (
    <figure
      className={cn(
        ` w-[25vw] flex space-x-3 justify-center items-center cursor-pointer overflow-hidden  bg-white  py-3 ${newAgeFont.className}`
      )}
      style={{ backgroundImage: "url('/right.svg')" }}
    >
      <div className="p-3 rounded-xl bg-[#F2F3F2] border">
        <Icon className="h-7 w-8 text-black" />
      </div>
      <span className="text-lg font-semibold">{name}</span>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div
      className="relative mt-16 mb-0 z-10 bg-white flex  w-full flex-col items-center justify-center overflow-hidden  "
      style={{ backgroundImage: "url('/bottom.svg')" }}
    >
      <Marquee
        pauseOnHover
        className="[--duration:60s] border-none  "
        style={{ backgroundImage: "url('/top.svg')" }}
      >
        <FeatureCard name="zappy/ai" Icon={Bot} />
        <FeatureCard name="Linkedin Data Import" Icon={Linkedin} />
        <FeatureCard name="Free Templates" Icon={LayoutTemplate} />
        <FeatureCard name="no-code" Icon={Code} />
        <FeatureCard name="Drag & Drop" Icon={GripVertical} />
        <FeatureCard
          name="Customizable Portfolio"
          Icon={SquareBottomDashedScissors}
        />
        <FeatureCard name="SEO Optimzation" Icon={ChartNoAxesCombined} />
      </Marquee>
    </div>
  );
}
