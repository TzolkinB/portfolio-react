// import {
//   cloudHosting,
//   testingTools,
//   terminalTools,
//   webDevTools,
// } from "../../src/tech-icons"
const sizes: Cypress.ViewportPreset[] = ["macbook-11", "ipad-2", "iphone-6"]

describe("Profile tests", () => {
  beforeEach(() => {
    cy.intercept("localhost:4280").as("localhost")
    cy.visit("/")
    cy.wait("@localhost")
  })

  const anchorLinks = [
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
  ]
  const cloudHosting = ["gitlab", "bitbucket", "github", "vscode"]
  const testingTools = ["cypress", "testing-library", "qtest", "browserstack"]
  const terminalTools = ["git", "webpack", "yaml", "vim"]
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

  const buttonsCard1 = [
    {
      name: "Github Repo",
      href: "https://github.com/TzolkinB/react-template",
    },
  ]
  const buttonsCard2 = [
    {
      name: "Demo",
      href: "https://memory-game1234.firebaseapp.com/#/",
    },
    {
      name: "Github Repo",
      href: "https://github.com/TzolkinB/memory",
    },
  ]

  const cardVisibility = (index: number, visibility: string) => {
    cy.get("@projectCards").eq(index).should(`${visibility}`)
  }

  const buttonLinks = (
    index: number,
    buttons: { name: string; href: string }[],
  ) => {
    cy.get("@projectCards")
      .eq(index)
      .within(() => {
        buttons.forEach((button) => {
          cy.findByRole("button", { name: button.name }).should(
            "have.attr",
            "href",
            button.href,
          )

          cy.request(button.href).its("status").should("eq", 200)
        })
      })
  }

  sizes.forEach((size) => {
    it(`should have whiskers img and 4 tabs in the nav bar, ${size}`, () => {
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
        "/paths.IMG/Bell_Kim-Resume.pdf",
      )
      cy.request("/paths.IMG/Bell_Kim-Resume.pdf")
        .its("status")
        .should("eq", 200)
    })

    it(`should have profile image in home section and bullet points in about me section, ${size}`, () => {
      cy.viewport(size)

      cy.findByTestId("home").within(() => {
        cy.findByRole("heading", { level: 1, name: "Kim Bell" })
        cy.findByRole("heading", {
          level: 2,
          name: "SDET | Software Engineer in Test",
        })
        cy.get("img").should("have.attr", "src", "/paths.IMG/profile2.jpg")
      })

      cy.findByTestId("about").within(() => {
        cy.findByRole("heading", { level: 3, name: "About Me" })
        cy.findAllByTestId("success-check").should("have.length", 6)
      })
    })

    it(`should have tech icons and tooltips in skills section, ${size}`, () => {
      cy.viewport(size)

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

    it(`should have projects section, ${size}`, () => {
      cy.viewport(size)

      cy.findByTestId("projects").within(() => {
        cy.findByRole("heading", { level: 3, name: "Projects" })

        cy.findAllByTestId(/card-/i).should("have.length", 4).as("projectCards")

        if (size !== "iphone-6") {
          cardVisibility(0, "not.be.visible")
          cardVisibility(1, "not.be.visible")
          cardVisibility(2, "be.visible")
          cardVisibility(3, "be.visible")

          buttonLinks(2, buttonsCard1)
          buttonLinks(3, buttonsCard2)
        } else {
          cardVisibility(0, "be.visible")
          cardVisibility(1, "be.visible")
          cardVisibility(2, "not.be.visible")
          cardVisibility(3, "not.be.visible")

          buttonLinks(0, buttonsCard1)
          buttonLinks(1, buttonsCard2)
        }
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
