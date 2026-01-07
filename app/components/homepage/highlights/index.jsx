// @flow strict
"use client";

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import GlowCard from "../../helper/glow-card";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";

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
    <div id="highlights" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
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
            Highlights
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="relative py-10 lg:py-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6">
            {highlights.map((item) => (
              <GlowCard key={item.id} identifier={`highlight-${item.id}`}>
                <div className={`p-6 rounded-lg bg-gradient-to-br ${item.gradient} border ${item.border} shadow-lg ${item.shadow} h-full flex flex-col justify-between`}>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <p className="text-sm text-gray-300 uppercase tracking-wider mb-2">
                        {item.title}
                      </p>
                      <p className="text-4xl font-bold text-white mb-2">
                        {item.value}
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      {item.icon}
                    </div>
                  </div>
                  <p className="text-sm text-gray-400">
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
