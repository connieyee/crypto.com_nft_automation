import { PAGE, DEVICE } from '../constants'
import FooterLocators from './footer.locators'
import HeaderLocators from './header.locators'

class NftDetailsEditionLocators {
  readonly editionModel: string
  readonly editionCloseButton: string
  readonly allEditionsTab: string
  readonly row1SelectButton: string
  readonly backButton: string
  readonly editionFilter: string
  readonly editionGoButton: string
  readonly editionLabel: string
  readonly editionTitle: string
  readonly endsInLabel: string
  readonly forSaleLabel: string
  readonly forSaleSwitch: string
  readonly ownerLabel: string
  readonly priceLabel: string
  readonly row1CreaterAvatar: string
  readonly row1Index: string
  readonly row1CreaterUsername: string
  readonly row1EndsIn: string
  readonly searchInput: string
  readonly goToPageInput: string
  readonly goToPageLabel: string
  readonly paginationContainer: string
  readonly paginationLeftArrow: string

  constructor () {
    this.editionModel = 'div[data-test-id="select-edition-popup"]'
    this.editionCloseButton = `${this.editionModel} div[data-test-id="close-button"]`

    // this.backButton = `${this.editionModel} a[data-test-id="back-button"]`
    this.editionTitle = `${this.editionModel} div[data-test-id="select-edition-title"]`
    this.allEditionsTab = `${this.editionModel} div[data-test-id="select-edition-all-editions-tab"]`
    this.forSaleLabel = `${this.editionModel} div[data-test-id="select-edition-for-sale-label"]`
    this.forSaleSwitch = `${this.editionModel} button[data-test-id="select-edition-for-sale-switch"]`
    this.editionFilter = `${this.editionModel} div[data-test-id="select-edition-filter"]`
    this.searchInput = `${this.editionModel} input[data-test-id="select-edition-search-input"]`
    this.editionLabel = `${this.editionModel} div[data-test-id="select-edition-edition-label"]`
    this.ownerLabel = `${this.editionModel} div[data-test-id="select-edition-owner-label"]`
    this.priceLabel = `${this.editionModel} div[data-test-id="select-edition-price-label"]`
    this.endsInLabel = `${this.editionModel} div[data-test-id="select-edition-ends-in-label"]`
    this.row1Index = `${this.editionModel} div[data-test-id="select-edition-row-1-index"]`
    this.row1CreaterAvatar = `${this.editionModel} [data-test-id="select-edition-row-1-owner-creator-avatar"]`
    this.row1CreaterUsername = `${this.editionModel} span[data-test-id="select-edition-row-1-owner-creator-username"]`
    this.row1EndsIn = `${this.editionModel} span[data-test-id="select-edition-row-1-unavailable-ends-in"]`
    this.row1SelectButton = `${this.editionModel} div[data-test-id="select-edition-row-1-select-button"]`
    this.paginationContainer = `${this.editionModel} div[data-test-id="pagination-container"]`
    this.paginationLeftArrow = `${this.editionModel} svg[data-test-id="pagination-left-arrow"]`
    this.paginationLeftArrow = `${this.editionModel} svg[data-test-id="pagination-right-arrow"]`
    this.goToPageLabel = `${this.editionModel} div[data-test-id="go-to-page-label"]`
    this.goToPageInput = `${this.editionModel} input[data-test-id="go-to-page-input"]`

    this.editionGoButton = `${this.editionModel} button[data-test-id="go-button"]`
  }
}

function nftDetailEdition (page: PAGE, device: DEVICE): void {
  Object.assign(
    this,
    new HeaderLocators(page, device),
    new NftDetailsEditionLocators(),
    new FooterLocators(page, device)
  )
}

export default nftDetailEdition
