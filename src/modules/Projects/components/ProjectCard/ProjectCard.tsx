import type { Project } from "@/utils/types";

import "@/modules/Projects/Projects.css";

function ProjectCard({ clientName, link, linkTitle, summary }: Project) {
  return (
    <a className="projectCard" href={link} target="_blank" title={linkTitle}>
      <h3>{clientName}</h3>
      {summary}
    </a>
  );
}

export default ProjectCard;
