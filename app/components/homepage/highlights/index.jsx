// @flow strict
"use client";

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import GlowCard from "../../helper/glow-card";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";
import { FiTrendingUp } from "react-icons/fi";

function Highlights() {
  const highlights = [
    {
      id: 1,
      title: "LinkedIn Followers",
      value: personalData.linkedinFollowers,
      description: "Professional network & influence",
      icon: <BsLinkedin size={32} className="text-pink-500" />,
      gradient: "from-pink-500/20 to-[#16f2b3]/20",
      border: "border-pink-500/50",
      shadow: "shadow-pink-500/20"
    },
    {
      id: 2,
      title: "GitHub Repositories",
      value: personalData.githubRepositories,
      description: "Open source & project portfolio",
      icon: <BsGithub size={32} className="text-cyan-400" />,
      gradient: "from-cyan-500/20 to-pink-500/20",
      border: "border-cyan-500/50",
      shadow: "shadow-cyan-500/20"
    },
    {
      id: 3,
      title: "Problems Solved",
      value: "2000+",
      description: "LeetCode & coding challenges",
      icon: <SiLeetcode size={32} className="text-purple-500" />,
      gradient: "from-purple-500/20 to-pink-500/20",
      border: "border-purple-500/50",
      shadow: "shadow-purple-500/20"
    }
  ];

  return (
    <div id="highlights" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]" suppressHydrationWarning>

      <div className="flex justify-center my-6 lg:py-10">
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center gap-3">
            <span className="hidden sm:block h-[1px] w-16 bg-gradient-to-r from-transparent via-pink-500/60 to-transparent" />
            <span className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm md:text-base font-semibold text-white shadow-[0_12px_40px_rgba(0,0,0,0.35)] backdrop-blur flex items-center gap-2">
              <FiTrendingUp className="text-pink-400" size={18} />
              Highlights
            </span>
            <span className="hidden sm:block h-[1px] w-16 bg-gradient-to-r from-transparent via-[#16f2b3]/60 to-transparent" />
          </div>
          <p className="text-xs sm:text-sm text-[#c7d2ff]/80 max-w-2xl text-center px-4">
            Key metrics and achievements that reflect my technical journey and community impact.
          </p>
        </div>
      </div>

      <div className="relative py-10 lg:py-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {highlights.map((item) => (
              <GlowCard key={item.id} identifier={`highlight-${item.id}`} className="h-full">
                <div className={`relative p-6 lg:p-8 rounded-xl bg-gradient-to-br from-[#0d1228]/60 via-[#0b1024]/60 to-[#0a0d1e]/60 backdrop-blur-sm border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.35)] h-full flex flex-col justify-between group hover:border-${item.border.split('-')[1]}/30 transition-all duration-500 overflow-hidden`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-30 group-hover:opacity-50 transition-opacity duration-500`} />
                  <div className="absolute -top-16 -right-16 h-32 w-32 rounded-full bg-${item.shadow.split('-')[1]}/20 blur-3xl group-hover:bg-${item.shadow.split('-')[1]}/30 transition-all duration-700" />
                  
                  <div className="relative z-10 flex items-start justify-between mb-6">
                    <div className="flex-1">
                      <p className="text-xs text-gray-300 uppercase tracking-[0.14em] mb-3 font-medium">
                        {item.title}
                      </p>
                      <p className="text-4xl lg:text-5xl font-bold text-white mb-2 group-hover:scale-105 transition-transform duration-300">
                        {item.value}
                      </p>
                    </div>
                    <div className="flex-shrink-0 p-3 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300">
                      {item.icon}
                    </div>
                  </div>
                  
                  <p className="relative z-10 text-sm text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </GlowCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Highlights;
