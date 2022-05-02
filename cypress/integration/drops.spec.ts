import { PAGE, DEVICE_MIN_WIDTH, DEVICE } from '../pages/constants'
import Page from '../pages/page'
const page = new Page()

describe('Drops page testing', () => {
  let dropsApi = {}
  beforeEach(function () {
    // "this" points at the test context object
    cy.fixture('drops').then((drops) => {
      // "this" is still the test context object
      console.log(drops)
      dropsApi = drops
    })
  })
  it('Check drops components in desktop min width resolution', () => {
    cy.viewport(DEVICE_MIN_WIDTH.DESKTOP, 800)
    page.open('drops')
    page.checkPageElem(PAGE.DROPS_PAGE, DEVICE.DESKTOP, { data: dropsApi })
  })
})
