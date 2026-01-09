import { projectsData } from '@/utils/data/projects-data';
import ProjectCard from './project-card';
import { FiLayers } from 'react-icons/fi';

const Projects = () => {

  return (
    <div id='projects' className="relative z-50 my-12 lg:my-24">
      <div className="absolute -inset-6 rounded-[32px] bg-gradient-to-br from-violet-500/10 via-transparent to-[#16f2b3]/10 blur-3xl opacity-40" />
      
      <div className="flex justify-center my-6 lg:py-10">
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center gap-3">
            <span className="hidden sm:block h-[1px] w-16 bg-gradient-to-r from-transparent via-violet-500/60 to-transparent" />
            <span className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm md:text-base font-semibold text-white shadow-[0_12px_40px_rgba(0,0,0,0.35)] backdrop-blur flex items-center gap-2">
              <FiLayers className="text-violet-400" size={18} />
              Projects
            </span>
            <span className="hidden sm:block h-[1px] w-16 bg-gradient-to-r from-transparent via-[#16f2b3]/60 to-transparent" />
          </div>
          <p className="text-xs sm:text-sm text-[#c7d2ff]/80 max-w-2xl text-center px-4">
            Key projects where I architected solutions, shipped features, and delivered impact.
          </p>
        </div>
      </div>

      <div className="pt-12 relative">
        <div className="flex flex-col gap-8 max-w-3xl mx-auto px-4">
          {projectsData.slice(0, 4).map((project, index) => (
            <div
              id={`sticky-card-${index + 1}`}
              key={index}
              className="sticky-card w-full sticky group"
            >
              <div className="box-border flex items-center justify-center rounded-2xl shadow-[0_10px_60px_0_rgba(0,0,0,0.4)] hover:shadow-[0_15px_80px_0_rgba(139,92,246,0.25)] transition-all duration-500">
                <ProjectCard project={project} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;