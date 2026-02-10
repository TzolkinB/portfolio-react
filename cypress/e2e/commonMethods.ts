export const sizes: Cypress.ViewportPreset[] = [
  "macbook-11",
  "ipad-2",
  "iphone-6",
]

export const qaAccordionTitle =
  "QA Software Engineer in Test (SDET) in Web Test Automation"
export const devAccordionTitle = "Frontend Developer in React"

export const anchorLinks = [
  { name: "About", link: "#about" },
  { name: "Skills", link: "#skills" },
  { name: "Projects", link: "#projects" },
]

/* Project Cards */
// TODO: Abstract further into one array or too much?
export const buttonsCard3 = [
  {
    name: "Notion Site",
    href: "https://kimbellcypress.notion.site/Best-Practices-bb7e5a025c834b7397d531ad76bee0b4",
  },
]

export const buttonsCard1 = [
  {
    name: "Github Repo",
    href: "https://github.com/TzolkinB/playwright-test-collection",
  },
]

export const buttonsCard2 = [
  {
    name: "Github Repo",
    href: "https://github.com/TzolkinB/cypress-test-collection",
  },
]
export const buttonsCard4 = [
  {
    name: "Demo",
    href: "https://memory-game1234.firebaseapp.com/#/",
  },
  {
    name: "Github Repo",
    href: "https://github.com/TzolkinB/memory",
  },
]

export const buttonLinks = (
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
