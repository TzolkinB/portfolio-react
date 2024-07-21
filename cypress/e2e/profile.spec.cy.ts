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
      .should("have.attr", "src", "/paths.IMG/W-white.png")

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
      "/paths.IMG/Bell_Kim-Resume.pdf",
    )
  })

  it("should have profile image in home section and bullet points in about me section", () => {
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

  it("should have tech icons and tooltips in skills section", () => {
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

  it("should have projects section", () => {
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
      cy.get("@projectCards").eq(index).should(`be.${visibility}`)
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

            cy.request(button.href).then((resp) => {
              expect(resp.status).to.eq(200)
            })
            cy.request(button.href)
          })
        })
    }

    cy.findByTestId("projects").within(() => {
      cy.findByRole("heading", { level: 3, name: "Projects" })

      cy.findAllByTestId(/card-/i).should("have.length", 4).as("projectCards")

      cardVisibility(0, "hidden")
      cardVisibility(1, "hidden")
      cardVisibility(2, "visible")
      cardVisibility(3, "visible")

      buttonLinks(2, buttonsCard1)
      buttonLinks(3, buttonsCard2)
    })
  })

  it("should have footer with copyright & links", () => {
    const currentYear = new Date().getFullYear()
    cy.get("footer").contains(`${currentYear} Copyright Kim Bell`)
    cy.get("footer").within(() => {
      cy.findAllByRole("link").should("have.length", 2).as("footerLinks")
      cy.get("@footerLinks").each((link) => {
        cy.wrap(link)
          .invoke("attr", "href")
          .then((href) =>
            href
              ? cy.request(href).then((resp) => {
                  expect(resp.status).to.eq(200)
                })
              : console.error("no href"),
          )
      })
    })
  })
})
