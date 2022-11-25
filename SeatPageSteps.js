import { Given, When, Then } from '@cucumber/cucumber';
import SeatPage from '../pageobjects/SeatPage.js';
import PaymentPage from '../pageobjects/PaymentPage';
import LoginForm from '../generic/pageobjects/LoginForm';

When(/^I am on Seat page I deselect seat for (.+) segment travelers (.+)$/, function (segment, paxNum) {
	SeatPage.deselectSelectedSeat(segment, paxNum);
});
When(/^I am on Seat page I expect Seat page anchor to top$/, function () {
	SeatPage.validateSeatsPageAnchorToTop();
});
When(/^I am on Seat page I click No thanks, skip seat selection$/, function () {
	SeatPage.skipSeatsPage();
});

When(/^I am on Seat page I update the selected seat with type "(.+)" on "(.+)" segment for "(.+)" travelers$/, function (seatType, tripType, travelerNum) {
	SeatPage.selectSeat(seatType, tripType, travelerNum);
});
When(/^I am on Seat page I select non-adjacent seats of type "(.+)" on "(.+)" segment for "(.+)" travelers$/, function (seatType, tripType, travelerNum) {
	SeatPage.selectNonAdjacentSeat(seatType, tripType, travelerNum);
});
When(/^I am on Seat page I select seats of type "(.+)" on "(.+)" segment for "(.+)" travelers$/, function (seatType, tripType, travelerNum) {
	SeatPage.selectSeat(seatType, tripType, travelerNum);
});
When(/^I am on Seat page I click on seats of type "(.+)" on "(.+)" segment for "(.+)" travelers$/, function (seatType, tripType, travelerNum) {
	SeatPage.clickSeat(seatType, tripType, travelerNum);
});
When(/^I am on Seat page I select "(.+)" position (.+) seat on "(.+)" segment for "(.+)" travelers$/, function (position,adjacency,segment,traveler) {
	SeatPage.selectSeatByPosition(position,adjacency,segment,traveler);
});
When(/^The Seats page is loaded$/, function () {
	SeatPage.validateSeatsPageLoaded();
});
When(/^I am on Seat page I click continue button$/, function () {
	SeatPage.clickContinueButton();
});
When(/^I am on Seats page I click select seat popup continue button for (.+)$/, function (flightType) {
	SeatPage.clickSelectSeatPopupContinueButton(flightType);
});
When(/^I am on Seats Page I click Select Seats for me button for "(.+)"$/, function (flightType) {
	SeatPage.clickSelectSeatsForMeButton(flightType);
});
When(/^I am on Seats page I click Select Returning button to navigate returning tab$/, function () {
	SeatPage.clickSelectReturningButtonInDepartingTab();
});
When(/^I am on Seats page I click continue button in Returning tab$/, function () {
	SeatPage.clickContinueButtonInReturningTab();
});
When(/^I am on Seats page I click select seat popup continue button$/, function () {
	SeatPage.clickSelectSeatContinueButton();
});
When(/^I am on Seats page I click select seat now button$/, function () {
	SeatPage.clickSelectSeatNowButton();
});
When(/^I am on Seats page I click on adjacent seat pop-up OK button$/, function () {
	SeatPage.clickOkButton();
});
When(/^I am on Seats page I store the currently selected seat data hook$/, function () {
	SeatPage.storeCurrentlySelectedSeatDataHook();
});
When(/^I select a specific seat$/, function () {
	SeatPage.selectSpecificSeat();
});
When(/^I am on Seat page I click selected seat for (.+) segment travelers (.+)$/, function (segment,traveler) {
	SeatPage.clickSelectedSeat(segment,traveler);
});
When(/^I am on Seats page I store the selected seat and price for Traveler one on the "(.+)" segment$/, function (segment) {
	SeatPage.collectSelectedSeatIdAndPrice(segment);
});
When(/^I am on Seats page I click info icon for (.+)$/, function (seatType) {
	SeatPage.clickInfoIconForPackage(seatType);
});
When(/^I am on Seats Page I click (.+) link$/, function (link) {
	SeatPage.clickLink(link);
});
When(/^I am on Seat page I click legend continue button$/, function () {
	SeatPage.clickLegendContinueButton();
});
When(/^I am on Seat page I click on "(.+)" segment tab$/, function (segment) {
	SeatPage.clickSegmentTabButton(segment);
});
Then(/^I am on Seat page I expect travelers grid is updated with the selected seat number for (.+)$/, function (tripType) {
	SeatPage.validateTravelersGridSeat(tripType);
});
Then(/^I am on Seats page I expect "(.+)" flight tab to be loaded$/, function (flightType) {
	SeatPage.validateSelectedFlightTypeInSeatsPage(flightType);
});
Then(/^I am on Seats page I expect content (.+) to be displayed$/, function (content) {
	SeatPage.validateBundleContent(content);
});
Then(/^I am on Seats page I expect Select seats for me button (.+) based on the (.+) travelers count$/, function (travelers, display) {
	SeatPage.validateSelectSeatsForMeButton(travelers, display);
});
Then(/^I am on Seat page I expect travelers grid is updated with unselected seat for travelers (.+)$/, function (paxNum) {
	SeatPage.validateTravelersGridSeatIsUnselected(paxNum);
});
Then(/^I am on Seats page I expect "(.+)" to be active for (.+)$/, function (button, flightType) {
	SeatPage.validateActiveButtonInSeatsPage(button, flightType);
});
Then(/^I am on Seats page I expect Select Seats Popup (.+) with Select Seats Now and Continue buttons$/, function (text) {
	SeatPage.validateSelectSeatsPopup(text);
});

Then(/^I am on Seats page I expect star displayed in seat map for bundle seats$/, function () {
	SeatPage.validateBundleSeat();
});
Then(/^I am on Seats page I expect price displayed in seat map for non bundle seats$/, function () {
	SeatPage.validateNonBundleSeat();
});
Then(/^I am on Seats page I expect selected seat should be highlighted$/, function () {
	SeatPage.validateSelectedSeatIsHighlighted();
});
Then(/^I am on Seats page I expected pop-up to be displatyed with "(.+)" and OK button$/, function (text) {
	SeatPage.validateChildNonAdjacentSeatWarningPopup(text);
});
Then(/^I am on Seats page I expect the adjacent seat pop-up to be closed$/, function () {
	SeatPage.validateNonAdjacentSeatWarningPopupIsClosed();
});
Then(/^I am on Seats page I expect seat legend wrapper$/, function () {
	SeatPage.validateSeatLegendWrapper();
});
Then(/^I am on Seats page I expect "(.+)" wrapper text$/, function (text) {
	SeatPage.validateLegendWrapperText(text);
});
Then(/^I am on Seats page I expect seat legend wrapper "(.+)" for "(.+)"$/, function (icon, text) {
	SeatPage.validateSeatLegendWrapperIcon(icon, text);
});
Then(/^I am on Seats page I expect seat legend legroom tooltip and content "(.+)" "(.+)" "(.+)" to be displayed$/, function (text, textOne, textTwo) {
	SeatPage.validateSeatLegendLegroomTooltipContent(text, textOne, textTwo);
});
Then(/^I am on Seats page I expect seat legend economy tooltip and content "(.+)" to be displayed$/, function (text) {
	SeatPage.validateSeatLegendEconomyTooltipContent(text);
});
Then(/^I am on Seat page I expect travelers grid is updated with the selected seat price for (.+)$/, function (tripType) {
	SeatPage.validateTravelersGridSeatPrice(tripType);
});
Then(/^I am on Seat page I expect popup when unassign selected seat for (.+) segment travelers (.+)$/, function (segment, paxNum) {
	SeatPage.validateUnassignSeatPopup(segment, paxNum);
});
Then(/^I am on Seat page I expect unassign selected seat traveler popup details to be displayed$/, function () {
	SeatPage.validateUnassignSeatPopupContent();
});
Then(/^I am on Seat page I expect unavailable seats are disabled$/, function () {
	SeatPage.validateUnavailableSeatDisabled();
});
Then(/^I validate that the previously booked seat is no longer available$/, function () {
	SeatPage.validateSpecificSeatIsNotDisplayed();
});

Then(/^I am on Seats page I expect error message "(.+)" to be displayed$/, function (content) {
	SeatPage.validateErrorMessageIsDisplayed(content);
});
Then(/^I am on Seat page I expect (.+) to be displayed while traveling with child pax$/, function (content) {
	SeatPage.validateMessageWhileTravelingWithChild(content);
});
When(/^I am on Seat Page I click on the Login Button$/, function () {
  LoginForm.clickLoginButton();
});
When(/^I am on the Seat Page and I log out$/, function () {
  LoginForm.clickLogoutButton();
});
Then(/^I am on the Seat Page I validate modal is closed$/, function () {
  LoginForm.validateModalClosed();
});
Then(/^I am on Seats page I expect seats continue popup is displayed (.+)$/, function (popup) {
	SeatPage.validateSelectContinuePopup(popup);
});

Then(/^I am on Seat page I expect exitRow popup is displayed after clicking exitRow seat$/, function () {
	SeatPage.validateExitRowPopup();
});

Then(/^I am seats page I expect (.+) segment seat map to be displayed$/, function (seg) {
	SeatPage.validateSeatMap(seg);
});
When(/^I am on Seat page I select seats for (.+)$/, function (params) {
	SeatPage.selectSeatsByParams(params);
});
