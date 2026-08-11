import { projectContent } from "../constants/appData"
import projects from "../constants/projectsData"

import Card from "./shared/CardContainer"

import type { SectionProps } from "../types/types"

function Projects({ id }: SectionProps): JSX.Element {
  return (
    <div id={id} data-testid={id} className="projects">
      <p className="projects-eyebrow">{projectContent.eyebrow}</p>
      <h2 className="prompt">
        <span className="prompt-symbol" aria-hidden="true">
          $
        </span>{" "}
        {projectContent.heading}
      </h2>
      <p className="projects-caption">{projectContent.caption}</p>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <Card key={project.title} index={index} {...project} />
        ))}
      </div>
    </div>
  )
}

export default Projects
