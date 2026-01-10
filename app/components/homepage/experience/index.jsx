// @flow strict
"use client";

import { experiences } from "@/utils/data/experience";
import Image from "next/image";
import { useState } from "react";
import { BsPersonWorkspace } from "react-icons/bs";
import { FiBriefcase, FiMapPin } from "react-icons/fi";
import experience from '../../../assets/lottie/code.json';
import AnimationLottie from "../../helper/animation-lottie";
import GlowCard from "../../helper/glow-card";


function ImageWithFallback({ src, alt, width, height }) {
  const [imgSrc, setImgSrc] = useState(src || '/png/placeholder.png');
  return (
    <Image
      src={imgSrc}
      alt={alt}
      width={width}
      height={height}
      className="object-contain rounded"
      onError={() => setImgSrc('/png/placeholder.png')}
    />
  );
}

function Experience() {
  const [expandedId, setExpandedId] = useState(null);

  return (
      <div id="experience" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">

      <div className="flex justify-center my-6 lg:py-10">
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center gap-3">
            <span className="hidden sm:block h-[1px] w-16 bg-gradient-to-r from-transparent via-violet-500/60 to-transparent" />
            <span className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm md:text-base font-semibold text-white shadow-[0_12px_40px_rgba(0,0,0,0.35)] backdrop-blur flex items-center gap-2">
              <FiBriefcase className="text-violet-400" size={18} />
              Experiences
            </span>
            <span className="hidden sm:block h-[1px] w-16 bg-gradient-to-r from-transparent via-[#16f2b3]/60 to-transparent" />
          </div>
          <p className="text-xs sm:text-sm text-[#c7d2ff]/80 max-w-2xl text-center px-4">
            Building scalable systems, shipping features, and solving complex problems across diverse tech stacks.
          </p>
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="flex justify-center items-start">
            <div className="w-full h-full">
              <AnimationLottie animationPath={experience} />
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-6">
              {
                experiences.map(experience => (
                  <GlowCard key={experience.id} identifier={`experience-${experience.id}`}>
                    {experience.url ? (
                      <a
                        href={experience.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block group"
                        onMouseEnter={() => setExpandedId(experience.id)}
                        onMouseLeave={() => setExpandedId(null)}
                      >
                        <div className="p-5 sm:p-6 relative cursor-pointer bg-gradient-to-br from-[#0d1228]/40 via-[#0b1024]/40 to-[#0a0d1e]/40 rounded-xl border border-white/5 hover:border-violet-500/30 transition-all duration-300">
                          <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-violet-500/5 via-transparent to-[#16f2b3]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          
                          <div className="relative flex items-start gap-4">
                            <div className="flex-shrink-0">
                              {experience.image ? (
                                <div className="h-14 w-14 rounded-xl bg-white/5 border border-white/10 p-2 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
                                  <ImageWithFallback
                                    src={experience.image}
                                    alt={`${experience.company} logo`}
                                    width={40}
                                    height={40}
                                  />
                                </div>
                              ) : (
                                <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-violet-500/20 to-[#16f2b3]/20 border border-violet-500/30 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
                                  <BsPersonWorkspace size={24} className="text-violet-400" />
                                </div>
                              )}
                            </div>
                            
                            <div className="flex-1 min-w-0">
                              <div className="flex items-start justify-between gap-3 mb-2">
                                <h3 className="text-base sm:text-lg font-semibold dark:text-white light:text-gray-900 dark:group-hover:text-violet-300 light:group-hover:text-violet-700 transition-colors">
                                  {experience.title}
                                </h3>
                                <span className="flex-shrink-0 px-2.5 py-1 rounded-full bg-[#16f2b3]/10 border border-[#16f2b3]/20 text-[#16f2b3] text-[11px] uppercase tracking-wider font-medium">
                                  {experience.duration}
                                </span>
                              </div>
                              
                              <p className="text-sm dark:text-[#9eb3ff] light:text-violet-700 mb-1 flex items-center gap-1.5">
                                <FiMapPin size={14} className="text-violet-400" />
                                {experience.company}
                              </p>
                              
                              <div 
                                className="overflow-hidden transition-all duration-500 ease-in-out"
                                style={{
                                  maxHeight: expandedId === experience.id ? '200px' : '0px',
                                  opacity: expandedId === experience.id ? 1 : 0,
                                  marginTop: expandedId === experience.id ? '12px' : '0px'
                                }}
                              >
                                <ul className="space-y-1.5 text-sm text-[#cfd6e8]">
                                  {experience.highlights?.slice(0,5).map((h, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                      <span className="text-violet-400 flex-shrink-0 min-w-fit leading-6">•</span>
                                      <span className="flex-1">{h}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                    ) : (
                      <div 
                        className="p-5 sm:p-6 relative group bg-gradient-to-br from-[#0d1228]/40 via-[#0b1024]/40 to-[#0a0d1e]/40 rounded-xl border border-white/5 hover:border-violet-500/30 transition-all duration-300"
                        onMouseEnter={() => setExpandedId(experience.id)}
                        onMouseLeave={() => setExpandedId(null)}
                      >
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-violet-500/5 via-transparent to-[#16f2b3]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        <div className="relative flex items-start gap-4">
                          <div className="flex-shrink-0">
                            {experience.image ? (
                              <div className="h-14 w-14 rounded-xl bg-white/5 border border-white/10 p-2 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
                                <ImageWithFallback
                                  src={experience.image}
                                  alt={`${experience.company} logo`}
                                  width={40}
                                  height={40}
                                />
                              </div>
                            ) : (
                              <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-violet-500/20 to-[#16f2b3]/20 border border-violet-500/30 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
                                <BsPersonWorkspace size={24} className="text-violet-400" />
                              </div>
                            )}
                          </div>
                          
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between gap-3 mb-2">
                              <h3 className="text-base sm:text-lg font-semibold text-white group-hover:text-violet-300 transition-colors">
                                {experience.title}
                              </h3>
                              <span className="flex-shrink-0 px-2.5 py-1 rounded-full bg-[#16f2b3]/10 border border-[#16f2b3]/20 text-[#16f2b3] text-[11px] uppercase tracking-wider font-medium">
                                {experience.duration}
                              </span>
                            </div>
                            
                            <p className="text-sm text-[#9eb3ff] mb-1 flex items-center gap-1.5">
                              <FiMapPin size={14} className="text-violet-400" />
                              {experience.company}
                            </p>
                            
                            <div 
                              className="overflow-hidden transition-all duration-500 ease-in-out"
                              style={{
                                maxHeight: expandedId === experience.id ? '200px' : '0px',
                                opacity: expandedId === experience.id ? 1 : 0,
                                marginTop: expandedId === experience.id ? '12px' : '0px'
                              }}
                            >
                              <ul className="space-y-1.5 text-sm text-[#cfd6e8]">
                                {experience.highlights?.slice(0,5).map((h, i) => (
                                  <li key={i} className="flex items-start gap-2">
                                    <span className="text-violet-400 flex-shrink-0 min-w-fit leading-6">•</span>
                                    <span className="flex-1">{h}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </GlowCard>
                ))
              }
            </div>
          </div>
        </div>
      </div>
      </div>
  );
}

export default Experience;
