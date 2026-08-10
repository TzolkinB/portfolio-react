import { footerLinks } from "../../src/constants/appData"
import projects from "../../src/constants/projectsData"

import { getProjectButtons } from "./commonMethods"

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
