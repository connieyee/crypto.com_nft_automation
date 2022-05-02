import { PAGE, DEVICE_MIN_WIDTH, DEVICE, DEVICE_MAX_WIDTH, TIMEOUT } from '../pages/constants'
import Page from '../pages/page'
const page = new Page()

describe('Drops page testing', () => {
  let dropsApi = {}
  beforeEach(function () {
    // call mock data before running test cases
    cy.fixture('drops').then((drops) => {
      dropsApi = drops
    })
  })

  it('Check drops components in desktop min width resolution', () => {
    cy.viewport(DEVICE_MIN_WIDTH.DESKTOP, 800)
    page.open('drops')
    cy.get(page.getElem(PAGE.HOME_PAGE, 'consentAcceptAll'), { timeout: TIMEOUT }).click()
    page.checkPageElem(PAGE.DROPS_PAGE, DEVICE.DESKTOP, { data: dropsApi })
  })

  it('Check drops components in desktop max width resolution', () => {
    cy.viewport(DEVICE_MAX_WIDTH.DESKTOP, 800)
    page.open('drops')
    cy.get(page.getElem(PAGE.HOME_PAGE, 'consentAcceptAll'), { timeout: TIMEOUT }).click()
    page.checkPageElem(PAGE.DROPS_PAGE, DEVICE.DESKTOP, { data: dropsApi })
  })
})
