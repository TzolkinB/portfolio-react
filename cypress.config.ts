import { defineConfig } from "cypress"

export default defineConfig({
  e2e: {
    // baseUrl: "http://localhost:4280", //to run tests locally
    baseUrl: "https://kimbell.me", //to run tests in CI/CD pipeline
    setupNodeEvents() {},
  },
  retries: 1,
})
