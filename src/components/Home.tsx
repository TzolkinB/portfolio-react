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
import { badge, experienceStats } from "./utils"
import type { BadgeConfig } from "../types"

// Developer console message
const DEV_MESSAGE = {
  text: "👋 Thank you for visiting my site! If you like my credentials and are looking for an SDET with expertise in test automation, DM me. Let's discuss!",
  styles: [
    "font-size: 12px",
    "font-family: monospace",
    "background: black",
    "display: inline-block",
    "color: #5DC1BE",
    "padding: 8px 15px",
    "border: 3px solid;",
  ].join(";"),
} as const

const badgeContent: readonly BadgeConfig[] = [
  { icon: "fas fa-check", text: "Playright" },
  { icon: "fas fa-check", text: "Cypress" },
  { icon: "fab fa-react", text: "React" },
] as const

const experienceStatData = [
  { years: 8, text: "Years Experience" },
  { years: 2, text: "Years SDET" },
] as const

function Home() {
  // eslint-disable-next-line no-console
  console.log(DEV_MESSAGE.text, DEV_MESSAGE.styles)
  return (
    <MDBContainer className="app gx-0">
      <div id="home" data-testid="home" className="d-flex px-3 py-4">
        <MDBRow>
          <MDBCol size="8">
            <div className="mb-2">
              <MDBTypography tag="h1" className="display-2 mb-0 name">
                Kim Bell
              </MDBTypography>
            </div>
            <div>
              {/* Tablet/Desktop */}
              <MDBTypography
                tag="h2"
                className="d-none d-md-block text-gradient"
              >
                Senior SDET & Frontend Developer
              </MDBTypography>
              {/* Mobile View */}
              <MDBTypography tag="h2" className="d-md-none text-gradient">
                Senior SDET
              </MDBTypography>
              <MDBTypography className="d-md-none text-muted">
                Frontend Developer
              </MDBTypography>
            </div>

            {/* Tech Skills Badges Row */}
            <div
              className="d-flex flex-md-wrap gap-2 pt-2"
              role="list"
              aria-label="Technical skills badges"
            >
              {badgeContent.map((item) => (
                <div key={item.text} role="listitem">
                  {badge(item)}
                </div>
              ))}
            </div>

            {/* Experience Stats Row */}
            {/* Hide on Mobile */}
            <div className="d-flex gap-3 p-3">
              {experienceStatData.map((stat) => (
                <div key={stat.text}>
                  {experienceStats(stat.years, stat.text)}
                </div>
              ))}
            </div>

            <div className="social-links-container">
              <MDBBtn
                tag="a"
                href="https://www.linkedin.com/in/kimbell4"
                aria-label="link to linkedin"
                target="_blank"
                className="m-1 social-btn"
                style={{ backgroundColor: "#0082ca" }}
              >
                <MDBIcon fab icon="linkedin-in" />
              </MDBBtn>
              <MDBBtn
                tag="a"
                href="https://github.com/TzolkinB"
                aria-label="link to github"
                target="_blank"
                className="m-1 social-btn"
                style={{ backgroundColor: "#333333" }}
              >
                <MDBIcon fab icon="github" />
              </MDBBtn>
            </div>
          </MDBCol>
          {/* Profile Image Column */}
          <MDBCol
            size="4"
            className="d-flex justify-content-md-center justify-content-lg-end mt-4 mt-md-0"
          >
            <img
              src={Me}
              alt="Kim Bell - Senior SDET and Frontend Developer"
              className="rounded-circle profile-image"
              loading="eager"
            />
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
