"use client";

import { leetcodeProfile } from "@/utils/data/leetcode";
import Image from "next/image";
import Link from "next/link";
import GlowCard from "../../helper/glow-card";

function LeetCodeSection() {
  const p = leetcodeProfile;
  return (
    <section id="leetcode" className="lc-wrap relative z-40 border-t border-[#25213b] py-14">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(120%_140%_at_20%_10%,rgba(82,113,255,0.18),transparent_55%),radial-gradient(90%_120%_at_80%_0%,rgba(0,224,255,0.16),transparent_60%),#060811]" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between gap-3 flex-wrap mb-8">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-gradient-to-r from-[#7c5dff] to-[#19e6ff] text-[#0b0d17] text-sm font-semibold shadow-[0_12px_30px_rgba(25,230,255,0.25)]">
              LeetCode Highlights
            </span>
            <span className="text-[#c9d7ff] font-semibold text-sm">@{p.handle}</span>
          </div>
          <div className="flex items-center gap-4 flex-wrap">
            <Link
              href={`https://leetcode.com/u/${p.handle}/`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 rounded-full border border-white/10 text-[#dfe7ff] text-sm font-semibold hover:text-white hover:border-white/30 transition-colors"
            >
              View Profile
            </Link>
            <span className="flex items-center gap-2 text-[#8fa2ff] text-xs uppercase tracking-[0.2em]">
              <Image src="/image/guardian.png" alt="Guardian badge" width={28} height={28} className="h-7 w-7 rounded-full" />
              Guardian Badge
            </span>
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
          padding: 18px 18px 20px;
          border-radius: 18px;
          background: linear-gradient(145deg, rgba(15, 18, 34, 0.9), rgba(9, 11, 23, 0.95));
          border: 1px solid rgba(255, 255, 255, 0.06);
          box-shadow: 0 18px 40px rgba(0, 0, 0, 0.35),
            0 0 18px rgba(255, 109, 255, 0.08),
            inset 0 0 1px rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(12px);
          color: #e6f0ff;
          animation: fadeIn 420ms ease;
        }
        .lc-card::after {
          content: "";
          position: absolute;
          inset: -40% 50%;
          background: radial-gradient(circle at center, rgba(255, 0, 204, 0.16), transparent 55%);
          transform: rotate(8deg);
          opacity: 0.8;
          animation: drift 8s ease-in-out infinite alternate;
          pointer-events: none;
        }
        .lc-label {
          font-size: 13px;
          letter-spacing: 0.3px;
          color: #8fa2ff;
          text-transform: uppercase;
        }
        .lc-value {
          font-size: 32px;
          font-weight: 800;
          letter-spacing: 0.2px;
          display: flex;
          align-items: baseline;
          gap: 10px;
          margin-top: 6px;
        }
        .lc-sub {
          font-size: 14px;
          font-weight: 600;
          color: #7ce7ff;
        }
        .lc-rank {
          margin-top: 4px;
          color: #c9d7ff;
          font-size: 14px;
        }
        .lc-badge {
          margin-top: 10px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 12px;
          border-radius: 999px;
          background: linear-gradient(120deg, rgba(124, 93, 255, 0.16), rgba(25, 230, 255, 0.12));
          color: #f7f2ff;
          font-weight: 600;
          box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.08);
        }
        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #ffd166;
          box-shadow: 0 0 12px rgba(255, 209, 102, 0.7);
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
