export default class HomeLocators {
  readonly url: string
  readonly appContainer: string
  readonly homePageContainer: string
  readonly topCollections: string
  readonly footerContainer: string
  readonly topCreaters: string
  readonly topCollectibles: string
  readonly navMenu: string
  readonly existNft: string
  readonly navSearchBoxInput: string
  readonly userDropdownMenu: string
  readonly dropdownUserImage: string
  readonly dropdownUserName: string
  readonly dropdownMyProfileButton: string
  readonly navMarketplace: string
  readonly urlMarketplace: string
  readonly navDrops: string
  readonly urlDrops: string
  readonly navCreate: string
  readonly navBrands: string
  readonly navLogin: string
  readonly urlLogin: string
  readonly navSignup: string
  readonly urlSignup: string
  readonly existCarouselDrops: string
  readonly carouselViewDrop: string
  readonly carouselPaginationLeft: string
  readonly carouselPaginationRight: string
  readonly subscriptionInput: string
  readonly subscriptionBlock: string
  readonly subscriptionSubmitButton: string
  readonly subscriptionCheckbox: string
  readonly topCollectionsDiv: string
  readonly numTopCollectionsDropdown: number
  readonly existTopCollectionsDropdown: string
  readonly valueTopCollectionsSortBy: (value: 'Sales Volume' | 'Sales Volume %' | 'Floor Price' | 'Floor Price %') => string
  readonly topCollectionsPeriodToday: string
  readonly topCollectionsPeriod7days: string
  readonly topCollectionsPeriod30days: string
  readonly topCollectionsPeriod: string
  readonly numTopCollectionsDollarSign: number
  readonly topCollectionsDollarSign: string
  readonly topCreatorsDiv: string
  readonly numTopCreatorsDropdown: number
  readonly topCreatorsDropdown: string
  readonly topCreatorLeftArrow: string
  readonly topCreatorRightArrow: string
  readonly topCollectiblesDiv: string
  readonly numTopCollectiblesDropdown: number
  readonly existTopCollectiblesDropdown: string
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
  readonly footerTelegram: string
  readonly footerFaq: string
  readonly footerTerms: string
  readonly footerPrivacy: string
  existNftLink: string
  existNftLinkUrl: string
  headerSearchBoxInput: string
  navMarketplaceLink: string
  navMarketplaceLinkUrl: string
  navDropsLink: string
  navDropsLinkUrl: string
  navCreateLink: string
  navCreateLinkUrl: string
  navLoginLink: string
  navLoginLinkUrl: string
  navSignupLink: string
  navSignupLinkUrl: string
  carouselViewDropButton: string
  carouselViewDropButtonUrl: string
  subscriptionLink: string
  subscriptionLinkUrl: string
  topCollectionsAvatarLink: string
  topCollectionsAvatarLinkUrl: string
  topCollectionsNameLink: string
  topCollectionsNameLinkUrl: string
  topCollectiblesNftCardLink: string
  topCollectiblesNftCardLinkUrl: string
  topCollectiblesProfileLink: string
  topCollectiblesProfileLinkUrl: string
  footerFaqLink: string
  footerTermsLink: string
  footerPrivacyLink: string
  topCreatorAvatarLink: string
  topCreatorAvatarLinkUrl: string
  topCollectiblesShowMore: string
  consentText: string
  consentCustSetting: string
  consentDisableAll: string
  consentAcceptAll: string
  footerFaqLinkUrl: string
  footerTermsLinkUrl: string
  footerPrivacyLinkUrl: string
  footerInstagramHref: string
  footerInstagramHrefUrl: string
  footerTwitterHref: string
  footerTwitterHrefUrl: string
  footerMediumHref: string
  footerMediumHrefUrl: string
  footerDiscordHref: string
  footerDiscordHrefUrl: string
  footerTelegramHref: string
  footerTelegramHrefUrl: string

  constructor () {
    this.url = 'https://crypto.com/nft/'
    this.appContainer = 'div[class*="App_container__"]'
    this.homePageContainer = 'div[class*="HomePage_container__"]'
    this.footerContainer = 'div[class*="Footer_container__"]'

    this.topCollections = `${this.homePageContainer} > div:nth-child(3)`
    this.topCreaters = `${this.homePageContainer} > div:nth-child(4)`
    this.topCollectibles = `${this.homePageContainer} div[data-test-id="top-collectibles-div"]`

    // consent
    this.consentText = 'p=We use cookies to personalise content and ads, to provide social media features and to analyse our traffic. We also share information about your use of our site with our social media, advertising and analytics partners.'
    this.consentCustSetting = 'button:contains("Customize Settings")'
    this.consentDisableAll = 'button:contains("Disable All")'
    this.consentAcceptAll = 'button:contains("Accept All")'

    // header
    // this.navMenu = 'svg[data-test-id="nav-menu"]'
    this.existNftLink = 'a[href="/nft/"]'
    this.existNftLinkUrl = 'https://crypto.com/nft/'
    this.headerSearchBoxInput = 'input[data-test-id="nav-search-box-input"]'

    // after login
    // this.userDropdownMenu = 'div[data-test-id="user-dropdown-menu"]'
    // this.dropdownUserImage = 'div[data-test-id="dropdown-user-image"]'
    // this.dropdownUserName = 'div[data-test-id="dropdown-user-name"]'
    // this.dropdownMyProfileButton = 'a[data-test-id="dropdown-my-profile-button"]'

    // todo
    this.navMarketplaceLink = 'a[data-test-id="nav-marketplace"]'
    this.navMarketplaceLinkUrl = 'https://crypto.com/nft/marketplace'
    this.navDropsLink = 'a[data-test-id="nav-drops"]'
    this.navDropsLinkUrl = 'https://crypto.com/nft/drops'
    this.navCreate = 'a[data-test-id="nav-create"]'
    this.navCreateLinkUrl = 'https://crypto.com/nft/login?redirectUrl=%2Fcreator'
    this.navBrands = 'div[data-test-id="nav-brands"]'
    this.navLoginLink = 'a[data-test-id="nav-login"]'
    this.navLoginLinkUrl = 'https://crypto.com/nft/login'
    this.navSignupLink = 'a[data-test-id="nav-signup"]'
    this.navSignupLinkUrl = 'https://crypto.com/nft/register'

    // Carousel
    this.existCarouselDrops = 'a[data-test-id="carousel-drops"]'
    this.carouselViewDropButton = 'button[data-test-id="carousel-view-drop"]'
    this.carouselViewDropButtonUrl = 'https://crypto.com/nft/drops-event/'
    // 2
    this.carouselPaginationLeft = 'div[data-test-id="pagination-left"]'
    this.carouselPaginationRight = 'div[data-test-id="pagination-right"]'

    // Subscription
    this.subscriptionBlock = 'div[id="email-subscription-block"]'
    this.subscriptionInput = 'input[data-test-id="undefined-input"]'
    this.subscriptionSubmitButton = 'button[data-test-id="homepage-subscribe-submit-button"]'
    this.subscriptionCheckbox = 'svg[data-test-id="undefined-checkbox"]'
    this.subscriptionLink = 'a[class*="SubscribeForm_link__"]'
    this.subscriptionLinkUrl = 'https://crypto.com/privacy/global'

    // Top Collections
    this.topCollectionsDiv = `${this.topCollections} div[data-test-id="top-creators-div"]`
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

    // Top Creator
    this.topCreatorsDiv = `${this.topCreaters} div[data-test-id="top-creators-div"]`
    this.topCreatorLeftArrow = 'svg[data-test-id="topCreator-left-arrow"]'
    this.topCreatorRightArrow = 'svg[data-test-id="topCreator-right-arrow"]'
    this.topCreatorAvatarLink = `${this.topCreaters} > div > div:nth-child(2) > div > div.is-draggable > div > div:nth-child(1) > a`
    this.topCreatorAvatarLinkUrl = 'https://crypto.com/nft/profile/'
    // Top Collectibles
    this.topCollectiblesDiv = this.topCollectibles
    this.numTopCollectiblesDropdown = 2
    this.existTopCollectiblesDropdown = `${this.topCollectibles} div[data-test-id="undefined-dropdown-menu"]`
    this.valueTopCollectiblesSortBy = (value = 'Sales Volume') => `${this.topCollectibles} button > div:contains(${value})`
    this.topCollectiblesPeriodToday = `${this.topCollectibles} button > div:contains("Today")`
    this.topCollectiblesPeriod7days = `${this.topCollectibles} button > div:contains("Last 7 Days")`
    this.topCollectiblesPeriod30days = `${this.topCollectibles} button > div:contains("Last 30 Days")`
    this.topCollectiblesPeriodAll = `${this.topCollectibles} button > div:contains("All Time")`
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
    this.topCollectiblesProfileLink = `${this.topCollectibles} a[class*="NameOnlyUserProfile_link__"]:nth-child(1)`
    this.topCollectiblesProfileLinkUrl = 'https://crypto.com/nft/profile/'
    this.topCollectiblesShowMore = `${this.topCollectibles} button > div:contains('show more')`

    // footer
    this.footerInstagramHref = `${this.footerContainer} a[data-test-id="footer-instagram"]`
    this.footerInstagramHrefUrl = 'https://www.instagram.com/cryptocomnft'
    this.footerTwitterHref = `${this.footerContainer} a[data-test-id="footer-twitter"]`
    this.footerTwitterHrefUrl = 'https://twitter.com/cryptocomnft'
    this.footerMediumHref = `${this.footerContainer} a[data-test-id="footer-medium"]`
    this.footerMediumHrefUrl = 'https://medium.com/cryptocomnft'
    this.footerDiscordHref = `${this.footerContainer} a[data-test-id="footer-discord"]`
    this.footerDiscordHrefUrl = 'https://discord.com/invite/nsp9JTC'
    this.footerTelegramHref = `${this.footerContainer} a[data-test-id="footer-telegram"]`
    this.footerTelegramHrefUrl = 'https://t.me/Cryptocom_NFT_Announcements'
    this.footerFaqLink = `${this.footerContainer} a[data-test-id="footer-faq"]`
    this.footerFaqLinkUrl = 'https://help.crypto.com/en/collections/2852834-crypto-com-nft'
    this.footerTermsLink = `${this.footerContainer} a[data-test-id="footer-terms"]`
    this.footerTermsLinkUrl = '/nft/terms'
    this.footerPrivacyLink = `${this.footerContainer} a[data-test-id="footer-privacy"]`
    this.footerPrivacyLinkUrl = '/nft/privacy'
  }
}
