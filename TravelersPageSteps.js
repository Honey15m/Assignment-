import { Given, When, Then } from '@cucumber/cucumber';
import TravelersPage from '../pageobjects/TravelersPage.js';
import { Actions } from '@g4/prova';


When(/^I am on Travelers page I enter DOB "(.+)" for travelerType (.+) travelerTypeNum (.+) Travelers$/, function(DOB,travelerType,travelerTypeNum) {
	TravelersPage.enterDOBForTravelerByType( DOB ,travelerType,travelerTypeNum);
});
When(/^I am on Travelers page I enter First name "(.+)" for Travelers$/, function(firstName) {
	TravelersPage.enterTravelerFirstName(firstName);
});
When(/^I am on Travelers page I enter Last name "(.+)" for Travelers$/, function(lastName) {
	TravelersPage.enterTravelerLastName(lastName);
});
When(/^I am on Travelers page I select gender "(.+)" for Travelers$/, function(gender) {
	TravelersPage.selectTravelerGender(gender);
});
When(/^I am on Travelers page I enter DOB "(.+)" for Travelers$/, function(dateOfBirth) {
	TravelersPage.selectTravelerDOB(dateOfBirth);
});
When(/^I am on Travelers page I enter email "(.+)"$/, function(email) {
	TravelersPage.enterTravelerEmailId(email);
});
When(/^I am on Travelers page I enter phone "(.+)" for Traveler$/, function(phone) {
	TravelersPage.enterTravelerPhone(phone);
});
When(/^I am on Travelers page I click continue button$/, function() {
	TravelersPage.clickContinueButton();
});
When(/^I am on Travelers page I click continue button without option selection$/, function() {
	TravelersPage.clickContinueButtonWithoutOptionSelection();
});
When(/^I am on Travelers page I click on Special Assistance section for (.+)$/, function(paxNum) {
		TravelersPage.clickSpecialAssistance(paxNum);
});
When(/^I am on Travelers page I select (.+) segment (.+) SSR for traveler (.+)$/, function(segment, ssr, paxNum) {
		TravelersPage.clickOnSsrCheckbox(segment, ssr, paxNum);
});
When(/^I am on Travelers page I select (.+) segment (.+) SSR type for traveler (.+)$/, function(segment, ssrType, paxNum) {
		TravelersPage.clickOnSsrTypeCheckbox(segment, ssrType, paxNum);
});
When(/^I am on Travelers page I click on Special Assistance section$/, function() {
	//TravelersPage.clickSpecialAssistance();
});
When(/^I am on Travelers page I click on Use the same options for all flights for (.+)$/, function(paxNum) {
	TravelersPage.selectUseTheSameOptionsForAllFlights(paxNum);
});
When(/^I am on Travelers page I click on Use the same options for all flights twice for (.+)$/, function(paxNum) {
	TravelersPage.selectUseTheSameOptionsForAllFlightsTwice(paxNum);
});
When(/^I am on Travelers page I click on "(.+)" Wheelchair Assistance for traveler (.+)$/, function(segment,paxNum) {
    TravelersPage.selectWheelchairAssistance(segment,paxNum);
});
When(/^I am on Travelers page I click on "(.+)" Personal Wheelchair Or Scooter$/, function(segment) {
    TravelersPage.selectPersonalWheelChairOrScooter(segment);
});
When(/^I am on Travelers page I click on "(.+)" WCHS option in Wheelchair Assistance/, function(segment) {
    TravelersPage.selectWheelchairAssistanceOption(segment);
});
When(/^I am on Travelers page I click on "(.+)" WCBW option in Personal Wheelchair Or Scooter$/, function(segment) {
    TravelersPage.selectPersonalWheelChairOrScooterOption(segment);
});
When(/^I am on Travelers page I click on "(.+)" Portable Oxygen Concentrator$/, function(segment) {
    TravelersPage.selectPortableOxygenConcentrator(segment);
});
When(/^I am on Travelers page I click on "(.+)" Emotional Support$/, function(segment) {
    TravelersPage.selectEmotionalSupport(segment);
});
When(/^I am on Travelers page I click on "(.+)" Deaf$/, function(segment) {
    TravelersPage.selectDeaf(segment);
});
When(/^I am on Travelers page I click on "(.+)" Blind$/, function(segment) {
    TravelersPage.selectBlind(segment);
});
When(/^I am on Travelers page I click on "(.+)" Service Animal$/, function(segment) {
    TravelersPage.selectServiceAnimal(segment);
});
When(/^I am on Travelers page I fill (.+) segment other services information field for (.+) with "(.+)"$/, function(segment, paxNum, testData) {
    TravelersPage.enterOtherServicesInformation(segment, paxNum, testData);
});
When(/^I click on the Add or Edit button from the Bundles section of the Shopping Cart$/, function() {
	TravelersPage.clickBundlesAddorEditButtonFromHeader();
});
When(/^I am on Travelers page I click on FAQs from (.+) link$/, function(faq) {
	TravelersPage.clickFAQLink(faq);
});
When(/^I am on Travelers page I click saved Travelers dropdown for Traveler (.+)$/, function(travelerNum) {
	TravelersPage.clickSavedTravelerDropDown(travelerNum);
});
When(/^I am on Travelers page I select saved travelers dropdown for (.+) "(.+)"$/, function(travelerType, paxNum) {
	TravelersPage.selectSavedTravelerDropDown(travelerType, paxNum);
});
When(/^I am on Travelers page I click KTN and Redress number Add or Cancel for Traveler (.+)$/, function(travelerNum) {
	TravelersPage.clickKTNAndRedressNumberAddCancel(travelerNum);
});
When(/^I am on Travelers page I click (.+) FAQ$/, function(ssr) {
	TravelersPage.clickSSRFAQLink(ssr);
});
When(/^I am on Travelers page I select saved traveler for (.+) (.+) (.+)$/, function(travelerType, paxNum, option) {
	TravelersPage.selectSavedTravelerDropDownOption(travelerType, paxNum, option);
});
When(/^I am on Travelers page I get saved travelers list$/, function() {
	TravelersPage.getSavedTravelerList();
});
When(/^I am on Travelers page I click saved Traveler (.+) dropdown for travelerTypeNum (.+)$/, function(travelerType,typeNo) {
	TravelersPage.clickSavedTravelerDropDown(travelerType,typeNo);
});
When(/^I am on Travelers page I click clear form Traveler (.+) dropdown$/, function(travelerType) {
	TravelersPage.clickClearFormButton(travelerType);
});
When(/^I am on Travelers page I click on info icon for (.+)$/, function(info) {
	TravelersPage.clickTSARedressInfo(info);
});
When(/^I am on Travelers page I select suffix (.+) for (.+) (.+)$/, function(suffix, travelerType, travelerNumber) {
	TravelersPage.selectSuffix(suffix, travelerType, travelerNumber);
});
When(/^I am on Traveler page and I store the full name and suffix of traveler 1/, function () {
	TravelersPage.collectTraveler1NameAndSuffix();
});

Then(/^I am on Travelers page I expect title "(.+)"$/, function(title) {
	TravelersPage.validatePageTitle(title);
});
Then(/^I am on Travelers page I expect header description "(.+)"$/, function(header) {
	TravelersPage.validatePageHeader(header);
});
Then(/^I am on Travelers page I expect subtitle "(.+)"$/, function(subTitle) {
	TravelersPage.validatePageSubTitle(subTitle);
});
Then(/^I click Trip total from header$/, function() {
	TravelersPage.clickTripTotalButton();
});

Then(/^I am on Travelers page I expect "(.+)" displayed with price$/, function(bundleType) {
	if (bundleType === "Allegiant Total Bundle") {
		TravelersPage.validateTotalBundleTripTotal(bundleType);
	}
	else {
		TravelersPage.validateBonusBundleTripTotal(bundleType);
	}
});
Then(/^I am on travelers page I click on trip total from header$/, function() {
	TravelersPage.clickTravelersPageTripTotalButton();
});
Then(/^I am on travelers page I expect trip summary does not include Bundle and "(.+)" link displayed$/, function(noBundles) {
	TravelersPage.validateBundlesNotInTripSummary(noBundles);
});
Then(/^I am on travelers page I click on Bundles breadcrumb$/, function() {
	TravelersPage.clickBundlesBreadcrumb();
});
Then(/^I am on Travelers page I expect "(.+)" Depart Flight SSR option displayed$/, function(title) {
	TravelersPage.validateDepartingTitle(title);
});
Then(/^I am on Travelers page I expect "(.+)" Return Flight SSR option displayed$/, function(title) {
	TravelersPage.validateReturningTitle(title);
});
Then(/^I am on Travelers page I expect that the input from the Returning Other Service Information field for (.+) matches the input from the Departing field$/, function(paxNum) {
	TravelersPage.validateReturningOtherServicesInformationText(paxNum);
});
Then(/^I am on Travelers page I validate error message for the (.+) SSR option "(.+)"$/, function(ssr, errorMessage) {
	TravelersPage.validateWheelchairErrorMessage(ssr, errorMessage);
});
Then(/^I am on Travelers page I validate Intellectual or Developmental Disability Sub-line text "(.+)"$/, function(sublineText) {
	TravelersPage.validateDPNASublineText(sublineText);
});
Then(/^I am on Traveler page I expect checkbox for same options for all flights to be checked for traveler (.+)$/, function(paxNum) {
	TravelersPage.validateDefaultUseTheSameOptionsForAllFlights(paxNum);
});
Then(/^I am on Travelers page I expect (.+) to display for (.+)$/, function(ssr, ssrText) {
	TravelersPage.validateSublineText(ssr, ssrText);
});
Then(/^I am on Travelers page I expect special assistance header paragraph (.+)$/, function(specialAssistanceHeaderText) {
	TravelersPage.validateSpecialAssistanceHeaderText(specialAssistanceHeaderText);
});
Then(/^I am on FAQs page I expect (.+) header to be display for (.+)$/, function(faq, pageHeader) {
	TravelersPage.validateFAQPageHeader(faq, pageHeader);
});
Then(/^I am on Travelers page I expect "(.+)" title$/, function(title) {
	TravelersPage.validateNextSteps(title);
});
Then(/^I am on Travelers page I expect special assistance disclaimer one (.+)$/, function(ssrDisclaimer1) {
	TravelersPage.validateSSRDisclaimer1(ssrDisclaimer1);
});
Then(/^I am on Travelers page I expect special assistance disclaimer two (.+)$/, function(ssrDisclaimer2) {
	TravelersPage.validateSSRDisclaimer2(ssrDisclaimer2);
});
Then(/^I am on Travelers page I click on travelers government link$/, function() {
	TravelersPage.clickTravelersGovernmentLink();
});
Then(/^I am on Travelers page I expect "(.+)" field for "(.+)" (.+) is "(.+)"$/, function(field, travelerType, paxNum, fieldErrorMessage) {
    TravelersPage.validateFieldFormErrorMessage(field, travelerType, paxNum, fieldErrorMessage);
});
Then(/^I am on Travelers page I enter (.+) field with (.+) for (.+) (.+)$/, function(field, testData, travelerType, travelerNumber) {
    TravelersPage.fillTravelerFormDetails(field, testData, travelerType, travelerNumber);
});
Then(/^I am on Travelers page I expect Clear form button to be displayed for (.+) (.+)$/, function(travelerType, travelerNumber) {
    TravelersPage.validateClearFormButtonDisplayed(travelerType, travelerNumber);
});
Then(/^I am on Travelers page I select Clear form button for (.+) (.+)$/, function(travelerType, travelerNumber) {
    TravelersPage.selectClearForm(travelerType, travelerNumber);
});
Then(/^I am on Travelers page I expect next traveler clear form button not to be displayed (.+) (.+)$/, function(nextTravelerType, travelerNumber) {
    TravelersPage.validateNextTravelerClearFormButtonNotDisplayed(nextTravelerType, travelerNumber);
});
Then(/^I am on Travelers page I expect Clear form button not to be displayed (.+) (.+)$/, function(travelerType, travelerNumber) {
    TravelersPage.validateClearFormButtonNotDisplayed(travelerType, travelerNumber);
});
Then(/^I am on Travelers page I expect (.+) field to be cleared for (.+) (.+)$/, function(field, travelerType, travelerNumber) {
    TravelersPage.validateTravelersFormCleared(field, travelerType, travelerNumber);
});
Then(/^I am on Travelers page I click saved Travelers checkbox for Traveler (.+)$/, function(paxNum) {
	TravelersPage.clickSavedTravelersCheckbox(paxNum);
});
Then(/^I am on Travelers page I click on use the same options for all flights$/, function() {
	TravelersPage.clickSameOptionsForAllFlights();
});
Then(/^I am on Travelers page I expect saved travelers dropdown for (.+) (.+)$/, function(travelerType, paxNum) {
	TravelersPage.validateSavedTravelerDropDown(travelerType, paxNum);
});
Then(/^I am on Travelers page I expect saved traveler disabled after selection "(.+)" "(.+)" "(.+)"$/, function(travelerType, paxNum, option) {
	TravelersPage.validateSavedTraveler(travelerType, paxNum, option);
});
Then(/^I am on Travelers page I expect sequence of saved traveler matches with profile saved traveler list$/, function() {
	TravelersPage.validateSavedTravelerListSequence();
});
Then(/^I am on Travelers page I select (.+) saved traveler (.+) from the drop down$/, function(travelerType,typeNo) {
	TravelersPage.selectSavedTravelerFromDropDown(travelerType,typeNo);
});
Then(/^I am on Travelers page I expect selected saved Traveler (.+) travelerTypeNum (.+) is disabled in list$/, function(travelerType,typeNo) {
	TravelersPage.validateSelectedSavedTravelerIsDisabled(travelerType,typeNo);
});

Then(/^I am on Travelers page I expect "(.+)" to be display for (.+)$/, function(infoContent,number) {
	TravelersPage.validateInfoContent(infoContent,number);
});

Then(/^I am on Travelers page I expect designated-lap field for "(.+)" (.+) is pre-populated with Adult Travelers name$/, function(travelerType,typeNo) {
	TravelersPage.validateDesignatedLapField(travelerType,typeNo);
});

Then(/^I am on Travelers page I expect designated-lap field for "(.+)" (.+) is not pre-populated with Adult Travelers name$/, function(travelerType,typeNo) {
	TravelersPage.validateDesignatedLapFieldNotPrePopulated(travelerType,typeNo);
});

Then(/^I am on Travelers page I select adult (.+) as designated lap for infant (.+)$/, function(adultPaxNum,infantPaxNum) {
	TravelersPage.selectAdultForInfant(adultPaxNum,infantPaxNum);
});

Then(/^I am on Travelers page I expect validation error (.+) for designated-lap field$/, function(fieldErrorMessage) {
	TravelersPage.validateDesignatedLapErrorMsg(fieldErrorMessage);
});

Then(/^I am on Travelers page I expect to Autoscroll to SSR section where in-line error message "(.+)" displayed$/, function(fieldErrorMessage) {
	TravelersPage.validateSSRSectionInLineErrorMsg(fieldErrorMessage);
});

Then(/^I am on Travelers page I expect to Autoscroll to Traveler 1: gender where in-line error message "(.+)" displayed$/, function(fieldErrorMessage) {
	TravelersPage.validateTraveler1GenderInLineErrorMsg(fieldErrorMessage);
});

Then(/^I am on Travelers page I expect to Autoscroll to Traveler 2: LastName where in-line error message "(.+)" displayed$/, function(fieldErrorMessage) {
	TravelersPage.validateTraveler2LastNameInLineErrorMsg(fieldErrorMessage);
});
Then(/^I am on Travelers page I expect traveler (.+) form details pre-populated (.+)$/, function(traveler,prepopulated) {
	TravelersPage.validateTravelerPrepopulatFormDetails(traveler,prepopulated);
});
Then(/^I am on Travelers page I expect traveler (.+) form details persists (.+)$/, function(traveler,prepopulated) {
	TravelersPage.validateTravelerPrepopulatFormDetails(traveler,prepopulated);
});
Then(/^I am on Travelers page I type first name as "(.+)"$/, function(Firstname) {
	TravelersPage.honeySinghMethod(Firstname);
});
Then(/^I am on Travelers page I type last name as "(.+)"$/, function(Lastname) {
	TravelersPage.lastnamemethod(Lastname);
});
When(/^I am on Travelers page I Select gender as "(.+)" for travelers$/, function (gender) {
  TravelersPage.gendermethod(gender);
});
Then(/^I am on travelers page I click on continue button$/, function() {
	TravelersPage.clickContinueButton();
});

Then(/^I am on Travelers page and I validate that the adult name "([^"]*)" is auto populated for infant in lap$/, (adultName) => {
	TravelersPage.validateTravelersNameForLapInfant(adultName);
});
Then(/^I am on Seat page I select seats$/, function(){
	TravelersPage.selectseat()
});
Then(/^I am on seat Page I click continue button$/,function(){
	TravelersPage.clickcontinue();
});