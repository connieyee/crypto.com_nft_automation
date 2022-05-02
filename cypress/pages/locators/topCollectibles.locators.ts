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
  readonly topCollectiblesNDollarSign: string
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
  readonly popupTopCollectiblesSortByDropdown: string
  readonly popupTopCollectiblesPeriodDropdown: string
  readonly marketplaceTitle: string
  readonly marketplaceCategoryArtButton: string
  readonly marketplaceCategoryCelebritiesButton: string
  readonly marketplaceCategoryGamingButton: string
  readonly marketplaceCategorySportButton: string
  readonly marketplaceCategoryMusicButton: string
  readonly marketplaceCategoryCryptoButton: string
  readonly marketplaceCategoryCrossChainButton: string
  readonly marketplaceIsCuratedButton: string
  readonly marketplaceFilterButton: string
  readonly marketplaceSortButton: string
  readonly numbatch: number
  readonly marketplaceNftCardContainer: string
  readonly existInfiniteLoader: string
  readonly popupFilterMinPriceInput: string
  readonly popupFilterApply: string
  readonly popupFilterAuction: string
  readonly popupFilterBuyNow: string
  readonly popupFilterClearAll: string
  readonly popupFilterMaxPriceInput: string
  readonly skiptopCollectiblesNftCardAuctionPrice: string

  constructor (page: PAGE, device: DEVICE) {
    let topContainer = ''
    switch (page) {
      case PAGE.HOME_PAGE:
        topContainer = 'div[class*="HomePage_container__"]'
        this.topCollectibles = `${topContainer} div[data-test-id="top-collectibles-div"]`
        break
      case PAGE.MARKETPLACE_PAGE:
        this.topCollectibles = 'div[class*="DiscoverPage_container__"]'
    }

    if (device === DEVICE.DESKTOP && page === PAGE.HOME_PAGE) {
      this.topCollectiblesPeriodToday = `${this.topCollectibles} button > div:contains("Today")`
      this.topCollectiblesPeriod30days = `${this.topCollectibles} button > div:contains("Last 30 Days")`
      this.topCollectiblesPeriodAll = `${this.topCollectibles} button > div:contains("All Time")`
    }

    if (page === PAGE.MARKETPLACE_PAGE) {
      this.numbatch = 6
      this.marketplaceNftCardContainer = 'div[data-test-id="nftCard-container"]'
      this.marketplaceTitle = `${this.topCollectibles} h2[data-test-id="marketplace-title"]`
      this.existInfiniteLoader = 'div[class*="InfiniteScrollAsset_loader__"]'
      if (device === DEVICE.DESKTOP) {
        this.marketplaceCategoryArtButton = `${this.topCollectibles} button[data-test-id="marketplace-category-art-button"]`
        this.marketplaceCategoryCelebritiesButton = `${this.topCollectibles} button[data-test-id="marketplace-category-celebrities-button"]`
        this.marketplaceCategoryGamingButton = `${this.topCollectibles} button[data-test-id="marketplace-category-gaming-button"]`
        this.marketplaceCategorySportButton = `${this.topCollectibles} button[data-test-id="marketplace-category-sport-button"]`
        this.marketplaceCategoryMusicButton = `${this.topCollectibles} button[data-test-id="marketplace-category-music-button"]`
        this.marketplaceCategoryCryptoButton = `${this.topCollectibles} button[data-test-id="marketplace-category-crypto-button"]`
        this.marketplaceCategoryCrossChainButton = `${this.topCollectibles} button[data-test-id="marketplace-category-cross chain-button"]`
      }
      this.marketplaceIsCuratedButton = `${this.topCollectibles} button[data-test-id="marketplace-isCurated-button"]`
      this.marketplaceFilterButton = `${this.topCollectibles} button[data-test-id="marketplace-filter-button"]`
      this.marketplaceSortButton = `${this.topCollectibles} button[data-test-id="marketplace-sort-button"]`
      // filter
      this.popupFilterMinPriceInput = `${this.topCollectibles} input[data-test-id="marketplace-filter-minPrice-input"]`
      this.popupFilterMaxPriceInput = `${this.topCollectibles} input[data-test-id="marketplace-filter-maxPrice-input"]`
      this.popupFilterBuyNow = `${this.topCollectibles} button[data-test-id="marketplace-filter-buyNow-button"]`
      this.popupFilterAuction = `${this.topCollectibles} button[data-test-id="marketplace-filter-auction-button"]`
      this.popupFilterApply = `${this.topCollectibles} button[data-test-id="marketplace-filter-apply-button"]`
      this.popupFilterClearAll = `${this.topCollectibles} button[data-test-id="marketplace-filter-clearAll-button"]`
    }

    // Top Collectibles
    this.popupTopCollectiblesSortByDropdown = `${this.topCollectibles} > div:nth-child(2) > div:nth-child(1) div[data-test-id="undefined-dropdown-menu"]`
    this.popupTopCollectiblesPeriodDropdown = `${this.topCollectibles} > div:nth-child(2) > div:nth-child(2) div[data-test-id="undefined-dropdown-menu"]`

    if (page === PAGE.HOME_PAGE) {
      this.numtopCollectiblesNftCardContainer = 12
      this.valueTopCollectiblesSortBy = (value = 'Sales Volume') => `${this.topCollectibles} button > div:contains(${value})`
      this.topCollectiblesPeriod7days = `${this.topCollectibles} button > div:contains("Last 7 Days")`
      this.topCollectiblesNftCardTotalSalesTag = `${this.topCollectibles} button[data-test-id="nftCard-total-sales-tag"]`
      this.topCollectiblesShowMore = `${this.topCollectibles} button > div:contains('show more')`
      this.topCollectiblesNftCardLink = `${this.topCollectibles} > div:nth-child(3) > div[class*="NftCard_grid__"] > a:nth-child(1)`
      this.topCollectiblesNftCardLinkUrl = 'https://crypto.com/nft/?asset='
      this.topCollectiblesProfileLink = `${this.topCollectibles} div[class*="NftCard_grid__"] > a:nth-child(1) a[class*="NameOnlyUserProfile_link__"]`
      this.topCollectiblesProfileLinkUrl = 'https://crypto.com/nft/profile/'
    }

    if (page === PAGE.MARKETPLACE_PAGE) {
      this.topCollectiblesNftCardLink = `${this.topCollectibles} div[class*="NftBrowse_container__"] > div > div > div > div:nth-child(1) > a`
      this.topCollectiblesNftCardLinkUrl = 'https://crypto.com/nft/?asset='
      this.topCollectiblesProfileLink = `${this.topCollectibles} div[class*="NftBrowse_container__"] > div > div > div > div:nth-child(1) > a a[class*="NameOnlyUserProfile_link__"]`
      this.topCollectiblesProfileLinkUrl = 'https://crypto.com/nft/profile/'
    }

    this.topCollectiblesNftCardContainer = `${this.topCollectibles} div[data-test-id="nftCard-container"]`
    this.topCollectiblesNftCardImage = `${this.topCollectibles} div[data-test-id="nftCard-image"]`
    this.topCollectiblesNftCardEditionsMintedLabel = `${this.topCollectibles} div[data-test-id="nftCard-editions-minted-label"]`
    this.topCollectiblesNftCardCroLogo = `${this.topCollectibles} svg[data-test-id="nftCard-cro-logo"]`
    this.topCollectiblesNftCardAssetName = `${this.topCollectibles} div[data-test-id="nftCard-asset-name"]`
    this.topCollectiblesNftCardFloorPriceLabel = `${this.topCollectibles} div[data-test-id="nftCard-floor-price-label"]`
    this.topCollectiblesNftCardBuyNowLabel = `${this.topCollectibles} div[data-test-id="nftCard-buy-now-label"]`
    this.topCollectiblesNDollarSign = `${this.topCollectibles} span[data-test-id="dollar-sign"]`
    this.topCollectiblesNftCardBuyNowPrice = `${this.topCollectibles} div[data-test-id="nftCard-buy-now-price"]`
    this.topCollectiblesNftCardCreatorAvatar = `${this.topCollectibles} div[data-test-id="nftCard-creator-avatar"]`
    this.topCollectiblesNftCardCreatorUsername = `${this.topCollectibles} span[data-test-id="nftCard-creator-username"]`
    this.topCollectiblesLikeButton = `${this.topCollectibles} svg[data-test-id="like-button"]`
    this.topCollectiblesNftCardLikesCount = `${this.topCollectibles} div[data-test-id="nftCard-likes-count"]`
    this.skiptopCollectiblesNftCardAuctionPrice = `${this.topCollectibles} div[data-test-id="nftCard-auction-price"]`
  }
}
