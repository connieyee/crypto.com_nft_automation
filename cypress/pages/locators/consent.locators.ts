import { DEVICE, PAGE } from '../constants'

export default class ConsentLocators {
  readonly consentText: string
  readonly consentCustSetting: string
  readonly consentDisableAll: string
  readonly consentAcceptAll: string
  readonly consentClose: string

  constructor (page: PAGE, device: DEVICE) {
    // consent
    this.consentText = 'p:contains("We use cookies to personalise content and ads, to provide social media features and to analyse our traffic. We also share information about your use of our site with our social media, advertising and analytics partners.")'
    this.consentCustSetting = 'button:contains("Customize Settings")'
    this.consentDisableAll = 'button:contains("Disable All")'
    this.consentAcceptAll = 'button:contains("Accept All")'
    this.consentClose = 'button[aria-label="Close"]'
  }
}
