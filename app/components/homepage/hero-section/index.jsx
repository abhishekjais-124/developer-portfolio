// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";

function HeroSection() {
  const heroStats = [
    { label: "Experience", value: "4+ yrs" },
    { label: "LinkedIn", value: personalData.linkedinFollowers || "7k+" },
    { label: "Repositories", value: personalData.githubRepositories || "60+" },
    { label: "Location", value: personalData.address || "Remote-friendly" },
  ];

  return (
    <section className="relative py-6 lg:py-14">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(140%_120%_at_15%_10%,rgba(106,90,249,0.16),transparent_40%),radial-gradient(110%_110%_at_85%_10%,rgba(22,242,179,0.14),transparent_42%)]" />
      <div className="absolute -inset-6 -z-20 rounded-[36px] bg-gradient-to-br from-white/5 via-transparent to-white/5 blur-3xl opacity-40" />

      <div className="grid grid-cols-1 items-start lg:grid-cols-2 gap-y-10 lg:gap-14">
        <div className="order-2 lg:order-1 flex flex-col gap-6 lg:gap-8 p-2 pb-16 md:pb-10 lg:pt-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/80 shadow-[0_12px_40px_rgba(0,0,0,0.35)] backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-[#16f2b3] animate-pulse" />
            {personalData.designation} · {personalData.address}
          </div>

          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-[1.1] text-white">
              Building reliable systems with a calm, product-first mindset.
              <span className="block text-[#16f2b3]">
                {personalData.name}
              </span>
            </h1>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 md:px-6 py-3 text-sm md:text-base font-semibold text-white shadow-[0_12px_40px_rgba(0,0,0,0.35)] transition-all duration-200 hover:border-white/35 hover:-translate-y-[2px]"
            >
              <RiContactsFill size={18} /> Let&apos;s build together
            </Link>
            {personalData.resume && (
              <Link
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#16f2b3] via-[#6a5af9] to-[#f472b6] px-4 md:px-6 py-3 text-sm md:text-base font-semibold text-[#050915] shadow-[0_14px_40px_rgba(0,0,0,0.35)] transition-all duration-200 hover:translate-y-[-2px]"
                role="button"
                target="_blank"
                href={personalData.resume}
              >
                <span>Download Resume</span>
                <MdDownload size={18} />
              </Link>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {[personalData.github, personalData.linkedIn, personalData.leetcode, personalData.instagram].map((link, idx) => {
              if (!link) return null;
              const icons = [
                <BsGithub key="g" size={22} />,
                <BsLinkedin key="l" size={22} />,
                <SiLeetcode key="lc" size={20} />, 
                <FaInstagram key="i" size={22} />,
              ];
              return (
                <Link
                  key={link}
                  href={link}
                  target="_blank"
                  className="flex items-center justify-center h-11 w-11 rounded-full border border-white/10 bg-white/5 text-white/80 transition-all duration-300 hover:border-white/30 hover:text-white hover:-translate-y-1"
                  aria-label="Social link"
                >
                  {icons[idx]}
                </Link>
              );
            })}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-2 max-w-3xl">
            {heroStats.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/10 bg-white/5 px-3 py-3 text-sm text-white/80 shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
              >
                <div className="text-xs uppercase tracking-[0.18em] text-white/60">{item.label}</div>
                <div className="mt-1 text-lg font-semibold text-white">{item.value}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="order-1 lg:order-2 relative rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1224]/80 via-[#0a0d1e]/80 to-[#0f0c32]/80 shadow-[0_25px_80px_rgba(0,0,0,0.45)] overflow-hidden">
          <div className="absolute inset-0 opacity-50 bg-[radial-gradient(circle_at_20%_20%,rgba(22,242,179,0.14),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(106,90,249,0.2),transparent_32%)]" />
          <div className="absolute -left-20 -top-16 h-64 w-64 rounded-full bg-[#16f2b3]/20 blur-3xl" />
          <div className="absolute -right-10 bottom-0 h-56 w-56 rounded-full bg-[#f472b6]/15 blur-3xl" />

          <div className="flex flex-row">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600" />
            <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent" />
          </div>
          <div className="px-4 lg:px-8 py-5 flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-red-400" />
            <div className="h-3 w-3 rounded-full bg-orange-400" />
            <div className="h-3 w-3 rounded-full bg-green-300" />
            <span className="text-xs text-white/60 ml-auto bg-white/5 px-2 py-1 rounded-full border border-white/10">ai ~/portfolio</span>
          </div>
          <div className="overflow-hidden border-t border-white/10 px-4 lg:px-8 py-5 lg:py-8 relative">
            <div className="absolute inset-0 opacity-20 bg-[linear-gradient(120deg,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:120px_120px]" />
            <code className="relative font-mono text-xs md:text-sm lg:text-base leading-6 text-[#d1d6f0]">
              <div className="blink">
                <span className="mr-2 text-pink-400">const</span>
                <span className="mr-2 text-white">engineer</span>
                <span className="mr-2 text-pink-400">=</span>
                <span className="text-gray-400">{'{'}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
                <span className="text-gray-400">{`'`}</span>
                <span className="text-amber-300">{personalData.name}</span>
                <span className="text-gray-400">{`',`}</span>
              </div>
              <div className="ml-4 lg:ml-8 mr-2">
                <span className=" text-white">focus:</span>
                <span className="text-gray-400">{`['`}</span>
                <span className="text-amber-300">Systems Design</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Backend</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Cloud</span>
                <span className="text-gray-400">{"'],"}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">values:</span>
                <span className="text-gray-400">{`['`}</span>
                <span className="text-amber-300">Reliability</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Latency</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Impact</span>
                <span className="text-gray-400">{"']"}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-green-400">ship:</span>
                <span className="text-orange-300">function</span>
                <span className="text-gray-400">{'() {'}</span>
              </div>
              <div>
                <span className="ml-8 lg:ml-16 mr-2 text-orange-300">return</span>
                <span className="text-gray-400">{`(`}</span>
              </div>
              <div>
                <span className="ml-12 lg:ml-24 text-cyan-300">design</span>
                <span className="mr-2 text-gray-400">{'('}</span>
                <span className="text-white">"Scalable"</span>
                <span className="text-gray-400">{')'}</span>
                <span className="text-amber-300">&amp;&amp;</span>
              </div>
              <div>
                <span className="ml-12 lg:ml-24 text-cyan-300">deliver</span>
                <span className="mr-2 text-gray-400">{'('}</span>
                <span className="text-white">"Impact"</span>
                <span className="text-gray-400">{')'}</span>
                <span className="text-amber-300">&amp;&amp;</span>
              </div>
              <div>
                <span className="ml-12 lg:ml-24 text-cyan-300">learn</span>
                <span className="mr-2 text-gray-400">{'('}</span>
                <span className="text-white">"Daily"</span>
                <span className="text-gray-400">{')'}</span>
              </div>
              <div><span className="ml-8 lg:ml-16 mr-2 text-gray-400">{`);`}</span></div>
              <div><span className="ml-4 lg:ml-8 text-gray-400">{`};`}</span></div>
              <div><span className="text-gray-400">{`};`}</span></div>
            </code>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;