"use client";

import { useState, useEffect, Suspense, lazy } from "react";
import Reveal from "../../atelier/reveal";
import SectionHeading from "../../atelier/section-heading";
import CountUp from "../../atelier/count-up";
import SectionFx from "../../atelier/section-fx";

const SkillsVisualization = lazy(() => import("../../helper/skills-visualization"));
const ExperienceVisualization = lazy(() => import("../../helper/experience-visualization"));
const ProjectsVisualization = lazy(() => import("../../helper/projects-visualization"));

function ChartSkeleton() {
  return <div className="h-96 w-full animate-pulse bg-white/5" />;
}

function VisualizationSection() {
  const [activeTab, setActiveTab] = useState("skills");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const tabs = [
    { id: "skills", label: "Proficiency" },
    { id: "experience", label: "Growth" },
    { id: "projects", label: "Distribution" },
  ];

  return (
    <section id="visualizations" className="relative overflow-hidden py-10 lg:py-16">
      <SectionFx variant="grid" />
      <div className="atelier-wrap">
        <SectionHeading
          index="12"
          kicker="Atlas"
          title="The shape of the work."
          subtitle="A quieter reading of skills, growth, and where the hours have gone."
        />

        <div className="-mx-1 mb-6 flex gap-2 overflow-x-auto px-1 pb-1 sm:mb-8 sm:flex-wrap sm:gap-3 sm:overflow-visible">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`shrink-0 px-4 py-2.5 text-[0.62rem] uppercase tracking-[0.16em] transition-colors sm:px-5 sm:text-[0.68rem] sm:tracking-[0.2em] ${
                activeTab === tab.id
                  ? "bg-[#c9a962] text-[#070707]"
                  : "border border-[#c9a962]/25 text-[#c8c0b2] hover:border-[#c9a962]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <Reveal>
          <div className="atelier-card p-4 sm:p-8 lg:p-10">
            {!mounted ? (
              <ChartSkeleton />
            ) : (
              <Suspense fallback={<ChartSkeleton />}>
                {activeTab === "skills" && <SkillsVisualization />}
                {activeTab === "experience" && <ExperienceVisualization />}
                {activeTab === "projects" && <ProjectsVisualization />}
              </Suspense>
            )}
          </div>
        </Reveal>

        <div className="mt-8 grid grid-cols-2 gap-px bg-[#c9a962]/15 lg:grid-cols-4">
          {[
            ["20+", "Projects"],
            ["95%", "Avg. proficiency"],
            ["3", "Core languages"],
            ["4+", "Years"],
          ].map(([value, label], i) => (
            <Reveal key={label} delay={i * 60}>
              <div className="bg-[#070707] p-4 text-center sm:p-6">
                <p className="font-display text-3xl text-[#f3eee4] sm:text-4xl">
                  <CountUp value={value} />
                </p>
                <p className="mt-2 text-[0.62rem] uppercase tracking-[0.2em] text-[#8d867b]">{label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default VisualizationSection;
