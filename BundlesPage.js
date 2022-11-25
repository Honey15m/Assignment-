import { Page, Actions } from '@g4/prova';
import { assert } from 'chai';
import {flightPageCollector} from '../pageobjects/FlightPage';
const clickContinueButton = "[data-hook='bundles-page_continue']";
const basicBundleLabel = "[data-hook='bundle-header-image_allegiant_basic_bundle']";
const bonusBundleLabel = "[data-hook='bundle-header-image_allegiant_bonus_bundle']";
const totalBundleLabel = "//img[@data-hook='bundle-header-image_allegiant_total_bundle']";
const selectBonusBundle = "//button[@data-hook='select-tier-2']//span";
const selectTotalBundle = "//button[@data-hook='select-tier-3']//span";
const bundlesShortText = "[data-hook='bundles-short-text']";
const totalBundleOnePersonalItem = "[data-hook='checkmark_allegiant_total_bundle_one_personal_item']";
const totalBundleCarryOn = "[data-hook='checkmark_allegiant_total_bundle_carry_on']";
const totalBundleCheckedBag = "//*[@data-hook='checkmark_allegiant_total_bundle_checked_bag']|//span[@data-hook='item-amount_allegiant_total_bundle_checked_bag']";
const totalBundleSeatSelection = "[data-hook='checkmark_allegiant_total_bundle_seat_selection']";
const totalBundlePriorityAccess = "[data-hook='checkmark_allegiant_total_bundle_priority_access']";
const totalBundleTripFlex = "[data-hook='checkmark_allegiant_total_bundle_trip_flex']";
const bonusBundleOnePersonalItem = "[data-hook='checkmark_allegiant_bonus_bundle_one_personal_item']";
const bonusBundleCarryOn = "[data-hook='checkmark_allegiant_bonus_bundle_carry_on']";
const bonusBundleCheckedBag = "[data-hook='checkmark_allegiant_bonus_bundle_checked_bag']";
const bonusBundleSeatSelection = "[data-hook='checkmark_allegiant_bonus_bundle_seat_selection']";
const bonusBundlePriorityAccess = "[data-hook='checkmark_allegiant_bonus_bundle_priority_access']";
const bonusBundleTripFlex = "[data-hook='checkmark_allegiant_bonus_bundle_trip_flex']";
const skipButtonBundlesPage = "[data-hook='bundles-page_skip']";
const bundlesPageTitle = "[data-hook='flights-breadcrumb_item-bundles']";
const bundlesPageHeading = "[data-hook='bundles-page_page-heading']";
const allegiantTotalBundle = "[data-hook='select-tier-3']";
const bundleDiscount = "//span[@data-hook='bundle-price_allegiant_X_bundle']//span";
const totalBundleStrikethroughPrice = "[data-hook='strikethrough-price_allegiant_total_bundle']";
const totalBundlePrice = "[data-hook='bundle-price_allegiant_total_bundle']";
const bonusBundlePrice ="//span[@data-hook='bundle-price_allegiant_bonus_bundle']//span"
const totalBundleFare ="//span[@data-hook='bundle-price_allegiant_total_bundle']//span"
const selectedLabel = "//button[contains(@data-hook,'select-tier-X')]//span[text()='SELECTED']"
const skipButton = "[data-hook='bundles-page_skip']";
const tripSummaryPopUp = "[data-hook='cart-popover']";
const tripSummaryRoundTripDiscount = "[data-hook='price-breakdown_flight-discount']"
const basicBundleItems = "//*[contains(@data-hook,'checkmark_allegiant_basic_bundle_')]"
const bonusBundleItems = "//*[contains(@data-hook,'checkmark_allegiant_bonus_bundle_')]"
const totalBundleItems = "//*[contains(@data-hook,'checkmark_allegiant_total_bundle_')]|//span[@data-hook='item-amount_allegiant_total_bundle_checked_bag']"
const closeCookiesPopup = "//button[contains(@id,'onetrust-accept-btn-handler')]"
const priorityBoardingTooltip = "[data-hook='ancillary-tooltip_priority_boarding_trigger']"
const tripFlexTooltip = "[data-hook='ancillary-tooltip_trip_flex_trigger']"
const seatSelectionTooltip = "[data-hook='ancillary-tooltip_seat_trigger']"
const onePersonalItemTooltip = "[data-hook='ancillary-tooltip_one_personal_item_trigger']"
const checkedBagTooltip = "[data-hook='ancillary-tooltip_check_in_bag_trigger']"
const carryOnTooltip = "[data-hook='ancillary-tooltip_carry_on_bag_trigger']"
const termsAndConditionLink = "[data-hook='bundles-disclaimer-button']"
const skipBundlesPage = "[data-hook='bundles-page_skip']"
const spinnerBar = "//span[contains(@class,'Spinner__Bar')]";
const defaultFocusedBundle = "//button[@id='Tab-1']//div[@data-hook='bundle-activated-mobile']"
const disclaimerText = "//span[@data-hook='bundles-disclaimer']"
const currentlySelectedBreadcrumbPage = "[aria-label='breadcrumb'] li[aria-current]";
const bundlesPageContinueButton = "[data-hook='bundles-page_continue']";
const headerCartButton="[data-hook='header-cart-button_price']"
const cartClose ="[data-hook='cart-close']"
const tripTotalValue ="//span[@data-hook='cart-total_value']"
const SeatedPaxCount="//span[@data-hook='header-flight-info_seated']"
const airlineFees="//span[@data-hook='price-breakdown_airline-fees_value']"
const carrierUsageCharge="//span[@data-hook='price-breakdown_carrier-usage-charge_value']"
const governmentTaxesAndFees="//span[@data-hook='price-breakdown_government-taxes-fees_value']"
const fedTax="//span[@data-hook='price-breakdown_fed-tax_value']"
const segmentFees="//span[@data-hook='price-breakdown_segment-fees_value']"
const securityFees="//span[@data-hook='price-breakdown_911-security_value']"
const pfc="//span[@data-hook='price-breakdown_pfc_value']"
const flightFareWithoutTax="[data-hook='cart-item_flight-package_value']"
const flightFareSubTotalWithoutTax="[data-hook='price-breakdown_subtotal_value']"
const totalBundleCheckedBagCount = "[data-hook='item-amount_allegiant_total_bundle_checked_bag']";
const mobileActivated="[data-hook='bundle-activated-mobile']"
const totalBundleMobileTab="//button[@id='Tab-2']"
var bundlePageCollector = new Map();
var bundleItems = []
var bundlePrice
class BundlesPage extends Page {

	selectBundles(bundleType) {	
		do {
			browser.pause(200)
		} while ($(spinnerBar).isDisplayed())
		if (bundleType === "Allegiant Total Bundle") {
			if ($(mobileActivated).isDisplayed()) {
				$(totalBundleMobileTab).click()
			}
			$(selectTotalBundle).waitForDisplayed({ timeout: 15000 });
			$(selectTotalBundle).click()			
		}
		if (bundleType === "Allegiant Bonus Bundle") {
			$(selectBonusBundle).waitForDisplayed({ timeout: 15000 });
			$(selectBonusBundle).click()
		}
	}

	validateBundlesBanners() {	
		do {			
			browser.pause(1000)
		} while ($(spinnerBar).isDisplayed())
		$(totalBundleLabel).waitForDisplayed({ timeout: 25000 });
		assert.equal(
			$(basicBundleLabel).isDisplayed(),
			true,
			'basicBundleLabel is not displayed correctly'
		);
		assert.equal(
			$(bonusBundleLabel).isDisplayed(),
			true,
			'bonusBundleLabel is not displayed correctly'
		);
		assert.equal(
			$(totalBundleLabel).isDisplayed(),
			true,
			'totalBundleLabel is not displayed correctly'
		);
	}
	validateTotalBundleOnePersonalItem(OnePersonalItem) {

		assert.equal(
			$(totalBundleOnePersonalItem).isDisplayed(),
			eval(OnePersonalItem),
			'TotalBundleOnePersonalItem is not displayed'
		);
	}
	validateTotalBundleCarryOn(carryOn) {
		assert.equal(
			$(totalBundleCarryOn).isDisplayed(),
			eval(carryOn),
			'TotalBundleCarryOn is not displayed'
		);
	}
	validateTotalBundleCheckedBag(checkedBag) {
		assert.equal(
			$(totalBundleCheckedBag).isDisplayed(),
			eval(checkedBag),
			'TotalBundleCheckedBag is not displayed'
		);
	}
	validateTotalBundleSeatSelection(seatSelection) {
		assert.equal(
			$(totalBundleSeatSelection).isDisplayed(),
			eval(seatSelection),
			'TotalBundleSeatSelection is not displayed'
		);
	}
	validateTotalBundlePriorityAccess(priorityAccess) {
		assert.equal(
			$(totalBundlePriorityAccess).isDisplayed(),
			eval(priorityAccess),
			'TotalBundlePriorityAccess is not displayed'
		);
	}
	validateTotalBundleTripFlex(tripFlex) {
		assert.equal(
			$(totalBundleTripFlex).isDisplayed(),
			eval(tripFlex),
			'TotalBundleTripFlex is not displayed'
		);
	}
	validateBonusBundleOnePersonalItem(OnePersonalItem) {

		assert.equal(
			$(bonusBundleOnePersonalItem).isDisplayed(),
			eval(OnePersonalItem),
			'TotalBundleOnePersonalItem is not displayed'
		);
	}
	validateBonusBundleCarryOn(carryOn) {
		assert.equal(
			$(bonusBundleCarryOn).isDisplayed(),
			eval(carryOn),
			'BonusBundleCarryOn is not displayed'
		);
	}
	validateBonusBundleCheckedBag(checkedBag) {
		assert.equal(
			$(bonusBundleCheckedBag).isDisplayed(),
			eval(checkedBag),
			'Bonus Bundle CheckedBag is not displayed'
		);
	}
	validateBonusBundleSeatSelection(seatSelection) {
		assert.equal(
			$(bonusBundleSeatSelection).isDisplayed(),
			eval(seatSelection),
			'TotalBundleSeatSelection is not displayed'
		);
	}
	validateBonusBundlePriorityAccess(priorityAccess) {
		assert.equal(
			$(bonusBundlePriorityAccess).isDisplayed(),
			eval(priorityAccess),
			'TotalBundlePriorityAccess is not displayed'
		);
	}
	validateBonusBundleTripFlex(tripFlex) {
		assert.equal(
			$(bonusBundleTripFlex).isDisplayed(),
			eval(tripFlex),
			'TotalBundleTripFlex is not displayed'
		);
	}
	clickContinueButton(button) {	
		if(button==='continue')	{
		if ($(closeCookiesPopup).isDisplayed()) {
				$(closeCookiesPopup).click()
			}	
			$(clickContinueButton).waitForClickable({ timeout: 10000 });		
			this.clickElement($(clickContinueButton));	
		}
		else{
			this.clickSkipButton()
		}
					
	}
	clickSkipButton() {
		$(skipButton).click()
	}

	validateBundlesPageIsLoaded(BundlesPageTitle, BundlesPageHeading) {
		browser.pause(5000);
		assert.equal(
			$(bundlesPageTitle).getTitle(),
			BundlesPageTitle,
			'Bundles selection page failed to load'
		);
		assert.equal(
			$(bundlesPageHeading).getText(),
			BundlesPageHeading,
			'Bundles page heading not displayed'
		);
	}
	validateBundlesPageAnchorToTop(){
		browser.pause(5000);
		assert.equal(
			$(bundlesPageHeading).isDisplayedInViewport(),
			true,
			'Bundles page is not anchor to top'
		);
	}
	validateBundleDiscountedPriceIsDisplayed(bundleType) {
		if (bundleType == "Allegiant Total Bundle") {
			assert.isNumber(
				parseFloat($(bundleDiscount.replace("X", "total")).getText()),
				'Validation failed: Discounted value for total bundle is not displayed correctly'
			);
		}
		else {
			assert.isNumber(
				parseFloat($(bundleDiscount.replace("X", "bonus")).getText()),
				'Validation failed: Discounted value for bonus bundle is not displayed correctly'
			);
		}
	}

	validateBundleDiscount() {
		let bundlesPageDiscountMessage = $(bundlesShortText).getText();
		let bundleDiscountValueDisplayed = this.getBundleDiscountValue();

		if (bundlesPageDiscountMessage.includes('per person')) {
			let calculatedDiscountValue = this.calculateDiscountedBundleValuePerPerson();

			assert.equal(
				bundleDiscountValueDisplayed,
				Number(calculatedDiscountValue.toFixed(2)),
				'The calculated discount value per person is incorrect.'
			);
		} else {
			let calculatedDiscountValue = this.calculateDiscountedBundleValuePerParty();

			assert.equal(
				bundleDiscountValueDisplayed,
				Number(calculatedDiscountValue.toFixed(2)),
				'The calculated discount value per party is incorrect.'
			);
		}
	}

	calculateDiscountedBundleValuePerParty() {
		let numberOfSeatedTravelers = parseFloat(
			getValueCollectorMap('seatedTravelersNumberHeaderKey')
		);

		let discountValueCalculated =
			this.calculateDiscountedBundleValuePerPerson() * numberOfSeatedTravelers;

		return discountValueCalculated;
	}

	calculateDiscountedBundleValuePerPerson() {
		let totalBundlePriceText = parseFloat(
			$(totalBundlePrice)
				.getText()
				.slice(2, -1)
		);
		let totalBundleStrikethroughPriceText = parseFloat(
			$(totalBundleStrikethroughPrice)
				.getText()
				.slice(2, -1)
		);

		let discountValueCalculated =
			totalBundleStrikethroughPriceText - totalBundlePriceText;

		return discountValueCalculated;
	}
	getBundleDiscountValue() {
		let bundlePageMessageDiscountValue = $(bundlesShortText)
			.getText()
			.split('$')[1]
			.split('per')[0]
			.trim();

		return bundlePageMessageDiscountValue;
	}

	validateLabelSelected(bundleType, label) {
		if (bundleType === "Allegiant Total Bundle") {
			assert.equal(
				$(selectedLabel.replace("X", 3)).getText(),
				label,
				'validation failed: Label Selected mismatch'
			)
		}
		else {
			assert.equal(
				$(selectedLabel.replace("X", 2)).getText(),
				label,
				'validation failed: Label Selected mismatch'
			)
		}
	}

	validateRoundTripDiscountInTripTotal() {
		$(tripSummaryPopUp).waitForDisplayed()
		assert.equal(
			$(tripSummaryRoundTripDiscount).isDisplayed(),
			false,
			'Validation failed:  Roundtrip Discount label should not be displayed in trip total'
		)
	}

	validateDefaultFocusedBundleValue(defaultFocus) {
		do {
			browser.pause(500)
	    } while ($(spinnerBar).isDisplayed())
        browser.pause(10000)            
		assert.equal(
			$(defaultFocusedBundle).isDisplayed(),
			true,
			'Validation failed:  '+defaultFocus+' focus mismatch error in mobile responsive'
		)
	}
	collectBundleItems(bundleType) {
		var itemsCount
		
		if (bundleType === "Bonus") {
			// itemsCount = browser.$$(bonusBundleItems)
			// bundlePrice=$(bonusBundlePrice).getText()
			$(bonusBundleItems).click();
		}
		if (bundleType === "Total") {
			// itemsCount = browser.$$(totalBundleItems)
			// bundlePrice=$(totalBundleFare).getText()
			$(totalBundleItems).click()
		}
		if (bundleType.includes("Basic")) {
			itemsCount = browser.$$(basicBundleItems)
			bundlePrice=0;
		}
		// for (var i = 0; i < itemsCount.length; i++) {
		// 	bundleItems.push(itemsCount[i].getAttribute('data-hook').slice(33).replace("_", ""))
		// }     
	}

	clickInfoIcon(bundleItem) {
		if (bundleItem === "Priortity Boarding") {
			$(priorityBoardingTooltip).click()
		}
		else if (bundleItem === "Trip Flex") {
			$(tripFlexTooltip).click()
		}
		else if (bundleItem === "Checked Bag") {
			$(checkedBagTooltip).click()
		}
		else if (bundleItem === "Carry-On") {
			$(carryOnTooltip).click()
		}
		else if (bundleItem === "One personal item") {
			$(onePersonalItemTooltip).click()
		}
		else if (bundleItem === "Seat Selection") {
			$(seatSelectionTooltip).click()
		}
	}
	clickLink(link) {
		if (link === "Terms and Conditions") {
			$(termsAndConditionLink).click()
		}
		else if (link === "No Thanks") {
			$(skipBundlesPage).click()
		}
	}
	validateBundleNotSelectedByDefault() {
		assert.equal(
			$(selectedLabel).isDisplayed(),
			false,
			'Validation failed:  Bundle should not be selected by default'
		)
	}
	validateBundleDisclaimerText(text) {
		assert.equal(
			$(disclaimerText).getText(),
			text,
			'Validation failed:  Bundle disclaimerText mismatch'
		)
	}
	clickBundlesPageContinueButton() {
		$(currentlySelectedBreadcrumbPage).waitForDisplayed();
		const currentActiveBreadcrumbPageText = $(currentlySelectedBreadcrumbPage)
			.getText()
			.slice(1);

		if (currentActiveBreadcrumbPageText === 'Bundles') {
			this.clickElement($(bundlesPageContinueButton));
		} else if (currentActiveBreadcrumbPageText === 'Travelers') {
			assert.isOk('Bundles page was skipped, we are now on Travelers.');
		}
	}

	clickRespBundle() {
		$(bundlesPageContinueButton).waitForDisplayed({ timeout: 5000 });
		this.clickElement($(bundlesPageContinueButton));
	}
	validateFlightDetailsFromTripSummary(){
		do {
				browser.pause(500)
	} while ($(spinnerBar).isDisplayed())
		$(headerCartButton).waitForDisplayed({ timeout: 10000 });	
		$(headerCartButton).click()
		var departFlightFare=parseFloat(flightPageCollector.get('departFlightFare'))
		var returnFlightFare=parseFloat(flightPageCollector.get('returnFlightFare'))
		if(isNaN(returnFlightFare)){
		returnFlightFare=0	
		}
		$(tripTotalValue).waitForDisplayed()
		assert.equal(
			$(tripTotalValue).getText().split('$')[1],
			(parseFloat(departFlightFare)+parseFloat(returnFlightFare))*parseInt($(SeatedPaxCount).getText().replace("Seated","")),
			'Validation failed:  Mismatch in Fare'
		)
		try{
			bundlePageCollector.set('flightFareWithoutTax',$(flightFareWithoutTax).getText().split('$')[1])
			//bundlePageCollector.set('flightFareSubTotalWithoutTax',$(flightFareSubTotalWithoutTax).getText().split('$')[1])
			$(airlineFees).click()
			bundlePageCollector.set('airlineFees',$(airlineFees).getText().split('$')[1])	
			$(carrierUsageCharge).waitForDisplayed()		
		    bundlePageCollector.set('carrierUsageCharge',$(carrierUsageCharge).getText().split('$')[1])	
		    $(governmentTaxesAndFees).click()
            $(pfc).waitForDisplayed()		
		    bundlePageCollector.set('governmentTaxesAndFees',$(governmentTaxesAndFees).getText().split('$')[1])		 
            bundlePageCollector.set('pfc',$(pfc).getText().split('$')[1])  
            bundlePageCollector.set('securityFees',$(securityFees).getText().split('$')[1])
		    bundlePageCollector.set('segmentFees',$(segmentFees).getText().split('$')[1])    
            bundlePageCollector.set('fedTax',$(fedTax).getText().split('$')[1])
		}
		catch(ex){  
			console.log("exception while collecting tax details "+ex)
      	}
		try{					
			$(headerCartButton).click()	
		}
		catch(ex){
			$(cartClose).click()
		}			
	}
	validateBundleCheckedBagCount(checkedBag) {
		if(checkedBag === '1') {
		assert.equal(
			$(totalBundleCheckedBag).isDisplayed(),
			true,
			'Bundle CheckedBag Count is not displayed'
		);
		} else {
		assert.equal(
			$(totalBundleCheckedBagCount).getText().replace("x", ""),
			eval(checkedBag),
			'Validation Failed: Bundle CheckedBag Count is not displayed'
		);
		}
	}
	continueOnBundlesPageIfNotSkipped() {
		try {
		  $(bundlesPageHeading).waitForDisplayed(15000);
		  $(clickContinueButton).waitForDisplayed();
		  browser.pause(1000);
		  $(clickContinueButton).click();
		} catch (ex) {
		  console.log('Bundles page skipped!!!');
		}
	  }

	validatePriorityAccessBoxText(expectedText) {
		let priorityAccessBoxText = $("[data-hook='priority-boarding-card_description-1']").getText();
		assert.isTrue(priorityAccessBoxText.includes(expectedText), "The Priority Access box text is incorrect");
	}

	validateTripFlexBoxText(expectedText) {
		let tripFlexBoxText = $("[data-hook='trip-flex-card_description-1']").getText();
		assert.equal(tripFlexBoxText, expectedText, "The Trip Flex box text is incorrect");
	}

	navigateToPage(expectedPage) {
		let currentPage = browser.getUrl().split("/")[5];
		let currentUrl = browser.getUrl();
		browser.url(currentUrl.replace(currentPage, expectedPage));
	}
}

export { bundleItems, bundlePrice ,bundlePageCollector}
export default new BundlesPage();
