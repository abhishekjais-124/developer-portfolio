// @flow strict

import { skillsData } from "@/utils/data/skills";
import { skillsImage } from "@/utils/skill-image";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { FiCode } from "react-icons/fi";


function Skills() {
  return (
    <div id="skills" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
        <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
        </div>
      </div>

      <div className="flex justify-center my-6 lg:py-10">
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center gap-3">
            <span className="hidden sm:block h-[1px] w-16 bg-gradient-to-r from-transparent via-violet-500/60 to-transparent" />
            <span className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm md:text-base font-semibold text-white shadow-[0_12px_40px_rgba(0,0,0,0.35)] backdrop-blur flex items-center gap-2">
              <FiCode className="text-violet-400" size={18} />
              Skills
            </span>
            <span className="hidden sm:block h-[1px] w-16 bg-gradient-to-r from-transparent via-[#16f2b3]/60 to-transparent" />
          </div>
          <p className="text-xs sm:text-sm text-[#c7d2ff]/80 max-w-2xl text-center px-4">
            Technologies and tools I work with to build scalable, high-performance applications.
          </p>
        </div>
      </div>

      <div className="w-full my-12">
        <Marquee
          gradient={false}
          speed={80}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"
        >
          {skillsData.map((skill, id) => (
            <div className="w-40 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-xl group relative hover:scale-110 cursor-pointer"
              key={id}>
              <div className="relative h-full w-full rounded-xl border border-white/10 bg-gradient-to-br from-[#0d1228]/60 via-[#0b1024]/60 to-[#0a0d1e]/60 backdrop-blur-sm shadow-[0_10px_40px_rgba(0,0,0,0.35)] group-hover:border-violet-500/50 group-hover:shadow-[0_10px_50px_rgba(139,92,246,0.3)] transition-all duration-500 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-transparent to-[#16f2b3]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute -top-12 -right-12 h-24 w-24 rounded-full bg-violet-500/20 blur-2xl group-hover:bg-violet-500/30 transition-all duration-500" />
                <div className="absolute -bottom-8 -left-8 h-20 w-20 rounded-full bg-[#16f2b3]/20 blur-2xl group-hover:bg-[#16f2b3]/30 transition-all duration-500" />
                
                <div className="flex -translate-y-[1px] justify-center relative z-10">
                  <div className="w-3/4">
                    <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
                  </div>
                </div>
                
                <div className="relative z-10 flex flex-col items-center justify-center gap-3 p-6">
                  <div className="h-12 sm:h-14 w-12 sm:w-14 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 p-2 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300">
                    <Image
                      src={skillsImage(skill)?.src}
                      alt={skill}
                      width={48}
                      height={48}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <p className="text-white text-sm sm:text-base font-medium group-hover:text-violet-300 transition-colors duration-300">
                    {skill}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Skills;