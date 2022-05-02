import { PAGE, DEVICE_MIN_WIDTH, DEVICE } from '../pages/constants'
import Page from '../pages/page'
const page = new Page()

describe('Drops page testing', () => {
  it('Check marketplace components in desktop min width resolution', () => {
    cy.viewport(DEVICE_MIN_WIDTH.DESKTOP, 800)
    page.open('marketplace')
    page.checkPageElem(PAGE.MARKETPLACE_PAGE, DEVICE.DESKTOP)
  })
})
