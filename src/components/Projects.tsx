import { MDBTypography, MDBRow, MDBCol } from "mdb-react-ui-kit"
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
      <MDBRow
        className="row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 justify-content-lg-center
      "
      >
        {projects.map((project) => (
          <MDBCol key={project.title}>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            <Card {...project} />
          </MDBCol>
        ))}
      </MDBRow>
    </div>
  )
}

export default Projects
