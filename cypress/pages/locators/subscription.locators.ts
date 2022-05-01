import { DEVICE, PAGE } from '../constants'

export default class SubscriptionLocators {
  readonly subscriptionInput: string
  readonly subscriptionBlock: string
  readonly subscriptionSubmitButton: string
  readonly subscriptionCheckbox: string
  readonly subscriptionLink: string
  readonly subscriptionLinkUrl: string

  constructor (page: PAGE, device: DEVICE) {
    // Subscription
    this.subscriptionBlock = 'div[id="email-subscription-block"]'
    this.subscriptionInput = 'input[data-test-id="undefined-input"]'
    this.subscriptionSubmitButton = 'button[data-test-id="homepage-subscribe-submit-button"]'
    this.subscriptionCheckbox = 'svg[data-test-id="undefined-checkbox"]'
    this.subscriptionLink = 'a[class*="SubscribeForm_link__"]'
    this.subscriptionLinkUrl = 'https://crypto.com/privacy/global'
  }
}
