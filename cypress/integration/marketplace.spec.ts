import { PAGE, DEVICE_MIN_WIDTH, DEVICE, TIMEOUT } from '../pages/constants'
import Page from '../pages/page'
const page = new Page()

describe('Marketplace page testing', () => {
  // it('Check marketplace components in desktop min width resolution', () => {
  //   cy.viewport(DEVICE_MIN_WIDTH.DESKTOP, 800)
  //   page.open('marketplace')
  //   cy.get(page.getElem(PAGE.MARKETPLACE_PAGE, 'consentAcceptAll'), { timeout: TIMEOUT }).click()

  //   page.checkPageElem(PAGE.MARKETPLACE_PAGE, DEVICE.DESKTOP)
  // })

  // it('Check marketplace components in desktop min width resolution', () => {
  //   cy.viewport(DEVICE_MIN_WIDTH.DESKTOP, 800)
  //   page.open('marketplace')
  //   cy.get(page.getElem(PAGE.MARKETPLACE_PAGE, 'consentAcceptAll'), { timeout: TIMEOUT }).click()

  //   page.checkPageElem(PAGE.MARKETPLACE_PAGE, DEVICE.DESKTOP)
  // })

  // it('Check infinte scroll in marketplace page', () => {
  //   const numNftCards = page.getElem(PAGE.MARKETPLACE_PAGE, 'numbatch')
  //   cy.viewport(DEVICE_MIN_WIDTH.DESKTOP, 800)
  //   page.open('marketplace')
  //   cy.get(page.getElem(PAGE.MARKETPLACE_PAGE, 'consentAcceptAll'), { timeout: TIMEOUT }).click()
  //   // check for 3 times
  //   for (let i = 1; i < 4; i++) {
  //     cy.get(page.getElem(PAGE.MARKETPLACE_PAGE, 'marketplaceNftCardContainer')).should('have.length', parseInt(numNftCards) * i)
  //     cy.window().scrollTo('bottom')
  //     cy.get(page.getElem(PAGE.MARKETPLACE_PAGE, 'existInfiniteLoader')).should('be.visible')
  //   }
  // })

  it('Check filter price range in marketplace page', () => {
    page.open('marketplace')
    cy.get(page.getElem(PAGE.MARKETPLACE_PAGE, 'consentAcceptAll'), { timeout: TIMEOUT }).click()
    cy.get(page.getElem(PAGE.MARKETPLACE_PAGE, 'marketplaceFilterButton')).click()
    page.checkPopUpElem(PAGE.MARKETPLACE_PAGE, 'popupFilter')
    cy.get(page.getElem(PAGE.MARKETPLACE_PAGE, 'popupFilterMinPriceInput')).type('100')
    cy.get(page.getElem(PAGE.MARKETPLACE_PAGE, 'popupFilterMaxPriceInput')).type('110')
    cy.get(page.getElem(PAGE.MARKETPLACE_PAGE, 'popupFilterApply')).click()
    cy.get(page.getElem(PAGE.MARKETPLACE_PAGE, 'topCollectiblesNftCardBuyNowPrice')).each(($el) => {
      console.log($el.text())
    })
  })
})
