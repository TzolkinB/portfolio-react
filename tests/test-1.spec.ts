import { test, expect } from '@playwright/test'
import {
  sizes,
  anchorLinks,
  buttonLinks,
  buttonsCard1,
  buttonsCard2,
  buttonsCard3,
  devAccordionTitle,
  qaAccordionTitle,
} from './commonMethods'

test.describe('Profile tests', () => {
  test.beforeEach(async ({ page }) => {
    // await page.waitForResponse('localhost:4280')
    // await page.goto('/')
    await page.goto('https://kimbell.me/')
  })

  const cloudHosting = ['gitlab', 'bitbucket', 'github', 'vscode']
  const testingTools = [
    'cypress',
    'testing-library',
    'tricentis-qtest',
    'browserstack',
  ]
  const terminalTools = ['git', 'webpack', 'yaml', 'vim']
  const webDevTools = [
    'javascript',
    'typescript',
    'react',
    'ember',
    'html',
    'css',
    'styled-components',
  ]
  const allSkills = [
    ...testingTools,
    ...webDevTools,
    ...terminalTools,
    ...cloudHosting,
  ]

  // sizes.forEach((size) => {
  test(`should have whiskers img, 3 links, and a dropdown in the nav bar`, async ({
    page,
    isMobile,
  }) => {
    await expect(page.locator('nav').locator('img')).toHaveAttribute(
      'src',
      '/paths.IMG/W-white.png',
    )

    const navLinks = () => {
      return isMobile
        ? page.getByTestId('nav-links')
        : page.locator('nav').getByTestId('nav-links')
    }

    if (!isMobile) {
      await expect(navLinks().getByRole('link')).toHaveCount(3)
    } else {
      await page.getByRole('button', { name: 'Toggle navigation' }).click()
      await expect(navLinks().getByRole('link')).toHaveCount(3)
    }

    // profile.spec.cy.ts: lines 65-74
    anchorLinks.forEach(async (anchor) => {
      // for (const link in navLinks()) {
      // navLinks().forEach(link => {
      console.log('link')
      // expect(link).toEqual(anchor.name)
      // await expect(link).toHaveAttribute('href', anchor.link)
    })
    // await expect(
    //   navLinks().getByRole('link', {
    //     name: anchor.name,
    //   }),
    // ).toHaveAttribute('href', anchor.link)
    // await navLinks().getByRole('link', { name: anchor.name }).click()
    // expect(page).toHaveURL(`/${anchor.link}`)
    // })

    const resumeDropdown = page.getByTestId('resume-dropdown')
    await expect(resumeDropdown.getByText('Resumes')).toHaveAttribute(
      'aria-expanded',
      'false',
    )
    await resumeDropdown.click()
    await expect(resumeDropdown.getByText('Resumes')).toHaveAttribute(
      'aria-expanded',
      'true',
    )

    const dropdownMenu = resumeDropdown.getByRole('list')
    //FIXME: count is 1 not 2
    //dropdownMenu.count()
    //await expect(dropdownMenu).toHaveCount(2)
    await expect(
      dropdownMenu.getByRole('link', { name: 'Dev Resume' }),
    ).toHaveAttribute('href', '/paths.IMG/Bell_Kim-DevResume2.pdf')

    const devResponse = await page.request.get(
      '/paths.IMG/Bell_Kim-DevResume2.pdf',
    )
    await expect(devResponse).toBeOK()

    await expect(
      dropdownMenu.getByRole('link', { name: 'QA Resume' }),
    ).toHaveAttribute('href', '/paths.IMG/Bell_Kimberly-Resume.pdf')
    const qaResponse = await page.request.get(
      '/paths.IMG/Bell_Kimberly-Resume.pdf',
    )
    await expect(qaResponse).toBeOK()
  })

  test('should have profile image in home section and bullet points in about me section', async ({
    page,
  }) => {
    // await page.FIXME_viewport(size);
    const home = page.getByTestId('home')
    await expect(home.getByRole('heading', { level: 1 })).toHaveText('Kim Bell')
    await expect(home.getByRole('heading', { level: 2 })).toHaveText(
      'Software Engineer',
    )
    await expect(home.locator('img')).toHaveAttribute(
      'src',
      '/paths.IMG/profile2.jpg',
    )

    const about = page.getByTestId('about')
    await expect(about).toBeVisible()
    await expect(
      about.getByRole('heading', { level: 2, name: 'About Me' }),
    ).toBeVisible()
    // Both accordions default to closed (collapsed) state
    const accordions = about.locator('.accordion-item')
    await expect(accordions).toHaveCount(2)
    await expect(
      accordions.first().getByRole('button', { name: qaAccordionTitle }),
    ).toHaveClass(/collapsed/)
    await expect(accordions.first().getByTestId('success-check')).toHaveCount(6)

    await expect(
      accordions.last().getByRole('button', { name: devAccordionTitle }),
    ).toHaveClass(/collapsed/)
    await expect(accordions.first().getByTestId('success-check')).toHaveCount(6)
  })

  test('should have tech icons and tooltips in skills section', async ({
    page,
  }) => {
    // await page.FIXME_viewport(size);
    const skills = page.getByTestId('skills')
    await expect(skills.getByRole('heading', { level: 2 })).toHaveText('Skills')
    const skillImages = skills.locator('img')
    await expect(skillImages).toHaveCount(allSkills.length)
    const imagesCount = await skillImages.count()
    // Check alt image tag
    // Check tooltip on image, tooltip html lives outside of skills data-testid
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < imagesCount; i++) {
      expect(skillImages.nth(i)).toHaveAttribute('alt', allSkills[i])
      await skillImages.nth(i).hover()
      //await (page.getByRole('tooltip').nth(i)).waitFor()
      expect(page.getByRole('tooltip').nth(i)).toHaveText(
        allSkills[i].toLocaleUpperCase(),
      )
    }
  })
})
