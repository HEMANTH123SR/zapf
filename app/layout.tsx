import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { newAgeFont } from "@/lib/fonts/font";

export const metadata: Metadata = {
  title: "zapfolio",
  description: "no-code platform for creating portfolio website and resume",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${newAgeFont.className}  lowercase overflow-x-hidden  h-full text-black  flex flex-col w-screen px-5 sm:px-7 md:px-10 lg:px-12 xl:px-16 xl:pl-12
        
        `}
      >
        <Nav />
        {children}
        <section
          className="w-full"
          style={{ backgroundImage: "url('/top-left-right.svg')" }}
        >
          <div className="flex justify-between w-full">
            <img
              className="h-4 w-4 relative -left-2 bottom-2"
              src="/star.svg"
            />
            <img
              className="h-4 w-4 relative -right-2 bottom-2"
              src="/star.svg"
            />
          </div>
          <Footer />
        </section>
      </body>
    </html>
  );
}
