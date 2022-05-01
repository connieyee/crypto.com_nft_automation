import { DEVICE, PAGE } from '../constants'

export default class TopCollectiblesLocators {
  readonly topCollectibles: string
  readonly numTopCollectiblesDropdown: number
  readonly valueTopCollectiblesSortBy: (value: 'Sales Volume' | 'Most Likes' | 'Most Views') => string
  readonly topCollectiblesPeriodToday: string
  readonly topCollectiblesPeriod7days: string
  readonly topCollectiblesPeriod30days: string
  readonly topCollectiblesPeriodAll: string
  readonly numtopCollectiblesNftCardContainer: number
  readonly topCollectiblesNftCardContainer: string
  readonly topCollectiblesNftCardImage: string
  readonly topCollectiblesNftCardTotalSalesTag: string
  readonly topCollectiblesNftCardEditionsMintedLabel: string
  readonly topCollectiblesNftCardCroLogo: string
  readonly topCollectiblesNftCardAssetName: string
  readonly topCollectiblesNftCardFloorPriceLabel: string
  readonly topCollectiblesNftCardBuyNowLabel: string
  readonly topCollectiblesNollarSign: string
  readonly topCollectiblesNftCardBuyNowPrice: string
  readonly topCollectiblesNftCardCreatorAvatar: string
  readonly topCollectiblesNftCardCreatorUsername: string
  readonly topCollectiblesLikeButton: string
  readonly topCollectiblesNftCardLikesCount: string
  readonly topCollectiblesNftCardLink: string
  readonly topCollectiblesNftCardLinkUrl: string
  readonly topCollectiblesProfileLink: string
  readonly topCollectiblesProfileLinkUrl: string
  readonly topCollectiblesShowMore: string
  readonly popupSortByDropdown: string
  readonly popupPeriodDropdown: string

  constructor (page: PAGE, device: DEVICE) {
    let topContainer = ''
    switch (page) {
      case PAGE.HOME_PAGE:
        topContainer = 'div[class*="HomePage_container__"]'
        break
    }
    this.topCollectibles = `${topContainer} div[data-test-id="top-collectibles-div"]`

    if (device === DEVICE.DESKTOP) {
      this.topCollectiblesPeriodToday = `${this.topCollectibles} button > div:contains("Today")`
      this.topCollectiblesPeriod30days = `${this.topCollectibles} button > div:contains("Last 30 Days")`
      this.topCollectiblesPeriodAll = `${this.topCollectibles} button > div:contains("All Time")`
    }

    // Top Collectibles
    this.popupSortByDropdown = `${this.topCollectibles} > div:nth-child(2) > div:nth-child(1) div[data-test-id="undefined-dropdown-menu"]`
    this.popupPeriodDropdown = `${this.topCollectibles} > div:nth-child(2) > div:nth-child(2) div[data-test-id="undefined-dropdown-menu"]`
    this.valueTopCollectiblesSortBy = (value = 'Sales Volume') => `${this.topCollectibles} button > div:contains(${value})`
    this.topCollectiblesPeriod7days = `${this.topCollectibles} button > div:contains("Last 7 Days")`
    this.numtopCollectiblesNftCardContainer = 12
    this.topCollectiblesNftCardContainer = `${this.topCollectibles} div[data-test-id="nftCard-container"]`
    this.topCollectiblesNftCardImage = `${this.topCollectibles} div[data-test-id="nftCard-image"]`
    this.topCollectiblesNftCardTotalSalesTag = `${this.topCollectibles} button[data-test-id="nftCard-total-sales-tag"]`
    this.topCollectiblesNftCardEditionsMintedLabel = `${this.topCollectibles} div[data-test-id="nftCard-editions-minted-label"]`
    this.topCollectiblesNftCardCroLogo = `${this.topCollectibles} svg[data-test-id="nftCard-cro-logo"]`
    this.topCollectiblesNftCardAssetName = `${this.topCollectibles} div[data-test-id="nftCard-asset-name"]`
    this.topCollectiblesNftCardFloorPriceLabel = `${this.topCollectibles} div[data-test-id="nftCard-floor-price-label"]`
    this.topCollectiblesNftCardBuyNowLabel = `${this.topCollectibles} div[data-test-id="nftCard-buy-now-label"]`
    this.topCollectiblesNollarSign = `${this.topCollectibles} span[data-test-id="dollar-sign"]`
    this.topCollectiblesNftCardBuyNowPrice = `${this.topCollectibles} div[data-test-id="nftCard-buy-now-price"]`
    this.topCollectiblesNftCardCreatorAvatar = `${this.topCollectibles} div[data-test-id="nftCard-creator-avatar"]`
    this.topCollectiblesNftCardCreatorUsername = `${this.topCollectibles} span[data-test-id="nftCard-creator-username"]`
    this.topCollectiblesLikeButton = `${this.topCollectibles} svg[data-test-id="like-button"]`
    this.topCollectiblesNftCardLikesCount = `${this.topCollectibles} div[data-test-id="nftCard-likes-count"]`
    this.topCollectiblesNftCardLink = `${this.topCollectibles} > div:nth-child(3) > div[class*="NftCard_grid__"] > a:nth-child(1)`
    this.topCollectiblesNftCardLinkUrl = 'https://crypto.com/nft/?asset='
    // this.topCollectiblesProfileLink = `${this.topCollectibles} a[class*="NameOnlyUserProfile_link__"]:nth-child(1)`
    this.topCollectiblesProfileLinkUrl = 'https://crypto.com/nft/profile/'
    this.topCollectiblesShowMore = `${this.topCollectibles} button > div:contains('show more')`
  }
}
