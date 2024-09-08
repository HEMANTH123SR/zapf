import { HeroSection } from "@/components/HeroSection";
import { SliderSection } from "@/components/Slider";
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";
import { cn } from "@/lib/utils";
import { ExampleSection } from "@/components/ExampleSection";
import { CtaWithPreviewCards } from "@/components/CtaWithPreviewCards";
import { Faq } from "@/components/Faq";

export default function Home() {
  return (
    <main className="flex flex-col">
      <section
        className="w-full"
        style={{ backgroundImage: "url('/top-left-right.svg')" }}
      >
        <HeroSection />
        <div className="flex justify-between w-full">
          <img className="h-4 w-4 relative -left-2 -bottom-2" src="/star.svg" />
          <img
            className="h-4 w-4 relative -right-2 -bottom-2"
            src="/star.svg"
          />
        </div>
        <SliderSection />
      </section>
      <AnimatedGridPattern
        numSquares={100}
        maxOpacity={0.4}
        duration={3}
        repeatDelay={0}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
        )}
      />
      <section
        className="w-full"
        style={{ backgroundImage: "url('/top-left-right.svg')" }}
      >
        <div className="flex justify-between w-full">
          <img className="h-4 w-4 relative -left-2 bottom-2" src="/star.svg" />
          <img className="h-4 w-4 relative -right-2 bottom-2" src="/star.svg" />
        </div>
        <ExampleSection />
      </section>
      <section
        className="w-full"
        style={{ backgroundImage: "url('/top-left-right.svg')" }}
      >
        <div className="flex justify-between w-full">
          <img className="h-4 w-4 relative -left-2 bottom-2" src="/star.svg" />
          <img className="h-4 w-4 relative -right-2 bottom-2" src="/star.svg" />
        </div>
        <CtaWithPreviewCards />
      </section>
      <section
        className="w-full"
        style={{ backgroundImage: "url('/top-left-right.svg')" }}
      >
        <div className="flex justify-between w-full">
          <img className="h-4 w-4 relative -left-2 bottom-2" src="/star.svg" />
          <img className="h-4 w-4 relative -right-2 bottom-2" src="/star.svg" />
        </div>
        <Faq />
      </section>
    </main>
  );
}
