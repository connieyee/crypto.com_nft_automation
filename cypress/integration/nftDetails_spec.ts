import { PAGE, DEVICE_MIN_WIDTH, DEVICE } from '../pages/constants'
import Page from '../pages/page'
const page = new Page()

describe('nftDetailsPage testing', () => {
  // it('Check bid nft_details_page components', () => {
  //   cy.viewport(DEVICE_MIN_WIDTH.DESKTOP, 800)
  //   cy.visit('https://crypto.com/nft/?asset=614a9d79673570cf592ebfef06dca926&edition=76843b141e8086e97a4e6c829bb0ae02&detail-page=MARKETPLACE')
  //   cy.get(page.getElem(PAGE.HOME_PAGE, 'consentAcceptAll'), { timeout: 5000 }).click()
  //   page.checkPageElem(PAGE.NFT_DETAILS_BID_PAGE, DEVICE.DESKTOP)
  // })

  it('Check buy nft_details_page components', () => {
    cy.viewport(DEVICE_MIN_WIDTH.DESKTOP, 800)
    cy.visit('https://crypto.com/nft/?asset=83fc6e55b710a60d12236499dd634258&edition=ff054475ccf3cd1f70cca21b95634533&detail-page=MARKETPLACE')
    cy.get(page.getElem(PAGE.HOME_PAGE, 'consentAcceptAll'), { timeout: 5000 }).click()
    page.checkPageElem(PAGE.NFT_DETAILS_BUY_PAGE, DEVICE.DESKTOP)
  })

  // it('Check accepting offer nft_details_page components', () => {
  //   cy.viewport(DEVICE_MIN_WIDTH.DESKTOP, 800)
  //   cy.visit('https://crypto.com/nft/?asset=070b4a0852e77b3b42a07acac144f17b&edition=f5b976ac82336ba20f27e25be61cee5d&detail-page=MARKETPLACE')
  //   cy.get(page.getElem(PAGE.HOME_PAGE, 'consentAcceptAll'), { timeout: 5000 }).click()
  //   page.checkPageElem(PAGE.NFT_DETAILS_ACCEPTING_OFFER_PAGE, DEVICE.DESKTOP)
  // })

  // it('Check asset image/ video in nft_details_page page', () => {
  //   cy.viewport(DEVICE_MIN_WIDTH.DESKTOP, 800)
  //   cy.visit('https://crypto.com/nft/?asset=070b4a0852e77b3b42a07acac144f17b&edition=f5b976ac82336ba20f27e25be61cee5d&detail-page=MARKETPLACE')
  //   cy.get(page.getElem(PAGE.HOME_PAGE, 'consentAcceptAll'), { timeout: 5000 }).click()
  //   cy.get(page.getElem(PAGE.NFT_DETAILS_BASE_PAGE, 'existAssetImage')).should('be.visible')
  //   cy.visit('https://crypto.com/nft/?asset=83fc6e55b710a60d12236499dd634258&edition=ff054475ccf3cd1f70cca21b95634533&detail-page=MARKETPLACE')
  //   cy.get(page.getElem(PAGE.NFT_DETAILS_BASE_PAGE, 'existAssetVideo')).should('be.visible')
  // })

  // it('Check properties in nft_details_page page', () => {
  //   cy.viewport(DEVICE_MIN_WIDTH.DESKTOP, 800)
  //   cy.visit('https://crypto.com/nft/?asset=070b4a0852e77b3b42a07acac144f17b&edition=f5b976ac82336ba20f27e25be61cee5d&detail-page=MARKETPLACE')
  //   cy.get(page.getElem(PAGE.HOME_PAGE, 'consentAcceptAll'), { timeout: 5000 }).click()
  //   cy.get(page.getElem(PAGE.NFT_DETAILS_BASE_PAGE, 'popupPropertiesButton')).click()
  //   page.checkPopUpElem(PAGE.NFT_DETAILS_BASE_PAGE, 'popupProperties')
  // })

  // it('Check share dropdown in nft_details_page page', () => {
  //   cy.viewport(DEVICE_MIN_WIDTH.DESKTOP, 800)
  //   cy.visit('https://crypto.com/nft/?asset=070b4a0852e77b3b42a07acac144f17b&edition=f5b976ac82336ba20f27e25be61cee5d&detail-page=MARKETPLACE')
  //   cy.get(page.getElem(PAGE.HOME_PAGE, 'consentAcceptAll'), { timeout: 5000 }).click()
  //   cy.get(page.getElem(PAGE.NFT_DETAILS_BASE_PAGE, 'listingShareButton')).click()
  //   page.checkPopUpElem(PAGE.NFT_DETAILS_BASE_PAGE, 'popupShare')
  // })

  // it('Check more dropdown in nft_details_page page', () => {
  //   cy.viewport(DEVICE_MIN_WIDTH.DESKTOP, 800)
  //   cy.visit('https://crypto.com/nft/?asset=070b4a0852e77b3b42a07acac144f17b&edition=f5b976ac82336ba20f27e25be61cee5d&detail-page=MARKETPLACE')
  //   cy.get(page.getElem(PAGE.HOME_PAGE, 'consentAcceptAll'), { timeout: 5000 }).click()
  //   cy.get(page.getElem(PAGE.NFT_DETAILS_BASE_PAGE, 'listingMoreButton')).click()
  //   page.checkPopUpElem(PAGE.NFT_DETAILS_BASE_PAGE, 'popupMore')
  // })

  // it('Check tabs in nft_details_page page', () => {
  //   cy.viewport(DEVICE_MIN_WIDTH.DESKTOP, 800)
  //   cy.visit('https://crypto.com/nft/marketplace?asset=10f9d19501e06ec2c057bb24322a3c4f&edition=fcdb46d4acc6cdf468f7944595fe3b40&detail-page=MARKETPLACE')
  //   cy.get(page.getElem(PAGE.HOME_PAGE, 'consentAcceptAll'), { timeout: 5000 }).click()
  //   cy.get(page.getElem(PAGE.NFT_DETAILS_BASE_PAGE, 'listingHistoryTab')).click()
  //   page.checkPopUpElem(PAGE.NFT_DETAILS_BASE_PAGE, 'popupHistory')
  //   cy.get(page.getElem(PAGE.NFT_DETAILS_BASE_PAGE, 'listingOffersTab')).click()
  //   page.checkPopUpElem(PAGE.NFT_DETAILS_BASE_PAGE, 'popupOffers')
  //   cy.get(page.getElem(PAGE.NFT_DETAILS_BID_PAGE, 'listingBidsTab')).click()
  //   page.checkPopUpElem(PAGE.NFT_DETAILS_BID_PAGE, 'popupBids')
  // })

  // it('Check select edition in nft_details_page page', () => {
  //   cy.viewport(DEVICE_MIN_WIDTH.DESKTOP, 800)
  //   cy.visit('https://crypto.com/nft/marketplace?asset=10f9d19501e06ec2c057bb24322a3c4f&edition=fcdb46d4acc6cdf468f7944595fe3b40&detail-page=MARKETPLACE')
  //   cy.get(page.getElem(PAGE.HOME_PAGE, 'consentAcceptAll'), { timeout: 5000 }).click()
  //   cy.get(page.getElem(PAGE.NFT_DETAILS_BASE_PAGE, 'listingSelectEditionButton')).click()
  //   page.checkPageElem(PAGE.NFT_DETAILS_EDITION_PAGE, DEVICE.DESKTOP)
  // })

  it('Check view chain details in nft_details_page page', () => {
    cy.viewport(DEVICE_MIN_WIDTH.DESKTOP, 800)
    cy.visit('https://crypto.com/nft/marketplace?asset=10f9d19501e06ec2c057bb24322a3c4f&edition=fcdb46d4acc6cdf468f7944595fe3b40&detail-page=MARKETPLACE')
    cy.get(page.getElem(PAGE.HOME_PAGE, 'consentAcceptAll'), { timeout: 5000 }).click()
    cy.get(page.getElem(PAGE.NFT_DETAILS_BASE_PAGE, 'listingCryptoChainButton')).invoke('removeAttr', 'target').click({ force: true })
  })
})
