import { Page, expect, devices } from '@playwright/test'
//import { deviceDescriptors } from 'packages/playwright-core/lib/server/deviceDescriptors';
//import deviseDescriptor from '@playwright/test'

// FIXME: use types from playwright
// https://github.com/microsoft/playwright/blob/4facda5f224059eeb8ac8e43f3b50bba9c896ab6/packages/playwright-core/src/server/deviceDescriptors.ts#L18
//export const sizes: string[] = ['Desktop Firefox', 'iPad Mini', 'iPhone SE']
export const sizes: (keyof typeof devices)[] = [
  'Desktop Firefox',
  'iPad Mini',
  'iPhone SE',
]

export const qaAccordionTitle =
  'QA Software Engineer in Test (SDET) in Web Test Automation'
export const devAccordionTitle = 'Frontend Developer in React'

export const anchorLinks = [
  { name: 'About', link: '#about' },
  { name: 'Skills', link: '#skills' },
  { name: 'Projects', link: '#projects' },
]

/* Project Cards */
// TODO: Abstract further into one array or too much?
export const buttonsCard1 = [
  {
    name: 'Notion Site',
    href: 'https://kimbellcypress.notion.site/Best-Practices-bb7e5a025c834b7397d531ad76bee0b4',
  },
]

export const buttonsCard2 = [
  {
    name: 'Github Repo',
    href: 'https://github.com/TzolkinB/react-template',
  },
]
export const buttonsCard3 = [
  {
    name: 'Demo',
    href: 'https://memory-game1234.firebaseapp.com/#/',
  },
  {
    name: 'Github Repo',
    href: 'https://github.com/TzolkinB/memory',
  },
]

export const buttonLinks = async (
  index: number,
  buttons: { name: string; href: string }[],
  page: Page,
) => {
  // cy.get("@projectCards")
  //   .eq(index)
  //   .within(() => {
  //     buttons.forEach((button) => {
  //       cy.findByRole("button", { name: button.name }).should(
  //         "have.attr",
  //         "href",
  //         button.href,
  //       )

  //       cy.request(button.href).its("status").should("eq", 200)
  // })
  // })
  await expect(page.getByTestId(/card-/i)).toHaveCount(3)
  const projectCards = page.getByTestId(/card-/i)
  {
    const scope = projectCards.nth(index)

    buttons.forEach(async (button) => {
      await expect(
        scope.getByRole('button', { name: button.name }),
      ).toHaveAttribute('href', button.href)

      const response = await page.request.get(button.href)
      await expect(response).toBeOK()
    })
  }
}
