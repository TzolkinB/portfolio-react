export const sizes: Cypress.ViewportPreset[] = [
  "macbook-11",
  "ipad-2",
  "iphone-6",
]

export const anchorLinks = [
  { name: "About", link: "#about" },
  { name: "Skills", link: "#skills" },
  { name: "Projects", link: "#projects" },
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
