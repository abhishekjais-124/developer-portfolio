// @flow strict
"use client";

import { achievements } from "@/utils/data/achievements";
import Image from "next/image";
import { FiAward } from "react-icons/fi";
import GlowCard from "../../helper/glow-card";

function Achievements() {
  return (
    <div id="achievements" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <Image
        src="/section.svg"
        alt="Section background"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Achievements
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="relative py-10 lg:py-16">
        <div className="absolute left-0 right-0 top-1/2 h-[2px] bg-gradient-to-r from-pink-500 via-amber-300 to-cyan-400 opacity-80" />
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8">
          {achievements.map((item, index) => {
            const offset = index % 2 === 0 ? "lg:-translate-y-6" : "lg:translate-y-6";
            return (
              <div
                key={item.id}
                className={`relative flex flex-col items-center gap-4 text-white ${offset}`}
              >
                <div className="relative flex items-center justify-center">
                  <div className="h-16 w-16 rounded-full bg-gradient-to-br from-pink-500 via-amber-300 to-cyan-400 shadow-[0_0_0_6px_rgba(20,17,38,0.85)] flex items-center justify-center text-gray-900 font-bold relative">
                    <span className="text-base">{item.year}</span>
                    <FiAward className="absolute -bottom-2 -right-2 text-gray-900 drop-shadow" size={18} />
                  </div>
                  <div className="absolute top-1/2 -translate-y-1/2 h-5 w-5 bg-[#0b0520] border border-[#2b2544] rounded-full" />
                </div>

                <GlowCard identifier={`achievement-${item.id}`}>
                  <div className="p-5 sm:p-6">
                    <p className="text-sm tracking-[0.08em] text-[#16f2b3] uppercase text-center">
                      {item.year}
                    </p>
                    <p className="mt-2 text-lg font-semibold text-center">{item.title}</p>
                    <p className="mt-2 text-sm text-[#cfd6e8] leading-relaxed text-center">
                      {item.description}
                    </p>
                  </div>
                </GlowCard>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Achievements;
