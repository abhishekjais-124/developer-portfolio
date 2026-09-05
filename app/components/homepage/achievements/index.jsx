"use client";

import { achievements } from "@/utils/data/achievements";
import GlowCard from "../../helper/glow-card";
import Reveal from "../../atelier/reveal";
import SectionHeading from "../../atelier/section-heading";
import SectionFx from "../../atelier/section-fx";

function Achievements() {
  return (
    <section id="achievements" className="relative overflow-hidden py-10 lg:py-16">
      <SectionFx variant="stars" />
      <div className="atelier-wrap">
        <SectionHeading
          index="07"
          kicker="Milestones"
          title="A few turns that changed the road."
          subtitle="Promotions, platforms, and the quiet work of taking something from zero to millions."
        />
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-5">
          {achievements.map((item, index) => (
            <Reveal key={item.id} delay={index * 70}>
              <GlowCard identifier={`achievement-${item.id}`} className="h-full">
                <div className="flex h-full flex-col p-5 sm:p-6">
                  <p className="font-display text-4xl italic text-[#c9a962]">{item.year}</p>
                  <h3 className="mt-5 font-display text-xl leading-snug text-[#f3eee4]">{item.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-6 text-[#8d867b]">{item.description}</p>
                  <p className="mt-6 border-t border-[#c9a962]/15 pt-4 text-[0.62rem] uppercase tracking-[0.18em] text-[#e8d5a3]">
                    {item.tag || "Recognized"}
                  </p>
                </div>
              </GlowCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Achievements;
