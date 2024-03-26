/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from "cypress"

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:4280",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})
