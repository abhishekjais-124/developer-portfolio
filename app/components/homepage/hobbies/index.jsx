// @flow strict
"use client";

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import GlowCard from "../../helper/glow-card";
import { FaPlane, FaMap, FaCamera, FaGamepad } from "react-icons/fa";
import { SiYoutube } from "react-icons/si";
import { useState } from "react";

function HobbiesSection() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const hobbiesContent = [
    {
      id: 1,
      title: "Gaming",
      description: "Playing and exploring latest games in my free time",
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
      description: "Exploring new destinations and experiencing diverse cultures",
      icon: <FaPlane size={40} className="text-blue-500" />,
      gradient: "from-blue-500/20 to-cyan-500/20",
      border: "border-blue-500/50",
      shadow: "shadow-blue-500/20",
      link: null,
      stats: "Always on the go!"
    },
    {
      id: 3,
      title: "Exploring Places",
      description: "Discovering hidden gems and local experiences",
      icon: <FaMap size={40} className="text-emerald-500" />,
      gradient: "from-emerald-500/20 to-teal-500/20",
      border: "border-emerald-500/50",
      shadow: "shadow-emerald-500/20",
      link: null,
      stats: "Wanderlust"
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
      stats: "Visual storytelling"
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

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center">
            <span className="w-24 h-[2px] bg-[#1a1443]"></span>
            <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
              Interests & Hobbies
            </span>
            <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          </div>
          <button
            onClick={() => setSelectedVideo("2SM-cJ_SbHg")}
            className="hover:scale-110 transition-transform duration-300"
            title="Watch on YouTube"
          >
            <SiYoutube size={32} className="text-red-500 hover:text-red-400" />
          </button>
        </div>
      </div>

      <div className="relative py-10 lg:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-center text-gray-300 text-sm lg:text-base mb-12 max-w-3xl mx-auto">
            Beyond coding, I love exploring new places, traveling around the world, and sharing my tech journey through content creation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hobbiesContent.map((item) => (
              <GlowCard key={item.id} identifier={`hobby-${item.id}`}>
                <div className="h-full">
                  {item.link ? (
                    <Link href={item.link} target="_blank" rel="noopener noreferrer" className="block h-full">
                      <div className={`p-6 rounded-lg bg-gradient-to-br ${item.gradient} border ${item.border} shadow-lg ${item.shadow} h-full flex flex-col justify-between hover:shadow-2xl transition-all duration-300 cursor-pointer`}>
                        <div>
                          <div className="flex justify-center mb-4">
                            {item.icon}
                          </div>
                          <h3 className="text-lg font-semibold text-center text-white mb-3">
                            {item.title}
                          </h3>
                          <p className="text-sm text-gray-300 text-center mb-4">
                            {item.description}
                          </p>
                        </div>
                        <div className="text-center">
                          <p className="text-[#16f2b3] font-semibold">
                            {item.stats}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ) : (
                    <div className={`p-6 rounded-lg bg-gradient-to-br ${item.gradient} border ${item.border} shadow-lg ${item.shadow} h-full flex flex-col justify-between hover:shadow-2xl transition-all duration-300`}>
                      <div>
                        <div className="flex justify-center mb-4">
                          {item.icon}
                        </div>
                        <h3 className="text-lg font-semibold text-center text-white mb-3">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-300 text-center mb-4">
                          {item.description}
                        </p>
                      </div>
                      <div className="text-center">
                        <p className="text-[#16f2b3] font-semibold">
                          {item.stats}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </GlowCard>
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
