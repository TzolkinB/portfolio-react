import type { Project } from "./types"

const projects: Project[] = [
  {
    title: "Playwright Test Collection",
    subtitle: "Test Automation • TypeScript",
    description:
      "Focuses on conversion from Cypress to Playwright with TypeScript enhancements",
    url: "https://github.com/TzolkinB/playwright-test-collection",
    urlText: "Github Repo",
    badgeText: ["Playwright", "TypeScript", "API Testing", "UI Testing"],
    impactMetricBold: "Cross-browser testing",
    impactMetricStandard: "with fixtures and helper utilities",
  },
  {
    title: "Cypress Test Collection",
    subtitle: "Test Automation • JavaScript",
    description:
      "Emphasizes the organized structure with separation of concerns (API, integration, regression)",
    url: "https://github.com/TzolkinB/cypress-test-collection",
    urlText: "Github Repo",
    badgeText: ["Cypress", "JavaScript", "API Testing", "UI Testing"],
    impactMetricBold: "Organized test structure",
    impactMetricStandard: "with CI/CD integration and responsive testing",
  },
  {
    title: "My Cypress Guide",
    subtitle: "SDET Documentation • Ongoing",
    description:
      "Personal guidelines I follow as well as a list of plugins, common UI patterns, and any other Cypress tips or information I find useful.",
    url: "https://kimbellcypress.notion.site/Best-Practices-bb7e5a025c834b7397d531ad76bee0b4",
    urlText: "Notion Site",
    badgeText: ["Cypress", "Documentation"],
    impactMetricBold: "Comprehensive resource",
    impactMetricStandard: "for team onboarding",
  },
  {
    title: "Memory Game",
    subtitle: "Uses React, Webpack, Bootstrap Material Design",
    description:
      "Traditional memory card game for use by two players that declares a winner and can be replayed multiple times.",
    url: "https://memory-game1234.firebaseapp.com/#/",
    urlText: "Demo",
    url2: "https://github.com/TzolkinB/memory",
    url2Text: "Github Repo",
    badgeText: ["Github", "Playwright"],
  },
]

export default projects
