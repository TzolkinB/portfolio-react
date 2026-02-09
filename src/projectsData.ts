import type { Project } from "./types"

const projects: Project[] = [
  {
    title: "My Cypress Guide",
    subtitle: "SDET Documentation • Ongoing",
    description:
      "Personal guidelines I follow as well as a list of plugins, common UI patterns, and any other Cypress tips or information I find useful.",
    url: "https://kimbellcypress.notion.site/Best-Practices-bb7e5a025c834b7397d531ad76bee0b4",
    urlText: "Notion Site",
    badgeText: ["Cypress", "Documentation"],
    impactMetric: "Comprehensive resource for team onboarding",
  },
  {
    title: "React Starter Template",
    subtitle: "Uses Webpack",
    description:
      "Basic template for getting new applications up and running quickly.",
    url: "https://github.com/TzolkinB/react-template",
    urlText: "Github Repo",
    badgeText: ["Github", "Cypress"],
    impactMetric: "Quick setup for production-ready React apps",
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
