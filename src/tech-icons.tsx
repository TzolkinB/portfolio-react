import React from "react"
import { MDBContainer } from "mdb-react-ui-kit"

import TestingLib from "IMG/octopus.png"
import StyledComp from "IMG/styled-components.png"

export const cloudHosting = ["gitlab", "bitbucket", "github", "vscode"]
export const testingTools = [
  "cypress",
  "playwright",
  "testing-library",
  "tricentis-qtest",
  "browserstack",
]
export const terminalTools = ["webpack", "vim"]
export const webDevTools = [
  "javascript",
  "typescript",
  "react",
  "ember",
  "html",
  "css",
  "styled-components",
]

const mapSrc = {
  gitlab:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original.svg",
  bitbucket:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bitbucket/bitbucket-original.svg",
  github:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
  browserstack:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/browserstack/browserstack-original.svg",
  playwright:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/playwright/playwright-original.svg",
  vim: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vim/vim-original.svg",
  javascript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  typescript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  vscode:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
  ember:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ember/ember-original.svg",
  html: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg",
  css: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg",
  cypress:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cypressio/cypressio-original.svg",
  react:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  webpack:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/webpack/webpack-original.svg",
  "tricentis-qtest":
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/qtest/qtest-original.svg",
}

const mapImages = {
  "styled-components": (
    <img
      src={StyledComp}
      key="styled"
      alt="styled-components"
      width={60}
      height={60}
    />
  ),
  "testing-library": (
    <img
      src={TestingLib}
      key="testing"
      alt="testing-library"
      width={60}
      height={60}
    />
  ),
}

const capitalizeFirstLetter = (string: string) => {
  if (!string) {
    // Handle null, undefined, or empty strings
    return string
  }
  return `${string[0].toUpperCase()}${string.slice(1)}`
}

export const getImage = (tool: string) => {
  if (mapSrc[tool as keyof typeof mapSrc]) {
    return (
      <MDBContainer className="skill-item square rounded-8 py-3">
        <img
          src={mapSrc[tool as keyof typeof mapSrc]}
          alt={tool}
          height={60}
          width={60}
        />
        <div className="skill-name">{capitalizeFirstLetter(tool)}</div>
        {/* </div> */}
      </MDBContainer>
    )
  }
  return (
    <MDBContainer className="skill-item square rounded-8">
      {mapImages[tool as keyof typeof mapImages]}
      <div className="skill-name">{capitalizeFirstLetter(tool)}</div>
      {/* </div> */}
    </MDBContainer>
  )
}

// <MDBTooltip tag="span" title={`${tool.toLocaleUpperCase()}`} key={tool}></MDBTooltip>
