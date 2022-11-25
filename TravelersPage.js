import { Page, Actions } from '@g4/prova';
import { collect } from '@g4/prova/src/helpers/collector';
import { assert } from 'chai';
import { departDate, returnDate } from '../pageobjects/FlightPage.js'
import { profileSavedTravelerList } from '../pageobjects/ProfilePage.js'
const clickContinueButton = "[data-hook='travelers-page_continue']";
const pageTitle = "//title";
const spinnerBar = "//span[contains(@data-hook,'spinner')]";
const icePopupClose = "[data-hook='payment-page_ice-popup_close']";
const tripTotal = "[data-hook='header-cart-button_label']"
const totalBundleTripTotal = "//strong[text()='Allegiant Total Bundle']";
const bonusBundleTripTotal = "//strong[text()='Allegiant Bonus Bundle']";
const bundlePrice = "//span[@data-hook='cart-item_bundles_value']";
const tripTotalButton = "[data-hook='header-cart-button']";
const cartItemBundles = "[data-hook='cart-item_bundles_link']";
const bundlesBreadcrumb = "[data-hook='flights-breadcrumb_item-bundles']";
const travelersGovernmentLink = "//a[contains(text(),'issued photo id')]";
const seatsPageHeading = "[data-hook='seats-page_page-heading']";
const TravelersPageHeading = "[data-hook='travelers-page_page-heading']";
const TravelersPageSubTitle = "[data-hook='travelers-page_subtitle']";
const specialAssistance = "[data-hook='travelers-form_adults_X_ssrs-section_label']";
const useTheSameOptionsForAllFlights = "[data-hook='travelers-form_adults_X_same-ssr-options_label']";
const useTheSameOptionsForAllFlightsChecked = "//input[@name='adults.X.same-ssr-options'][@value='true']";
const travelersPageSsrLabel = "[data-hook='travelers-form_adults_X_LEG_SSR_label']";
const departingWheelchairAssistance = "//label[@data-hook='travelers-form_adults_X_departing_airport-provided-wheelchair_label']//div[contains(@class,'Checkbox')]";
const returningWheelchairAssistance = "[data-hook='travelers-form_adults_X_returning_airport-provided-wheelchair_label']";
const departingPersonalWheelchairOrScooter = "[data-hook='travelers-form_adults_0_departing_wheelchair_label']";
const returningPersonalWheelchairOrScooter = "[data-hook='travelers-form_adults_0_returning_wheelchair_label']";
const departingWheelchairWCHS = "[data-hook='travelers-form_adults.0.departing_WCHS']";
const returningWheelchairWCHS = "[data-hook='travelers-form_adults.0.returning_WCHS']";
const wheelchairType = "[data-hook='travelers-form_adults.X.LEG_SSRTYPE']";
const departingPersonalWheelchairWCBW = "[data-hook='travelers-form_adults.0.departing_WCBW']";
const returningPersonalWheelchairWCBW = "[data-hook='travelers-form_adults.0.returning_WCBW']";
const departingOxygenConcentrator = "[data-hook='travelers-form_adults_0_departing_oxygen-concentrator_label']";
const returningOxygenConcentrator = "[data-hook='travelers-form_adults_0_returning_oxygen-concentrator_label']";
const departingEmotionalSupport = "(//span[contains(text(),'Emotional Support')])[1]";
const returningEmotionalSupport = "(//span[contains(text(),'Emotional Support')])[2]";
const departingDeaf = "(//span[contains(text(),'Deaf')])[1]";
const returningDeaf = "(//span[contains(text(),'Deaf')])[2]";
const departingBlind = "(//span[contains(text(),'Blind')])[1]";
const returningBlind = "(//span[contains(text(),'Blind')])[2]";
const departingServiceAnimal = "(//span[contains(text(),'Service Animal')])[1]";
const returningServiceAnimal = "(//span[contains(text(),'Service Animal')])[2]";
const otherServicesInformation = "//textarea[contains(@data-hook,'travelers-form_adults_X_LEG_')]";
const departingOtherServicesInformation = "//textarea[contains(@data-hook,'travelers-form_adults_X_departing_')]";
const returningOtherServicesInformation = "//textarea[contains(@data-hook,'travelers-form_adults_X_returning_')]";
const departingFlightSSR = "(//span[contains(text(),'Departing')])[2]";
const returningFlightSSR = "(//span[contains(text(),'Returning')])[2]";
const departingwheelchairAssitanceErrorMessage = "(//em[contains(text(),'Please select an option')])[1]";
const departingPersonalWheelchairErrorMessage = "(//em[contains(text(),'Please select an option')])[1]";
const dpnaSublineText = "//span[contains(text(),'Passenger will be traveling alone and will require')]";
const pocSublineText = "[data-hook='oxygen-concentrator_faq']";
const saSublineText = "[data-hook='service-animal_faq']";
const esSublineText = "[data-hook='emotional-support-animal_faq']";
const emotionalSupportFAQ = "//span[@data-hook='emotional-support-animal_faq']//emotional-support-animal-track//a"
const serviceAnimalFAQ = "//span[@data-hook='service-animal_faq']//service-animal-track//a"
const cartItemBundlesLink = "[data-hook='cart-item_bundles_link']";
const adultTravelerSSRSelectionLabel = "[data-hook='travelers-form_adults_X_ssrs-section_label']";
const specialAssistanceHeaderParagraph = "(//span[contains(text(),'Allegiant is happy to assist passengers with disa')])[1]";
const clickFaqLink = "(//a[contains(text(),'FAQs')])[1]";
const clickFaqLinkInDisclaimer = "(//a[contains(text(),'FAQ')])[3]";
const clickVisitOurFaqLink = "(//a[contains(text(),'visit our FAQs')])[1]";
const clickVisitOurContactUsLink = "(//a[contains(text(),'please visit our')])[1]";
const faqPageHeader = "//strong[contains(text(),'Passengers with Special Needs')]";
const contactUsPageHeader = "//h1[@class='pane-title']";
const nextSteps = "//span[contains(text(),'Next steps')]";
const ssrDisclaimar1 = "[data-hook='travelers-form_ssr_disclaimer_1']";
const ssrDisclaimar2 = "[data-hook='travelers-form_ssr_disclaimer_2']";
const travelersFormFieldErrorMessage = "[data-hook='field-error-message_TYPE.X.FIELD']";
const travelersFormInfantInLap = "[data-hook='travelers-form_infantsInLap_X_designated-lap']";
const departingDayDateFromHeader = "[data-hook*='header-flight-info_departing-date']";
const travelersFormFieldDetails = "[data-hook='travelers-form_TYPE_X_FIELD']";
const travelersFormField = "[data-hook='travelers-form_TYPE_X']";
const clearFormButton = "[data-hook='travelers-form_TYPE_X_clear_form']";
const clearFormButtonText = "(//button[contains(text(),'Clear Form')])";
const savedTravelersDropDownOption = "[data-hook='travelers-form_TYPE_X_saved-traveler']"
const savedTravelersDropDownOptionSelection = "//div[contains(@id,'react-select-TYPE.X.saved-traveler-option-Y')]"
const savedTravelersDropDown = "[data-hook='travelers-form_TYPE_X_saved-traveler']"
const savedTravelersCheckbox = "[data-hook='travelers-form_adults_X_save-as-saved-traveler_label']"
const knownTravelerRedressAddCancel = "(//span[contains(@data-hook,'travelers-form_adults_X_known-traveler-redress-section_label')])"
const sameOptionCheckBox = "(//label[contains(@data-hook,'same-ssr-options_label')])[X]"
const cancelSSR = "[data-hook='travelers-form_adults_X_ssrs-section_close-button']"
const savedTravelerList = "//div[contains(@id,'saved-traveler-option-')]";
const knownTravelerNumInfo = "(//button[@data-hook='undefined_popover_trigger'])[1]"
const RedressNumInfo = "(//button[@data-hook='undefined_popover_trigger'])[2]"
const knownTravelerNumInfoContent = "(//div[@data-hook='undefined_popover_content']//div//span)[1]"
const RedressNumInfoContent = "(//div[@data-hook='undefined_popover_content']//div//span)[2]"
const designatedLapField = "//div[@data-hook='travelers-form_TYPE_X_designated-lap']//div//div//div"
const firstName = "[data-hook='travelers-form_adults_X_first-name']"
const LastName = "[data-hook='travelers-form_adults_X_last-name']"
const designatedLapDropDownOptionSelection = "//div[contains(@id,'react-select-infantsInLap.X.designated-lap-option-Y')]"
const designatedLapErrorMsg = "[data-hook='field-error-message_infantsInLap.X.designated-lap']"
const wheelchairErrorMsg = "[data-hook='field-error-message_adults.X.departing_airport-provided-wheelchair']"
const genderErrorMsg = "[data-hook='field-error-message_adults.X.gender']"
const lastNameErrorMsg = "[data-hook='field-error-message_adults.X.last-name']"
const DOBYear = "(//input[contains(@data-hook,'dob-year')])[X]"
const firstNameInputField = "(//input[contains(@data-hook,'first-name')])[X]"
const LastNameInputField = "(//input[contains(@data-hook,'last-name')])[X]"
const defaultCountryCode = "//div[contains(text(),'US (+1)')][1]"
const travelerMonth = "//div[contains(text(),'May')]"
const travelerDate = "//div[contains(text(),'27')]"
const travelerYear = "//input[@id='adults.0.dob-year']"
var TravelerList = [];
const firstNameTest = "//input[@data-hook='travelers-form_adults_0_first-name']";
const lastNameTest = "//input[@data-hook='travelers-form_adults_0_last-name']";
const genmale = "//*[contains(@data-hook,'gender_MALE')]";
const genfemale="//*[contains(@data-hook,'gender_FEMALE')]";
class TravelersPage extends Page {

	validatePageTitle(title) {
		browser.pause(5000);
		$(clickContinueButton).waitForEnabled()
		assert.equal(
			$(pageTitle).getTitle(),
			title,
			'Travelers page validation failed!!'
		);
	}
	validatePageHeader(header) {
		assert.equal(
			$(TravelersPageHeading).getText(),
			header,
			'Travelers page header validation failed!!'
		);
	}
	validatePageSubTitle(subTitle) {
		assert.equal(
			$(TravelersPageSubTitle).getText(),
			subTitle,
			'Travelers page header validation failed!!'
		);
	}
clickTripTotalButton() {
		do {
        browser.pause(50);
      } while ($(spinnerBar).isDisplayed());
      if ($(icePopupClose).isDisplayed()) {
      $(icePopupClose).click();
      }
		$(tripTotal).click()
	}

	validateTotalBundleTripTotal(bundleType) {
		assert.equal(
			$(totalBundleTripTotal).getText(),
			bundleType,
			'totalBundle TripTotal name validation fail!!'
		);
	}
	validateBonusBundleTripTotal(bundleType) {
		assert.equal(
			$(bonusBundleTripTotal).getText(),
			bundleType,
			'bonusBundle TripTotal name validation fail!!'
		);
	}
	clickTravelersPageTripTotalButton() {
		$(tripTotalButton).click()
		browser.pause(500);
	}

	validateBundlesNotInTripSummary(noBundles) {
		assert.equal(
			$(cartItemBundles).getText(),
			noBundles,
			'Bundles included in trip summary'
		);
	}

	clickBundlesBreadcrumb() {
		$(bundlesBreadcrumb).click()
	}

	enterTravelerFirstName(firstName) {
		browser.pause(2000);
		// $(TravelersPageHeading).waitForDisplayed();
		// var Fname = firstName.split('|')
		// var travelerNum = 0;
		// for (var i = 0; i < Fname.length; i++) {
		// 	console.log("Fname: " + Fname[i])
		// 	console.log("Fname: " + firstName)
		// 	travelerNum = travelerNum + 1;
		// 	var travelerFirstName = "(//input[contains(@data-hook,'first-name')])[" + travelerNum + "]"
		// 	$(travelerFirstName).scrollIntoView();
		// 	if ($(travelerFirstName).isClickable()) {
		// 		$(travelerFirstName).click()
		// 		$(travelerFirstName).setValue('')
		// 		browser.pause(5)
		// 		$(travelerFirstName).clearValue()
		// 		$(travelerFirstName).setValue(Fname[i])
		// 	}
		// 	browser.pause(200)
		// }
		$(firstNameTest).setValue("Shubham");
		browser.pause(3000);
		$(firstNameTest).clearValue();
		$(firstNameTest).setValue("");
		$(firstNameTest).setValue(firstName);
	}

	honeySinghMethod(firstName){
		browser.pause(2000);
		
		$(firstNameTest).setValue(firstName);
	}
	lastnamemethod(LastName){
		browser.pause(1000);
		$(lastNameTest).setValue(LastName);
		browser.pause(1000);
		
	}
	gendermethod(gender){
		
		 if(gender === "male"){
			// $(genmale).scrollIntoView();
			 $(genmale).isClickable()
				$(genmale).click();
		}	
		else if (gender === "female"){
			$(genfemale).isClickable;
			$(genfemale).click();
		}
		
		
		browser.pause(1000);
	}
	clickContinueButton() {
		$(clickContinueButton).waitForEnabled();
		$(clickContinueButton).click()
		browser.pause(100);

	}

	selectDOB(dateOfBirth){
		
		    var travelerDOBMonth = "//div[contains(@data-hook,'dob-month')]"
			var travelerDOBDate = "//div[contains(@data-hook,'dob-day')]"
			var travelerDOBYear = "//input[contains(@data-hook,'dob-year')]"
			let date = dateOfBirth.slice(0, 2).replace("0", "")
			let month = dateOfBirth.slice(3, 5).replace("0", "")
			let year = dateOfBirth.slice(6)
			$(travelerDOBMonth).scrollIntoView();
			if ($(travelerDOBMonth).isClickable()) {
				$(travelerDOBMonth).click()
				browser.keys(String(month));
				browser.pause(200);
				browser.keys('Enter');
			}
			$(travelerDOBDate).scrollIntoView();
			if ($(travelerDOBDate).isClickable()) {
				$(travelerDOBDate).click()
				browser.keys(String(date));
				browser.pause(200);
				browser.keys('Enter');
			}

			$(travelerDOBYear).scrollIntoView();
			if ($(travelerDOBYear).isClickable()) {
				$(travelerDOBYear).click()
				$(travelerDOBYear).setValue(year)
				// const value = String(year)
                // const strLen = value.split('');
                // for (let i = 0; i < value.length; i++) {
                //  $(travelerDOBYear).addValue(strLen[i]);
                //  browser.pause(10);
                // }
				// //$(travelerDOBYear).setValue(year)
			}
			browser.pause(200)
		}
	
	selectseat(){
		const seat="//*[@data-hook='select-economy-seat_unrestricted_22C']"
		$(seat).isClickable();
		$(seat).click();
	}
	
	selectreturnseat(){
		const returnseat="//*[@data-hook='select-economy-seat_unrestricted_taken_8A']";
		browser.pause(100);
		$(returnseat).scrollIntoView();
		$(returnseat).isClickable();
		$(returnseat).click();
	}
	clickcontinue(){
		const clickcontinueButton="//*[@data-hook='seats-page_continue']";
		
		$(clickcontinueButton).waitForEnabled();
		$(clickcontinueButton).click()
		browser.pause(100);
	}
	clickcontinuee(){
		const continuee="//*[text()='No thanks, skip seat selection.']"
		$(continuee).waitForEnabled();
		$(continuee).click();
		browser.pause(1000);
	}
	enterTravelerLastName(lastName) {
		var lname = lastName.split('|')
		var travelerNum = 0;
		for (var i = 0; i < lname.length; i++) {
			console.log("lname: " + lname[i])
			travelerNum = travelerNum + 1;
			var travelerLastName = "(//input[contains(@data-hook,'last-name')])[" + travelerNum + "]"
			$(travelerLastName).scrollIntoView();
			if ($(travelerLastName).isClickable()) {
				$(travelerLastName).click()
				$(travelerLastName).setValue('')
				browser.pause(5)
				$(travelerLastName).clearValue()
				$(travelerLastName).setValue(lname[i])
			}
			browser.pause(200)
		}
	}

	selectTravelerGender(gender) {
		var gen = gender.split('|')
		var travelerNum = 0;
		for (var i = 0; i < gen.length; i++) {
			travelerNum = travelerNum + 1;
			var male = "((//*[contains(@data-hook,'gender_MALE')])[" + travelerNum + "]"
			var female = "(//*[contains(@data-hook,'gender_FEMALE')])[" + travelerNum + "]"

			if (gen[i] === "male") {
				$(male).scrollIntoView();
				if ($(male).isClickable()) {
					$(male).click()
				}
			}
			else if (gen[i] === "female") {
				$(female).scrollIntoView();
				if ($(female).isClickable()) {
					$(female).click()
				}
			}
			browser.pause(200)
		}
	}

	selectTravelerDOB(dateOfBirth) {
		var DOB = dateOfBirth.split('|')
		var travelerNum = 0;
		for (var i = 0; i < DOB.length; i++) {
			travelerNum = travelerNum + 1;
			var travelerDOBMonth = "(//div[contains(@data-hook,'dob-month')])[" + travelerNum + "]"
			var travelerDOBDate = "(//div[contains(@data-hook,'dob-day')])[" + travelerNum + "]"
			var travelerDOBYear = "(//input[contains(@data-hook,'dob-year')])[" + travelerNum + "]"
			let date = DOB[i].slice(0, 2).replace("0", "")
			let month = DOB[i].slice(3, 5).replace("0", "")
			let year = DOB[i].slice(6)
			$(travelerDOBMonth).scrollIntoView();
			if ($(travelerDOBMonth).isClickable()) {
				$(travelerDOBMonth).click()
				browser.keys(String(month));
				browser.pause(200);
				browser.keys('Enter');
			}

			$(travelerDOBDate).scrollIntoView();
			if ($(travelerDOBDate).isClickable()) {
				$(travelerDOBDate).click()
				browser.keys(String(date));
				browser.pause(200);
				browser.keys('Enter');
			}

			$(travelerDOBYear).scrollIntoView();
			if ($(travelerDOBYear).isClickable()) {
				$(travelerDOBYear).click()
				$(travelerDOBYear).setValue('')
				const value = String(year)
                const strLen = value.split('');
                for (let i = 0; i < value.length; i++) {
                 $(travelerDOBYear).addValue(strLen[i]);
                 browser.pause(10);
                }
				//$(travelerDOBYear).setValue(year)
			}
			browser.pause(200)
		}
	}
	// enterDOBForTravelerByType(DOB, travelerType, travelerTypeNum) {

	// 	if ($(clearFormButton.replace("TYPE", travelerType).replace("X", 0)).isDisplayed()) {
	// 		$(clearFormButton.replace("TYPE", travelerType).replace("X", 0)).click()
	// 	}
	// 	var travelerMonth = "[data-hook='travelers-form_travelerType_Y_dob-month']"
	// 	var travelerDate = "[data-hook='travelers-form_travelerType_Y_dob-day']"
	// 	var travelerYear = "[data-hook='travelers-form_travelerType_Y_dob-year']"
	// 	var newDOB = this.getDOB(DOB)
	// 	var month = newDOB.getMonth() + 1
	// 	var date = newDOB.getDate()
	// 	var year = newDOB.getFullYear()
	// 	$(travelerMonth.replace("travelerType", travelerType).replace("Y", travelerTypeNum - 1)).scrollIntoView();
	// 	if ($(travelerMonth.replace("travelerType", travelerType).replace("Y", travelerTypeNum - 1)).isClickable()) {
	// 		$(travelerMonth.replace("travelerType", travelerType).replace("Y", travelerTypeNum - 1)).click()
	// 		browser.keys(String(month));
	// 		browser.keys('Enter');
	// 	}

	// 	$(travelerDate.replace("travelerType", travelerType).replace("Y", travelerTypeNum - 1)).scrollIntoView();
	// 	if ($(travelerMonth.replace("travelerType", travelerType).replace("Y", travelerTypeNum - 1)).isClickable()) {
	// 		$(travelerDate.replace("travelerType", travelerType).replace("Y", travelerTypeNum - 1)).click()
	// 		browser.keys(String(date));
	// 		browser.keys('Enter');
	// 	}
	// 	$(travelerYear.replace("travelerType", travelerType).replace("Y", travelerTypeNum - 1)).scrollIntoView();
	// 	if ($(travelerMonth.replace("travelerType", travelerType).replace("Y", travelerTypeNum - 1)).isClickable()) {
	// 		$(travelerYear.replace("travelerType", travelerType).replace("Y", travelerTypeNum - 1)).click()
	// 		$(travelerYear.replace("travelerType", travelerType).replace("Y", travelerTypeNum - 1)).setValue('')
	// 		$(travelerYear.replace("travelerType", travelerType).replace("Y", travelerTypeNum - 1)).setValue(year)
	// 		browser.keys('Tab');
	// 	}

	// }
	getDOB(DOB) {
		var newDOB = new Date(departDate);

		if (DOB === "adult") {
			newDOB.setDate(newDOB.getDate() - 12000);
		}
		if (DOB === "child") {
			newDOB.setDate(newDOB.getDate() - 5000);
		}
		if (DOB === "infant") {
			newDOB.setDate(newDOB.getDate() - 200);
		}
		if (DOB === "currentDate") {
			newDOB.setDate(newDOB.getDate() - 0);
		}
		if (DOB === "yearInFuture") {
			newDOB.setDate(newDOB.getDate() + 366);
		}
		if (DOB === ">2yrsForRetrunflight") {
			newDOB = new Date(returnDate);
			newDOB.setDate(newDOB.getDate() - 732);
		}
		if (DOB === "infantInLapReturnDate") {
			newDOB = new Date(returnDate);
			newDOB.setDate(newDOB.getDate() - 731);
		}
		if (DOB === "infantInLapDepartDate") {
			newDOB = new Date(departDate);
			newDOB.setDate(newDOB.getDate() - 731);
		}
		if (DOB === "infantInLapDepartBeforeDate") {
			newDOB = new Date(departDate);
			newDOB.setDate(newDOB.getDate() - 732);
		}
		if (DOB === "infantInLapDepartNextDate") {
			newDOB = new Date(departDate);
			newDOB.setDate(newDOB.getDate() - 730);
		}
		if (DOB === "infantInLapReturnNextDate") {
			newDOB = new Date(returnDate);
			newDOB.setDate(newDOB.getDate() - 730);
		}
		return newDOB
	}
	enterTravelerEmailId(email) {
		var emailAddress = email.split('|')
		var travelerNum = 0;
		for (var i = 0; i < emailAddress.length; i++) {
			travelerNum = travelerNum + 1;
			var travelerEmailId = "(//input[contains(@data-hook,'email')])[" + travelerNum + "]"
			$(travelerEmailId).scrollIntoView();
			if ($(travelerEmailId).isClickable()) {
				$(travelerEmailId).click()
				$(travelerEmailId).clearValue();
				$(travelerEmailId).setValue(emailAddress[i])
			}
		}
		browser.keys("Tab")
		browser.pause(200)
	}
	enterTravelerPhone(phone) {
		var phoneNumber = phone.split('|')
		var travelerNum = 0;
		for (var i = 0; i < phoneNumber.length; i++) {
			travelerNum = travelerNum + 1;
			var travelerPhone = "(//input[contains(@data-hook,'phone-number')])[" + travelerNum + "]"
			if ($(travelerPhone).isClickable()) {
				$(travelerPhone).click()
				$(travelerPhone).setValue(phoneNumber[i])
			}
			browser.pause(200)
		}
	}
	

	clickContinueButtonWithoutOptionSelection() {
		$(clickContinueButton).waitForEnabled();
		$(clickContinueButton).click()
		browser.pause(1000);
	}

	clickSpecialAssistance(paxNum) {
		$(specialAssistance.replace("X", paxNum - 1)).click();
		browser.pause(1000);
	}

	clickOnSsrCheckbox(segment, ssr, paxNum) {
		if (segment === "departing") {
			$(travelersPageSsrLabel.replace('X', paxNum - 1).replace('LEG', segment).replace('SSR', ssr)).click();
		}
		browser.pause(1000);
		if (segment === "returning") {
			$(useTheSameOptionsForAllFlights.replace("X", paxNum - 1)).click()
			$(adultTravelerSSRSelectionLabel.replace('X', paxNum - 1)).scrollIntoView()
			$(travelersPageSsrLabel
				.replace('X', paxNum - 1)
				.replace('LEG', segment)
				.replace('SSR', ssr)).click()
			browser.pause(1000)
		}
	}


	clickOnSsrTypeCheckbox(segment, ssrType, paxNum) {
		if (segment === "departing") {
			$(wheelchairType
				.replace('X', paxNum - 1)
				.replace('LEG', segment)
				.replace('SSRTYPE', ssrType)).click()

		}
		browser.pause(1000);
		if (segment === "returning") {
			$(useTheSameOptionsForAllFlights.replace("X", paxNum - 1)).click
			$(adultTravelerSSRSelectionLabel.replace('X', paxNum - 1)).scrollIntoView()
			$(wheelchairType
				.replace('X', paxNum - 1)
				.replace('LEG', segment)
				.replace('SSRTYPE', ssrType)).click()
			browser.pause(1000)
		}
	}
	validateDefaultUseTheSameOptionsForAllFlights(paxNum) {
		assert.equal(
			eval($(useTheSameOptionsForAllFlightsChecked.replace('X', paxNum - 1)).getAttribute('value')),
			true,
			'Default Same Flight option not matched.'
		);
	}

	selectUseTheSameOptionsForAllFlights(paxNum) {
		$(useTheSameOptionsForAllFlights
			.replace('X', paxNum - 1)).click()
	}

	selectUseTheSameOptionsForAllFlightsTwice(paxNum) {
		$(useTheSameOptionsForAllFlights.replace('X', paxNum - 1)).scrollIntoView()
		$(useTheSameOptionsForAllFlights.replace('X', paxNum - 1)).click()
		$(useTheSameOptionsForAllFlights.replace('X', paxNum - 1)).click()
	}

	selectWheelchairAssistance(segment, paxNum) {
		if (segment === "Departing") {
			$(departingWheelchairAssistance.replace('X', paxNum - 1)).click()
		} else {
			$(returningWheelchairAssistance.replace('X', paxNum - 1)).click()
		}
	}
	selectPersonalWheelChairOrScooter(segment) {
		if (segment === "Departing") {
			$(departingPersonalWheelchairOrScooter).click()
		} else {
			$(returningPersonalWheelchairOrScooter).click()
		}
	}
	selectWheelchairAssistanceOption(segment) {
		if (segment === "Departing") {
			$(departingWheelchairWCHS).click()
		} else {
			$(returningWheelchairWCHS).click()
		}
	}
	selectPersonalWheelChairOrScooterOption(segment) {
		if (segment === "Departing") {
			$(departingPersonalWheelchairWCBW).click()
		} else {
			$(returningPersonalWheelchairWCBW).click()
		}
	}
	selectPortableOxygenConcentrator(segment) {
		if (segment === "Departing") {
			$(departingOxygenConcentrator).click()
		} else {
			$(returningOxygenConcentrator).click()
		}
	}
	selectEmotionalSupport(segment) {
		if (segment === "Departing") {
			$(departingEmotionalSupport).click()
		} else {
			$(returningEmotionalSupport).click()
		}
	}
	selectDeaf(segment) {
		if (segment === "Departing") {
			$(departingDeaf).click()
		} else {
			$(returningDeaf).click()
		}
	}
	selectBlind(segment) {
		if (segment === "Departing") {
			$(departingBlind).click()
		} else {
			$(returningBlind).click()
		}
	}
	selectServiceAnimal(segment) {
		if (segment === "Departing") {
			$(departingServiceAnimal).click()
		} else {
			$(returningServiceAnimal).click()
		}
	}
	enterOtherServicesInformation(segment, paxNum, testData) {
		if (segment === "departing") {
			$(otherServicesInformation
				.replace('X', paxNum - 1)
				.replace('LEG', segment)).click()
			$(otherServicesInformation
				.replace('X', paxNum - 1)
				.replace('LEG', segment)).setValue(testData)
		}
		browser.pause(1000);
		if (segment === "returning") {
			$(adultTravelerSSRSelectionLabel.replace('X', paxNum - 1)).scrollIntoView()
			$(otherServicesInformation
				.replace('X', paxNum - 1)
				.replace('LEG', segment)).click()
			$(otherServicesInformation
				.replace('X', paxNum - 1)
				.replace('LEG', segment)).setValue(testData)
			browser.pause(1000)
		}
	}
	validateDepartingTitle(title) {
		browser.pause(500);
		assert.equal(
			$(departingFlightSSR).getText(),
			title,
			'Departing Flight SSR option validation failed!!'
		);
	}
	validateReturningTitle(title) {
		browser.pause(500);
		$(returningFlightSSR).scrollIntoView();
		assert.equal(
			$(returningFlightSSR).getText(),
			title,
			'Returning Flight SSR option validation failed!!'
		);
	}

	getOtherServicesInformationData(paxNum) {
		var departingOtherServicesInformationText;
		var returningOtherServicesInformationText;

		departingOtherServicesInformationText = $(
			departingOtherServicesInformation
				.replace('X', paxNum - 1))
			.getText();

		returningOtherServicesInformationText = $(
			returningOtherServicesInformation
				.replace('X', paxNum - 1))
			.getText();
		return [departingOtherServicesInformationText, returningOtherServicesInformationText];
	}

	validateReturningOtherServicesInformationText(paxNum) {
		var [departingOtsData, returningOtsData] = this.getOtherServicesInformationData(paxNum);
		assert.equal(departingOtsData, returningOtsData,
			'Returning Other Services Information validation fail!!'
		);
	}
	validateWheelchairErrorMessage(ssr, errorMessage) {
		if (ssr === "airport-provided-wheelchair") {
			assert.equal(
				$(departingwheelchairAssitanceErrorMessage).getText(),
				errorMessage,
				'Wheelchair error message validation fail!!'
			);
		}
		if (ssr === "wheelchair") {
			assert.equal(
				$(departingPersonalWheelchairErrorMessage).getText(),
				errorMessage,
				'Personal wheelchair error message validation fail!!'
			);
		}
	}

	validateSublineText(ssr, ssrText) {
		if (ssr === "oxygen-concentrator") {
			assert.equal(
				$(pocSublineText).getText(),
				ssrText,
				'Portable Oxygen Concentrator Sub-line text validation fail!!'
			);
		}
		if (ssr === "service-animal") {
			assert.equal(
				$(saSublineText).getText(),
				ssrText,
				'Service Animal Sub-line text validation fail!!'
			);
		}
		if (ssr === "emotional-support-animal") {
			assert.equal(
				$(esSublineText).getText(),
				ssrText,
				'Emotional Support Animal Sub-line text validation fail!!'
			);
		}
		if (ssr === "intellectual-or-developmental-disability") {
			assert.equal(
				$(dpnaSublineText).getText(),
				ssrText,
				'DPNA Sub-line text validation fail!!'
			);
		}
	}

	clickBundlesAddorEditButtonFromHeader() {
		$(cartItemBundlesLink).click()
	}
	validateBundleSectionLabelInTripSummary(label) {
		assert.equal(
			$(cartItemBundlesLink).getText(),
			label,
			'validation failed: Bundle section label in TripSummary mismatch'
		);
	}
	validateSpecialAssistanceHeaderText(specialAssistanceHeaderText) {
		assert.equal(
			$(specialAssistanceHeaderParagraph).getText(),
			specialAssistanceHeaderText,
			'validation failed: Special Assistance Header Paragraph text mismatch'
		);
	}

	clickFAQLink(faq) {
		if (faq === "special assistance FAQs") {
			$(clickFaqLink).click();
		}
		if (faq === 'visit our FAQs') {
			$(clickVisitOurFaqLink).click();
		}
		if (faq === "faq in disclaimer") {
			$(clickFaqLinkInDisclaimer).click();
		}
		if (faq === "visit our contact us") {
			$(clickVisitOurContactUsLink).click();
		}
	}
	validateFAQPageHeader(faq, pageHeader) {
		if (faq === "special assistance FAQs") {
			browser.pause(1000);
			$(faqPageHeader).waitForDisplayed();
			assert.equal(
				$(faqPageHeader).getText(),
				pageHeader,
				'validation failed: Passenger with special needs header text mismatch'
			);
		}
		if (faq === "visit our FAQs") {
			browser.pause(1000);
			$(faqPageHeader).waitForDisplayed();
			assert.equal(
				$(faqPageHeader).getText(),
				pageHeader,
				'validation failed: Passenger with special needs header text mismatch'
			);
		}
		if (faq === "faq in disclaimer") {
			browser.pause(1000);
			$(faqPageHeader).waitForDisplayed();
			assert.equal(
				$(faqPageHeader).getText(),
				pageHeader,
				'validation failed: Passenger with special needs header text mismatch'
			);
		}
		if (faq === "visit our contact us") {
			browser.pause(1000);
			$(contactUsPageHeader).waitForDisplayed();
			assert.equal(
				$(contactUsPageHeader).getText(),
				pageHeader,
				'validation failed: Contact us header text mismatch'
			);
		}
	}
	validateSSRDisclaimer1(ssrDisclaimer1) {
		assert.equal(
			$(ssrDisclaimar1).getText(),
			ssrDisclaimer1,
			'validation failed: SSR Disclaimer one text mismatch'
		);
	}
	validateSSRDisclaimer2(ssrDisclaimer2) {
		assert.equal(
			$(ssrDisclaimar2).getText(),
			ssrDisclaimer2.replace("�", "’"),
			'validation failed: SSR Disclaimer two text mismatch'
		);
	}
	validateNextSteps(title) {
		assert.equal(
			$(nextSteps).getText(),
			title,
			'validation failed: Next Steps Title text mismatch'
		);
	}
	clickTravelersGovernmentLink() {
		browser.pause(1000);
		$(travelersGovernmentLink).isClickable();
		$(travelersGovernmentLink).click()
	}
	validateFieldFormErrorMessage(field, travelerType, paxNum, fieldErrorMessage) {
		let errMessage = $(travelersFormFieldErrorMessage
			.replace('X', paxNum - 1)
			.replace('TYPE', travelerType)
			.replace('FIELD', field)).getText();
		console.log("errMessage: " + travelersFormFieldErrorMessage.replace('X', paxNum - 1).replace('TYPE', travelerType).replace('FIELD', field))
		assert.equal(errMessage,
			fieldErrorMessage,
			'Field validation error message mismatch.'
		);
	}

	fillTravelerFormDetails(field, testData, travelerType, travelerNumber) {
		$(travelersFormFieldDetails.replace('X', travelerNumber - 1)
			.replace('TYPE', travelerType)
			.replace('FIELD', field)).click()
		$(travelersFormFieldDetails
			.replace('X', travelerNumber - 1)
			.replace('TYPE', travelerType)
			.replace('FIELD', field)).setValue(testData)
	}
	selectClearForm(travelerType, travelerNumber) {
		browser.pause(200);
		$(clearFormButton.replace('X', travelerNumber - 1)
			.replace('TYPE', travelerType)).click()
	}
	validateClearFormButtonDisplayed(travelerType, travelerNumber) {
		browser.pause(200);
		assert.equal($(clearFormButton
			.replace('X', travelerNumber - 1)
			.replace('TYPE', travelerType))
			.isDisplayed(),
			true, "Clear Form Button not Displayed"
		);
	}
	validateClearFormButtonNotDisplayed(travelerType, travelerNumber) {
		browser.pause(200);
		assert.equal($(clearFormButton
			.replace('X', travelerNumber - 1)
			.replace('TYPE', travelerType))
			.isDisplayed(),
			false, "Clear Form Button Displayed"
		);
	}
	validateNextTravelerClearFormButtonNotDisplayed(nextTravelerType, travelerNumber) {
		browser.pause(200);
		assert.equal($(clearFormButton
			.replace('X', travelerNumber - 1)
			.replace('TYPE', nextTravelerType))
			.isDisplayed(),
			false, "Clear Form Button Displayed"
		);
	}
	validateTravelersFormCleared(field, travelerType, travelerNumber) {
		browser.pause(200);
		assert.equal($(travelersFormFieldDetails
			.replace('X', travelerNumber - 1)
			.replace('TYPE', travelerType)
			.replace('FIELD', field)).getText(),
			false, "Travelers Form not cleared, Placeholder Mismatch"
		);
	}
	validateSavedTravelerDropDown(travelerType, paxNum) {
		browser.pause(200);
		assert.equal($(savedTravelersDropDownOption
			.replace('TYPE', travelerType)
			.replace('X', paxNum - 1)).isDisplayed(),
			true, "Saved Travelers Drop Down not displayed"
		);
	}
	selectSavedTravelerDropDown(travelerType, paxNum) {
		browser.pause(200);
		$(savedTravelersDropDownOption
			.replace('X', paxNum - 1)
			.replace('TYPE', travelerType)).click()
	}
	selectSavedTravelerDropDownOption(travelerType, paxNum, option) {
		browser.pause(200);
		$(savedTravelersDropDownOptionSelection
			.replace('X', paxNum - 1)
			.replace('TYPE', travelerType)
			.replace('OPTION', option)).click()
	}
	validateSavedTraveler(travelerType, paxNum, option) {
		browser.pause(200);
		assert.equal($(savedTravelersDropDownOptionSelection
			.replace('X', paxNum - 1)
			.replace('TYPE', travelerType)
			.replace('OPTION', option)).isClickable(),
			false, "Saved Traveler Enabled after selection"
		);
	}
	clickSavedTravelerDropDown(travelerType, typeNo) {
		$(savedTravelersDropDown.replace("X", typeNo - 1).replace("TYPE", travelerType)).click()
	}
	clickSavedTravelersCheckbox(paxNum) {
		$(savedTravelersCheckbox.replace("X", paxNum - 1)).click()
	}
	clickKTNAndRedressNumberAddCancel(travelerNum) {
		$(knownTravelerRedressAddCancel.replace("X", travelerNum - 1)).click()
	}
	clickSameOptionsForAllFlights() {
		$(sameOptionCheckBox.replace("X", 1)).click()
	}
	clickSSRFAQLink(ssr) {
		if (ssr === "emotional-support-animal") {
			$(emotionalSupportFAQ).click()
		}
		if (ssr === "service-animal") {
			$(serviceAnimalFAQ).click()
		}
	}
	getSavedTravelerList() {
		var savedTraveler = browser.$$(savedTravelerList)
		for (var i = 0; i < savedTraveler.length; i++) {
			TravelerList.push(savedTraveler[i].getText())
		}
	}
	validateSavedTravelerListSequence() {
		for (var i = 0; i < profileSavedTravelerList.length; i++) {
			assert.equal(
				TravelerList[i],
				profileSavedTravelerList[i],
				'Validtion failed: Mismatch in saved traveler list'
			);
		}
	}
	clickClearFormButton(travelerType) {
		if ($(clearFormButton.replace("TYPE", travelerType).replace("X", 0)).isDisplayed()) {
			$(clearFormButton.replace("TYPE", travelerType).replace("X", 0)).click()
		}
	}
	selectSavedTravelerFromDropDown(travelerType, typeNo) {
		var selectOption
		if (!$(savedTravelersDropDownOptionSelection.replace("TYPE", travelerType).replace("X", typeNo - 1).replace("Y", 4)).isDisplayed()) {
			this.selectSavedTravelerDropDown(travelerType, typeNo)
		}
		if (travelerType === 'adults') {
			if (typeNo === '1') {
				selectOption = 1
			}
			else {
				selectOption = 2
			}
		}
		if (travelerType === 'children') {
			if (typeNo === '1') {
				selectOption = 4
			}
		}
		if (travelerType === 'infantsInSeat') {
			if (typeNo === '1') {
				selectOption = 5
			}
		}
		$(savedTravelersDropDownOptionSelection.replace("TYPE", travelerType).replace("X", typeNo - 1).replace("Y", selectOption)).click()

	}
	validateSelectedSavedTravelerIsDisabled(travelerType, typeNo) {
		assert.equal(
			$(savedTravelersDropDownOptionSelection.replace("TYPE", travelerType).replace("X", typeNo - 1)).isClickable(),
			false,
			'Validtion failed: Selected saved traveler is not disabled in the next drop down'
		);
	}

	clickTSARedressInfo(info) {
		if (info === 'TSA') {
			$(knownTravelerNumInfo).click()
		}
		if (info === 'Redress') {
			$(RedressNumInfo).click()
		}
	}

	validateInfoContent(infoContent, number) {
		if (number === 'TSA') {
			assert.equal(
				$(knownTravelerNumInfoContent).getText().replace(/(\r\n|\n|\r)/gm, ""),
				infoContent,
				'Validtion failed: knownTraveler Num Info Content mismatch'
			);
		}
		if (number === 'Redress') {

			assert.equal(
				$(RedressNumInfoContent).getText().replace(/(\r\n|\n|\r)/gm, ""),
				infoContent,
				'Validtion failed: Redress Num Info Content mismatch'
			);
		}
	}
	validateDesignatedLapField(travelerType, typeNo) {
		assert.isTrue(
			$(designatedLapField.replace("TYPE", travelerType).replace("X", typeNo - 1)).isDisplayed(),
			true,
			'Validtion failed: designatedLap Field is not displayed'
		);
		assert.equal(
			$(firstName.replace("X", typeNo - 1)).getAttribute("value") + ' ' + $(LastName.replace("X", typeNo - 1)).getAttribute("value"),
			$(designatedLapField.replace("TYPE", travelerType).replace("X", typeNo - 1)).getText(),
			'Validtion failed: Mismatch in saved traveler list'
		);
	}

	validateDesignatedLapFieldNotPrePopulated(travelerType, typeNo) {
		assert.equal(
			$(designatedLapField.replace("TYPE", travelerType).replace("X", typeNo - 1)).getText(),
			'Traveler',
			'Validtion failed: Mismatch in saved traveler list'
		);
	}
	
	selectAdultForInfant(adultPaxNum, infantPaxNum) {
		$(designatedLapField.replace("TYPE", 'infantsInLap').replace("X", infantPaxNum - 1)).click();
		$(designatedLapDropDownOptionSelection.replace("X", infantPaxNum - 1).replace("Y", adultPaxNum - 1)).click();
	}

	validateDesignatedLapErrorMsg(fieldErrorMessage) {
		assert.equal(
			$(designatedLapErrorMsg.replace("X", 0)).getText(),
			fieldErrorMessage,
			'Validtion failed: designatedLapErrorMsg is not displayed correctly'
		);

	}

	validateSSRSectionInLineErrorMsg(fieldErrorMessage) {
		assert.equal(
			$(wheelchairErrorMsg.replace("X", 0)).isDisplayedInViewport(),
			true,
			'Validtion failed: autoscroll is not working correctly'
		);
		assert.equal(
			$(wheelchairErrorMsg.replace("X", 0)).getText(),
			fieldErrorMessage,
			'Validtion failed: wheelchairErrorMsg is not displayed correctly'
		);
	}

	validateTraveler1GenderInLineErrorMsg(fieldErrorMessage) {
		assert.equal(
			$(genderErrorMsg.replace("X", 0)).isDisplayedInViewport(),
			true,
			'Validtion failed: autoscroll is not working correctly'
		);
		assert.equal(
			$(genderErrorMsg.replace("X", 0)).getText(),
			fieldErrorMessage,
			'Validtion failed: genderErrorMsg is not displayed correctly'
		);
	}

	validateTraveler2LastNameInLineErrorMsg(fieldErrorMessage) {
		assert.equal(
			$(lastNameErrorMsg.replace("X", 1)).isDisplayedInViewport(),
			true,
			'Validtion failed: autoscroll is not working correctly'
		);
		assert.equal(
			$(lastNameErrorMsg.replace("X", 1)).getText(),
			fieldErrorMessage,
			'Validtion failed: lastNameErrorMsg is not displayed correctly'
		);
	}

	/**
	  * This function is used to format parameters from the feature file, to allow them to be more readable.
	  * It then converts them into a string, which is used to build a data hook.
	  * @param { String } travelerType e.g. "Adult" is formatted into "adult" and then converted into "adults"
	  *
	  * @returns { Object }
	  */
	getTravelerType(travelerType) {
		let formattedTravelerType = travelerType.toLowerCase().replace(/ /g, '_');
		let obj = {
			adult: 'adults',
			child: 'children',
			seat_infant: 'infantsInSeat',
			lap_infant: 'infantsInLap',
		};
		return obj[formattedTravelerType];
	}

	/**
	  * This function is used to open the Suffix field of the desired traveler. It clicks on the Last Name field and then hits Tab to move to the Suffix field, then hits Space to open the Suffix dropdown. The dropdown cannot be clicked by the driver for some reason.
	  * @param { String } travelerType   "Adult" "Child" "Seat Infant" "Lap Infant"
	  * @param { String } travelerNumber 1-9
	  */
	openSuffixField(travelerType, travelerNumber) {
		let chosenTravelerType = this.getTravelerType(travelerType);
		let lastNameSelector = "[data-hook='travelers-form_TYPE_NUMBER_last-name']".replace('TYPE', chosenTravelerType).replace('NUMBER', travelerNumber - 1);
		this.clickElement($(lastNameSelector));
		browser.keys("Tab");
		browser.keys("Space");
	}

	/**
	  * This function selects the desired suffix, depending on the provided parameter.
	  * @param { String } suffix   	  "Jr." "Sr." II" "III" "IV"
	  * @param { String } travelerType   "Adult" "Child" "Seat Infant" "Lap Infant"
	  * @param { String } travelerNumber 1-9
	  */
	selectSuffix(suffix, travelerType, travelerNumber) {
		this.openSuffixField(travelerType, travelerNumber);
		if (suffix === 'JR.') {
			browser.keys(["ArrowDown", "Enter"]);
		}
		else if (suffix === 'SR.') {
			browser.keys(["ArrowDown", "ArrowDown", "Enter"]);
		}
		else if (suffix === 'II') {
			browser.keys(["ArrowDown", "ArrowDown", "ArrowDown", "Enter"]);
		}
		else if (suffix === 'III') {
			browser.keys(["ArrowUp", "ArrowUp", "Enter"]);
		}
		else if (suffix === 'IV') {
			browser.keys(["ArrowUp", "Enter"]);
		}
	}

	collectTraveler1NameAndSuffix() {
		collect('traveler1FirstName', $("[data-hook='travelers-form_adults_0_first-name']").getAttribute('Value'));
		collect('traveler1MiddleName', $("[data-hook='travelers-form_adults_0_middle-name']").getAttribute('Value'));
		collect('traveler1LastName', $("[data-hook='travelers-form_adults_0_last-name']").getAttribute('Value'));
		collect('traveler1Suffix', $("//div[@data-hook='travelers-form_adults_0_suffix']/div/div/div").getText());
	}

	validateTravelerPrepopulatFormDetails(traveler, prepopulated) {
		if (prepopulated === 'true') {
			assert.isAbove(
				$(firstNameInputField.replace("X", traveler)).getAttribute('value').length,
				1,
				'Validation failed: Traveler: ' + traveler + ' firstName value prepopulated string length mismatch'
			);
			assert.isAbove(
				$(LastNameInputField.replace("X", traveler)).getAttribute('value').length,
				1,
				'Validation failed: Traveler ' + traveler + ' LastName value prepopulated string length mismatch'
			);
			assert.isAbove(
				$(DOBYear.replace("X", traveler)).getAttribute('value').length,
				1,
				'Validation failed: Traveler: ' + traveler + ' DOB value prepopulated string length mismatch'
			);
		}
		else {
			assert.isBelow(
				$(firstNameInputField.replace("X", traveler)).getAttribute('value').length,
				1,
				'Validation failed: Traveler: ' + traveler + ' firstName value prepopulated string length mismatch'
			);
			assert.isBelow(
				$(LastNameInputField.replace("X", traveler)).getAttribute('value').length,
				1,
				'Validation failed: Traveler: ' + traveler + ' LastName value prepopulated string length mismatch'
			);
			assert.isBelow(
				$(DOBYear.replace("X", traveler)).getAttribute('value').length,
				1,
				'Validation failed: Traveler: ' + traveler + ' DOB value prepopulated string length mismatch'
			);
		}
	}
	validateTravelerFirstName(traveler, Firstname) {
		assert.equal(
			$(firstNameInputField.replace("X", traveler)).getAttribute('value'),
			Firstname,
			'Validtion failed: Mismatch in firstName value'
		);
	}
	validateDefaultCountryCode(countryCode){
		assert.equal(
			$(defaultCountryCode).getText(),
			countryCode,			
			'Validtion failed: Default Country code not displayed'
		);
	}
	validateDOB(month, day, year){
		$(TravelersPageHeading).waitForDisplayed();
		assert.equal(
			$(travelerMonth).getText(),
			month,			
			'Validtion failed: DOB Month mismatch'
		);
		assert.equal(
			$(travelerDate).getText(),
			day,			
			'Validtion failed: DOB Date mismatch'
		);
		assert.equal(
			$(travelerYear).getValue(),
			year,			
			'Validtion failed: DOB Year mismatch'
		);
	}

	validateTravelersNameForLapInfant(adultName) {
		const lapInfantTravelerForm = travelersFormInfantInLap.replace("X", "0")
		$(lapInfantTravelerForm).waitForDisplayed();
		let travelerName= $(lapInfantTravelerForm).getText();
		assert.equal(travelerName, adultName, "Travelers name is wrong auto populated")
	}
}
export default new TravelersPage();