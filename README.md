![CI/CD workflow](https://github.com/TzolkinB/portfolio-react/actions/workflows/cicd.yml/badge.svg)

# Personal Portfolio Website

## Overview

Modern portfolio built with React 18, TypeScript 5, and [MDB React UI Kit](https://mdbootstrap.com/docs/react/) (Material Design for Bootstrap). Features responsive design, project showcase, and automated testing.

**Key Technologies:**

- React 18, TypeScript 5.9
- [MDB React UI Kit](https://mdbootstrap.com/docs/react/)
- Webpack 5, NPM scripts, Husky
- AWS S3 & Route 53 for hosting
- Cypress (with Testing Library) for E2E tests
- Prettier & ESLint for code quality
- [Devicon](https://devicon.dev/) for language icons

## Directory Structure

- `src/` — Main React app (components, assets, utils)
- `cypress/` — E2E tests (specs, helpers, fixtures)
- `build-utils/` — Webpack configs
- `scripts/` — Custom scripts (e.g., Claude test prompt)

## Installation & Usage

Install dependencies:

```sh
npm install
```

Start development server (http://localhost:4280):

```sh
npm start
```

Build for production:

```sh
npm run build
```

Build & deploy to AWS:

```sh
npm run prod
```

## Testing

- Run all Cypress tests (headless):
  ```sh
  npm test
  ```
- Open Cypress UI:
  ```sh
  npm run cy:ui
  ```
- Custom script for Claude Code prompt (copies test failure context to clipboard):
  ```sh
  ./scripts/test-and-claude.sh
  ```

## Linting & Formatting

- Lint all code:
  ```sh
  npm run lint
  ```
- Format code with Prettier (auto on save in VS Code):
  - Prettier config: `.prettierrc`
  - ESLint config: `eslint.config.cjs`

## CI/CD

Automated via GitHub Actions ([see workflow](https://github.com/TzolkinB/portfolio-react/actions/workflows/cicd.yml)). Runs tests and linting on push/PR.

## Notes

- Cypress tests loop through desktop, tablet, and mobile for each spec (5 specs × 3 sizes = 15 runs per file)
- Uses [Devicon](https://devicon.dev/) for technology icons in the UI
- All project and skills data are type-safe and managed in `src/constants/`

---

**Author:** Kimberly Bell
