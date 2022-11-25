import { Page, Actions } from '@g4/prova';
import { assert } from 'chai';
import { collect } from '@g4/prova/src/helpers/collector';
import { firstName, lastName } from '../generic/pageobjects/FillTravelersDetails.js';
import { bundleItems } from '../pageobjects/BundlesPage.js';
import { seatIdDepart, seatPriceDepart, seatIdReturn, seatPriceReturn } from '../pageobjects/SeatPage.js'

const bagElements = {
	bagPageTitle: '//title',
	bagPageContinue: "[data-hook='ancillaries-page_continue-popup']",
	noBagContinue: "[data-hook='ancillaries-continue-popup_button_continue']",
  };
  
  const supportBagElements = {
	lithiumBattery: "[data-hook='prohibited-items-icon-label_lithium-battery']",
  };
  
const carryonBagCurrentValueSeg1 = "(//input[@data-hook='ancillaries-page-traveler_X_carry-on'])[1]"
const carryonBagCurrentValueSeg2 = "(//input[@data-hook='ancillaries-page-traveler_X_carry-on'])[2]"
const carryOnBag = "(//button[contains(@data-hook,'ancillaries-page-traveler_X_carry-on')])[1]";
const carryOnBagSeg2 = "(//div[contains(@data-hook,'ancillaries-page-traveler_X_carry-on')])[2]";
const carryOnDecrementButtonSeg1 = "(//button[@data-hook='ancillaries-page-traveler_X_carry-on_decrement'])[1]";
const carryOnDecrementButtonSeg2 = "(//button[@data-hook='ancillaries-page-traveler_X_carry-on_decrement'])[2]";
const carryOnIncrementButtonSeg1 = "(//button[@data-hook='ancillaries-page-traveler_X_carry-on_increment'])[1]";
const carryOnIncrementButtonSeg2 = "(//button[@data-hook='ancillaries-page-traveler_X_carry-on_increment'])[2]";
const carryOnIncluded = "[data-hook='ancillaries-page-carry-on_included']";
const checkedBagIncluded = "[data-hook='ancillaries-page-checked-bag_included']";
const checkedDecrementButtonSeg1 = "(//button[@data-hook='ancillaries-page-traveler_X_checked-in_decrement'])[1]"
const checkedDecrementButtonSeg2 = "(//button[@data-hook='ancillaries-page-traveler_X_checked-in_decrement'])[2]"
const checkedIncrementButtonSeg1 = "(//button[@data-hook='ancillaries-page-traveler_X_checked-in_increment'])[1]"
const checkedIncrementButtonSeg2 = "(//button[@data-hook='ancillaries-page-traveler_X_checked-in_increment'])[2]"
const personalItemIncluded = "[data-hook='ancillaries-page-personal-item_included']"
const sameOptionsForAllFlight = "//label[contains(@data-hook,'ancillaries-page-clone-options-checkbox_label')]";
const flightLegCheckboxLabel = "(//span[@data-hook='extras-popup-flight-leg_checkbox-label'])";
const clickContinueButtonPopup = "[data-hook = 'ancillaries-continue-popup_button_continue']"
const clickContinueButton = "//button[@data-hook='ancillaries-page_continue']| //button[@data-hook='ancillaries-page_continue-popup']";
const hotelPageHeading = "[data-hook='hotels-page_page-heading']"
const originAiport = "[data-hook='header-flight-info_origin']"
const destinationAiport = "[data-hook='header-flight-info_destination']"
const bagsPageLabel = "[data-hook='flights-breadcrumb_item-bags']";
const bagsPagePrimaryTitle = "[data-hook='ancillaries-page_page-heading']";
const bagsPageSecondaryTitle = "//span[contains(text(),'Save money by booking your baggage with your flight now')]"
const spinnerBar = "//span[contains(@class,'Spinner')]"
const holdOnAncilariesPopup = "//span[contains(@class,'AncilariesPopup')]//span"
const continueButtonSelectBagsPopupButton = "//button[@data-hook='ancillaries-continue-popup_button_select-bags']"
const bagsGridTitle = "(//span[@data-hook='ancillaries-page-subheader_flight'])[X]"
const travelersNameInBagsGrid = "(//span[@data-hook='ancillaries-page-traveler_X_label'])[Y]"
const travelerIncludedLabelSubTotal = "//span[contains(@data-hook,'ancillaries-page-traveler_')][contains(text(),'Included')]"
const ancillariesPageTotalPrice = "[data-hook='ancillaries-page-total-price']"
const tripflexDescription = "//span[@data-hook='trip-flex-card_description-1']"
const tripflexTitle = "//span[@data-hook='trip-flex-card_title']"
const tripFlexAddToCart = "[data-hook='trip-flex-card_add-to-cart']";
const tripFlexAdded = "[data-hook='trip-flex-card_cart-added']";
const tripFlexShopingCart = "//span[contains(@data-hook,'trip-flex_label')]"
const tripFlexPriceShopingCart = "//span[contains(@data-hook,'trip-flex_price')]"
const tripFlexPriceOneTimeInShopingCart = "[data-hook='cart-travelers_0_extras_trip-flex_price']"
const tripFlexRemove = "//button[contains(@data-hook,'trip-flex-card_remove')]"
const tripFlexIncluded = "//div[@data-hook='trip-flex-card']//span[@data-hook='extra-included-in-bundle']"
const tripFlexPriceUnselected = "[data-hook='trip-flex-card_price-unselected']";
const priorityBoardingDescription = "[data-hook='priority-boarding-card_description-1']";
const priorityBoardingTotalBundleBanner = "//div[@data-hook='priority-boarding-card']//div[@data-hook='bundle-header-image_allegiant-total-bundle-image']"
const priorityBoardingTotalBundleIncluded = "//div[@data-hook='priority-boarding-card']//span[@data-hook='extra-included-in-bundle']"
const priorityBoardingModalAddToCart = "//button[@data-hook='priority-boarding-modal_add-to-cart']"
const priorityBoardingAdded = "[data-hook='priority-boarding-card_cart-added']";
const priorityBoardingAddToCart = "[data-hook='priority-boarding-card_add-to-cart']";
const priorityBoardingModal = "[data-hook='priority-boarding-modal']";
const priorityBoardingCardEdit = "//button[@data-hook='priority-boarding-card_edit']"
const priorityBoardingCardRemove = "//button[@data-hook='priority-boarding-card_remove']"
const priorityBoardingSegTitle = "(//span[@data-hook='extras-popup-flight-leg_title']//span)[X]"
const priorityBoardingTitle = "//span[@data-hook='priority-boarding-card_title']"
const priorityBoardingModalTitle = "[data-hook='priority-boarding-modal_title']"
const priorityBoardingModalDescription = "[data-hook='priority-boarding-modal_description']"
const priorityBoardingModalCloseButton = "[data-hook='priority-boarding-modal_close']";
const priorityAccessPriceUnselected = "[data-hook='priority-boarding-card_price-unselected']"
const petInCabinAddToCart = "[data-hook='pet-in-cabin-card_add-to-cart']";
const petInCabinModalAddToCart = "//button[@data-hook='pet-in-cabin-modal_add-to-cart']"
const petInCabinAdded = "[data-hook='pet-in-cabin-card_cart-added']";
const petInCabinModal = "[data-hook='pet-in-cabin-modal']";
const petInCabinTitle = "//span[@data-hook='pet-in-cabin-card_title']"
const petInCabinDescription = "//span[@data-hook='pet-in-cabin-card_description-1']"
const petInCabinDefaultPrice = "//span[contains(@data-hook,'pet-in-cabin-card_price')]"
const petInCabinModalTitle = "//span[@data-hook='pet-in-cabin-modal_title']"
const petInCabinModalDescription = "//span[@data-hook='pet-in-cabin-modal_description']"
const petInCabinModalCloseButton = "//button[@data-hook='pet-in-cabin-modal_close']"
const petInCabinCardEdit = "//button[@data-hook='pet-in-cabin-card_edit']"
const petInCabinCardSegTitle = "(//span[@data-hook='extras-popup-flight-leg_title']//span)[X]"
const petInCabinCardRemove = "//button[@data-hook='pet-in-cabin-card_remove']"
const petInCabinPriceUnselected = "[data-hook='pet-in-cabin-card_price-unselected']"
const bonusBundleBannerAncillaries = "[data-hook='ancillaries-page-bundle-banner_allegiant-bonus-bundle_image']"
const bonusBundleBannerTripflex = "//div[@data-hook='trip-flex-card']//div[@data-hook='bundle-header-image_allegiant-bonus-bundle-image']"
const bonusBundleBannerPriorityBoarding = "//div[@data-hook='priority-boarding-card']//div[@data-hook='bundle-header-image_allegiant-bonus-bundle-image']"
const totalBundleBannerAncillaries = "[data-hook='ancillaries-page-bundle-banner_allegiant-total-bundle_image']"
const totalBundleBannerTripflex = "//div[@data-hook='trip-flex-card']//div[@data-hook='bundle-header-image_allegiant-total-bundle-image']"
const totalBundleBannerPriorityBoarding = "//div[@data-hook='priority-boarding-card']//div[@data-hook='bundle-header-image_allegiant-total-bundle-image']"
const prohibitedSectionTitle = "[data-hook='prohibited-items-title']"
const prohibitedSectionNoteHeader = "[data-hook='prohibited-items-note-header']"
const prohibitedSectionNoteText = "[data-hook='prohibited-items-note-text']"
const prohibitedSectionAgreementText = "[data-hook='prohibited-items-note-agreement-text']"
const prohibitedSectionLithiumBattery = "[data-hook='prohibited-items-icon-label_lithium-battery']"
const prohibitedSectionExplosives = "[data-hook='prohibited-items-icon-label_explosives']"
const prohibitedSectionAerosol = "[data-hook='prohibited-items-icon-label_aerosol']"
const prohibitedSectionFlammables = "[data-hook='prohibited-items-icon-label_flammables']"
const prohibitedSectionOxidisers = "[data-hook='prohibited-items-icon-label_oxidisers']"
const prohibitedSectionToxins = "[data-hook='prohibited-items-icon-label_toxins']"
const prohibitedSectionCorrosives = "[data-hook='prohibited-items-icon-label_corrosives']"
const prohibitedSectionEcigarettes = "[data-hook='prohibited-items-icon-label_e-cigarettes']"
const prohibitedSectionshowDetailsLink = "//button[@data-hook='prohibited-items-note-link']"
const prohibitedPopup = "[data-hook='prohibited-items-popup']";
const prohibitedPopupTitle = "[data-hook='prohibited-items-popup_title']"
const prohibitedSectionPopupContent = "//div[@data-hook='prohibited-items-popup_content']//div//ol"
const prohibitedSectionPopupFullContent = "[data-hook='prohibited-items-popup_content']"
const tripSummaryDepartingSeatPrice = "[data-hook='cart-travelers_X_seats_seat_departing_price']"
const tripSummaryReturningSeatPrice = "[data-hook='cart-travelers_X_seats_seat_returning_price']"
const tripSummaryDepartingSeat = "[data-hook='cart-travelers_X_seats_seat_departing_label']"
const tripSummaryReturningSeat = "[data-hook='cart-travelers_X_seats_seat_returning_label']"
const baggagePolicyLink = "[data-hook='ancillaries-page-baggage-policy-notice-button']"
const baggagePolicyPopup = "[data-hook='ancillaries-page-baggage-policy-notice-popup']"
const baggagePolicyTitle = "[data-hook='ancillaries-page-baggage-policy-notice-popup_title']"
const baggagePolicyNotice = "//span[@data-hook='ancillaries-page-baggage-policy-notice']"
const baggagePolicyPopupContent = "[data-hook='ancillaries-page-baggage-policy-notice-popup_content']"
const baggagePolicyPopupCloseButton = "[data-hook='ancillaries-page-baggage-policy-notice-popup_close']"
const baggagePolicyPopupTitleOne = "//strong[contains(text(),'Checked and Carry-On Baggage Fees and Allowances:')]"
const baggagePolicyPopupTitleTwo = "//strong[contains(text(),'Save money by reserving your checked and carry-on')]"
const baggagePolicyPopupTitleThree = "//strong[contains(text(),'Airport Bag Fees')]"
const baggagePolicyPopupTitleFour = "//strong[contains(text(),'Weight and Size Requirements')]"
const baggagePolicyPopupTitleFive = "//strong[contains(text(),'Cabin Bags')]"
const baggagePolicyPopupBulletinTextOne = "//li[contains(text(),'Overweight Bags: between 41 and 70 pounds (18.6-31')]"
const baggagePolicyPopupBulletinTextTwo = "//li[contains(text(),'Overweight Bags: between 71 and 99 pounds (32.2-45')]"
const baggagePolicyPopupBulletinTextThree = "//li[contains(text(),'Oversized Checked Bag:')]"
const baggagePolicyPopupCabinBagsBulletinTextOne = "//li[contains(text(),'Personal Item. The one (1) Personal Item such as a')]"
const baggagePolicyPopupCabinBagsBulletinTextTwo = "//li[contains(text(),'Carry-on Bag. The one (1) Carry-on Bag, such as a')]"
const baggagePolicyPopupCabinBagsBulletinBoldText = "//strong[contains(text(),'There is no charge for one Personal Item, provided')]"
const baggagePolicyPopupAirportBagFeesText = "//p[contains(text(),'Airport bag fees apply to bag fees paid at the air')]"
const tripSummaryDepartingPriorityAccessLabel ="(//span[@data-hook='cart-travelers_X_extras_priority-access_label'])[1]"
const tripSummaryReturningPriorityAccessLabel ="(//span[@data-hook='cart-travelers_X_extras_priority-access_label'])[2]"
const tripSummaryDepartingPetInCabinLabel ="(//span[@data-hook='cart-travelers_X_extras_pet-in-cabin'])[1]"
const tripSummaryReturningPetInCabinLabel ="(//span[@data-hook='cart-travelers_X_extras_pet-in-cabin'])[2]"
const cartTravelersName ="[data-hook='cart-travelers_X_name']"
const addToCartAndReselectSeats ="//span[contains(text(),'Add to cart and reselect seats')]"
const petInCabinReselectSeatsMessage ="//span[contains(text(),'A pet is')]"
const individualCarryOnBagPrice = "[data-hook='ancillaries-page-carry-on_price']";
const individualCheckedBagPrice = "[data-hook='ancillaries-page-checked-bag_price']";
const slider="[data-hook='extras-carousel-marker_slide-X']"
const indicatorContainer ="//div[contains(@class,'AncillariesExtras__IndicatorContainer')]"
const extraTitle="[data-hook='extras-title']"
const useSameOptionForAllFlight="//label[@data-hook='ancillaries-page-clone-options-checkbox_label']//div[contains(@class,'Checkbox')]"
const selectBagsNow ="[data-hook='ancillaries-continue-popup_button_select-bags']"
const continuePopupButtonContinue ="[data-hook='ancillaries-continue-popup_button_continue']"
const carryOnPrice ="(//span[@data-hook='ancillaries-page-carry-on_price']|//span[@data-hook='cart-travelers_0_bags_carry-on_price'])[X]"
const checkedbagPrice ="(//span[@data-hook='cart-travelers_0_bags_checked-bag_price']|//span[@data-hook='ancillaries-page-checked-bag_price'])[X]"
const checkedBagCount = "[data-hook='ancillaries-page-traveler_0_checked-in']";
const checkedBagsFirstBagText = "[data-hook='ancillaries-page-checked-bag_per-bag-label']";
const travelerCount ="[data-hook='header-flight-info_seated']"

var BagsPageCollector = new Map();
class BagsPage extends Page {
	validateBagsPageAnchorToTop(){
		browser.pause(5000);	
		assert.equal(
			$(bagsPagePrimaryTitle).isDisplayedInViewport(),
			true,
			'Bags Page is not anchor to top'
		);
	}
	validateBagPageIsLoaded(BagPageTitle) {
		$(supportBagElements.lithiumBattery).scrollIntoView();
		$(bagElements.bagPageContinue).waitForDisplayed({ timeout: 5000 });
		assert.equal(
		  $(bagElements.bagPageTitle).getTitle(),
		  BagPageTitle,
		  'Bag selection page failed to load'
		);
	  }
	
	  clickBagPageContinue(){
		this.clickElement($(bagElements.bagPageContinue));
		console.log('Bag page continue button is clicked');
	  }
	
	  noClickBagContinue(){
		$(bagElements.noBagContinue).waitForDisplayed({ timeout: 5000 });
		this.clickElement($(bagElements.noBagContinue));
	  }

	validateBagsLabel(BagsPageLabel) {
		assert.equal(
			$(bagsPageLabel).getText(),
			BagsPageLabel,
			'Bags page failed to load'
		);
	}

	validateBagsPagePrimaryTitle(BagsPagePrimaryTitle) {
		do {
			browser.pause(10)
		} while ($(spinnerBar).isDisplayed())
		assert.equal(
			$(bagsPagePrimaryTitle).getText(),
			BagsPagePrimaryTitle,
			'Bags page primary title not displayed in booking path'
		);
	}

	selectCarryOn(paxNum, segment) {
		$(carryOnIncrementButtonSeg1.replace("X", paxNum - 1)).waitForDisplayed()
		browser.pause(2000)			
		if (segment === "both") {
			do {
				$(carryOnIncrementButtonSeg1.replace("X", paxNum - 1)).click()
			} while (parseInt($(carryonBagCurrentValueSeg1.replace("X", paxNum - 1)).getText()) < 1)
		}
		if (segment === "departing") {
			$(sameOptionsForAllFlight).click();
			do {
				$(carryOnIncrementButtonSeg1.replace("X", paxNum - 1)).click()
			} while (parseInt($(carryonBagCurrentValueSeg1.replace("X", paxNum - 1)).getText()) < 1)
		}
		if (segment === "returning") {
			$(sameOptionsForAllFlight).click();
			do {
				$(carryOnIncrementButtonSeg2.replace("X", paxNum - 1)).click()
			} while (parseInt($(carryonBagCurrentValueSeg2.replace("X", paxNum - 1)).getText()) < 1)
		}
		BagsPageCollector.set('carryOnPrice',$(carryOnPrice.replace("X",1)).getText().split("$")[1])	
	}
    removeCarryOn(paxNum, segment) {
	if (segment === "both") {
			do {
				$(carryOnDecrementButtonSeg1.replace("X", paxNum - 1)).click()
			} while (parseInt($(carryonBagCurrentValueSeg1.replace("X", paxNum - 1)).getText()) < 1)
		}
		if (segment === "departing") {
			$(sameOptionsForAllFlight).click();
			do {
				$(carryOnDecrementButtonSeg1.replace("X", paxNum - 1)).click()
			} while (parseInt($(carryonBagCurrentValueSeg1.replace("X", paxNum - 1)).getText()) < 1)
		}
		if (segment === "returning") {
			$(sameOptionsForAllFlight).click();
			do {
				$(carryOnDecrementButtonSeg2.replace("X", paxNum - 1)).click()
			} while (parseInt($(carryonBagCurrentValueSeg2.replace("X", paxNum - 1)).getText()) < 1)
		}
    }
	validateBagsPageSecondaryTitle(BagsPageSecondaryTitle) {
		assert.equal(
			$(bagsPageSecondaryTitle).getText(),
			BagsPageSecondaryTitle,
			'Bags page secondary title not displayed in booking path'
		);
	}

	selectCheckedBag(checked, paxNum, segment) {
		if (segment === "both") {
			for (var i = 0; i < checked; i++) {
				$(checkedIncrementButtonSeg1.replace("X", paxNum - 1)).click()
			}
		}
		if (segment === "departing") {
			if (!$(sameOptionsForAllFlight).isSelected()) {
				for (var i = 0; i < checked; i++) {
					$(checkedIncrementButtonSeg1.replace("X", paxNum - 1)).click()
				}
			}
			else {
				$(sameOptionsForAllFlight).click();
				for (var i = 0; i < checked; i++) {
					$(checkedIncrementButtonSeg1.replace("X", paxNum - 1)).click()
				}
			}
		}
		if (segment === "returning") {
			if (!$(sameOptionsForAllFlight).isSelected()) {
				for (var i = 0; i < checked; i++) {
					$(checkedIncrementButtonSeg2.replace("X", paxNum - 1)).click()
				}
			}
			else {
				$(sameOptionsForAllFlight).click();
				for (var i = 0; i < checked; i++) {
					$(checkedIncrementButtonSeg2.replace("X", paxNum - 1)).click()
				}
			}
		}
		BagsPageCollector.set('checkedBagPrice',$(checkedbagPrice.replace("X",1)).getText().split("$")[1])
	}
    removeCheckedBag(checked, paxNum, segment) {
	if (segment === "both") {
			for (var i = 0; i < checked; i++) {
				$(checkedDecrementButtonSeg1.replace("X", paxNum - 1)).click()
			}
		}
		if (segment === "departing") {
			if (!$(sameOptionsForAllFlight).isSelected()) {
				for (var i = 0; i < checked; i++) {
					$(checkedDecrementButtonSeg1.replace("X", paxNum - 1)).click()
				}
			}
			else {
				$(sameOptionsForAllFlight).click();
				for (var i = 0; i < checked; i++) {
					$(checkedDecrementButtonSeg1.replace("X", paxNum - 1)).click()
				}
			}
		}
		if (segment === "returning") {
			if (!$(sameOptionsForAllFlight).isSelected()) {
				for (var i = 0; i < checked; i++) {
					$(checkedDecrementButtonSeg2.replace("X", paxNum - 1)).click()
				}
			}
			else {
				$(sameOptionsForAllFlight).click();
				for (var i = 0; i < checked; i++) {
					$(checkedDecrementButtonSeg2.replace("X", paxNum - 1)).click()
				}
			}
		}
    }
	selectPriorityAccess(priorityAccess, paxNum, segment) {
		if (priorityAccess) {
			$(priorityBoardingAddToCart).click();
			var pb = browser.$$(flightLegCheckboxLabel);
			console.log("pb: " + pb.length)
			if ($(priorityBoardingModal).isDisplayed()) {
				if (segment === "both") {
					if(paxNum==="all"){
					for (var i = 0; i < (pb.length / 2); i++) {						
							pb[i].click();						
					}
					for (var i = (pb.length / 2); i < pb.length; i++) {						
							pb[i].click();						
					} 	
					}else{
						for (var i = 0; i < (pb.length / 2); i++) {
						if (paxNum === i) {
							pb[i].click();
						}
					}
					for (var i = (pb.length / 2); i < pb.length; i++) {
						if ((pb.length / 2) + paxNum === i) {
							pb[i].click();
						}
					} 
					}
					if(!$(priorityBoardingModalAddToCart).isClickable()){
					pb[(pb.length / 2) - 1].click();
					pb[(pb.length / 2)].click();
					}
				}
				if (segment === "departing"){
					if(paxNum==="all"){
					for (var i = 0; i < (pb.length / 2); i++) {
							pb[i].click();	
							break;
					}									
					}else{
					for (var i = 0; i < (pb.length / 2); i++) {
						if (parseInt(paxNum) === i) {
							pb[i].click();
						}
					}	
					}
					if(!$(priorityBoardingModalAddToCart).isClickable()){
					pb[(pb.length / 2) - 1].click(); 	
					}
				}
				if (segment === "returning") {
					if(paxNum==="all"){
					for (var i = (pb.length / 2); i < pb.length; i++) {						
							pb[i].click();						
					}						
				}
					else{
					for (var i = (pb.length / 2); i < pb.length; i++) {
						if ((pb.length / 2) + paxNum === i) {
							pb[i].click();
						}
					}	
				}
				if(!$(priorityBoardingModalAddToCart).isClickable()){
					pb[(pb.length / 2)].click();
					}					 
				}
				$(priorityBoardingModalAddToCart).click();
				do {
					browser.pause(10)
				} while ($(spinnerBar).isDisplayed())
				$(priorityBoardingAdded).waitForDisplayed();
			}
		}
	}
    removePriorityBoarding(){
	$(priorityBoardingCardRemove).click();
			do {
				browser.pause(5)
			} while ($(spinnerBar).isDisplayed())
    }
	selectPetInCabin(petInCabin, paxNum, segment) {
		if (petInCabin) {
			$(petInCabinAddToCart).click();
			var PETC = browser.$$(flightLegCheckboxLabel);
			console.log("PETC: " + PETC.length)
			if ($(petInCabinModal).isDisplayed()) {
				if (segment === "both") {
					for (var i = 0; i < (PETC.length / 2); i++) {
						if (parseInt(paxNum) - 1 === i) {
							PETC[i].click();
						}
					}
				}
				if (segment === "departing") {
					for (var i = 0; i < PETC.length; i++) {
						if (parseInt(paxNum) - 1 === i) {
							PETC[i].click();
						}
						if (((PETC.length / 2) + parseInt(paxNum)) - 1 === i) {
							PETC[i].click();
						}
					}
				}
				if (segment === "returning") {
					for (var i = 0; i < PETC.length; i++) {
						if (((PETC.length / 2) + parseInt(paxNum)) - 1 === i) {
							PETC[i].click();
						}
					}
				}
				$(petInCabinModalAddToCart).click();
				do {
					browser.pause(100)
				} while ($(spinnerBar).isDisplayed())
				//$(petInCabinAdded).waitForDisplayed();
			}
		}
	}
     removePETC(){
	   $(petInCabinCardRemove).click();
       do {
		  browser.pause(10)
	     } while ($(spinnerBar).isDisplayed())
     }
	selectTripflex(tripflex) {
		do {
			browser.pause(100)
		} while ($(spinnerBar).isDisplayed())
		if (tripflex==="true") {
			$(extraTitle).scrollIntoView()
			browser.pause(500)
			if($(indicatorContainer).isDisplayed()){				
				$(slider.replace("X",2)).click();
				browser.pause(500)
			}
			$(tripFlexAddToCart).click();
			do {
				browser.pause(100)
			} while ($(spinnerBar).isDisplayed())
			$(tripFlexAdded).waitForDisplayed()
		}
	}
    removeTripFlex(){
	$(tripFlexRemove).click();
			do {
				browser.pause(10)
			} while ($(spinnerBar).isDisplayed())
    }
	clickContinueButton() {
		$(clickContinueButton).click();
		do {
				browser.pause(10)
			} while ($(spinnerBar).isDisplayed())
		//$(hotelPageHeading).waitForDisplayed();
	}
	clickContinueButtonWithOutBags() {				
		$(clickContinueButton).click();
		if($(clickContinueButtonPopup).isClickable()){
			browser.pause(1000)
			$(clickContinueButtonPopup).click();
		}	
		do {
				browser.pause(10)
		} while ($(spinnerBar).isDisplayed())	
		browser.pause(2000);
	 }
	
	validatePriorityAccessCard(priorityAccessCard) {
		assert.equal(
			$(priorityBoardingAdded).getText(),
			priorityAccessCard,
			'Validation failed: ADDED TO CART msg not displayed on priority access card'
		);
	}
	validatePetInCabinCard(AddedToCart) {
		assert.equal(
			$(petInCabinAdded).getText(),
			AddedToCart,
			'Validation failed: ADDED TO CART msg not displayed on pet in cabin card'
		);
	}
	validateRemoveButtonInTripFlexCard(remove) {
		assert.equal(
			$(tripFlexRemove).getText(),
			remove,
			'Validation failed: Remove button not displayed on trip flex card'
		);
	}
	validateTripflexCard(AddedToCart) {
		do {
			browser.pause(5)
		} while ($(spinnerBar).isDisplayed())
		assert.equal(
			$(tripFlexAdded).getText(),
			AddedToCart,
			'Validation failed: ADDED TO CART msg not displayed on Tripflex card'
		);
	}
	clickEditOrRemovePriorityAccess(buttonLabel) {
		do {
			browser.pause(5)
		} while ($(spinnerBar).isDisplayed())
		if (buttonLabel === "Edit") {
			$(priorityBoardingCardEdit).click();
		}
		else {
			$(priorityBoardingCardRemove).click();
			do {
				browser.pause(5)
			} while ($(spinnerBar).isDisplayed())
		}
	}
	clickEditOrRemovePetInCabin(buttonLabel) {
		do {
			browser.pause(10)
		} while ($(spinnerBar).isDisplayed())
		if (buttonLabel === "Edit") {
			$(petInCabinCardEdit).click();
		}
		else {
			$(petInCabinCardRemove).click();
			do {
				browser.pause(5)
			} while ($(spinnerBar).isDisplayed())
		}
	}
	clickRemoveTripflex(buttonLabel) {
		if (buttonLabel === "Remove") {
			$(tripFlexRemove).waitForDisplayed();
			$(tripFlexRemove).click();
		}
		do {
			browser.pause(5)
		} while ($(spinnerBar).isDisplayed())
	}
	modifyPriorityAccess(modifyPaxNum, modifySeg) {
		var pb = browser.$$(flightLegCheckboxLabel);
		console.log("pb: " + pb.length)
		if ($(priorityBoardingModal).isDisplayed()) {
			if (modifySeg === "both") {
				/*for (var i = 0; i < (pb.length / 2); i++) {
					if (paxNum === i) {
						pb[i].click();
					}
				}
				for (var i = (pb.length / 2); i < pb.length; i++) {
					if ((pb.length / 2) + paxNum === i) {
						pb[i].click();
					}
				} commented till bug is fixed */
				pb[(pb.length / 2) - 1].click();
				pb[(pb.length / 2)].click();
			}
			if (modifySeg === "departing") {
				/*for (var i = 0; i < (pb.length / 2); i++) {
					if (parseInt(paxNum) === i) {
						pb[i].click();
					}
				} commented till bug is fixed*/
				pb[(pb.length / 2) - 1].click();
			}
			if (modifySeg === "returning") {
				/*for (var i = (pb.length / 2); i < pb.length; i++) {
					if ((pb.length / 2) + paxNum === i) {
						pb[i].click();
					}
				} commented till bug is fixed*/
				pb[(pb.length / 2)].click();
			}
			$(priorityBoardingModalAddToCart).click();
			do {
				browser.pause(10)
			} while ($(spinnerBar).isDisplayed())
			$(priorityBoardingAdded).waitForDisplayed();
		}
	}

	validatePriorityAccessModification(modifyPaxNum, modifySeg) {
		var pb = browser.$$(flightLegCheckboxLabel);
		console.log("pb: " + pb.length)
		if ($(priorityBoardingModal).isDisplayed()) {
			if (modifySeg === "both") {
				assert.equal(
					pb[(pb.length / 2) - 1].isSelected(),
					false,
					'Validation failed: departing seg is not modified'
				)
				assert.equal(
					pb[(pb.length / 2)].isSelected(),
					true,
					'Validation failed: returning seg is not modified'
				)
			}
			if (modifySeg === "departing") {
				assert.equal(
					pb[(pb.length / 2) - 1].isSelected(),
					true,
					'Validation failed: departing seg is not modified'
				)
			}
			if (modifySeg === "returning") {
				assert.equal(
					pb[(pb.length / 2)].isSelected(),
					false,
					'Validation failed: returning seg is not modified'
				)
			}
			$(priorityBoardingModalAddToCart).click();
			do {
				browser.pause(10)
			} while ($(spinnerBar).isDisplayed())
			$(priorityBoardingAdded).waitForDisplayed();
		}
	}
	modifyPetInCabin(modifyPaxNum, modifySeg) {
		var PETC = browser.$$(flightLegCheckboxLabel);
		console.log("PETC: " + PETC.length)
		if ($(petInCabinModal).isDisplayed()) {
			if (modifySeg === "both") {
				for (var i = 0; i < (PETC.length / 2); i++) {
					if (parseInt(modifyPaxNum) - 1 === i) {
						PETC[i].click();
					}
				}
			}
			if (modifySeg === "departing") {
				for (var i = 0; i < PETC.length; i++) {
					if (parseInt(modifyPaxNum) - 1 === i) {
						PETC[i].click();
					}
				}
			}
			if (modifySeg === "returning") {
				for (var i = 0; i < PETC.length; i++) {
					if (((PETC.length / 2) + parseInt(modifyPaxNum)) - 1 === i) {
						PETC[i].click();
					}
				}
			}
			$(petInCabinModalAddToCart).click();
			do {
				browser.pause(10)
			} while ($(spinnerBar).isDisplayed())
			$(petInCabinAdded).waitForDisplayed();
		}
	}
	validatePetInCabinModification(modifyPaxNum, modifySeg) {
		var PETC = browser.$$(flightLegCheckboxLabel);
		console.log("PETC: " + PETC.length)
		if ($(petInCabinModal).isDisplayed()) {
			if (modifySeg === "both") {
				assert.equal(
					PETC[parseInt(modifyPaxNum) - 1].isSelected(),
					false,
					'Validation failed: departing seg is not modified'
				)
				assert.equal(
					PETC[(PETC.length / 2) + parseInt(modifyPaxNum) - 1].isSelected(),
					true,
					'Validation failed: returning seg is not modified'
				)
			}
			if (modifySeg === "departing") {
				assert.equal(
					PETC[parseInt(modifyPaxNum) - 1].isSelected(),
					false,
					'Validation failed: departing seg is not modified'
				)
			}
			if (modifySeg === "returning") {
				assert.equal(
					PETC[(PETC.length / 2) + parseInt(modifyPaxNum) - 1].isSelected(),
					true,
					'Validation failed: returning seg is not modified'
				)
			}
			$(petInCabinModalAddToCart).click();
			do {
				browser.pause(10)
			} while ($(spinnerBar).isDisplayed())
			$(petInCabinAdded).waitForDisplayed();
		}
	}
	validatePriorityAccessIsRemoved() {
		assert.equal(
			$(priorityBoardingAdded).isDisplayed(),
			false,
			'Validation failed: ADDED TO CART msg should not be displayed on priority access card'
		);
	}
	validateTripflexIsRemoved() {
		assert.equal(
			$(tripFlexAdded).isDisplayed(),
			false,
			'Validation failed: ADDED TO CART msg should not be displayed on Tripflex card'
		);
	}
validateTripSummary(ShoppingCart, paxNum, segment) {
		var departTrip
		var ReturnTrip
		if (ShoppingCart === "Priority Access") {
			departTrip = $(tripSummaryDepartingPriorityAccessLabel.replace("X", parseInt(paxNum) - 1)).getText()
			if (segment === "both") {
				ReturnTrip = $(tripSummaryReturningPriorityAccessLabel.replace("X", parseInt(paxNum) - 1)).getText()
			}
		}
		if (ShoppingCart === "Pet in Cabin") {
			departTrip = $(tripSummaryDepartingPetInCabinLabel.replace("X", parseInt(paxNum) - 1).trim()).getText()
			if (segment === "both") {
				ReturnTrip = $(tripSummaryReturningPetInCabinLabel.replace("X", parseInt(paxNum) - 1).trim()).getText()
			}
		}
		if (segment == "departing") {
			$(cartTravelersName.replace("X", parseInt(paxNum) - 1)).scrollIntoView();
			assert.equal(
				departTrip,
				ShoppingCart,
				'Validation failed: Trip summary priority access mismatch for departing flight'
			)
		}
		if (segment == "returning") {
			$(cartTravelersName.replace("X", parseInt(paxNum) - 1)).scrollIntoView();
			assert.equal(
				departTrip,
				ShoppingCart,
				'Validation failed: Trip summary priority access mismatch for returning flight'
			)
		}
		if (segment === "both") {
			assert.equal(
				departTrip,
				ShoppingCart,
				'Validation failed: Trip summary priority access mismatch for departing flight'
			)
			//$(tripSummaryReturningCarryOnLabel.replace("X", parseInt(paxNum) - 1)).scrollIntoView();

			assert.equal(
				ReturnTrip,
				ShoppingCart,
				'Validation failed: Trip summary priority access mismatch for returning flight'
			)
		}
	}
	validatePetInCabinIsRemoved() {
		assert.equal(
			$(petInCabinAdded).isDisplayed(),
			false,
			'Validation failed: ADDED TO CART msg should not be displayed on PetInCabin card'
		);
	}
	validatePriorityAccessPopupSegTitles(seg1, seg2) {
		$(priorityBoardingCardEdit).click();
		assert.equal(
			$(priorityBoardingSegTitle.replace("X", 1)).getText().split(" ")[0],
			seg1,
			'Validation failed: Priority access popup 1st Segment titles mismatch'
		);
		assert.equal(
			$(priorityBoardingSegTitle.replace("X", 2)).getText().split(" ")[0],
			seg2,
			'Validation failed: Priority access popup 2nd Segment titles mismatch'
		);
		$(priorityBoardingModalAddToCart).click();
	}

	validatePetInCabinPopupSegTitles(seg1, seg2) {
		$(petInCabinCardEdit).click();
		assert.equal(
			$(petInCabinCardSegTitle.replace("X", 1)).getText().split(" ")[0],
			seg1,
			'Validation failed: Priority access popup 1st Segment titles mismatch'
		);
		assert.equal(
			$(petInCabinCardSegTitle.replace("X", 2)).getText().split(" ")[0],
			seg2,
			'Validation failed: Priority access popup 2nd Segment titles mismatch'
		);
		$(petInCabinModalAddToCart).click();
	}
	validateHoldOnAncilariesPopupMessage(message) {
		assert.equal(
			$(holdOnAncilariesPopup).getText(),
			message,
			'Validation failed: Hold on ancilaries popup message mismatch'
		);
		$(continueButtonSelectBagsPopupButton).click()
	}

	validateBagsGridTitle(seg1, seg2) {
		$(sameOptionsForAllFlight).click()
		assert.equal(
			$(bagsGridTitle.replace("X", 1)).getText().split(" ")[0],
			seg1,
			'Validation failed: Hold on ancilaries popup message mismatch'
		);
		assert.equal(
			$(bagsGridTitle.replace("X", 2)).getText().split(" ")[0],
			seg2,
			'Validation failed: Hold on ancilaries popup message mismatch'
		);
	}

	validateTravelerNames() {
		var FirstName = firstName.split("|")
		var LastName = lastName.split("|")
		for (var i = 0; i < FirstName.length; i++) {
			var expectedName = FirstName[i] + " " + LastName[i].slice(0, 1) + "."
			assert.equal(
				$(travelersNameInBagsGrid.replace("X", i).replace("Y", 1)).getText().slice(11).trim(),
				expectedName.trim(),
				'Validation failed: Mismatch in traveler name in Bags grid departing segment'
			)
			assert.equal(
				$(travelersNameInBagsGrid.replace("X", i).replace("Y", 2)).getText().slice(11).trim(),
				expectedName.trim(),
				'Validation failed: Mismatch in traveler name in Bags grid returning segment'
			)
		}
	}

	validatePriorityAccessTitle(title) {
		assert.equal(
			$(priorityBoardingTitle).getText(),
			title,
			'Validation failed: Mismatch in priority access title'
		)
	}

	validatePriorityAccessButtonLabel(buttonLabel) {
		assert.equal(
			$(priorityBoardingAddToCart).getText(),
			buttonLabel,
			'Validation failed: Mismatch in priority Boarding AddToCart buttonLabel'
		)
	}

	validatePriorityAccessDescription(description) {
		assert.equal(
			$(priorityBoardingDescription).getText(),
			description,
			'Validation failed: Mismatch in priority Boarding Description'
		)
	}

	validatePriorityAccessBundleBanner(bundleType) {
		if (bundleType === "Allegiant Total Bundle") {
			assert.equal(
				$(priorityBoardingTotalBundleBanner).isDisplayed(),
				true,
				'Validation failed: Allegiant Total Bundle banner in priority Boarding is not displayed'
			)
		}
	}
	validatePriorityAccessIncludedLabel(message) {
		assert.equal(
			$(priorityBoardingTotalBundleIncluded).getText(),
			message,
			'Validation failed: INCLUDED message is not displayed for Allegiant Total Bundle priority Boarding'
		)
	}

	validateFreePersonalItemLabel(message) {
		assert.equal(
			$(personalItemIncluded).getText(),
			message,
			'Validation failed: INCLUDED message is not displayed for Allegiant Total Bundle personal item included'
		)
	}
	validateFreeCarryOnLabel(message) {
		assert.equal(
			$(carryOnIncluded).getText(),
			message,
			'Validation failed: INCLUDED message is not displayed for Allegiant Total Bundle carry on included'
		)
	}
	validateFreeCheckedBagLabel(message) {
		assert.equal(
			$(checkedBagIncluded).getText(),
			message,
			'Validation failed: INCLUDED message is not displayed for Allegiant Total Bundle checked bag included'
		)
	}

	validateEachTravelerIncludedLabelUnderSubTotal(message) {
		var travelerIncludedLabel = browser.$$(travelerIncludedLabelSubTotal)
		for (var i = 0; i < travelerIncludedLabel.length; i++) {
			assert.equal(
				travelerIncludedLabel[i].getText(),
				message,
				'Validation failed: INCLUDED message is not displayed for Allegiant Total Bundle for each traveler included label under subTotal'
			)
		}
	}
	validateIncludedLabelAgainstBagsPayNow(message) {
		assert.equal(
			$(ancillariesPageTotalPrice).getText(),
			message,
			'Validation failed: INCLUDED message is not displayed for Allegiant Total Bundle included Label against bags pay now'
		)
	}

	clickAddToCartButton(extras) {
		if (extras === "Pet in Cabin") {
			$(petInCabinAddToCart).click();
		}
		else if (extras === "PriorityAccess") {
			$(priorityBoardingAddToCart).click();
		}
		else {
			$(tripFlexAddToCart).click();
		}
	}

	validateExtrasCardTitle(extras, title) {
		if (extras === "Pet in Cabin") {
			assert.equal(
				$(petInCabinTitle).getText(),
				title,
				'Validation failed: petInCabin Title mismatch'
			)
		}
		else if (extras === "PriorityAccess") {
			assert.equal(
				$(priorityBoardingTitle).getText(),
				title,
				'Validation failed: priorityBoarding Title mismatch'
			)
		}
		else {
			assert.equal(
				$(tripflexTitle).getText(),
				title,
				'Validation failed: tripflex Title mismatch'
			)
		}
	}

	validateExtrasCardDescription(extras, description) {
		if (extras === "Pet in Cabin") {
			assert.equal(
				$(petInCabinDescription).getText(),
				description,
				'Validation failed: petInCabin description mismatch'
			)
		}
		else if (extras === "PriorityAccess") {
			assert.equal(
				$(priorityBoardingDescription).getText(),
				description,
				'Validation failed: priorityBoarding description mismatch'
			)
		}
		else {
			assert.equal(
				$(tripflexDescription).getText(),
				description,
				'Validation failed: tripflex Title mismatch'
			)
		}
	}

	validateExtrasCardDefaultPrice(extras, defaultPrice) {
		if (extras === "Pet in Cabin") {
			assert.equal(
				$(petInCabinDefaultPrice).getText(),
				defaultPrice,
				'Validation failed: petInCabin DefaultPrice mismatch'
			)
		}
	}

	validateExtrasCardAddToCartButtonIsDisplayed(extras, label) {
		if (extras === "Pet in Cabin") {
			assert.equal(
				$(petInCabinAddToCart).getText(),
				label,
				'Validation failed: petInCabin DefaultPrice mismatch'
			)
		}
		else if (extras === "PriorityAccess") {
			assert.equal(
				$(priorityBoardingAddToCart).getText(),
				label,
				'Validation failed: priorityBoarding DefaultPrice mismatch'
			)
		}
		else {
			assert.equal(
				$(tripFlexAddToCart).getText(),
				label,
				'Validation failed: tripflex DefaultPrice mismatch'
			)
		}
	}

	validateExtrasCardModalIsDisplayed(extras) {
		if (extras === "Pet in Cabin") {
			assert.equal(
				$(petInCabinModal).isDisplayed(),
				true,
				'Validation failed: petInCabin modal popup is not displayed'
			)
		}
		else if (extras === "PriorityAccess") {
			assert.equal(
				$(priorityBoardingModal).isDisplayed(),
				true,
				'Validation failed: priorityBoarding modal popup is not displayed'
			)
		}
	}

	validateExtrasCardModalTitle(extras, modalTitle) {
		if (extras === "Pet in Cabin") {
			assert.equal(
				$(petInCabinModalTitle).getText(),
				modalTitle,
				'Validation failed: petInCabin modal popup is not displayed'
			)
		}
		else if (extras === "PriorityAccess") {
			assert.equal(
				$(priorityBoardingModalTitle).getText(),
				modalTitle,
				'Validation failed: priorityBoarding modal popup is not displayed'
			)
		}
	}

	validateExtrasCardModalDescription(extras, modalDescription) {
		if (extras === "Pet in Cabin") {
			assert.equal(
				$(petInCabinModalDescription).getText(),
				modalDescription,
				'Validation failed: petInCabin modal popup is not displayed'
			)
		}
		else if (extras === "PriorityAccess") {
			assert.equal(
				$(priorityBoardingModalDescription).getText(),
				modalDescription,
				'Validation failed: priorityBoarding modal popup is not displayed'
			)
		}
	}

	validateExtrasCardModalCloseButton(extras) {
		if (extras === "Pet in Cabin") {
			assert.equal(
				$(petInCabinModalCloseButton).isDisplayed(),
				true,
				'Validation failed: petInCabin modal close button is not displayed'
			)
		}
		else if (extras === "PriorityAccess") {
			assert.equal(
				$(priorityBoardingModalCloseButton).isDisplayed(),
				true,
				'Validation failed: priorityBoarding modal close button is not displayed'
			)
		}
	}

	validateExtrasCardSegmentsDescription(extras, segment) {
		var expectedDepartingSegTitle = "Departing (" + $(originAiport).getText() + " > " + $(destinationAiport).getText() + ")"
		var expectedReturningSegTitle = "Returning (" + $(destinationAiport).getText() + " > " + $(originAiport).getText() + ")"
		if (extras === "Pet in Cabin") {
			if (segment === "departing") {
				assert.equal(
					$(priorityBoardingSegTitle.replace("X", 1)).getText(),
					expectedDepartingSegTitle,
					'Validation failed: Departing Seg Title mismatch'
				)
			}
			else {
				assert.equal(
					$(priorityBoardingSegTitle.replace("X", 2)).getText(),
					expectedReturningSegTitle,
					'Validation failed: Returning Seg Title mismatch'
				)
			}
		}
		else if (extras === "PriorityAccess") {
			if (segment === "departing") {
				assert.equal(
					$(priorityBoardingSegTitle.replace("X", 1)).getText(),
					expectedDepartingSegTitle,
					'Validation failed: Departing Seg Title mismatch'
				)
			}
			else {
				assert.equal(
					$(priorityBoardingSegTitle.replace("X", 2)).getText(),
					expectedReturningSegTitle,
					'Validation failed: Returning Seg Title mismatch'
				)
			}
		}
	}

	validateExtrasCardAddToCartButtonStatus(extras) {
		if (extras === "Pet in Cabin") {
			assert.equal(
				$(petInCabinModalAddToCart).isClickable(),
				false,
				'Validation failed: petInCabin modal AddToCart button is not disabled'
			)
		}
		else if (extras === "PriorityAccess") {
			assert.equal(
				$(priorityBoardingModalAddToCart).isClickable(),
				false,
				'Validation failed: priorityBoarding modal AddToCart button is not disabled'
			)
		}
	}

	validateExtrasCardModalTravelerDescription(extras, segment) {
		var FirstName = firstName.split("|")
		var LastName = lastName.split("|")
		var expectedName = []
		var actualName = []
		var names
		var travelerCheckboxLabel = browser.$$(flightLegCheckboxLabel);
		for (var i = 0; i < FirstName.length; i++) {
			names = FirstName[i] + " " + LastName[i].slice(0, 1) + "."
			expectedName.push(names)
		}
		for (var j = 0; j < travelerCheckboxLabel.length; j++) {
			actualName.push(travelerCheckboxLabel[j].getText().slice(11).trim())
		}
		if (extras === "Pet in Cabin") {
			if (segment === "departing") {
				for (var i = 0; i < (actualName.length / 2); i++) {
					assert.equal(
						actualName[i],
						expectedName[i],
						'Validation failed: Mismatch in traveler name in Pet in Cabin departing segment'
					)
				}
			}
			if (segment === "returning") {
				for (var i = (actualName.length / 2); i < actualName.length; i++) {
					assert.equal(
						actualName[i],
						expectedName[i - (actualName.length / 2)],
						'Validation failed: Mismatch in traveler name in Pet in Cabin returning segment'
					)
				}
			}
		}
		else if (extras === "PriorityAccess") {
			if (segment === "departing") {
				for (var i = 0; i < (actualName.length / 2); i++) {
					assert.equal(
						actualName[i],
						expectedName[i],
						'Validation failed: Mismatch in traveler name in Pet in Cabin departing segment'
					)
				}
			}
			if (segment === "returning") {
				for (var i = (actualName.length / 2); i < actualName.length; i++) {
					assert.equal(
						actualName[i],
						expectedName[i - (actualName.length / 2)],
						'Validation failed: Mismatch in traveler name in Pet in Cabin returning segment'
					)
				}
			}
		}
	}

	validateBundleBanner(bundleType) {
		do {
			browser.pause(5)
		} while ($(spinnerBar).isDisplayed())
		if (bundleType === "Allegiant Bonus Bundle") {
			if (bundleItems.includes("onepersonal_item") || bundleItems.includes("carryon")
				|| bundleItems.includes("checked_bag")) {
				assert.equal(
					$(bonusBundleBannerAncillaries).isDisplayed(),
					true,
					'Validation failed: bonus Bundle Banner above bags grid not displayed'
				)
			}
			if (bundleItems.includes("tripflex")) {
				assert.equal(
					$(bonusBundleBannerTripflex).isDisplayed(),
					true,
					'Validation failed: bonus Bundle Banner tripflex not displayed'
				)
			}
			if (bundleItems.includes("priorityaccess")) {
				assert.equal(
					$(bonusBundleBannerPriorityBoarding).isDisplayed(),
					true,
					'Validation failed: bonus Bundle Banner priorityaccess not displayed'
				)
			}
		}
		else {
			if (bundleItems.includes("onepersonal_item") || bundleItems.includes("carryon")
				|| bundleItems.includes("checked_bag")) {
				assert.equal(
					$(totalBundleBannerAncillaries).isDisplayed(),
					true,
					'Validation failed: total Bundle Banner above bags grid not displayed'
				)
			}
			if (bundleItems.includes("tripflex")) {
				assert.equal(
					$(totalBundleBannerTripflex).isDisplayed(),
					true,
					'Validation failed: total Bundle Banner tripflex not displayed'
				)
			}
			if (bundleItems.includes("priorityaccess")) {
				assert.equal(
					$(totalBundleBannerPriorityBoarding).isDisplayed(),
					true,
					'Validation failed: total Bundle Banner priorityaccess not displayed'
				)
			}
		}
	}

	validateBundleIncludedMessage(message, bundleType) {
		if (bundleItems.includes("onepersonal_item")) {
			assert.equal(
				$(personalItemIncluded).getText(),
				message,
				'Validation failed: INCLUDED message is not displayed for ' + bundleType + ' personal item included'
			)
		}
		if (bundleItems.includes("carryon")) {
			assert.equal(
				$(carryOnIncluded).getText(),
				message,
				'Validation failed: INCLUDED message is not displayed for ' + bundleType + ' carry on included'
			)
			var travelerIncludedLabel = browser.$$(travelerIncludedLabelSubTotal)
			for (var i = 0; i < travelerIncludedLabel.length; i++) {
				assert.equal(
					travelerIncludedLabel[i].getText(),
					message,
					'Validation failed: INCLUDED message is not displayed for ' + bundleType + ' for each traveler included label under subTotal'
				)
			}
			assert.equal(
				$(ancillariesPageTotalPrice).getText(),
				message,
				'Validation failed: INCLUDED message is not displayed for ' + bundleType + ' included Label against bags pay now'
			)
		}
		if (bundleItems.includes("checked_bag")) {
			assert.equal(
				$(checkedBagIncluded).getText(),
				message,
				'Validation failed: INCLUDED message is not displayed for ' + bundleType + ' checked bag included'
			)
			var travelerIncludedLabel = browser.$$(travelerIncludedLabelSubTotal)
			for (var i = 0; i < travelerIncludedLabel.length; i++) {
				assert.equal(
					travelerIncludedLabel[i].getText(),
					message,
					'Validation failed: INCLUDED message is not displayed for ' + bundleType + ' for each traveler included label under subTotal'
				)
			}
			assert.equal(
				$(ancillariesPageTotalPrice).getText(),
				message,
				'Validation failed: INCLUDED message is not displayed for ' + bundleType + ' included Label against bags pay now'
			)
		}
		if (bundleItems.includes("tripflex")) {
			assert.equal(
				$(tripFlexIncluded).getText(),
				message,
				'Validation failed: INCLUDED message is not displayed for ' + bundleType + ' for priorityaccess'
			)
		}
		if (bundleItems.includes("priorityaccess")) {
			assert.equal(
				$(priorityBoardingTotalBundleIncluded).getText(),
				message,
				'Validation failed: INCLUDED message is not displayed for ' + bundleType + ' for priorityaccess'
			)

		}
	}

	validateTripflexUpdatedInShoppingCart(ShoppingCart) {
		var tp = browser.$$(tripFlexShopingCart)
		for (var i = 0; i < tp.length; i++) {
			assert.equal(
				tp[i].getText(),
				ShoppingCart,
				'Validation failed: tripFlex ShopingCart is not displayed for all the travelers'
			)
		}
	}

	validateBagsCTAButtonStatus(bagtype, button, buttonStatus, traveler, segment) {
		$(sameOptionsForAllFlight).click()
		if (segment === "both") {
			if (bagtype === "carryon") {
				if (button === "decrement") {
					assert.equal($(carryOnDecrementButtonSeg1.replace("X", traveler - 1)).isClickable(),
						eval(buttonStatus),
						'Validation failed: carryOn Decrement Button Seg1 status invalid'
					)
				}
				else if (button === "increment") {
					assert.equal($(carryOnIncrementButtonSeg1.replace("X", traveler - 1)).isClickable(),
						eval(buttonStatus),
						'Validation failed: carryOn increment Button Seg1 status invalid'
					)
				}
				if ($(carryOnDecrementButtonSeg2).isDisplayed() === false) {
					$(sameOptionsForAllFlight).click()
				}
				if (button === "decrement") {
					assert.equal($(carryOnDecrementButtonSeg2.replace("X", traveler - 1)).isClickable(),
						eval(buttonStatus),
						'Validation failed: carryOn Decrement Button Seg2 status invalid'
					)
				}
				else if (button === "increment") {
					$(sameOptionsForAllFlight).click()
					assert.equal($(carryOnIncrementButtonSeg2.replace("X", traveler - 1)).isClickable(),
						eval(buttonStatus),
						'Validation failed: carryOn increment Button Seg2 status invalid'
					)
				}
			}
			else if (bagtype === "checked") {
				if (button === "decrement") {
					assert.equal($(checkedDecrementButtonSeg1.replace("X", traveler - 1)).isClickable(),
						eval(buttonStatus),
						'Validation failed: checked Decrement Button Seg1 status invalid'
					)
				}
				else if (button === "increment") {
					assert.equal($(checkedIncrementButtonSeg1.replace("X", traveler - 1)).isClickable(),
						eval(buttonStatus),
						'Validation failed: checked increment Button Seg1 status invalid'
					)
				}
				if ($(carryOnDecrementButtonSeg2).isDisplayed() === false) {
					$(sameOptionsForAllFlight).click()
				}
				if (button === "decrement") {
					assert.equal($(checkedDecrementButtonSeg2.replace("X", traveler - 1)).isClickable(),
						eval(buttonStatus),
						'Validation failed: checked Decrement Button Seg2 status invalid'
					)
				}
				else if (button === "increment") {
					$(sameOptionsForAllFlight).click()
					assert.equal($(checkedIncrementButtonSeg2.replace("X", traveler - 1)).isClickable(),
						eval(buttonStatus),
						'Validation failed: checked increment Button Seg2 status invalid'
					)
				}
			}
		}
		else if (segment === "departing") {
			if (bagtype === "carryon") {
				if (button === "decrement") {
					assert.equal($(carryOnDecrementButtonSeg1.replace("X", traveler - 1)).isClickable(),
						eval(buttonStatus),
						'Validation failed: carryOn Decrement Button Seg1 status invalid'
					)
				}
				else if (button === "increment") {
					assert.equal($(carryOnIncrementButtonSeg1.replace("X", traveler - 1)).isClickable(),
						eval(buttonStatus),
						'Validation failed: carryOn increment Button Seg1 status invalid'
					)
				}
			}
			else if (bagtype === "checked") {
				if (button === "decrement") {
					assert.equal($(checkedDecrementButtonSeg1.replace("X", traveler - 1)).isClickable(),
						eval(buttonStatus),
						'Validation failed: carryOn Decrement Button Seg1 status invalid'
					)
				}
				else if (button === "increment") {
					assert.equal($(checkedIncrementButtonSeg1.replace("X", traveler - 1)).isClickable(),
						eval(buttonStatus),
						'Validation failed: carryOn increment Button Seg1 status invalid'
					)
				}
			}
		}
		else if (segment === "returning") {
			if (bagtype === "carryon") {
				if (button === "decrement") {
					assert.equal($(carryOnDecrementButtonSeg2.replace("X", traveler - 1)).isClickable(),
						eval(buttonStatus),
						'Validation failed: carryOn decrement Button Seg2 status invalid'
					)
				}
				else if (button === "increment") {
					assert.equal($(carryOnIncrementButtonSeg2.replace("X", traveler - 1)).isClickable(),
						eval(buttonStatus),
						'Validation failed: carryOn increment Button Seg2 status invalid'
					)
				}
			}
			else if (bagtype === "checked") {
				if (button === "decrement") {
					assert.equal($(checkedDecrementButtonSeg2.replace("X", traveler - 1)).isClickable(),
						eval(buttonStatus),
						'Validation failed: carryOn decrement Button Seg2 status invalid'
					)
				}
				else if (button === "increment") {
					assert.equal($(checkedIncrementButtonSeg2.replace("X", traveler - 1)).isClickable(),
						eval(buttonStatus),
						'Validation failed: carryOn increment Button Seg2 status invalid'
					)
				}
			}
		}
	}

	validateProhibitedSectionContent(textType, label) {
		var actual
		if (textType === "title") {
			actual = prohibitedSectionTitle
		}
		if (textType === "noteHeader") {
			actual = prohibitedSectionNoteHeader
		}
		if (textType === "itemsNoteText") {
			actual = prohibitedSectionNoteText
		}
		if (textType === "agreementText") {
			actual = prohibitedSectionAgreementText
		}
		if (textType === "lithiumBatteries") {
			actual = prohibitedSectionLithiumBattery
		}
		if (textType === "explosives") {
			actual =  prohibitedSectionExplosives
		}
		if (textType === "aerosol") {
			actual =  prohibitedSectionAerosol
		}
		if (textType ===  "flammables")  {
			actual =  prohibitedSectionFlammables
		}
		if (textType === "oxidizers") {
			actual = prohibitedSectionOxidisers
		}
		if (textType === "toxins") {
			actual =  prohibitedSectionToxins
		}
		if (textType === "corrosives") {
			actual = prohibitedSectionCorrosives
		}
		if (textType === "eCigarettes") {
			actual = prohibitedSectionEcigarettes
		}
		if (textType === "prohibitedPopupTitle") {
			actual = prohibitedPopupTitle
		}

		assert.equal(
			$(actual).getText(),
			label,
			'Validation failed: Mismatch in prohibited Section ' + textType
		)
	}
	clickProhibitedShowDetailsLink() {
		$(prohibitedSectionshowDetailsLink).click()
	}

	validatedHazardousMaterialsPopupDisplayed() {
		$(prohibitedPopup).waitForDisplayed();
	}

	validateProhibitedPopupContentIsDisplayed() {
		assert.equal(
			$(prohibitedSectionPopupContent).isDisplayed(),
			true,
			'Validation failed: prohibited Section Popup Content is not displayed'
		);
	}

	validateSeatIdAndPriceInTripSummary() {
		
		console.log("seatIdDepart "+seatIdDepart)
		console.log("seatPriceDepart "+seatPriceDepart)
		console.log("seatIdReturn "+seatIdReturn)
		console.log("seatPriceReturn "+seatPriceReturn)
		for (var i = 0; i < seatIdDepart.length; i++) {
			assert.equal(
				parseFloat($(tripSummaryDepartingSeatPrice.replace("X", i)).getText().replace("$","")),
				parseFloat(seatPriceDepart[i]),
				'Validation failed: tripSummary Departing Seat Price mismatch for pax: ' + i + 1
			);
			assert.equal(
				$(tripSummaryDepartingSeat.replace("X", i)).getText(),
				seatIdDepart[i],
				'Validation failed: tripSummary Departing Seat mismatch for pax: ' +  i + 1
			);
		}
		console.log("seatIdDepart "+seatIdDepart)
		console.log("seatPriceDepart "+seatPriceDepart)
		console.log("seatIdReturn "+seatIdReturn)
		console.log("seatPriceReturn "+seatPriceReturn)
		for (var i = 0; i < seatIdReturn.length; i++) {
			assert.equal(
				parseFloat($(tripSummaryReturningSeatPrice.replace("X", i)).getText().replace("$","")),
				parseFloat(seatPriceReturn[i]),
				'Validation failed: tripSummary Returning Seat Price mismatch for pax: ' + i + 1
			);
			assert.equal(
				$(tripSummaryReturningSeat.replace("X", i)).getText(),
				seatIdReturn[i],
				'Validation failed: tripSummary Returning Seat mismatch for pax: ' + i + 1
			);
		}
	}
	clickBaggagePolicyLink() {
		$(baggagePolicyLink).click()
	}
	validateBaggagePolicyPopupIsDisplayed() {
		assert.equal(
			$(baggagePolicyPopup).isDisplayed(),
			true,
			'Validation failed: Baggage Policy Popup is not displayed'
		);
	}	
	validateBaggagePolicyPopupTitleAndContent(title) {
		assert.equal(
			$(baggagePolicyTitle).getText(),
			title,
			'Validation failed: Baggage Policy Popup Title is not displayed'
		);
		assert.equal(
			$(baggagePolicyPopupContent).isDisplayed(),
			true,
			'Validation failed: Baggage Policy Popup Content is not displayed'
		);
	}
	validateBagDisclaimer(disclaimer){
		assert.equal(
			$(baggagePolicyNotice).getText(),
			disclaimer,
			'Validation failed: Bag disclaimer is not displayed!'
		);
	}
	
	closeBaggagePolicyLink() {
		$(baggagePolicyPopupCloseButton).click()
	}
	validateBaggagePolicyPopupContent(title, titleText) {
		if(title === "Checked") {
		assert.equal(
			$(baggagePolicyPopupTitleOne).getText(),
			titleText,
			'Validation failed: Baggage Policy Popup Content Title is not displayed'
		);
	  }
	    if (title === "Save money") {
		assert.equal(
			$(baggagePolicyPopupTitleTwo).getText(),
			titleText,
			'Validation failed: Baggage Policy Popup Content Title is not displayed'
		);
	  }
        if (title === "Airport Bag Fees") {
		assert.equal(
			$(baggagePolicyPopupTitleThree).getText(),
			titleText,
			'Validation failed: Baggage Policy Popup Content Title is not displayed'
		);
	  }
        if (title === "Weight and Size Requirements") {
		assert.equal(
			$(baggagePolicyPopupTitleFour).getText(),
			titleText,
			'Validation failed: Baggage Policy Popup Content Title is not displayed'
		);
	  }
        if (title === "Weight and Size Requirements") {
		assert.equal(
			$(baggagePolicyPopupTitleFour).getText(),
			titleText,
			'Validation failed: Baggage Policy Popup Content Title is not displayed'
		);
	  }
        if (title === "Weight and Size Requirements") {
		assert.equal(
			$(baggagePolicyPopupTitleFour).getText(),
			titleText,
			'Validation failed: Baggage Policy Popup Content Title is not displayed'
		);
	  }
        if (title === "Cabin Bags") {
		assert.equal(
			$(baggagePolicyPopupTitleFive).getText(),
			titleText,
			'Validation failed: Baggage Policy Popup Content Title is not displayed'
		);
	  }
        if (title === "Weight and Size Requirements Bulletin One") {
		assert.equal(
			$(baggagePolicyPopupBulletinTextOne).getText(),
			titleText,
			'Validation failed: Baggage Policy Popup Content Bulletin Text is not displayed'
		);
	  }
        if (title === "Weight and Size Requirements Bulletin Two") {
		assert.equal(
			$(baggagePolicyPopupBulletinTextTwo).getText(),
			titleText,
			'Validation failed: Baggage Policy Popup Content Bulletin Text is not displayed'
		);
	  }
        if (title === "Weight and Size Requirements Bulletin Three") {
		assert.equal(
			$(baggagePolicyPopupBulletinTextThree).getText(),
			titleText,
			'Validation failed: Baggage Policy Popup Content Bulletin Text is not displayed'
		);
	  }
        if (title === "Cabin Bags Bulletin Text One") {
		assert.equal(
			$(baggagePolicyPopupCabinBagsBulletinTextOne).isDisplayed(),
			true,
			'Validation failed: Baggage Policy Popup Cabin Bags Bulletin Text is not displayed'
		);
	  }
        if (title === "Cabin Bags Bulletin Text Two") {
		assert.equal(
			$(baggagePolicyPopupCabinBagsBulletinTextTwo).getText(),
			titleText,
			'Validation failed: Baggage Policy Popup Cabin Bags Bulletin Text is not displayed'
		);
	  }
        if (title === "Cabin Bags Bulletin Bold Text") {
		assert.equal(
			$(baggagePolicyPopupCabinBagsBulletinBoldText).getText(),
			titleText,
			'Validation failed: Baggage Policy Popup Cabin Bags Bold Bulletin Text is not displayed'
		);
	  }
        if (title === "Airport bag fees") {
		assert.equal(
			$(baggagePolicyPopupAirportBagFeesText).getText(),
			titleText,
			'Validation failed: Baggage Policy Popup Airport Bag Text is not displayed'
		);
	  }
	}
	selectAddToCartAndReselectSeats() {
		$(addToCartAndReselectSeats).waitForDisplayed();
		$(addToCartAndReselectSeats).click();
		browser.pause(3000)
	}
	validatePetInCabinReselectSeatsMessage(text) {
		$(flightLegCheckboxLabel).click();
		assert.equal(
			$(petInCabinReselectSeatsMessage).getText(),
			text,
			'Validation failed: Pet in cabin reselect seat message is not displayed'
		);
	}
	addExtras() {
		if ($(tripFlexAddToCart).isDisplayed()) {
			$(tripFlexAddToCart).click();
			do {
				browser.pause(10)
			} while ($(spinnerBar).isDisplayed())
		}else{
			try{
			$(priorityBoardingAddToCart).click();
			$(flightLegCheckboxLabel).click();
			$(priorityBoardingModalAddToCart).click();
			}
			catch(ex){
				console.log("Unable to add extra")
			}
			do {
				browser.pause(10)
			} while ($(spinnerBar).isDisplayed())
		}
	}
	
	validateAncillariesContinuePopup(isDisplayed){
		assert.equal(
			$(bagElements.noBagContinue).isDisplayed(),
			eval(isDisplayed),
			'Validation failed: Mismatch Ancillaries Continue Popup'
		);
	}
	
	validateCheckedBagCount(checkedBag) {
		assert.equal(
			$(checkedBagCount).getAttribute('value'),
			checkedBag,
			'Validation Failed: Bundle CheckedBag Count is not displayed'
		);
	}
	
	clickAncillariesContinuePopupButtonSelectBags(){
		$(continueButtonSelectBagsPopupButton).click()
		browser.pause(1000)
	}

	collectBagPrices() {
		collect('checkedBagsIndividualPriceKey', $(individualCheckedBagPrice).getText().slice(1));
		collect('carryOnBagsIndividualPriceKey', $(individualCarryOnBagPrice).getText().slice(1));
		collect('bagsTotalPriceKey', $(ancillariesPageTotalPrice).getText().slice(1));
}

	collectExtrasPrices() {
		collect('priorityAccessIndividualPriceKey', $(priorityAccessPriceUnselected).getText().slice(1));
		collect('petInCabinIndividualPriceKey', $(petInCabinPriceUnselected).getText().slice(1));
		collect('tripFlexPriceKey', $(tripFlexPriceUnselected).getText().slice(1));
}

clickUseSameOptionForAllFlight(){
	$(useSameOptionForAllFlight).click()
}
ClickOnHoldPopUpButton(button){
	if(button==="Select bags Now"){
		$(selectBagsNow).click()
	}
	if(button==="Continue"){
		$(continuePopupButtonContinue).click()
	}
}

addProduct(product){
	if(product==="Carry On"){
		this.selectCarryOn("1","both")
		browser.pause(2000)
	}
	if(product==="Checked Bag"){
		this.selectCheckedBag(1, 1, "both")
		browser.pause(2000)
	}
	if(product==="Priority Boarding"){
		this.selectPriorityAccess(true, 1, "both")
		browser.pause(2000)
	}
	if(product==="TripFlex"){
		this.selectTripflex(true)
		browser.pause(2000)
	}
	if(product==="PETC"){
		this.selectPetInCabin(true, 1, "both")
		browser.pause(2000)
	}
}
removeProduct(product){
	if(product==="Carry On"){
		this.removeCarryOn("1","both")
		browser.pause(2000)
	}
	if(product==="Checked Bag"){
		this.removeCheckedBag(1, 1, "both")
		browser.pause(2000)
	}
	if(product==="Priority Boarding"){
		this.removePriorityBoarding()
		browser.pause(2000)
	}
	if(product==="TripFlex"){
		this.removeTripFlex()
		browser.pause(2000)
	}
	if(product==="PETC"){
		this.removePETC()
		browser.pause(2000)
	}
}

    validatedHazardousMaterialsPopupContentIsDisplayed() {
		$(prohibitedSectionPopupFullContent).waitForDisplayed();
        assert.isTrue($(prohibitedSectionPopupFullContent).isDisplayed(), "Restrictions on carriage of hazardous materials content is not displayed on the pop-up")
	}
	
	validateCheckedBagMessage(expectedText) {
		let actualText = $(checkedBagsFirstBagText).getText();
		assert.equal(actualText, expectedText, 'The Checked Bags <First Bag> text is incorrect');
	}
	selectCarryOnBagByParams(params){
		if(!params.includes("false")){
		var paxNum= params.split(' ')[0].split('-')[1]
		var segment= params.split(' ')[1].split('-')[1]			
		if(paxNum.includes("all")){
		$(travelerCount).waitForDisplayed()
		var all = $(travelerCount).getText().split(' ')[0]			
		for(var i=1;i<=all;i++){
			this.selectCarryOn(i, segment)				
		}
		}else{
			this.selectCarryOn(paxNum, segment)
		}			 
		}		
	}
	selectCheckedBagByParams(params){
		if(!params.includes("false")){
		var paxNum= params.split(' ')[0].split('-')[1]
		var segment= params.split(' ')[1].split('-')[1]	
		var checked= params.split(' ')[2].split('-')[1]	
		if(paxNum.includes("all")){
		$(travelerCount).waitForDisplayed()
		var all = $(travelerCount).getText().split(' ')[0]
		for(var i=1;i<=all;i++){
			this.selectCheckedBag(checked, Number(i), segment)
		}
		}else{
			this.selectCheckedBag(checked, paxNum, segment)
		}			 
		}
	}
	selectPriorityByParams(params){
		if(!params.includes("false")){
		var paxNum= params.split(' ')[0].split('-')[1]
		var segment= params.split(' ')[1].split('-')[1]			
		this.selectPriorityAccess(true, paxNum, segment)				 
		}
	}
}
export { BagsPageCollector }
export default new BagsPage();