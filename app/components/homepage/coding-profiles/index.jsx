"use client";

import { codingProfiles } from "@/utils/data/coding-profiles";
import { leetcodeProfile } from "@/utils/data/leetcode";
import Image from "next/image";
import Link from "next/link";
import { SiLeetcode, SiCodeforces, SiCodechef, SiHackerrank, SiHackerearth } from "react-icons/si";
import GlowCard from "../../helper/glow-card";
import Reveal from "../../atelier/reveal";
import SectionHeading from "../../atelier/section-heading";
import CountUp from "../../atelier/count-up";
import SectionFx from "../../atelier/section-fx";
import { SignalGif } from "../../atelier/loop-visuals";

const iconMap = {
  SiLeetcode: <SiLeetcode size={22} />,
  SiCodeforces: <SiCodeforces size={22} />,
  SiCodechef: <SiCodechef size={22} />,
  SiHackerrank: <SiHackerrank size={22} />,
  SiHackerearth: <SiHackerearth size={22} />,
};

function CodingProfiles() {
  return (
    <section id="coding-profiles" className="relative overflow-hidden py-10 lg:py-16">
      <SectionFx variant="signal" />
      <div className="atelier-wrap">
        <SectionHeading
          index="10"
          kicker="Arenas"
          title="Still competing with myself."
          subtitle="Guardian on LeetCode. Expert on Codeforces. The practice that keeps systems thinking sharp."
        />

        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-5">
          {codingProfiles.map((profile, index) => (
            <Reveal key={profile.id} delay={index * 60}>
              <GlowCard identifier={`coding-profile-${profile.id}`} className="h-full">
                <Link href={profile.profileUrl} target="_blank" rel="noopener noreferrer" className="block h-full p-4 sm:p-5">
                  <div className="flex items-center justify-between text-[#c9a962]">
                    {iconMap[profile.icon]}
                    <span className="text-[0.52rem] uppercase tracking-[0.12em] sm:text-[0.58rem] sm:tracking-[0.18em]">{profile.level}</span>
                  </div>
                  <h3 className="mt-4 font-display text-xl leading-tight text-[#f3eee4] sm:mt-6 sm:text-2xl">{profile.name}</h3>
                  <p className="mt-1 text-xs text-[#8d867b]">@{profile.handle}</p>
                  {profile.rating && (
                    <p className="mt-5 font-display text-3xl text-[#e8d5a3]">
                      <CountUp value={String(profile.rating)} />
                    </p>
                  )}
                  <p className="mt-2 text-[0.65rem] uppercase tracking-[0.16em] text-[#8d867b]">
                    {profile.problemsSolved}+ solved
                  </p>
                </Link>
              </GlowCard>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-8 atelier-card p-5 sm:mt-10 sm:p-8">
            <div className="mb-6 flex flex-col gap-4 sm:mb-8 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
              <div>
                <p className="section-kicker mb-2">
                  <span>LeetCode</span>
                  <span className="h-px w-8 bg-[#c9a962]/50" />
                  <span>Guardian</span>
                </p>
                <h3 className="font-display text-2xl text-[#f3eee4] sm:text-3xl">A rare badge, kept current.</h3>
              </div>
              <div className="flex items-center gap-3">
                <SignalGif bars={6} className="h-8" />
                <div className="flex h-12 w-12 items-center justify-center border border-[#c9a962]/20 bg-[#0c0c0d] p-2">
                  <Image
                    src="/image/guardian.png"
                    alt="Guardian badge"
                    width={40}
                    height={40}
                    className="h-full w-full object-contain"
                  />
                </div>
                <Link
                  href={`https://leetcode.com/u/${leetcodeProfile.handle}/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[0.65rem] uppercase tracking-[0.2em] text-[#c9a962]"
                >
                  Open profile →
                </Link>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              <div>
                <p className="text-[0.62rem] uppercase tracking-[0.2em] text-[#8d867b]">Contest rating</p>
                <p className="mt-2 font-display text-4xl text-[#f3eee4]">
                  <CountUp value={String(leetcodeProfile.rating)} />
                </p>
                <p className="mt-2 text-sm text-[#8d867b]">
                  Global {leetcodeProfile.rankGlobal} · Top {leetcodeProfile.topPercent}
                </p>
              </div>
              <div>
                <p className="text-[0.62rem] uppercase tracking-[0.2em] text-[#8d867b]">Problems</p>
                <p className="mt-2 font-display text-4xl text-[#f3eee4]">880+</p>
                <div className="mt-4 space-y-2 text-xs text-[#c8c0b2]">
                  {[
                    ["Easy", leetcodeProfile.solvedEasy, "32%"],
                    ["Medium", leetcodeProfile.solvedMedium, "54%"],
                    ["Hard", leetcodeProfile.solvedHard, "48%"],
                  ].map(([label, count, width]) => (
                    <div key={label} className="grid grid-cols-[64px_1fr_36px] items-center gap-2">
                      <span>{label}</span>
                      <div className="h-px bg-[#c9a962]/15">
                        <div className="h-px bg-[#c9a962]" style={{ width }} />
                      </div>
                      <span>{count}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-[0.62rem] uppercase tracking-[0.2em] text-[#8d867b]">Community</p>
                <p className="mt-2 font-display text-4xl text-[#f3eee4]">4.3K</p>
                <p className="mt-2 text-sm text-[#8d867b]">
                  {leetcodeProfile.solutionsPublished}+ solutions · {leetcodeProfile.profileViews.toLocaleString()}+ views
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default CodingProfiles;
