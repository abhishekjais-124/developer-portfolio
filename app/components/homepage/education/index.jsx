// @flow strict
import { educations } from "@/utils/data/educations";
import Image from "next/image";
import Link from "next/link";
import { BsPersonWorkspace } from "react-icons/bs";
import { FiBookOpen, FiAward, FiMapPin } from "react-icons/fi";
import lottieFile from '../../../assets/lottie/study.json';
import AnimationLottie from "../../helper/animation-lottie";
import GlowCard from "../../helper/glow-card";

function Education() {
  return (
    <div id="education" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
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
              <FiBookOpen className="text-violet-400" size={18} />
              Education
            </span>
            <span className="hidden sm:block h-[1px] w-16 bg-gradient-to-r from-transparent via-[#16f2b3]/60 to-transparent" />
          </div>
          <p className="text-xs sm:text-sm text-[#c7d2ff]/80 max-w-2xl text-center px-4">
            Academic foundation and continuous learning journey in computer science and engineering.
          </p>
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="flex justify-center items-start">
            <div className="w-3/4 h-3/4">
              <AnimationLottie animationPath={lottieFile} />
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-6">
              {
                educations.map(education => (
                  <GlowCard key={education.id} identifier={`education-${education.id}`}>
                    <div className="p-5 sm:p-6 relative text-white bg-gradient-to-br from-[#0d1228]/40 via-[#0b1024]/40 to-[#0a0d1e]/40 rounded-xl border border-white/5 hover:border-violet-500/30 transition-all duration-300 group">
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-violet-500/5 via-transparent to-[#16f2b3]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <div className="relative flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-violet-500/20 to-[#16f2b3]/20 border border-violet-500/30 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
                            <BsPersonWorkspace size={24} className="text-violet-400" />
                          </div>
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-3 mb-2">
                            <h3 className="text-base sm:text-lg font-semibold text-white group-hover:text-violet-300 transition-colors">
                              {education.title}
                            </h3>
                            <div className="flex items-center gap-2 flex-shrink-0">
                              <span className="px-2.5 py-1 rounded-full bg-[#16f2b3]/10 border border-[#16f2b3]/20 text-[#16f2b3] text-[11px] uppercase tracking-wider font-medium">
                                {education.duration}
                              </span>
                              {education.location && (
                                <Link 
                                  href={education.location}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center justify-center h-8 w-8 rounded-full bg-[#16f2b3]/10 border border-[#16f2b3]/30 text-[#16f2b3] hover:bg-[#16f2b3]/20 hover:border-[#16f2b3]/50 transition-all duration-200"
                                  title="View location"
                                >
                                  <FiMapPin size={16} />
                                </Link>
                              )}
                            </div>
                          </div>
                          
                          <p className="text-sm text-[#9eb3ff] mb-3">
                            {education.institution}
                          </p>
                          
                          {education.achievement && (
                            <div className="flex items-center gap-2 mt-3 px-3 py-2 rounded-lg bg-gradient-to-r from-[#16f2b3]/10 to-cyan-400/10 border border-[#16f2b3]/20">
                              <FiAward className="text-[#16f2b3] flex-shrink-0" size={16} />
                              <p className="text-xs sm:text-sm font-semibold bg-gradient-to-r from-[#16f2b3] to-cyan-400 bg-clip-text text-transparent">
                                {education.achievement}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
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

export default Education;