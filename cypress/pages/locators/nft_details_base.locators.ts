
export default class NftDetailsBaseLocators {
  readonly initiUrl: string
  readonly popupModalBody: string
  readonly skipAssetImage: string
  readonly skipAssetVideo: string
  readonly listingCryptoChainButton: string
  readonly backButton: string
  readonly likeButton: string
  readonly nftCardLikesCount: string
  readonly listingViewsLogo: string
  readonly listingViewsCount: string
  readonly listingAssetName: string
  readonly listingEditionsLabel: string
  readonly listingChainType: string
  readonly listingChainTypeCryptoLogo: string
  readonly listingChainTypeLabel: string
  readonly popupReportButton: string
  readonly listingChip: string
  readonly listingCollectionImage: string
  readonly listingCreatorUsername: string
  readonly listingCollectionName: string
  readonly listingCreatorAvatar: string
  readonly listingCreatorLabel: string
  readonly popupMoreButtonDropdown: string
  readonly popupShareEmail: string
  readonly popupShareDropdown: string
  readonly popupShareFacebook: string
  readonly listingShareLogo: string
  readonly popupShareTelegram: string
  readonly popupShareTwitter: string
  readonly popupShareWhatsapp: string
  readonly listingAcceptingOffersLabel: string
  readonly listingAssetDescription: string
  readonly nftDetailTag: string
  readonly listingSelectEditionUpArrow: string
  readonly listingSelectEditionDownArrow: string
  readonly nftDetailEdition: string
  readonly listingSelectEditionButton: string
  readonly listingOwnerTab: string
  readonly listingHistoryTab: string
  readonly listingOffersTab: string
  readonly listingOwnerAvatar: string
  readonly listingOwnerLabel: string
  readonly listingOwnerUsername: string
  readonly nftDetailCroAddressDiv: string
  readonly listingOwnerWalletAddress: string
  readonly listingOwnerWalletAddressCopyButton: string
  readonly actionBar: string
  readonly actionBarAssetImage: string
  readonly actionBarEdition: string
  readonly actionBarAssetName: string
  readonly nftDetailOfferButton: string
  readonly actionBarRoyaltiesMessage: string
  readonly listingShareButton: string
  readonly popupPropertiesBody: string
  readonly popupPropertiesButton: string
  readonly popupPropertiesContainer: string
  readonly popupPropertiesPercentage: string
  readonly popupPropertiesTitle: string
  readonly listingMoreButton: string
  readonly popupHistoryContainer: string
  readonly popupOffersContainer: string

  constructor () {
    this.initiUrl = 'https://crypto.com/nft/?asset='
    this.popupModalBody = 'div[data-test-id="undefined-popup"]'
    // asset image
    this.skipAssetImage = 'img[data-test-id="listing-asset-image"]'
    this.skipAssetVideo = 'div[class*="AssetImageContainer_artImage__"] > video'

    this.backButton = `${this.popupModalBody} div[data-test-id="back-button"]`
    this.likeButton = `${this.popupModalBody} svg[data-test-id="like-button"]`
    this.nftCardLikesCount = `${this.popupModalBody} div[data-test-id="nftCard-likes-count"]`
    this.listingViewsLogo = `${this.popupModalBody} svg[data-test-id="listing-views-logo"]`
    this.listingViewsCount = `${this.popupModalBody} div[data-test-id="listing-views-count"]`
    this.listingShareButton = `${this.popupModalBody} div[data-test-id="listing-share-button"]`
    this.listingShareLogo = `${this.popupModalBody} svg[data-test-id="listing-share-logo"]`

    // Share Dropdown
    this.popupShareDropdown = `${this.popupModalBody} div[data-test-id="listing-share-button-dropdown-menu"]`
    this.popupShareFacebook = `${this.popupModalBody} a[data-test-id="listing-share-facebook"]`
    this.popupShareTwitter = `${this.popupModalBody} a[data-test-id="listing-share-twitter"]`
    this.popupShareTelegram = `${this.popupModalBody} a[data-test-id="listing-share-telegram"]`
    this.popupShareWhatsapp = `${this.popupModalBody} a[data-test-id="listing-share-whatsapp"]`
    this.popupShareEmail = `${this.popupModalBody} a[data-test-id="listing-share-email"]`
    this.listingMoreButton = `${this.popupModalBody} div[data-test-id="listing-more-button"]`

    // More dropdown
    this.popupMoreButtonDropdown = `${this.popupModalBody} div[data-test-id="listing-more-button-dropdown-menu"]`
    this.popupReportButton = `${this.popupModalBody} button[data-test-id="listing-report-button"]`

    this.listingChainTypeLabel = `${this.popupModalBody} div[data-test-id="listing-chain-type-label"]`
    this.listingChainType = `${this.popupModalBody} div[data-test-id="listing-chain-type"]`
    this.listingChainTypeCryptoLogo = `${this.popupModalBody} svg[data-test-id="listing-chain-type-crypto-logo-cro-logo"]`
    this.listingCreatorAvatar = `${this.popupModalBody} div[data-test-id="listing-creator-avatar"]`
    this.listingCreatorLabel = `${this.popupModalBody} span[data-test-id="listing-creator-label"]`
    this.listingCreatorUsername = `${this.popupModalBody} div[data-test-id="listing-creator-username"]`
    this.listingCollectionImage = `${this.popupModalBody} div[data-test-id="listing-collection-image"]`
    this.listingEditionsLabel = `${this.popupModalBody} div[data-test-id="listing-collection-label"]`
    this.listingCollectionName = `${this.popupModalBody} div[data-test-id="listing-collection-name"]`
    this.listingEditionsLabel = `${this.popupModalBody} div[data-test-id="listing-editions-label"]`
    this.listingAssetName = `${this.popupModalBody} div[data-test-id="listing-asset-name"]`
    this.listingChip = `${this.popupModalBody} div[data-test-id="listing-chip"]`

    this.listingCryptoChainButton = `${this.popupModalBody} div[data-test-id="listing-crypto-chain-button"]`

    this.listingAssetDescription = `${this.popupModalBody} div[data-test-id="listing-asset-description"]`
    this.nftDetailTag = `${this.popupModalBody} div[data-test-id="nftDetail-tag"]`

    // if edition > 0
    // this.existSelectEditionUpArrow = `${this.popupModalBody} div[data-test-id="listing-select-edition-up-arrow"]`
    // this.existSelectEditionDownArrow = `${this.popupModalBody} div[data-test-id="listing-select-edition-down-arrow"]`

    // Properties
    this.popupPropertiesButton = `${this.popupModalBody} div[data-test-id="listing-properties-button"]`
    this.popupPropertiesContainer = `${this.popupModalBody} div[class*="PropertiesContainer_property__"]`
    this.popupPropertiesTitle = `${this.popupModalBody} div[class*="PropertiesContainer_propertyTitle__"]`
    this.popupPropertiesBody = `${this.popupModalBody} div[class*="PropertiesContainer_propertyBody__"]`
    this.popupPropertiesPercentage = `${this.popupModalBody} div[class*="PropertiesContainer_propertyPercentage__"]`

    this.nftDetailEdition = `${this.popupModalBody} div[data-test-id="nftDetail-edition"]`
    this.listingSelectEditionButton = `${this.popupModalBody} a[data-test-id="listing-select-edition-button"]`
    this.listingOwnerTab = `${this.popupModalBody} div[class*="NFTDetailsTabs_tab__"] div[data-test-id="listing-owner-tab"]`
    // History tab
    this.listingHistoryTab = `${this.popupModalBody} div[data-test-id="listing-history-tab"]`
    this.popupHistoryContainer = `${this.popupModalBody} div[data-test-id="listing-history-container"]`
    // Offers tab
    this.listingOffersTab = `${this.popupModalBody} div[data-test-id="listing-offers-tab"]`
    this.popupOffersContainer = `${this.popupModalBody} div[data-test-id="listing-offers-container"]`

    this.listingOwnerTab = `${this.popupModalBody} div[class*="NFTOwnership_container__"] div[data-test-id="listing-owner-tab"]`
    this.listingOwnerAvatar = `${this.popupModalBody} div[data-test-id="listing-owner-avatar"] > img`
    this.listingOwnerLabel = `${this.popupModalBody} span[data-test-id="listing-owner-label"]`
    this.listingOwnerUsername = `${this.popupModalBody} div[data-test-id="listing-owner-username"]`
    this.nftDetailCroAddressDiv = `${this.popupModalBody} div[data-test-id="nftDetail-croAddress-div"]`
    this.listingOwnerWalletAddress = `${this.popupModalBody} div[data-test-id="listing-owner-wallet-address"]`
    this.listingOwnerWalletAddressCopyButton = `${this.popupModalBody} svg[data-test-id="listing-owner-wallet-address-copy-button"]`
    this.actionBar = `${this.popupModalBody} div[data-test-id="action-button-bar"]`
    this.actionBarAssetImage = `${this.popupModalBody} div[data-test-id="action-button-bar-asset-image"]`
    this.actionBarEdition = `${this.popupModalBody} div[data-test-id="action-button-bar-edition"]`
    this.actionBarAssetName = `${this.popupModalBody} span[data-test-id="action-button-bar-asset-name"]`
  }
}
