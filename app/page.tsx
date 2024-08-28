import { Nav } from "@/components/Nav";
import {HeroSection} from "@/components/HeroSection"
export default function Home() {
  return (
    <main className="h-full text-black  flex flex-col w-screen px-5 sm:px-7 md:px-10 lg:px-12 xl:px-16">
      <Nav />
      <section
        className="w-full"
        style={{ backgroundImage: "url('/top-left-right.svg')" }}
      >
<HeroSection/>
      </section>
   
    </main>
  );
}
