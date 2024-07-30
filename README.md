![CI/CD workflow](https://github.com/TzolkinB/portfolio-react/actions/workflows/cicd.js.yml/badge.svg)

# Personal Portfolio Website

- UI: React 18, Typescript 5, Material Design for Bootstrap
- Hosting & Build: NPM, Webpack5, Husky, AWS S3 & Route 53
- [Devicon](https://devicon.dev/) for programming language icons

- Cypress: retry 1, each test loops through desktop, tablet, and mobile
  - Using Testing Library
  - 5 specs (15 total because of screen sizes) in 1 file
  - Takes 1:21 to run in cy open

## NPM Installation and Usage

- Install all of the npm dependencies:

    $ npm install

- To start the client in development run:

    $ npm start

This command will open a new window running at a default port of 4280 in your browser at
[http://localhost:4280](http://localhost:4280/).

- Build and Deploy to Domain

    $ npm run prod
