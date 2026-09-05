import { personalData } from "@/utils/data/personal-data";
import Reveal from "../../atelier/reveal";
import SectionFx from "../../atelier/section-fx";

const path = [
  { year: "2023 —", house: "Unacademy", role: "Senior Software Engineer" },
  { year: "2021 — 23", house: "Slice", role: "Software Engineer" },
  { year: "2021", house: "Bright Money", role: "Software Engineer" },
];

function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden py-10 lg:py-16">
      <SectionFx variant="stars" />
      <div className="atelier-wrap">
        <div className="grid items-stretch gap-10 lg:grid-cols-2 lg:gap-20">
          <div className="flex flex-col">
            <Reveal>
              <div className="section-kicker">
                <span className="font-display text-lg tracking-normal text-[#c9a962]">01</span>
                <span className="kicker-line h-px w-8 bg-[#c9a962]/50" />
                <span>Introduction</span>
              </div>
            </Reveal>
            <Reveal delay={80} className="clip-reveal" variant="clip-reveal">
              <h2 className="mt-4 font-display text-[2.15rem] leading-[1.08] text-[#f3eee4] sm:mt-5 sm:text-5xl sm:leading-[1.05]">
                <span>Quiet confidence. Loud systems.</span>
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-5 max-w-lg text-sm leading-7 text-[#8d867b] sm:text-base">
                A senior engineer who treats reliability as a luxury — precise, unhurried, and built to last.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <p className="mt-8 font-display text-2xl leading-snug text-[#f3eee4]">
                I build the invisible architecture behind products people trust at scale.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <p className="mt-5 text-base leading-8 text-[#c8c0b2]">
                {personalData.description}
              </p>
            </Reveal>
            <Reveal delay={260} className="mt-auto pt-10">
              <div className="flex flex-wrap gap-2">
                {personalData.hobbies.map((hobby) => (
                  <span
                    key={hobby}
                    className="border border-[#c9a962]/20 px-3 py-1.5 text-[0.68rem] uppercase tracking-[0.18em] text-[#c8c0b2]"
                  >
                    {hobby}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={120} variant="reveal-right" className="h-full">
            <div className="atelier-card flex h-full flex-col p-5 sm:p-8 lg:p-10">
              <div className="flex items-baseline justify-between gap-4">
                <p className="text-[0.62rem] uppercase tracking-[0.24em] text-[#c9a962]">Dossier</p>
                <p className="text-[0.62rem] uppercase tracking-[0.24em] text-[#8d867b]">Est. 2021</p>
              </div>
              <div className="mt-6 flex items-end justify-between gap-6 sm:mt-8">
                <p className="font-display text-5xl italic leading-none text-[#f3eee4] sm:text-6xl lg:text-7xl">AJ</p>
                <p className="pb-1 text-right text-sm leading-6 text-[#8d867b]">{personalData.address}</p>
              </div>

              <div className="mt-10 flex-1 border-t border-[#c9a962]/15 pt-8">
                <div className="flex flex-col gap-6">
                  {path.map((item) => (
                    <div key={item.house} className="grid grid-cols-[5.25rem_1fr] items-baseline gap-3 sm:grid-cols-[7.5rem_1fr] sm:gap-4">
                      <p className="text-[0.62rem] uppercase tracking-[0.18em] text-[#c9a962]">
                        {item.year}
                      </p>
                      <div>
                        <p className="font-display text-xl leading-none text-[#f3eee4]">{item.house}</p>
                        <p className="mt-2 text-sm text-[#8d867b]">{item.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-x-5 gap-y-5 border-t border-[#c9a962]/15 pt-6 sm:mt-10 sm:gap-x-8 sm:gap-y-6 sm:pt-8">
                {[
                  ["Focus", "Backend · Cloud · AI"],
                  ["Now", "Unacademy"],
                  ["Craft", "Latency · Reliability"],
                  ["Mode", "Remote-friendly"],
                ].map(([label, value]) => (
                  <div key={label}>
                    <p className="text-[0.58rem] uppercase tracking-[0.2em] text-[#8d867b]">{label}</p>
                    <p className="mt-2 font-display text-lg leading-snug text-[#f3eee4]">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
