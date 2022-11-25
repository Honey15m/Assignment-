import { Page } from '@g4/prova';

const hooks = {
  orgFeild: "[data-hook='flight-search-origin']",
  orgFieldInput: "[id='select-origin']",
  dstFeild: "[data-hook='flight-search-destination']",
  dstFeildInput: "[id='select-destination']",
  clickOnCalendar: "[class='Input__ClickableWrapper-dn8eno-2 gBZxbe']",
  selectableDates: "[class='Day-a047d8-0 bMaVmA']",
  checkinDates: "[data-hook='flight-search-date-picker_calendar-1_select-day-6']",
  respCheckinDates: "[data-hook='flight-search-date-picker_calendar-0_select-day-6']",
  checkoutDates: "[data-hook='flight-search-date-picker_calendar-0_select-day-8']",
  searchFlightButton: "[data-hook='flight-search-submit']",
  navigateNextMonth: "[data-hook='flight-search-date-picker_navigate-next-month']",
  checkinDatesHotelSkip: "[data-hook='flight-search-date-picker_calendar-0_select-day-19']",
  checkoutDatesHotelSkip: "[data-hook='flight-search-date-picker_calendar-0_select-day-3']",
  windowSmallNext: "//button[contains(@aria-label,'Go to next month')]",
};

const flightPageContinue = "[data-hook='flights-page_continue']";

class FlightsPage extends Page {
  buildDynamicURL(
    originMP,
    destinationMP,
    departureDateMP,
    returningDateMP,
    adults,
    children,
    infantsInSeat,
    infantsInLap,
    car,
    hotel
  ) {
    let envUrl = process.env.appEnv;
    let tripType, returningDate;

    if (returningDateMP) {
      tripType = 'ROUNDTRIP';
    } else {
      tripType = 'ONEWAY';
    }

    if (returningDateMP) {
      returningDate = returningDateMP;
    } else {
      returningDate = '';
    }

    let urlParams =
      '/booking/flights?tt=' +
      tripType +
      '&o=' +
      originMP +
      '&d=' +
      destinationMP +
      '&ta=' +
      adults +
      '&tc=' +
      children +
      '&tis=' +
      infantsInSeat +
      '&til=' +
      infantsInLap +
      '&ds=' +
      departureDateMP +
      '&de=' +
      returningDate +
      '&c=' +
      car +
      '&h=' +
      hotel +
      '';
    browser.deleteAllCookies();
    browser.url(envUrl + urlParams);
  }

  openUrl(url) {
    super.setBrowserSize();
    browser.deleteAllCookies();
    browser.url(url);
  }
  waitForFlightPageToLoad() {
    this.waitForDisplayed(hooks.searchFlightButton);
  }
  selectCityPair(org, dst) {
    this.clickElement(hooks.orgFeild);
    this.setInputField(hooks.orgFieldInput, org);
    browser.keys('Enter');
    this.pause(2000);
    this.clickElement(hooks.dstFeild);
    this.setInputField(hooks.dstFeildInput, dst);
    browser.keys('Enter');
    this.pause(2000);
  }
  setDates() {
    this.clickElement(hooks.clickOnCalendar);
    this.clickElement(hooks.checkinDates);
    this.clickElement(hooks.checkoutDates);
    browser.keys('Enter');
  }
  openCheckoutCalendar() {
    browser.waitForEnabled(calendarCheckOut, 20000, false);
    browser.element(calendarCheckOut).click();
  }
  clickFlightSearch() {
    this.clickElement(hooks.searchFlightButton);
    this.pause(2000);
  }
  setDepartureDate() {
    this.clickElement(hooks.clickOnCalendar);
    this.clickElement(hooks.checkinDates);
    browser.keys('Enter');
  }
  setCustomDatesForHotel() {
    this.clickElement(hooks.clickOnCalendar);
    this.clickElement(hooks.checkinDatesHotelSkip);
    this.clickElement(hooks.navigateNextMonth);
    this.clickElement(hooks.checkoutDatesHotelSkip);
    browser.keys('Enter');
  }

  clickFlightContinue() {
    this.clickElement($(flightPageContinue));
  }

  setDatesResp() {
    this.clickElement(hooks.clickOnCalendar);
    $(hooks.windowSmallNext).waitForDisplayed();
    this.clickElement(hooks.windowSmallNext);
    this.clickElement(hooks.respCheckinDates);
    browser.keys('Enter');
  }
}
export default new FlightsPage();
