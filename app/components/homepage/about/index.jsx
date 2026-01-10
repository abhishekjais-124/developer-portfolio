// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import { PiSparkleBold } from "react-icons/pi";
import ParallaxWrapper from "../../helper/parallax-wrapper";


function AboutSection() {
  return (
    <ParallaxWrapper offset={0.2}>
      <div id="about" className="my-12 lg:my-16 relative">
      <div className="absolute -inset-6 rounded-[32px] bg-gradient-to-br from-[#1a1443]/60 via-[#0b142d]/70 to-[#0f1032]/80 blur-3xl opacity-60" />

      <div className="relative overflow-hidden rounded-3xl border border-[#262a4f] bg-gradient-to-br from-[#0b1229]/90 via-[#0e1535]/90 to-[#0a1027]/90 p-6 sm:p-8 lg:p-12 shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
        <div className="pointer-events-none absolute -left-10 -top-14 h-40 w-40 rounded-full bg-[#16f2b3]/20 blur-3xl animate-pulse" />
        <div className="pointer-events-none absolute -right-10 top-10 h-32 w-32 rounded-full bg-pink-500/20 blur-3xl animate-pulse" />
        <div className="pointer-events-none absolute left-1/3 bottom-0 h-24 w-24 rounded-full bg-indigo-500/20 blur-3xl animate-pulse" />

        <div className="hidden lg:flex items-center gap-3 absolute -right-8 top-10">
          <div className="flex flex-col items-center text-white/70">
            <span className="bg-[#1a1443] text-white rotate-90 px-4 py-2 text-lg font-semibold rounded-md shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
              ABOUT ME
            </span>
            <span className="mt-3 h-32 w-[2px] bg-gradient-to-b from-pink-500/0 via-pink-500/50 to-transparent" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div className="order-2 lg:order-1 space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#16f2b3]/10 px-4 py-2 text-[#16f2b3] text-xs font-semibold uppercase tracking-[0.18em] border border-[#16f2b3]/30 shadow-[0_10px_30px_rgba(22,242,179,0.15)]">
              <PiSparkleBold className="text-[#16f2b3]" size={16} />
              Who I am?
            </div>
            <h2 className="text-3xl lg:text-4xl font-semibold dark:text-white light:text-gray-900 leading-tight">
              Building calm, confident products with a love for detail.
            </h2>
            <p className="dark:text-gray-200/90 light:text-gray-700 text-base lg:text-lg leading-relaxed">
              {personalData.description}
            </p>
            <div className="pt-4 border-t border-[#1f2548]">
              <p className="font-medium mb-3 text-[#16f2b3] text-sm uppercase tracking-[0.16em]">My Interests</p>
              <div className="flex flex-wrap gap-2.5">
                {personalData.hobbies.map((hobby, index) => (
                  <span
                    key={index}
                    className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-white text-sm shadow-[0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur-sm hover:-translate-y-0.5 transition-transform duration-300"
                  >
                    {hobby}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 w-full flex justify-center">
            <div className="relative group max-w-[320px]">
              <div className="absolute inset-4 rounded-3xl border border-white/5 bg-gradient-to-b from-white/5 via-transparent to-transparent blur-xl" />
              <div className="absolute -inset-2 rounded-[26px] bg-gradient-to-br from-pink-500/20 via-purple-600/10 to-[#16f2b3]/20 opacity-70 group-hover:opacity-100 transition duration-700" />
              <div className="relative overflow-hidden rounded-[22px] border border-white/10 bg-[#0c1026]/80 shadow-[0_25px_60px_rgba(0,0,0,0.45)]">
                <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br from-pink-500/40 to-purple-600/30 blur-2xl animate-pulse" />
                <div className="absolute -left-6 -bottom-6 h-24 w-24 rounded-full bg-gradient-to-br from-[#16f2b3]/40 to-cyan-400/30 blur-2xl animate-pulse" />
                <Image
                  src={personalData.profile}
                  width={320}
                  height={320}
                  alt="Abhishek"
                  className="relative z-10 rounded-[18px] grayscale transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:scale-[1.02] group-hover:translate-y-1"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </ParallaxWrapper>
  );
}

export default AboutSection;