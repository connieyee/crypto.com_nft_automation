import { DEVICE, PAGE } from '../constants'

export default class CarouselLocators {
  readonly existCarouselDrops: string
  readonly carouselViewDrop: string
  readonly carouselPaginationLeft: string
  readonly carouselPaginationRight: string
  readonly carouselViewDropButtonLink: string
  readonly carouselViewDropButtonLinkUrl: string
  readonly viewDropsButton: string
  readonly viewMarketplaceButton: string

  constructor (page: PAGE, device: DEVICE) {
    // Carousel
    if (device === DEVICE.MOBILE) {
      this.viewDropsButton = 'button:contains("View Drops")'
      this.viewMarketplaceButton = 'button:contains("View Marketplace")'
    }
    if (device === DEVICE.DESKTOP || device === DEVICE.TABLET) {
      this.carouselViewDropButtonLink = 'button[data-test-id="carousel-view-drop"]'
      this.carouselViewDropButtonLinkUrl = 'https://crypto.com/nft/drops-event/'
    }
    this.existCarouselDrops = 'a[data-test-id="carousel-drops"]'
    this.carouselPaginationLeft = 'div[data-test-id="pagination-left"]'
    this.carouselPaginationRight = 'div[data-test-id="pagination-right"]'
  }
}
