import { Given, When, Then } from '@cucumber/cucumber';
import HomePage from '../pageobjects/searchForm';

const got = require('got');

let departureDate;
let airportRoutes;
let departureAirportCode = [];
const wsAirportList = [];

Given(/^I invoke browser in mobile (.+)$/, (mobileModel) => {
  HomePage.invokeMobileResposiveBrowser(mobileModel);
});
Given(/^I navigate to www application$/, () => {
  HomePage.openUrl(process.env.appEnv);
});
Given(/^I am on landing page I select "([^"]*)" for the departure airport$/, (departureCity) => {
  HomePage.selectDeparture(departureCity);
});
Given(/^I am on landing page I select "(.+)"$/, (tripType) => {
  HomePage.selectTripType(tripType);
});
Given(/^I am on landing page I select "(.+)" for the destination airport$/, (destinationCity) => {
  HomePage.selectDestination(destinationCity);
});
Given(/^I am on landing page I click on travelers drop-down$/, () => {
  HomePage.clickTravelersField();
});
Given(/^I am on landing page I click on departure airport field$/, () => {
  HomePage.clickDepartureField();
});
Given(/^I am on landing page I enter invalid departure airport code "(.+)"$/, (invalidDepartureCity) => {
  HomePage.enterDeparture(invalidDepartureCity);
});
Given(/^I am on landing page I enter "(.+)" in destination airport text box but closing drop down list without selecting an airport$/,
  (destinationCity) => {
    HomePage.enterDestination(destinationCity);
    HomePage.clickDestinationField();
  });
Given(/^I get all the airport list from the airport api$/, async () => {
  const res = await got.get('https://dlb.stg.allegiantair.com/airport/airports?modifiedAfter=&isG4=true&isInternational=false&codeType=ANY');
  const json = JSON.parse(res.body);
  for (let i = 0; i < json.length; i++) {
    wsAirportList.push(json[i].airportIata);
  }
});
Given(/^I am on landing page I expect search button status is disable "(.+)"$/, (defaultStatus) => {
  HomePage.validateSearchbuttonDefaultStatus(defaultStatus);
});
Given(/^I am on landing page I click "(.+)"$/, (element) => {
  HomePage.clickElement(element);
});

/*
<-------------- When steps here-------------->
*/
When(/^I am on landing page I click departure date calendar$/, () => {
  HomePage.openDepartureDateCalendar();
});
When(/^I am on landing page I select "(.+)" adult travelers$/, (adultsCount) => {
  HomePage.selectAdults(adultsCount);
});
When(/^I am on landing page I choose the departure date "(.+)" days from current day for mobile responsive$/, (number) => {
  HomePage.openDepartureDateCalendarOnMobile();
  departureDate = HomePage.chooseDepartingDateOnMobile(number);
});
When(/^I am on landing page I choose the returning date "(.+)" days from departure for mobile responsive$/, (number) => {
  HomePage.chooseReturningDateOnMobile(number, departureDate);
});
When(/^I am on landing page I choose the departure date "(.+)" days from current day$/, (number) => {
  HomePage.openDepartureDateCalendar();
  departureDate = HomePage.chooseDepartingDate(number);
});
When(/^I am on landing page I choose the returning date "(.+)" days from departure$/, (number) => {
  HomePage.chooseReturningDate(number, departureDate);
});
When(/^I am on landing page I choose the returning date "(.+)" days from departure for "(.+)"$/, (number, tripType) => {
  if (tripType === 'roundTrip') {
    HomePage.chooseReturningDate(number, departureDate);
  }
});
When(/^I am on landing page I click on search button$/, () => {
  HomePage.clickSearchButton();
});
When(/^I am on landing page I click on destination airport field$/, () => {
  HomePage.clickDestinationField();
});
When(/^I am on landing page I enter invalid destination airport code "(.+)"$/, (invalidDestinationCity) => {
  HomePage.enterDestination(invalidDestinationCity);
});
When(/^I am on landing page I enter "(.+)" in departure airport text box but closing drop down list without selecting an airport$/,
  (departureCity) => {
    HomePage.enterDeparture(departureCity);
    HomePage.clickDepartureField();
  });
When(/^I am on landing page I get departure airport list$/, () => {
  departureAirportCode = HomePage.getAllAirportsFromLandingPage();
});
When(/^I get all the route list from the route api$/, async () => {
  const res = await got.get('https://ota-flight-shop-webapp-intnexusrebr.okd.allegiantair.com/ota-flight-shop/v2/api/flight/routes');
  airportRoutes = JSON.parse(res.body);
});
When(/^I am on landing page I click Infant In Lap increment button "(.+)"$/, (ClickCount) => {
  HomePage.selectLapInfantPlusOne(ClickCount);
});
When(/^I am on landing page I click on Infant In Lap tooltip$/, () => {
  HomePage.clickInfantInLapTooltip();
});
When(/^I am on landing page I click on Infant In seat tooltip$/, () => {
  HomePage.clickInfantInSeatTooltip();
});
When(/^I am on landing page I click on children tooltip$/, () => {
  HomePage.clickChildrenTooltip();
});
When(/^I am on landing page I select Child as "(.+)"$/, (childrenNumber) => {
  HomePage.selectChildren(childrenNumber);
});
When(/^I am on landing page I select InfantInSeat as "(.+)"$/, (infantInSeatNumber) => {
  HomePage.selectInfantInSeat(infantInSeatNumber);
});
When(/^I am on landing page I select InfantInLap as "(.+)"$/, (incrementInfantInLap) => {
  HomePage.selectInfantInLap(incrementInfantInLap);
});
When(/^I am on landing page I get last month of booking allowed$/, () => {
  HomePage.openDepartureDateCalendar();
  HomePage.nextMonthArrowClickCount();
});
When(/^I am on landing page and I select "(.+)"$/, (deepLink) => {
  HomePage.selectDeepLink(deepLink);
});
When(/^I am on landing page I collect all billboard name$/, () => {
  HomePage.collectAllBillboardName();
});
When(/^I am on "(.+)" page and I enter "(.+)"$/, (actualPage, deepLinkURL) => {
  HomePage.navigateToDeepLinkURL(actualPage, deepLinkURL);
});
When(/^I am on "(.+)" page I click here on the error message$/, (actualPage) => {
  HomePage.clickHereButton(actualPage);
});
When(/^I open a new tab$/, () => {
  const url = process.env.appEnv;
  browser.newWindow(url);
  browser.pause(5000);
});

When(/^I switch to tab number "([^"]*)"$/, (tabNumber) => {
  const windowsName = browser.getWindowHandles();
  browser.switchToWindow(windowsName[tabNumber]);
});

When(/^I am on flights page I click on the Modify Button$/, () => {
  HomePage.clickModifyButton();
});
When(/^I am on search form I click on One Way$/, () => {
  HomePage.clickOneWayButton();
});
When(/^I am on search form I see the From field$/, () => {
  HomePage.validateFromField();
});
When(/^I am on search form I see the To field$/, () => {
  HomePage.validateToField();
});
When(/^I am on search form I see the Travelers field$/, () => {
  HomePage.validateTravelersField();
});
When(/^I am on search form I see Search Button$/, () => {
  HomePage.validateSearchButton();
});
When(/^I am on search form I see InfoIcon and verbiage$/, () => {
  HomePage.validateInfoIcon();
});
When(/^I am on search form I do not see InfoIcon and verbiage$/, function () {
  HomePage.validateInfoIconNotDisplayed();
});
When(/^I am on search form I see that the Total Trip label is displayed$/, function () {
  HomePage.validateTotalTripLabelDisplayed();
});

/*
<-------------- Then steps here-------------->
*/
Then(/^I am on landing page I validate "(.+)" format$/, (departureCityFullName) => {
  HomePage.validateDepartureCityFullName(departureCityFullName);
});
Then(/^I am on landing page I validate destination airport "(.+)" format$/, (destinationCityFullName) => {
  HomePage.validateDestinationCityFullName(destinationCityFullName);
});
Then(/^I am on landing page I validate arrow icon is displayed pointing up when Travelers expando is expanded$/, () => {
  HomePage.validateTravelersExpandoIsDisplayed();
});
Then(/^I am on landing page I validate arrow icon is displayed pointing down when Travelers expando is collapsed$/, () => {
  HomePage.validateTravelersExpandoIsCollapsed();
});
Then(/^I am on landing page I validate default traveler value for Child is "(.+)"$/, (defaultChildCount) => {
  HomePage.validateChildrenLabel(defaultChildCount);
});
Then(/^I am on landing page I validate departure Date field calendar picker$/, () => {
  HomePage.validateDepartureDateCalendar();
});
Then(/^I am on landing page I validate default traveler value for Adult is "(.+)"$/, (defaultAdultCount) => {
  HomePage.validateAdultLabel(defaultAdultCount);
});
Then(/^I am on landing page I validate default travelers summary label for Adult is "(.+)" and age range "(.+)"$/, (adultLabel, ageRange) => {
  HomePage.validateTravelersSummaryLabelForAdult(adultLabel, ageRange);
});
Then(/^I am on landing page I validate default travelers summary label for Child is "(.+)" and age range "(.+)"$/, (childrenLabel, ageRange) => {
  HomePage.validateTravelersSummaryLabelForChild(childrenLabel, ageRange);
});
Then(/^I am on landing page I validate default travelers summary label for Infant in Seat is "(.+)" and age range "(.+)"$/,
  (infantInSeatLabel, ageRange) => {
    HomePage.validateTravelersSummaryLabelForInfantInSeat(infantInSeatLabel, ageRange);
  });
Then(/^I am on landing page I validate default travelers summary label for Infant in Lap is "(.+)" and age range "(.+)"$/,
  (infantInLapLabel, ageRange) => {
    HomePage.validateTravelersSummaryLabelForInfantInLap(infantInLapLabel, ageRange);
  });
Then(/^I am on landing page I validate increment button status for adult travelers$/, () => {
  HomePage.validateIncrementButtonStatusForAdult();
});
Then(/^I am on landing page I validate decrement button status for adult travelers is disable "(.+)"$/, (status) => {
  HomePage.validateDecrementButtonStatusForAdult(status);
});
Then(/^I am on landing page I validate adult travelers increment button is clickable "(.+)" and adult count is "(.+)"$/,
  (isIncreamentDisabled, adultCount) => {
    HomePage.validateMaximumAllowedAdultValue(isIncreamentDisabled, adultCount);
  });
Then(/^I am on landing page I validate Travelers field is always active$/, () => {
  HomePage.validateTravelersFieldIsAlwaysActive();
});
Then(/^I am on flights page I validate flight page is loaded with title "(.+)"$/, (FlightPageTitle) => {
  HomePage.validateFlightPageIsLoaded(FlightPageTitle);
});
Then(/^I am on flights page I validate flight page is loaded with heading "(.+)"$/, (heading) => {
  HomePage.validateFlightPageIsHeadingLoaded(heading);
});
Then(/^I am on landing page I validate Search button default status is disable "(.+)"$/, (defaultStatus) => {
  HomePage.validateSearchbuttonDefaultStatus(defaultStatus);
});
Then(/^I am on landing page I validate "(.+)" in departure airport list$/, (departureCity) => {
  HomePage.selectDeparture(departureCity);
});
Then(/^I am on landing page I validate "(.+)" in destination airport list$/, (destinationCity) => {
  HomePage.selectDestination(destinationCity);
});
Then(/^I am on landing page I validate Departure Airports list can be closed without selecting an airport$/, () => {
  HomePage.clickDepartureField();
  HomePage.validateDepartureAirportListClosed();
});
Then(/^I am on landing page I validate Destination Airports list can be closed without selecting an airport$/, () => {
  HomePage.validateDestinationAirportListClosed();
});
Then(/^I am on landing page I validate destination field placeholder is "(.+)"$/, (destinationFieldPlaceholder) => {
  HomePage.validateDestinationFieldPlaceholder(destinationFieldPlaceholder);
});
Then(/^I am on landing page I validate destination field label is "(.+)"$/, (destinationFieldLabel) => {
  HomePage.validateDestinationFieldLabel(destinationFieldLabel);
});
Then(/^I am on landing page I validate Destination Field is active$/, () => {
  HomePage.clickDestinationField();
});
Then(/^I am on landing page I validate departure field label is "(.+)"$/, (departureFieldLabel) => {
  HomePage.validateDepartureFieldLabel(departureFieldLabel);
});
Then(/^I am on landing page I validate default trip type selected is Round Trip$/, () => {
  HomePage.validateDefaultTripType();
});
Then(/^I am on landing page I validate "(.+)" message is displayed$/, (errorMessage) => {
  HomePage.validateNoDepartureAirportMessageIsDisplayed(errorMessage);
});
Then(/^I am on landing page I validate destination field "(.+)" message is displayed$/, (errorMessage) => {
  HomePage.validateNoDestinationAirportMessageIsDisplayed(errorMessage);
});
Then(/^I am on landing page I validate "(.+)" is selected as departure airport$/, (departureCityFullName) => {
  HomePage.validateDepartureCityFullName(departureCityFullName);
});
Then(/^I am on landing page I validate "(.+)" is selected as destination airport$/, (destinationCityFullName) => {
  HomePage.validateDestinationCityFullName(destinationCityFullName);
});
Then(/^I am on landing page I validate Departure field is clickable by default$/, () => {
  HomePage.validateDepartureFieldClickableByDefault();
});
Then(/^I am on landing page I validate Departure field is displayed in the Search Widget$/, () => {
  HomePage.validateDepartureFieldClickableByDefault();
});
Then(/^I am on landing page I validate Departure field is empty by default$/, () => {
  HomePage.validateDepartureFieldEmptyByDefault();
});
Then(/^I validate list of departure city from drop-down with airport api$/, () => {
  HomePage.validateLandingPageDepartureAirportList(departureAirportCode, wsAirportList);
});
Then(/^I am on landing page I validate destination city list for each departure airport from route API$/, () => {
  HomePage.validateDepartueAirportRouteMatchesDestinationAirportList(departureAirportCode, airportRoutes);
});
Then(/^I am on Flights page I expect "(.+)" and disabled "(.+)" for the dates when no flights available for selected city pair$/,
  (errorMessage, disabledTab) => {
    HomePage.validateNoFlightErrorMessage(errorMessage, disabledTab);
  });
Then(/^I am on landing page I validate increment button status for Infant in Seat travelers is "(.+)"$/, (buttonStatus) => {
  HomePage.validateIncrementButtonStatusForInfantInSeat(buttonStatus);
});
Then(/^I am on landing page I validate increment button status for Infant in Lap travelers is "(.+)"$/, (buttonStatus) => {
  HomePage.validateIncrementButtonStatusForInfantInLap(buttonStatus);
});
Then(/^I am on landing page I validate decrement button status for Infant in Seat travelers is "(.+)"$/, (buttonStatus) => {
  HomePage.validateDecrementButtonStatusForInfantInSeat(buttonStatus);
});
Then(/^I am on landing page I validate decrement button status for Infant in Lap travelers is "(.+)"$/, (buttonStatus) => {
  HomePage.validateDecrementButtonStatusForInfantInLap(buttonStatus);
});
Then(/^I am on landing page I validate increment button status for child travelers is "(.+)"$/, (buttonStatus) => {
  HomePage.validateIncrementButtonStatusForChild(buttonStatus);
});
Then(/^I am on landing page I validate decrement button status for child travelers is "(.+)"$/, (buttonStatus) => {
  HomePage.validateDecrementButtonStatusForChild(buttonStatus);
});
Then(/^I am on landing page I expect departure date field is active$/, () => {
  HomePage.validateDepartureDateFieldIsActive();
});
Then(/^I am on landing page I expect return date field is active$/, () => {
  HomePage.validateReturnDateFieldIsActive();
});
Then(/^I am on landing page I expect default placeholder for returning date field is "(.+)"$/, (placeholderValue) => {
  HomePage.validateReturnDateFieldPlaceholderValue(placeholderValue);
});
Then(/^I am on landing page I validate highlighted period is visible when opening departure date calendar$/, () => {
  HomePage.validateHighlightedPeriodIsVisibleWhenOpeningDepartureDateCalendar();
});
Then(/^I am on landing page I validate highlighted period is visible when opening returning date calendar$/, () => {
  HomePage.validateHighlightedPeriodIsVisibleWhenOpeningReturningDateCalendar();
});
Then(/^I am on landing page I validate Infant In Lap count "(.+)" does not exceed the Adults count "(.+)"$/, (LapChildCount, AdultCount) => {
  HomePage.validateInfantInLapCountDoesNotExceedAdultsCount(LapChildCount, AdultCount);
});
Then(/^I am on landing page I validate Infant In Lap tooltip "(.+)"$/, (content) => {
  HomePage.validateInfantInLapTooltip(content);
});
Then(/^I am on landing page I validate Departure Date field label is "(.+)"$/, (departureDateFieldLabel) => {
  HomePage.validateDepartureDateFieldLabel(departureDateFieldLabel);
});
Then(/^I am on landing page I validate Return Date field label is "(.+)"$/, (returnDateFieldLabel) => {
  HomePage.validateReturnDateFieldLabel(returnDateFieldLabel);
});
Then(/^I am on landing page I validate Departure Date field is disable "(.+)"$/, (departureDateDisabled) => {
  HomePage.validateDepartureDateFieldStatus(departureDateDisabled);
});
Then(/^I am on landing page I validate Departure Date date-picker calendar can be closed without selecting a date$/, () => {
  HomePage.validateDepartureDateDatePickerClosed();
});
Then(/^I am on landing page I expect default placeholder for departure date field is "(.+)"$/, (placeholderValue) => {
  HomePage.validateDepartureDateFieldPlaceholderValue(placeholderValue);
});
Then(/^I am on landing page I validate children tooltip "(.+)" "(.+)" and "(.+)"$/, (contentLineOne, contentLineTwo, contentLineThree) => {
  HomePage.validateChildToolTipInfo(contentLineOne, contentLineTwo, contentLineThree);
});
Then(/^I am on landing page I validate all non-Adult travelers increment button clickable "(.+)"$/, (isIncreamentDisabled) => {
  HomePage.validateNonAdultTravelersIncrementButton(isIncreamentDisabled);
});
Then(/^I am on landing page I validate Infant In seat tooltip "(.+)"$/, (content) => {
  HomePage.validateInfantInSeatTooltip(content);
});
Then(/^I am on landing page I validate default traveler value for Infant in Lap is "(.+)"$/, (defaultCount) => {
  HomePage.validateInfantInLapDefaultCount(defaultCount);
});
Then(/^I am on landing page I validate Infants In Seat default count value is "(.+)"$/, (defaultCount) => {
  HomePage.validateInfantInSeatDefaultCount(defaultCount);
});
Then(/^I am on landing page I validate Returning Date field is disabled$/, () => {
  HomePage.validateReturnDateFieldIsDisabled();
});
Then(/^I expect label for Infant in lap to be displayed as "(.+)"$/, (ExpectedLabel) => {
  HomePage.validateInfantInLapLabelIsCorrectByCount(ExpectedLabel);
});
Then(/^I expect label for Infant in seat to be displayed as "(.+)"$/, (ExpectedLabel) => {
  HomePage.validateInfantInSeatLabelIsCorrectByCount(ExpectedLabel);
});
Then(/^I expect label for Adult to be displayed as "(.+)"$/, (ExpectedLabel) => {
  HomePage.validateAdultLabelIsCorrectByCount(ExpectedLabel);
});
Then(/^I am on landing page I validate Departure Date and Return Date fields are displayed for Round Trip$/, () => {
  HomePage.validateDepartureReturnDateFields();
});
Then(/^I am on landing page I expect label for Child to be displayed as "(.+)"$/, (ExpectedChildLabel) => {
  HomePage.validateChildLabel(ExpectedChildLabel);
});
Then(/^I am on landing page I expect for "(.+)" oneway is "(.+)" and roundTrip is "(.+)"$/, (tripType, oneWayChecked, roundTripChecked) => {
  HomePage.validateOnlyOneTripTypeIsSelectable(tripType, oneWayChecked, roundTripChecked);
});
Then(/^I am on landing page I expect departCalendar "(.+)"$/, (departCalendar) => {
  HomePage.validateDepartCalendar(departCalendar);
});
Then(/^I am on landing page I expect returnCalendar "(.+)"$/, (returnCalendar) => {
  HomePage.validateReturnCalendar(returnCalendar);
});
Then(/^I am on landing page I validate Travelers field text$/, () => {
  HomePage.validateFlightSearchTravelersText();
});
Then(/^I expect "(.+)" page to be displayed for "(.+)"$/, (deepLink, view) => {
  HomePage.validateDeepLinkPage(deepLink, view);
});
Then(/^I am on landing page I validate Round Trip Discount Message "(.+)"$/, (message) => {
  HomePage.validateRoundTripDiscountMessage(message);
});
Then(/^I am on landing page I expect airport list sorted alphabetically$/, () => {
  HomePage.validateAirportListIsSorted();
});
Then(/^I am on "(.+)" page I expect "(.+)" message displayed$/, (actualPage, errormsg) => {
  HomePage.validateErrorMsg(actualPage, errormsg);
});
Then(/^I am on landing page I expect Home page to be displayed$/, () => {
  HomePage.validateHomePageDisplayed();
});
Then(/^I am on landing page I expect Home page to be displayed in 30 Seconds$/, () => {
  HomePage.validateHomePageDisplayedOnSpecifiedTime();
});
Then(/^I am on the search for I click the X close button and see flight search collapse$/, () => {
  HomePage.clickSearchFormClose();
});
When(/^I am on search form I see that the Total Trip default value is displayed$/, function () {
  HomePage.validateTripTotalDefaultValueDisplayed();
});
When(/^I am on search form I see that the the Cart icon is displayed$/, function () {
  HomePage.validateCartIconDisplayed();
});
