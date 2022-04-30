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

  private getPage (pageName: string): string {
    if (!(pageName in this.page)) {
      this.page.pageName = pageFactory.getNativePage(`${pageName}.locators`)
    }
    return this.page.pageName
  }

  public getElem (pageName: string, locator: string): string {
    return this.getPage(pageName)[locator]
  }

  public checkPageElem (pageName: string): void {
    const obj = this.getPage(pageName)
    Object.keys(obj).forEach((locator) => {
      if (locator === 'url') {
        cy.url().should('eq', obj[locator])
      } else if (locator.startsWith('value')) {
        cy.get(obj[locator]()).should('be.visible')
      } else if (locator.startsWith('exist')) {
        cy.get(obj[locator]).should('exist')
      } else if (!locator.startsWith('num') &&
      !locator.endsWith('Url')) {
        cy.get(obj[locator]).should('be.visible')
      }
    })
  }

  public checkPageRedirect (pageName: string): void {
    const obj = this.getPage(pageName)
    Object.keys(obj).forEach((locator) => {
      const selector = this.getElem(pageName, locator)
      if (locator.endsWith('Link')) {
        if (locator === 'subscriptionLink') {
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
