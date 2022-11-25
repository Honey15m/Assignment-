import { Given, When, Then } from '@cucumber/cucumber';
import FlightPage from '../pageobjects/FlightPage.js';
import FlightPageBuilder from '../pageobjects/flights-page';
import { MarketProvider } from '@g4/prova';
import LoginForm from '../generic/pageobjects/LoginForm';
import PaymentPage from '../pageobjects/PaymentPage';

Given(/^I am on flights page I expect flights page anchor to top$/, function() {
  FlightPage.validateFlightsPageAnchorToTop();
});
Given(/^I am on flights page I click continue button$/, function() {
  FlightPage.clickContinueButton();
});
Given(/^I am on landing page and I enter "(.+)"$/, function(deepLinkURL) {
  FlightPage.navigateToDeepLinkURL(deepLinkURL);
});
Given(/^I am on flights page I click View Return flights button$/, function() {
  FlightPage.clickRoundTripDiscountViewReturnFlights();
});
Given(
  /^I am on Flights page I click on "(.+)" page arrow for "(.+)" flight$/,
  function(arrow, flightType) {
    FlightPage.clickListViewArrow(arrow, flightType);
  }
);
Given(
  /^I am on Flights page I click on flightNumber for (.+) flight$/,
  function(flightType) {
    FlightPage.clickFlightNumberbySeg(flightType);
  }
);
Given(
  /^I am on Flights page I click on (.+) on the bottom of the page$/,
  function(FlightsDisclaimer) {
    FlightPage.clickFlightsDisclaimer(FlightsDisclaimer);
  }
);
Given(
  /^I build dynamic URL with Market Provider Data and the following params:$/,
  async function(dataTable) {
    let data = dataTable.rowsHash();
    let {
      departing,
      destination,
      formattedDepartureDate,
      foundReturningDate,
    } = await MarketProvider.getAvailableMarketOtaRoutes(
      data.departure_date,
      data.returning_date
    );
    FlightPageBuilder.buildDynamicURL(
      departing,
      destination,
      formattedDepartureDate,
      foundReturningDate,
      data.adults,
      data.children,
      data.infants_in_seat,
      data.infants_in_lap,
      data.car,
      data.hotel
    );
  }
);

Given(
  /^I build dynamic URL with hardcoded market and the following params:$/,
  async function(dataTable) {
    let data = dataTable.rowsHash();
    let [
      formattedDepartureDate,
      foundReturningDate,
    ] = await MarketProvider.getAvailableDatesFromCalendar(
      data.origin,
      data.destination,
      data.departure_date,
      data.returning_date
    );
    FlightPageBuilder.buildDynamicURL(
      data.origin,
      data.destination,
      formattedDepartureDate,
      foundReturningDate,
      data.adults,
      data.children,
      data.infants_in_seat,
      data.infants_in_lap,
      data.car,
      data.hotel
    );
  }
);

/*<<<<<<<<<<<<<<<<<-----------When Steps here----------->>>>>>>>>>>>>>>>>>>>>*/

/*When(/^I am on flights page I click on calendar view for "(.+)" flight$/, function(flightType) {
	FlightPage.clickFlightCalendarViewButton(flightType);
});*/
When(
  /^I am on flights page calendar view  I click previous month arrow$/,
  function() {
    FlightPage.clickPreviousMonthArrow();
  }
);
When(
  /^I am on flights page I select a new Departing flight date from list view$/,
  function() {
    FlightPage.selectNewDepartDateFromListView();
  }
);
When(
  /^I am on flights page I select a new Returning flight date from list view$/,
  function() {
    FlightPage.selectNewReturnDateFromListView();
  }
);
When(
  /^I am on flight result page I select the returning date same as the departure date$/,
  function() {
    FlightPage.selectReturnDateSameAsDepartDateFromListView();
  }
);
When(/^I am on flights page I click Hide Return flights button$/, function() {
  FlightPage.clickHideReturnFlightButton();
});
When(
  /^I am on flights page I click on the taxes, carrier charges & government fees link$/,
  function() {
    FlightPage.clickTaxesCarrierChargesAndGovernmentFeesLink();
  }
);
When(/^I am on flights page I close taxes and fees popup$/, function() {
  FlightPage.closeTaxesAndFeesPopup();
});
When(/^I am on flights page I click baggage charges link$/, function() {
  FlightPage.clickBaggageChargesLink();
});
When(
  /^I am on flights page I click on Flight Number for (.+) flight$/,
  function(flightType) {
    FlightPage.clickFlightNumber(flightType);
  }
);
When(
  /^I am on flights page I select a new returing flight date before departure date from the list view$/,
  function() {
    FlightPage.selectReturnDateBeforeDepartDate();
  }
);
When(
  /^I am on flights page I select flight with higher fare for "(.+)"$/,
  function(flightType) {
    FlightPage.selectHigherFareFlight(flightType);
  }
);
When(/^I am on flights page I get selected flight fare for "(.+)"$/, function(
  flightType
) {
  FlightPage.getSelectedFlightFare(flightType);
});
When(
  /^I am on flights page I click List view returning previous arrow$/,
  function() {
    FlightPage.clickListViewReturningPreviousArrow();
  }
);
When(
  /^I am on flights page I click List view returning next arrow$/,
  function() {
    FlightPage.clickListViewReturningNextArrow();
  }
);
When(
  /^I am on flights page I collect selected departDate and ReturnDate day of the week$/,
  function() {
    FlightPage.collectSelectedDaysOfWeek();
  }
);
When(/^I click on the Accept Cookies button$/, function() {
  FlightPage.closeCookies();
});

When(/^I am on flights page I collect flight page details$/, () => {
  FlightPage.collectFlightPageDetails();
});

When(/^I am on flights page I click on the list view Departint next arrow$/, () => {
  FlightPage.clickListViewDepartNextArrow();
});

/*<<<<<<<<<<<<<<<<<-----------Then Steps here----------->>>>>>>>>>>>>>>>>>>>>*/

Then(/^I am on flights page with Flight displayed in List view$/, function() {
  FlightPage.verifyFlightDisplayedInListView();
  FlightPage.getSelectedDepartureDate();
  FlightPage.getSelectedReturnDate();
});

Then(
  /^I am on flights page flight calendar view I expect title of the calendar view to be month and Year of selected date$/,
  function() {
    FlightPage.verifyMonthAndYearIsDisplayedInCalendarView();
  }
);

Then(
  /^I am on flights page flight calendar view I expect Day tab on the calendar to displayed day in DDD format$/,
  function() {
    FlightPage.verifyDayIsDisplayedInDDDFormat();
  }
);
Then(
  /^I am on flights page flight calendar view I expect Day tab on the calendar view to display date in DD format$/,
  function() {
    FlightPage.verifyDateIsDisplayedInDDFormat();
  }
);
Then(
  /^I am on flights page flight calendar view I expect Date to be clickable "(.+)" and display "(.+)" when no flights are available$/,
  function(status, msg) {
    FlightPage.verifyDateAsDisabledwithNoFlight(status, msg);
  }
);
Then(
  /^I am on flights page flight calendar view I expect Day tab to display flight fare for available flights dates$/,
  function() {
    FlightPage.verifyFlightFareIsDisplayedForAvailableFlight();
  }
);
Then(
  /^I am on flights page for (.+) flight calendar view I click on the flight fare for a different date than the selected flight date$/,
  function(flightType) {
    FlightPage.selectDifferentDateThanSelected(flightType);
  }
);
Then(
  /^I am on flights page flight for "(.+)" flight I expect list view of flights to display for selected date$/,
  function(flightType) {
    FlightPage.verifySelectedDateIsDisplayed(flightType);
  }
);
Then(
  /^I am on flights page calendar view I expect previous month arrow to be clickable "(.+)" for past month$/,
  function(status) {
    FlightPage.verifyPreviousMonthArrowDisabledStatus(status);
  }
);
Then(
  /^I am on flights page calendar view I click next month arrow$/,
  function() {
    FlightPage.clickNextMonthArrow();
  }
);
Then(
  /^I am on flights page calendar view I expect to navigate to next month$/,
  function() {
    FlightPage.validateCalendarViewIsNavigatedToNextMonth();
  }
);
Then(
  /^I am on flights page calendar view I expect to navigate to previous month$/,
  function() {
    FlightPage.validateCalendarViewIsNavigatedToPreviousMonth();
  }
);
Then(
  /^I am on flights page calendar view I expect Strike-through of the non-discount fare$/,
  function() {
    FlightPage.validateCalendarViewStrikeThroughNonDiscountFare();
  }
);
Then(
  /^I am on flights page flight calendar view I expect promo fare to be displayed$/,
  function() {
    FlightPage.validateCalendarViewDiscountedFares();
  }
);
Then(
  /^I am on flights page calendar view I click next month arrow and navigate to last available month$/,
  function() {
    FlightPage.clickNextMonthArrowTillLastAvailableMonth();
  }
);
Then(
  /^I am on flights page calendar view I expect next month arrow to be clickable "(.+)" for last available month$/,
  function(status) {
    FlightPage.validateTravelerCannotNavigateToMonthPastLastAvailableMonth(
      status
    );
  }
);
Then(
  /^I am on flights page Returning flight calendar view I expect "(.+)" to be displayed with border for select depart date$/,
  function(msg) {
    FlightPage.validateDepartureDateDisplayedWithBorderForSelectDepartDate(msg);
  }
);

Then(
  /^I am on flights page I select a new retrun date for Returning flight list view$/,
  function() {
    FlightPage.selectNewReturnDateInListView();
  }
);
Then(
  /^I am on flights page I expect error message to be displayed as "(.+)"$/,
  function(errorMessage) {
    FlightPage.validateReturningBeforeDepartingErrorMessageIsDisplayed(
      errorMessage
    );
  }
);
Then(
  /^I am on flights page I select a new depart date for Departing flight list view$/,
  function() {
    FlightPage.selectNewDepartDateInListView();
  }
);
Then(
  /^I am on flights page I expect note adjustment message to be displayed as "(.+)"$/,
  function(noteAdjustmentMessage) {
    FlightPage.validateDepartingAfterReturningNoteAdjustmentMessageIsDisplayed(
      noteAdjustmentMessage
    );
  }
);
Then(
  /^I am on flights page I validate calendar view for Departing flight$/,
  function() {
    FlightPage.validateDepartingFlightCalendarViewButton();
  }
);
Then(
  /^I am on flights page I validate calendar view for Returning flight$/,
  function() {
    FlightPage.validateReturningFlightCalendarViewButton();
  }
);
Then(
  /^I am on flights page I validate list view for Departing flight$/,
  function() {
    FlightPage.validateDepartingFlightListViewButton();
  }
);
Then(
  /^I am on flights page I validate list view for Returning flight$/,
  function() {
    FlightPage.validateReturningFlightListViewButton();
  }
);
Then(
  /^I am on flights page I expect departing after returning error message to be displayed as "(.+)"$/,
  function(errorMessage) {
    FlightPage.validateDepartingAfterReturningErrorMessageIsDisplayed(
      errorMessage
    );
  }
);
Then(
  /^I am on flights page Retruning flight calendar view I expect calendar dates that are less than the selected Departure date will appear inactive$/,
  function() {
    FlightPage.validateDaysBeforeDepartureDateAppearsInactiveInReturningCalendar();
  }
);
Then(
  /^I am on flights page I scroll to returning flight calendar view I expect "(.+)" to be changed to the new depart date$/,
  function(SelectedDepartDate) {
    FlightPage.validateNewDepartureDateSelectedInReturningCalendar(
      SelectedDepartDate
    );
  }
);
Then(
  /^I am on flights page I expect "(.+)" to be same as the  date selected from Depart date calendar$/,
  function(SelectedDepartDate) {
    FlightPage.validateDepartureDateSelectedInDepartingCalendar(
      SelectedDepartDate
    );
  }
);
Then(/^I am on flights page I expect "(.+)" to be displayed$/, function(view) {
  FlightPage.validateDeepLinkView(view);
});
Then(
  /^I am on flights page I expect "(.+)" selection is not changed$/,
  function(flight) {
    FlightPage.validateFlightSelection(flight);
  }
);
Then(
  /^I am on flights page I expect Returning Date to be adjusted three days from departure date$/,
  function() {
    FlightPage.validateNewReturnDateAdjustedForReturningFlight();
  }
);

Then(
  /^I am on flight Page I expect RoundTrip Discount (.+) to be displayed with (.+) and (.+)$/,
  function(bannerTitle, description, buttonLabel) {
    FlightPage.validateRoundTripDiscountBannerContent(
      bannerTitle,
      description,
      buttonLabel
    );
  }
);
Then(
  /^I am on flights page I expect returning flight calendar view to be displayed with pre-selected depart date but return date not selected$/,
  function() {
    FlightPage.validateDepartDateAndReturnDateSelectedInCalendarView();
  }
);
Then(
  /^I am on Flights page I expect Continue button to be clickable (.+)$/,
  function(clickable) {
    FlightPage.validateContinueButtonIsNotClickable(clickable);
  }
);
Then(
  /^I am on flights page I expect returning flight calendar view first available return date is highlighted but not selected$/,
  function() {
    FlightPage.validateFirstAvailableReturnDateIsClickableButNotSelected();
  }
);
Then(
  /^I am on flights page I select a new returing flight date from the calendar$/,
  function() {
    FlightPage.selectNewReturingDateFromCalendarView();
  }
);
Then(
  /^I am on flights page I expect new returning flight date to be displayed in list view$/,
  function() {
    FlightPage.validateSelectedReturnDateInListView();
  }
);
Then(
  /^I am on flights page I expect returning calendar to display new returning flight date$/,
  function() {
    FlightPage.validateNewReturnDateIsSelectedInCalendarView();
  }
);
Then(
  /^I am on Bundles page I expect roundtrip discount to be displayed in Trip total$/,
  function() {
    FlightPage.validateRoundTripDiscountInTripTotal();
  }
);
/*Then(/^I am on flights page I click on list view for "(.+)" segment$/, function(flightType) {
	if (flightType === "Departing") {
		FlightPage.validateDepartingFlightListViewButton();
	}
	else {
		FlightPage.validateReturningFlightListViewButton();
	}
});*/

Then(
  /^I am in flights page I expect "(.+)" to be displayed for "(.+)" segment$/,
  function(message, flightType) {
    FlightPage.validateRoundTripPurchaseRequired(message, flightType);
  }
);
Then(
  /^I am on flights page I expect return flights section to be closed$/,
  function() {
    FlightPage.validateRoundTripSectionShouldBeClosed();
  }
);

Then(/^I am on flights page I expect "(.+)" not to be displayed$/, function(
  message
) {
  FlightPage.validateRoundTripRequiredMsgIsNotDisplayed(message);
});
Then(/^I am on flights page I click on (.+) view for "(.+)" flight$/, function(
  view,
  segment
) {
  FlightPage.selectDateView(view, segment);
});
Then(
  /^I am on flights page I expect Returning flight title section is not displayed$/,
  function() {
    FlightPage.validateReturningSectionTitleIsNotDisplayed();
  }
);
Then(
  /^I am on flights page I expect Returning day tabs are not displayed$/,
  function() {
    FlightPage.validateReturningTabSectionIsNotDisplayed();
  }
);
Then(
  /^I am on flights page I expect Returning flight list is not displayed$/,
  function() {
    FlightPage.validateReturningFlightsSectionIsNotDisplayed();
  }
);
Then(
  /^I am on flights page I expect selected departure flight is the cheapest one available$/,
  function() {
    FlightPage.validateSelectedDepartureFlightIsCheapest();
  }
);
Then(
  /^I am on flights page I expect selected departure flight "(.+)" label or message to be displayed$/,
  function(label) {
    FlightPage.validateSelectedDepartureFlightLabel(label);
  }
);
Then(
  /^I am on flights page I expect flight disclaimer text to be displayed$/,
  function() {
    FlightPage.validateFlightDisclaimerText();
  }
);
Then(/^I am on flights page I validate taxes and fees popup$/, function() {
  FlightPage.validateTaxesAndFeesPopup();
});
Then(
  /^I am on flights page I expect baggage charges page to be displayed$/,
  function() {
    FlightPage.validateBaggageChargesPage();
  }
);
Then(/^I am on flights page I expect OTP (.+) for (.+)$/, function(
  flightType,
  heading
) {
  FlightPage.validateOnTimePerformancePopup(flightType, heading);
});
Then(
  /^I am on flights page I validate that departing flight does not have strikethrough price$/,
  function() {
    FlightPage.validateDepartingStrikeThroughPrice();
  }
);
Then(
  /^I am on flight page I expect both departing and returning flights have strike through prices$/,
  function() {
    FlightPage.validateDepartingAndReturningHaveStrikeThroughPrices();
  }
);
Then(
  /^I am on flights page I expect departing flight does not have strikethrough price$/,
  function() {
    FlightPage.validateDepartingStrikeThroughPriceNotDisplayed();
  }
);
Then(
  /^I am on flights page I validate prices after discount is applied$/,
  function() {
    FlightPage.validatePricesAfterDiscountApplied();
  }
);
Then(
  /^I am on flights page I expect previous flights selection to persist for "(.+)"$/,
  function(flightType) {
    FlightPage.validatePricesAfterToggleBetweenViews(flightType);
  }
);
Then(
  /^I am on flights page I expect return flight list view first tab date is equal to departure date$/,
  function() {
    FlightPage.validateReturnFlightListViewFirstTabDateEqualsDepartureDate();
  }
);
Then(
  /^I am on flights page I expect return flight list view previous-arrow clickable (.+)$/,
  function(clickable) {
    FlightPage.validateReturnFlightListViewPreviousArrow(clickable);
  }
);
Then(
  /^I am on flights page I expect (.+) message if returning segment flight leaves before departing flight arrives$/,
  function(message) {
    FlightPage.validateReturnFlightAvailabilityMessage(message);
  }
);
Then(
  /^I am on flights page I expect calendar should display highlighted date with (.+)$/,
  function(text) {
    FlightPage.validateDateIsDisplayedWithText(text);
  }
);

Then(
  /^I am on flights page I expect calendar should not display highlighted date for (.+)$/,
  function(text) {
    FlightPage.validateDateIsNotDisplayedWithText(text);
  }
);
Then(
  /^I am on flights page I expect Returning flight details displayed$/,
  function() {
    FlightPage.validateReturningFlightsSectionIsDisplayed();
  }
);
Then(
  /^I am on flights page I expect selected ReturnDate day of the week is not changed$/,
  function() {
    FlightPage.validateSelectedReturnDateDayOfTheWeekIsNotChanged();
  }
);
Then(
  /^I am on flights page I expect selected flight not displayed$/,
  function() {
    FlightPage.validateSelectedFlightIsNotDisplayed();
  }
);
Then(
  /^I am on flights page I expect (.+) is displayed after selecting (.+) tab selected date$/,
  function(text, flightType) {
    FlightPage.validateSelectedFlightIsDisplayedForDateSelected(
      text,
      flightType
    );
  }
);
Then(
  /^I am on flights page I expect (.+) is displayed after selecting (.+) flight$/,
  function(text, flightType) {
    FlightPage.validateSelectedFlightIsDisplayedForFlightSelected(
      text,
      flightType
    );
  }
);
Then(
  /^I am on flights page I expect date is selected center of the week for (.+) flight$/,
  function(flightType) {
    FlightPage.validateSelectedFlightInitialLandingDefaults(flightType);
  }
);
Then(
  /^I am on flights page I expect date is selected (.+) day of the week for returning flight$/,
  function(day) {
    FlightPage.validateReturningFlightInitialLandingDefaults(day);
  }
);
Then(/^I am on the Flight Page I validate modal is closed$/, function() {
  FlightPage.verifyPasswordModalClosed();
});
When(/^I am on flight page I click on the hamburger menu button$/, function() {
  PaymentPage.clickBurgerMenu();
});
When(/^I am on flight Page I click on 'Log In'$/, function() {
  LoginForm.clickLoginButton();
});
When(/^I am on the flight Page I log out$/, function() {
  LoginForm.clickLogoutButton();
});
Then(/^I am on the landing Page I validate modal is closed$/, function () {
  LoginForm.validateModalClosed();
});
Then(/^I am on the Flight Page I expect potential savings text when using Allways points under flight price for "(.+)"$/, (tripType) => {
  FlightPage.verifyPotentialSavingTextForUsingPoints(tripType);
});
Then(/^I am on the Flight Page I expect potential savings text is not displayed for "(.+)"$/, (tripType) => {
  FlightPage.verifyPotentialSavingTextNotDisplayed(tripType);
});
Then(/^I am on the Flight Page I expect Discounted Flight Price Default Text for "(.+)"$/, (tripType) => {
  FlightPage.verifyLoyaltyDiscountedDefaultText(tripType);
});
Then(/^I am on the Flight Page I expect loyalty fare discount banner for "(.+)" user$/, (Status) => {
  FlightPage.verifyLoyaltyFareDiscountBanner(Status);
});
Then(/^I am on the Flight Page I expect loyalty fare discount banner is not dispalyed for "(.+)" user$/, (Status) => {
  FlightPage.verifyLoyaltyFareDiscountBanner(Status);
});