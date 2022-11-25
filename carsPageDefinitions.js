import { Given, When, Then } from '@cucumber/cucumber';
import CarsPage from '../pageobjects/CarsPage';
import FlightsPage from '../pageobjects/flights-page';
import PaymentPage from '../pageobjects/PaymentPage';

When(/^I am on Cars page no filter is applied by default$/, () => {
  CarsPage.noFilterByDefault();
});

When(/^I am on Cars page and I wait for the Cars Page to be load$/, () => {
  CarsPage.waitCarsPageToLoad();
});

Then(/^I am on Cars page list are expanded by default$/, () => {
  CarsPage.noExpandedByDefault();
});
Then(/^I am on Cars page I select "([^"]*)" car$/, function(carType) {
  CarsPage.waitForCarsPageToLoad();
  CarsPage.applyCarTypeFilter(carType);
  CarsPage.waitForCarsPageToLoad();
});
Then(/^I am on Cars page I select "([^"]*)" passenger$/, function(passengerCapacity) {
  CarsPage.waitForCarsPageToLoad();
  CarsPage.applyPassengerCapacityFilter(passengerCapacity);
});
Then(/^I am on Cars page I select "([^"]*)" bag$/, function(bagCapacity) {
  CarsPage.waitForCarsPageToLoad();
  CarsPage.applyBagCapacityFilter(bagCapacity);
});
Then(/^I am on Cars page I click on Reset All$/, function() {
  CarsPage.waitForCarsPageToLoad();
  CarsPage.resetAllFilter();
});
Then(/^I am on Cars page I remove the filter by clicking X$/, function() {
  CarsPage.waitForCarsPageToLoad();
  CarsPage.closeFilter();
});
Then(/^I am on Cars page I click on "([^"]*)" collapse$/, function(type) {
  CarsPage.expandoCollapse(type);
  CarsPage.waitForCarsPageToLoad();
});
Then(/^I am on Cars page the "([^"]*)" is collapsed$/, function(type) {
  CarsPage.validateCollapse(type);
});
Then(/^I am on Cars page the Cars with "([^"]*)" car are displyed$/, function(
  element
) {
  CarsPage.validateFilter(element, 'Car Type');
});
Then(
  /^I am on Cars page the Cars with "([^"]*)" passenger are displyed$/,
  function(element) {
    CarsPage.validateFilter(element, 'Passenger Capacity');
  }
);
Then(/^I am on Cars page the Cars with "([^"]*)" bag are displyed$/, function(
  element
) {
  CarsPage.validateFilter(element, 'Bag Capacity');
});
Then(
  /^I am on Cars page the updated car list with "([^"]*)" "([^"]*)" and "([^"]*)" is displayed$/,
  function(carType, passengerCapacity, bagCapacity) {
    CarsPage.updatedCarList(carType, passengerCapacity, bagCapacity);
    CarsPage.waitForCarsPageToLoad();
  }
);

Then(/^I am on cars page I click on car type compact$/, () => {
  CarsPage.clickOnCompact();
});
Then(/^I am on cars page I click on passenger capacity 0$/, () => {
  CarsPage.clickOnPassengerCapacity0();
});
Then(/^I am on cars page no cars filter message is shown$/, () => {
    CarsPage.verifyNoCarsResultMessage();
});
Then(/^I am on cars page I should not see "(.+)" vendor cars$/, (vendor) => {
  CarsPage.verifyUnAvailableCarVendors(vendor);
});
Then(/^I am on cars page I should see "(.+)" vendor cars$/, (vendor) => {
  CarsPage.verifyAvailableCarVendors(vendor);
});

//cars add to cart feature
Then(/^I am on Cars Page No cars are added to cart$/, () => {
  CarsPage.noCarsAddedToCard();
});
Then(/^I am on Cars Page Car details are shown in the cars page$/, () => {
  CarsPage.carDetails();
});
Then(/^I am on Cars Page Vendor logo is shown in the cars page$/, () => {
  CarsPage.checkForVendorLogo();
});
Then(/^I am on Cars Page car price for each vendor is shown$/, () => {
  CarsPage.checkForVendorPrice();
});
Then(/^I am on cars page I add a car to cart$/, () => {
  CarsPage.addToCart();
});
Then(/^I am on cars page Added to cart message is shown$/, () => {
  CarsPage.addedToCart();
});
Then(/^I am on cars page Selected car details are shown in cart$/, () => {
  CarsPage.carCartDetails();
});
Then(/^I am on cars page I click on cart$/, () => {
  CarsPage.clickOnHeaderCartButton();
});
Then(/^I am on cars page Car label is shown in cart$/, () => {
  CarsPage.verifyCarLabel();
});
Then(/^I am on cars page I click on up arrow to collapse the car details in cart$/, () => {
  CarsPage.upDownArrowCarPanel();
});
Then(/^I am on cars page I expect that car header items is not displayed$/, () => {
  CarsPage.verifyCarPanelItems();
});
Then(/^I am on cars page Car type is shown under car header in cart$/, () => {
  CarsPage.verifyCarType();
});
Then(/^I am on cars page Selected car description is shown under car header in cart$/, () => {
  CarsPage.verifyCarDescription();
});
Then(/^I am on cars page Pick up label is shown under car header in cart$/, () => {
  CarsPage.verifyPickUpLabel();
});
Then(/^I am on cars page Pick up date-time is shown correctly in car header in cart$/, () => {
  CarsPage.verifyPickUpDate();
});
Then(/^I am on cars page Drop Off label is shown under car header in cart$/, () => {
  CarsPage.verifyDropOffLabel();
});
Then(/^I am on cars page Drop off date-time is shown correctly in car header in cart$/, () => {
  CarsPage.verifyDropOffDate();
});

Then(/^I am on Cars Page The Cars page is loaded$/, () => {
  CarsPage.validateCarPage();
});

Then(/^I am on Cars page "([^"]*)" passenger label is displayed$/, (passengerCapacity) => {
  CarsPage.validatePassengerCapacityFilter(passengerCapacity);
});

Then(/^I am on Cars page "([^"]*)" Bag label is displayed$/, (bagsCapacity) => {
  CarsPage.validateBagCapacityFilter(bagsCapacity);
});

Then(/^I am on Cars Page Customize Rental Dates label is available$/, () => {
  CarsPage.validateCustomizeRentalDates();
});

Then(/^I am on Cars Page Pick up fields are available$/, () => {
  CarsPage.validatePickUpFields();
});

Then(/^I am on Cars Page Drop-off fields are available$/, () => {
  CarsPage.validateDropOffFields();
});

Then(/^I am on Cars Page Travelers are able to Edit Pick up and or Drop off details$/, () => {
  CarsPage.validateTraverllerFields();
});

Then(/^I am on Cars Page I click on Customize Rental Dates$/, () => {
  CarsPage.clickCustomizeRentalDates();
});

Then(/^I am on Cars Page Default value is a 3 days interval starting with flight arrival date and time$/, () => {
  CarsPage.validateDefaultValue();
});

Then(/^I am on Cars Page I choose any date from the flight departure date and time up to 30 days after flight pick up date$/, () => {
  CarsPage.validatethirtyDaysRule();
});

Then(/^I am on Cars Page I choose pick up time after 30 minutes of arrival$/, () => {
  CarsPage.validateThirtyMinuteRule();
});

Then(/^I am on Cars Page I choose any date from the flight departure date and time up to 30 days after flight drop off date$/, () => {
  CarsPage.validatethirtyDaysRuleForDropOff();
});

Then(/^I am on Cars Page I choose Pick Up Date$/, () => {
  CarsPage.selectPickUpDate(CarsPage.getTripPickUpDate() + 1);
});

Then(/^I am on Cars Page I choose Drop Off date$/, () => {
  CarsPage.selectDropOffDate(CarsPage.getTripPickUpDate() + 1);
});

Then(/^I am on Cars Page I choose Pick Up time$/, () => {
  CarsPage.selectPickUpTime(CarsPage.getTripPickUpTime());
});

Then(/^I am on Cars Page I cannot choose same date and time for Pick Up and Drop off$/, () => {
 CarsPage.validateSameDateAndTime();
});

Then(/^I am on Cars Page Date Slots are enabled within Trip Duration$/, () => {
  CarsPage.validateEnabledDatesinTripDuration();
});

Then(/^I am on Cars Page Remaining date slots are disabled outside Trip Duration$/, () => {
  CarsPage.validateDatesOutsideTripDuration();
});

Then(/^I am on Cars Page Time Slots are enabled within Trip Duration$/, () => {
  CarsPage.validateTimeDisabledTripDuration();
});

Then(/^I am on Cars Page Remaining time slots are disabled outside Trip Duration$/, () => {
  CarsPage.validateTimeEnabledTripDuration();
});

Then(/^I am on Cars Page I cannot select Pick up Date and Time greater than the Cars drop off date and time$/, () => {
  CarsPage.validatePickUpWithDropOff();
});

Then(/^I am on Cars Page Drop Off Date Slots are enabled within Trip Duration$/, () => {
  CarsPage.validateDropOffEnabledDateSlots();
});

Then(/^I am on Cars Page Drop Off Time Slots are enabled within Trip Duration$/, () => {
  CarsPage.validateDropOffTimeEnabledTripDuration();
});

Then(/^I am on Cars Page Remaining Drop Off time slots are disabled outside Trip Duration$/, () => {
  CarsPage.validateDropOffTimeDisabledTripDuration();
});

Then(/^I am on Cars Page Drop off Date and Time should be greater than the pick up date & time$/, () => {
  CarsPage.validateDropOffTime();
});

Then(/^I am on cars page and I click on the "No thanks, I don't need a deal on ground transportation for this trip" link$/, () => {
  CarsPage.clickOnNoThanksLink();
});

Then(/^I am on payment page and I click on the shopping cart$/, () => {
  PaymentPage.clickOnGlobalCartLink();
});

Then(/^I am on shopping cart page and no car should be added to the cart$/, () => {
  PaymentPage.validateNoCarsAdded();
});

// Todo: Move Flight and Payment steps to their resepective step definition files
Then(/^I am on Flight Booking Page I choose the the return date more than 30 days from departure date$/, () => {
  FlightsPage.setDatesResp();
});

Then(/^I am on Flight Booking Page I choose departure date$/, () => {
  FlightsPage.setDepartureDate();
});

Then(/^I am on the payments page and the cars page is skipped$/, () => {
  PaymentPage.verifypaymentPageTitle();
});

Then(/^I am on Flight Booking Page I choose the the return date less than 30 days from departure date$/, () => {
  FlightsPage.setDepartureDate();
});

Then(/^I am on Cars Page I check Cars Page title$/, () => {
  CarsPage.waitForCarsPageToLoad();
  CarsPage.validateCarPageTitle();
});

Then(/^I am on Payments Page I navigate to Cars Page$/, () => {
  CarsPage.clickCarBreadCrumb();
});

Then(/^I am on Cars Page The previously selected car rental rate button will be shown as Remove from cart$/, () => {
  CarsPage.validateRemoveFromCartButton();
});

Then(/^I am on Cars Page I click on Remove from cart of a selected car$/, () => {
  CarsPage.clickRemoveFromCartButton();
});

Then(/^I am on cars page and I click on continue$/, () => {
  CarsPage.clickOnContinueButton();
});

Then(/^I am on cars page and selected car is displayed at the top of the list$/, () => {
  CarsPage.validateRemoveFromCartButton();
});

When(/^I am on cars page and only the flight and car details are displayed in the trip summary$/, function() {
  CarsPage.validateOnlyFlightAndCarDetailsDisplayed();
});

When(/^I am on Cars page I click continue button$/, function() {
	CarsPage.clickContinueButton();
});
When(/^I am on Cars page I expect Cars page anchor to top$/, function() {
	CarsPage.validateCarsPageAnchorToTop();
});
When(/^I am on Cars page I click No thanks button$/, function() {
	CarsPage.clickNoThanksButton();
});

When(/^I am on cars Page I click on update$/, function() {
	CarsPage.clickOnUpdateButton();
});

When(/^I am on cars Page I check the previously selected car is in unselected state$/, function() {
	CarsPage.validateCarPriceNotSelected();
});

Then(/^I am on Cars Page I choose Drop Off date one day later than Pick up date$/, () => {
  CarsPage.selectDropOffDate(CarsPage.getTripPickUpDate() + 2);
});

When(/^I am on cars Page I check the cart doesn't have any car$/, function() {
  CarsPage.clickOnHeaderCartButton();
  CarsPage.validateCarNotInCart();
});

Then(/^I am on the cars page page and I see the car list displayed$/, () => {
  CarsPage.validateCarsListdisplayed();
});

Then(/^I am on cars page and flight only price is displayed in the trip summary$/, () => {
  CarsPage.validateFlightOnlyPrice();
});

Then(/^I am on cars page and only the flight and car price is displayed in the trip summary$/, () => {
  CarsPage.validateFlightAndCarPrice();
});

Then(/^I am on cars page and the flight hotel and car price is displayed in the trip summary$/, () => {
  CarsPage.validateFlightHotelAndCarPrice();
});
 
Then(/^I validate the car price to add to cart$/, () => {
  CarsPage.validateCarPrice();
});

Then(/^I am on the Cars page and I validate that the Uplift banner is displayed$/, function () {
  CarsPage.validateUpliftBannerIsDisplayed();  
});

Then(/^I am on the Cars page and I validate that the Uplift description reads "([^"]*)"$/, function (expectedText) {
  CarsPage.validateUpliftBannerDescriptionCarsPage(expectedText);
});

Then(/^I am on the Cars page and I validate that the Uplift logo is displayed$/, function () {
  CarsPage.validateUpliftLogoIsDisplayed();
});

Then(/^I am on the Cars page and I validate that the lowest car price is higher than the previously collected price$/, function () {
  CarsPage.validateCollectedCarPriceIsLower();
});

Then(/^I am on the Cars page and I validate that the content of the pop-up is displayed$/, function() {
  CarsPage.waitUpliftPopupToBeDisplayed();
});

Then(/^I am on the Cars page and I validate that the collected Uplift rate is equal to the Uplift rate displayed in Uplift Pop-up$/, function() {
  CarsPage.validateUpliftRateFromBannerVsPopup();
});

Given(/^I validate the flights added to the tripsummary$/, function() {
	CarsPage.clickFlightsCartButton();
});

Given(/^I am on cars Page I close the tripsummary popup$/, function() {
  CarsPage.clickCloseTripSummaryPopup();
});

When(/^I am on Ancillaries Page and  I click on continue$/, function() {
  CarsPage.clickOnContinueInAncillariesPage();
});

When(/^I check the cars page is skipped$/, function() {
  CarsPage.validateCarsPageSkipped();
});

When(/^I am on the Cars Page and I continue if the page is not skipped$/, function() {
  CarsPage.clickCarsPageContinueButton();
});

When(/^I am on the Cars page and I collect the lowest car price$/, function() {
  CarsPage.collectLowestPriceCar();
});

When(/^I am on the Cars page and I collect the Uplift banner rate$/, function() {
  CarsPage.collectCarPageUpliftBannerRate();
});

When(/^I am on the Cars page and I click on the Uplift banner$/, function() {
  CarsPage.clickUpliftBannerCarsPage();
});

When(/^I am on payments page and I click on Edit CTA$/, function() {
  CarsPage.clickOnEditCtaOnPaymentsPage();
});

When(/^I am on cars page and I click on hotel add button$/, function() {
  CarsPage.clickAddButton();
});

When(/^I am on Cars page and I validate is Hotel section from cart can be collapsed and expanded$/, function() {
  CarsPage.verifyHotelSectionFromCartCollapsedExpando();
});