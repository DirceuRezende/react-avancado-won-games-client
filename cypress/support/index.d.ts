// load type definitions from Cypress module
/// <reference types="cypress" />

type ShowcasesAttributes = {
  name: string
  highlight?: boolean
}

declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to visit google page
     * @example cy.google()
     */
    google(): Chainable<Window>

    /**
     * Custom command to get element by data-cy
     * @example cy.getByDataCy('selector')
     */
    getByDataCy(selector: string): Chainable<Element>

    /**
     * Custom command to check banner in page
     * @example cy.shouldRenderBanner()
     */
     shouldRenderBanner(): Chainable<Element>

     /**
     * Custom command to check showcase in page
     * @example cy.shouldRenderShowcase()
     */
      shouldRenderShowcase(attrs: ShowcasesAttributes): Chainable<Element>
  }
}