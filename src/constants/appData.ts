import { BadgeConfig, Skill, SkillCategories } from "../types/types"

import type { AboutTab, FooterLink, Stat } from "../types/types"

// Developer console message
export const DEV_MESSAGE = {
  text: "👋 Thank you for visiting my site! If you like my credentials and are looking for an SDET with expertise in test automation, DM me. Let's discuss!",
  styles: [
    "font-size: 12px",
    "font-family: monospace",
    "background: black",
    "display: inline-block",
    "color: #5DC1BE",
    "padding: 8px 15px",
    "border: 3px solid;",
  ].join(";"),
} as const

export const badgeContent: readonly BadgeConfig[] = [
  { text: "Playwright" },
  { text: "Cypress" },
  { text: "React" },
] as const

export const heroContent = {
  eyebrow: "// available for remote SDET roles",
  name: "Kim Bell",
  title: "senior sdet & frontend developer",
  ctaPrimary: { label: "see projects", href: "#projects" },
  ctaSecondary: {
    label: "view résumé",
    href: "/paths.IMG/Bell_Kimberly-Resume.pdf",
  },
} as const

export const heroTerminal = {
  path: "kim@bell:~",
  whoamiPrompt: "$ whoami",
  whoamiOutput: "→ kim bell",
  rolePrompt: "$ cat role.txt",
  roleOutput: "→ senior sdet & frontend dev",
  photoPrompt: "$ cat ~/kim.jpg",
  statusPrompt: "$ ./status.sh",
  statusOutput: "→ open to remote work",
} as const

// Revealed by clicking the terminal card. `art` is a generic stand-in —
// swap it for hand-drawn ASCII art.
export const easterEggContent = {
  prompt: "$ cat easter_egg.txt",
  art: `
   /\\_/\\
  (=^.^=)   "No bugs here."
   (")(")_/`,
} as const

export const heroSocialLinks = [
  { label: "linkedin", href: "https://www.linkedin.com/in/kimbell4" },
  { label: "github", href: "https://github.com/TzolkinB" },
] as const

export const aboutContent = {
  heading: "cd ./about",
  caption: "# 4 files · ~/about",
  email: "krbell4@gmail.com",
} as const

export const aboutTabs: readonly AboutTab[] = [
  { id: "summary", filename: "summary.md" },
  { id: "experience", filename: "experience.md" },
  { id: "focus", filename: "focus.md" },
  { id: "off-the-clock", filename: "off-the-clock.md" },
] as const

export const projectContent = {
  eyebrow: "// selected work",
  heading: "open ./projects",
  caption: "# projects — 4 repositories · sorted by relevance",
} as const

export const statBandData: readonly Stat[] = [
  { value: "8+", label: "Years Experience" },
  { value: "2+", label: "Years SDET" },
] as const

export const footerContent = {
  heading: "contact --send",
  privacyNotice:
    "This site uses Google Analytics with privacy protections to understand visitor traffic.",
} as const

export const footerLinks: readonly FooterLink[] = [
  { href: `mailto:${aboutContent.email}`, label: aboutContent.email },
  {
    href: "https://www.linkedin.com/in/kimbell4",
    label: "linkedin.com/in/kimbell4",
  },
  { href: "https://github.com/TzolkinB", label: "github.com/TzolkinB" },
] as const

export const DEVICON_BASE_URL =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons"

export const skillCategories: SkillCategories = {
  frontend: {
    icon: "🎨",
    // Pipeline-stage kicker shown above this category (e.g. "stage 01 · build").
    kicker: "build",
    skills: [
      {
        name: "typeScript",
        years: "4+",
        isCore: true,
        iconPath: "typescript/typescript-original.svg",
      },
      {
        name: "javaScript",
        years: "8+",
        isCore: true,
        iconPath: "javascript/javascript-original.svg",
      },
      {
        name: "react",
        years: "6+",
        isCore: true,
        iconPath: "react/react-original.svg",
      },
      {
        name: "ember",
        years: "3",
        isCore: false,
        iconPath: "ember/ember-original.svg",
      },
      {
        name: "html",
        years: "8+",
        isCore: false,
        iconPath: "html5/html5-original.svg",
      },
      {
        name: "css",
        years: "8+",
        isCore: false,
        iconPath: "css3/css3-original.svg",
      },
      {
        name: "styled-components",
        years: "3+",
        isCore: false,
        iconPath: "styledcomponents/styledcomponents-original.svg",
      },
    ] as Skill[],
  },
  test_automation_qa: {
    icon: "🧪",
    kicker: "test",
    skills: [
      {
        name: "cypress",
        years: "2+",
        isCore: true,
        iconPath: "cypressio/cypressio-original.svg",
      },
      {
        name: "playwright",
        years: "1+",
        isCore: true,
        iconPath: "playwright/playwright-original.svg",
      },
      {
        name: "testing-library",
        years: "2+",
        isCore: true,
        customImageKey: "testing-library",
      },
      {
        name: "tricentis-qtest",
        years: "3+",
        isCore: false,
        iconPath: "qtest/qtest-original.svg",
      },
      {
        name: "browserstack",
        years: "2+",
        isCore: false,
        iconPath: "browserstack/browserstack-original.svg",
      },
      {
        name: "json",
        years: "4+",
        isCore: false,
        iconPath: "json/json-original.svg",
      },
    ] as Skill[],
  },
  tooling_cicd: {
    icon: "🔧",
    // "tools", not "ship" — only github-actions here is actually a shipping/deploy
    // tool; the rest (vscode, jira, confluence, vite, eslint, webpack, plus the VCS
    // hosts) are editor/PM/build tooling.
    kicker: "tools",
    skills: [
      {
        name: "github",
        years: "8+",
        isCore: false,
        iconPath: "github/github-original.svg",
      },
      {
        name: "gitlab",
        years: "3+",
        isCore: false,
        iconPath: "gitlab/gitlab-original.svg",
      },
      {
        name: "bitbucket",
        years: "3+",
        isCore: false,
        iconPath: "bitbucket/bitbucket-original.svg",
      },
      {
        name: "github-actions",
        years: "2+",
        isCore: false,
        iconPath: "githubactions/githubactions-original.svg",
      },
      {
        name: "vscode",
        years: "6+",
        isCore: false,
        iconPath: "vscode/vscode-original.svg",
      },
      {
        name: "jira",
        years: "4+",
        isCore: false,
        iconPath: "jira/jira-original.svg",
      },
      {
        name: "confluence",
        years: "4+",
        isCore: false,
        iconPath: "confluence/confluence-original.svg",
      },
      {
        name: "vite",
        years: "1+",
        isCore: false,
        iconPath: "vite/vite-original.svg",
      },
      {
        name: "eslint",
        years: "4+",
        isCore: false,
        iconPath: "eslint/eslint-original.svg",
      },
      {
        name: "webpack",
        years: "4",
        isCore: false,
        iconPath: "webpack/webpack-original.svg",
      },
    ] as Skill[],
  },
}
