import {
  cloudHosting,
  testingTools,
  terminalTools,
  webDevTools,
} from "../../src/tech-icons"

describe("Home page tests", () => {
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

  it.only("should have profile image in home section and bullet points in about me section", () => {
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

  it.only("should have tech icons and tooltips in skills section", () => {
    const allSkills = [
      ...cloudHosting,
      ...terminalTools,
      ...testingTools,
      ...webDevTools,
    ]

    cy.findByTestId("skills").within(() => {
      cy.findByRole("heading", { level: 3, name: "Skills" })

      cy.get("img").should("have.length", allSkills.length)
    })
  })
})
