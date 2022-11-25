import { Page, Actions } from '@g4/prova';
import { assert } from 'chai';

const defaultTripType = "//*[contains(@name,'trip_type')]";
const tripType = "[data-hook='flight-search-trip-type']";
const flightsHeading = "//h1//span[@data-hook='flights-page_page-heading']";
const roundTrip = "[data-hook='flight-search-trip-type_ROUNDTRIP']";
const oneWay = "[data-hook='flight-search-trip-type_ONEWAY']";
const departureField = "[data-hook='flight-search-origin']";
const departureFieldInput = "[data-hook='flight-search-origin'] input";
const destinationField = "[data-hook='flight-search-destination']";
const destinationFieldInput = "[data-hook='flight-search-destination'] input";
const travelersExpando = "[data-hook='flight-search-travelers-expando']";
const travelersField = "[data-hook='flight-search-travelers-expando-button']";
const travelersLabel =
  "//span[@class='Text-sc-1o5ubbx-0 dFpmms'][contains(text(),'Travelers')]";
const childrenSelectedValueNumber = "[data-hook='flight-search-children']";
const adultSelectedValue = "[data-hook='flight-search-adults']";
const seatedValue = "[data-hook='flight-search-travelers-seated']";
const lapValue = "[data-hook='flight-search-travelers-in-lap']";
const adultsLabel = "[data-hook='flight-search-adults-label']";
const childLabel = "[data-hook='flight-search-children-label']";
const adultsSubLabel = "[data-hook='flight-search-adults-sublabel']";
const childSubLabel = "[data-hook='flight-search-children-sublabel']";
const incrementAdults = "[data-hook='flight-search-adults_increment']";
const decrementAdults = "[data-hook='flight-search-adults_decrement']";
const departureDate =
  "[data-hook='flight-search-date-picker_expand-start-date']";
const departureDateField =
  "[data-hook='flight-search-date-picker_input-start-date']";
const datePickerPrevious =
  "[data-hook='flight-search-date-picker_navigate-previous-month']";
const datePickerNext =
  "//button[@data-hook='flight-search-date-picker_navigate-next-month']|//button[@aria-label='Go to next month']";
const calendarMonthAndYearTextLeft =
  "[data-hook='flight-search-date-picker_calendar-0_display-month-year']";
const calendarMonthAndYearTextRight =
  "[data-hook='flight-search-date-picker_calendar-1_display-month-year']";
const searchButton = "[data-hook='flight-search-submit']";
const flightPageTitle = "[data-hook='flights-page_page-heading']";
const spinnerBar = "[data-hook='flights-page-spinner']";
const destinationAirportLabel = "//span[contains(text(),'To')]";
const departureAirportLabel = "//span[contains(text(),'From')]";
const departureDateLabel = "//span[contains(text(),'Departure Date')]";
const returnDateLabel = "//span[contains(text(),'Return Date')]";
const noDepartureAirportMessage =
  "[data-hook='flight-search-origin_no-airports-found']";
const noDestinationAirportMessage =
  "[data-hook='flight-search-destination_no-airports-found']";
const departureAirportInputField = "//input[@id='select-origin']";
const departureAirportListSelector = "div[data-hook*='flight-search-origin_']";
const destinationAirportListSelector =
  "div[data-hook*='flight-search-destination_']";
const incrementInfantInSeat =
  "//button[@data-hook='flight-search-infants-seat_increment']";
const incrementInfantInLap =
  "//button[@data-hook='flight-search-infants-lap_increment']";
const decrementInfantInSeat =
  "//button[@data-hook='flight-search-infants-seat_decrement']";
const decrementInfantInLap =
  "//button[@data-hook='flight-search-infants-lap_decrement']";
const incrementChildren = "[data-hook='flight-search-children_increment']";
const decrementChildren =
  "//button[@data-hook='flight-search-children_decrement']";
const returningDate =
  "//button[@data-hook='flight-search-date-picker_expand-end-date']";
const returnDatePlaceholder =
  "//input[@data-hook='flight-search-date-picker_input-end-date']";
const childToolTip = "[data-hook='flight-search-children-popover_trigger']";
const childToolTipContent =
  "[data-hook='flight-search-children-popover_content']";
const childToolTipContentLineOne =
  "(//div[@data-hook='flight-search-children-popover_content']//span)[1]";
const childToolTipContentLineTwo =
  "(//div[@data-hook='flight-search-children-popover_content']//span)[2]";
const childToolTipContentLineThree =
  "(//div[@data-hook='flight-search-children-popover_content']//span)[3]";
const highlightedDepartDateCalendar =
  "//button[@data-hook='flight-search-date-picker_expand-start-date']";
const InfantInLapTooltip =
  "//div[@data-hook='flight-search-infants-lap-popover_content']//span";
const ClickInfantInLapTooltip =
  "//button[@data-hook='flight-search-infants-lap-popover_trigger']";
const ClickInfantInSeatTooltip =
  "//button[@data-hook='flight-search-infants-seat-popover_trigger']";
const InfantInSeatTooltip =
  "//div[@data-hook='flight-search-infants-seat-popover_content']//span";
const InfantInLapCount = "//input[@data-hook='flight-search-infants-lap']";
const InfantInSeatCount = "//input[@data-hook='flight-search-infants-seat']";
const InfantInLapLabel = "//span[@data-hook='flight-search-infants-lap-label']";
const InfantInSeatLabel =
  "//span[@data-hook='flight-search-infants-seat-label']";
const infantInSeatSubLabel =
  "[data-hook='flight-search-infants-seat-sublabel']";
const infantInLapSubLabel = "[data-hook='flight-search-infants-lap-sublabel']";
const departingListViewButton = "(//button[@value='LIST_VIEW'])[1]";
const calendarMonthDatesAvailable =
  "//button[contains(@data-hook,'flight-search-date-picker_calendar-1_select-day-')][@aria-hidden='false']";
const optionalServicesDeepLink =
  "[data-hook='flight-search-optional-services']";
const changedBagFeesAndPolicyDeepLink =
  "[data-hook='flight-search-changed-bag-fees']";
const tenPlusTravelersDeepLink = "[data-hook='flight-search-10-travelers']";
const optionalServicesText =
  "//h1[contains(text(),'Optional Services & Fees')]";
const baggageFeesText =
  "//strong[contains(text(),'Checked and Carry-on Baggage Fees and Allowances')]";
const chartersText = "(//button[contains(text(),'REQUEST A QUOTE')])[1]";
const roundTripDiscountText = "[data-hook='roundtrip-incentive-text']";
const adultCurrentValue = "//input[@id='adults']";
const closeCookiesPopup =
  "//button[contains(@id,'onetrust-accept-btn-handler')]";
const travelAdvisory = "[data-hook='travel-advisory_trigger']";
const billboards = "//img[contains(@title,'Billboard')]";
const billboardsLeftArrow = "//img[@alt='larrow']";
const billboardsRightArrow = "//img[@alt='rarrow']";
const billboardsDisplayed =
  "//div[@aria-hidden='false']//img[contains(@title,'Billboard_Loyalty')]";
const headerFlights = "[data-hook='header-main-menu-item_flight']";
const headerHotel = "[data-hook='header-main-menu-item_hotel']";
const headerCar = "[data-hook='header-main-menu-item_car']";
const headerTravelerInfo = "[data-hook='header-main-menu-item_travel-info']";
const headerCheckIn = "[data-hook='header-top-bar-menu-item_check-in']";
const headerManageTrip = "[data-hook='header-top-bar-menu-item_manage-trip']";
const headerLogIn = "[data-hook='header-user-menu-item_log-in']";
const headerFlightStatus =
  "[data-hook='header-top-bar-menu-item_flight-status']";
const headerCartButton = "[data-hook='header-cart-button']";
const optionalServicesFees = "[data-hook='flight-search-optional-services']";
const changedBagFeesPolicy = "[data-hook='flight-search-changed-bag-fees']";
const tenPlusTravelers = "[data-hook='flight-search-10-travelers']";
const emailSignUp = "[data-hook='email-sign-up-expand']";
const emailInputField = "[data-hook='email-sign-up-email-input']";
const getDealsButton = "[data-hook='email-sign-up-get-deals-button']";
const expiredTransactionIdPageMsg = "[data-hook='expired-transaction-id-page']";
const hereButton = "//a[@class='PlainLink-sc-1gzbott-0 fBUjpW']";
const homePage = "[data-hook='homepage-hero-image']";
const title = "//title[text()='Home']";
const modifyButton = "[data-hook='header-search-widget_trigger']";
const infoIcon =
  "//div[@class='FieldPlaceholderInfoText__InfoIcon-sc-1riiwcm-0 fYJgYx']";
const infoIconVerbiage = "[data-hook='roundtrip-incentive-text']";
const modifySearchCloseButton =
  "//button[@class='FlightSummary__CloseFormButton-t835uv-4 McPfK']//img";
const totalTripLabel = "[data-hook = 'header-cart-button_label']";
const totalTripDefaultValue = "[data-hook='header-cart-button_price']";
const cartIcon = "[data-hook='header-cart-button_icon']";
const isRoundTripSelected =
  "//label[@data-hook='flight-search-trip-type_ROUNDTRIP']//div//input";
const adultLabel =
  "//div[contains(@class,'ReactCollapse--content')]//div//div//span[@data-hook='flight-search-adults-label']";
const overlayMerchandisePopup = "[data-hook='overlay-merchandise_ice-pop']";
const closeOverlayMerchandisePopup =
  "[data-hook='overlay-merchandise_ice-pop_close']";
const searchForm = "[data-hook='flight-search-form']";
var departureAirportCode = [];
var billboardNameList = [];
var BookingDisabledFromMonth;
let newDate = new Date();

class HomePage extends Page {
  invokeMobileResposiveBrowser(mobileModel) {
    //browser.emulateDevice(mobileModel)
    browser.setWindowSize(562, 936);
    browser.url(process.env.appEnv);
    browser.deleteAllCookies();
    browser.pause(4000);
    if ($(overlayMerchandisePopup).isDisplayed()) {
      $(closeOverlayMerchandisePopup).click();
    }
  }

  openUrl(url) {
    //super.setBrowserSize();
    browser.maximizeWindow();
    browser.deleteAllCookies();
    browser.url(url);
    browser.pause(4000);
    if ($(overlayMerchandisePopup).isDisplayed()) {
      $(closeOverlayMerchandisePopup).click();
    }
    if ($(closeCookiesPopup).isDisplayed()) {
      $(closeCookiesPopup).click();
    }
  }

  validateDefaultTripType() {
    assert.equal(
      $(defaultTripType).isSelected(),
      true,
      'Default trip type value changed.'
    );
  }

  openDepartureDateCalendar() {
    $(departureDate).waitForClickable();
    $(departureDate).click();
  }
  openDepartureDateCalendarOnMobile() {
    browser.pause(2000);
    if ($(closeCookiesPopup).isDisplayed()) {
      $(closeCookiesPopup).click();
    }
    $(departureDate).waitForClickable();
    $(departureDate).click();
  }
  clickDepartureField() {
    browser.pause(2000);
    if ($(closeCookiesPopup).isDisplayed()) {
      $(closeCookiesPopup).click();
    }
    $(departureField).click();
  }
  selectTripType(tripType) {
    browser.execute('window.scrollBy(0,-1000)');
    if (tripType.includes('oneway')) {
      $(oneWay).waitForClickable();
      $(oneWay).click();
    } else if (tripType.includes('roundTrip')) {
      if (!$(isRoundTripSelected).isSelected()) {
        $(roundTrip).waitForClickable();
        $(roundTrip).click();
      }
    }
  }

  clickDestinationField() {
    $(destinationField).click();
  }

  clickTravelersField() {
    $(travelersField).click();
    browser.pause(500);
  }

  selectDeparture(departure) {
    $(departureField).click();
    $(departureFieldInput).setValue(departure);
    browser.keys('Enter');
  }

  selectDestination(destination) {
    if (
      $(closeCookiesPopup).isDisplayed() &&
      $(closeCookiesPopup).isClickable()
    ) {
      $(closeCookiesPopup).click();
    }
    browser.execute('window.scrollBy(0,-1000)');
    $(destinationField).waitForDisplayed();
    $(destinationField).click();
    $(destinationFieldInput).setValue(destination);
    browser.keys('Enter');
  }

  selectDestinationFromMarketProvider(destinationMP) {
    $(destinationField).click();
    if (destinationMP === 'IWA') {
      destinationMP = destinationMP.replace(destinationMP, 'AZA');
    }
    if (destinationMP === 'GPI') {
      destinationMP = destinationMP.replace(destinationMP, 'FCA');
    }
    $(destinationFieldInput).setValue(destinationMP);
    browser.keys('Enter');
  }

  clickTravelersField() {
    $(travelersField).click();
    browser.pause(500);
  }

  validateDepartureCityFullName(departureCityFullName) {
    assert.equal(
      $(departureField).getText(),
      departureCityFullName,
      'Departure airport validation fail!!'
    );
  }

  validateDestinationCityFullName(destinationCityFullName) {
    assert.equal(
      $(destinationField).getText(),
      destinationCityFullName,
      'Destination airport validation fail!!'
    );
  }

  validateTravelersExpandoIsDisplayed() {
    assert.equal(
      $(travelersExpando).getAttribute('aria-expanded'),
      'true',
      'Travelers Expando section is not displayed.'
    );
  }

  validateTravelersExpandoIsCollapsed() {
    assert.equal(
      $(travelersExpando).getAttribute('aria-expanded'),
      'false',
      'Travelers Expando section is still displayed.'
    );
  }

  validateChildrenLabel(defaultChildCount) {
    assert.equal(
      $(childrenSelectedValueNumber).getAttribute('value'),
      defaultChildCount,
      'Default value for child traveler is' +
        $(childrenSelectedValueNumber).getAttribute('value')
    );
  }

  validateDepartureDateCalendar() {
    assert.equal(
      $(departureDate).getAttribute('aria-expanded'),
      'true',
      'DepartureDate calendar failed to opened!!'
    );
  }

  validateAdultLabel(defaultAdultCount) {
    assert.equal(
      $(adultSelectedValue).getAttribute('value'),
      defaultAdultCount,
      'Default value for adult traveler is' +
        $(adultSelectedValue).getAttribute('value')
    );
  }

  validateTravelersSummaryLabelForAdult(adultLabel, ageRange) {
    assert.equal(
      $(adultsLabel).getText(),
      adultLabel,
      'Travelers Summary Label For Adult is: ' + $(adultsLabel).getText()
    );
    assert.equal(
      $(adultsSubLabel).getText(),
      ageRange,
      'Travelers Summary sub-label For Adult is: ' + $(adultsSubLabel).getText()
    );
  }

  validateTravelersSummaryLabelForChild(childrenLabel, ageRange) {
    assert.equal(
      $(childLabel).getText(),
      childrenLabel,
      'Travelers Summary Label For Child is: ' + $(childLabel).getText()
    );
    assert.equal(
      $(childSubLabel).getText(),
      ageRange,
      'Travelers Summary sub-label For Child is: ' + $(childSubLabel).getText()
    );
  }

  validateTravelersSummaryLabelForInfantInSeat(infantInSeatLabel, ageRange) {
    assert.equal(
      $(InfantInSeatLabel).getText(),
      infantInSeatLabel,
      'Travelers Summary Label For Infant in Seat is: ' +
        $(InfantInSeatLabel).getText()
    );
    assert.equal(
      $(infantInSeatSubLabel).getText(),
      ageRange,
      'Travelers Summary sub-label For Infant in Seat is: ' +
        $(infantInSeatSubLabel).getText()
    );
  }

  validateTravelersSummaryLabelForInfantInLap(infantInLapLabel, ageRange) {
    assert.equal(
      $(InfantInLapLabel).getText(),
      infantInLapLabel,
      'Travelers Summary Label For Infant in Lap is: ' +
        $(InfantInLapLabel).getText()
    );
    assert.equal(
      $(infantInLapSubLabel).getText(),
      ageRange,
      'Travelers Summary sub-label For Infant in Lap is: ' +
        $(infantInLapSubLabel).getText()
    );
  }

  validateIncrementButtonStatusForAdult() {
    $(incrementAdults).click();
    assert.equal(
      $(adultSelectedValue).getAttribute('value'),
      '2',
      'Unable to click increment button: '
    );
  }

  validateDecrementButtonStatusForAdult(status) {
    assert.equal(
      $(decrementAdults).getAttribute('disabled'),
      status,
      'Decrement adults button is not disabled.'
    );
  }

  selectAdults(adultsCount) {
    browser.pause(200);
    if ($(incrementAdults).isDisplayed() === false) {
      browser.execute('window.scrollBy(0,-300)');
      browser.pause(100);
      $(travelersField).click();
    }
    browser.pause(1500);
    $(incrementAdults).waitForDisplayed();
    if (Number(adultsCount) > Number(1)) {
      do {
        if ($(incrementAdults).isDisplayed() === false) {
          browser.execute('window.scrollBy(0,-300)');
          browser.pause(50);
          $(travelersField).click();
        }
        $(incrementAdults).waitForClickable();
        $(incrementAdults).click();
        browser.pause(10);
      } while (
        Number($(adultCurrentValue).getAttribute('value')) <
          Number(adultsCount) &&
        $(incrementAdults).isClickable() === true
      );
    }
  }

  selectLapInfantPlusOne(ClickCount) {
    for (let i = 0; i < ClickCount - 1; i++) {
      $(incrementInfantInLap).click();
    }
  }

  validateMaximumAllowedAdultValue(isIncreamentDisabled, adultCount) {
    assert.equal(
      $(incrementAdults).isClickable(),
      eval(isIncreamentDisabled),
      'Increment adults button is not disabled'
    );
    assert.equal(
      $(adultSelectedValue).getAttribute('value'),
      adultCount,
      'Maximum allowed adult validation failed'
    );
  }

  validateTravelersFieldIsAlwaysActive() {
    assert.equal(
      $(travelersField).getAttribute('aria-expanded'),
      'true',
      'Travelers field is not active'
    );
  }

  openReturningDateCalendar() {
    $(returningDate).click();
  }

  chooseDepartingDate(dateNumber) {
    $(departureDate).waitForEnabled();
    let newDate = new Date();
    let { calendarMonthLeft, month, dayInt, nextDate } = this.calculateDate(
      dateNumber,
      newDate
    );

    if (month === calendarMonthLeft) {
      $(
        "button[data-hook='flight-search-date-picker_calendar-0_select-day-" +
          dayInt +
          "'][aria-hidden='false']"
      ).click();
    } else {
      $(
        "button[data-hook='flight-search-date-picker_calendar-1_select-day-" +
          dayInt +
          "'][aria-hidden='false']"
      ).click();
    }
    return nextDate;
  }
  chooseDepartingDateOnMobile(dateNumber) {
    $(departureDate).waitForClickable();
    if (
      $(closeCookiesPopup).isDisplayed() &&
      $(closeCookiesPopup).isClickable()
    ) {
      try {
        $(closeCookiesPopup).click();
      } catch (ex) {
        console.log('exception while clicking cookies popup!');
      }
      $(departureDate).click();
    }
    let newDate = new Date();
    let {
      calendarMonthLeft,
      month,
      dayInt,
      nextDate,
    } = this.calculateDateOnMobile(dateNumber, newDate);
    if (month === calendarMonthLeft) {
      $(
        "button[data-hook='flight-search-date-picker_calendar-0_select-day-" +
          dayInt +
          "'][aria-hidden='false']"
      ).click();
    } else {
      $(
        "button[data-hook='flight-search-date-picker_calendar-1_select-day-" +
          dayInt +
          "'][aria-hidden='false']"
      ).click();
    }
    if ($(closeCookiesPopup).isDisplayed()) {
      $(closeCookiesPopup).click();
      $(departureDateField).waitForDisplayed();
      if ($(departureDateField).getAttribute('value') == null) {
        $(departureDate).click();
      }
    }
    return nextDate;
  }
  chooseReturningDate(dateNumber, departureDate) {
    if ($(isRoundTripSelected).isSelected()) {
      let returnDate = new Date();
      let { calendarMonthLeft, month, dayInt } = this.calculateDate(
        dateNumber,
        departureDate
      );

      if (month === calendarMonthLeft) {
        $(
          "button[data-hook='flight-search-date-picker_calendar-0_select-day-" +
            dayInt +
            "'][aria-hidden='false']"
        ).click();
      } else {
        $(
          "button[data-hook='flight-search-date-picker_calendar-1_select-day-" +
            dayInt +
            "'][aria-hidden='false']"
        ).click();
      }
      return returnDate;
    }
  }
  chooseReturningDateOnMobile(dateNumber, departureDate) {
    if ($(isRoundTripSelected).isSelected()) {
      if ($(closeCookiesPopup).isDisplayed()) {
        $(closeCookiesPopup).click();
      }
      if (!$(calendarMonthAndYearTextLeft).isDisplayed()) {
        $(returningDate).click();
      }
      let returnDate = new Date();
      let { calendarMonthLeft, month, dayInt } = this.calculateDateOnMobile(
        dateNumber,
        departureDate
      );
      if (month === calendarMonthLeft) {
        $(
          "button[data-hook='flight-search-date-picker_calendar-0_select-day-" +
            dayInt +
            "'][aria-hidden='false']"
        ).click();
      }
      return returnDate;
    }
  }
  selectMonth(month, direction) {
    if (!$(calendarMonthAndYearTextLeft).isDisplayed()) {
      $(departureDate).click();
    }
    let calendarMonthLeft = $(calendarMonthAndYearTextLeft)
      .getText()
      .toString()
      .split(' ')[0]
      .slice(0, 3)
      .trim();

    let calendarMonthRight = $(calendarMonthAndYearTextRight)
      .getText()
      .toString()
      .split(' ')[0]
      .slice(0, 3)
      .trim();

    while (!(month === calendarMonthLeft || month === calendarMonthRight)) {
      let nextMonth = $(direction).getAttribute('disabled');
      if (nextMonth == null) {
        $(direction).click();
      } else {
        return null;
      }
      calendarMonthLeft = $(calendarMonthAndYearTextLeft)
        .getText()
        .toString()
        .split(' ')[0]
        .slice(0, 3)
        .trim();

      calendarMonthRight = $(calendarMonthAndYearTextRight)
        .getText()
        .toString()
        .split(' ')[0]
        .slice(0, 3)
        .trim();
    }
    return calendarMonthLeft;
  }

  calculateDate(dateNumber, newDate) {
    let dateSelected = parseInt(dateNumber);
    newDate.setDate(newDate.getDate() + dateSelected);
    let stringDate = newDate.toDateString().slice(3);
    let month = stringDate.slice(0, -8).trim();
    let day = stringDate.slice(4, -5).trim();
    let dayInt = parseInt(day);
    let year = stringDate.slice(7).trim();
    if (!$(calendarMonthAndYearTextLeft).isDisplayed()) {
      if ($(departureDateField).getAttribute('value') == null) {
        $(departureDate).click();
      }
    }
    let calendarYearLeft = $(calendarMonthAndYearTextLeft)
      .getText()
      .toString()
      .split(' ')[1]
      .trim();
    let calendarYearRight = $(calendarMonthAndYearTextRight)
      .getText()
      .toString()
      .split(' ')[1]
      .trim();

    while (!(year === calendarYearLeft || year === calendarYearRight)) {
      $(datePickerNext).click();

      calendarYearLeft = $(calendarMonthAndYearTextLeft)
        .getText()
        .toString()
        .split(' ')[1]
        .trim();
      calendarYearRight = $(calendarMonthAndYearTextRight)
        .getText()
        .toString()
        .split(' ')[1]
        .trim();
    }
    let direction;
    if (dateNumber < 0) {
      direction = datePickerPrevious;
    } else {
      direction = datePickerNext;
    }
    let calendarMonthLeft = this.selectMonth(month, direction);
    let monthNumber;
    while (calendarMonthLeft == null) {
      $(departureDate).click();
      monthNumber = newDate.getMonth() + 1;
      newDate = new Date(year, monthNumber, 1);
      stringDate = newDate.toDateString().slice(3);
      month = stringDate.slice(0, -8).trim();
      dayInt = 1;
      calendarMonthLeft = this.selectMonth(month, direction);
    }
    let isDisabled = false;
    let dayCalendar;
    if (month === calendarMonthLeft) {
      dayCalendar =
        "button[data-hook='flight-search-date-picker_calendar-0_select-day-" +
        dayInt +
        "'][aria-hidden='false']";
    } else {
      dayCalendar =
        "button[data-hook='flight-search-date-picker_calendar-1_select-day-" +
        dayInt +
        "'][aria-hidden='false']";
    }
    isDisabled = $(dayCalendar).isClickable();
    let nextDate = newDate;
    while (!isDisabled) {
      nextDate.setDate(nextDate.getDate() + 1);
      stringDate = nextDate.toDateString().slice(3);
      day = stringDate.slice(4, -5).trim();
      dayInt = parseInt(day);
      month = stringDate.slice(0, -8).trim();
      calendarMonthLeft = this.selectMonth(month, direction);

      if (month === calendarMonthLeft) {
        dayCalendar =
          "button[data-hook='flight-search-date-picker_calendar-0_select-day-" +
          dayInt +
          "'][aria-hidden='false']";
      } else {
        dayCalendar =
          "button[data-hook='flight-search-date-picker_calendar-1_select-day-" +
          dayInt +
          "'][aria-hidden='false']";
      }
      isDisabled = $(dayCalendar).isEnabled();
    }
    return { calendarMonthLeft, month, dayInt, nextDate };
  }
  calculateDateOnMobile(dateNumber, newDate) {
    let dateSelected = parseInt(dateNumber);
    newDate.setDate(newDate.getDate() + dateSelected);
    let stringDate = newDate.toDateString().slice(3);
    let month = stringDate.slice(0, -8).trim();
    let day = stringDate.slice(4, -5).trim();
    let dayInt = parseInt(day);
    let year = stringDate.slice(7).trim();
    browser.pause(2000);
    if ($(closeCookiesPopup).isDisplayed()) {
      $(closeCookiesPopup).waitForClickable();
      $(closeCookiesPopup).click();
      $(departureDate).waitForDisplayed();
      $(departureDate).click();
      if ($(departureDateField).getAttribute('value') == null) {
        $(departureDate).click();
      } else if ($(returningDate).getAttribute('value') == null) {
        $(returningDate).click();
      }
    }
    if (!$(calendarMonthAndYearTextLeft).isDisplayed()) {
      $(departureDate).click();
    }
    let calendarYearLeft = $(calendarMonthAndYearTextLeft)
      .getText()
      .toString()
      .split(' ')[1]
      .trim();

    while (!(year === calendarYearLeft)) {
      $(datePickerNext).click();
      calendarYearLeft = $(calendarMonthAndYearTextLeft)
        .getText()
        .toString()
        .split(' ')[1]
        .trim();
    }
    let direction;
    if (dateNumber < 0) {
      direction = datePickerPrevious;
    } else {
      direction = datePickerNext;
    }
    let calendarMonthLeft = this.selectMonthOnMobile(month, direction);
    let monthNumber;
    while (calendarMonthLeft == null) {
      $(departureDate).click();
      $(departureDate).click();
      monthNumber = newDate.getMonth() + 1;
      newDate = new Date(year, monthNumber, 1);
      stringDate = newDate.toDateString().slice(3);
      month = stringDate.slice(0, -8).trim();
      dayInt = 1;
      calendarMonthLeft = this.selectMonthOnMobile(month, direction);
    }
    let isDisabled = false;
    let dayCalendar;
    if (month === calendarMonthLeft) {
      dayCalendar =
        "button[data-hook='flight-search-date-picker_calendar-0_select-day-" +
        dayInt +
        "'][aria-hidden='false']";
    }
    isDisabled = $(dayCalendar).isEnabled();
    let nextDate = newDate;
    while (!isDisabled) {
      nextDate.setDate(nextDate.getDate() + 1);
      stringDate = nextDate.toDateString().slice(3);
      day = stringDate.slice(4, -5).trim();
      dayInt = parseInt(day);
      month = stringDate.slice(0, -8).trim();
      calendarMonthLeft = this.selectMonthOnMobile(month, direction);

      if (month === calendarMonthLeft) {
        dayCalendar =
          "button[data-hook='flight-search-date-picker_calendar-0_select-day-" +
          dayInt +
          "'][aria-hidden='false']";
      }
      isDisabled = $(dayCalendar).isEnabled();
    }
    return { calendarMonthLeft, month, dayInt, nextDate };
  }

  selectMonthOnMobile(month, direction) {
    let calendarMonthLeft = $(calendarMonthAndYearTextLeft)
      .getText()
      .toString()
      .split(' ')[0]
      .slice(0, 3)
      .trim();
    while (!(month === calendarMonthLeft)) {
      let nextMonth = $(direction).getAttribute('disabled');
      if (nextMonth == null) {
        $(direction).click();
      } else {
        return null;
      }
      calendarMonthLeft = $(calendarMonthAndYearTextLeft)
        .getText()
        .toString()
        .split(' ')[0]
        .slice(0, 3)
        .trim();
    }
    return calendarMonthLeft;
  }
  clickSearchButton() {
    if ($(closeCookiesPopup).isClickable()) {
      browser.pause(2000);
      $(closeCookiesPopup).click();
    }
    if (
      $(incrementAdults).isDisplayed() === true ||
      $(adultLabel).isDisplayed() === true
    ) {
      $(travelersField).click();
    }
    $(destinationField).scrollIntoView();
    $(searchButton).waitForDisplayed();
    if ($(searchButton).isClickable()) {
      $(searchButton).click();
    } else {
      if ($(closeCookiesPopup).isClickable()) {
        $(closeCookiesPopup).click();
      }
      browser.pause(1000);
      $(destinationField).scrollIntoView();
      $(searchButton).click();
    }
    browser.pause(1000);
  }

  validateFlightPageIsLoaded(FlightPageTitle) {
    do {
      browser.pause(50);
    } while ($(spinnerBar).isDisplayed());
    $(flightPageTitle).waitForDisplayed({ timeout: 25000 });
    assert.equal(
      $(flightPageTitle).getText(),
      FlightPageTitle,
      'Flight selection page failed to load'
    );
  }
  validateFlightPageIsHeadingLoaded(heading) {
    browser.pause(2000);
    do {
      browser.pause(50);
    } while ($(spinnerBar).isDisplayed());
    $(flightsHeading).waitForDisplayed({ timeout: 30000 });
    browser.pause(2000);
    assert.equal(
      $(flightsHeading).getText(),
      heading,
      'Flight selection page failed to load'
    );
  }
  validateSearchbuttonDefaultStatus(defaultStatus) {
    assert.equal(
      $(searchButton).getAttribute('disabled'),
      defaultStatus,
      'Departure date field is not disabled.'
    );
  }

  validateDepartureCityCurrentLocation(departureCityCurrentLocation) {
    assert.equal(
      $(departureField).getText(),
      departureCityCurrentLocation,
      'Departure airport current location validation successfull!!'
    );
  }
  validateDestinationCityCurrentLocation(destinationCityCurrentLocation) {
    assert.equal(
      $(destinationField).getText(),
      destinationCityCurrentLocation,
      'Destination airport current location validation successfull!!'
    );
  }
  validateDepartureAirportListClosed() {
    assert.equal(
      $(departureField).getText(),
      'Departure, airport',
      'Departure airport list not closed'
    );
  }
  validateDestinationAirportListClosed() {
    $(destinationField).click();
    assert.equal(
      $(destinationField).getText(),
      'Destination, airport',
      'Departure airport list not closed'
    );
  }
  validateDepartureFieldPlaceholder(departureFieldPlaceholder) {
    assert.equal(
      $(departureField).getText(),
      departureFieldPlaceholder,
      'Departure field validation successfull!!'
    );
  }
  validateDestinationFieldPlaceholder(destinationFieldPlaceholder) {
    assert.equal(
      $(destinationField).getText(),
      destinationFieldPlaceholder,
      'Destination field placeholder validation successfull!!'
    );
  }
  validateDestinationFieldLabel(destinationFieldLabel) {
    assert.equal(
      $(destinationAirportLabel).getText(),
      destinationFieldLabel,
      'Destination field label validation failed!!'
    );
  }
  validateDepartureFieldLabel(departureFieldLabel) {
    assert.equal(
      $(departureAirportLabel).getText(),
      departureFieldLabel,
      'Departure field label validation failed!!'
    );
  }

  enterDeparture(departure) {
    $(departureField).click();
    $(departureFieldInput).setValue(departure);
  }
  enterDestination(destination) {
    $(destinationField).click();
    $(destinationFieldInput).setValue(destination);
  }
  validateNoDepartureAirportMessageIsDisplayed(errorMessage) {
    assert.equal(
      $(noDepartureAirportMessage).getText(),
      errorMessage,
      'Wrong message displayed on passing invalid airport code.'
    );
  }
  validateNoDestinationAirportMessageIsDisplayed(errorMessage) {
    assert.equal(
      $(noDestinationAirportMessage).getText(),
      errorMessage,
      'Wrong message displayed on passing invalid airport code.'
    );
  }
  validateDepartureFieldClickableByDefault() {
    assert.equal(
      $(departureField).isClickable(),
      true,
      'Departure field is not clickable'
    );
  }
  validateDepartureFieldEmptyByDefault() {
    assert.equal(
      $(departureAirportInputField).getText(),
      '',
      'Departure field is not empty by default'
    );
  }
  getAllAirportsFromLandingPage() {
    let departureAirportsList = [];
    let airportsList = browser.$$(departureAirportListSelector);

    for (let i = 1; i < airportsList.length; i++) {
      let airportName = airportsList[i].getText();
      departureAirportsList.push(airportName);
    }
    for (let i = 1; i < departureAirportsList.length; i++) {
      let min = departureAirportsList[i].lastIndexOf('(');
      let max = departureAirportsList[i].lastIndexOf(')');
      departureAirportCode.push(
        departureAirportsList[i].substring(min + 1, max)
      );
    }
    return departureAirportCode.sort();
  }
  validateAirportListIsSorted() {
    let ActualdepartureAirportsList = [];
    let airportsList = browser.$$(departureAirportListSelector);
    let ActualdepartureAirportCodeList = [];
    $(departureField).click();
    var expectedDepartAirportList = this.getAllAirportsFromLandingPage();
    for (let i = 1; i < airportsList.length; i++) {
      let airportName = airportsList[i].getText();
      ActualdepartureAirportsList.push(airportName);
    }
    for (let i = 1; i < ActualdepartureAirportsList.length; i++) {
      let min = ActualdepartureAirportsList[i].lastIndexOf('(');
      let max = ActualdepartureAirportsList[i].lastIndexOf(')');
      ActualdepartureAirportCodeList.push(
        ActualdepartureAirportsList[i].substring(min + 1, max)
      );
    }
    for (var i = 0; i < ActualdepartureAirportCodeList.length; i++) {
      assert.equal(
        ActualdepartureAirportCodeList[i],
        expectedDepartAirportList[i],
        'Validation failed: Sorting order mismatch'
      );
    }
  }
  validateLandingPageDepartureAirportList(departureAirportCode, wsAirportList) {
    for (var i = 0; i < departureAirportCode.length; i++) {
      if (wsAirportList.includes(departureAirportCode[i])) {
      } else {
        console.log(
          'Airport does not exist in api: ' + departureAirportCode[i]
        );
      }
      assert.isAbove(
        departureAirportCode.length,
        1,
        departureAirportCode.length + ' is strictly greater than 1'
      );
    }
  }
  validateDepartueAirportRouteMatchesDestinationAirportList(
    departureAirportCode,
    airportRoutes
  ) {
    browser.setTimeout({ implicit: 100000 });
    let destinationAirportsList = [];
    let destinationAirportCode = [];
    let connectionArray = [];
    for (var z = 0; z < departureAirportCode.length; z++) {
      if (departureAirportCode[z] == 'AZA') {
        departureAirportCode.splice(z, 1);
        z--;
      }
      if (departureAirportCode[z] == 'ANC') {
        departureAirportCode.splice(z, 1);
        z--;
      }
      if (departureAirportCode[z] == 'FCA') {
        departureAirportCode.splice(z, 1);
        z--;
      }
      if (departureAirportCode[z] == 'OGD') {
        departureAirportCode.splice(z, 1);
        z--;
      }
      if (departureAirportCode[z] == 'STC') {
        departureAirportCode.splice(z, 1);
        z--;
      }
      if (departureAirportCode[z] == 'FNL') {
        departureAirportCode.splice(z, 1);
        z--;
      }
      if (departureAirportCode[z] == 'SJU') {
        departureAirportCode.splice(z, 1);
        z--;
      }
      if (departureAirportCode[z] == 'ROC') {
        departureAirportCode.splice(z, 1);
        z--;
      }
      if (departureAirportCode[z] == 'SAN') {
        departureAirportCode.splice(z, 1);
        z--;
      }
      if (departureAirportCode[z] == 'TUS') {
        departureAirportCode.splice(z, 1);
        z--;
      }
    }
    for (var i = 0; i < departureAirportCode.length; i++) {
      destinationAirportCode = [];
      $(departureField).click();
      $(departureFieldInput).setValue(departureAirportCode[i]);
      browser.keys('Enter');
      $(destinationField).click();
      let airportsList = browser.$$(destinationAirportListSelector);
      for (let j = 0; j < airportsList.length; j++) {
        let airportName = airportsList[j].getText();
        destinationAirportsList.push(airportName);
      }
      destinationAirportCode.length = 0;
      for (var k = 0; k < destinationAirportsList.length; k++) {
        let min = destinationAirportsList[k].lastIndexOf('(');
        let max = destinationAirportsList[k].lastIndexOf(')');
        destinationAirportCode.push(
          destinationAirportsList[k].substring(min + 1, max)
        );
      }
      for (var z = 0; z < destinationAirportCode.length; z++) {
        if (destinationAirportCode[z] == '') {
          destinationAirportCode.splice(z, 1);
          z--;
        }
      }
      connectionArray = [];
      for (let n = 0; n < airportRoutes.routes.length; n++) {
        if (airportRoutes.routes[n].code === departureAirportCode[i]) {
          let totalConnection = airportRoutes.routes[n].connections.length;
          console.log(
            ' airportRoutes.routes[n].code: ' + airportRoutes.routes[n].code
          );
          for (var l = 0; l < totalConnection; l++) {
            connectionArray.push(airportRoutes.routes[n].connections[l].code);
          }
        }
      }
      assert.equal(
        destinationAirportCode.some(ele => connectionArray.includes(ele)),
        true,
        'Mismatch found for Route: ' +
          departureAirportCode[i] +
          ' destinationAirportCode: ' +
          destinationAirportCode +
          ' connectionArray: ' +
          connectionArray +
          ''
      );
      destinationAirportCode = [];
      connectionArray = [];
    }
  }
  selectChildren(childrenNumber) {
    for (let i = 0; i < childrenNumber; i++) {
      $(incrementChildren).click();
    }
  }

  validateNoFlightErrorMessage(errorMessage, disabledTab) {
    let dateSelected = parseInt(-1);
    newDate.setDate(newDate.getDate() + dateSelected);
    let stringDate = newDate.toDateString().slice(3);
    let month = stringDate.slice(0, -8).trim();
    let day = stringDate.slice(4, -5).trim();
    let dayInt = parseInt(day);
    let year = stringDate.slice(7).trim();
    if (month === 'Jan') {
      month = '01';
    }
    if (month === 'Feb') {
      month = '02';
    }
    if (month === 'Mar') {
      month = '03';
    }
    if (month === 'Apr') {
      month = '04';
    }
    if (month === 'May') {
      month = '05';
    }
    if (month === 'Jun') {
      month = '06';
    }
    if (month === 'Jul') {
      month = '07';
    }
    if (month === 'Aug') {
      month = '08';
    }
    if (month === 'Sep') {
      month = '09';
    }
    if (month === 'Oct') {
      month = '  10';
    }
    if (month === 'Nov') {
      month = '11';
    }
    if (month === 'Dec') {
      month = '12';
    }
    if (dayInt < 10) {
      dayInt = '0' + dayInt;
    }
    let noFlight =
      "//*[@data-hook='day-tab-label-content_no-flights_" +
      year +
      '-' +
      month +
      '-' +
      dayInt +
      "']";
    let NoFlightsTab =
      "//*[@data-hook='day-tab_departing_" +
      year +
      '-' +
      month +
      '-' +
      dayInt +
      "']";

    console.log('string... ', noFlight);
    console.log('text... ', $(noFlight).getText());
    assert.equal(
      $(noFlight).getText(),
      errorMessage,
      'departureDate with no flights sholud not be clickable'
    );

    assert.equal(
      $(NoFlightsTab).getAttribute('disabled'),
      disabledTab,
      'No flights days on the calendar tab should be disabled'
    );
  }
  validateIncrementButtonStatusForInfantInSeat(buttonStatus) {
    buttonStatus = true;
    assert.equal(
      $(incrementInfantInSeat).isClickable(),
      buttonStatus,
      'Increment Infant In Seat should be disabled false'
    );
  }
  validateIncrementButtonStatusForInfantInLap(buttonStatus) {
    buttonStatus = true;
    assert.equal(
      $(incrementInfantInLap).isClickable(),
      buttonStatus,
      'Increment Infant In Seat should be disabled false'
    );
  }
  validateDecrementButtonStatusForInfantInSeat(buttonStatus) {
    buttonStatus = false;
    assert.equal(
      $(decrementInfantInSeat).isClickable(),
      buttonStatus,
      'Increment Infant In Seat should be disabled false'
    );
  }
  validateDecrementButtonStatusForInfantInLap(buttonStatus) {
    buttonStatus = false;
    assert.equal(
      $(decrementInfantInLap).isClickable(),
      buttonStatus,
      'Increment Infant In Seat should be disabled false'
    );
  }

  validateIncrementButtonStatusForChild(buttonStatus) {
    buttonStatus = true;
    assert.equal(
      $(incrementChildren).isClickable(),
      buttonStatus,
      'Increment Infant In Seat should be disabled false'
    );
  }
  validateDecrementButtonStatusForChild(buttonStatus) {
    buttonStatus = false;
    assert.equal(
      $(decrementChildren).isClickable(),
      buttonStatus,
      'Increment Infant In Seat should be disabled false'
    );
  }
  validateReturnDateFieldPlaceholderValue(placeholderValue) {
    assert.equal(
      $(returnDatePlaceholder).getAttribute('placeholder'),
      placeholderValue,
      'Mismatch in placeholderValue found for return date field'
    );
  }
  validateHighlightedPeriodIsVisibleWhenOpeningDepartureDateCalendar() {
    assert.equal(
      $(highlightedDepartDateCalendar).getAttribute('aria-expanded'),
      'true',
      'highlighted Departure Date Calendar mismatch'
    );
  }
  validateHighlightedPeriodIsVisibleWhenOpeningReturningDateCalendar() {
    assert.equal(
      $(returningDate).getAttribute('aria-expanded'),
      'true',
      'highlighted Return Date Calendar mismatch'
    );
  }
  validateDepartureDateFieldLabel(departureDateFieldLabel) {
    assert.equal(
      $(departureDateLabel).getText(),
      departureDateFieldLabel,
      'Departure Date field label validation failed!!'
    );
  }
  validateReturnDateFieldLabel(returnDateFieldLabel) {
    assert.equal(
      $(returnDateLabel).getText(),
      returnDateFieldLabel,
      'Return Date field label validation failed!!'
    );
  }
  validateDepartureDateFieldStatus(departureDateDisabled) {
    assert.equal(
      $(departureDateField).getAttribute('disabled'),
      departureDateDisabled,
      'Departure Date Field is not disabled.'
    );
  }
  validateDepartureDateDatePickerClosed() {
    $(departureDate).waitForEnabled();
    $(departureDate).click();
    assert.equal(
      $(departureDateField).getAttribute('placeholder'),
      'Departure Date',
      'Departure date date-picker not closed'
    );
  }
  validateDepartureDateFieldPlaceholderValue(placeholderValue) {
    assert.equal(
      $(departureDateField).getAttribute('placeholder'),
      placeholderValue,
      'Mismatch in placeholderValue found for departure date field'
    );
  }
  clickChildrenTooltip() {
    $(childToolTip).click();
    browser.pause(500);
  }
  validateChildToolTipInfo(contentLineOne, contentLineTwo, contentLineThree) {
    $(destinationField).scrollIntoView();
    assert.equal(
      $(childToolTipContentLineOne).getText(),
      contentLineOne,
      'Children Tooltip validation failed'
    );
    assert.equal(
      $(childToolTipContentLineTwo).getText(),
      contentLineTwo,
      'Children Tooltip validation failed'
    );
    assert.equal(
      $(childToolTipContentLineThree).getText(),
      contentLineThree,
      'Children Tooltip validation failed'
    );
  }
  selectInfantInSeat(infantInSeatNumber) {
    if ($(incrementAdults).isDisplayed() === false) {
      $(travelersField).click();
    }
    for (let i = 0; i < infantInSeatNumber; i++) {
      $(incrementInfantInSeat).waitForClickable();
      $(incrementInfantInSeat).click();
    }
  }
  selectInfantInLap(infantInLapNumber) {
    for (let i = 0; i < infantInLapNumber; i++) {
      $(incrementInfantInLap).click();
    }
  }
  validateNonAdultTravelersIncrementButton(isIncreamentDisabled) {
    assert.equal(
      $(incrementChildren).isClickable(),
      eval(isIncreamentDisabled),
      'Increment Children button is not disabled.'
    );
    assert.equal(
      $(incrementInfantInSeat).isClickable(),
      eval(isIncreamentDisabled),
      'Increment InfantInSeat button is not disabled.'
    );
    assert.equal(
      $(incrementInfantInLap).isClickable(),
      eval(isIncreamentDisabled),
      'Increment InfantInLap button is not disabled.'
    );
  }

  validateInfantInLapCountDoesNotExceedAdultsCount(LapChildCount, AdultCount) {
    assert.equal(
      $(incrementInfantInLap).isEnabled(),
      false,
      'Lap infant value can not exceed adult count'
    );
    assert.isAtMost(
      parseInt(LapChildCount),
      parseInt(AdultCount),
      'Lap infant value can not exceed adult count'
    );
  }
  clickInfantInLapTooltip() {
    $(ClickInfantInLapTooltip).click();
  }
  clickInfantInSeatTooltip() {
    $(ClickInfantInSeatTooltip).click();
  }
  validateInfantInLapTooltip(content) {
    assert.equal(
      $(InfantInLapTooltip).getText(),
      content,
      'Infant In Lap Tooltip validation failed'
    );
  }
  validateInfantInSeatTooltip(content) {
    assert.equal(
      $(InfantInSeatTooltip).getText(),
      content,
      'Infant In Lap Tooltip validation failed'
    );
  }
  validateInfantInLapDefaultCount(defaultCount) {
    assert.equal(
      $(InfantInLapCount).getAttribute('value'),
      defaultCount,
      'Infant In Lap default count validation failed'
    );
  }
  validateInfantInSeatDefaultCount(defaultCount) {
    assert.equal(
      $(InfantInSeatCount).getAttribute('value'),
      defaultCount,
      'Infant In seat default count validation failed'
    );
  }
  validateReturnDateFieldIsDisabled() {
    assert.equal(
      $(returningDate).isClickable(),
      false,
      'Return date field is disabled by default'
    );
  }
  validateDepartureDateFieldIsActive() {
    $(departureDate).waitForClickable();
    assert.equal(
      $(departureDate).isClickable(),
      true,
      'Departure date field is disabled by default'
    );
  }
  validateReturnDateFieldIsActive() {
    browser.pause(6000);
    assert.equal(
      $(returningDate).isClickable(),
      true,
      'Return date field is disabled by default'
    );
  }
  validateInfantInLapLabelIsCorrectByCount(ExpectedLabel) {
    assert.equal(
      $(InfantInLapLabel).getText(),
      ExpectedLabel,
      'Infant In Lap label is incorrect by count'
    );
  }
  validateInfantInSeatLabelIsCorrectByCount(ExpectedLabel) {
    assert.equal(
      $(InfantInSeatLabel).getText(),
      ExpectedLabel,
      'Infant In Seat label is incorrect by count'
    );
  }
  validateAdultLabelIsCorrectByCount(ExpectedLabel) {
    assert.equal(
      $(adultsLabel).getText(),
      ExpectedLabel,
      'Adult label is incorrect by count'
    );
  }
  validateDepartureReturnDateFields() {
    assert.equal(
      $(departureDate).isDisplayed(),
      true,
      'Departure date field is not displayed'
    );
    assert.equal(
      $(returningDate).isDisplayed(),
      true,
      'Return date field is not displayed'
    );
  }
  validateChildLabel(ExpectedChildLabel) {
    assert.equal(
      $(childLabel).getText(),
      ExpectedChildLabel,
      'Child Label is incorrect by count'
    );
  }
  validateOnlyOneTripTypeIsSelectable(
    tripType,
    oneWayChecked,
    roundTripChecked
  ) {
    if (tripType === 'oneway') {
      assert.equal(
        $("//input[contains(@value,'ONEWAY')]").getAttribute('checked'),
        oneWayChecked,
        'trip type oneway checked value is wrong'
      );
      assert.notEqual(
        $("//input[contains(@value,'ROUNDTRIP')]").getAttribute('checked'),
        true,
        'trip type roundTrip checked value is wrong'
      );
    } else {
      assert.notEqual(
        $("//input[contains(@value,'ONEWAY')]").getAttribute('checked'),
        true,
        'trip type oneway checked value is wrong'
      );
      assert.equal(
        $("//input[contains(@value,'ROUNDTRIP')]").getAttribute('checked'),
        roundTripChecked,
        'trip type roundTrip checked value is wrong'
      );
    }
  }
  nextMonthArrowClickCount() {
    do {
      $(datePickerNext).click();
    } while (eval($(datePickerNext).isClickable()));
    if (!eval($(datePickerNext).isClickable())) {
      let calendarFlightDate = browser.$$(calendarMonthDatesAvailable);
      for (let i = 1; i < calendarFlightDate.length; i += 1) {
        if (calendarFlightDate[i].isClickable()) {
          $(datePickerNext).click();
        }
      }
      BookingDisabledFromMonth = $(calendarMonthAndYearTextRight)
        .getText()
        .split(' ')[0];
      console.log('BookingDisabledFromMonth: ' + BookingDisabledFromMonth);
    }
    if (BookingDisabledFromMonth) {
      do {
        $(datePickerPrevious).click();
      } while (eval($(datePickerPrevious).isClickable()));
      $(departureDate).click();
    }
  }

  validateDepartCalendar(departCalendar) {
    assert.equal(
      $(departureDate).isDisplayed(),
      eval(departCalendar),
      'Departure date field is not displayed'
    );
  }
  validateReturnCalendar(returnCalendar) {
    assert.equal(
      $(returningDate).isDisplayed(),
      eval(returnCalendar),
      'Departure date field is not displayed'
    );
  }
  validateFlightSearchTravelersText() {
    assert.equal(
      $(seatedValue).getText('value'),
      '3',
      'Adult and Children Seated Value Mismatch'
    );
    assert.equal(
      $(lapValue).getText('value'),
      '1',
      'Infant in lap value Mismatch'
    );
  }
  selectDeepLink(deepLink) {
    if (deepLink === 'optionalServicesLink') {
      $(optionalServicesDeepLink).click();
    }
    if (deepLink === 'changedBagFeesAndPolicyLink') {
      $(changedBagFeesAndPolicyDeepLink).click();
    }
    if (deepLink === 'tenPlusTravelersLink') {
      $(tenPlusTravelersDeepLink).click();
    }
  }
  collectAllBillboardName() {
    $(billboards).waitForDisplayed();
    var board = browser.$$(billboards);
    var billboard = [];
    for (var i = 0; i < board.length; i++) {
      billboard.push(board[i].getAttribute('title'));
    }
    billboardNameList = billboard;
  }
  validateDeepLinkPage(deepLink, view) {
    if (deepLink === 'optionalServicesLink') {
      browser.switchWindow('Allegiant Air');
      browser.pause(1000);
      $(optionalServicesText).waitForDisplayed();
      assert.equal(
        $(optionalServicesText).getText(),
        view,
        'Optional Services Page not loaded'
      );
    }
    if (deepLink === 'changedBagFeesAndPolicyLink') {
      browser.switchWindow('Allegiant Air');
      browser.pause(1000);
      $(baggageFeesText).waitForDisplayed();
      assert.equal(
        $(baggageFeesText).getText(),
        view,
        'Baggage Fees Page not loaded'
      );
    }
    if (deepLink === 'tenPlusTravelersLink') {
      browser.switchWindow('Allegiant Charters');
      browser.pause(1000);
      $(chartersText).waitForDisplayed();
      assert.equal($(chartersText).getText(), view, 'Charter Page not loaded');
    }
  }
  validateRoundTripDiscountMessage(message) {
    assert.equal(
      $(roundTripDiscountText).getText(),
      message,
      'Round Trip Discount Text Mismatch'
    );
  }
  clickElement(element) {
    if (element === 'Travel Alert') {
      $(travelAdvisory).click();
    }
    if (element === 'Billboard Previous arrow') {
      $(billboardsLeftArrow).click();
    }
    if (element === 'Billboard Next arrow') {
      $(billboardsRightArrow).click();
    }
    if (element === 'Allegiant Logo') {
      $(allegiantLogo).click();
    }
    if (element === 'Billboard') {
      do {
        browser.pause(5);
      } while (!$(billboardsDisplayed).isDisplayed());
      $(billboardsDisplayed).click();
      this.closeCurrentWindow();
    }
    if (element === 'Flight') {
      $(headerFlights).click();
    }
    if (element === 'Hotel') {
      $(headerHotel).click();
    }
    if (element === 'Car') {
      $(headerCar).click();
    }
    if (element === 'Travel Info') {
      $(headerTravelerInfo).click();
    }
    if (element === 'Check-In') {
      $(headerCheckIn).click();
    }
    if (element === 'Manage Trip') {
      $(headerManageTrip).click();
    }
    if (element === 'Flight Status') {
      $(headerFlightStatus).click();
    }
    if (element === 'Route Map') {
      $(allegiantLogo).click();
    }
    if (element === 'Log in') {
      $(headerLogIn).click();
    }
    if (element === 'cart-button') {
      $(headerCartButton).click();
    }
    if (element === 'Optional Services & Fees') {
      $(optionalServicesFees).click();
    }
    if (element === 'Changed Bag Fees & Policy') {
      $(changedBagFeesPolicy).click();
    }
    if (element === '10+ Travelers') {
      $(tenPlusTravelers).click();
    }
    if ($(closeCookiesPopup).isDisplayed()) {
      $(closeCookiesPopup).click();
    }
    if (element === 'Email Signup') {
      $(emailSignUp).click();
    }
    if (element === 'Get Deals Button') {
      $(emailSignUp).click();
      $(emailInputField).setValue('abc@xyz.com');
      $(getDealsButton).click();
    }
  }
  closeCurrentWindow() {
    browser.pause(5000);
    const handles = browser.getWindowHandles();
    if (handles.length > 1) {
      browser.switchToWindow(handles[1]);
      browser.closeWindow();
      browser.switchToWindow(handles[0]);
    }
  }
  navigateToDeepLinkURL(actualPage, deepLinkURL) {
    var envURL = process.env.appEnv;
    var flightsURL = envURL + '/booking/flights';
    var travelersURL = envURL + '/booking/timeline5f28a54f8e9c0/travelers';
    var ancillariesURL = envURL + '/booking/timeline5f0496b7ca13d/ancillaries';
    super.setBrowserSize();
    browser.deleteAllCookies();
    if (deepLinkURL === 'flightsURL') {
      deepLinkURL = flightsURL;
    }
    if (deepLinkURL === 'travelersURL') {
      deepLinkURL = travelersURL;
    }
    if (deepLinkURL === 'ancillariesURL') {
      deepLinkURL = ancillariesURL;
    }
    browser.url(deepLinkURL);
  }
  validateErrorMsg(actualPage, errorMsg) {
    if (actualPage === 'flightsURL') {
      $(expiredTransactionIdPageMsg).waitForDisplayed();
      assert.equal(
        $(expiredTransactionIdPageMsg).getText(),
        errorMsg,
        'Validation failed: Expired Transaction Id Page not loaded and error message not displayed for Flights Page'
      );
    }
    if (actualPage === 'travelersURL') {
      $(expiredTransactionIdPageMsg).waitForDisplayed();
      assert.equal(
        $(expiredTransactionIdPageMsg).getText(),
        errorMsg,
        'Validation failed: Expired Transaction Id Page not loaded and error message not displayed for Travelers Page '
      );
    }
    if (actualPage === 'ancillariesURL') {
      $(expiredTransactionIdPageMsg).waitForDisplayed();
      assert.equal(
        $(expiredTransactionIdPageMsg).getText(),
        errorMsg,
        'Validation failed: Expired Transaction Id Page not loaded and error message not displayed for Ancillaries Page '
      );
    }
  }
  clickHereButton(actualPage) {
    $(hereButton).click();
  }
  validateHomePageDisplayed() {
    $(homePage).waitForDisplayed();
    assert.equal(
      $(homePage).isDisplayed(),
      true,
      'Validation failed: Home Page not displayed'
    );
  }
  validateHomePageDisplayedOnSpecifiedTime() {
    browser.pause(32500);
    assert.isTrue(
      $(homePage).isDisplayed() || $(searchForm).isDisabled(),
      true,
      'Validation failed: Home Page not displayed'
    );
  }

  clickModifyButton() {
    $(modifyButton).click();
  }

  clickOneWayButton() {
    $(oneWay).click();
  }

  validateFromField() {
    assert.equal(
      $(departureField).isDisplayed(),
      true,
      'Validation failed: Departure field should be displayed'
    );
    assert.equal(
      $(departureAirportLabel).isDisplayed(),
      true,
      'Validation failed: Departure label should be displayed'
    );
  }

  validateToField() {
    assert.equal(
      $(destinationField).isDisplayed(),
      true,
      'Validation failed: Destination field should be displayed'
    );
    assert.equal(
      $(destinationAirportLabel).isDisplayed(),
      true,
      'Validation failed: Destination label should be displayed'
    );
  }

  validateTravelersField() {
    assert.equal(
      $(travelersLabel).isDisplayed(),
      true,
      'Validation failed: Traveler label should be displayed'
    );
    assert.equal(
      $(travelersExpando).isDisplayed(),
      true,
      'Validation failed: Traveler dropdown should be displayed'
    );
  }

  validateSearchButton() {
    assert.equal(
      $(searchButton).isDisplayed(),
      true,
      'Validation failed: Search Button should be displayed'
    );
  }

  validateInfoIcon() {
    assert.equal(
      $(infoIcon).isDisplayed(),
      true,
      'Validation failed: Info Icon should be displayed'
    );
    assert.equal(
      $(infoIconVerbiage).isDisplayed(),
      true,
      'Validation failed: Info Icon Verbiage should be displayed'
    );
  }

  clickSearchFormClose() {
    $(modifySearchCloseButton).click();
    assert.equal(
      $(infoIconVerbiage).isDisplayed(),
      false,
      'Validation failed: Info Icon Verbiage should not be displayed'
    );
  }

  validateInfoIconNotDisplayed() {
    assert.equal(
      $(infoIcon).isDisplayed(),
      false,
      'Validation failed: Info Icon should not be displayed'
    );
    assert.equal(
      $(infoIconVerbiage).isDisplayed(),
      false,
      'Validation failed: Info Icon Verbiage should not be displayed'
    );
  }

  validateTotalTripLabelDisplayed() {
    assert.equal(
      $(totalTripLabel).isDisplayed(),
      true,
      'Validation failed: Total Trip Label should be displayed'
    );
  }

  validateTripTotalDefaultValueDisplayed() {
    assert.equal(
      $(totalTripDefaultValue).getText(),
      '$0.00',
      'Wrong Trip Total value is displayed in the Global Header'
    );
  }

  validateCartIconDisplayed() {
    assert.isTrue(
      $(cartIcon).isDisplayed(),
      'Cart Icon is not displayed in the Global Header'
    );
  }
}
export default new HomePage();
export { BookingDisabledFromMonth, billboardNameList };
