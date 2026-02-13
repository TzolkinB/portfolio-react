import { MDBContainer, MDBRow, MDBTypography, MDBCol } from "mdb-react-ui-kit"

import Me from "../assets/img/profile2.jpg"
import {
  badgeContent,
  experienceStatData,
  DEV_MESSAGE,
} from "../constants/appData"
import { badge, experienceStats, SocialLinks } from "../utils/utils"

import About from "./About"
import Projects from "./Projects"
import Skills from "./Skills"

function Home() {
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

            <SocialLinks
              links={[
                {
                  href: "https://www.linkedin.com/in/kimbell4",
                  icon: "linkedin-in",
                  label: "link to linkedin",
                  backgroundColor: "#0082ca",
                },
                {
                  href: "https://github.com/TzolkinB",
                  icon: "github",
                  label: "link to github",
                  backgroundColor: "#333333",
                },
              ]}
            />
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
