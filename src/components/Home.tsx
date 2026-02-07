import {
  MDBContainer,
  MDBRow,
  MDBTypography,
  MDBBtn,
  MDBIcon,
  MDBCol,
} from "mdb-react-ui-kit"
import Me from "IMG/profile2.jpg"
import About from "./About"
import Skills from "./Skills"
import Projects from "./Projects"

const msg =
  "%c👋 Thank you for visiting my site! If you like my credentials and are looking for an SDET with expertise in test automation, DM me. Let's discuss!"
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
    <MDBContainer className="app gx-0">
      <div
        id="home"
        data-testid="home"
        className="d-md-flex d-sm-none px-3 py-4"
      >
        <MDBRow>
          {/* Text Content Column */}
          <MDBCol size="8">
            <div className="mb-2">
              <MDBTypography tag="div" className="display-2 name mb-0">
                Kim Bell
              </MDBTypography>
            </div>
            <div>
              <MDBTypography
                tag="h2"
                className="d-none d-md-block text-gradient"
              >
                Senior SDET & Frontend Developer
              </MDBTypography>
              <MDBTypography tag="h2" className="d-md-none text-gradient">
                Senior SDET
              </MDBTypography>
              <MDBTypography className="d-md-none text-muted">
                Frontend Developer
              </MDBTypography>
            </div>

            {/* Tech Skills Badges Row */}
            <div className="d-flex flex-md-wrap gap-2 pt-2">
              <div
                className="badge square border rounded-2"
                style={{ padding: "6px 10px" }}
              >
                <i className="fas fa-check me-1" />
                Playwright
              </div>
              <div
                className="badge square border rounded-2"
                style={{ padding: "6px 10px" }}
              >
                <i className="fas fa-check me-1" />
                Cypress
              </div>
              <div
                className="badge square border rounded-2"
                style={{ padding: "6px 10px" }}
              >
                <i className="fab fa-react me-1" />
                React
              </div>
            </div>

            {/* Experience Stats Row */}
            {/* Hide on Mobile */}
            <div style={{ padding: "1rem" }} className="d-flex gap-3">
              <div>
                <MDBTypography
                  tag="div"
                  className="display-4 mb-0 years text-gradient"
                >
                  8+
                </MDBTypography>
                <MDBTypography className="text-muted small">
                  Years Experience
                </MDBTypography>
              </div>
              <div>
                <MDBTypography
                  tag="div"
                  className="display-4 mb-0 years text-gradient"
                >
                  2+
                </MDBTypography>
                <MDBTypography className="text-muted small">
                  Years SDET
                </MDBTypography>
              </div>
            </div>

            <MDBBtn
              tag="a"
              href="https://www.linkedin.com/in/kimbell4"
              aria-label="link to linkedin"
              target="_blank"
              className="m-1"
              style={{ backgroundColor: "#0082ca" }}
            >
              <MDBIcon fab icon="linkedin-in" />
            </MDBBtn>
            <MDBBtn
              tag="a"
              href="https://github.com/TzolkinB"
              aria-label="link to github"
              target="_blank"
              className="m-1"
              style={{ backgroundColor: "#333333" }}
            >
              <MDBIcon fab icon="github" />
            </MDBBtn>
          </MDBCol>
          {/* Profile Image Column */}
          <MDBCol
            size="4"
            className="d-flex justify-content-center justify-content-md-start"
          >
            <img src={Me} alt="Kim Bell" className="rounded-circle" />
          </MDBCol>
        </MDBRow>
      </div>
      <About id="about" />
      <Skills id="skills" />
      <Projects id="projects" />
    </MDBContainer>
  )
}

export default Home
