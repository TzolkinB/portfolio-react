// import {
//   cloudHosting,
//   testingTools,
//   terminalTools,
//   webDevTools,
// } from "../../src/tech-icons"
import {
  sizes,
  anchorLinks,
  buttonLinks,
  buttonsCard1,
  buttonsCard2,
  buttonsCard3,
  devAccordionTitle,
  qaAccordionTitle,
  buttonsCard4,
} from "./commonMethods"

describe("Profile tests", () => {
  beforeEach(() => {
    cy.intercept("localhost:4280").as("localhost")
    cy.visit("/")
    cy.wait("@localhost")
  })

  const cloudHosting = ["github", "gitlab", "bitbucket", "vscode"]
  const testingTools = [
    "cypress",
    "playwright",
    "testing-library",
    "tricentis-qtest",
    "browserstack",
  ]
  const terminalTools = ["webpack", "vim"]
  const webDevTools = [
    "typescript",
    "javascript",
    "react",
    "ember",
    "html",
    "css",
    "styled-components",
  ]
  const allSkills = [
    ...testingTools,
    ...webDevTools,
    ...cloudHosting,
    ...terminalTools,
  ]

  sizes.forEach((size) => {
    it(`should have whiskers img, 4 links, in the nav bar, ${size}`, () => {
      cy.viewport(size)

      cy.get("nav")
        .find("img")
        .should("have.attr", "src", "/paths.IMG/W-white.png")

      if (size === "macbook-11") {
        cy.get("nav").findByTestId("nav-links").as("navLinks")
      } else {
        cy.findByRole("button", { name: "Toggle navigation" }).click()
        cy.findByTestId("nav-links").as("navLinks")
      }
      cy.get("@navLinks").findAllByRole("link").should("have.length", 4)

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
        "/paths.IMG/Bell_Kimberly-Resume.pdf",
      )
      cy.request("/paths.IMG/Bell_Kimberly-Resume.pdf")
        .its("status")
        .should("eq", 200)

      // cy.findByTestId("resume-dropdown").within(() => {
      //   cy.findByText("Resumes")
      //     .should("have.attr", "aria-expanded", "false")
      //     .as("resumeDropdown")
      //   cy.get("@resumeDropdown").click()
      //   cy.get("@resumeDropdown").should("have.attr", "aria-expanded", "true")

      //   cy.get(".dropdown-menu").within(() => {
      //     cy.get(".dropdown-item").should("have.length", 2)
      //     cy.findByRole("link", { name: "Dev Resume" }).should(
      //       "have.attr",
      //       "href",
      //       "/paths.IMG/Bell_Kim-DevResume2.pdf",
      //     )
      //     cy.request("/paths.IMG/Bell_Kim-DevResume2.pdf")
      //       .its("status")
      //       .should("eq", 200)

      //     cy.findByRole("link", { name: "QA Resume" }).should(
      //       "have.attr",
      //       "href",
      //       "/paths.IMG/Bell_Kimberly-Resume.pdf",
      //     )
      //     cy.request("/paths.IMG/Bell_Kimberly-Resume.pdf")
      //       .its("status")
      //       .should("eq", 200)
      //   })
      // })
    })

    it(`should have profile image in home section and bullet points in about me section, ${size}`, () => {
      const getH2 =
        size === "iphone-6" ? "Senior SDET" : "Senior SDET & Frontend Developer"
      cy.viewport(size)

      cy.findByTestId("home").within(() => {
        cy.findByRole("heading", { level: 1, name: "Kim Bell" })
        cy.findByRole("heading", {
          level: 2,
          name: getH2,
        })
        cy.get("img").should("have.attr", "src", "/paths.IMG/profile2.jpg")
      })

      cy.findByTestId("about").within(() => {
        cy.findByRole("heading", { level: 2, name: "About" })
        // Both accordions default to closed (collapsed) state
        cy.get(".accordion-item").should("have.length", 2).as("accordions")
        cy.get("@accordions")
          .first()
          .within(() => {
            cy.findByRole("button", { name: qaAccordionTitle }).should(
              "have.class",
              "collapsed",
            )
            cy.findAllByTestId("success-check").should("have.length", 6)
          })
        cy.get("@accordions")
          .last()
          .within(() => {
            cy.findByRole("button", { name: devAccordionTitle }).should(
              "have.class",
              "collapsed",
            )
            cy.findAllByTestId("success-check").should("have.length", 6)
          })
      })
    })

    it(`should have tech icons and text on hover in skills section, ${size}`, () => {
      cy.viewport(size)

      cy.findByTestId("skills").within(() => {
        cy.findByRole("heading", { level: 3, name: "Test Automation & QA" })
        cy.findByRole("heading", { level: 3, name: "Frontend Development" })
        cy.findByRole("heading", {
          level: 3,
          name: "Development Tools & CI/CD",
        })

        cy.get("img").should("have.length", allSkills.length).as("skillImages")

        // Check alt image tag
        cy.get("@skillImages").each(($el, index) => {
          cy.wrap($el).should("have.attr", "alt", allSkills[index])
        })
      })
    })

    it(`should have projects section, ${size}`, () => {
      cy.viewport(size)

      cy.findByTestId("projects").within(() => {
        cy.findByRole("heading", { level: 2, name: "Projects" })

        cy.findAllByTestId(/card-/i).should("have.length", 4).as("projectCards")

        buttonLinks(0, buttonsCard1)
        buttonLinks(1, buttonsCard2)
        buttonLinks(2, buttonsCard3)
        buttonLinks(3, buttonsCard4)
      })
    })

    it(`should have footer with copyright & links, ${size}`, () => {
      cy.on("fail", (error, runnable) => {
        console.log("error", error)
        console.log("runnable", runnable)
        // return false
        if (!error.message.includes("429: Too Many Requests")) {
          throw error
        }
        cy.log("Exception encountered: LinkedIn 429: Too many requests")
      })
      cy.viewport(size)
      const currentYear = new Date().getFullYear()
      cy.get("footer").contains(`${currentYear} Copyright Kim Bell`)
      cy.get("footer").within(() => {
        cy.findAllByRole("link").should("have.length", 2).as("footerLinks")
        cy.get("@footerLinks").each((link) => {
          cy.request(link.prop("href")).as("linkStatus")
          cy.get("@linkStatus").its("status").should("eq", 200)
        })
      })
    })
  })
})
