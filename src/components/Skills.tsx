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

  // eslint-disable-next-line prettier/prettier, @typescript-eslint/no-unused-vars
  const mobileCol1 = ["Cypress","Testing Library", "Javascrpt", "Typescrpt", "React", "Git", "VIM", "Gitlab", "Bitbucket", "Github"]
  // eslint-disable-next-line prettier/prettier, @typescript-eslint/no-unused-vars
  const mobileCol2 =["Webpack", "qtest", "Browsertack", "VSCode", "YAML", "Bash", "Ember", "HTML", "CSS", "Styled Components"]

  return (
    <div id={id} data-testid={id} className="pt-5">
      <MDBTypography tag="h3" className="text-center py-3">
        Skills
      </MDBTypography>
      <div className="skills-list d-flex flex-wrap justify-content-evenly justify-content-sm-center align-items-center">
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
      {/* <MDBRow center className="skills-mobile d-flex d-sm-none">
        <MDBCol size={6}>
          <ul>
            {mobileCol1.map((item) => {
              return <li key={item}>{item}</li>
            })}
          </ul>
        </MDBCol>
        <MDBCol size={6}>
          <ul>
            {mobileCol2.map((item) => {
              return <li key={item}>{item}</li>
            })}
          </ul>
        </MDBCol>
      </MDBRow> */}
    </div>
  )
}

export default Skills
