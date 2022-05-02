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

  private getPage (pageName: PAGE, device?: DEVICE, options?: unknown): string {
    if (!(pageName as PAGE in this.page)) {
      this.page.pageName = pageFactory.getNativePage(pageName, device, options)
    }
    return this.page.pageName
  }

  public getElem (pageName: PAGE, locator: string, device?: DEVICE, options?: unknown, isFunction?: string): string {
    const obj = this.getPage(pageName, device, options)
    return isFunction ? obj[locator](isFunction) : obj[locator]
  }

  public checkPageElem (pageName: PAGE, device: DEVICE, options?: unknown): void {
    const obj = this.getPage(pageName, device, options)
    Object.keys(obj).forEach((locator) => {
      if (locator === 'url') {
        cy.url().should('eq', obj[locator])
      } else if (locator.startsWith('value')) {
        cy.get(obj[locator]()).should('be.visible')
      } else if (locator.startsWith('exist')) {
        cy.get(obj[locator]).should('exist')
      } else if (!locator.startsWith('num') &&
      !locator.startsWith('popup') &&
      !locator.startsWith('skip') &&
      !locator.endsWith('Url')) {
        cy.get(obj[locator])
          // .scrollIntoView({ offset: { top: -50, left: 0 } })
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

  public checkPopUpElem (pageName: PAGE, popupName: string): void {
    const pageObj = this.getPage(pageName)
    Object.keys(pageObj).forEach((locator) => {
      if (locator.startsWith(popupName)) {
        cy.get(pageObj[locator])
          .should('be.visible')
      }
    })
  }

  public checkDescending (pageName: PAGE, elemName: string): void {
    const arrayDollars = []
    cy.get(this.getElem(pageName, elemName)).each(($el) => {
      if (elemName === 'topCollectionVolume') {
        const unit: string = $el.text().substring($el.text().length - 1)
        arrayDollars.push(unit === 'K' ? parseFloat($el.text()) * 1000 : parseFloat($el.text()) * 1000000)
      } else if (elemName === 'topCollectionVolumePer') {
        arrayDollars.push($el.text().substring($el.text().length - 1).substring(1))
      }
    }).then(() => {
      const sorted = [...arrayDollars]
      sorted.sort((a, b) => b - a)
      expect(arrayDollars).to.deep.equal(sorted)
    })
  }
}
