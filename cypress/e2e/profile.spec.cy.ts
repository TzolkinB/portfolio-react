import {
  accordionTitles,
  qaAccomplishments,
  devAccomplishments,
} from "../../src/components/About"
import {
  aboutContent,
  badgeContent,
  heroContent,
  heroSocialLinks,
  skillCategories,
  statBandData,
} from "../../src/constants/appData"
import projects from "../../src/constants/projectsData"
import { capitalizeFirstLetter } from "../../src/utils/utils"

import { sizes, anchorLinks, buttonLinks } from "./commonMethods"

import type { Project } from "../../src/types/types"

const getProjectButtons = (project: Project) => {
  const buttons: { name: string; href: string }[] = [
    { name: project.urlText, href: project.url },
  ]
  if (project.url2 && project.url2Text) {
    buttons.push({ name: project.url2Text, href: project.url2 })
  }
  return buttons
}

const heroLinks = [
  {
    label: heroContent.ctaPrimary.label,
    href: heroContent.ctaPrimary.href,
  },
  {
    label: heroContent.ctaSecondary.label,
    href: heroContent.ctaSecondary.href,
  },
  ...heroSocialLinks.map((link) => ({
    label: link.label,
    href: link.href,
  })),
]
const roleWriteUps = [
  {
    title: accordionTitles.qa,
    accomplishments: qaAccomplishments,
    alias: "qaDetails",
  },
  {
    title: accordionTitles.dev,
    accomplishments: devAccomplishments,
    alias: "devDetails",
  },
]

describe("Cat easter egg", () => {
  beforeEach(() => {
    cy.visit("/")
    cy.url().should("eq", `${Cypress.config("baseUrl")}/`)
  })

  it("should not be visible on load, appear after 2s, and dismiss on click", () => {
    cy.findByRole("button", { name: "Dismiss cat" }).should("not.exist")
    cy.findByRole("button", { name: "Dismiss cat", timeout: 5000 }).should(
      "exist",
    )
    // force: true because the button is position:absolute;bottom:0 inside a fixed navbar —
    // its center is above the viewport, but users click the visible portion of the animation
    // eslint-disable-next-line cypress/no-force
    cy.findByRole("button", { name: "Dismiss cat" }).click({ force: true })
    cy.findByRole("button", { name: "Dismiss cat" }).should("not.exist")
  })
})

describe("Profile tests", () => {
  beforeEach(() => {
    // cy.intercept("localhost:4280").as("localhost")
    cy.visit("/")
    // cy.wait("@localhost")
    cy.url().should("eq", `${Cypress.config("baseUrl")}/`)
    cy.injectAxe()
  })

  const allSkills = Object.values(skillCategories).flatMap(
    (category) => category.skills,
  )

  sizes.forEach((size) => {
    it.only(`should have an accessible nav bar with 4 links, ${size}`, () => {
      cy.viewport(size)

      if (size != "iphone-6") {
        cy.get("nav").findByTestId("nav-links").as("navLinks")
      } else {
        cy.findByRole("button", { name: "Toggle navigation", expanded: false })
          .should("have.attr", "aria-controls", "nav-links")
          .click()
        cy.findByRole("button", { name: "Toggle navigation", expanded: true })
        cy.findByTestId("nav-links").as("navLinks")
      }

      cy.checkA11y("nav")

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
    })

    it(`should have an accessible hero with name, title, tags, CTAs, socials, and photo, ${size}`, () => {
      cy.viewport(size)

      cy.checkA11y('[data-testid="home"]')

      cy.findByTestId("home").within(() => {
        cy.findByRole("heading", { level: 1, name: heroContent.name })
        cy.findByText(heroContent.eyebrow)
        cy.findByText(heroContent.title)

        cy.findByRole("list", { name: "Technical skills badges" }).within(
          () => {
            cy.findAllByRole("listitem").should(
              "have.length",
              badgeContent.length,
            )
            badgeContent.forEach((item) => cy.findByText(item.text))
          },
        )

        heroLinks.forEach((link) => {
          cy.findByRole("link", {
            name: link.label,
          }).should("have.attr", "href", link.href)
        })

        cy.get("img").should("have.attr", "src", "/paths.IMG/profile2.jpg")
      })
    })

    it(`should have an accessible stat band with 4 stats, ${size}`, () => {
      cy.viewport(size)

      cy.checkA11y('[data-testid="stat-band"]')

      cy.findByRole("list", { name: "Career highlights" }).within(() => {
        cy.findAllByRole("listitem").should("have.length", statBandData.length)
        statBandData.forEach((stat) => {
          cy.findByText(stat.value)
          cy.findByText(stat.label)
        })
      })
    })

    it(`should have an accessible about section with expandable role write-ups, ${size}`, () => {
      cy.viewport(size)

      cy.checkA11y('[data-testid="about"]')

      cy.findByTestId("about").within(() => {
        cy.findByRole("heading", { level: 2, name: aboutContent.heading })

        // Both role write-ups default to closed (native <details> not open)
        roleWriteUps.forEach(({ title, accomplishments, alias }) => {
          // <summary> has an implicit "button" role per the HTML-AAM spec
          // (browsers expose it that way to AT), but aria-query - which
          // @testing-library/cypress uses to compute implicit roles - has
          // no summary -> button mapping, so findByRole("button", ...)
          // never matches it. Query by text and assert the native <details>
          // "open" attribute instead.
          cy.findByText(title)
            .closest("details")
            .should("not.have.attr", "open")
            .as(alias)
          cy.get(`@${alias}`).within(() => {
            cy.findAllByTestId("success-check").should(
              "have.length",
              accomplishments.length,
            )
          })
        })

        // Clicking the <summary/> toggles the native disclosure open. Keyboard
        // operability comes from the browser's native <details>/<summary>
        // activation behavior (Enter/Space), not custom JS, so there's no
        // separate keydown simulation to test here.
        cy.findByText(accordionTitles.qa).click()
        cy.get("@qaDetails").should("have.attr", "open")
      })
    })

    it(`should render skills as numbered pipeline stages with years of experience, ${size}`, () => {
      cy.viewport(size)

      cy.checkA11y('[data-testid="skills"]')

      cy.findByTestId("skills").within(() => {
        cy.findByRole("heading", {
          level: 2,
          name: "cat ./skills/pipeline.yml",
        })

        Object.entries(skillCategories).forEach(
          ([categoryName, categoryData], index) => {
            const stageNumber = String(index + 1).padStart(2, "0")

            cy.findByTestId(`stage-${categoryName}`).within(() => {
              cy.findByRole("heading", { level: 3, name: categoryName })
              cy.findByText(`stage ${stageNumber} · ${categoryData.kicker}`)
              cy.findAllByTestId(/^skill-/).should(
                "have.length",
                categoryData.skills.length,
              )
            })
          },
        )

        cy.findAllByTestId(/^skill-/).should("have.length", allSkills.length)

        allSkills.forEach((skill) => {
          cy.findByTestId(`skill-${skill.name}`).within(() => {
            cy.findByText(capitalizeFirstLetter(skill.name))
            cy.findByText(`${skill.years} years`)
          })
        })
      })
    })

    it(`should have projects section, ${size}`, () => {
      cy.viewport(size)

      cy.findByTestId("projects").within(() => {
        cy.findByRole("heading", { level: 2, name: "Projects" })

        cy.findAllByTestId(/card-/i)
          .should("have.length", projects.length)
          .as("projectCards")

        projects.forEach((project, index) => {
          buttonLinks(index, getProjectButtons(project))
        })
      })
    })

    it(`should have footer with copyright & links, ${size}`, () => {
      cy.viewport(size)
      const currentYear = new Date().getFullYear()
      cy.get("footer").contains(`${currentYear} Copyright Kim Bell`)
      cy.get("footer").within(() => {
        cy.findAllByRole("link").should("have.length", 2).as("footerLinks")
        cy.get("@footerLinks").each((link) => {
          // failOnStatusCode: false is required because LinkedIn returns 999 to
          // automated/bot traffic. 999 means their servers responded and the URL
          // is valid — they're blocking scrapers, not returning "not found".
          // We assert not 404 to confirm the link destination actually exists.
          cy.request({ url: link.prop("href"), failOnStatusCode: false })
            .its("status")
            .should("not.eq", 404)
        })
      })
    })
  })
})
