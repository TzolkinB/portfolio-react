import {
  accordionTitles,
  qaAccomplishments,
  devAccomplishments,
} from "../../src/components/About"
import {
  aboutContent,
  aboutTabs,
  badgeContent,
  easterEggContent,
  footerContent,
  footerLinks,
  heroContent,
  heroSocialLinks,
  projectContent,
  skillCategories,
  statBandData,
} from "../../src/constants/appData"
import projects from "../../src/constants/projectsData"
import { capitalizeFirstLetter } from "../../src/utils/utils"

import {
  sizes,
  anchorLinks,
  buttonLinks,
  heroLinks,
  getProjectButtons,
  roleWriteUps,
} from "./commonMethods"

describe("Cat easter egg", () => {
  beforeEach(() => {
    cy.visit("/")
    cy.url().should("eq", `${Cypress.config("baseUrl")}/`)
    cy.injectAxe()
  })

  it("should reveal an ASCII cat in the terminal output when the terminal card is clicked", () => {
    cy.findByTestId("cat-easter-egg").should("not.exist")

    cy.findByRole("button", { name: "Reveal terminal easter egg" }).click()

    cy.findByTestId("cat-easter-egg").within(() => {
      cy.findByText(easterEggContent.prompt)
      // Raw selector + .should("have.text", ...) instead of findByText: the
      // multi-line <pre> art has whitespace/newlines that Testing Library's
      // default normalizer collapses before matching, so an exact
      // multi-line string never matches via findByText.
      cy.get(".ascii-cat").should("have.text", easterEggContent.art)
    })

    cy.checkA11y('[data-testid="home"]')
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
    it(`should have an accessible nav bar with 4 links, ${size}`, () => {
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

        heroLinks(heroContent, heroSocialLinks)

        cy.get("img").should("have.attr", "src", "/paths.IMG/profile3.jpg")
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

    it(`should have an accessible about section with file tabs, ${size}`, () => {
      cy.viewport(size)
      // Below the tablet breakpoint (768px) the tab bar is CSS-hidden in
      // favor of a native <select> reading the same tab data — see
      // docs/adr/0002-about-mobile-tab-fallback.md. ipad-2 is exactly 768px
      // wide, so it (like macbook-11) exercises the tablist state.
      const isMobile = size === "iphone-6"

      cy.checkA11y('[data-testid="about"]')

      cy.findByTestId("about").within(() => {
        cy.findByRole("heading", { level: 2, name: aboutContent.heading })
        cy.findByText(aboutContent.caption)

        // Query the raw role/class selectors (not findByRole) to assert the
        // CSS-hidden control here — @testing-library/cypress's byRole
        // queries exclude inaccessible (display:none) elements by default,
        // so they can't be used to prove something is hidden.
        if (isMobile) {
          cy.get('[role="tablist"]').should("not.be.visible")
          cy.get(".about-select").as("aboutSelect").should("be.visible")
        } else {
          cy.get(".about-select").should("not.be.visible")
          cy.findByRole("tablist", { name: "About file tabs" })
            .findAllByRole("tab")
            .should("have.length", aboutTabs.length)
        }

        // Default: first tab (summary.md) selected and its panel shown.
        if (isMobile) {
          cy.get("@aboutSelect").should("have.value", aboutTabs[0].id)
        } else {
          cy.findByRole("tab", { name: aboutTabs[0].filename }).should(
            "have.attr",
            "aria-selected",
            "true",
          )
        }

        // Switching tabs (via click or the mobile select) swaps the visible
        // panel, including the role write-ups nested inside experience.md.
        aboutTabs.forEach((tab) => {
          if (isMobile) {
            cy.get("@aboutSelect").select(tab.filename)
            cy.get("@aboutSelect").should("have.value", tab.id)
          } else {
            cy.findByRole("tab", { name: tab.filename }).click()
            cy.findByRole("tab", { name: tab.filename }).should(
              "have.attr",
              "aria-selected",
              "true",
            )
          }

          cy.findByRole("tabpanel").should("be.visible")

          if (tab.id === "experience") {
            // Both role write-ups default to closed (native <details> not
            // open), same accessible structure as before, now nested here.
            roleWriteUps(
              accordionTitles,
              qaAccomplishments,
              devAccomplishments,
            ).forEach(({ title, accomplishments, alias }) => {
              // <summary> has an implicit "button" role per the HTML-AAM
              // spec (browsers expose it that way to AT), but aria-query -
              // which @testing-library/cypress uses to compute implicit
              // roles - has no summary -> button mapping, so
              // findByRole("button", ...) never matches it. Query by text
              // and assert the native <details> "open" attribute instead.
              cy.findByText(title).closest("details").as(alias)

              cy.get(`@${alias}`).should("not.have.attr", "open")

              cy.get(`@${alias}`).within(() => {
                cy.findAllByTestId("success-check").should(
                  "have.length",
                  accomplishments.length,
                )
              })
            })

            // Clicking the <summary/> toggles the native disclosure open.
            // Keyboard operability comes from the browser's native
            // <details>/<summary> activation behavior (Enter/Space), not
            // custom JS, so there's no separate keydown simulation to test.
            cy.findByText(accordionTitles.qa).click()
            cy.get("@qaDetails").should("have.attr", "open")
          }
        })

        // Arrow keys (plus Home/End) move both focus and selection between
        // tabs, per the WAI-ARIA Tabs pattern's roving-tabindex model.
        if (!isMobile) {
          cy.findByRole("tab", { name: aboutTabs[0].filename }).click()

          cy.focused().type("{rightarrow}")
          cy.findByRole("tab", { name: aboutTabs[1].filename })
            .should("have.attr", "aria-selected", "true")
            .should("have.focus")

          cy.focused().type("{leftarrow}")
          cy.findByRole("tab", { name: aboutTabs[0].filename })
            .should("have.attr", "aria-selected", "true")
            .should("have.focus")

          cy.focused().type("{end}")
          cy.findByRole("tab", {
            name: aboutTabs[aboutTabs.length - 1].filename,
          })
            .should("have.attr", "aria-selected", "true")
            .should("have.focus")

          cy.focused().type("{home}")
          cy.findByRole("tab", { name: aboutTabs[0].filename })
            .should("have.attr", "aria-selected", "true")
            .should("have.focus")
        }

        // The contact paragraph/mailto link no longer appears in About —
        // it lives in the footer instead (#158).
        cy.findByRole("link", { name: aboutContent.email }).should("not.exist")
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

      cy.checkA11y('[data-testid="projects"]')

      cy.findByTestId("projects").within(() => {
        cy.findByText(projectContent.eyebrow)
        cy.findByRole("heading", { level: 2, name: projectContent.heading })
        cy.findByText(projectContent.caption)

        cy.findAllByTestId(/card-/i)
          .should("have.length", projects.length)
          .as("projectCards")

        projects.forEach((project) => {
          cy.findByTestId(`card-${project.title}`).within(() => {
            cy.findByRole("heading", { level: 3, name: project.title })
            cy.findByText(project.subtitle)
            cy.findByText(project.description)
            project.badgeText.forEach((text) => cy.findByText(text))
            if (project.impactMetricBold && project.impactMetricStandard) {
              cy.findByText(project.impactMetricBold)
            }
          })
        })

        projects.forEach((project, index) => {
          buttonLinks(index, getProjectButtons(project))
        })
      })
    })

    it(`should have an accessible footer with copyright & links, ${size}`, () => {
      cy.viewport(size)
      const currentYear = new Date().getFullYear()

      cy.checkA11y("footer")

      cy.get("footer").within(() => {
        cy.findByRole("heading", { level: 2, name: footerContent.heading })
        cy.contains(footerContent.privacyNotice)
        cy.contains(`${currentYear} ${heroContent.name}`)

        footerLinks.forEach((link) => {
          cy.findByRole("link", { name: link.label }).should(
            "have.attr",
            "href",
            link.href,
          )
        })

        cy.findAllByRole("link").should("have.length", 3)
      })
    })
  })
})
