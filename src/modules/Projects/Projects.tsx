import { PROJECTS } from "@/utils/constants";
import ProjectCard from "./components/ProjectCard/ProjectCard";

import "./Projects.css";

function ProjectsModule() {
  return (
    <section className="projectsSection">
      <h2>Clients and Projects</h2>
      <div className="projectsList">
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.clientName}
            clientName={project.clientName}
            link={project.link}
            linkTitle={project.linkTitle}
            summary={project.summary}
          />
        ))}
      </div>
    </section>
  );
}

export default ProjectsModule;
