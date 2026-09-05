import { skillsData } from "@/utils/data/skills";
import { skillsImage } from "@/utils/skill-image";
import Image from "next/image";
import Reveal from "../../atelier/reveal";
import SectionHeading from "../../atelier/section-heading";
import SectionFx from "../../atelier/section-fx";

function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden py-10 lg:py-16">
      <SectionFx variant="stars" />
      <div className="atelier-wrap">
        <SectionHeading
          index="03"
          kicker="Instruments"
          title="A precise, practiced kit."
          subtitle="Languages, platforms, and infrastructure I use to keep systems calm under pressure."
        />

        <div className="grid grid-cols-2 gap-px bg-[#c9a962]/25 sm:grid-cols-3 lg:grid-cols-5">
          {skillsData.map((skill, index) => (
            <Reveal key={skill} delay={index * 45} className="h-full min-w-0">
              <article className="group relative flex h-full flex-col items-center bg-[#0c0c0d] px-3 py-6 text-center transition-colors duration-500 hover:bg-[#12110e] sm:px-4 sm:py-8">
                <span className="absolute left-3 top-3 font-display text-sm italic text-[#c9a962]/55 sm:left-4 sm:top-4">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="relative mt-4 flex h-14 w-14 items-center justify-center border border-[#c9a962]/30 bg-[#c9a962]/[0.06] transition-all duration-500 group-hover:border-[#c9a962]/70 group-hover:bg-[#c9a962]/12 group-hover:shadow-[0_0_32px_rgba(201,169,98,0.16)] sm:mt-5 sm:h-[4.5rem] sm:w-[4.5rem]">
                  <Image
                    src={skillsImage(skill)?.src}
                    alt={skill}
                    width={48}
                    height={48}
                    className="h-8 w-8 object-contain transition-transform duration-500 group-hover:scale-110 sm:h-10 sm:w-10"
                  />
                </div>
                <p className="mt-4 font-display text-lg leading-tight text-[#f3eee4] transition-colors duration-300 group-hover:text-[#e8d5a3] sm:mt-5 sm:text-xl">
                  {skill}
                </p>
                <span className="mt-4 h-px w-6 bg-[#c9a962]/25 transition-all duration-500 group-hover:w-10 group-hover:bg-[#c9a962]" />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
