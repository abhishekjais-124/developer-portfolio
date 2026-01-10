"use client";

import { leetcodeProfile } from "@/utils/data/leetcode";
import Image from "next/image";
import Link from "next/link";
import GlowCard from "../../helper/glow-card";
import { SiLeetcode } from "react-icons/si";
import { FiExternalLink, FiAward } from "react-icons/fi";

function LeetCodeSection() {
  const p = leetcodeProfile;
  return (
    <section id="leetcode" className="lc-wrap relative z-40 border-t border-[#25213b] py-14">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(120%_140%_at_20%_10%,rgba(82,113,255,0.18),transparent_55%),radial-gradient(90%_120%_at_80%_0%,rgba(0,224,255,0.16),transparent_60%),#060811]" />
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-30" style={{backgroundImage:"radial-gradient(circle at 30% 25%, rgba(124,93,255,0.18) 0, transparent 35%), radial-gradient(circle at 70% 50%, rgba(25,230,255,0.2) 0, transparent 30%)"}} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex justify-center mb-10">
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-3">
              <span className="hidden sm:block h-[1px] w-16 bg-gradient-to-r from-transparent via-[#7c5dff]/60 to-transparent" />
              <span className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm md:text-base font-semibold text-white shadow-[0_12px_40px_rgba(0,0,0,0.35)] backdrop-blur flex items-center gap-2">
                <SiLeetcode className="text-[#ffa116]" size={20} />
                LeetCode Stats
              </span>
              <span className="hidden sm:block h-[1px] w-16 bg-gradient-to-r from-transparent via-[#19e6ff]/60 to-transparent" />
            </div>
            <p className="text-xs sm:text-sm text-[#c7d2ff]/80 max-w-2xl text-center px-4">
              Competitive programming journey with 880+ problems solved and Guardian badge.
            </p>
          </div>
        </div>
        
        <div className="flex items-center justify-center sm:justify-between gap-4 flex-wrap mb-8 bg-gradient-to-r from-[#0d1228]/60 via-[#0b1024]/60 to-[#0a0d1e]/60 backdrop-blur-sm border border-white/10 rounded-2xl p-4 sm:p-6 shadow-[0_10px_40px_rgba(0,0,0,0.35)]">
          <Link
            href={`https://leetcode.com/u/${p.handle}/`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#7c5dff] to-[#19e6ff] text-white text-sm font-semibold shadow-[0_8px_24px_rgba(25,230,255,0.3)] hover:shadow-[0_8px_32px_rgba(25,230,255,0.45)] transition-all duration-300 flex items-center gap-2"
          >
            <span>View Profile</span>
            <FiExternalLink size={14} />
          </Link>
          <div className="flex items-center gap-3 px-4 py-2.5 rounded-full bg-gradient-to-r from-amber-500/10 to-yellow-500/10 border border-amber-500/20">
            <Image src="/image/guardian.png" alt="Guardian badge" width={32} height={32} className="h-8 w-8 rounded-full" />
            <div className="flex items-center gap-2 text-amber-300">
              <FiAward size={16} />
              <span className="text-sm font-semibold uppercase tracking-wider">Guardian Badge</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <GlowCard identifier="lc-rating">
            <div className="lc-card h-full min-h-[300px] flex flex-col gap-4">
              <div className="lc-label">Contest Rating</div>
              <div className="lc-value">
                {p.rating}
                <span className="lc-sub">{p.level}</span>
              </div>
              <div className="lc-rank whitespace-nowrap">Global Rank <strong>{p.rankGlobal}</strong> • Top {p.topPercent}</div>
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
                  <span className="count">{p.solvedEasy}</span>
                </div>
                <div className="bar">
                  <span>Medium</span>
                  <div className="track"><div className="fill med" style={{ width: "54%" }} /></div>
                  <span className="count">{p.solvedMedium}</span>
                </div>
                <div className="bar">
                  <span>Hard</span>
                  <div className="track"><div className="fill hard" style={{ width: "48%" }} /></div>
                  <span className="count">{p.solvedHard}</span>
                </div>
              </div>
            </div>
          </GlowCard>

          <GlowCard identifier="lc-community">
            <div className="lc-card h-full min-h-[300px] flex flex-col gap-4">
              <div className="lc-label">Community</div>
              <div className="lc-value">4.3K</div>
              <div className="lc-meta">
                Solutions published: <strong>{`${p.solutionsPublished}+`}</strong>
                <span className="dot" />
                Profile views: <strong>{`${p.profileViews.toLocaleString()}+`}</strong>
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
          padding: 20px;
          border-radius: 20px;
          background: linear-gradient(145deg, rgba(13, 18, 40, 0.85), rgba(10, 13, 30, 0.9));
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4),
            0 0 20px rgba(124, 93, 255, 0.1),
            inset 0 0 1px rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(16px);
          color: #e6f0ff;
          animation: fadeIn 420ms ease;
          transition: all 0.4s ease;
        }
        .lc-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 24px 60px rgba(0, 0, 0, 0.45),
            0 0 30px rgba(124, 93, 255, 0.15),
            inset 0 0 1px rgba(255, 255, 255, 0.12);
        }
        .lc-card::after {
          content: "";
          position: absolute;
          inset: -40% 50%;
          background: radial-gradient(circle at center, rgba(124, 93, 255, 0.2), transparent 55%);
          transform: rotate(8deg);
          opacity: 0.6;
          animation: drift 10s ease-in-out infinite alternate;
          pointer-events: none;
        }
        .lc-label {
          font-size: 12px;
          letter-spacing: 0.15em;
          color: #7c9eff;
          text-transform: uppercase;
          font-weight: 600;
        }
        .lc-value {
          font-size: 36px;
          font-weight: 800;
          letter-spacing: -0.5px;
          display: flex;
          align-items: baseline;
          gap: 12px;
          margin-top: 8px;
          background: linear-gradient(135deg, #ffffff, #a8c0ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .lc-sub {
          font-size: 15px;
          font-weight: 700;
          color: #5cf8d1;
          background: linear-gradient(135deg, #5cf8d1, #19e6ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .lc-rank {
          margin-top: 4px;
          color: #c9d7ff;
          font-size: 14px;
        }
        .lc-badge {
          margin-top: 12px;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 10px 14px;
          border-radius: 999px;
          background: linear-gradient(120deg, rgba(124, 93, 255, 0.2), rgba(25, 230, 255, 0.15));
          color: #f7f2ff;
          font-weight: 700;
          font-size: 14px;
          box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.1),
            0 4px 12px rgba(124, 93, 255, 0.2);
        }
        .dot {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: linear-gradient(135deg, #ffd166, #ffb347);
          box-shadow: 0 0 16px rgba(255, 209, 102, 0.8),
            0 0 4px rgba(255, 209, 102, 0.6);
          animation: pulse-dot 2s ease-in-out infinite;
        }
        @keyframes pulse-dot {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.1); opacity: 0.9; }
        }
        .lc-bars {
          display: grid;
          gap: 8px;
          margin-top: 8px;
        }
        .bar {
          display: grid;
          grid-template-columns: auto 1fr auto;
          align-items: center;
          gap: 8px;
          color: #dfe7ff;
          font-size: 14px;
        }
        .track {
          position: relative;
          height: 8px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.05);
          overflow: hidden;
        }
        .fill {
          height: 100%;
          border-radius: 999px;
          animation: grow 0.9s ease forwards;
        }
        .easy {
          background: linear-gradient(90deg, #1beabd, #05a1ff);
        }
        .med {
          background: linear-gradient(90deg, #ffb347, #ff6b6b);
        }
        .hard {
          background: linear-gradient(90deg, #b88bff, #7c5dff);
        }
        .count {
          font-weight: 700;
          color: #f3f7ff;
          font-size: 13px;
        }
        .lc-meta {
          margin-top: 8px;
          display: flex;
          gap: 8px;
          align-items: center;
          color: #c9d7ff;
          font-size: 14px;
        }
        .pulse {
          position: absolute;
          inset: 1px;
          border-radius: 16px;
          background: radial-gradient(circle at 30% 20%, rgba(0, 255, 209, 0.12), transparent 45%);
          animation: pulse 2.4s ease-in-out infinite;
          pointer-events: none;
          mix-blend-mode: screen;
        }
        @keyframes drift {
          from { transform: translate3d(0, 0, 0) rotate(6deg); }
          to { transform: translate3d(6px, -6px, 0) rotate(10deg); }
        }
        @keyframes grow {
          from { transform: scaleX(0); transform-origin: left; }
          to { transform: scaleX(1); transform-origin: left; }
        }
        @keyframes pulse {
          0% { opacity: 0.28; }
          50% { opacity: 0.46; }
          100% { opacity: 0.28; }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 720px) {
          .lc-value { font-size: 28px; }
        }
      `}</style>
    </section>
  );
}

export default LeetCodeSection;
