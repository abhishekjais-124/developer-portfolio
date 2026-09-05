"use client";

import { experiences } from "@/utils/data/experience";
import Image from "next/image";
import { useState } from "react";
import GlowCard from "../../helper/glow-card";
import Reveal from "../../atelier/reveal";
import SectionHeading from "../../atelier/section-heading";
import SectionFx from "../../atelier/section-fx";

function ImageWithFallback({ src, alt, width, height }) {
  const [imgSrc, setImgSrc] = useState(src || "/png/placeholder.png");
  return (
    <Image
      src={imgSrc}
      alt={alt}
      width={width}
      height={height}
      className="h-full w-full object-contain"
      onError={() => setImgSrc("/png/placeholder.png")}
    />
  );
}

function Experience() {
  return (
    <section id="experience" className="relative overflow-hidden py-10 lg:py-16">
      <SectionFx variant="glyphs" />
      <div className="atelier-wrap">
        <SectionHeading
          index="02"
          kicker="Selected work"
          title="Houses I have built inside."
          subtitle="From fintech rails to live AI classrooms — ownership, latency, and systems that stay up."
        />

        <div className="relative">
          <div className="absolute bottom-0 left-[27px] top-0 hidden w-px bg-gradient-to-b from-[#c9a962] via-[#c9a962]/25 to-transparent md:block" />
          <div className="flex flex-col gap-4 sm:gap-6">
            {experiences.map((experience, index) => (
              <Reveal key={experience.id} delay={index * 90} variant="reveal-right">
                <GlowCard identifier={`experience-${experience.id}`}>
                  <a
                    href={experience.url || "#"}
                    target={experience.url ? "_blank" : undefined}
                    rel={experience.url ? "noopener noreferrer" : undefined}
                    className="block"
                  >
                    <div className="relative p-5 sm:p-8">
                      <div className="flex gap-4 md:gap-8">
                        <div className="flex shrink-0 items-start gap-4 md:w-16 md:justify-center">
                          <span className="relative z-10 mt-5 hidden h-3.5 w-3.5 rounded-full border border-[#c9a962] bg-[#070707] md:block" />
                          <div className="flex h-12 w-12 items-center justify-center border border-[#c9a962]/20 bg-white/95 p-1.5 sm:h-14 sm:w-14 sm:p-2">
                            {experience.image ? (
                              <ImageWithFallback
                                src={experience.image}
                                alt={`${experience.company} logo`}
                                width={40}
                                height={40}
                              />
                            ) : (
                              <span className="font-display text-lg text-[#c9a962]">0{index + 1}</span>
                            )}
                          </div>
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-start justify-between gap-3">
                            <div className="min-w-0">
                              <p className="text-[0.58rem] uppercase tracking-[0.18em] text-[#c9a962] sm:text-[0.62rem] sm:tracking-[0.24em]">
                                {experience.duration.replace(/[()]/g, "")}
                              </p>
                              <h3 className="mt-1.5 font-display text-[1.35rem] leading-tight text-[#f3eee4] sm:mt-2 sm:text-3xl">
                                {experience.title}
                              </h3>
                              <p className="mt-1 text-sm text-[#c8c0b2]">{experience.company}</p>
                            </div>
                            <span className="hidden shrink-0 border border-[#c9a962]/20 px-3 py-1 text-[0.62rem] uppercase tracking-[0.18em] text-[#e8d5a3] sm:inline">
                              0{index + 1}
                            </span>
                          </div>
                          <ul className="mt-3 sm:mt-4">
                            {experience.highlights?.slice(0, 3).map((h) => (
                              <li key={h} className="flex gap-2.5 py-1 text-[0.82rem] leading-6 text-[#c8c0b2] sm:gap-3 sm:py-1.5 sm:text-sm">
                                <span className="mt-2.5 h-px w-3 shrink-0 bg-[#c9a962] sm:w-4" />
                                <span>{h}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </a>
                </GlowCard>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
