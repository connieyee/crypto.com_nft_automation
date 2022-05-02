import { isFunction } from '../../node_modules/cypress/types/lodash/index'
import { PAGE, DEVICE, DEVICE_MIN_WIDTH } from '../pages/constants'
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

  // it('Check homepage redirection', () => {
  //   cy.visit('/')
  //   cy.get(page.getElem(PAGE.HOME_PAGE, 'consentAcceptAll'), { timeout: 5000 }).click()
  //   page.checkPageRedirect(PAGE.HOME_PAGE)
  // })

  it('Check top collections sorting in homepage', () => {
    cy.visit('/')
    cy.get(page.getElem(PAGE.HOME_PAGE, 'consentAcceptAll'), { timeout: 5000 }).click()
    // Sales Volume
    cy.get(page.getElem(PAGE.HOME_PAGE, 'valueTopCollectionsSortBy', DEVICE.DESKTOP, null, 'Sales Volume')).should('be.visible')
    page.checkDescending(PAGE.HOME_PAGE, 'topCollectionVolume')
    cy.get(page.getElem(PAGE.HOME_PAGE, 'topCollectionsPeriod7days', DEVICE.DESKTOP)).click()
    page.checkDescending(PAGE.HOME_PAGE, 'topCollectionVolume')
    cy.get(page.getElem(PAGE.HOME_PAGE, 'topCollectionsPeriod30days', DEVICE.DESKTOP)).click()
    page.checkDescending(PAGE.HOME_PAGE, 'topCollectionVolume')
    // Sale Volume %
    cy.get(page.getElem(PAGE.HOME_PAGE, 'popupTopCollectionsSortByDropdown')).parent().parent().find('button').click()
    page.checkPopUpElem(PAGE.HOME_PAGE, 'popupTopCollectionsSortBy')
    cy.get(page.getElem(PAGE.HOME_PAGE, 'popupTopCollectionsSortBySalesVolumePer')).click()
    cy.get(page.getElem(PAGE.HOME_PAGE, 'valueTopCollectionsSortBy', DEVICE.DESKTOP, null, 'Sales Volume %')).should('be.visible')
  })

  // it('Check nft cards in homepage', () => {
  //   const numNftCards = page.getElem(PAGE.HOME_PAGE, 'numtopCollectiblesNftCardContainer')
  //   cy.visit('/')
  //   cy.get(page.getElem(PAGE.HOME_PAGE, 'consentAcceptAll'), { timeout: 5000 }).click()
  //   cy.get(page.getElem(PAGE.HOME_PAGE, 'topCollectiblesNftCardContainer')).should('have.length', numNftCards)
  //   cy.get(page.getElem(PAGE.HOME_PAGE, 'topCollectiblesNftCardImage')).should('have.length', numNftCards)
  //   cy.get(page.getElem(PAGE.HOME_PAGE, 'topCollectiblesNftCardTotalSalesTag')).should('have.length', numNftCards)
  //   cy.get(page.getElem(PAGE.HOME_PAGE, 'topCollectiblesNftCardEditionsMintedLabel')).should('have.length', numNftCards)
  //   cy.get(page.getElem(PAGE.HOME_PAGE, 'topCollectiblesNftCardCroLogo')).should('have.length', numNftCards)
  //   cy.get(page.getElem(PAGE.HOME_PAGE, 'topCollectiblesNftCardAssetName')).should('have.length', numNftCards)
  //   cy.get(page.getElem(PAGE.HOME_PAGE, 'topCollectiblesNftCardCreatorAvatar')).should('have.length', numNftCards)
  //   cy.get(page.getElem(PAGE.HOME_PAGE, 'topCollectiblesNftCardCreatorUsername')).should('have.length', numNftCards)
  //   cy.get(page.getElem(PAGE.HOME_PAGE, 'topCollectiblesLikeButton')).should('have.length', numNftCards)
  //   cy.get(page.getElem(PAGE.HOME_PAGE, 'topCollectiblesNftCardLikesCount')).should('have.length', numNftCards)
  // })
})
