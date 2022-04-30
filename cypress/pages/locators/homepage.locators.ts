export default class HomeLocators {
  readonly appContainer: string
  readonly homePageContainer: string
  readonly topCollections: string
  readonly footerContainer: string
  readonly topCreaters: string
  readonly topCollectibles: string
  readonly navMenu: string
  readonly hrefNft: string
  readonly navSearchBoxInput: string
  readonly userDropdownMenu: string
  readonly dropdownUserImage: string
  readonly dropdownUserName: string
  readonly dropdownMyProfileButton: string
  readonly navMarketplace: string
  readonly navDrops: string
  readonly navCreate: string
  readonly navBrands: string
  readonly navLogin: string
  readonly navSignup: string
  readonly carouselDrops: string
  readonly carouselViewDrop: string
  readonly paginationLeft: string
  readonly paginationRight: string
  readonly undefinedInput: string
  readonly emailSubscriptionBlock: string
  readonly homepageSubscribeSubmitButton: string
  readonly undefinedCheckbox: string
  readonly topCollectionsDiv: string
  readonly topCollectionsSortBy: string
  readonly topCollectionsPeriod: string
  readonly topCollectionsDollarSignNum: number
  readonly topCollectionsDollarSign: string
  readonly topCreatorsDiv: string
  readonly topCreatorsSortBy: string
  readonly topCreatorsPeriod: string
  readonly topCreatorLeftArrow: string
  readonly topCreatorRightArrow: string
  readonly topCollectiblesDiv: string
  readonly topCollectiblesSortBy: string
  readonly topCollectiblesPeriod: string
  readonly topCollectiblesNftCardContainerNum: number
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
  readonly footerTelegram: string
  readonly footerFaq: string
  readonly footerTerms: string
  readonly footerPrivacy: string

  constructor () {
    this.appContainer = 'div[class*="App_container__"]'
    this.homePageContainer = 'div[class*="HomePage_container__"]'
    this.footerContainer = 'div[class*="Footer_container__"]'

    this.topCollections = `${this.appContainer} div:nth-child(3)`
    this.topCreaters = `${this.appContainer} div:nth-child(4)`
    this.topCollectibles = `${this.appContainer} div[data-test-id="top-collectibles-div"]`

    // header
    this.navMenu = 'svg[data-test-id="nav-menu"]'
    this.hrefNft = 'a[href="/nft/"]"]'
    this.navSearchBoxInput = 'input[data-test-id="nav-search-box-input"]'
    this.userDropdownMenu = 'div[data-test-id="user-dropdown-menu"]'
    this.dropdownUserImage = 'div[data-test-id="dropdown-user-image"]'
    this.dropdownUserName = 'div[data-test-id="dropdown-user-name"]'
    this.dropdownMyProfileButton = 'a[data-test-id="dropdown-my-profile-button"]'

    // todo
    this.navMarketplace = 'a[data-test-id="nav-marketplace"]'
    this.navDrops = 'a[data-test-id="nav-drops"]'
    this.navCreate = 'a[data-test-id="nav-create"]'
    this.navBrands = 'div[data-test-id="nav-brands"]'
    this.navLogin = 'a[data-test-id="nav-login"]'
    this.navSignup = 'a[data-test-id="nav-signup"]"]'

    this.carouselDrops = 'a[data-test-id="carousel-drops"]'
    this.carouselViewDrop = 'button[data-test-id="carousel-view-drop"]'

    this.paginationLeft = 'div[data-test-id="pagination-left"]'
    this.paginationRight = 'div[data-test-id="pagination-right"]'
    this.undefinedInput = 'input[data-test-id="undefined-input"]'
    this.emailSubscriptionBlock = 'div[id="email-subscription-block"]'
    this.homepageSubscribeSubmitButton = 'button[data-test-id="homepage-subscribe-submit-button"]'
    this.undefinedCheckbox = 'svg[data-test-id="undefined-checkbox"]'

    this.topCollectionsDiv = `${this.topCollections} div[data-test-id="top-creators-div"]`
    this.topCollectionsSortBy = `${this.topCollections} div[data-test-id="undefined-dropdown-menu"]:nth-child(1)`
    this.topCollectionsPeriod = `${this.topCollections} div[data-test-id="undefined-dropdown-menu"]:nth-child(2)`
    this.topCollectionsDollarSignNum = 30
    this.topCollectionsDollarSign = `${this.topCollections} span[data-test-id="dollar-sign"]`

    // Top Creator
    this.topCreatorsDiv = `${this.topCreaters} div[data-test-id="top-creators-div"]`
    this.topCreatorsSortBy = `${this.topCreaters} div[data-test-id="undefined-dropdown-menu"]:nth-child(1)`
    this.topCreatorsPeriod = `${this.topCreaters} div[data-test-id="undefined-dropdown-menu"]:nth-child(2)`
    this.topCreatorLeftArrow = 'svg[data-test-id="topCreator-left-arrow"]'
    this.topCreatorRightArrow = 'svg[data-test-id="topCreator-right-arrow"]'

    // Top Collectibles
    this.topCollectiblesDiv = this.topCollectibles
    this.topCollectiblesSortBy = `${this.topCollectibles} div[data-test-id="undefined-dropdown-menu"]:nth-child(1)`
    this.topCollectiblesPeriod = `${this.topCollectibles} div[data-test-id="undefined-dropdown-menu"]:nth-child(2)`
    this.topCollectiblesNftCardContainerNum = 12
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
    this.topCollectiblesNftCardCreatorUsername = `${this.topCollectibles} div[data-test-id="nftCard-creator-username"]`
    this.topCollectiblesLikeButton = `${this.topCollectibles} div[data-test-id="like-button"]`
    this.topCollectiblesNftCardLikesCount = `${this.topCollectibles} div[data-test-id="nftCard-likes-count"]`

    // footer
    this.footerTelegram = `${this.footerContainer} a[data-test-id="footer-telegram"]`
    this.footerFaq = `${this.footerContainer} a[data-test-id="footer-faq"]`
    this.footerTerms = `${this.footerContainer} a[data-test-id="footer-terms"]`
    this.footerPrivacy = `${this.footerContainer} a[data-test-id="footer-privacy"]`
  }
}
