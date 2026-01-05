"use client";

import { useEffect, useRef, useState } from "react";
import { recommendations } from "@/utils/data/recommendations";
import GlowCard from "../../helper/glow-card";

const CARD_INTERVAL_MS = 2000;

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

  return (
    <section id="recommendations" className="relative z-40 border-t my-12 lg:my-24 border-[#25213b]">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(120%_140%_at_20%_10%,rgba(82,113,255,0.14),transparent_55%),radial-gradient(90%_120%_at_80%_0%,rgba(0,224,255,0.12),transparent_60%),#07090f]" />

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Recommendations
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
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
          <GlowCard identifier={`reco-${item.id}`}>
            <div className="relative overflow-hidden rounded-xl p-5 sm:p-6 text-white min-h-[320px] sm:min-h-[300px] grid gap-1">
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -left-1/3 top-1/4 h-56 w-56 rounded-full bg-[radial-gradient(circle_at_center,rgba(0,245,196,0.16),transparent_55%)] blur-2xl" />
                <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[radial-gradient(circle_at_center,rgba(82,113,255,0.15),transparent_60%)] blur-2xl" />
              </div>

              <div className="relative grid gap-1">
                <div className="grid gap-0.5">
                  <div className="text-lg font-semibold text-white">{item.name}</div>
                  <div className="text-sm text-[#9eb3ff] leading-snug">{item.title}</div>
                  <div className="flex flex-wrap items-center gap-0.5 text-xs text-[#7f8baa] leading-snug">
                    <span>{item.date}</span>
                    <span className="h-1 w-1 rounded-full bg-[#55607a]"></span>
                    <span>{item.relationship}</span>
                  </div>
                </div>
                <p className="text-sm sm:text-base leading-relaxed text-[#d8e5ff]">“{item.quote}”</p>
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
      `}</style>
    </section>
  );
}

export default Recommendations;
