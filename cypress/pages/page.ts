import pageFactory from './page.factory'

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
  readonly page: { pageName?: string }
  /**
  * Opens a sub page of the page
  * @param path path of the sub page (e.g. /path/to/page.html)
  */

  constructor () {
    this.page = {}
  }

  private getPage (pageName: string): string {
    if (!(pageName in this.page)) {
      this.page.pageName = pageFactory.getNativePage(`${pageName}.locators`)
    }
    return this.page.pageName
  }

  public getLocator (pageName: string, locator: string): string {
    return this.getPage(pageName)[locator]
  }

  open (path: string): any {
    return cy.visit(`/${path}`)
  }
}
