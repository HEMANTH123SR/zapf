import { HeroSection } from "@/components/HeroSection";
import { LargeScreenFeatureSlider } from "@/components/LargeScreenFeatureSlider";
import { PortfoliosExamplesSection } from "@/components/ExampleSection";
import { CtaWithPreviewCards } from "@/components/CtaWithPreviewCards";
import { Faq } from "@/components/Faq";
import { SmallScreenFeatureSlider } from "@/components/SmallScreenFeatureSlider";

export default function Home() {
  return (
    <main className="flex flex-col">
      {/* containes hero section and feature slider */}
      <section
        className="w-full"
        style={{ backgroundImage: "url('/top-left-right.svg')" }}
      >
        <HeroSection />
        <div className="flex justify-between w-full">
          <img
            className="h-4 w-4 relative -left-2 -bottom-2 z-20"
            src="/star.svg"
          />
          <img
            className="h-4 w-4 relative -right-2 -bottom-2 z-20"
            src="/star.svg"
          />
        </div>
        <SmallScreenFeatureSlider />
        <LargeScreenFeatureSlider />
      </section>
      {/* contains example section */}
      <section
        className="w-full"
        style={{ backgroundImage: "url('/top-left-right.svg')" }}
      >
        <div className="flex justify-between w-full">
          <img className="h-4 w-4 relative -left-2 bottom-2" src="/star.svg" />
          <img className="h-4 w-4 relative -right-2 bottom-2" src="/star.svg" />
        </div>
        <PortfoliosExamplesSection />
      </section>
      {/* cta section with portfolio demons  */}
      <section
        className="w-full hidden md:block"
        style={{ backgroundImage: "url('/top-left-right.svg')" }}
      >
        <div className="flex justify-between w-full">
          <img className="h-4 w-4 relative -left-2 bottom-2" src="/star.svg" />
          <img className="h-4 w-4 relative -right-2 bottom-2" src="/star.svg" />
        </div>
        <CtaWithPreviewCards />
      </section>
      {/* faq section */}
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
