"use client";

import Link from "next/link";
import Reveal from "../../atelier/reveal";

function ProjectCard({ project, index = 0 }) {
  return (
    <Reveal delay={index * 80} variant="reveal-zoom">
      <article className="atelier-card group overflow-hidden">
        <div className="grid lg:grid-cols-[0.28fr_1fr]">
          <div className="flex items-center justify-between gap-4 border-b border-[#c9a962]/12 px-5 py-4 lg:flex-col lg:items-start lg:justify-start lg:gap-6 lg:border-b-0 lg:border-r lg:p-6">
            <span className="font-display text-3xl italic text-[#c9a962]/70 lg:text-4xl">0{index + 1}</span>
            <p className="text-right text-[0.58rem] uppercase tracking-[0.18em] text-[#8d867b] lg:text-left lg:text-[0.62rem] lg:tracking-[0.22em]">{project.role}</p>
          </div>
          <div className="p-5 sm:p-6 lg:p-7">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <h3 className="font-display text-[1.45rem] leading-tight text-[#f3eee4] sm:text-3xl">{project.name}</h3>
              <div className="flex gap-3">
                {project.demo && (
                  <Link
                    href={project.demo}
                    target="_blank"
                    className="inline-flex min-h-10 items-center text-[0.65rem] uppercase tracking-[0.2em] text-[#c9a962] hover:text-[#e8d5a3]"
                  >
                    Live
                  </Link>
                )}
                {project.code && (
                  <Link
                    href={project.code}
                    target="_blank"
                    className="inline-flex min-h-10 items-center text-[0.65rem] uppercase tracking-[0.2em] text-[#c9a962] hover:text-[#e8d5a3]"
                  >
                    Code
                  </Link>
                )}
              </div>
            </div>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-[#c8c0b2]">
              {project.description}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="border border-[#c9a962]/18 px-3 py-1 text-[0.65rem] uppercase tracking-[0.16em] text-[#c8c0b2]"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export default ProjectCard;
