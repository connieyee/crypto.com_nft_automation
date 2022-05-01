import { PAGE, DEVICE } from '../constants'
import FooterLocators from './footer.locators'
import HeaderLocators from './header.locators'
import NftDetailsBaseLocators from './nft_details_base.locators'

class NftDetailsBidLocators {
  readonly modalBody: string
  readonly bidCountdown: string
  readonly bidAmountLabel: string
  readonly bidCountdownLabel: string
  readonly dollarSign: string
  readonly nftDetailBidButton: string
  readonly nftDetailPrice: string
  readonly listingBidsTab: string

  constructor () {
    this.modalBody = 'div[data-test-id="undefined-popup"]'
    this.nftDetailBidButton = `${this.modalBody} button[data-test-id="nftDetail-bid-button"]`
    this.bidAmountLabel = `${this.modalBody} div[data-test-id="bid-amount-label"]`
    this.dollarSign = `${this.modalBody} span[data-test-id="dollar-sign"]`
    this.nftDetailPrice = `${this.modalBody} div[data-test-id="nftDetail-price"]`
    this.bidCountdownLabel = `${this.modalBody} div[data-test-id="bid-countdown-label"]`
    this.bidCountdown = `${this.modalBody} div[data-test-id="bid-countdown"]`
    this.listingBidsTab = `${this.modalBody} div[data-test-id="listing-bids-tab"]`
  }
}

function nftDetailBid (page: PAGE, device: DEVICE): void {
  Object.assign(
    this,
    new HeaderLocators(page, device),
    new NftDetailsBaseLocators(),
    new NftDetailsBidLocators(),
    new FooterLocators(page, device)
  )
}

export default nftDetailBid
