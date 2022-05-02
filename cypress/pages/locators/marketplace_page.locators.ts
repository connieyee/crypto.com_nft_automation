import FooterLocators from './footer.locators'
import { DEVICE, PAGE } from '../constants'
import TopCollections from './topCollections.locators'
import Subscription from './subscription.locators'
import HeaderLocators from './header.locators'
import TopCollectiblesLocators from './topCollectibles.locators'
import ConsentLocators from './consent.locators'

class MarketplacePageLocators {
}

function marketplacepage (page: PAGE, device: DEVICE): void {
  Object.assign(
    this,
    new MarketplacePageLocators(),
    new HeaderLocators(page, device),
    new TopCollections(page, device),
    new ConsentLocators(),
    new TopCollectiblesLocators(page, device),
    new Subscription(),
    new FooterLocators()
  )
}

export default marketplacepage
