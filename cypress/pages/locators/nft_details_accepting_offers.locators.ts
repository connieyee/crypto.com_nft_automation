import { PAGE, DEVICE } from '../constants'
import FooterLocators from './footer.locators'
import HeaderLocators from './header.locators'
import NftDetailsBaseLocators from './nft_details_base.locators'

class NftDetailsAcceptingOfferLocators {
  readonly initiUrl: string
  readonly listingAcceptingOffersLabel: string
  readonly modalBody: string
  readonly nftDetailOfferButton: string

  constructor () {
    this.modalBody = 'div[data-test-id="undefined-popup"]'
    this.nftDetailOfferButton = `${this.modalBody} button[data-test-id="nftDetail-offer-button"]`
    this.listingAcceptingOffersLabel = `${this.modalBody} div[data-test-id="listing-accepting-offers-label"]`
  }
}

function nftDetailAcceptingOffer (page: PAGE, device: DEVICE): void {
  Object.assign(
    this,
    new HeaderLocators(page, device),
    new NftDetailsAcceptingOfferLocators(),
    new NftDetailsBaseLocators(),
    new FooterLocators(page, device)
  )
}

export default nftDetailAcceptingOffer
