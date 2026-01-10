import React from 'react'
import { MDBTooltip } from 'mdb-react-ui-kit'

import Qtest from 'IMG/qtest.svg'
import TestingLib from 'IMG/octopus.png'
import StyledComp from 'IMG/styled-components.png'

export const cloudHosting = ['gitlab', 'bitbucket', 'github', 'vscode']
export const testingTools = [
  'cypress',
  'testing-library',
  'tricentis-qtest',
  'browserstack',
]
export const terminalTools = ['git', 'webpack', 'yaml', 'vim']
export const webDevTools = [
  'javascript',
  'typescript',
  'react',
  'ember',
  'html',
  'css',
  'styled-components',
]

const mapSrc = {
  gitlab:
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original-wordmark.svg',
  bitbucket:
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bitbucket/bitbucket-original-wordmark.svg',
  github:
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg',
  browserstack:
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/browserstack/browserstack-original-wordmark.svg',
  git: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original-wordmark.svg',
  yaml: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/yaml/yaml-original.svg',
  vim: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vim/vim-original.svg',
  javascript:
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
  typescript:
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
  vscode:
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original-wordmark.svg',
  ember:
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ember/ember-original-wordmark.svg',
  html: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg',
  css: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg',
}

const mapImages = {
  'styled-components': (
    <img
      src={StyledComp}
      key="styled"
      alt="styled-components"
      width={60}
      height={60}
    />
  ),
  cypress: (
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cypressio/cypressio-original-wordmark.svg"
      key="cypress"
      alt="cypress"
      height={90}
      width={90}
    />
  ),
  'testing-library': (
    <img
      src={TestingLib}
      key="testing"
      alt="testing-library"
      width={60}
      height={60}
    />
  ),
  'tricentis-qtest': (
    <img src={Qtest} key="qtest" alt="tricentis-qtest" width={50} height={50} />
  ),
  react: (
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg"
      key="react"
      alt="react"
      height={60}
      width={60}
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}
    />
  ),
  webpack: (
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/webpack/webpack-original.svg"
      key="webpack"
      alt="webpack"
      height={60}
      width={60}
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}
    />
  ),
}

export const getImage = (tool: string) => {
  if (mapSrc[tool as keyof typeof mapSrc]) {
    return (
      <MDBTooltip tag="span" title={`${tool.toLocaleUpperCase()}`} key={tool}>
        <img
          src={mapSrc[tool as keyof typeof mapSrc]}
          alt={tool}
          height={60}
          width={60}
        />
      </MDBTooltip>
    )
  }
  return (
    <MDBTooltip tag="span" title={`${tool.toLocaleUpperCase()}`} key={tool}>
      {mapImages[tool as keyof typeof mapImages]}
    </MDBTooltip>
  )
}
