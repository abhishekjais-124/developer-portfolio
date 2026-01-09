// @flow strict
"use client";

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import GlowCard from "../../helper/glow-card";
import { FaPlane, FaMap, FaCamera, FaGamepad } from "react-icons/fa";
import { SiYoutube } from "react-icons/si";
import { FiHeart } from "react-icons/fi";
import { useState } from "react";

function HobbiesSection() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const hobbiesContent = [
    {
      id: 1,
      title: "Gaming",
      description: "Playing, watching, and exploring latest games in my free time",
      icon: <FaGamepad size={40} className="text-orange-500" />,
      gradient: "from-orange-500/20 to-pink-500/20",
      border: "border-orange-500/50",
      shadow: "shadow-orange-500/20",
      link: null,
      stats: "Let's play!"
    },
    {
      id: 2,
      title: "Travelling",
      description: "Exploring new places and experiencing diverse cultures",
      icon: <FaPlane size={40} className="text-blue-500" />,
      gradient: "from-blue-500/20 to-cyan-500/20",
      border: "border-blue-500/50",
      shadow: "shadow-blue-500/20",
      link: null,
      stats: "Let's travel!"
    },
    {
      id: 3,
      title: "Exploring",
      description: "Discovering hidden gems, unique spots, and local experiences",
      icon: <FaMap size={40} className="text-emerald-500" />,
      gradient: "from-emerald-500/20 to-teal-500/20",
      border: "border-emerald-500/50",
      shadow: "shadow-emerald-500/20",
      link: null,
      stats: "Let's explore!"
    },
    {
      id: 4,
      title: "Photography",
      description: "Capturing moments and beautiful memories from travels",
      icon: <FaCamera size={40} className="text-purple-500" />,
      gradient: "from-purple-500/20 to-pink-500/20",
      border: "border-purple-500/50",
      shadow: "shadow-purple-500/20",
      link: null,
      stats: "Let's capture!"
    }
  ];

  const VideoModal = ({ videoId, onClose }) => {
    return (
      <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4" onClick={onClose}>
        <div className="w-full max-w-4xl aspect-video rounded-lg overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    );
  };

  return (
    <div id="hobbies" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <Image
        src="/section.svg"
        alt="Section background"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />

      <div className="flex justify-center my-6 lg:py-10">
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center gap-3">
            <span className="hidden sm:block h-[1px] w-16 bg-gradient-to-r from-transparent via-pink-500/60 to-transparent" />
            <span className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm md:text-base font-semibold text-white shadow-[0_12px_40px_rgba(0,0,0,0.35)] backdrop-blur flex items-center gap-2">
              <FiHeart className="text-pink-400" size={18} />
              Interests & Hobbies
            </span>
            <span className="hidden sm:block h-[1px] w-16 bg-gradient-to-r from-transparent via-[#16f2b3]/60 to-transparent" />
          </div>
          <button
            onClick={() => setSelectedVideo("2SM-cJ_SbHg")}
            className="hover:scale-110 transition-transform duration-300 p-2 rounded-full hover:bg-red-500/10"
            title="Watch on YouTube"
          >
            <SiYoutube size={28} className="text-red-500 hover:text-red-400" />
          </button>
        </div>
      </div>

      <div className="relative py-10 lg:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-center text-gray-300 text-sm lg:text-base mb-12 max-w-3xl mx-auto">
            Beyond coding, I love exploring new places, traveling around the world, and sharing my tech journey through content creation.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hobbiesContent.map((item, index) => (
              <div key={item.id} className={index === hobbiesContent.length - 1 && hobbiesContent.length % 2 === 1 ? "col-span-2 md:col-span-1" : ""}>
                <GlowCard identifier={`hobby-${item.id}`} className="h-full">
                <div className="h-full">
                  {item.link ? (
                    <Link href={item.link} target="_blank" rel="noopener noreferrer" className="block h-full">
                      <div className={`relative p-6 rounded-xl bg-gradient-to-br from-[#0d1228]/60 via-[#0b1024]/60 to-[#0a0d1e]/60 backdrop-blur-sm border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.35)] h-full min-h-[340px] flex flex-col justify-between group hover:border-white/20 transition-all duration-500 overflow-hidden cursor-pointer`}>
                        <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-30 group-hover:opacity-50 transition-opacity duration-500`} />
                        <div className="absolute -top-12 -right-12 h-24 w-24 rounded-full bg-gradient-to-br from-pink-500/20 to-purple-600/20 blur-2xl group-hover:blur-3xl transition-all duration-700" />
                        
                        <div className="relative z-10">
                          <div className="flex justify-center mb-4">
                            <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300">
                              {item.icon}
                            </div>
                          </div>
                          <h3 className="text-lg font-semibold text-center text-white mb-3 group-hover:text-pink-300 transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-sm text-gray-300 text-center leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                        <div className="relative z-10 text-center mt-4">
                          <p className="text-[#16f2b3] font-semibold text-sm group-hover:text-[#5cf8d1] transition-colors">
                            {item.stats}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ) : (
                    <div className={`relative p-6 rounded-xl bg-gradient-to-br from-[#0d1228]/60 via-[#0b1024]/60 to-[#0a0d1e]/60 backdrop-blur-sm border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.35)] h-full min-h-[340px] flex flex-col justify-between group hover:border-white/20 transition-all duration-500 overflow-hidden`}>
                      <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-30 group-hover:opacity-50 transition-opacity duration-500`} />
                      <div className="absolute -top-12 -right-12 h-24 w-24 rounded-full bg-gradient-to-br from-pink-500/20 to-purple-600/20 blur-2xl group-hover:blur-3xl transition-all duration-700" />
                      
                      <div className="relative z-10">
                        <div className="flex justify-center mb-4">
                          <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300">
                            {item.icon}
                          </div>
                        </div>
                        <h3 className="text-lg font-semibold text-center text-white mb-3 group-hover:text-pink-300 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-300 text-center leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                      <div className="relative z-10 text-center mt-4">
                        <p className="text-[#16f2b3] font-semibold text-sm group-hover:text-[#5cf8d1] transition-colors">
                          {item.stats}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </GlowCard>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedVideo && (
        <VideoModal videoId={selectedVideo} onClose={() => setSelectedVideo(null)} />
      )}
    </div>
  );
}

export default HobbiesSection;
