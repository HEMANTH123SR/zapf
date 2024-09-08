"use client";

import React from "react";
import { GetStartedBtnWhite } from "@/components/GetStartedBtn";
import { Zap } from "lucide-react";

export function InfiniteScroll() {
  return (
    <div className="relative w-[95vw] -left-8 h-[500px] rounded-2xl overflow-hidden bg-black text-white">
      {/* Vignette overlay with reduced intensity */}
      <div className="absolute inset-0 z-10 bg-gradient-radial from-transparent via-black/40 to-black/60"></div>

      <div className="absolute inset-0 flex items-center justify-center z-20">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-4">Zapfolio</h1>
          <p className="text-xl mb-6 max-w-2xl">
            Your Ideal Portfolio and Resume in a ZAP!! Create a Professional
            Portfolio Website from Your LinkedIn and
          </p>
          <div className="flex w-full justify-center items-center">
            <GetStartedBtnWhite title="get started" Icon={Zap} />
          </div>
        </div>
      </div>
      <div className="absolute inset-0 opacity-40">
        <div className="grid grid-cols-4 gap-4 animate-scroll p-4">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map((i) => (
            <img
              key={i}
              className="h-auto w-full overflow-hidden"
              src={`/cta/${i}.png`}
              alt={`CTA image ${i}`}
            />
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-33.33%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .bg-gradient-radial {
          background-image: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
    </div>
  );
}
