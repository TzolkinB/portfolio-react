import { BadgeConfig, Skill, SkillCategories } from "../types/types"

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
  { icon: "fas fa-check", text: "Playright" },
  { icon: "fas fa-check", text: "Cypress" },
  { icon: "fab fa-react", text: "React" },
] as const

export const experienceStatData = [
  { years: 8, text: "Years Experience" },
  { years: 2, text: "Years SDET" },
] as const

export const footerLinks = [
  {
    href: "https://github.com/TzolkinB",
    ariaLabel: "link to github",
    svgPath:
      "M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.743 17.343 49.52 41.191 57.537 3.014.557 4.126-1.305 4.126-2.905 0-1.439-.056-6.197-.086-11.977-16.753 3.653-20.255-8.153-20.255-8.153-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.671.413-3.671 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C54.971 35.896 59.547 34.56 64 34.52c4.455.04 9.042 1.376 13.273 4.073 11.532-7.813 16.588-6.19 16.588-6.19 3.287 8.317 1.220 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.8-8.023 41.164-30.825 41.164-57.529 0-33.353-27.04-60.388-60.388-60.388z",
  },
  {
    href: "https://www.linkedin.com/in/kimbell4",
    ariaLabel: "link to linkedin",
    svgPath:
      "M116 3H12a8.91 8.91 0 00-9 8.8v104.42a8.91 8.91 0 009 8.78h104a8.93 8.93 0 009-8.81V11.77A8.93 8.93 0 00116 3zM21.06 48.73h18.11V107H21.06zm9.06-29a10.5 10.5 0 11-10.5 10.49 10.5 10.5 0 0110.5-10.49M50.53 48.73h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75v32H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53z",
  },
] as const

export const DEVICON_BASE_URL =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons"

export const skillCategories: SkillCategories = {
  "Test Automation & QA": {
    icon: "🧪",
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
  "Frontend Development": {
    icon: "🎨",
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
        iconPath: "html5/html5-original-wordmark.svg",
      },
      {
        name: "css",
        years: "8+",
        isCore: false,
        iconPath: "css3/css3-original-wordmark.svg",
      },
      {
        name: "styled-components",
        years: "3+",
        isCore: false,
        customImageKey: "styled-components",
      },
    ] as Skill[],
  },
  "Development Tools & CI/CD": {
    icon: "🔧",
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
        name: "vscode",
        years: "6+",
        isCore: false,
        iconPath: "vscode/vscode-original.svg",
      },
      {
        name: "webpack",
        years: "4",
        isCore: false,
        iconPath: "webpack/webpack-original.svg",
      },
      {
        name: "vim",
        years: "3+",
        isCore: false,
        iconPath: "vim/vim-original.svg",
      },
      {
        name: "github-actions",
        years: "2+",
        isCore: false,
        iconPath: "githubactions/githubactions-original-wordmark.svg",
      },
      {
        name: "jira",
        years: "4+",
        isCore: false,
        iconPath: "jira/jira-original-wordmark.svg",
      },
      {
        name: "vite",
        years: "1+",
        isCore: false,
        iconPath: "vite/vite-original-wordmark.svg",
      },
      {
        name: "eslint",
        years: "4+",
        isCore: false,
        iconPath: "eslint/eslint-original-wordmark.svg",
      },
    ] as Skill[],
  },
}
