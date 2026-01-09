"use client";

import { useEffect, useRef, useState } from "react";
import { recommendations } from "@/utils/data/recommendations";
import GlowCard from "../../helper/glow-card";
import { FiMessageSquare } from "react-icons/fi";

const CARD_INTERVAL_MS = 3000;

function Recommendations() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (paused) {
      clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % recommendations.length);
    }, CARD_INTERVAL_MS);

    return () => clearInterval(timerRef.current);
  }, [paused]);

  const item = recommendations[index];
  const direction = index % 2 === 0 ? "from-left" : "from-right";
  const progressKey = `${item.id}-${index}-progress`;

  return (
    <section id="recommendations" className="relative z-40 border-t my-12 lg:my-24 border-[#25213b]">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(120%_140%_at_20%_10%,rgba(82,113,255,0.14),transparent_55%),radial-gradient(90%_120%_at_80%_0%,rgba(0,224,255,0.12),transparent_60%),#07090f]" />
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-30" style={{backgroundImage:"radial-gradient(circle at 20% 20%, rgba(106,90,249,0.15) 0, transparent 30%), radial-gradient(circle at 80% 40%, rgba(22,242,179,0.18) 0, transparent 28%)"}} />

      <div className="flex justify-center my-6 lg:py-10">
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center gap-3">
            <span className="hidden sm:block h-[1px] w-16 bg-gradient-to-r from-transparent via-pink-500/60 to-transparent" />
            <span className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm md:text-base font-semibold text-white shadow-[0_12px_40px_rgba(0,0,0,0.35)] backdrop-blur">
              Recommendations
            </span>
            <span className="hidden sm:block h-[1px] w-16 bg-gradient-to-r from-transparent via-[#16f2b3]/60 to-transparent" />
          </div>
          <p className="text-xs sm:text-sm text-[#c7d2ff]/80 max-w-2xl text-center px-4">
            Words from teammates and mentors about how we shipped, collaborated, and delivered under pressure.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div
          key={`${item.id}-${index}`}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
          className={direction}
        >
          <GlowCard identifier={`reco-${item.id}`} className="bg-gradient-to-br from-[#0d1228]/90 via-[#0b1024]/90 to-[#0a0d1e]/90 border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
            <div className="relative w-full overflow-hidden rounded-xl p-6 sm:p-8 text-white flex flex-col gap-4 min-h-[360px] sm:min-h-[340px] lg:min-h-[320px]">
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -left-1/3 top-1/4 h-56 w-56 rounded-full bg-[radial-gradient(circle_at_center,rgba(0,245,196,0.14),transparent_55%)] blur-2xl" />
                <div className="absolute right-0 top-0 h-44 w-44 rounded-full bg-[radial-gradient(circle_at_center,rgba(82,113,255,0.14),transparent_60%)] blur-2xl" />
                <div className="absolute inset-0 opacity-30 bg-[linear-gradient(120deg,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:80px_80px]" />
              </div>

              <div className="relative flex items-start gap-4">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#16f2b3]/20 via-[#6a5af9]/20 to-[#f472b6]/20 border border-white/10 flex items-center justify-center text-[#16f2b3]">
                  <FiMessageSquare size={22} />
                </div>
                <div className="flex-1 flex flex-col gap-1.5">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-lg font-semibold text-white">{item.name}</span>
                  </div>
                  <div className="text-sm text-[#9eb3ff] leading-snug">{item.title}</div>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-[#8da0c3] leading-snug">
                    <span className="px-2 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] uppercase tracking-[0.14em] text-white/80">{item.date}</span>
                    <span className="px-2 py-1 rounded-full bg-[#16f2b3]/10 text-[#16f2b3] border border-[#16f2b3]/20">{item.relationship}</span>
                  </div>
                </div>
              </div>

              <p className="relative text-base leading-relaxed text-[#d8e5ff]">
                “{item.quote}”
              </p>

              <div className="relative mt-auto pt-2">
                <div className="h-[2px] w-full bg-white/5 rounded-full overflow-hidden">
                  <div
                    key={progressKey}
                    className="h-full bg-gradient-to-r from-[#16f2b3] via-[#6a5af9] to-[#f472b6] animate-progress"
                    style={{ animationDuration: `${CARD_INTERVAL_MS}ms`, animationPlayState: paused ? "paused" : "running" }}
                  />
                </div>
              </div>
            </div>
          </GlowCard>
        </div>
      </div>

      <style jsx>{`
        .reco-card {
          animation: fadeIn 320ms ease, swap 480ms ease;
        }
        .from-left {
          --offset: -32px;
        }
        .from-right {
          --offset: 32px;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes swap {
          from { transform: translateX(var(--offset)); }
          to { transform: translateX(0); }
        }
        .animate-progress {
          animation: progressLinear linear forwards;
        }
        @keyframes progressLinear {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </section>
  );
}

export default Recommendations;
