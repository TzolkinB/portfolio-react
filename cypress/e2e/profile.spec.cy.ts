// import {
//   cloudHosting,
//   testingTools,
//   terminalTools,
//   webDevTools,
// } from "../../src/tech-icons"

describe("Profile tests", () => {
  beforeEach(() => {
    cy.intercept("localhost:4280").as("localhost")
    cy.visit("/")
    cy.wait("@localhost")
  })

  it("should have whiskers img and 4 tabs in the nav bar", () => {
    const anchorLinks = [
      { name: "About", link: "#about" },
      { name: "Skills", link: "#skills" },
      { name: "Projects", link: "#projects" },
    ]

    cy.get("nav")
      .find("img")
      .should("have.attr", "src", "/src/assets/img/W-white.png")

    cy.get("nav")
      .findByTestId("nav-links")
      .as("navLinks")
      .findAllByRole("link")
      .should("have.length", 4)

    anchorLinks.forEach((anchor) => {
      cy.get("@navLinks")
        .findByRole("link", {
          name: anchor.name,
        })
        .should("have.attr", "href", anchor.link)
        .click()

      cy.url().should("contain", anchor.link)
    })

    cy.findByRole("link", { name: "Resume" }).should(
      "have.attr",
      "href",
      "/src/assets/img/Bell_Kim-Resume.pdf",
    )
  })

  it("should have profile image in home section and bullet points in about me section", () => {
    cy.findByTestId("home").within(() => {
      cy.findByRole("heading", { level: 1, name: "Kim Bell" })
      cy.findByRole("heading", {
        level: 2,
        name: "SDET | Software Development Engineer in Test",
      })
      cy.get("img").should("have.attr", "src", "/src/assets/img/profile.jpg")
    })

    cy.findByTestId("about").within(() => {
      cy.findByRole("heading", { level: 3, name: "About Me" })
      cy.findAllByTestId("success-check").should("have.length", 6)
    })
  })

  it("should have tech icons and tooltips in skills section", () => {
    const cloudHosting = ["gitlab", "bitbucket", "github", "vscode"]
    const testingTools = ["cypress", "testing-library", "qtest", "browserstack"]
    const terminalTools = ["git", "webpack", "yaml", "vim", "bash"]
    const webDevTools = [
      "javascript",
      "typescript",
      "react",
      "ember",
      "html",
      "css",
      "styled-components",
    ]
    const allSkills = [
      ...testingTools,
      ...webDevTools,
      ...terminalTools,
      ...cloudHosting,
    ]

    cy.findByTestId("skills").within(() => {
      cy.findByRole("heading", { level: 3, name: "Skills" })

      cy.get("img").should("have.length", allSkills.length).as("skillImages")

      // Check alt image tag
      cy.get("@skillImages").each(($el, index) => {
        cy.wrap($el).should("have.attr", "alt", allSkills[index])
      })
    })

    // Check tooltip on image, tooltip html lives outside of skills data-testid
    cy.get("@skillImages").each(($el, index) => {
      cy.wrap($el).trigger("mouseover")
      cy.findByRole("tooltip", { name: allSkills[index].toLocaleUpperCase() })
      cy.wrap($el).trigger("mouseout")
    })
  })

  it.only("should have projects section", () => {
    cy.findByTestId("projects").within(() => {
      cy.findByRole("heading", { level: 3, name: "Projects" })

      cy.findAllByTestId(/card-/i).should("have.length", 2)
    })
  })
})
