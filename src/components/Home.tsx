import { MDBContainer, MDBTypography } from "mdb-react-ui-kit"
import Me from "IMG/profile2.jpg"
import About from "./About"
import Skills from "./Skills"
import Projects from "./Projects"

const msg =
  "%c👋 Thank you for visiting my website! If you like my credentials and are looking for an SDET with expertise in Cypress, DM me. Let's discuss!"
const styles = [
  "font-size: 12px",
  "font-family: monospace",
  "background: black",
  "display: inline-block",
  "color: #5DC1BE",
  "padding: 8px 15px",
  "border: 3px solid;",
].join(";")

// eslint-disable-next-line react/function-component-definition
const Home = () => {
  // eslint-disable-next-line no-console
  console.log(msg, styles)
  return (
    <MDBContainer fluid className="app gx-0">
      <div
        id="home"
        data-testid="home"
        className="px-4 px-sm-5 pt-4 d-flex flex-column justify-content-center align-items-center"
      >
        {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
        <img
          src={Me}
          alt="Profile image"
          width="170"
          height="170"
          className="rounded-circle shadow-3-strong me-3 mb-1"
        />
        <div className="text-center">
          <MDBTypography tag="h1" className="text-uppercase name">
            Kim Bell
          </MDBTypography>
          <MDBTypography tag="h2" className="mb-0">
            SDET | Software Engineer in Test
          </MDBTypography>
          <MDBTypography className="fs-4 mb-0">
            Specializing in Cypress Test Automation. Software Engineer in React.
          </MDBTypography>
        </div>
      </div>
      <About id="about" />
      <Skills id="skills" />
      <Projects id="projects" />
    </MDBContainer>
  )
}

export default Home
