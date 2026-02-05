import { MDBContainer, MDBTypography, MDBBtn, MDBIcon } from "mdb-react-ui-kit"
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
        className="px-4 px-sm-5 py-4 d-flex justify-content-center align-items-md-center"
      >
        {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
        <img
          src={Me}
          alt="Profile image"
          // width="170"
          // height="170"
          // sizes="(width <= 767px) 100px, 170px"
          className="rounded-circle shadow-3-strong me-3 mb-1"
        />
        <div className="">
          <MDBTypography tag="h1" className="text-uppercase name">
            Kim Bell
          </MDBTypography>
          <MDBTypography tag="h2" className="fs-3 mb-0">
            Senior SDET & Frontend Developer
          </MDBTypography>
          <MDBTypography className="mb-0">
            8+ years experience, 2+ years SDET
          </MDBTypography>
          <div className="mt-1">
            <MDBBtn
              size="lg"
              className="m-1"
              style={{ backgroundColor: "#0082ca" }}
              href="#"
            >
              <MDBIcon fab icon="linkedin-in" size="lg" />
            </MDBBtn>{" "}
            <MDBBtn
              size="lg"
              className="m-1"
              style={{ backgroundColor: "#333333" }}
              href="#"
            >
              <MDBIcon fab icon="github" size="lg" />
            </MDBBtn>
          </div>
        </div>
      </div>

      <About id="about" />
      <Skills id="skills" />
      <Projects id="projects" />
    </MDBContainer>
  )
}

export default Home
