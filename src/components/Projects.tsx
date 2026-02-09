import { MDBTypography } from "mdb-react-ui-kit"
import Card from "./shared/CardContainer"
import projects from "../projectsData"
import type { SectionProps } from "../types"

function Projects({ id }: SectionProps): JSX.Element {
  return (
    <div id={id} data-testid={id} className="py-5 px-4">
      <hr />
      <MDBTypography tag="h2" className="text-center py-2">
        Projects
      </MDBTypography>
      <hr />
      <div className="projects-list">
        {projects.map((project) => (
          <>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            <Card {...project} />
          </>
        ))}
      </div>
    </div>
  )
}

export default Projects
