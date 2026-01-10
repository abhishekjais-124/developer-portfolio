// @flow strict
"use client";

import certificationsData from "@/utils/data/certifications";
import { FiAward } from "react-icons/fi";
import GlowCard from "../../helper/glow-card";

function Certifications() {

  return (
    <div id="certifications" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <div className="absolute inset-x-0 -top-10 h-64 bg-[radial-gradient(circle_at_30%_20%,rgba(251,191,36,0.15),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(99,102,241,0.18),transparent_42%)] blur-3xl opacity-70 pointer-events-none" />
      <div className="flex justify-center my-6 lg:py-10">
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center gap-3">
            <span className="hidden sm:block h-[1px] w-16 bg-gradient-to-r from-transparent via-amber-500/60 to-transparent" />
            <span className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm md:text-base font-semibold text-white shadow-[0_12px_40px_rgba(0,0,0,0.35)] backdrop-blur flex items-center gap-2">
              <FiAward className="text-amber-400" size={18} />
              Certifications
            </span>
            <span className="hidden sm:block h-[1px] w-16 bg-gradient-to-r from-transparent via-amber-500/60 to-transparent" />
          </div>
          <p className="text-xs sm:text-sm text-[#c7d2ff]/80 max-w-2xl text-center px-4">
            Professional certifications and achievements from leading platforms.
          </p>
        </div>
      </div>

      <div className="py-8 max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 items-stretch">
          {certificationsData.map((cert) => (
            <GlowCard key={cert.id} identifier={`cert-${cert.id}`} className="h-full">
              <div
                className="relative p-4 sm:p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1228]/85 via-[#0b1024]/85 to-[#0a0d1e]/85 backdrop-blur-xl shadow-[0_16px_60px_rgba(0,0,0,0.35)] overflow-hidden group cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_80px_rgba(0,0,0,0.45)] h-full flex flex-col"
                onClick={() => window.open(cert.link, '_blank', 'noopener,noreferrer')}
              >
                <div className="absolute inset-0 opacity-45 bg-[radial-gradient(circle_at_20%_20%,rgba(251,191,36,0.14),transparent_38%),radial-gradient(circle_at_78%_18%,rgba(106,90,249,0.2),transparent_36%)]" />
                <div className="absolute inset-0 border border-white/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative flex items-start gap-3">
                  <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-2xl bg-gradient-to-br from-amber-500/35 to-orange-500/22 border border-amber-500/30 flex items-center justify-center shadow-lg flex-shrink-0">
                    <FiAward size={24} className="text-amber-200" />
                  </div>
                  <div className="flex-1 min-w-0 space-y-1.5">
                    <p className="text-[11px] uppercase tracking-[0.14em] text-amber-200/80">Verified</p>
                    <h3 className="text-base sm:text-lg font-semibold text-white leading-snug group-hover:text-amber-100 transition-colors">
                      {cert.title.replace(/^HackerRank\s*-\s*/i, "")}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-amber-200/70">ID: {cert.certificateId || cert.id}</p>
                    <div className="flex flex-wrap gap-2 pt-1">
                      <span className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 border border-amber-400/40 text-amber-100 px-3 py-1 text-xs font-semibold">
                        <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
                        HackerRank
                      </span>
                    </div>
                  </div>
                </div>

                <div className="relative mt-5 sm:mt-6 flex items-center justify-between text-xs sm:text-sm text-white/70">
                  <span className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-amber-300 animate-pulse" />
                    Click to view
                  </span>
                  <span className="rounded-full px-3 py-1 bg-white/10 border border-white/15 text-[10px] sm:text-xs uppercase tracking-[0.08em]">
                    Open
                  </span>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Certifications;
