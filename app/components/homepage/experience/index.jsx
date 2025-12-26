// @flow strict
"use client";

import { experiences } from "@/utils/data/experience";
import Image from "next/image";
import { useState } from "react";
import { BsPersonWorkspace } from "react-icons/bs";
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
  return (
    <div id="experience" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Experiences
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
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
                    {/* Make the card clickable if a url is provided */}
                    {experience.url ? (
                      <a
                        href={experience.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <div className="p-3 relative cursor-pointer">
                          <Image
                            src="/blur-23.svg"
                            alt="Hero"
                            width={1080}
                            height={200}
                            className="absolute bottom-0 opacity-80"
                          />
                          <div className="flex justify-center">
                            <p className="text-xs sm:text-sm text-[#16f2b3]">
                              {experience.duration}
                            </p>
                          </div>
                          <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
                            {experience.image ? (
                              <div className="bg-[#0b0520]/70 rounded-md p-1 flex items-center justify-center shadow-md">
                                <ImageWithFallback
                                  src={experience.image}
                                  alt={`${experience.company} logo`}
                                  width={48}
                                  height={48}
                                />
                              </div>
                            ) : (
                              <div className="text-violet-500 transition-all duration-300">
                                <div className="bg-[#0b0520]/70 rounded-md p-2 flex items-center justify-center shadow-md">
                                  <BsPersonWorkspace size={36} />
                                </div>
                              </div>
                            )}
                          </div>
                          <div className="flex items-center gap-x-8 px-3 py-5">
                            <div>
                              <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                                {experience.title}
                              </p>
                              <p className="text-sm sm:text-base">
                                {experience.company}
                              </p>
                              {/* Hidden highlights, revealed on hover (in-flow) */}
                              <div className="experience-highlights mt-3 overflow-hidden max-h-0 opacity-0 transition-[max-height,opacity,transform] duration-300 ease-out text-sm text-[#cfd6e8]">
                                <ul className="list-disc pl-5 space-y-1">
                                  {experience.highlights?.slice(0,5).map((h, i) => (
                                    <li key={i}>{h}</li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div> 
                        </div>
                      </a>
                    ) : (
                      <div className="p-3 relative">
                        <Image
                          src="/blur-23.svg"
                          alt="Hero"
                          width={1080}
                          height={200}
                          className="absolute bottom-0 opacity-80"
                        />
                        <div className="flex justify-center">
                          <p className="text-xs sm:text-sm text-[#16f2b3]">
                            {experience.duration}
                          </p>
                        </div>
                        <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
                          {experience.image ? (
                            <div className="bg-[#0b0520]/70 rounded-md p-1 flex items-center justify-center shadow-md">
                              <ImageWithFallback
                                src={experience.image}
                                alt={`${experience.company} logo`}
                                width={48}
                                height={48}
                              />
                            </div>
                          ) : (
                            <div className="text-violet-500 transition-all duration-300">
                              <div className="bg-[#0b0520]/70 rounded-md p-2 flex items-center justify-center shadow-md">
                                <BsPersonWorkspace size={36} />
                              </div>
                            </div>
                          )}
                        </div>
                        <div className="flex items-center gap-x-8 px-3 py-5">
                          <div>
                            <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                              {experience.title}
                            </p>
                            <p className="text-sm sm:text-base">
                              {experience.company}
                            </p>
                            {/* Hidden highlights, revealed on hover (in-flow) */}
                            <div className="experience-highlights mt-3 overflow-hidden max-h-0 opacity-0 transition-[max-height,opacity,transform] duration-300 ease-out text-sm text-[#cfd6e8]">
                              <ul className="list-disc pl-5 space-y-1">
                                {experience.highlights?.slice(0,5).map((h, i) => (
                                  <li key={i}>{h}</li>
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
};

export default Experience;