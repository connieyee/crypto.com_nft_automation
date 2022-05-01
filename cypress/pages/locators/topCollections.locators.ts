import { DEVICE, PAGE } from '../constants'

export default class TopCreatorLocators {
  readonly topCollections: string
  readonly topCollectionsDiv: string
  readonly valueTopCollectionsSortBy: (value: 'Sales Volume' | 'Sales Volume %' | 'Floor Price' | 'Floor Price %') => string
  readonly topCollectionsPeriodToday: string
  readonly topCollectionsPeriod7days: string
  readonly topCollectionsPeriod30days: string
  readonly numTopCollectionsDollarSign: number
  readonly topCollectionsDollarSign: string

  readonly topCollectionsAvatarLink: string
  readonly topCollectionsAvatarLinkUrl: string
  readonly topCollectionsNameLink: string
  readonly topCollectionsNameLinkUrl: string
  readonly isDraggable: string
  readonly popupSortByDropdown: string
  readonly popupPeriodDropdown: string

  constructor (page: PAGE, device: DEVICE) {
    let topContainer = ''
    switch (page) {
      case PAGE.HOME_PAGE:
        topContainer = 'div[class*="HomePage_container__"]'
        break
    }
    this.topCollections = `${topContainer} > div:nth-child(3)`

    if (device === DEVICE.MOBILE) {
      this.isDraggable = `${this.topCollections} div.is-draggable`
    }
    if (device === DEVICE.DESKTOP) {
      this.topCollectionsPeriod7days = `${this.topCollections} button > div:contains("Last 7 Days")`
      this.topCollectionsPeriod30days = `${this.topCollections} button > div:contains("Last 30 Days")`
    }
    // Top Collections

    this.topCollectionsDiv = `${topContainer} div[data-test-id="top-creators-div"]`
    this.popupSortByDropdown = `${this.topCollections} > div:nth-child(2) > div:nth-child(1) div[data-test-id="undefined-dropdown-menu"]`
    this.popupPeriodDropdown = `${this.topCollections} > div:nth-child(2) > div:nth-child(2) div[data-test-id="undefined-dropdown-menu"]`
    this.valueTopCollectionsSortBy = (value = 'Sales Volume') => `${this.topCollections} button > div:contains(${value})`
    // this.existTopCollectionsPeriod = `${this.topCollections} div[data-test-id="undefined-dropdown-menu"]:nth-child(2)`
    this.topCollectionsPeriodToday = `${this.topCollections} button > div:contains("Today")`
    this.numTopCollectionsDollarSign = 30
    this.topCollectionsDollarSign = `${this.topCollections} span[data-test-id="dollar-sign"]`
    this.topCollectionsAvatarLink = `${this.topCollectionsDiv} > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(1) > a`
    this.topCollectionsAvatarLinkUrl = 'https://crypto.com/nft/collection/'
    this.topCollectionsNameLink = `${this.topCollectionsDiv} > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(1) > div:nth-child(3) > a:nth-child(1)`
    this.topCollectionsNameLinkUrl = 'https://crypto.com/nft/collection/'
  }
}
