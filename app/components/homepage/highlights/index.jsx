"use client";

import { personalData } from "@/utils/data/personal-data";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";
import CountUp from "../../atelier/count-up";
import Reveal from "../../atelier/reveal";
import SectionHeading from "../../atelier/section-heading";
import SectionFx from "../../atelier/section-fx";
import { SignalGif } from "../../atelier/loop-visuals";

function Highlights() {
  const highlights = [
    {
      title: "LinkedIn",
      value: personalData.linkedinFollowers,
      description: "A quiet, growing circle of engineers and builders.",
      icon: <FiLinkedin size={18} />,
    },
    {
      title: "Repositories",
      value: personalData.githubRepositories,
      description: "Open experiments, production patterns, and practice.",
      icon: <FiGithub size={18} />,
    },
    {
      title: "Problems solved",
      value: "2000+",
      description: "LeetCode Guardian. Contest instinct, kept sharp.",
      icon: <SiLeetcode size={18} />,
    },
  ];

  return (
    <section id="highlights" className="relative overflow-hidden py-10 lg:py-16">
      <SectionFx variant="signal" />
      <div className="atelier-wrap">
        <SectionHeading
          index="06"
          kicker="Signals"
          title="Numbers, kept honest."
          subtitle="A few marks that matter — not vanity, just the shape of the work so far."
        />
        <div className="grid gap-px bg-[#c9a962]/15 md:grid-cols-3">
          {highlights.map((item, index) => (
            <Reveal key={item.title} delay={index * 80}>
              <div className="bg-[#070707] p-6 sm:p-8 lg:p-10">
                <div className="flex items-center justify-between text-[#c9a962]">
                  <span className="text-[0.62rem] uppercase tracking-[0.24em]">{item.title}</span>
                  <span className="flex items-center gap-3">
                    {item.icon}
                    <SignalGif bars={5} className="hidden sm:flex" />
                  </span>
                </div>
                <p className="mt-5 font-display text-4xl text-[#f3eee4] sm:mt-6 sm:text-6xl">
                  <CountUp value={item.value} />
                </p>
                <p className="mt-4 text-sm leading-6 text-[#8d867b]">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Highlights;
