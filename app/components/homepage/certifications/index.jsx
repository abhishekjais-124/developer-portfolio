"use client";

import certificationsData from "@/utils/data/certifications";
import GlowCard from "../../helper/glow-card";
import Reveal from "../../atelier/reveal";
import SectionHeading from "../../atelier/section-heading";
import SectionFx from "../../atelier/section-fx";

function Certifications() {
  return (
    <section id="certifications" className="relative overflow-hidden py-10 lg:py-16">
      <SectionFx variant="grid" />
      <div className="atelier-wrap">
        <SectionHeading
          index="08"
          kicker="Proof"
          title="Verified, then filed."
          subtitle="A handful of certificates — useful as receipts, never as a substitute for shipped work."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {certificationsData.map((cert, index) => (
            <Reveal key={cert.id} delay={index * 70}>
              <GlowCard identifier={`cert-${cert.id}`} className="h-full">
                <button
                  className="flex h-full w-full flex-col p-5 text-left sm:p-6"
                  onClick={() => window.open(cert.link, "_blank", "noopener,noreferrer")}
                >
                  <p className="text-[0.62rem] uppercase tracking-[0.22em] text-[#c9a962]">HackerRank</p>
                  <h3 className="mt-4 font-display text-xl leading-snug text-[#f3eee4]">
                    {cert.title.replace(/^HackerRank\s*-\s*/i, "")}
                  </h3>
                  <p className="mt-3 text-[0.68rem] uppercase tracking-[0.16em] text-[#8d867b]">
                    ID {cert.certificateId || cert.id}
                  </p>
                  <span className="mt-8 text-[0.65rem] uppercase tracking-[0.2em] text-[#e8d5a3]">
                    Open certificate →
                  </span>
                </button>
              </GlowCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;
