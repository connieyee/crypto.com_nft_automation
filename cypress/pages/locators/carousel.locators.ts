import { DEVICE, PAGE } from '../constants'

export default class CarouselLocators {
  readonly existCarouselDrops: string
  readonly carouselViewDrop: string
  readonly carouselPaginationLeft: string
  readonly carouselPaginationRight: string

  readonly carouselViewDropButton: string
  readonly carouselViewDropButtonUrl: string

  constructor (page: PAGE, device: DEVICE) {
    // Carousel
    this.existCarouselDrops = 'a[data-test-id="carousel-drops"]'
    this.carouselViewDropButton = 'button[data-test-id="carousel-view-drop"]'
    this.carouselViewDropButtonUrl = 'https://crypto.com/nft/drops-event/'
    // 2
    this.carouselPaginationLeft = 'div[data-test-id="pagination-left"]'
    this.carouselPaginationRight = 'div[data-test-id="pagination-right"]'
  }
}
