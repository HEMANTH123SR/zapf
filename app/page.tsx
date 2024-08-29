import { Nav } from "@/components/Nav";
import { HeroSection } from "@/components/HeroSection";
import { SliderSection } from "@/components/Slider";
export default function Home() {
  return (
    <main className="h-full text-black  flex flex-col w-screen px-5 sm:px-7 md:px-10 lg:px-12 xl:px-16">
      <Nav />
      <section
        className="w-full"
        style={{ backgroundImage: "url('/top-left-right.svg')" }}
      >
        <HeroSection />
        <div className="flex justify-between w-full">
          <img className="h-4 w-4 relative -left-2 -bottom-2" src="/star.svg" />
          <img className="h-4 w-4 relative -right-2 -bottom-2" src="/star.svg" />
        </div>
        <SliderSection />
      </section>
    </main>
  );
}
