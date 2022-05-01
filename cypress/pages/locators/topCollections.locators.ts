import { DEVICE, PAGE } from '../constants'

export default class TopCreatorLocators {
  readonly topCollections: string
  readonly topCollectionsDiv: string

  readonly numTopCollectionsDropdown: number
  readonly existTopCollectionsDropdown: string
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
  constructor (page: PAGE, device: DEVICE) {
    let topContainer = ''
    switch (page) {
      case PAGE.HOMEPAGE:
        topContainer = 'div[class*="HomePage_container__"]'
        break
    }

    // Top Collections
    this.topCollections = `${topContainer} > div:nth-child(3)`
    this.topCollectionsDiv = `${topContainer} div[data-test-id="top-creators-div"]`
    this.numTopCollectionsDropdown = 2
    this.existTopCollectionsDropdown = `${this.topCollections} div[data-test-id="undefined-dropdown-menu"]`
    this.valueTopCollectionsSortBy = (value = 'Sales Volume') => `${this.topCollections} button > div:contains(${value})`
    // this.existTopCollectionsPeriod = `${this.topCollections} div[data-test-id="undefined-dropdown-menu"]:nth-child(2)`
    this.topCollectionsPeriodToday = `${this.topCollections} button > div:contains("Today")`
    this.topCollectionsPeriod7days = `${this.topCollections} button > div:contains("Last 7 Days")`
    this.topCollectionsPeriod30days = `${this.topCollections} button > div:contains("Last 30 Days")`
    this.numTopCollectionsDollarSign = 30
    this.topCollectionsDollarSign = `${this.topCollections} span[data-test-id="dollar-sign"]`
    this.topCollectionsAvatarLink = `${this.topCollectionsDiv} > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(1) > a`
    this.topCollectionsAvatarLinkUrl = 'https://crypto.com/nft/collection/'
    this.topCollectionsNameLink = `${this.topCollectionsDiv} > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(1) > div:nth-child(3) > a:nth-child(1)`
    this.topCollectionsNameLinkUrl = 'https://crypto.com/nft/collection/'
  }
}
