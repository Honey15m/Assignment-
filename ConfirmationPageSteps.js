import { Given, When, Then } from '@cucumber/cucumber';
import ConfirmationPage from '../pageobjects/ConfirmationPage';
import MyTripPage from '../pageobjects/MyTrips';

When(/^I am on confirmation page I click manage trip button$/, function() {
  ConfirmationPage.clickManageTrip();
});

When(/^I am on confirmation page I click checkin button$/, function() {
  ConfirmationPage.clickCheckinButton();
});

When(/^I am on the Confirmation Page for mobile responsive I click on the Car Disclaimer Show All expando link$/, function () {
  ConfirmationPage.clickCarDisclaimerExpandoLink();
});

When(/^I am on the confirmation page I collect confirmation number$/, function () {
  ConfirmationPage.collectConfirmationNumber();
});

When(/^I am on the confirmation page I click on confirmation number$/, function () {
  ConfirmationPage.clickItn();
});
Then(/^I am on confirmation page I expect confirmation page anchor to top$/, function() {
  ConfirmationPage.validateConfirmationPageAnchorToTop();
});
Then(/^I am on the confirmation page and I get the confirmation number$/, function() {
  ConfirmationPage.confirmationNumberReturn();
});

Then(/^I am on the confirmation page I expect only departing leg is displayed$/, function() {
  ConfirmationPage.validateOnlyDepartingLegIsDisplayed();
});

Then(/^I am on the My trips page and validate the Deep Link and confirmation number$/, function() {
  MyTripPage.validateMyTripFromConfirmationPage();
});

Then(/^I am on the My trips page and I validate that confirmation number is correct$/, function() {
  MyTripPage.validateConfirmationNumber();
});

Then(/^I am on confirmation page I expect (.+) special assistance to be displayed for (.+)$/, function(ssr, ssrDisplay) {
	ConfirmationPage.validateConfirmationPageSpecialAssistance(ssr, ssrDisplay);
});

Then(/^I am on confirmation page I expect seat assignment to be displayed for "(.+)"$/, function(flightType) {
	ConfirmationPage.validateSelectedSeats(flightType);
});

Then(/^I am on confirmation page I expect seat assignment not to be displayed$/, function() {
	ConfirmationPage.validateSeatsNotAssigned();
});

Then(/^I am on confirmation page I expect correct seat assignment$/, function() {
	ConfirmationPage.validateSeatIdInConfirmationPage();
});

Then(/^I am on the confirmation page I expect confirmation number to be displayed$/, function() {
  ConfirmationPage.validateConfirmationNumberDisplayed();
});

Then(/^I am on confirmation page I expect "(.+)" SSR to be displayed for "(.+)" traveler$/, function(ssr,traveler) {
  ConfirmationPage.validateSSRDisplayed(ssr,traveler);
});

When(/^I am on the Confirmation page I click on 'THINGS TO KNOW BEFORE YOU GO'$/, function () {
  ConfirmationPage.clickOnThingsToKnow();
});

Then(/^I am on the Confirmation page I validate 'THINGS TO KNOW BEFORE YOU GO' conditions$/, function () {
  ConfirmationPage.validateThingsToKnow();
});

When(/^I am on the Confirmation page I click on 'SEAT ASSIGNMENTS'$/, function () {
  ConfirmationPage.clickOnSeatAssignments();
});

Then(/^I am on the Confirmation page I validate 'SEAT ASSIGNMENTS' conditions$/, function () {
  ConfirmationPage.validateSeatAssignments();
});

When(/^I am on the Confirmation page I click on 'BAGS,AIRPORT BAG FEES, AND MORE'$/, function () {
  ConfirmationPage.clickOnBagsVerbiage();
});

Then(/^I am on the Confirmation page I validate 'BAGS,AIRPORT BAG FEES, AND MORE' conditions$/, function () {
  ConfirmationPage.validateBagsVerbiage();
});

When(/^I am on the Confirmation page I click on 'IMPORTANT NOTICES'$/, function () {
  ConfirmationPage.clickOnNoticesVerbiage();
});

Then(/^I am on the Confirmation page I validate 'IMPORTANT NOTICES' conditions$/, function () {
  ConfirmationPage.validateNoticesVerbiage();
});

When(/^I am on the Confirmation Page for mobile responsive I click on Conditions$/, function () {
  ConfirmationPage.clickConditions();
});

When(/^I am on the Confirmation page and I click on "(.+)"$/, function (item) {
  ConfirmationPage.clickReceiptItem(item);
});

Then(/^I am on the confirmation page I expect customer name and emailId to be displayed correctly$/, function () {
  ConfirmationPage.validateCustomerNameAndEmailId();
});

Then(/^I am on the confirmation page I expect traveler details to be displayed correctly$/, function () {
  ConfirmationPage.validateTravelerDetailsDisplayedCorrectly();
});

Then(/^I am on the Confirmation Page I expect Confirmation Number to be displayed$/, function () {
  ConfirmationPage.validateConfirmationNumberDisplayed();
});

Then(/^I am on confirmation page I expect (.+) SSR to be displayed for traveler (.+) for (.+) segments$/, function(petInCabin, paxNum, segment) {
	ConfirmationPage.validatePetInCabinInConfirmationPage(petInCabin, paxNum, segment);
});

Then(/^I am on confirmation page I expect (.+) priority access to be displayed for traveler (.+) for (.+) segments$/, function(priorityAccess, paxNum, segment) {
	ConfirmationPage.validatePriorityAccessInConfirmationPage(priorityAccess, paxNum, segment);
});

Then(/^I am on confirmation page I expect (.+) trip flex to be displayed for traveler (.+) for (.+) segments$/, function(tripFlex, paxNum, segment) {
	ConfirmationPage.validateTripFlexInConfirmationPage(tripFlex, paxNum, segment);
});

Then(/^I am on the confirmation page I expect that the check-in button is not displayed$/, function () {
  ConfirmationPage.validateCheckInButtonIsNotDisplayed();
});

Then(/^I am on the Confirmation page and I expect that the value of the "(.+)" is correct$/, function (item) {
  if (item === "Bags and Extras"){
  ConfirmationPage.validateBagsAndExtrasValue();}
  else {
  ConfirmationPage.validateReceiptItemValue(item);}
});

Then(/^I am on the Confirmation page and I expect that item text for "(.+)" is "(.+)"$/, function (item, itemText) {
  ConfirmationPage.validateReceiptItemText(item, itemText);
});

Then(/^I am on Confirmation Page I expect that car heading is "(.+)"$/, function (carSectionHeading) {
  ConfirmationPage.validateCarSectionHeading(carSectionHeading);
});

Then(/^I am on Confirmation Page I expect that car image is displayed$/, function () {
  ConfirmationPage.validateCarSectionImageIsDisplayed();
});

Then(/^I am on Confirmation Page I expect that car vendor name is displayed$/, function () {
  ConfirmationPage.validateCarVendorNameIsDisplayed();
});

Then(/^I am on Confirmation Page I expect that car details contains "(.+)" and "(.+)"$/, function (carType, confirmationNumber) {
  ConfirmationPage.validateCarDetailsElements(carType, confirmationNumber);
});

Then(/^I am on Confirmation Page I expect that car type field is not empty$/, function () {
  ConfirmationPage.validateCarTypeValueDisplayed();
});

Then(/^I am on Confirmation Page I expect that confirmation number field is not empty$/, function () {
  ConfirmationPage.validateConfirmationNumberValueDisplayed();
});

Then(/^I am on Confirmation Page I expect that pick-up airport is displayed$/, function () {
  ConfirmationPage.validatePickupLocationDisplayed();
});

Then(/^I am on Confirmation Page I expect that pick-up details are displayed$/, function () {
  ConfirmationPage.validatePickupDetailsDisplayed();
});

Then(/^I am on Confirmation Page I expect that drop-off details are displayed$/, function () {
  ConfirmationPage.validateDropoffDetailsDisplayed();
});

Then(/^I am on Confirmation Page I expect that disclaimer text is displayed$/, function () {
  ConfirmationPage.validateDisclaimerTextDisplayed();
});

Then(/^I am on Confirmation Page I expect that the Responsive Car Disclaimer Expando Link text is "(.+)"$/, function (expectedLinkText) {
  ConfirmationPage.validateCarDisclaimerExpandoLinkText(expectedLinkText);
});

Then(/^I am on Confirmation Page I expect that the Responsive Car Disclaimer Expando Link is not displayed$/, function () {
  ConfirmationPage.validateCarDisclaimerExpandoLinkNotDisplayed();
});

Then(/^I am on Confirmation Page I expect that the Responsive Car Disclaimer text paragraphs "(.+)"$/, function (status) {
  ConfirmationPage.validateCarDisclaimerParagraphsVisibility(status);
});

Then(/^I am on the Confirmation page and I expect that the title of the receipt section is "(.+)"$/, function (expectedText) {
  ConfirmationPage.validateReceiptHeadingText(expectedText);
});

Then(/^I am on the Confirmation page and I validate that the paid with message is the one for the ([^"]*) card, containing the last four digits of ([^"]*)$/, (cardType, cardNumber) => {
  ConfirmationPage.validateEveryTypeOfPaymentMessage(cardType, cardNumber);
});

Then(/^I am on the Confirmation page and I validate that the charge statement text reads "(.+)"$/, (expectedText) => {
  ConfirmationPage.validateChargeStatementText(expectedText);
});

Then(/^I am on the Confirmation page and I expect that item text for "(.+)" is correct$/, (item) => {
  ConfirmationPage.validateAppliedVoucherText(item);
});

Then(/^I am on the Confirmation page and I expect that credit card payment information is not displayed$/, () => {
  ConfirmationPage.validateCreditCardInformationNotDisplayed();
});

Then(/^I am on the Confirmation page and I expect that the charge to the Credit Card is correct$/, () => {
  ConfirmationPage.validateCreditCardChargeIsCorrect();
});

Then(/^I am on the Confirmation page and I expect that the credit card charge text is correct$/, () => {
  ConfirmationPage.validateCreditCardChargeText();
});

Then(/^I am on the Confirmation page and I expect that the Subtotal line item is not displayed$/, () => {
  ConfirmationPage.validateSubTotalLineNotDisplayed();
});

Then(/^I am on the Confirmation page and I expect that the value of the Total Due is "(.+)"$/, (expectedValue) => {
  ConfirmationPage.validateTotalDueValue(expectedValue);
});

Then(/^I am on the Confirmation Page and I expect that the hotel upsell text is displayed$/, () => {
  ConfirmationPage.validateHotelUpsellTextIsDisplayed();
});

Then(/^I am on the Confirmation Page and I expect that the "(.+)" upsell button reads "(.+)"$/, (section, expectedText) => {
  ConfirmationPage.validateUpsellButtonText(section, expectedText);
});

Then(/^I am on the Confirmation Page and I expect that the car upsell text is "(.+)"$/, (expectedText) => {
  ConfirmationPage.validateCarUpsellText(expectedText);
});

When(/^I am on the Confirmation Page and I click on the "(.+)" button$/, (section) => {
  ConfirmationPage.clickUpsellButton(section);
});

Then(/^I am on the Mange Travel Hotel Page and I expect that the page title is displayed$/, () => {
  ConfirmationPage.validateManageTravelHotelTitleIsDisplayed();
});

When(/^I close the current tab$/, () => {
  ConfirmationPage.closeCurrentActiveTab();
});

Then(/^I am on the Mange Travel Car Page and I expect that the page title is displayed$/, () => {
  ConfirmationPage.validateManageTravelCarTitleIsDisplayed();
});

Then(/^I am on the Confirmation Page and I expect that the "(.+)" upsell section is not displayed$/, (section) => {
  ConfirmationPage.validateUpsellSectionIsNotDisplayed(section);
});

Then(/^I am on the Confirmation page and I expect that the Hotel section name is "(.+)"$/, (hotelSectionTitle) => {
  ConfirmationPage.validateConfirmationPageHotelSectionName(hotelSectionTitle);
});

Then(/^I am on the Confirmation page and I expect that item text for "(.+)" from Hotel section is "(.+)"$/, function (item, itemText) {
  ConfirmationPage.validateHotelSectionItemText(item, itemText);
});

Then(/^I am on the Confirmation page and I expect that the "(.+)" is displayed$/, function (item) {
  ConfirmationPage.validateHotelSectionItemDisplayed(item);
});

Then(/^I am on the Confirmation page and I expect that the Hotel Name is correct$/, function () {
  ConfirmationPage.validateConfirmationPageHotelName();
});

Then(/^I am on the Confirmation page and I expect that the Hotel Check In and Check Out dates in the Trip Summary are correct$/, function () {
  ConfirmationPage.validateConfirmationPageHotelCheckinLabelAndData();
  ConfirmationPage.validateConfirmationPageHotelCheckoutLabelAndData();
});

Then(
  /^I am on the Confirmation page and I expect that the number of rooms and guests is "(.+)"$/,
  function(expectedRoomsAndAdults) {
    ConfirmationPage.validateConfirmationPageGuestsAndRooms(expectedRoomsAndAdults);
  }
);

Then(
  /^I am on the Confirmation page and I expect that the Room Name matches the name of the selected Room$/,
  function() {
    ConfirmationPage.verifyConfirmationPageHotelRoomName();
  }
);

Then(
  /^I am on the Confirmation page and I expect that the number of nights is "(.+)"$/,
  function(expectedNumberOfNights) {
    ConfirmationPage.validateConfirmationPageHotelDays(expectedNumberOfNights);
  }
);

Then(
  /^I am on the Confirmation page and I expect that the instant credit payment message is correct$/,
  function() {
    ConfirmationPage.validateInstantCreditPayment();
  }
);

Then(
  /^I am on the Confirmation Page and I expect for a paid with Uplift message to be displayed$/,
  function() {
    ConfirmationPage.validatePaidWithUpliftMessage();
  }
);
Then(/^I am on confirmation page I click on myAllegiant profile dropdown from header$/, function () {
  ConfirmationPage.clickLoggedInUserDropdown();
});
Then(/^I am on confirmation page I click on My Account from dropdown$/, function () {
  ConfirmationPage.clickMyAccount();
});
Given(/^I am on confirmation page I click on Trips from dropdown/, () => {
  ConfirmationPage.clickTripMenu();
});
Given(/^I am on confirmation page I click on Points from dropdown/, () => {
  ConfirmationPage.clickPointsMenu();
});
Given(/^I am on confirmation page I logged out/, () => {
  ConfirmationPage.logOutFromConfirmationPage();
});
Given(/^I am on confirmation page I click log in button from header/, () => {
  ConfirmationPage.clickLogInButton();
});
Given(/^I am on confirmation page I click on confirmation number/, () => {
  ConfirmationPage.clickConfirmationNumber();
});
Then(/^I am on the confirmation page I should not see claim my points section/, () => {
  ConfirmationPage.verifyClaimMyPointsSectionNotDisplayed();
});
Then(/^I am on the confirmation page I expect "It’s not too late! Become an Allways member and" label/, () => {
  ConfirmationPage.verifyAllwaysEstimatedEarnPointsContentsLine1();
});
Then(/^I am on the confirmation page I expect "Claim Your XXXX Points!" label/, () => {
  ConfirmationPage.verifyAllwaysEstimatedEarnPointsContentsLine2();
});
Then(/^I am on the confirmation page I expect "Allways Loyalty Points from this purchase" label/, () => {
  ConfirmationPage.verifyAllwaysEstimatedEarnPointsContentsLine3();
});
Then(/^I am on the confirmation page I expect "New Member Bonus Points" label/, () => {
  ConfirmationPage.verifyAllwaysEstimatedEarnPointsContentsLine4();
});
Then(/^I am on the confirmation page I expect "Total Points" label/, () => {
  ConfirmationPage.verifyAllwaysEstimatedEarnPointsContentsLine5();
});
Then(/^I am on the confirmation page I expect "CLAIM MY POINTS!" button/, () => {
  ConfirmationPage.verifyClaimMyPointsButton();
});
Then(/^I am on the confirmation page I click "CLAIM MY POINTS!" button/, () => {
  ConfirmationPage.clickClaimMyPointsButton();
});
Then(/^I am on the confirmation page I expect a thank you message for claim my points/, () => {
  ConfirmationPage.verifyThankYouMessageForClaimMyPoints();
});
Then(/^I am on the confirmation page I expect Resend email button/, () => {
  ConfirmationPage.verifyResendEmailButton();
});
Then(/^I am on the confirmation page I except inline note after click on resend email button/, () => {
  ConfirmationPage.verifyInlineNoteAfterClickOnResendEmail();
});
Then(/^I am on the confirmation page I expect a existing user banner message 'An account already exists with email'/, () => {
  ConfirmationPage.verifyBannerMessage();
});
Then(/^I am on the confirmation page I click on here from the banner message/, () => {
  ConfirmationPage.clickHereFromMessageBanner();
});
Then(/^I am on the confirmation page I enter my existing "(.+)" account Password in login modal/, (accountStatus) => {
  ConfirmationPage.enterPassword(accountStatus);
});
Then(/^I am on the comfirmation page I click on sign in button in login modal/, () => {
  ConfirmationPage.clickSignInButton();
});
Then(/^I am on the confirmation page I expect destination advert banner for "(.+)" user/, (user) => {
  ConfirmationPage.verifyDestinationAdvert(user);
});
Then(/^I am on the confirmation page I expect destination advert banner is clickable "(.+)"/, (clickable) => {
  ConfirmationPage.verifyDestinationAdvertClickable(clickable);
});
Then(/^I am on the confirmation page I click on destination advert banner/, () => {
  ConfirmationPage.clickDestinationAdvert();
});
Then(/^I should redirected to the BofA credit card application page/, () => {
  ConfirmationPage.verifyBofaApplicationPageLink();
});
