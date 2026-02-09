import React from "react"
import { MDBContainer } from "mdb-react-ui-kit"

import TestingLib from "IMG/octopus.png"
import StyledComp from "IMG/styled-components.png"
import { capitalizeFirstLetter } from "./components/utils"
import type { SkillCategories } from "./types"

// Base URL for devicon CDN - DRY principle
const DEVICON_BASE_URL =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons"

// Image source mapping
const iconSources: Record<string, string> = {
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

// Custom images for tools without devicon support
const customImages: Record<string, JSX.Element> = {
  "styled-components": (
    <img
      src={StyledComp}
      // key="styled"
      alt="styled-components"
      width={60}
      height={60}
    />
  ),
  "testing-library": (
    <img
      src={TestingLib}
      // key="testing"
      alt="testing-library"
      width={60}
      height={60}
    />
  ),
}

// Categorized skills with core skills marked
export const skillCategories: SkillCategories = {
  "Test Automation & QA": {
    icon: "🧪",
    skills: [
      { name: "cypress", isCore: true, imageSrc: iconSources.cypress },
      { name: "playwright", isCore: true, imageSrc: iconSources.playwright },
      {
        name: "testing-library",
        isCore: true,
        customImage: customImages["testing-library"],
      },
      {
        name: "tricentis-qtest",
        isCore: false,
        imageSrc: iconSources["tricentis-qtest"],
      },
      {
        name: "browserstack",
        isCore: false,
        imageSrc: iconSources.browserstack,
      },
    ],
  },
  "Frontend Development": {
    icon: "⚛️",
    skills: [
      { name: "react", isCore: true, imageSrc: iconSources.react },
      { name: "typescript", isCore: true, imageSrc: iconSources.typescript },
      { name: "javascript", isCore: true, imageSrc: iconSources.javascript },
      { name: "ember", isCore: false, imageSrc: iconSources.ember },
      { name: "html", isCore: false, imageSrc: iconSources.html },
      { name: "css", isCore: false, imageSrc: iconSources.css },
      {
        name: "styled-components",
        isCore: false,
        customImage: customImages["styled-components"],
      },
    ],
  },
  "Development Tools & CI/CD": {
    icon: "🔧",
    skills: [
      { name: "gitlab", isCore: false, imageSrc: iconSources.gitlab },
      { name: "github", isCore: false, imageSrc: iconSources.github },
      { name: "bitbucket", isCore: false, imageSrc: iconSources.bitbucket },
      { name: "vscode", isCore: false, imageSrc: iconSources.vscode },
      { name: "webpack", isCore: false, imageSrc: iconSources.webpack },
      { name: "vim", isCore: false, imageSrc: iconSources.vim },
    ],
  },
}

/**
 * Renders a skill icon with tooltip
 * @param name - Skill name
 * @param imageSrc - URL to skill icon
 * @param customImage - Custom JSX image element (if no imageSrc)
 * @param isCore - Whether this is a core skill (renders larger)
 */
export const getImage = (
  name: string,
  imageSrc?: string,
  customImage?: JSX.Element,
  isCore: boolean = false,
): JSX.Element => {
  const displayName = capitalizeFirstLetter(name)
  const size = isCore ? 70 : 60

  return (
    <MDBContainer
      className={`skill-item square rounded-8 py-3 ${isCore ? "skill-item-core" : ""}`}
    >
      {imageSrc ? (
        <img
          src={imageSrc}
          alt={name}
          height={size}
          width={size}
          loading="lazy"
        />
      ) : (
        customImage
      )}
      <p className="skill-name">{displayName}</p>
    </MDBContainer>
  )
}
