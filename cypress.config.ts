import { defineConfig } from "cypress"

export default defineConfig({
  e2e: {
    baseUrl: process.env.CYPRESS_BASE_URL ?? "http://localhost:4280",
    setupNodeEvents() {},
  },
  // runMode (`cypress run`, CI/pre-push) retries transient blips; openMode
  // (`cypress open`, interactive debugging) doesn't, so failures never hide.
  retries: {
    runMode: 2,
    openMode: 0,
  },
})
