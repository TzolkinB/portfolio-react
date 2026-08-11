import type {
  accordionTitles as AccordionTitles,
  qaAccomplishments as QaAccomplishments,
  devAccomplishments as DevAccomplishments,
} from "../../src/components/About"
import type {
  heroContent as HeroContent,
  heroSocialLinks as HeroSocialLinks,
} from "../../src/constants/appData"
import type { Project } from "../../src/types/types"

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

export const heroLinks = (
  heroContent: typeof HeroContent,
  heroSocialLinks: typeof HeroSocialLinks,
) => {
  const heroLinksArray = [
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
  heroLinksArray.forEach((link) => {
    cy.findByRole("link", {
      name: link.label,
    }).should("have.attr", "href", link.href)
  })
}

export const roleWriteUps = (
  accordionTitles: typeof AccordionTitles,
  qaAccomplishments: typeof QaAccomplishments,
  devAccomplishments: typeof DevAccomplishments,
) => [
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
export const getProjectButtons = (project: Project) => {
  const buttons: { name: string; href: string }[] = [
    { name: project.urlText, href: project.url },
  ]
  if (project.url2 && project.url2Text) {
    buttons.push({ name: project.url2Text, href: project.url2 })
  }
  return buttons
}

export const buttonLinks = (
  index: number,
  buttons: { name: string; href: string }[],
) => {
  cy.get("@projectCards")
    .eq(index)
    .within(() => {
      buttons.forEach((button) => {
        cy.findByRole("link", { name: button.name }).should(
          "have.attr",
          "href",
          button.href,
        )
      })
    })
}
