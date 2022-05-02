import FooterLocators from './footer.locators'
import { DEVICE, PAGE } from '../constants'
import TopCollections from './topCollections.locators'
import Subscription from './subscription.locators'
import HeaderLocators from './header.locators'
import TopCollectiblesLocators from './topCollectibles.locators'

class MarketplacePageLocators {
}

function marketplacepage (page: PAGE, device: DEVICE): void {
  Object.assign(
    this,
    new MarketplacePageLocators(),
    new HeaderLocators(page, device),
    new TopCollections(page, device),
    new TopCollectiblesLocators(page, device),
    new Subscription(page, device),
    new FooterLocators(page, device)
  )
}

export default marketplacepage
