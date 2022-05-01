import { DEVICE, PAGE } from './constants'
import pageFactory from './page.factory'

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
  readonly page: { pageName?: string }

  constructor () {
    this.page = {}
  }

  /**
  * Opens a sub page of the page
  * @param path path of the sub page (e.g. /path/to/page.html)
  */
  open (path: string): void {
    cy.visit(`/${path}`)
  }

  private getPage (pageName: PAGE, device: DEVICE): string {
    if (!(pageName as PAGE in this.page)) {
      this.page.pageName = pageFactory.getNativePage(pageName, device)
    }
    return this.page.pageName
  }

  public getElem (pageName: PAGE, locator: string): string {
    return this.getPage(pageName)[locator]
  }

  public checkPageElem (pageName: PAGE, device: DEVICE): void {
    const obj = this.getPage(pageName, device)
    Object.keys(obj).forEach((locator) => {
      if (locator === 'url') {
        cy.url().should('eq', obj[locator])
      } else if (locator.startsWith('value')) {
        cy.get(obj[locator]()).should('be.visible')
      } else if (locator.startsWith('exist')) {
        cy.get(obj[locator]).should('exist')
      } else if (!locator.startsWith('num') &&
      !locator.startsWith('popup') &&
      !locator.endsWith('Url')) {
        // cy.log(cy.get('ot-sdk-container').its('length'))
        // if (Cypress.dom.isVisible(cy.get(this.getElem(PAGE.HOME_PAGE, 'consentAcceptAll'))) {
        //   cy.get(this.getElem(PAGE.HOME_PAGE, 'consentAcceptAll'), { timeout: 5000 }).click()
        // }
        cy.get(obj[locator])
          // .scrollIntoView()
          .should('be.visible')
      }
    })
  }

  public checkPageRedirect (pageName: PAGE): void {
    const obj = this.getPage(pageName)
    Object.keys(obj).forEach((locator) => {
      const selector = this.getElem(pageName, locator)
      if (locator.endsWith('Link')) {
        if (locator === 'subscriptionLink' ||
            locator === 'footerFaqLink' ||
            locator === 'footerTermsLink' ||
            locator === 'footerPrivacyLink') {
          cy.get(selector)
            .invoke('removeAttr', 'target')
        }
        cy.get(selector).click({ force: true })
        const url = this.getElem(pageName, `${locator}Url`)
        cy.url().should('include', url)
        cy.go('back')
      } else if (locator.endsWith('Href')) {
        const href = this.getElem(pageName, `${locator}Url`)
        cy.log(href)
        cy.get(selector).should('have.attr', 'href', href)
      }
    })
  }
}
