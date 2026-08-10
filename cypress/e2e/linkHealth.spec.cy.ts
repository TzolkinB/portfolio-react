import { footerLinks } from "../../src/constants/appData"
import projects from "../../src/constants/projectsData"

import { getProjectButtons } from "./commonMethods"

// Reachability checks for links referenced in content data, split out of the
// UI/a11y specs in profile.spec.cy.ts so a third-party outage (e.g. LinkedIn,
// a live side-project deployment) fails only this file, not the rendering or
// accessibility assertions for the section that happens to link there.
describe("External link health", () => {
  it("resume PDF is reachable", () => {
    cy.checkLinkReachable("/paths.IMG/Bell_Kimberly-Resume.pdf", 200)
  })

  it("footer links are reachable", () => {
    footerLinks.forEach((link) => {
      if (link.href.startsWith("mailto:")) {
        return
      }
      cy.checkLinkReachable(link.href)
    })
  })

  it("project links are reachable", () => {
    projects.forEach((project) => {
      getProjectButtons(project).forEach((button) => {
        cy.checkLinkReachable(button.href, 200)
      })
    })
  })
})
