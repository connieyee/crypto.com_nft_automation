import { PAGE, DEVICE_MIN_WIDTH, DEVICE, DEVICE_MAX_WIDTH } from '../pages/constants'
import Page from '../pages/page'
const page = new Page()

describe('HomePage testing', () => {
  // it('Check homepage components in desktop min width resolution', () => {
  //   cy.viewport(DEVICE_MIN_WIDTH.DESKTOP, 800)
  //   cy.visit('/')
  //   page.checkPageElem(PAGE.HOME_PAGE, DEVICE.DESKTOP)
  // })

  // it('Check homepage components in desktop max width resolution', () => {
  //   cy.viewport(DEVICE_MAX_WIDTH.DESKTOP, 800)
  //   cy.visit('/')
  //   page.checkPageElem(PAGE.HOME_PAGE, DEVICE.DESKTOP)`
  // })

  // it('Check homepage components in tablet min width resolution', () => {
  //   cy.viewport(DEVICE_MIN_WIDTH.TABLET, 1024)
  //   cy.visit('/')
  //   page.checkPageElem(PAGE.HOME_PAGE, DEVICE.TABLET)
  // })

  // it('Check homepage components in tablet max width resolution', () => {
  //   cy.viewport(DEVICE_MAX_WIDTH.TABLET, 1024)
  //   cy.visit('/')
  //   page.checkPageElem(PAGE.HOME_PAGE, DEVICE.TABLET)
  // })

  // it('Check homepage components in mobile min width resolution', () => {
  //   cy.viewport(DEVICE_MIN_WIDTH.MOBILE, 844)
  //   cy.visit('/')
  //   page.checkPageElem(PAGE.HOME_PAGE, DEVICE.MOBILE)
  // })

  // it('Check homepage components in mobile max width resolution', () => {
  //   cy.viewport(DEVICE_MAX_WIDTH.MOBILE, 844)
  //   cy.visit('/')
  //   page.checkPageElem(PAGE.HOME_PAGE, DEVICE.MOBILE)
  // })

  it('Check homepage redirection', () => {
    cy.visit('/')
    cy.get(page.getElem(PAGE.HOME_PAGE, 'consentAcceptAll'), { timeout: 5000 }).click()
    page.checkPageRedirect(PAGE.HOME_PAGE)
  })
})
