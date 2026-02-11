import { BadgeConfig } from "../types/types"

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

// Image source mapping
export const iconSources: Record<string, string> = {
  gitlab: `${DEVICON_BASE_URL}/gitlab/gitlab-original.svg`,
  bitbucket: `${DEVICON_BASE_URL}/bitbucket/bitbucket-original.svg`,
  github: `${DEVICON_BASE_URL}/github/github-original.svg`,
  browserstack: `${DEVICON_BASE_URL}/browserstack/browserstack-original.svg`,
  playwright: `${DEVICON_BASE_URL}/playwright/playwright-original.svg`,
  vim: `${DEVICON_BASE_URL}/vim/vim-original.svg`,
  javascript: `${DEVICON_BASE_URL}/javascript/javascript-original.svg`,
  typescript: `${DEVICON_BASE_URL}/typescript/typescript-original.svg`,
  vscode: `${DEVICON_BASE_URL}/vscode/vscode-original.svg`,
  ember: `${DEVICON_BASE_URL}/ember/ember-original.svg`,
  html: `${DEVICON_BASE_URL}/html5/html5-original-wordmark.svg`,
  css: `${DEVICON_BASE_URL}/css3/css3-original-wordmark.svg`,
  cypress: `${DEVICON_BASE_URL}/cypressio/cypressio-original.svg`,
  react: `${DEVICON_BASE_URL}/react/react-original.svg`,
  webpack: `${DEVICON_BASE_URL}/webpack/webpack-original.svg`,
  "tricentis-qtest": `${DEVICON_BASE_URL}/qtest/qtest-original.svg`,
}
