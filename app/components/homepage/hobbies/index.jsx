"use client";

import { useState } from "react";
import Image from "next/image";
import { FaPlane, FaMap, FaCamera, FaGamepad } from "react-icons/fa";
import { SiYoutube } from "react-icons/si";
import Reveal from "../../atelier/reveal";
import SectionFx from "../../atelier/section-fx";

function HobbiesSection() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const hobbiesContent = [
    { title: "Gaming", description: "Worlds, systems, and the joy of getting better.", icon: <FaGamepad size={18} />, image: "/image/ayla.jpg" },
    { title: "Travelling", description: "New cities, slower days, wider eyes.", icon: <FaPlane size={18} />, image: "/image/travel.jpg" },
    { title: "Exploring", description: "Side streets, local food, unplanned turns.", icon: <FaMap size={18} />, image: "/image/real-estate.jpg" },
    { title: "Photography", description: "Light, faces, and the quiet in between.", icon: <FaCamera size={18} />, image: "/image/crefin.jpg" },
  ];

  return (
    <section id="hobbies" className="relative overflow-hidden py-10 lg:py-16">
      <SectionFx variant="stars" />
      <div className="atelier-wrap">
        <div className="mb-10 flex flex-col gap-5 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Reveal>
              <div className="section-kicker">
                <span className="font-display text-lg tracking-normal text-[#c9a962]">11</span>
                <span className="kicker-line h-px w-8 bg-[#c9a962]/50" />
                <span>Away from the desk</span>
              </div>
            </Reveal>
            <Reveal delay={80} className="clip-reveal" variant="clip-reveal">
              <h2 className="mt-3 font-display text-[2.15rem] leading-[1.08] text-[#f3eee4] sm:mt-4 sm:text-5xl sm:leading-[1.05]">
                <span>Life, not just load.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <button
              onClick={() => setSelectedVideo("2SM-cJ_SbHg")}
              className="inline-flex min-h-11 shrink-0 items-center gap-2 pb-1 text-[0.65rem] uppercase tracking-[0.22em] text-[#c9a962]"
            >
              <SiYoutube size={16} /> Watch a glimpse
            </button>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {hobbiesContent.map((item, index) => (
            <Reveal key={item.title} delay={index * 70} className="min-w-0 h-full">
              <article className="group flex h-full min-w-0 flex-col overflow-hidden border border-[#c9a962]/15 bg-[#070707]">
                <div className="relative h-36 w-full shrink-0 overflow-hidden sm:h-44">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="ken-burns object-cover opacity-70 transition duration-700 group-hover:opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-[#070707]/25 to-transparent" />
                </div>
                <div className="flex flex-1 flex-col px-5 pb-6 pt-5">
                  <div className="flex h-10 w-10 items-center justify-center border border-[#c9a962]/20 text-[#c9a962]">
                    {item.icon}
                  </div>
                  <h3 className="mt-4 font-display text-2xl leading-tight text-[#f3eee4]">{item.title}</h3>
                  <p className="mt-3 min-h-[3rem] text-sm leading-6 text-[#8d867b]">{item.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      {selectedVideo && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setSelectedVideo(null)}
        >
          <div className="relative aspect-video w-full max-w-4xl overflow-hidden border border-[#c9a962]/20" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center bg-[#f3eee4] text-[#070707]"
              aria-label="Close video"
            >
              ×
            </button>
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
              title="YouTube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default HobbiesSection;
