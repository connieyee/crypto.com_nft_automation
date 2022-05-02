import { PAGE, DEVICE } from '../constants'
import FooterLocators from './footer.locators'
import HeaderLocators from './header.locators'
import NftDetailsBaseLocators from './nft_details_base.locators'

class NftDetailsBuyLocators {
  readonly modalBody: string
  readonly nftDetailOfferButton: string
  readonly nftDetailBuyButton: string
  readonly actionBarRoyaltiesMessage: string

  constructor () {
    this.modalBody = 'div[data-test-id="undefined-popup"]'
    this.nftDetailOfferButton = `${this.modalBody} button[data-test-id="nftDetail-buy-button"]`
    this.nftDetailBuyButton = `${this.modalBody} button[data-test-id="nftDetail-offer-button"]`
    this.actionBarRoyaltiesMessage = `${this.modalBody} div[data-test-id="action-button-bar-royalties-message"]`
  }
}

function nftDetailBuy (page: PAGE, device: DEVICE): void {
  Object.assign(
    this,
    new HeaderLocators(page, device),
    new NftDetailsBuyLocators(),
    new NftDetailsBaseLocators(),
    new FooterLocators(page, device)
  )
}

export default nftDetailBuy
