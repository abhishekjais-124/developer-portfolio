// @flow strict
"use client";

import { codingProfiles } from "@/utils/data/coding-profiles";
import { leetcodeProfile } from "@/utils/data/leetcode";
import Image from "next/image";
import Link from "next/link";
import GlowCard from "../../helper/glow-card";
import { SiLeetcode, SiCodeforces, SiCodechef, SiHackerrank, SiHackerearth } from "react-icons/si";
import { FiCode } from "react-icons/fi";

const iconMap = {
  SiLeetcode: <SiLeetcode size={40} />,
  SiCodeforces: <SiCodeforces size={40} />,
  SiCodechef: <SiCodechef size={40} />,
  SiHackerrank: <SiHackerrank size={40} />,
  SiHackerearth: <SiHackerearth size={40} />
};

function CodingProfiles() {
  return (
    <div id="coding-profiles" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]" suppressHydrationWarning>

      <div className="flex justify-center my-6 lg:py-10">
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center gap-3">
            <span className="hidden sm:block h-[1px] w-16 bg-gradient-to-r from-transparent via-[#7c5dff]/60 to-transparent" />
            <span className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm md:text-base font-semibold text-white shadow-[0_12px_40px_rgba(0,0,0,0.35)] backdrop-blur flex items-center gap-2">
              <FiCode className="text-[#7c5dff]" size={18} />
              Coding Profiles
            </span>
            <span className="hidden sm:block h-[1px] w-16 bg-gradient-to-r from-transparent via-[#19e6ff]/60 to-transparent" />
          </div>
          <p className="text-xs sm:text-sm text-[#c7d2ff]/80 max-w-2xl text-center px-4">
            Competitive programming achievements across leading platforms.
          </p>
        </div>
      </div>

      <div className="relative py-10 lg:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 auto-rows-fr">
            {codingProfiles.map((profile, index) => (
              <div key={profile.id} className={index === 4 ? "col-span-2 md:col-span-1" : ""}>
                <GlowCard identifier={`coding-profile-${profile.id}`} className="h-full">
                <Link href={profile.profileUrl} target="_blank" rel="noopener noreferrer" className="block h-full">
                  <div className={`relative p-6 rounded-xl bg-gradient-to-br from-[#0d1228]/60 via-[#0b1024]/60 to-[#0a0d1e]/60 backdrop-blur-sm border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.35)] min-h-[320px] flex flex-col justify-between group hover:border-white/20 transition-all duration-500 overflow-hidden cursor-pointer`}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${profile.gradient} opacity-30 group-hover:opacity-50 transition-opacity duration-500`} />
                    <div className="absolute -top-12 -right-12 h-24 w-24 rounded-full bg-gradient-to-br from-[#7c5dff]/20 to-[#19e6ff]/20 blur-2xl group-hover:blur-3xl transition-all duration-700" />
                    
                    <div className="relative z-10 flex flex-col items-center text-center mb-4">
                      <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300 mb-3">
                        <div className={`${profile.color}`}>
                          {iconMap[profile.icon]}
                        </div>
                      </div>
                      <p className="text-lg font-bold text-white mb-2 group-hover:text-[#7c5dff] transition-colors">
                        {profile.name}
                      </p>
                      <p className="text-xs text-gray-400 break-all px-2">
                        @{profile.handle}
                      </p>
                    </div>

                    <div className="relative z-10 space-y-3 text-center">
                      {profile.rating && (
                        <div className="px-3 py-2 rounded-lg bg-white/5 border border-white/10">
                          <p className="text-xs text-gray-300 mb-1">Rating</p>
                          <p className="text-xl font-bold text-white">{profile.rating}</p>
                        </div>
                      )}
                      {profile.level && (
                        <div className="px-2 py-1 rounded-full bg-gradient-to-r from-[#7c5dff]/20 to-[#19e6ff]/20 border border-[#7c5dff]/30">
                          <p className="text-xs text-[#19e6ff] font-semibold">{profile.level}</p>
                        </div>
                      )}
                      <div className="px-3 py-2 rounded-lg bg-white/5 border border-white/10">
                        <p className="text-xs text-gray-300 mb-1">Problems Solved</p>
                        <p className="text-lg font-bold text-white">{profile.problemsSolved}+</p>
                      </div>
                      {profile.badges && (
                        <div className="pt-2 border-t border-white/10">
                          <p className="text-xs text-[#19e6ff] font-medium">{profile.badges}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </Link>
              </GlowCard>
              </div>
            ))}
          </div>

          {/* LeetCode detailed cards embedded */}
          <div className="mt-12">
            <div className="flex items-center justify-between gap-3 flex-wrap mb-8">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-gradient-to-r from-[#7c5dff] to-[#19e6ff] text-[#0b0d17] text-sm font-semibold shadow-[0_12px_30px_rgba(25,230,255,0.25)]">
                  LeetCode
                </span>
              </div>
              <div className="flex items-center gap-4 flex-wrap">
                <Link
                  href={`https://leetcode.com/u/${leetcodeProfile.handle}/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 rounded-full border border-white/10 text-[#dfe7ff] text-sm font-semibold hover:text-white hover:border-white/30 transition-colors"
                >
                  View Profile
                </Link>
                <span className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600/20 via-cyan-600/15 to-blue-600/20 border border-blue-400/30 text-white text-xs font-semibold uppercase tracking-[0.15em] shadow-[0_4px_12px_rgba(59,130,246,0.2)]">
                  <div className="relative flex items-center justify-center h-8 w-8 rounded-lg bg-gradient-to-br from-blue-400/20 to-cyan-400/20 border border-blue-400/40 p-1.5">
                    <Image src="/image/guardian.png" alt="Guardian badge" width={32} height={32} className="h-full w-full object-contain drop-shadow-[0_2px_8px_rgba(96,165,250,0.6)]" />
                  </div>
                  <span className="bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">Guardian</span>
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <GlowCard identifier="lc-rating">
                <div className="lc-card h-full min-h-[300px] flex flex-col gap-4">
                  <div className="lc-label">Contest Rating</div>
                  <div className="lc-value">
                    {leetcodeProfile.rating}
                    <span className="lc-sub">{leetcodeProfile.level}</span>
                  </div>
                  <div className="lc-rank whitespace-nowrap">Global Rank <strong>{leetcodeProfile.rankGlobal}</strong> • Top {leetcodeProfile.topPercent}</div>
                  <div className="lc-badge"><span className="dot" />Guardian</div>
                </div>
              </GlowCard>

              <GlowCard identifier="lc-solved">
                <div className="lc-card h-full min-h-[300px] flex flex-col gap-4">
                  <div className="lc-label">Problems Solved</div>
                  <div className="lc-value">880+</div>
                  <div className="lc-bars">
                    <div className="bar">
                      <span>Easy</span>
                      <div className="track"><div className="fill easy" style={{ width: "32%" }} /></div>
                      <span className="count">{leetcodeProfile.solvedEasy}</span>
                    </div>
                    <div className="bar">
                      <span>Medium</span>
                      <div className="track"><div className="fill med" style={{ width: "54%" }} /></div>
                      <span className="count">{leetcodeProfile.solvedMedium}</span>
                    </div>
                    <div className="bar">
                      <span>Hard</span>
                      <div className="track"><div className="fill hard" style={{ width: "48%" }} /></div>
                      <span className="count">{leetcodeProfile.solvedHard}</span>
                    </div>
                  </div>
                </div>
              </GlowCard>

              <GlowCard identifier="lc-community">
                <div className="lc-card h-full min-h-[300px] flex flex-col gap-4">
                  <div className="lc-label">Community</div>
                  <div className="lc-value">4.3K</div>
                  <div className="lc-meta">
                    Solutions published: <strong>{`${leetcodeProfile.solutionsPublished}+`}</strong>
                    <span className="dot" />
                    Profile views: <strong>{`${leetcodeProfile.profileViews.toLocaleString()}+`}</strong>
                  </div>
                  <div className="pulse" />
                </div>
              </GlowCard>
            </div>
          </div>

          <style jsx>{`
            .lc-card {
              position: relative;
              overflow: hidden;
              padding: 18px 18px 20px;
              border-radius: 18px;
              background: linear-gradient(145deg, rgba(15, 18, 34, 0.9), rgba(9, 11, 23, 0.95));
              border: 1px solid rgba(255, 255, 255, 0.06);
              box-shadow: 0 18px 40px rgba(0, 0, 0, 0.35),
                0 0 18px rgba(255, 109, 255, 0.08),
                inset 0 0 1px rgba(255, 255, 255, 0.08);
              backdrop-filter: blur(12px);
              color: #e6f0ff;
            }
            .lc-label { font-size: 0.85rem; letter-spacing: 0.12em; text-transform: uppercase; color: #9ab0ff; }
            .lc-value { font-size: 2.4rem; font-weight: 800; color: #ffffff; }
            .lc-sub { margin-left: 8px; font-size: 0.95rem; color: #59e0c5; font-weight: 700; }
            .lc-rank { color: #b9c5ff; font-size: 0.9rem; }
            .lc-badge { margin-top: auto; display: inline-flex; align-items: center; gap: 8px; padding: 8px 12px; border-radius: 999px; background: linear-gradient(90deg, #142035, #162a3c); border: 1px solid rgba(255,255,255,0.08); color: #e6f0ff; font-weight: 600; }
            .lc-badge .dot { height: 8px; width: 8px; border-radius: 999px; background: #ffce5c; display: inline-block; }
            .lc-bars { display: grid; gap: 10px; }
            .bar { display: grid; grid-template-columns: 64px 1fr 42px; align-items: center; gap: 10px; color: #cfd6e8; }
            .track { height: 8px; border-radius: 999px; background: rgba(255,255,255,0.08); overflow: hidden; }
            .fill { height: 100%; border-radius: 999px; }
            .fill.easy { background: linear-gradient(90deg, #29e5ff, #10c5ff); }
            .fill.med { background: linear-gradient(90deg, #ff9b73, #ff7b59); }
            .fill.hard { background: linear-gradient(90deg, #c77dff, #9b6cff); }
            .count { color: #dfe7ff; font-weight: 700; }
            .lc-meta { color: #cbd6ff; font-size: 0.95rem; display: flex; align-items: center; gap: 10px; }
            .lc-meta .dot { height: 5px; width: 5px; background: #ffd55e; border-radius: 999px; display: inline-block; }
            .pulse { position: absolute; right: -40px; bottom: -40px; height: 140px; width: 140px; background: radial-gradient(closest-side, rgba(255, 109, 255, 0.35), transparent); filter: blur(12px); }
          `}</style>
        </div>
      </div>
    </div>
  );
}

export default CodingProfiles;
