import FooterLocators from './footer.locators'
import { DEVICE, PAGE } from '../constants'
import Subscription from './subscription.locators'
import HeaderLocators from './header.locators'

class DropsPageLocators {
  readonly dropListBanner: string
  readonly dropListViewDropButton: string
  readonly earlyAccessDropTitle?: string
  readonly currentDropTitle?: string
  readonly upcomingDropTitle?: string
  readonly upcomingDropLeftArrow?: string
  readonly upcomingDropRightArrow?: string
  readonly endedDropTitle?: string
  readonly endedDropLeftArrow?: string
  readonly endedDropRightArrow?: string

  constructor (options) {
    const { data } = options
    this.dropListBanner = 'div[data-test-id="drop-list-banner"]'
    this.dropListViewDropButton = 'button[data-test-id="drop-list-view-drop-button"]'

    // early access section
    if (data?.earlyAccess) {
      this.earlyAccessDropTitle = 'div[data-test-id="early-access-drop-title"]'
    }
    // current section
    if (data?.current) {
      this.currentDropTitle = 'div[data-test-id="early-access-drop-title"]'
    }

    // upcoming section
    if (data?.upcoming) {
      this.upcomingDropTitle = 'div[data-test-id="upcoming-drop-title"]'
      this.upcomingDropLeftArrow = 'svg[data-test-id="upcoming-drop-left-arrow"]'
      this.upcomingDropRightArrow = 'svg[data-test-id="upcoming-drop-right-arrow"]'
    }
    // ended section
    if (data?.ended) {
      this.endedDropTitle = 'div[data-test-id="ended-drop-title"]'
      this.endedDropLeftArrow = 'svg[data-test-id="ended-drop-left-arrow"]'
      this.endedDropRightArrow = 'svg[data-test-id="ended-drop-right-arrow"]'
    }
  }
}

function dropspage (page: PAGE, device: DEVICE, options: unknown): void {
  Object.assign(
    this,
    new DropsPageLocators(options),
    new HeaderLocators(page, device),
    new Subscription(page, device),
    new FooterLocators(page, device)
  )
}

export default dropspage
