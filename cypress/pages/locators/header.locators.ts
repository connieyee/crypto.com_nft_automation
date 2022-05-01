import { DEVICE, PAGE } from '../constants'

export default class HeaderLocators {
  readonly navMenu?: string
  readonly navCreate: string
  readonly navBrands: string
  readonly navLogin: string
  readonly urlLogin: string
  readonly navSignup: string
  readonly urlSignup: string
  readonly nftLogoLinkUrl?: string
  readonly headerSearchBoxInput: string
  readonly navMarketplaceLink: string
  readonly navMarketplaceLinkUrl: string
  readonly navDropsLink: string
  readonly navDropsLinkUrl: string
  readonly navCreateLinkUrl: string
  readonly navLoginLink: string
  readonly navLoginLinkUrl: string
  readonly navSignupLink: string
  readonly navSignupLinkUrl: string
  readonly headerSearch: string
  readonly nftLogoLink: string

  constructor (page: PAGE, device: DEVICE) {
    // header
    if (device === DEVICE.MOBILE || device === DEVICE.TABLET) {
      this.navMenu = 'svg[data-test-id="nav-menu"]'
      this.headerSearch = 'div[class*="navigation_mobileRightNav__"]'
    }
    if (device === DEVICE.DESKTOP) {
      this.headerSearchBoxInput = 'input[data-test-id="nav-search-box-input"]'
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
    }

    this.nftLogoLinkUrl = 'https://crypto.com/nft/'
    this.nftLogoLink = 'svg[data-test-id="nft-logo"]'

    // todo

    // after login
    // this.userDropdownMenu = 'div[data-test-id="user-dropdown-menu"]'
    // this.dropdownUserImage = 'div[data-test-id="dropdown-user-image"]'
    // this.dropdownUserName = 'div[data-test-id="dropdown-user-name"]'
    // this.dropdownMyProfileButton = 'a[data-test-id="dropdown-my-profile-button"]'
  }
}
