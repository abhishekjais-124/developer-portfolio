// @flow strict
"use client";

import { achievements } from "@/utils/data/achievements";
import Image from "next/image";
import { FiAward, FiStar } from "react-icons/fi";
import GlowCard from "../../helper/glow-card";

function Achievements() {
  return (
    <div id="achievements" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">

      <div className="flex justify-center my-6 lg:py-10">
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center gap-3">
            <span className="hidden sm:block h-[1px] w-16 bg-gradient-to-r from-transparent via-pink-500/60 to-transparent" />
            <span className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm md:text-base font-semibold text-white shadow-[0_12px_40px_rgba(0,0,0,0.35)] backdrop-blur flex items-center gap-2">
              <FiAward className="text-pink-400" size={18} />
              Achievements
            </span>
            <span className="hidden sm:block h-[1px] w-16 bg-gradient-to-r from-transparent via-[#16f2b3]/60 to-transparent" />
          </div>
          <p className="text-xs sm:text-sm text-[#c7d2ff]/80 max-w-2xl text-center px-4">
            Milestones and recognitions from building products, competing, and contributing to the community.
          </p>
        </div>
      </div>

      <div className="relative py-10 lg:py-16">
        <div className="absolute inset-0 pointer-events-none opacity-30" style={{backgroundImage:"radial-gradient(circle at 20% 30%, rgba(236,72,153,0.2) 0, transparent 32%), radial-gradient(circle at 80% 50%, rgba(34,211,238,0.2) 0, transparent 30%)"}} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-7 max-w-7xl mx-auto px-4">
          {achievements.map((item) => (
            <GlowCard key={item.id} identifier={`achievement-${item.id}`} className="h-full">
              <div className="relative p-6 sm:p-7 rounded-xl bg-gradient-to-br from-[#0d1228]/60 via-[#0b1024]/60 to-[#0a0d1e]/60 backdrop-blur-sm border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.35)] h-full flex flex-col gap-4 group overflow-hidden min-h-[420px]">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-amber-300/10 to-cyan-400/10 opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
                <div className="absolute -top-16 -right-16 h-32 w-32 rounded-full bg-pink-500/20 blur-3xl group-hover:bg-pink-500/30 transition-all duration-700" />
                <div className="absolute -bottom-12 -left-12 h-28 w-28 rounded-full bg-cyan-400/20 blur-3xl group-hover:bg-cyan-400/30 transition-all duration-700" />

                <div className="relative z-10 flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-pink-500 via-amber-300 to-cyan-400 shadow-[0_0_0_4px_rgba(20,17,38,0.85)] flex items-center justify-center text-gray-900 font-bold relative p-2">
                    <span className="text-xs font-semibold leading-none">{item.year}</span>
                    <FiAward className="absolute -bottom-2 -right-2 text-[#0b0520] drop-shadow" size={16} />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-xs uppercase tracking-[0.14em] text-[#16f2b3]">Milestone</p>
                    <p className="text-lg font-semibold dark:text-white light:text-gray-900 dark:group-hover:text-pink-200 light:group-hover:text-pink-700 transition-colors">{item.title}</p>
                  </div>
                </div>

                <p className="relative z-10 text-sm dark:text-[#cfd6e8] light:text-gray-700 leading-relaxed flex-1">
                  {item.description}
                </p>

                <div className="relative z-10 flex items-center gap-2 text-xs dark:text-[#e2e8ff] light:text-gray-800 uppercase tracking-[0.16em] mt-auto pt-2 border-t border-white/5">
                  <FiStar size={14} className="text-amber-300" />
                   <span>{item.tag || "Recognized Achievement"}</span>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;
