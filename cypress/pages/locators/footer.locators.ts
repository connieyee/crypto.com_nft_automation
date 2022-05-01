import { DEVICE, PAGE } from '../constants'

export default class FooterLocators {
  readonly footerContainer: string
  readonly footerFaqLink: string
  readonly footerPrivacyLink: string
  readonly footerTermsLink: string
  readonly footerTermsLinkUrl: string
  readonly footerFaqLinkUrl: string
  readonly footerPrivacyLinkUrl: string
  readonly footerInstagramHref: string
  readonly footerInstagramHrefUrl: string
  readonly footerTwitterHref: string
  readonly footerTwitterHrefUrl: string
  readonly footerMediumHref: string
  readonly footerMediumHrefUrl: string
  readonly footerDiscordHref: string
  readonly footerDiscordHrefUrl: string
  readonly footerTelegramHref: string
  readonly footerTelegramHrefUrl: string

  constructor (page: PAGE, device: DEVICE) {
    // footer
    this.footerContainer = 'div[class*="Footer_container__"]'
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
