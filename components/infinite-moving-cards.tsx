import React from "react";
import Marquee from "@/components/magicui/marquee";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
const PortfolioExamples = [
  {
    img: "/examples/perryw.png",
    themeName: "perryw",
    audienceFit: ["entrepreneurs", "student", "lorem"],
  },
  {
    img: "/examples/pacolui.png",
    themeName: "pacolui",
    audienceFit: ["entrepreneurs", "student", "lorem"],
  },
  {
    img: "/examples/nico.png",
    themeName: "nico",
    audienceFit: ["entrepreneurs", "student", "lorem"],
  },
  {
    img: "/examples/juul.png",
    themeName: "juul",
    audienceFit: ["entrepreneurs", "student", "lorem"],
  },
  {
    img: "/examples/dillion.png",
    themeName: "dillion",
    audienceFit: ["entrepreneurs", "student", "lorem"],
  },
  {
    img: "/examples/albert.png",
    themeName: "albert",
    audienceFit: ["entrepreneurs", "student", "lorem"],
  },
];

const PortfolioCard = ({
  img,
  themeName,
  audienceFit,
}: {
  img: string;
  themeName: string;
  audienceFit: string[];
}) => {
  return (
    <Card className="  border-none shadow-none transition-transform duration-300 ">
      <CardContent className="p-4">
        <div className="h-[200px] w-[300px] sm:h-[270px] sm:w-[460px] md:h-[300px] md:w-[490px] lg:h-[320px] lg:w-[520px] xl:h-[350px] xl:w-[550px] rounded-2xl bg-[#EFEFEE] border-2"></div>
      </CardContent>
      <CardFooter className="p-2 pl-7 flex flex-col justify-start items-start">
        <h3 className="text-lg font-bold ">{themeName}</h3>
        <p className="text-sm text-gray-600 ">
          Audience Fit:{" "}
          {audienceFit.map((fit, index) => {
            return (
              <span key={index}>{`${fit} ${
                index !== audienceFit.length - 1 ? "·" : ""
              } `}</span>
            );
          })}
        </p>
      </CardFooter>
    </Card>
  );
};

export function PortfolioMarquee() {
  const halfLength = Math.ceil(PortfolioExamples.length / 2);
  const firstRow = PortfolioExamples.slice(0, halfLength);
  const secondRow = PortfolioExamples.slice(halfLength);

  return (
    <div className="relative flex  pb-6 sm:pb-8 md:pb-10 lg:pb-12 xl:pb-20  w-full flex-col items-center justify-center overflow-hidden ">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((example, index) => (
          <PortfolioCard key={`first-${index}`} {...example} />
        ))}
      </Marquee>
    </div>
  );
}

export default PortfolioMarquee;
