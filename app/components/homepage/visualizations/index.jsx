// @flow strict
"use client";

import { useState, useEffect, Suspense, lazy } from "react";
import { FiBarChart2 } from "react-icons/fi";
import GlowCard from "../../helper/glow-card";


// Lazy load visualizations for better initial load
const SkillsVisualization = lazy(() => import("../../helper/skills-visualization"));
const ExperienceVisualization = lazy(() => import("../../helper/experience-visualization"));
const ProjectsVisualization = lazy(() => import("../../helper/projects-visualization"));

// Loading skeleton
function ChartSkeleton() {
  return (
    <div className="w-full h-96 dark:bg-white/5 rounded-lg animate-pulse" />
  );
}

function VisualizationSection() {
  const [activeTab, setActiveTab] = useState("skills");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const tabs = [
    { id: "skills", label: "Skills Proficiency", icon: "📊" },
    { id: "experience", label: "Experience Growth", icon: "📈" },
    { id: "projects", label: "Projects Distribution", icon: "🎯" },
  ];

  if (!mounted) {
    return (
      <div id="visualizations" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
        <div className="mx-4 lg:mx-0">
          <div className="w-full h-96 rounded-3xl border border-white/10 bg-white/5 animate-pulse" />
        </div>
      </div>
    );
  }

  return (
    <div id="visualizations" suppressHydrationWarning className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
        <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl opacity-20"></div>

        <div className="flex justify-center -translate-y-[1px]">
          <div className="w-3/4">
            <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
          </div>
        </div>

        <div className="flex justify-center my-6 lg:py-10">
          <div className="flex flex-col items-center gap-3">
            <div className="flex items-center gap-3">
              <span className="hidden sm:block h-[1px] w-16 bg-gradient-to-r from-transparent via-violet-500/60 to-transparent" />
              <span className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm md:text-base font-semibold text-white shadow-[0_12px_40px_rgba(0,0,0,0.35)] backdrop-blur flex items-center gap-2">
                <FiBarChart2 className="text-violet-400" size={18} />
                Analytics & Insights
              </span>
              <span className="hidden sm:block h-[1px] w-16 bg-gradient-to-r from-transparent via-[#16f2b3]/60 to-transparent" />
            </div>
            <p className="text-xs sm:text-sm text-[#c7d2ff]/80 max-w-2xl text-center px-4">
              Visual insights into my technical skills, professional growth, and project portfolio.
            </p>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex overflow-x-auto sm:flex-wrap justify-center gap-3 my-8 px-4 sm:px-0">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative px-5 py-3 rounded-xl font-semibold text-sm sm:text-base transition-all duration-500 flex items-center gap-2.5 group ${
                activeTab === tab.id
                  ? "bg-gradient-to-br from-[#0d1228]/80 via-[#0b1024]/80 to-[#0a0d1e]/80 border border-violet-500/50 text-white shadow-[0_10px_40px_rgba(139,92,246,0.3)] hover:shadow-[0_10px_50px_rgba(139,92,246,0.4)] animated-border-sm hover-glow"
                  : "bg-gradient-to-br from-[#0d1228]/60 via-[#0b1024]/60 to-[#0a0d1e]/60 border border-white/10 text-white/70 hover:border-violet-500/30 hover:text-white shadow-[0_10px_40px_rgba(0,0,0,0.35)] hover:shadow-[0_10px_40px_rgba(139,92,246,0.2)]"
              }`}
            >
              <span className="text-lg group-hover:scale-110 transition-transform duration-300">{tab.icon}</span>
              {tab.label}
              {activeTab === tab.id && (
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-violet-500/10 via-transparent to-[#16f2b3]/10 -z-10" />
              )}
              <div className="absolute -top-8 -right-8 h-16 w-16 rounded-full bg-violet-500/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </button>
          ))}
        </div>

        {/* Chart Container */}
        <div className="relative group rounded-3xl border border-[#262a4f] bg-gradient-to-br from-[#0b1229]/90 via-[#0e1535]/90 to-[#0a1027]/90 p-6 sm:p-8 lg:p-12 shadow-[0_20px_80px_rgba(0,0,0,0.35)] overflow-hidden mx-4 lg:mx-0 animated-border hover-glow">
          <div className="pointer-events-none absolute -left-10 -top-14 h-40 w-40 rounded-full bg-[#16f2b3]/20 blur-3xl animate-pulse" />
          <div className="pointer-events-none absolute -right-10 top-10 h-32 w-32 rounded-full bg-pink-500/20 blur-3xl animate-pulse" />
          <div className="pointer-events-none absolute left-1/3 bottom-0 h-24 w-24 rounded-full bg-indigo-500/20 blur-3xl animate-pulse" />
          
          <div className="relative z-10">
            {activeTab === "skills" && (
              <div className="animate-fadeIn">
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4">Technical Skills Proficiency</h3>
                <p className="text-sm text-gray-200/80 mb-8">
                  Proficiency levels across core technologies and frameworks I work with daily.
                </p>
                <Suspense fallback={<ChartSkeleton />}>
                  <SkillsVisualization />
                </Suspense>
              </div>
            )}

            {activeTab === "experience" && (
              <div className="animate-fadeIn">
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4">Career Growth & Impact</h3>
                <p className="text-sm text-gray-200/80 mb-8">
                  Progression of projects completed and overall impact score over 4+ years.
                </p>
                <Suspense fallback={<ChartSkeleton />}>
                  <ExperienceVisualization />
                </Suspense>
              </div>
            )}

            {activeTab === "projects" && (
              <div className="animate-fadeIn">
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4">Project Distribution by Type</h3>
                <p className="text-sm text-gray-200/80 mb-8">
                  Breakdown of 20+ projects across different technical domains.
                </p>
                <Suspense fallback={<ChartSkeleton />}>
                  <ProjectsVisualization />
                </Suspense>
              </div>
            )}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mt-12 px-4 lg:px-0">
          <GlowCard identifier="analytics-1" className="w-full">
            <div className="relative p-6 rounded-xl bg-gradient-to-br from-[#0d1228]/60 via-[#0b1024]/60 to-[#0a0d1e]/60 backdrop-blur-sm h-full overflow-hidden text-center">
              <div className="relative z-10">
                <p className="text-4xl sm:text-5xl font-bold text-[#16f2b3] mb-2">20+</p>
                <div className="flex justify-center -translate-y-[1px] mb-3">
                  <div className="w-3/4"><div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#16f2b3] to-transparent" /></div>
                </div>
                <p className="text-sm text-white/90 font-medium">Total Projects</p>
              </div>
            </div>
          </GlowCard>
          <GlowCard identifier="analytics-2" className="w-full">
            <div className="relative p-6 rounded-xl bg-gradient-to-br from-[#0d1228]/60 via-[#0b1024]/60 to-[#0a0d1e]/60 backdrop-blur-sm h-full overflow-hidden text-center">
              <div className="relative z-10">
                <p className="text-4xl sm:text-5xl font-bold text-violet-400 mb-2">95%</p>
                <div className="flex justify-center -translate-y-[1px] mb-3">
                  <div className="w-3/4"><div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" /></div>
                </div>
                <p className="text-sm text-white/90 font-medium">Avg. Proficiency</p>
              </div>
            </div>
          </GlowCard>
          <GlowCard identifier="analytics-3" className="w-full">
            <div className="relative p-6 rounded-xl bg-gradient-to-br from-[#0d1228]/60 via-[#0b1024]/60 to-[#0a0d1e]/60 backdrop-blur-sm h-full overflow-hidden text-center">
              <div className="relative z-10">
                <p className="text-4xl sm:text-5xl font-bold text-pink-400 mb-2">3</p>
                <div className="flex justify-center -translate-y-[1px] mb-3">
                  <div className="w-3/4"><div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-transparent" /></div>
                </div>
                <p className="text-sm text-white/90 font-medium">Prog. Languages</p>
              </div>
            </div>
          </GlowCard>
          <GlowCard identifier="analytics-4" className="w-full">
            <div className="relative p-6 rounded-xl bg-gradient-to-br from-[#0d1228]/60 via-[#0b1024]/60 to-[#0a0d1e]/60 backdrop-blur-sm h-full overflow-hidden text-center">
              <div className="relative z-10">
                <p className="text-4xl sm:text-5xl font-bold text-cyan-400 mb-2">4+</p>
                <div className="flex justify-center -translate-y-[1px] mb-3">
                  <div className="w-3/4"><div className="h-[1px] w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent" /></div>
                </div>
                <p className="text-sm text-white/90 font-medium">Years Experience</p>
              </div>
            </div>
          </GlowCard>
        </div>
      </div>
  );
}

export default VisualizationSection;
