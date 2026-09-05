"use client";

import Link from "next/link";
import { MdVerified } from "react-icons/md";
import { FiLinkedin } from "react-icons/fi";
import { recommendations } from "@/utils/data/recommendations";
import { personalData } from "@/utils/data/personal-data";
import Reveal from "../../atelier/reveal";
import SectionHeading from "../../atelier/section-heading";
import SectionFx from "../../atelier/section-fx";

function initials(name) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

const mix = [
  { label: "Teammates", value: 3, width: "100%" },
  { label: "Mentors", value: 1, width: "33%" },
  { label: "Leads", value: 1, width: "33%" },
  { label: "Peers", value: 1, width: "33%" },
];

function Recommendations() {
  return (
    <section id="recommendations" className="relative overflow-hidden py-10 lg:py-16">
      <SectionFx variant="blob" />
      <div className="atelier-wrap">
        <SectionHeading
          index="09"
          kicker="Voices"
          title="What colleagues keep."
        />

        <Reveal>
          <div className="atelier-card flex flex-col justify-between gap-6 p-5 sm:gap-8 sm:p-8 lg:flex-row lg:items-center lg:gap-16">
            <div className="max-w-lg">
              <p className="text-sm leading-7 text-[#8d867b] sm:text-base">
                Mentors, leads, and teammates — the people who saw the work up close.
              </p>
              <Link
                href={personalData.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold mt-6 w-full sm:w-fit"
              >
                Read on LinkedIn
                <FiLinkedin size={14} />
              </Link>
            </div>
            <div className="flex w-full min-w-0 flex-col gap-6 bg-[#070707] p-4 sm:flex-row sm:items-center sm:gap-8 sm:p-6 lg:w-auto lg:min-w-[28rem]">
              <div className="text-center sm:text-left">
                <p className="font-display text-5xl leading-none text-[#f3eee4]">{recommendations.length}</p>
                <p className="mt-2 text-[0.62rem] uppercase tracking-[0.18em] text-[#c9a962]">Recommendations</p>
                <p className="mt-2 text-xs text-[#8d867b]">Written in public</p>
              </div>
              <div className="grid min-w-0 flex-1 grid-cols-[auto_1fr_2rem] items-center gap-x-3 gap-y-2 text-[0.68rem] text-[#c8c0b2]">
                {mix.map((row) => (
                  <div key={row.label} className="contents">
                    <span className="text-right text-[#8d867b]">{row.label}</span>
                    <div className="h-1.5 overflow-hidden bg-[#c9a962]/15">
                      <div className="h-full bg-[#c9a962]" style={{ width: row.width }} />
                    </div>
                    <span className="text-[#8d867b]">{row.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {recommendations.map((item, i) => (
            <Reveal key={item.id} delay={i * 60} className="h-full min-w-0">
              <article className="atelier-card flex h-full flex-col gap-4 p-5 transition-[border-color] duration-300 hover:border-[#c9a962]/40 sm:p-6">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex min-w-0 items-center gap-3">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#c9a962]/30 bg-[#c9a962]/10 font-display text-sm text-[#e8d5a3]">
                      {initials(item.name)}
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5">
                        <p className="truncate text-sm font-medium text-[#f3eee4]">{item.name}</p>
                        <MdVerified className="shrink-0 text-[#c9a962]" size={15} title="LinkedIn recommendation" />
                      </div>
                      <p className="mt-0.5 truncate text-[0.68rem] text-[#8d867b]">{item.title}</p>
                    </div>
                  </div>
                  <p className="shrink-0 pt-1 text-[0.62rem] uppercase tracking-[0.12em] text-[#556677]">
                    {item.date}
                  </p>
                </div>
                <p className="flex-1 text-sm leading-relaxed text-[#c8c0b2]">“{item.quote}”</p>
                <div className="flex items-center justify-between gap-3 border-t border-[#c9a962]/12 pt-4">
                  <p className="text-[0.62rem] uppercase tracking-[0.16em] text-[#8d867b]">
                    {item.relationship}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="relative mt-8 overflow-hidden border border-[#c9a962]/16 bg-gradient-to-r from-[#0c0c0d] to-[#141210] p-6 sm:mt-10 sm:p-8 md:p-12">
            <div className="pointer-events-none absolute -right-10 -top-10 h-64 w-64 rounded-full bg-[#c9a962] opacity-20 blur-3xl" />
            <div className="relative z-10 flex flex-col items-center justify-between gap-6 md:flex-row md:text-left">
              <div className="max-w-xl text-center md:text-left">
                <h3 className="font-display text-2xl text-[#f3eee4] md:text-3xl">The rest lives on LinkedIn.</h3>
                <p className="mt-3 text-sm leading-7 text-[#8d867b] md:text-base">
                  These are the notes colleagues left in public. Open the profile for the full thread.
                </p>
              </div>
              <Link
                href={personalData.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold w-full shrink-0 sm:w-auto"
              >
                Open profile
                <FiLinkedin size={14} />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Recommendations;
