import { educations } from "@/utils/data/educations";
import Link from "next/link";
import { FiMapPin } from "react-icons/fi";
import GlowCard from "../../helper/glow-card";
import Reveal from "../../atelier/reveal";
import SectionHeading from "../../atelier/section-heading";
import SectionFx from "../../atelier/section-fx";

function Education() {
  return (
    <section id="education" className="relative overflow-hidden py-10 lg:py-16">
      <SectionFx variant="stars" />
      <div className="atelier-wrap">
        <SectionHeading
          index="05"
          kicker="Formation"
          title="Where the craft began."
          subtitle="A measured academic path — strong fundamentals, then the long practice of building."
        />
        <div className="grid gap-5 lg:grid-cols-3">
          {educations.map((education, index) => (
            <Reveal key={education.id} delay={index * 90}>
              <GlowCard identifier={`education-${education.id}`} className="h-full">
                <div className="flex h-full flex-col p-5 sm:p-7">
                  <div className="flex items-start justify-between gap-3">
                    <span className="font-display text-4xl italic text-[#c9a962]/70">0{index + 1}</span>
                    {education.location && (
                      <Link
                        href={education.location}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-9 w-9 items-center justify-center border border-[#c9a962]/20 text-[#c9a962]"
                        title="View location"
                      >
                        <FiMapPin size={14} />
                      </Link>
                    )}
                  </div>
                  <p className="mt-6 text-[0.62rem] uppercase tracking-[0.22em] text-[#c9a962]">
                    {education.duration}
                  </p>
                  <h3 className="mt-2 font-display text-2xl text-[#f3eee4]">{education.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#c8c0b2]">{education.institution}</p>
                  {education.achievement && (
                    <p className="mt-6 border-t border-[#c9a962]/15 pt-4 text-[0.7rem] uppercase tracking-[0.18em] text-[#e8d5a3]">
                      {education.achievement}
                    </p>
                  )}
                </div>
              </GlowCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
