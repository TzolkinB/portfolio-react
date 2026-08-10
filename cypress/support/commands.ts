/// <reference types="cypress" />

// checkLinkReachable centralizes the "hit this URL, assert it's live" pattern
// used by cypress/e2e/linkHealth.spec.cy.ts. failOnStatusCode is always false
// so a non-2xx response (e.g. LinkedIn's 999 to bot traffic) reaches the
// assertion as a clean failure message instead of cy.request throwing first.
//
// - expectedStatus omitted: only rules out a dead link (not 404) — for
//   external destinations where the exact status isn't ours to guarantee.
// - expectedStatus given: asserts that exact status — for links we control
//   or expect to resolve cleanly (same-origin assets, our own project repos).
Cypress.Commands.add(
  "checkLinkReachable",
  (url: string, expectedStatus?: number) => {
    cy.request({ url, failOnStatusCode: false })
      .its("status")
      .should((status: number) => {
        if (expectedStatus === undefined) {
          expect(status).to.not.eq(404)
        } else {
          expect(status).to.eq(expectedStatus)
        }
      })
  },
)

declare global {
  namespace Cypress {
    interface Chainable {
      checkLinkReachable(url: string, expectedStatus?: number): Chainable<number>
    }
  }
}

export {}
