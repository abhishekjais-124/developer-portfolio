import { projectsData } from "@/utils/data/projects-data";
import ProjectCard from "./project-card";
import SectionHeading from "../../atelier/section-heading";
import SectionFx from "../../atelier/section-fx";

const Projects = () => {
  return (
    <section id="projects" className="relative overflow-hidden py-10 lg:py-16">
      <SectionFx variant="waves" />
      <div className="atelier-wrap">
        <SectionHeading
          index="04"
          kicker="Selected work"
          title="Pieces that earned their place."
          subtitle="Not a gallery of everything — only the systems that changed how people learn, buy, and pay."
        />
        <div className="flex flex-col gap-4">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
