import { Page } from '@g4/prova';
import { collect, getValueCollectorMap } from '@g4/prova/src/helpers/collector';
import { assert } from 'chai';

export { hotelValue };

const data = {
  hotelResultOriginalCount: 0,
};

const hotelPageTitle = '//title';
const continueButton = "[data-hook='hotels-page_continue']";
const noThanksLink = "//span[contains(text(),'No thanks')]";
const hotelsPageHeadingTitle = "[data-hook='hotels-page_page-heading']";
const hotelsPageLoadingSpinner = "[data-hook='hotels-page-spinner']";
const hotelsPageFetchingHotelsSpinner = "[data-hook='hotels-page-spinner_fetching-hotels']";
const hotelsPageBreadcrumb = "[data-hook='flights-breadcrumb_item-hotels']";
const hotelsSearchButton = "[data-hook='hotels-page-search-criteria-search-button']";
const hotelsSearchBox = "[data-hook='hotels-page-search-criteria-search-input']";
const hotelsSearchResult = "[data-hook='hotels-page-featured-hotel-card_paris_name']";
const hotelsSearchCount = "[data-hook='hotels-page-search-criteria-properties-count']";
const ClearFilter = "[data-hook='hotels-page_clear-search-filter']";
const noResultsMessage = '//div[7]/div[1]/div[2]/div[2]/span';
const hotelsBreadcrumb = "[data-hook='flights-breadcrumb_item-hotels']";
const selectHotel = "(//span[contains(text(),'Rooms and rates')])[1]";
const selectRoom = "[data-hook='room-pod_hotel-book-button']";
const AddHotelToCart = "[data-hook='room-pod_hotel-added-to-cart-label']";
const HeaderCartHeading = "[data-hook='cart-item_flight-package_heading']";
const hotelExpandButton = "[data-hook='cart-item_hotel']";
const hotelEditLink = "[data-hook='cart-item_hotel_link']";
const hotelDetailsPageContinueButton = "[data-hook='hotel-details-page_continue']";
const hotelsMapViewButton = "[data-hook='hotels-page-search-criteria-map-view-button']";
const hotelMapZoomInButton = "//button[@aria-label='Zoom in']";
const hotelMapZoomOutButton = "//button[@aria-label='Zoom out']";
const hotelMapTerrainView = "//button[@aria-label='Show street map']";
const hotelMapSatteliteView = "//button[@aria-label='Show satellite imagery']";
const hotelMapFullScreen = "//button[@aria-label='Toggle fullscreen view']";
const tripSummaryDepartingCheckedBagLabel = "(//span[@data-hook='cart-travelers_X_bags_checked-bag_label'])[1]";
const tripSummaryReturningCheckedBagLabel = "(//span[@data-hook='cart-travelers_X_bags_checked-bag_label'])[2]";
const tripSummaryDepartingCarryOnLabel = "(//span[@data-hook='cart-travelers_X_bags_carry-on_label'])[1]";
const tripSummaryReturningCarryOnLabel = "(//span[@data-hook='cart-travelers_X_bags_carry-on_label'])[2]";
const tripSummaryDepartingPriorityAccessLabel = "(//span[@data-hook='cart-travelers_X_extras_priority-access_label'])[1]";
const tripSummaryReturningPriorityAccessLabel = "(//span[@data-hook='cart-travelers_X_extras_priority-access_label'])[2]";
const tripSummaryDepartingTripFlexLabel = "(//span[@data-hook='cart-travelers_X_extras_trip-flex_label'])[1]";
const tripSummaryReturningTripFlexLabel = "(//span[@data-hook='cart-travelers_X_extras_trip-flex_label'])[2]";
const tripSummaryDepartingPetInCabinLabel = "(//span[@data-hook='cart-travelers_X_extras_pet-in-cabin'])[1]";
const tripSummaryReturningPetInCabinLabel = "(//span[@data-hook='cart-travelers_X_extras_pet-in-cabin'])[2]";
const clickContinueButton = "[data-hook='hotels-page_continue']";
const clickNoThanksButton = "//a[@data-hook='hotels-page_skip']//span";
const cartItemBundlesLink = "[data-hook='cart-item_bundles_link']";
const cartTravelersName = "[data-hook='cart-travelers_X_name']";
const heading = "[data-hook='hotels-page_page-heading']";
const checkInDate = "[data-hook='hotels-page-search-criteria-check-in-date']";
const checkOutDate = "[data-hook='hotels-page-search-criteria-check-out-date']";
const firstRoomName = "(//span[contains(@class,'Text-sc-1o5ubbx-0 bltVao')])[1]";
const hotelsPageDisclaimer = "[data-hook='hotels-page-disclaimer']";
const spinnerBar = "//span[contains(@class,'Spinner')]"
const hotelsPageDisclaimerFeesLink = "[data-hook='hotels-page-disclaimer-fees-button']";
const hotelsPageDisclaimerFeesPopup = "[data-hook='hotels-page-disclaimer-fees-content_title']";
const hotelsPageDisclaimerTermsLink = "[data-hook='hotels-page-disclaimer-terms-button']";
const hotelsPageDisclaimerTermsPopup = "[data-hook='hotels-page-disclaimer-terms-content_title']";
const carsPageHeading = "[data-hook='cars-page_page-heading']";
const backToResults = "(//span[contains(text(),'Back to Results')])[2]";
const currentHotelLabel = "//div[contains(text(),'Current Hotel')]";
const removeSelection = "//span[contains(text(),'Remove Selection')]";
const cartButton = "[data-hook='header-cart-button']";
const hotelContentInCart = "[data-hook='cart-item_hotel_content']";
const hotelsDetailsSpinner = "[data-hook='hotel-details-page_spinner']";
const roomPodSpinner = "[data-hook='room-pod_spinner']";
const noThanksButtonFromHotelDetails = "[data-hook='hotel-details-page_skip']";
const priceLowToHighLink =  "//button[contains(@data-hook,'hotels-page_sort-options_price-asc')]";
const roomsAndRatesButtonList =  "[data-hook*='hotels-page-hotel-card'] [data-hook$='hotel-details-button']";
const headerCartValue="[data-hook='cart-total_value']";
const hotelRoomViewBreakdownLink="(//button[@data-hook='room-pod_total-button'])[1]";
const hotelRoomTotalPackagePrice="[data-hook='room-breakdown_total-value']";
const hotelRoomClosePopup="[data-hook='room-pod_total-price-popup_close']";
const hotelDetailsPageHotelName ="[data-hook='hotel-details-page_name']";
const hotelResultsCustomizeDate = "//button[contains(.,'Customize Hotel Stay')]";
const tripDurationCheckInDate = "[data-hook='hotels-page-search-criteria-check-in-date']";
const hotelUpdateButton = "//button[contains(@class,'Button__StyledButton-sc-1ececxa-1 ijtqnd ModifyHotelSearchWidget__SubmitButton-sc-1uf7cwa-5 gPicNl')]";
const headerCartButton = "[data-hook='header-cart-button_icon']";
const clickOnCheckInCalendar = "[data-hook='hotels-date-picker_expand-start-date']";
const hotelUpliftBanner = "[data-g4-id='uplift-banner']";
const hotelResultsUpliftBannerDescription = "//div[@data-hook='hotels-uplift-banner-description']//span[contains(@class,'UpliftBanner__Amount')]";
const hotelResultsUpliftBannerFirstDescription = "[data-hook='hotels-uplift-banner-description']>span:nth-child(1)"
const hotelResultsUpliftBannerPriceDescription = "[data-hook='hotels-uplift-banner-description']>span:nth-child(2)>span:nth-child(1)"
const hotelResultsUpliftBannerLogo = "[data-hook='hotels-page_uplift-logo']";
const hotelDetailsUpliftBannerDescription = "//div[@data-hook='hotels-rooms-uplift-banner-description']//span[contains(@class,'UpliftBanner__Amount')]";
const hotelDetailsUpliftBannerFirstDescription = "[data-hook='hotels-rooms-uplift-banner-description']>span:nth-child(1)";
const hotelDetailsUpliftBannerPriceDescription = "[data-hook='hotels-rooms-uplift-banner-description']>span:nth-child(2)>span:nth-child(1)"
const hotelDetailsUpliftBannerLogo = "[data-hook='hotel-rooms_uplift-logo']";
const hotelsStarRatingFilterLabel= "[data-hook='hotels-page-star-rating-filter_label']";
const hotelsStarsFilterLabelList = "[data-hook*='stars_label']";
const upliftModal = "div[id='modal-body']";
const upliftSubheaderContent = "div[class='modal-action-call']";
const upliftPopupIFrame = "iframe[id='up-modal-iframe']";
const customizeRoomsCount = "[data-hook='hotels-room-count-select']";
const roomsNr = "[data-hook='hotels-room-count-select_X']";
const showImageGalleryIconsList = "//div[contains(text(), 'Show image gallery')]/..";
const imageGalleryAltText = "[data-hook='hotels-card-image-popup_alternative-text']";
const imageGalleryPopupHeader = "[class*='Popup__ModalHeader']";
const hotelsListViewButton = "[data-hook='hotels-page-search-criteria-list-view-button']";
const mostPropularLink ="//button[contains(@data-hook,'hotels-page_sort-options_featured-desc')]";
const nameAtoZLink="//button[contains(@data-hook,'hotels-page_sort-options_name-asc')]";
const hotels5StarRatingButton = "//div[contains(@data-hook,'hotels-page-star-rating-filter_5_stars_label')]/label/div[2]";
const hotels4StarRatingButton = "//div[contains(@data-hook,'hotels-page-star-rating-filter_4_stars_label')]/label/div[2]";
const hotels3StarRatingButton = "//div[contains(@data-hook,'hotels-page-star-rating-filter_3_stars_label')]/label/div[2]";
const hotels2StarRatingButton = "//div[contains(@data-hook,'hotels-page-star-rating-filter_2_stars_label')]/label/div[2]";
const hotels1StarRatingButton = "//div[contains(@data-hook,'hotels-page-star-rating-filter_1_stars_label')]/label/div[2]";
const hotelsPricePerNightFilterLabel="[data-hook='hotels-page-price-ranges-filter']";
const hotelsPricePerNightLessThan$75="//div[contains(@data-hook,'hotels-page-price-ranges-filter_0_label')]/label/div[2]";
const hotelsPricePerNight$75To$125="//div[contains(@data-hook,'hotels-page-price-ranges-filter_1_label')]/label/div[2]";
const hotelsPricePerNight$125To$200="//div[contains(@data-hook,'hotels-page-price-ranges-filter_2_label')]/label/div[2]";
const hotelsPricePerNightGreterThan$200="//div[contains(@data-hook,'hotels-page-price-ranges-filter_3_label')]/label/div[2]";
const hotelsAmenitiesLabel="[data-hook='hotels-page-amenities-filter_label']";
const hotelsAmenitiesFreeInternet="//*[text()='Free Internet']";
const hotelsAmenitiesFreeParking="//*[text()='Free Parking']";
const hotelsAmenitiesAirportShuttle="//*[text()='Airport Shuttle']";
const hotelsAmenitiesBussinessCenter="//*[text()='Business Center']";
const hotelsAmenitiesFitnessCenter="//*[text()='Fitness Center']";
const hotelsAmenitiesPetAllowed="//*[text()='Pets Allowed']";
const hotelsAmenitiesSwimmingPool="//*[text()='Swimming Pool']";
const hotelsAmenitiesNoSmokingRoom="//*[text()='No Smoking Rooms']";
const hotelsAmenitiesHandicapAccessibility="//*[text()='Handicap/Accessibility']";
const hotelsNearbyLabel = "[data-hook='hotels-page-nearby-filter_label']";
const hotelsNearbyUNLVCenter="//*[text()='UNLV/Thomas & Mack Center']";
const hotelsNearbyForementStreet="//*[text()='Fremont Street Experience/Downtown']";
const hotelsNearbyTMobileArena="//*[text()='T-Mobile Arena']";
const hotelsNeighborhoodLabel = "[data-hook='hotels-page-neighborhood-filter_label']";
const hotelsNeighborhoodDowntownLasVegas="//*[text()='Downtown Las Vegas']";
const hotelsNeighborhoodLasVegasStrip="//*[text()='Las Vegas Strip']";
const hotelsNeighborhoodLasVegasStripArea="//*[text()='Neighboring Las Vegas Strip Area']";
const hotelImage ="(//*[contains(@class,'HotelCardImagePanel__HotelImage-sc')])[1]";
const hotelMap ="(//*[contains(@data-hook,'map-button')])[1]";
const hotelsBackToResult="[data-hook='hotel-details-page_return-link']";
const hotelDetailsMap="[data-hook='hotel-details-map_button']";
const hotelDetailsRoomAndRate="//*[text()='Rooms & Rates']";
const hotelDetailsHotelINformation="//*[text()='Hotel Information']";
const hotelDetailsViewBreakdown ="(//*[@data-hook='room-pod_total-button'])[1]";
const hotelDetailsMoreRoomInformation="(//*[text()='More Room Information'])[1]";
const hotelRoomImage ="(//*[contains(@class,'HotelCardImagePanel__HotelImage-sc')])[1]";
const removeRoom = "[data-hook='room-pod_hotel-added-to-cart-label']";
const noThanksLinkHotelResultsPage = "[data-hook='hotels-page_skip']";
const sortByLabel= "//span[contains(text(),'Sort By')]";
const hotelCardList = "div[class*='HotelCardBox'][data-hook*='hotels-page-hotel-card_']";
const hotelsRoomCountSelect = "[data-hook*='hotels-room-count-select_']"
var flightValue;
var hotelValue;
const viewBreakdownHotelTheCosmopolitanOfLasVegas = "[data-hook='hotels-page-hotel-card_the-cosmopolitan-of-las-vegas_total-button']";
const viewBreakdownPopUpHeader = "[data-hook='undefined_title']";
const viewBreakdownPopUpPromoLabel ="[data-hook='hotels-page-view-hotel-price-breakdown-modal_promo-label']";
const viewBreakdownPopUpPromoLabelAppliedLabel = "//span[.='Applied']";
const viewBreakdownPopUpPromoCheckMarkImg = "//*[@alt='check mark']";
const viewBreakdownPopUpPackageItemsLabel = "[data-hook='hotels-page-view-hotel-price-breakdown-modal_price-label']";
const viewBreakdownPopUpPackageItemsPriceValue = "[data-hook='hotels-page-view-hotel-price-breakdown-modal_price-value']";
const viewBreakdownPopUpTaxesLabel = "[data-hook='hotels-page-view-hotel-price-breakdown-modal_taxes-label']";
const viewBreakdownPopUpTaxesValue = "[data-hook='hotels-page-view-hotel-price-breakdown-modal_taxes-value']";
const viewBreakdownPopUpTotalPackagePriceLabel = "[data-hook='hotels-page-view-hotel-price-breakdown-modal_total-label']";
const viewBreakdownPopUpTotalPackagePriceValue = "[data-hook='hotels-page-view-hotel-price-breakdown-modal_total-value']";
const viewBreakdownPopUpRoomsAndRatesButton = "//div[@data-hook='undefined_content']/div/div/a[@data-hook='hotels-page-hotel-card_the-cosmopolitan-of-las-vegas_hotel-details-button']";
const viewBreakdownPopUpCrossIcon = "//*[@alt='closeIcon']";
const hotelDetailsPageBackToResults = "[data-hook='hotel-details-page_return-link-url']";

const hotelsCardPackagePrice = ".//span[@data-hook='hotels-page-hotel-card_the-cosmopolitan-of-las-vegas_price']";
const hotelsCardPackagePriceSuffix = ".//*[@data-hook='hotels-page-hotel-card_the-cosmopolitan-of-las-vegas_price-suffix']/p";

const firstRoomPod = "[data-hook='room-pod_0']";
const firstRoomPodPrice = "[data-hook='room-pod_price']";
var hotelCardPackagePriceDisplayValue;

class HotelsPage extends Page {
  validateTripSummaryCarryOnBag(carryOn, paxNum, segment) {
    if (carryOn && segment === 'departing') {
      assert.equal(
        $(tripSummaryDepartingCarryOnLabel.replace('X', parseInt(paxNum) - 1))
          .getText()
          .split(' ')[0],
        '1',
        'Validation failed: Trip summary carry on bag count mismatch for departing flight'
      );
    }
    if (carryOn && segment === 'returning') {
      assert.equal(
        $(tripSummaryDepartingCarryOnLabel.replace('X', parseInt(paxNum) - 1))
          .getText()
          .split(' ')[0],
        '1',
        'Validation failed: Trip summary carry on bag count mismatch for returning flight'
      );
    }
    if (carryOn && segment === 'both') {
      assert.equal(
        $(tripSummaryDepartingCarryOnLabel.replace('X', parseInt(paxNum) - 1))
          .getText()
          .split(' ')[0],
        '1',
        'Validation failed: Trip summary carry on bag count mismatch for departing flight'
      );
      $(
        tripSummaryReturningCarryOnLabel.replace('X', parseInt(paxNum) - 1)
      ).scrollIntoView();
      assert.equal(
        $(tripSummaryReturningCarryOnLabel.replace('X', parseInt(paxNum) - 1))
          .getText()
          .split(' ')[0],
        '1',
        'Validation failed: Trip summary carry on bag count mismatch for returning flight'
      );
    }
  }

  validateTripSummaryCheckedBag(checked, paxNum, segment) {
    if (segment === 'departing') {
      assert.equal(
        $(
          tripSummaryDepartingCheckedBagLabel.replace('X', parseInt(paxNum) - 1)
        )
          .getText()
          .split(' ')[0],
        checked,
        'Validation failed: Trip summary checked bag count mismatch for departing flight'
      );
    }
    if (segment === 'returning') {
      assert.equal(
        $(
          tripSummaryDepartingCheckedBagLabel.replace('X', parseInt(paxNum) - 1)
        )
          .getText()
          .split(' ')[0],
        checked,
        'Validation failed: Trip summary checked bag count mismatch for returning flight'
      );
    }
    if (segment === 'both') {
      assert.equal(
        $(
          tripSummaryDepartingCheckedBagLabel.replace('X', parseInt(paxNum) - 1)
        )
          .getText()
          .split(' ')[0],
        checked,
        'Validation failed: Trip summary checked bag count mismatch for departing flight'
      );
      $(
        tripSummaryReturningCarryOnLabel.replace('X', parseInt(paxNum) - 1)
      ).scrollIntoView();
      assert.equal(
        $(
          tripSummaryReturningCheckedBagLabel.replace('X', parseInt(paxNum) - 1)
        )
          .getText()
          .split(' ')[0],
        checked,
        'Validation failed: Trip summary checked bag count mismatch for returning flight'
      );
    }
  }

  validateTripSummary(ShoppingCart, paxNum, segment) {
    var departTrip;
    var ReturnTrip;
    if (ShoppingCart === 'Priority Access') {
      departTrip = $(
        tripSummaryDepartingPriorityAccessLabel.replace(
          'X',
          parseInt(paxNum) - 1
        )
      ).getText();
      if (segment === 'both') {
        ReturnTrip = $(
          tripSummaryReturningPriorityAccessLabel.replace(
            'X',
            parseInt(paxNum) - 1
          )
        ).getText();
      }
    }
    if (ShoppingCart === 'Pet in cabin') {
      departTrip = $(
        tripSummaryDepartingPetInCabinLabel
          .replace('X', parseInt(paxNum) - 1)
          .trim()
      ).getText();
      if (segment === 'both') {
        ReturnTrip = $(
          tripSummaryReturningPetInCabinLabel
            .replace('X', parseInt(paxNum) - 1)
            .trim()
        ).getText();
      }
    }
    if (segment == 'departing') {
      $(cartTravelersName.replace('X', parseInt(paxNum) - 1)).scrollIntoView();
      assert.equal(
        departTrip,
        ShoppingCart,
        'Validation failed: Trip summary priority access mismatch for departing flight'
      );
    }
    if (segment == 'returning') {
      $(cartTravelersName.replace('X', parseInt(paxNum) - 1)).scrollIntoView();
      assert.equal(
        departTrip,
        ShoppingCart,
        'Validation failed: Trip summary priority access mismatch for returning flight'
      );
    }
    if (segment === 'both') {
      assert.equal(
        departTrip,
        ShoppingCart,
        'Validation failed: Trip summary priority access mismatch for departing flight'
      );
      //$(tripSummaryReturningCarryOnLabel.replace("X", parseInt(paxNum) - 1)).scrollIntoView();

      assert.equal(
        ReturnTrip,
        ShoppingCart,
        'Validation failed: Trip summary priority access mismatch for returning flight'
      );
    }
  }

  validateTripSummaryPetInCabin(petInCabin, paxNum, segment) {
    if (petInCabin && segment === 'departing') {
      assert.equal(
        $(
          tripSummaryDepartingPetInCabinLabel.replace('X', parseInt(paxNum) - 1)
        ).getText(),
        'Pet in Cabin',
        'Validation failed: Trip summary PetInCabin mismatch for departing flight'
      );
    }
    if (petInCabin && segment === 'returning') {
      assert.equal(
        $(
          tripSummaryDepartingPetInCabinLabel.replace('X', parseInt(paxNum) - 1)
        ).getText(),
        'Pet in Cabin',
        'Validation failed: Trip summary PetInCabin mismatch for returning flight'
      );
    }
    if (petInCabin && segment === 'both') {
      assert.equal(
        $(
          tripSummaryDepartingPetInCabinLabel.replace('X', parseInt(paxNum) - 1)
        ).getText(),
        'Pet in Cabin',
        'Validation failed: Trip summary PetInCabin mismatch for departing flight'
      );
      $(
        tripSummaryReturningPetInCabinLabel.replace('X', parseInt(paxNum) - 1)
      ).scrollIntoView();
      assert.equal(
        $(
          tripSummaryReturningPetInCabinLabel.replace('X', parseInt(paxNum) - 1)
        ).getText(),
        'Pet in Cabin',
        'Validation failed: Trip summary PetInCabin mismatch for returning flight'
      );
    }
  }

  validateTripSummaryPriorityAccess(priorityAccess, paxNum, segment) {
    if (priorityAccess && segment === 'departing') {
      assert.equal(
        $(
          tripSummaryDepartingPriorityAccessLabel.replace(
            'X',
            parseInt(paxNum) - 1
          )
        ).getText(),
        'Priority Access',
        'Validation failed: Trip summary priority access mismatch for departing flight'
      );
    }
    if (priorityAccess && segment === 'returning') {
      assert.equal(
        $(
          tripSummaryDepartingPriorityAccessLabel.replace(
            'X',
            parseInt(paxNum) - 1
          )
        ).getText(),
        'Priority Access',
        'Validation failed: Trip summary priority access mismatch for returning flight'
      );
    }
    if (priorityAccess && segment === 'both') {
      assert.equal(
        $(
          tripSummaryDepartingPriorityAccessLabel.replace(
            'X',
            parseInt(paxNum) - 1
          )
        ).getText(),
        'Priority Access',
        'Validation failed: Trip summary priority access mismatch for departing flight'
      );
      $(
        tripSummaryReturningPriorityAccessLabel.replace(
          'X',
          parseInt(paxNum) - 1
        )
      ).scrollIntoView();
      assert.equal(
        $(
          tripSummaryReturningPriorityAccessLabel.replace(
            'X',
            parseInt(paxNum) - 1
          )
        ).getText(),
        'Priority Access',
        'Validation failed: Trip summary priority access mismatch for returning flight'
      );
    }
  }
  validateTripSummaryTripflex(tripflex, paxNum) {
    if (tripflex) {
      $(tripSummaryDepartingTripFlexLabel.replace('X', parseInt(paxNum) - 1)).waitForDisplayed();
      assert.equal(
        $(
          tripSummaryDepartingTripFlexLabel.replace('X', parseInt(paxNum) - 1)
        ).getText(),
        'Trip Flex',
        'Validation failed: Trip summary tripflex mismatch for departing flight'
      );
      //Note: tripflex label is displayed per trip
      // $(
      //   tripSummaryReturningTripFlexLabel.replace('X', parseInt(paxNum) - 1)
      // ).scrollIntoView();
      // assert.equal(
      //   $(
      //     tripSummaryReturningTripFlexLabel.replace('X', parseInt(paxNum) - 1)
      //   ).getText(),
      //   'Trip Flex',
      //   'Validation failed: Trip summary tripflex mismatch for returning flight'
      // );
    }
  }

  validateBundlesSectionButtonLabel(buttonLabel) {
    assert.equal(
      $(cartItemBundlesLink).getText(),
      buttonLabel,
      'Validation failed: Trip summary Bundles section button label mismatch'
    );
  }

  clickContinueButton() {
    try {
      $(heading).waitForDisplayed({timeout: 15000});
      browser.pause(1000);
      $(clickContinueButton).scrollIntoView();
      browser.pause(5000);
      $(clickContinueButton).click();
    } catch (ex) {
      console.log('Hotels page skipped!!!');
    }
  }
  validateHotelsPageAnchorToTop(){
    browser.pause(10000);
    try{
      if($(heading).isDisplayed()===true){
        assert.equal(
          $(heading).isDisplayedInViewport(),
          true,
          'Hotel Page is not anchor to top'
        );
      }
		 browser.pause(1000);
     }catch(ex){
	    console.log('Hotel page skipped');
     }
	do {
			browser.pause(50)
	} while ($(spinnerBar).isDisplayed())
	browser.pause(3000);
  }
  clickNoThanksButton() {
    browser.pause(10000);
    try{
      if($(heading).isDisplayed()===true){
        $(clickNoThanksButton).scrollIntoView();
        $(clickNoThanksButton).waitForDisplayed();
        $(clickNoThanksButton).click();
      }
		 browser.pause(1000);
     }catch(ex){
	    console.log('Hotel page skipped');
     }
	do {
			browser.pause(50)
	} while ($(spinnerBar).isDisplayed())
	browser.pause(3000);
  }
  //   try {
  //     if($(heading).isDisplayed()===true){
  //     $(clickNoThanksButton).waitForDisplayed();
  //     $(clickNoThanksButton).scrollIntoView();
  //     browser.pause(5000);
  //     $(clickNoThanksButton).click();
  //     do {
  //       browser.pause(100);
  //     } while ($(spinnerBar).isDisplayed());
  //     browser.pause(5000);
  //     if ($(clickNoThanksButton).isDisplayed()) {
  //       do {
  //         this.clickNoThanksButton();
  //         browser.pause(500);
  //       } while ($(clickNoThanksButton).isDisplayed());
  //       do {
  //         browser.pause(100);
  //       } while ($(spinnerBar).isDisplayed());
  //     }
  //   }
  //   } catch (ex) {
  //     console.log('Hotel page skipped');
  //   }
  //   browser.pause(2000);
  // }

  validateHotelsPageTitle(title) {
    $(heading).waitForDisplayed();
    assert.equal(
      $(heading).getText(),
      title,
      'Validation failed: Hotel page title mismatch'
    );
  }

  clickoncontinueforHotelPage() {
    this.waitForDisplayed(continueButton);
    this.pause(5000);
    this.clickElement(continueButton);
  }

  waitForHotelResultsPageToLoad() {
    browser.pause(8000);
    if ($(hotelsPageLoadingSpinner).isDisplayed()) {
      this.waitForDisappear(hotelsPageLoadingSpinner, 30000);
      this.waitForDisappear(hotelsPageFetchingHotelsSpinner, 30000);
    } else {
      $(hotelsPageHeadingTitle).waitForDisplayed();
    }
  }

  clickOnNoThanksLink() {
    this.pause(5000);
    this.waitForDisplayed(hotelsPageHeadingTitle);
    this.pause(5000);
    $(noThanksLink).waitForClickable({ timeout: 30000 });
    this.clickElement(noThanksLink);
  }

  clickOnContinueButton() {
    this.pause(5000);
    $(continueButton).waitForClickable({ timeout: 30000 });
    this.clickElement($(continueButton));
  }

  hotelSelection() {
    browser.pause(5000);
    if ($(hotelPageTitle).getTitle() == 'Hotels') {
      console.log('Hotel page displayed');
      this.clickOnNoThanksLink();
    } else {
      console.log('Hotel Page is skipped');
    }
  }

  validateHotelPageIsLoaded() {
    assert.equal(
      $(hotelPageTitle).isDisplayed(),
      true,
      'Hotel page failed to load'
    );
  }

  validateBreadcrumb() {
    assert.equal(
      $(hotelsPageBreadcrumb).isDisplayed(),
      true,
      'Hotels Page Breadcrumb is not displayed'
    );
  }

  searchByPropertyName(propertyName) {
    this.setInputField(hotelsSearchBox, propertyName);
    this.waitToBeClickable(hotelsSearchButton);
    this.pause(1000);
    this.clickElement(hotelsSearchButton);
  }

  enterTheInvalidSearchKeyword(InvalidKeyWord) {
    this.setInputField(hotelsSearchBox, InvalidKeyWord);
    this.pause(5000);
  }

  validateSearchResultsByPropertyName(searchKeyword) {
    // Todo: Assert that the hotels in the results have the searchKeyword
    const featureHotelsSearchResult = "[data-hook='hotels-page-featured-hotel-card_X_name']";
    const hotelsSearchResult = "[data-hook='hotels-page-hotel-card_X_name']";
    browser.pause(2000)
    if($(hotelsSearchResult.replace("X", searchKeyword.toLowerCase())).isDisplayed() || $(featureHotelsSearchResult.replace("X", searchKeyword.toLowerCase())).isDisplayed()){
      assert.isOk(true, `${searchKeyword} hotel is displayed`)
    } else {
      assert.isOk(false, `${searchKeyword} hotel is not displayed`)
    }
  }

  validateNoResultsDisplayed() {
    this.pause(2000);
    assert.equal(
      $(noResultsMessage).isDisplayed(),
      true,
      'Hotels count is not displayed correctly'
    );
  }

  clickHotelsDetailsPageContinueButton() {
    this.waitForDisplayed(hotelDetailsPageContinueButton);
    this.clickElement(hotelDetailsPageContinueButton);
  }

  clickHotelBreadCrumb() {
    this.clickElement(hotelsBreadcrumb);
    this.pause(1000);
  }

  clickRoomsandRateButton() {
    this.pause(5000);
    $(selectHotel).waitForClickable({ timeout: 30000 });
    this.clickElement($(selectHotel));
  }

  clickBookButton() {
    this.pause(2000);
     $(selectRoom).waitForClickable({ timeout: 30000 })
    this.clickElement(selectRoom);
    browser.pause(2000);
  }
  clickRemoveCart() {
    this.pause(2000);
     $(removeRoom).waitForClickable({ timeout: 30000 })
    this.clickElement(removeRoom);
    browser.pause(2000);
  }

  ValidateHotelAddedToCart() {
    this.waitForDisplayed(AddHotelToCart);
    assert.equal(
      $(AddHotelToCart).isDisplayed(),
      true,
      'Added to Cart Message is not displayed'
    );
  }

  validateHotelsPageHeader() {
    this.waitForDisplayed(hotelsPageHeadingTitle, 30000);
    assert.equal(
      $(hotelsPageHeadingTitle).isDisplayed(),
      true,
      'Hotels header is not displayed'
    );
  }

  clickOnSearch() {
    this.pause(3000);
    this.clickElement(hotelsSearchBox);
    this.pause(2000);
  }

  enterTheSearchKeyword(searchKeyword) {
    this.setInputField(hotelsSearchBox, 'Paris');
    this.pause(5000);
  }

  clickOnGoButton() {
    this.clickElement(hotelsSearchButton);
    this.pause(5000);
  }

  validateSearchResult() {
    assert.equal(
      $(hotelsSearchResult).isDisplayed(),
      true,
      'Hotels not displayed as per the Search Criteria'
    );
  }
  validateSearchCount() {
    this.pause(2000);
    const res = $(hotelsSearchCount)
      .getText()
      .split(' ');
    assert(
      res[0] > 0 || res[0] === data.hotelResultOriginalCount,
      'Hotels count is not displayed as per the Search Criteria'
    );
  }

  clearSearchResult() {
    this.clickElement(ClearFilter);
    this.pause(5000);
  }

  validateSearchClear() {
    this.pause(2000);
    const res = $(hotelsSearchCount)
      .getText()
      .split(' ');
    assert(
      res[0] > 0 || res[0] === data.hotelResultOriginalCount,
      'Hotels filter Search Criteria is not cleared'
    );
  }

  validateAddedToCartMessage() {
    this.pause(2000);
    assert.equal(
      $(AddHotelToCart).isDisplayed(),
      false,
      'Added to Cart Message is not displayed correctly'
    );
  }

  validateOnlyFlightDetailsDisplayed() {
    this.pause(1000);
    var cartHeading = $(HeaderCartHeading).getText();
    assert.equal(
      cartHeading,
      'FLIGHTS',
      'Only Flight Details are not selected'
    );
  }

  validateOnlyFlightAndHotelDetailsDisplayed() {
    this.pause(1000);
    var cartHeading1 = $(HeaderCartHeading).getText();
    assert.equal(
      cartHeading1,
      'FLIGHTS + HOTEL',
      'Only Flight and Hotel Details are not selected'
    );
  }

  validateFlightHotelAndCarDetailsDisplayed() {
    this.pause(1000);
    var cartHeading2 = $(HeaderCartHeading).getText();
    assert.equal(
      cartHeading2,
      'FLIGHTS + HOTEL + VEHICLE',
      'Only Flight, Hotel and Car Details are not selected'
    );
  }

  VerifyExpandSelection() {
    this.clickElement(hotelExpandButton);
    this.pause(1000);
  }
  verifyEditHotelButton() {
    this.clickElement(hotelEditLink);
    this.pause(1000);
  }

  validatePropertyCount() {
    $(hotelsSearchCount).waitForDisplayed();
    const hotelsCount = $(hotelsSearchCount).getText().split(' ')[0];
     let hotelsList = $$(hotelCardList).length;
    assert.equal(hotelsCount, hotelsList, 'Hotels Property count displayed is not matching the Total');
  }

  clickMapViewButton() {
    this.pause(10000);
    this.clickElement(hotelsMapViewButton);
    this.pause(10000);
  }

  validateMapZoomViewFunctions() {
    browser.pause(1000);
    $(hotelMapZoomInButton).waitForDisplayed(),
    $(hotelMapZoomInButton).click()
    browser.pause(500);
    $(hotelMapZoomOutButton).waitForDisplayed(),
    $(hotelMapZoomOutButton).click();
  }

  validateMapViewType() {
    browser.pause(1000);
    $(hotelMapTerrainView).waitForDisplayed()
    $(hotelMapTerrainView).click()
    browser.pause(500)
    $(hotelMapSatteliteView).waitForDisplayed()
    $(hotelMapSatteliteView).click();  
  }

  validateMapViewPort() {
    browser.pause(1000);
    $(hotelMapFullScreen).waitForDisplayed();
    $(hotelMapFullScreen).click();
    browser.pause(1000);
    $(hotelMapFullScreen).waitForDisplayed();
    $(hotelMapFullScreen).click();
  }

  clickOnResetAll() {
    this.waitToBeClickable("//button[contains(text(),'Reset')]");
    this.pause(1000);
    this.clickElement("//button[contains(text(),'Reset')]");
    this.pause(10000);
  }

  validateUserInHotelsPage() {
    assert.equal($(heading).isDisplayed(), true, 'User is not in hotels page');
  }

  collectCheckInAndCheckOut() {
    collect('hotelCheckInDateKey', $(checkInDate).getText());
    collect('hotelCheckOutDateKey', $(checkOutDate).getText());
  }

  collectSelectedNameRoom() {
    this.pause(5000);
    collect('hotelRoomNameKey', $(firstRoomName).getText());
    }
  
  collectSelectedHotelName() {
    collect('hotelNameKey', $(hotelDetailsPageHotelName).getText());
  }

  validateDisclaimerText() {
    this.waitForDisplayed(hotelsPageDisclaimer);
    assert.equal(
      $(hotelsPageDisclaimer).isDisplayed(),
      true,
      'Disclaimer Text is displayed'
    );
  }

  clickOnTaxesAndFeesLink() {
    this.waitToBeClickable(hotelsPageDisclaimerFeesLink);
    this.pause(1000);
    this.clickElement(hotelsPageDisclaimerFeesLink);
  }

  validateTaxesAndFeespopup() {
    this.waitForDisplayed(hotelsPageDisclaimerFeesPopup);
    this.pause(1000);
    assert.equal(
      $(hotelsPageDisclaimerFeesPopup).isDisplayed(),
      true,
      'Taxes and Fee popup is displayed'
    );
  }

  clickOnTermsAndConditionsLink() {
    this.waitToBeClickable(hotelsPageDisclaimerTermsLink);
    this.pause(1000);
    this.clickElement(hotelsPageDisclaimerTermsLink);
  }

  validateTermsAndConditionspopup() {
    this.waitForDisplayed(hotelsPageDisclaimerTermsPopup);
    this.pause(1000);
    assert.equal(
      $(hotelsPageDisclaimerTermsPopup).isDisplayed(),
      true,
      'Terms and Condition popup is displayed'
    );
  }
  clickOnBackToResults() {
    browser.pause(4000);
    this.waitToBeClickable(backToResults, 10000);
    $(backToResults).scrollIntoView();
    this.clickElement(backToResults);
  }
  validateCurrentHotelLabel() {
    this.waitForDisplayed(currentHotelLabel);
    this.pause(1000);
    assert.equal(
      $(currentHotelLabel).isDisplayed(),
      true,
      'Current Hotel Label is not displayed'
    );
  }
  clickOnRemoveSelection() {
    this.waitForHotelResultsPageToLoad();
    this.waitForDisplayed(removeSelection);
    this.pause(1000);
    this.clickElement(removeSelection);
  }
  clickOnCart() {
    this.pause(2000);
    this.clickElement(cartButton);
  }
  validateHotelNotInCart() {
    this.pause(2000);
    assert.equal(
      $(hotelContentInCart).isDisplayed(),
      false,
      'selected hotel is present in cart after removing selection'
    );
  }

  clickOnPriceLowToHigh() {
    $(hotelsPageFetchingHotelsSpinner).waitForDisplayed({ reverse: true });
    $(priceLowToHighLink).waitForDisplayed();
    browser.pause(1500)
    $(priceLowToHighLink).click();
    $(hotelsPageLoadingSpinner).waitForDisplayed({ reverse: true });
    $(priceLowToHighLink).waitForDisplayed();
    browser.pause(1500)
    $(priceLowToHighLink).click();
    $(hotelsPageLoadingSpinner).waitForDisplayed({ reverse: true });
  }

  selectFirstNonFeaturedHotel() {
    $(hotelsPageLoadingSpinner).waitForDisplayed({ reverse: true });
    $$(roomsAndRatesButtonList)[0].waitForDisplayed();
    $$(roomsAndRatesButtonList)[0].scrollIntoView({
      block: 'center',
      inline: 'start',
    });
    browser.pause(3000)
    $$(roomsAndRatesButtonList)[0].click();
    browser.pause(15000)
    $(hotelsDetailsSpinner).waitForDisplayed({ reverse: true });
  }

  selectFirstRoom() {
    $(selectRoom).waitForDisplayed();
    $(selectRoom).click();
    $(roomPodSpinner).waitForDisplayed({ reverse: true });
  }

  clickNoThanksButtonFromHotelDetails() {
    $(noThanksButtonFromHotelDetails).scrollIntoView({
      block: 'center',
      inline: 'start',
    });
    browser.pause(1500)
    $(noThanksButtonFromHotelDetails).click();
  }

  validateFlightAndHotelPrice() {
    var expHeaderCartValue = $(headerCartValue)
      .getText()
      .split('$')[1];
    assert.equal(
      expHeaderCartValue,
      hotelValue,
      'Only Flight and Hotel price is not available in the cart'
    );
  }

  validateRoomPrice() {
    hotelValue = $(hotelRoomTotalPackagePrice)
      .getText()
      .split('$')[1];
  }

  validateFlightPrice() {
    this.clickElement(cartButton);
    flightValue = $(headerCartValue)
      .getText()
      .split('$')[1];
  }

  clickViewBreakdown() {
    this.clickElement(hotelRoomViewBreakdownLink);
  }

  clickViewBreakdownCloseButton() {
    this.clickElement(hotelRoomClosePopup);
  }

  ValidateHotelsPageSkipped() {
    this.pause(5000);
    if($(hotelsPageHeadingTitle).isDisplayed()) {
      assert.isOk(false, 'Hoteks page is not skipped');
    } else {
      $(carsPageHeading).waitForDisplayed()
      assert.isOk(true, 'Hoteks page is skipped');
    }
    // if ($(carsPageHeading).isDisplayed()) {
    //   assert.(
    //     $(carsPageHeading).isDisplayed(),
    //     'Hotels Page is not skipped'
    //   );
    // } else {
    //   this.waitForDisplayed("//img[contains(@alt,'closeIcon')]", 5000);
    //   $("//img[contains(@alt,'closeIcon')]").click();
    //   console.log(
    //     $("//span[contains(text(),'Review & Payment')]").isDisplayed()
    //   );
    //   assert.equal(
    //     $("//span[contains(text(),'Review & Payment')]").isDisplayed(),
    //     true,
    //     'Hotels Page is not skipped'
    //   );
    // }
  }

  clickCustomizeStayDates() {
    this.pause(5000);
    this.waitToBeClickable(hotelResultsCustomizeDate, 15000);
    this.clickElement(hotelResultsCustomizeDate);
  }

  selectCheckInDate(checkInDate) {
    this.pause(1000);
    this.clickElement(clickOnCheckInCalendar);
    this.clickElement(this.getDynamicDate(checkInDate));
  }

  getDynamicDate(number) {
    return `//button[@data-hook='hotels-date-picker_calendar-0_select-day-${number}' and contains(@aria-hidden,'false') ]`;
  }

  getTripCheckInDate() {
    this.pause(1000);
    const pick = new Date($(tripDurationCheckInDate).getText());
    return pick.getDate();
  }

  clickOnUpdateButton() {
    this.pause(2000);
    this.clickElement(clickOnCheckInCalendar);
    this.pause(1000);
    this.clickElement(clickOnCheckInCalendar);
    this.waitToBeClickable(hotelUpdateButton, 5000);
    this.clickElement(hotelUpdateButton);
    $(selectHotel).waitForClickable({ timeout: 30000 });
  }

  clickOnHeaderCartButton() {
    this.clickElement(headerCartButton);
  }

  getValueUpliftBannerHotelResultsPage() {
    $(hotelResultsUpliftBannerDescription).waitForDisplayed();
    browser.pause(2000);
    return $(hotelResultsUpliftBannerDescription)
      .getText()
      .split('$')[1]
      .split(' ')[0];
  }

  validateUpliftBannerIsDisplayedHotelPages() {
    $(hotelUpliftBanner).waitForDisplayed();
    assert.isTrue(
      $(hotelUpliftBanner).isDisplayed(),
      'The Uplift banner is not displayed on Hotel Results page'
    );
  }

  validateUpliftBannerDescriptionHotelResultsPage(description) {
    let upliftValue = this.getValueUpliftBannerHotelResultsPage();
    let upliftDescription = description.replace('XX', upliftValue);
    $(hotelResultsUpliftBannerDescription).waitForDisplayed();
    browser.pause(1000)
    let hotelFirstDescription = $(hotelResultsUpliftBannerFirstDescription).getText()
    let hotelPriceDescription = $(hotelResultsUpliftBannerPriceDescription).getText()
    assert.equal(
      `${hotelFirstDescription} ${hotelPriceDescription}`,
      upliftDescription,
      'The Uplift banner description is not correctly on Hotel Results page'
    );
  }

  validateUpliftBannerLogoHotelResultsPage() {
    $(hotelResultsUpliftBannerLogo).waitForDisplayed();
    assert.isTrue(
      $(hotelResultsUpliftBannerLogo).isDisplayed(),
      'The Uplift banner logo is not displayed on Hotel Results page'
    );
  }

  getValueUpliftBannerHotelDetailsPage() {
    $(hotelDetailsUpliftBannerDescription).waitForDisplayed();
    browser.pause(4000)
    return $(hotelDetailsUpliftBannerDescription)
      .getText()
      .split('$')[1]
      .split(' ')[0];
  }

  validateUpliftBannerDescriptionHotelDetailsPage(description) {
    let upliftValue = this.getValueUpliftBannerHotelDetailsPage();
    let upliftDescription = description.replace('XX', upliftValue);
    $(hotelDetailsUpliftBannerDescription).waitForDisplayed();
    browser.pause(1000)
    let hotelFirstDescription = $(hotelDetailsUpliftBannerFirstDescription).getText()
    let hotelPriceDescription = $(hotelDetailsUpliftBannerPriceDescription).getText()
    assert.equal(
      `${hotelFirstDescription} ${hotelPriceDescription}`,
      upliftDescription,
      'The Uplift banner description is not correctly on Hotel Details page'
    );
  }

  collectUpliftBannerValueHotelResultsPage() {
    collect(
      'upliftBannerValueHotelResultsKey',
      this.getValueUpliftBannerHotelResultsPage()
    );
  }

  collectUpliftBannerValueHotelDetailsPage() {
    collect(
      'upliftBannerValueHotelDetailsKey',
      this.getValueUpliftBannerHotelDetailsPage()
    );
  }

  validateUpliftBannerLogoHotelDetailsPage() {
    $(hotelDetailsUpliftBannerLogo).waitForDisplayed();
    assert.isTrue(
      $(hotelDetailsUpliftBannerLogo).isDisplayed(),
      'The Uplift banner logo is not displayed on Hotel Details page'
    );
  }

  clickHotelRating() {
    this.pause(5000);
    $(hotelsStarRatingFilterLabel).waitForDisplayed();
    $(hotelsStarRatingFilterLabel).click();
    $(hotelsStarsFilterLabelList).waitForDisplayed();
  }
  clickHotelPricePerNight() {
    this.pause(5000);
    $(hotelsPricePerNightFilterLabel).waitForDisplayed();
    $(hotelsPricePerNightFilterLabel).click();
  }
  clickHotelAmenities() {
    this.pause(5000);
    $(hotelsAmenitiesLabel).waitForDisplayed();
    $(hotelsAmenitiesLabel).click();
  }
  clickHotelNearby(){
    this.pause(5000);
    $(hotelsNearbyLabel).waitForDisplayed();
    $(hotelsNearbyLabel).click();
  }
  clickHotelNeighborhood(){
    this.pause(5000);
    $(hotelsNeighborhoodLabel).waitForDisplayed();
    $(hotelsNeighborhoodLabel).click();
  }


  clickUpliftBannerHotelResults() {
    $(hotelResultsUpliftBannerDescription).waitForDisplayed();
    $(hotelResultsUpliftBannerDescription).click();
    let iFrame = $(upliftPopupIFrame);
    browser.switchToFrame(iFrame);
    $(upliftModal).waitForDisplayed();
  }
  clickUpliftBannerHotelDetails() {
    $(hotelDetailsUpliftBannerDescription).waitForDisplayed();
    browser.pause(1000)
    $(hotelDetailsUpliftBannerDescription).click();
    let iFrame = $(upliftPopupIFrame);
    browser.switchToFrame(iFrame);
    $(upliftModal).waitForDisplayed();
  }
  
  validateUpliftBannerPopupIsDisplayed() {
    $(upliftModal).waitForDisplayed();
    $(upliftSubheaderContent).waitForDisplayed();
  }

  getValueUpliftModal() {
    $(upliftSubheaderContent).waitForDisplayed();
    return $(upliftSubheaderContent).getText().split("$")[1].split("/")[0];
  }

  validateUpliftValueBannerAndPopupHotelResults() {
    let upliftValueCollected = getValueCollectorMap(
      'upliftBannerValueHotelResultsKey'
    );
    let upliftModalValue = this.getValueUpliftModal()
    assert.equal(upliftModalValue, upliftValueCollected, "Uplift banner value is not matching with Uplift modal value on Hotel Results page")
  }

  validateUpliftValueBannerAndPopupHotelDetails() {
    let upliftValueCollected = getValueCollectorMap(
      'upliftBannerValueHotelDetailsKey'
    );
    let upliftModalValue = this.getValueUpliftModal()
    assert.equal(upliftModalValue, upliftValueCollected, "Uplift banner value is not matching with Uplift modal value on Hotel Details page")
  }

  waitSpinnerToDisappearHotelResults() {
     $(hotelsPageFetchingHotelsSpinner).waitForDisplayed({reverse: true}); 
  }

  getActualRoomsCount() {
     let roomsNumber =  $(customizeRoomsCount).getText();
     return parseInt(roomsNumber); 
  }

  selectHotelRoomsCount(hotelRoomsCount) {
     $(customizeRoomsCount).waitForDisplayed();
     $(customizeRoomsCount).click();
     let roomsValue = roomsNr.replace("X", hotelRoomsCount);
     $(roomsValue).waitForDisplayed();
     $(roomsValue).click();  
  }

  clickUpdateCustomizeHotelStayButton() {
    $(hotelUpdateButton).waitForDisplayed();
    $(hotelUpdateButton).waitForClickable();
    $(hotelUpdateButton).click();
    $(hotelsPageFetchingHotelsSpinner).waitForDisplayed({ reverse: true });
  }

  validateUpliftBannerValueIsDifferentThanCollectedValue() {
    let upliftBannerCollectedValue = getValueCollectorMap('upliftBannerValueHotelResultsKey');
    let upliftActualBannerValue = this.getValueUpliftBannerHotelResultsPage();
    assert.notEqual(upliftActualBannerValue, upliftBannerCollectedValue, "Uplift rate from the banner is NOT updated on Hotel Results page after changing the stay dates or number of rooms.")
  }

  validateUpliftHotelDetailsValueIsHigherThanTheHotelResultsValue() {
    let upliftDetailsValue = parseFloat(this.getValueUpliftBannerHotelDetailsPage());
    let upliftResultsValue = parseFloat(getValueCollectorMap('upliftBannerValueHotelResultsKey'));
    assert.isTrue(upliftDetailsValue > upliftResultsValue, "Hotel Detalis value is NOT higher than Hotel Results value after selecting the most expensive hotel room")
  }
 
  clickHotelGalleryIcon() {
    $(showImageGalleryIconsList).waitForDisplayed();
    $(showImageGalleryIconsList).waitForClickable();
    $(showImageGalleryIconsList).click();
  }  

  validateImageGalleryAltTextIsDisplayed() {
    $(imageGalleryPopupHeader).waitForDisplayed();
    assert.isTrue(
      $(imageGalleryAltText).isDisplayed(),
      'The image gallery alt text is not displayed'
    )
  }
  clickListOrMapView(view) {
    if (view === "Map View"){
    $(hotelsMapViewButton).waitForDisplayed();
    $(hotelsMapViewButton).waitForClickable();
    $(hotelsMapViewButton).click()
    }
    else if (view === "List View"){
    $(hotelsListViewButton).waitForDisplayed();
    $(hotelsListViewButton).waitForClickable();
    $(hotelsListViewButton).click()
    }
  }  
  clickSortByOption(SortBy){
    $(hotelsPricePerNightFilterLabel).scrollIntoView();
    if (SortBy === "Most Popular"){
      $(mostPropularLink).waitForDisplayed();
      $(mostPropularLink).waitForClickable();
      $(mostPropularLink).click()
      }
  else if (SortBy === "Price (Low to High)"){
      $(priceLowToHighLink).waitForDisplayed();
      $(priceLowToHighLink).waitForClickable();
      $(priceLowToHighLink).click()
      }
   else if(SortBy === "Name (A-Z)"){
      $(nameAtoZLink).waitForDisplayed();
      $(nameAtoZLink).waitForClickable();
      $(nameAtoZLink).click()
        }
  }
  clickHotelRatingOption(hotelRating){
    if(hotelRating === "5Star"){
      $(hotels5StarRatingButton).waitForDisplayed();
      $(hotels5StarRatingButton).waitForClickable();
      $(hotels5StarRatingButton).click()
    
    }
   else if(hotelRating === "4Star"){
    $(hotels4StarRatingButton).waitForDisplayed();
    $(hotels4StarRatingButton).waitForClickable();
      $(hotels4StarRatingButton).click()
    }
    else if(hotelRating === "3Star"){
      $(hotels3StarRatingButton).waitForDisplayed();
      $(hotels3StarRatingButton).waitForClickable();
      $(hotels3StarRatingButton).click()
    }
    else if(hotelRating === "2Star"){
      $(hotels2StarRatingButton).waitForDisplayed();
      $(hotels2StarRatingButton).waitForClickable();
      $(hotels2StarRatingButton).click()
    }
    else if(hotelRating === "1Star"){
      $(hotels1StarRatingButton).waitForDisplayed();
      $(hotels1StarRatingButton).waitForClickable();
      $(hotels1StarRatingButton).click()
    }
  }
  clickPricePerNightOption(PricePerNight){
    if(PricePerNight === "Less than $75"){
      $(hotelsPricePerNightLessThan$75).waitForDisplayed();
      $(hotelsPricePerNightLessThan$75).waitForClickable();
      $(hotelsPricePerNightLessThan$75).click()
    
    }
   else if(PricePerNight === "$75 to $125"){
    $(hotelsPricePerNight$75To$125).waitForDisplayed();
    $(hotelsPricePerNight$75To$125).waitForClickable();
    $(hotelsPricePerNight$75To$125).click()
    }
    else if(PricePerNight === "$125 to $200"){
      $(hotelsPricePerNight$125To$200).waitForDisplayed();
      $(hotelsPricePerNight$125To$200).waitForClickable();
      $(hotelsPricePerNight$125To$200).click()
    }
    else if(PricePerNight === "$200 +"){
      $(hotelsPricePerNightGreterThan$200).waitForDisplayed();
      $(hotelsPricePerNightGreterThan$200).waitForClickable();
      $(hotelsPricePerNightGreterThan$200).click()
    }
  }
  clickAmenitiesOption(Amenities){
    if(Amenities === "Free Internet"){
      $(hotelsAmenitiesFreeInternet).waitForDisplayed();
      $(hotelsAmenitiesFreeInternet).waitForClickable();
      $(hotelsAmenitiesFreeInternet).click()
    
    }
   else if(Amenities === "Free Parking"){
    $(hotelsAmenitiesFreeParking).waitForDisplayed();
    $(hotelsAmenitiesFreeParking).waitForClickable();
    $(hotelsAmenitiesFreeParking).click()
    }
    else if(Amenities === "Airport Shuttle"){
      $(hotelsAmenitiesAirportShuttle).waitForDisplayed();
      $(hotelsAmenitiesAirportShuttle).waitForClickable();
      $(hotelsAmenitiesAirportShuttle).click()
    }
    else if(Amenities === "Business Center"){
      $(hotelsAmenitiesBussinessCenter).waitForDisplayed();
      $(hotelsAmenitiesBussinessCenter).waitForClickable();
      $(hotelsAmenitiesBussinessCenter).click()
    }
    else if(Amenities === "Fitness Center"){
      $(hotelsAmenitiesFitnessCenter).waitForDisplayed();
      $(hotelsAmenitiesFitnessCenter).waitForClickable();
      $(hotelsAmenitiesFitnessCenter).click()
    }
    else if(Amenities === "Pets Allowed"){
      $(hotelsAmenitiesPetAllowed).waitForDisplayed();
      $(hotelsAmenitiesPetAllowed).waitForClickable();
      $(hotelsAmenitiesPetAllowed).click()
    }
    else if(Amenities === "Swimming Pool"){
      $(hotelsAmenitiesSwimmingPool).waitForDisplayed();
      $(hotelsAmenitiesSwimmingPool).waitForClickable();
      $(hotelsAmenitiesSwimmingPool).click()
    }
    else if(Amenities === "No Smoking Rooms"){
      $(hotelsAmenitiesNoSmokingRoom).waitForDisplayed();
      $(hotelsAmenitiesNoSmokingRoom).waitForClickable();
      $(hotelsAmenitiesNoSmokingRoom).click()
    }
    else if(Amenities === "Handicap/Accessibility"){
      $(hotelsAmenitiesHandicapAccessibility).waitForDisplayed();
      $(hotelsAmenitiesHandicapAccessibility).waitForClickable();
      $(hotelsAmenitiesHandicapAccessibility).click()
    }
  }
  clickNearbyOption(Nearby){
    if(Nearby === "UNLV/Thomas & Mack Center"){
      $(hotelsNearbyUNLVCenter).waitForDisplayed();
      $(hotelsNearbyUNLVCenter).waitForClickable();
      $(hotelsNearbyUNLVCenter).click()
    
    }
   else if(Nearby === "Fremont Street Experience/Downtown"){
    $(hotelsNearbyForementStreet).waitForDisplayed();
    $(hotelsNearbyForementStreet).waitForClickable();
    $(hotelsNearbyForementStreet).click()
    }
    else if(Nearby === "T-Mobile Arena"){
      $(hotelsNearbyTMobileArena).waitForDisplayed();
      $(hotelsNearbyTMobileArena).waitForClickable();
      $(hotelsNearbyTMobileArena).click()
    }
  }
  clickNeighborhoodOption(Neighborhood){
    if(Neighborhood === "Las Vegas Strip"){
      $(hotelsNeighborhoodLasVegasStrip).waitForDisplayed();
      $(hotelsNeighborhoodLasVegasStrip).waitForClickable();
      $(hotelsNeighborhoodLasVegasStrip).click()
    
    }
   else if(Neighborhood === "Downtown Las Vegas"){
    $(hotelsNeighborhoodDowntownLasVegas).waitForDisplayed();
    $(hotelsNeighborhoodDowntownLasVegas).waitForClickable();
    $(hotelsNeighborhoodDowntownLasVegas).click()
    }
    else if(Neighborhood === "Neighboring Las Vegas Strip Area"){
      $(hotelsNeighborhoodLasVegasStripArea).waitForDisplayed();
      $(hotelsNeighborhoodLasVegasStripArea).waitForClickable();
      $(hotelsNeighborhoodLasVegasStripArea).click()
    }
  }
  clickHotelImage(){
    this.waitToBeClickable(hotelImage);
    this.clickElement(hotelImage); 
  }
  clickHotelMap(){
    this.waitToBeClickable(hotelMap);
    this.clickElement(hotelMap); 
  }
  clickDisclaimerLink(disclaimer){
    if(disclaimer === "Taxes,carrier charges,&government fees"){
      $(hotelsPageDisclaimerFeesLink).waitForDisplayed();
      $(hotelsPageDisclaimerFeesLink).waitForClickable();
      $(hotelsPageDisclaimerFeesLink).click()
    
    }
   else if(disclaimer === "See Terms"){
    $(hotelsPageDisclaimerTermsLink).waitForDisplayed();
    $(hotelsPageDisclaimerTermsLink).waitForClickable();
    $(hotelsPageDisclaimerTermsLink).click()
    }
  }
  clickHotelsBackToResult(){
    $(hotelsBackToResult).waitForDisplayed();
    $(hotelsBackToResult).waitForClickable();
    $(hotelsBackToResult).click()
  }
  clickHoteDetailslMap(){
    $(hotelDetailsMap).waitForDisplayed();
    $(hotelDetailsMap).waitForClickable();
    $(hotelDetailsMap).click()
  }
  clickInformationLink(information){
    if(information === "Rooms & Rates"){
      $(hotelDetailsRoomAndRate).waitForDisplayed();
      $(hotelDetailsRoomAndRate).waitForClickable();
      $(hotelDetailsRoomAndRate).click()
    
    }
   else if(information === "Hotel Information"){
    $(hotelDetailsHotelINformation).waitForDisplayed();
    $(hotelDetailsHotelINformation).waitForClickable();
    $(hotelDetailsHotelINformation).click()
    }
  }
  clickHoteDetailslViewBreakdownLink(){
    $(hotelDetailsViewBreakdown).waitForDisplayed();
    $(hotelDetailsViewBreakdown).waitForClickable();
    $(hotelDetailsViewBreakdown).click()
  }
  clickHoteDetailsMoreRoomInformation(){
    $(hotelDetailsMoreRoomInformation).waitForDisplayed();
    $(hotelDetailsMoreRoomInformation).waitForClickable();
    $(hotelDetailsMoreRoomInformation).click()
  }
  clickHoteRoomImage(){
    this.waitToBeClickable(hotelRoomImage);
    this.clickElement(hotelRoomImage); 
  }
  clickHotelsUpliftLink(){
    $(hotelResultsUpliftBannerDescription).waitForDisplayed();
    $(hotelResultsUpliftBannerDescription).waitForClickable();
    $(hotelResultsUpliftBannerDescription).click();
  }
  clickHotelsUpliftLogo(){
    $(hotelResultsUpliftBannerLogo).waitForDisplayed();
    $(hotelResultsUpliftBannerLogo).waitForClickable();
    $(hotelResultsUpliftBannerLogo).click();
  }
  clickHotelsDetailsUpliftLink(){
   
    $(hotelDetailsUpliftBannerDescription).waitForDisplayed();
    $(hotelDetailsUpliftBannerDescription).waitForClickable();
    $(hotelDetailsUpliftBannerDescription).click();
  }
  clickHotelsDetailsUpliftLogo(){
    $(hotelDetailsUpliftBannerLogo).waitForDisplayed();
    $(hotelDetailsUpliftBannerLogo).waitForClickable();
    $(hotelDetailsUpliftBannerLogo).click();
  }

  clickNoThankslinkHotelResults() {
    browser.pause(4000);
    $(noThanksLinkHotelResultsPage).waitForDisplayed();
    $(noThanksLinkHotelResultsPage).click();
    browser.pause(1500)
  }
  validateSortByLabel(){
      assert.equal(
        $(sortByLabel).getText(),
        'Sort By',
        'Validation failed: Sort By Label is not showing'
      );
  }
  validateSortList(){
    assert.equal(
      $(mostPropularLink).getText(),
      'Most Popular',
      'Validation failed: Most Popular sort Option is not showing'
    );
    assert.equal(
      $(nameAtoZLink).getText(),
      'Name (A–Z)',
      'Validation failed: Name (A–Z) sort Option is not showing'
    );
    assert.equal(
      $(priceLowToHighLink).getText(),
      'Price (Low to High)',
      'Validation failed: Price (Low to High) sort Option is not showing'
    );
  }
  validateDefaultSortListOption(){
    assert.include(
      $(mostPropularLink).getAttribute("data-hook"),'desc_active',
      'Most Propular link is not selected as default'
    );
  }

  selectMaxRoomsCount() {
    browser.pause(2000)
    $(hotelResultsCustomizeDate).waitForDisplayed()
    $(hotelResultsCustomizeDate).scrollIntoView({
      block: 'center',
      inline: 'start',
    });
    $(hotelResultsCustomizeDate).click();
    $(customizeRoomsCount).waitForDisplayed()
    $(customizeRoomsCount).click()
    browser.pause(2000)
    let maxRoomCount = $$(hotelsRoomCountSelect).length - 1
    $$(hotelsRoomCountSelect)[maxRoomCount].click()
    $(hotelUpdateButton).waitForDisplayed();
    $(hotelUpdateButton).click();
    $(hotelsPageLoadingSpinner).waitForDisplayed({ reverse: true });
  }

  clickHotelDetailsViewBreakdownLink(propertyName){
    $(viewBreakdownHotelTheCosmopolitanOfLasVegas).waitForDisplayed();
    $(viewBreakdownHotelTheCosmopolitanOfLasVegas).click();
  }

  validateViewBreakdownPopupIsDisplayed(propertyName){
    $(viewBreakdownPopUpHeader).waitForDisplayed();
    assert.equal($(viewBreakdownPopUpHeader).isDisplayed(), true, 'View breakdown popup is not displayed');
    assert.equal($(viewBreakdownPopUpHeader).getText(), propertyName, 'View breakdown popup header is invalid');    
  }

  validateViewBreakdownHotelNameHeaderIsDisplayed(propertyName){
    $(viewBreakdownPopUpHeader).waitForDisplayed();
    assert.equal($(viewBreakdownPopUpHeader).getText(), propertyName, 'View breakdown popup header is invalid');
  }

  validatePromoLabelPromoAppliedStatusAndCheckMarkIsDisplayed(){
    $(viewBreakdownPopUpHeader).waitForDisplayed();
    assert.equal($(viewBreakdownPopUpPromoLabel).isDisplayed(), true, 'View breakdown popup promo label is not displayed');
    assert.equal($(viewBreakdownPopUpPromoLabelAppliedLabel).isDisplayed(), true, 'View breakdown popup promo applied label is not displayed');
    assert.equal($(viewBreakdownPopUpPromoCheckMarkImg).isDisplayed(), true, 'View breakdown popup promo check mark is not displayed');
  }

  validateViewBreakdownPopUpPackageItemsLabelIsDisplayed(packageItems){
    $(viewBreakdownPopUpHeader).waitForDisplayed();
    assert.equal($(viewBreakdownPopUpPackageItemsLabel).isDisplayed(), true, 'View breakdown popup package items label is not displayed');
    assert.equal($(viewBreakdownPopUpPackageItemsPriceValue).isDisplayed(), true, 'View breakdown popup package items price label is not displayed');
    assert.equal($(viewBreakdownPopUpPackageItemsLabel).getText(), packageItems, 'View breakdown popup package items are not displayed accurately');
  }

  validateViewBreakdownPopUpTaxesLabelAndTaxValueIsDisplayed(){
    $(viewBreakdownPopUpHeader).waitForDisplayed();
    assert.equal($(viewBreakdownPopUpTaxesLabel).isDisplayed(), true, 'View breakdown popup taxes label is not displayed');
    assert.equal($(viewBreakdownPopUpTaxesValue).isDisplayed(), true, 'View breakdown popup taxes amount is not displayed');
  }

  validateViewBreakdownPopupTotalPackageLabelAndAmountIsDisplayed(){
    $(viewBreakdownPopUpHeader).waitForDisplayed();
    assert.equal($(viewBreakdownPopUpTotalPackagePriceLabel).isDisplayed(), true, 'View breakdown popup total package price label is not displayed');
    assert.equal($(viewBreakdownPopUpTotalPackagePriceValue).isDisplayed(), true, 'View breakdown popup total package price amount is not displayed');
  }

  validateViewBreakdownPopupRoomsAndRatesButtonIsDisplayed(){
    $(viewBreakdownPopUpHeader).waitForDisplayed();
    assert.equal($(viewBreakdownPopUpRoomsAndRatesButton).isDisplayed(), true, 'View breakdown popup Rooms and Rates button is not displayed');
  }

  validateViewBreakdownPopupCrossMarkButtonIsDisplayed(){
    $(viewBreakdownPopUpHeader).waitForDisplayed();
    assert.equal($(viewBreakdownPopUpCrossIcon).isDisplayed(), true, 'View breakdown popup cross button is not displayed to close the popup');
    $(viewBreakdownPopUpCrossIcon).click();
    assert.equal($(viewBreakdownPopUpHeader).isDisplayed(), false, 'View breakdown popup is not closed');
  }

  clickRoomsAndRatesButtonOnViewBreakdownPopup(){
    $(viewBreakdownPopUpHeader).waitForDisplayed();
    $(viewBreakdownPopUpRoomsAndRatesButton).click();
  }

  validateHotelDetailsPageIsDisplayed(){
    browser.pause(2000);
    $(hotelDetailsPageBackToResults).waitForDisplayed();
    assert.equal($(hotelDetailsPageBackToResults).isDisplayed(), true, 'Hotel details page is not displayed');
  }

  validateHotelCardPackagePriceIsDisplayed(propertyName){
    browser.pause(2000);
    assert.equal($(hotelsCardPackagePrice).isDisplayed(), true, "Hotel package price is not displayed on hotel card");
  }

  validateHotelCardPriceSuffixIsDisplayedAndContainsAccuratePackageDetails(packageItems){
    browser.pause(2000);
    assert.equal($(hotelsCardPackagePriceSuffix).isDisplayed(), true, "Hotel package price suffix is not displayed on hotel card");
    
    assert.include($(hotelsCardPackagePriceSuffix).getText(),
    packageItems,
    'Suffix does not contain expected package items');

    assert.include($(hotelsCardPackagePriceSuffix).getText(),
    $(hotelsCardPackagePrice).getText(),
    'Suffix does not contain package amount');
  }

  collectRoomPackagePrice() {
    collect('hotelRoomPackagePriceKey', $(firstRoomPod).$(firstRoomPodPrice).getText());
  }

  validateHotelCardDisplaysLowestPackagePrice(){
    let hotelCardPackagePriceDisplayValue = $(hotelsCardPackagePrice).getText();
    let hotelRoomPackagePriceDisplayValue = getValueCollectorMap('hotelRoomPackagePriceKey');

    assert.equal(hotelCardPackagePriceDisplayValue, hotelRoomPackagePriceDisplayValue, 'Hotel package price is not the lowest price');
  }

}
export default new HotelsPage();