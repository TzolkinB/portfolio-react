import { MDBTypography } from "mdb-react-ui-kit"
import {
  cloudHosting,
  testingTools,
  terminalTools,
  webDevTools,
  getImage,
} from "../tech-icons"

function Skills(props: { id: string }) {
  const { id } = props

  return (
    <div id={id} data-testid={id} className="pt-5">
      <hr />
      <MDBTypography tag="h2" className="text-center py-2">
        Skills
      </MDBTypography>
      <hr />
      <div className="skills-list">
        {testingTools.map((tool) => {
          return getImage(tool)
        })}
        {webDevTools.map((tool) => {
          return getImage(tool)
        })}
        {terminalTools.map((tool) => {
          return getImage(tool)
        })}
        {cloudHosting.map((cloud) => {
          return getImage(cloud)
        })}
      </div>
    </div>
  )
}

export default Skills
