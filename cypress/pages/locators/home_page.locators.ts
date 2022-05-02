import FooterLocators from './footer.locators'
import TopCollectiblesLocators from './topCollectibles.locators'
import { DEVICE, PAGE } from '../constants'
import TopCreatorLocators from './topCreator.locators'
import ConsentLocators from './consent.locators'
import TopCollections from './topCollections.locators'
import Subscription from './subscription.locators'
import Carousel from './carousel.locators'
import HeaderLocators from './header.locators'

class HomeLocators {}

function homepage (page: PAGE, device: DEVICE): void {
  Object.assign(
    this,
    new HomeLocators(),
    new HeaderLocators(page, device),
    new ConsentLocators(),
    new Subscription(),
    new Carousel(page, device),
    new TopCollections(page, device),
    new TopCreatorLocators(page, device),
    new TopCollectiblesLocators(page, device),
    new FooterLocators()
  )
}

export default homepage
