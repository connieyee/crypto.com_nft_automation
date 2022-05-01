import { DEVICE, PAGE } from '../constants'

export default class TopCreatorLocators {
  readonly topCreaters: string
  readonly topCreatorsDiv: string
  readonly topCreatorLeftArrow: string
  readonly topCreatorRightArrow: string
  readonly topCreatorAvatarLink: string
  readonly topCreatorAvatarLinkUrl: string
  readonly numIsSelected: number
  readonly isSelected: string

  constructor (page: PAGE, device: DEVICE) {
    let topContainer = ''
    switch (page) {
      case PAGE.HOME_PAGE:
        topContainer = 'div[class*="HomePage_container__"]'
        break
    }
    this.topCreaters = `${topContainer} > div:nth-child(4)`

    if (device === DEVICE.MOBILE) {
      this.numIsSelected = 3
    }
    if (device === DEVICE.TABLET) {
      this.numIsSelected = 5
    }
    if (device === DEVICE.DESKTOP) {
      this.numIsSelected = 7
    }

    // Top Creator
    this.isSelected = `${this.topCreaters} div.is-selected`
    this.topCreatorsDiv = `${this.topCreaters} div[data-test-id="top-creators-div"]`
    this.topCreatorLeftArrow = 'svg[data-test-id="topCreator-left-arrow"]'
    this.topCreatorRightArrow = 'svg[data-test-id="topCreator-right-arrow"]'
    this.topCreatorAvatarLink = `${this.topCreaters} > div > div:nth-child(2) > div > div.is-draggable > div > div:nth-child(1) > a`
    this.topCreatorAvatarLinkUrl = 'https://crypto.com/nft/profile/'
  }
}
