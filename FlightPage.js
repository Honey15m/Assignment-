import { Page, Actions } from '@g4/prova';
import { assert } from 'chai';
import { BookingDisabledFromMonth } from '../pageobjects/searchForm.js';

const clickContinueButton = "[data-hook='flights-page_continue']";
const departingListViewTabs = "[data-hook='days-tabs_departing']";
const flightsBreadcrumb = "[data-hook='flights-breadcrumb_item-flights']";
const returningListViewTabs = "[data-hook='days-tabs_returning']";
const departingListViewButton =
  "//button[@data-hook='flights-list-view-button_departing']";
const flightReturningList = "[data-hook='flights-list_returning']";
const flightDepartingList = "[data-hook='flights-list_departing']";
const returningListViewButton =
  "//button[@data-hook='flights-list-view-button_returning']";
const departingCalendarViewButton =
  "//button[@data-hook='flights-calendar-view-button_departing']";
const returningCalendarViewButton =
  "//button[@data-hook='flights-calendar-view-button_returning']";
const calendarViewMonthYear =
  "//span[contains(@data-hook,'_display-month-year')]";
const calendarViewMonthYearReturning =
  "(//span[@data-hook='calendar-header-returning_display-month-year'])[1]";
const calendarViewGrid = "(//*[contains(@class,'DateGrid')])[1]";
const departCalendarView="[data-hook='flights-calendar-view_departing']"
const returnCalendarView="[data-hook='flights-calendar-view_returning']"
const calendarViewGridReturning = "(//*[contains(@class,'DateGrid')])[2]";
const calendarList =
  "(//button[@aria-hidden='false']//span[contains(@class,'Text-sc-1o5ubbx-0 ebfNFF')])";
const noFlightMsg =
  "//button[@aria-hidden='false']//span[contains(@class,'Text-sc-1o5ubbx-0 bicvwc')]";
const calendarAvailableFlightFares =
  "//button[@aria-hidden='false']//span[contains(@class,'Text-sc-1o5ubbx-0 eKXcUq')]";
const calendarNonDiscountFlightFares =
  "//del[contains(@aria-label,'original price')]";
const calendarViewDiscountedFares =
  "//span[contains(@aria-label,'discounted price')]";
const departingSelectedDateInListView =
  "(//*[@aria-selected='true'])[1]//span[contains(@data-hook,'day-tab-label-content_month-and-day')]";
const returningSelectedDateInListView =
  "(//*[@aria-selected='true'])[2]//span[contains(@data-hook,'day-tab-label-content_month-and-day')]";
const previousMonthArrow = "//*[@value='PREVIOUS_MONTH']";
const nextMonthArrow = "//*[@value='NEXT_MONTH']";
const calendarViewDepartureDateLabel =
  "//button[contains(@data-hook,'select')]//div//span[text()='Departure Date']|//button[contains(@data-hook,'select')]//div//span [text()='Depart/Return']|//button[contains(@data-hook,'select')]//div//span[text()='DEPART']|//button[contains(@data-hook ,'select')]//div//span[contains(normalize-space(text()) ,'DEPART/ RETURN')]";
const calendarViewReturnDateLabel =
  "//button[contains(@data-hook,'select')]//div//span [text()='Return Date']|//button[contains(@data-hook,'select')]//div//span [text()='Depart/Return']|//button[contains(@data-hook,'select')]//div//span[text()='RETURN']|//button[contains(@data-hook ,'select')]//div//span[contains(normalize-space(text()) ,'DEPART/ RETURN')]";
const selectedDepartDate =
  "//button[contains(@data-hook,'day-tab_departing')][@aria-selected='true']";
const returnFlightFirstTab =
  "//button[@id='Tab-0'][contains(@data-hook,'day-tab_returning_')]";
const selectedReturnDate =
  "//button[contains(@data-hook,'day-tab_returning')][@aria-selected='true']";
const newReturnFlightDate = "(//button[@id='Tab-1'])[2]";
const newDepartFlightDate = "(//button[@id='Tab-4'])[1]";
const departingAfterReturningErrorMessage =
  "[data-hook='returning-before-departing']";
const returningBeforeDepartingErrorMessage =
  "[data-hook='returning-before-departing']";
const departigAfterReturingNoteAdjustmentMessage =
  "[data-hook='warning-departing-after-returning']";
const calendarViewDisabledDateElemnets =
  "//button[@aria-hidden='false'][@disabled]//span";
const calendarViewSelectedReturnDate =
  "//button[contains(@data-hook,'selected-date-returning_')]";
const FlightLabelOnFlightTab = "//span[text()='Flights']";
const departureSelectedFlight =
  "(//div[contains(@data-hook,'flight-price-box')]//p)[1]";
const returnSelectedFlight =
  "(//div[contains(@data-hook,'flight-price-box')]//p)[2]";
const checkReturnFlightAvilable =
  "//button[contains(@data-hook,'day-tab_returning')][@aria-selected='false']";
const checkDepartFlightAvilable =
  "//button[contains(@data-hook,'day-tab_departing')][@aria-selected='false']";
const listViewReturnNextArrow = "[data-hook='next-arrow_returning']";
const listViewDepartNextArrow = "[data-hook='next-arrow_departing']";
const listViewDepartPreviousArrow = "[data-hook='previous-arrow_departing']";
const listViewReturnPreviousArrow = "[data-hook='previous-arrow_returning']";
const spinnerBar = "[data-hook='flights-page-spinner']";
const roundTripDiscountBannerDescription =
  "(//div[contains(@class,'RoundTripDiscountBanner__Description')]//span)[X]";
const roundTripDiscountValue =
  "//span[contains(@data-hook,'flights-round-trip-discount_description-line-two')]//span//strong";
const viewReturnFlightButton =
  "//div[contains(@data-hook,'flights-round-trip-discount_view-return-flights-button')]//span";
const selectedRetrunDateListView = "(//button[@aria-selected='true'])[2]";
const tripSummaryRoundTripDiscount =
  "[data-hook='price-breakdown_flight-discount']";
const tripSummaryPopUp = "[data-hook='cart-popover']";
const roundTripPurchaseRequiredMsg =
  "(//span[contains(text(),'Round trip purchase')])[X]";
const hideReturnFlightButton =
  "[data-hook='flights-round-trip-discount_hide-return-flights-button']";
const clickReturnFlight =
  "(//form[@data-hook='flights-list_returning'] //span[@data-hook='flight-number'])[1]";
const clickDepartFlight =
  "(//form[@data-hook='flights-list_departing']//span[@data-hook='flight-number'])[1]";
const clickFlightsDisclaimerButton = "[data-hook='flights-disclaimer-button']";
const flightsDisclaimerPopup =
  "//button[@data-hook='flights-disclaimer-button']";
const flightsDisclaimerPopupClose =
  "[data-hook='flights-disclaimer-popup_close']";
const clickFlightsDisclaimerExternalLink =
  "[data-hook='flights-disclaimer-external-link']";
const returningSectionTitle =
  "[data-hook='returning-flight-details_flight-title']";
const selectedDepartingFlightPrice =
  "[data-hook='flights-list_departing'] [data-hook='selected-flight'] [data-hook='flight-price']";
  const selectedReturningFlightPrice =
  "[data-hook='flights-list_returning'] [data-hook='selected-flight'] [data-hook='flight-price']";
const departingFlightsPriceList =
  "[data-hook='flights-list_departing'] [data-hook='flight-price']";
const selectedDepartureFlightFlightLabel =
  "[data-hook='flights-list_departing'] [data-hook='selected-flight'] [data-hook='flight-number-label']";
const selectedDepartureFlightNumber =
  "[data-hook='flights-list_departing'] [data-hook='selected-flight'] [data-hook='flight-number']";
const selectedDepartureFlightDepartLabel =
  "[data-hook='flights-list_departing'] [data-hook='selected-flight'] [data-hook='flight-departure-label']";
const selectedDepartureFlightArriveLabel =
  "[data-hook='flights-list_departing'] [data-hook='selected-flight'] [data-hook='flight-arrival-label']";
const selectedDepartureFlightSeatMarketingMessage =
  "//span[@data-hook='seats-availability-text']";
const selectedDepartureFlightSeatsAvailableMessage =
  "[data-hook='flights-list_departing'] [data-hook='selected-flight'] [data-hook='seats-available-text']";
const closeCookiesPopup = "//button[@id='onetrust-accept-btn-handler']";
const selectedDepartureFlightDepartingTime =
  "[data-hook='flights-list_departing'] [data-hook='selected-flight'] [data-hook='flight-departure-time']";
const selectedDepartureFlightArrivalTime =
  "[data-hook='flights-list_departing'] [data-hook='selected-flight'] [data-hook='flight-arrival-time']";
const flightsDisclaimer = "[data-hook='flights-disclaimer']";
const baggageChargesLink = "[data-hook='flights-disclaimer-external-link']";
const taxesAndFeesPopup = "[data-hook='flights-disclaimer-popup']";
const taxesAndFeesPopupText = "[data-hook='flights-disclaimer-popup_content']";
const taxesAndFeesPopupTitle = "[data-hook='flights-disclaimer-popup_title']";
const taxesAndFeesPopupCloseButton =
  "[data-hook='flights-disclaimer-popup_close']";
const taxesCarrierChargesAndGovernmentFeesLink =
  "[data-hook='flights-disclaimer-button']";
const baggageChargesPageText =
  "//strong[contains(text(),'Checked and Carry-on Baggage Fees and Allowances')]";
const selectedFlightNumber =
  "[data-hook='flights-list_FLIGHTTYPE'] [data-hook='selected-flight'] [data-hook='flight-number']";
const selectedDepartingFlightOtpTooltipTitle =
  "[data-hook='otp-popover_selected_departing_content'] [data-hook='otp-popover-content-heading']";
const selectedReturningFlightOtpTooltipTitle =
  "[data-hook='otp-popover_selected_returning_content'] [data-hook='otp-popover-content-heading']";
const selectedDepartingStrikeThroughFlightPrice =
  "[data-hook='flights-list_departing'] [data-hook='selected-flight'] [data-hook='strikethrough-flight-price']";
const selectedReturningStrikeThroughFlightPrice =
  "[data-hook='flights-list_returning'] [data-hook='selected-flight'] [data-hook='strikethrough-flight-price']";
const selectHigherDepartingFlight =
  "//div[contains(@data-hook,'unselected-flight_departing')]";
const selectHigherReturningFlight =
  "//div[contains(@data-hook,'unselected-flight_returning')]";
const selectFlights = "[data-hook='flights-page_page-heading']";
const departingDiscountMessage =
  "[data-hook='flights-round-trip-discount_departing']";
const departingFlightsFromLabel =
  "[data-hook='departing-flight-details_origin-label']";
const returningFlightsFromLabel =
  "[data-hook='returning-flight-details_origin-label']";
const getFirstSegArrivalTimeList =
  "//form[@data-hook='flights-list_departing']//p[@data-hook='flight-arrival-time']";
const getSecondSegDepartTimeList =
  "//form[@data-hook='flights-list_returning']//p[@data-hook='flight-departure-time']";
const seatsAvailabilityText =
  "//form[@data-hook='flights-list_returning']//span[@data-hook='seats-availability-text']";
const selectedDepartFlightArrivalTime =
  "//form[@data-hook='flights-list_departing']//div[@data-hook='selected-flight']//p[@data-hook='flight-arrival-time']";
const selectedReturnFlightDepartTime =
  "//form[@data-hook='flights-list_returning']//div[@data-hook='selected-flight']//p[@data-hook='flight-departure-time']";
const departingSelectedDayOfWeek =
  "//button[@aria-selected='true'][contains(@data-hook,'departing')]//span[contains(@data-hook,'week')]";
const returningSelectedDayOfWeek =
  "//button[@aria-selected='true'][contains(@data-hook,'returning')]//span[contains(@data-hook,'week')]";
const flightPageContinue = "[data-hook='flights-page_continue']";
const selectedFlight = "[data-hook='selected-flight']";
const selectDepartingFlight =
  "(//form[@data-hook='flights-list_departing']//div//div//div//span[@data-hook='flight-price'])[1]";
const selectReturningFlight =
  "(//form[@data-hook='flights-list_returning']//div[@data-hook='flight-price-box'])[1]";
const initialSelectedDepartingFlight =
  "(//*[@aria-selected='true'])[1][contains(@data-hook,'day-tab_departing')][@id='Tab-3']";
const initialSelectedReturningFlight =
  "(//*[@aria-selected='true'])[2][contains(@data-hook,'day-tab_returning')][@id='Tab-3']";
const initialSelectedReturningFlightDay =
  "(//*[@aria-selected='true'])[2][contains(@data-hook,'day-tab_returning')]";
const forgotPasswordBookingPathModalTitle =
  "[data-hook='booking-login_forgot-password_modal-title']";
const SelectedFlightFare =
  "(//p[contains(text(), 'Selected Flight')]/../..//span[@data-hook='flight-price'])[X]";
const SelectedFlightOriginalFare =
  "(//p[contains(text(), 'Selected Flight')]/../..//del[contains(@aria-label,'original price')]//span)[X]";
const SelectedFlightdiscountedFare =
  "(//p[contains(text(), 'Selected Flight')]/../..//span[contains(@aria-label,'discounted price')]//span)[X]";
const selectedFlightNumbers =
  "(//p[contains(text(),'Selected Flight')]/../../..//span//span[contains(@data-hook,'flight-number')])[X]";
const selectedFlightDepartTime =
  "(//p[contains(text(),'Selected Flight')]/../../..//p[contains(@data-hook,'flight-departure-time')])[X]";
const selectedFlightArrivalTime =
  "(//p[contains(text(),'Selected Flight')]/../../..//p[contains(@data-hook,'flight-arrival-time')])[X]";
const departureCity = "[data-hook='header-flight-info_origin']";
const destinationCity = "[data-hook='header-flight-info_destination']";
const paxCount = "[data-hook='header-flight-info_seated']";
const tripType = "[data-hook='header-flight-info_trip-type']";
const headerReturnDate="//span[contains(@data-hook,'header-flight-info_return-date')]"
const cartTotalValue = "[data-hook='header-cart-button_price']"
const shoppingCartFlightEdit="//a[contains(@data-hook,'cart-item_flight-info_link')]"
const flightsPageHeading="[data-hook='flights-page_page-heading']"
const loggedUser = "//*[contains(@class,'ExpandableMenuItem__StyledExpando')]"
const pointsAvailable="//span[contains(text(),'Points Available : ')]"
const loyaltyDiscountedDepartingFlightPriceText ="(//*[@data-hook='flights-list_departing']//*[@data-hook='loyalty-discounted-flight-price_text'])[1]"
const loyaltyDiscountedReturningFlightPriceText ="(//*[@data-hook='flights-list_returning']//*[@data-hook='loyalty-discounted-flight-price_text'])[1]"
const loyaltyDiscountedDepartingFlightPriceDefaultText="(//*[@data-hook='flights-list_departing']//*[@data-hook='loyalty-discounted-flight-price_default-text'])[1]"
const loyaltyDiscountedReturningFlightPriceDefaultText="(//*[@data-hook='flights-list_returning']//*[@data-hook='loyalty-discounted-flight-price_default-text'])[1]"
const loyaltyFareDiscountBanner= "//*[contains(@class,'FlightBanner')]"
const hooks = {
  orgFeild: "[data-hook='flight-search-origin']",
  orgFieldInput: "[id='select-origin']",
  dstFeild: "[data-hook='flight-search-destination']",
  dstFeildInput: "[id='select-destination']",
  clickOnCalendar: "[class='Input__ClickableWrapper-dn8eno-2 gBZxbe']",
  selectableDates: "[class='Day-a047d8-0 bMaVmA']",
  checkinDates:
    "[data-hook='flight-search-date-picker_calendar-1_select-day-6']",
  respCheckinDates:
    "[data-hook='flight-search-date-picker_calendar-0_select-day-6']",
  checkoutDates:
    "[data-hook='flight-search-date-picker_calendar-0_select-day-8']",
  searchFlightButton: "[data-hook='flight-search-submit']",
  navigateNextMonth:
    "[data-hook='flight-search-date-picker_navigate-next-month']",
  checkinDatesHotelSkip:
    "[data-hook='flight-search-date-picker_calendar-0_select-day-19']",
  checkoutDatesHotelSkip:
    "[data-hook='flight-search-date-picker_calendar-0_select-day-3']",
  windowSmallNext: "//button[contains(@aria-label,'Go to next month')]",
};
var newDepartDate;
var newReturnDate;
var selectedDepartDateDayOfWeek;
var selectedReturnDateDayOfWeek;
var selectedDepartDateInCalendarView;
let month = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
var d = new Date();
let newCalendarViewselectedDate;
let departDate;
let returnDate;
let returnDateCalendarView;
let selectedDepartingFlightFare;
let selectedReturningFlightFare;
var flightPageCollector = new Map();

class FlightPage extends Page {
  validateFlightsPageAnchorToTop(){
    do {
      browser.pause(1000);
    } while ($(spinnerBar).isDisplayed());
    assert.equal(
			$(flightsPageHeading).isDisplayedInViewport(),
			true,
			'Flights Page not anchor to top'
		);
  }

  clickContinueButton() {
    do {
      browser.pause(1000);
    } while ($(spinnerBar).isDisplayed());
     
    if ($(closeCookiesPopup).isDisplayed()) {
      $(closeCookiesPopup).click();
    }
    if($(shoppingCartFlightEdit).isClickable()){
	$(cartTotalValue).click()
    }
    if (!$(flightDepartingList).isDisplayed()) {
      browser.execute('window.scrollBy(0,0)');
      $(listViewDepartNextArrow).click();
      do {
        browser.pause(5);
      } while ($(spinnerBar).isDisplayed());
      $(selectDepartingFlight).click();
    }
    if ($(clickContinueButton).isClickable()) {
      this.getSelectedDepartureDate();
      this.getSelectedReturnDate();
      $(clickContinueButton).click();
    } else {
      var clickContinue;
      if (eval($(flightDepartingList).isDisplayed())) {
        clickContinue = $(returnSelectedFlight).isDisplayed();
      }
      clickContinue = eval($(flightReturningList).isDisplayed());
      var checkReturnFlight = browser.$$(checkReturnFlightAvilable);
      var checkReturn;
      if (!clickContinue) {
        do {
          for (var i = 0; i < checkReturnFlight.length; i++) {
            checkReturn = checkReturnFlight[i].isClickable();
            if (checkReturn) {
              browser.pause(200);
              checkReturnFlight[i].click();
              $(selectReturningFlight).click();
              break;
            }
          }
          if (!checkReturn) {
            $(listViewReturnNextArrow).click();
            if ($(spinnerBar).isDisplayed()) {
              do {
                browser.pause(5);
              } while ($(spinnerBar).isDisplayed());
            }
            if ($(selectReturningFlight).isClickable()) {
              $(selectReturningFlight).click();
              checkReturn = true;
              break;
            }
            browser.pause(2000);
          }
        } while (!checkReturn);
      }
      $(selectReturningFlight).click();
      try {
        this.getSelectedDepartureDate();
        this.getSelectedReturnDate();
        this.collectFlightPageDetails();
      } catch (ex) {
        console.log('Exception while collecting data!');
      }
      $(clickContinueButton).click();
      if ($(closeCookiesPopup).isDisplayed()) {
        $(closeCookiesPopup).click();
      }
    }
  }

  verifyFlightDisplayedInListView() {
    $(departingListViewTabs).waitForDisplayed();
    assert.equal(
      $(departingListViewTabs).isDisplayed(),
      true,
      'Calendar is not displayed in List view by default'
    );
  }

  clickFlightCalendarViewButton(flightType) {
    if (flightType === 'Departing'||flightType === 'departing'||flightType ==='departing-resp') {
      $(departingCalendarViewButton).waitForDisplayed();
      $(departingCalendarViewButton).click();
      $(calendarViewGrid).waitForDisplayed();
    } else if (flightType === 'Returning'||flightType === 'returning'||flightType === 'returning-resp') {
      $(departingCalendarViewButton).scrollIntoView();
      $(returningCalendarViewButton).waitForDisplayed();
      $(returningCalendarViewButton).click();
      $(calendarViewGrid).waitForDisplayed();
    }
  }

  verifyMonthAndYearIsDisplayedInCalendarView() {
    $(calendarViewGrid).scrollIntoView();
    $(calendarViewMonthYear).waitForDisplayed();
    assert.equal(
      $(calendarViewMonthYear).isDisplayed(),
      true,
      'month and year Is not displayed in calendar view for flight'
    );
  }

  verifyDayIsDisplayedInDDDFormat() {
    let CalendarListElements = browser.$$(calendarList);
    let CalendarDays = [];
    for (let i = 0; i < CalendarListElements.length; i += 2) {
      let Day = CalendarListElements[i].getText();
      CalendarDays.push(Day);
    }
    console.log('CalendarDays: ' + CalendarDays);
    let ExpectedDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    for (let i = 0; i < CalendarDays.length; i++) {
      assert.equal(
        eval(ExpectedDays.includes(CalendarDays[i])),
        true,
        'Day is displayed in DDD format validation failed!'
      );
    }
  }
  verifyDateIsDisplayedInDDFormat() {
    let CalendarListElements = browser.$$(calendarList);
    let CalendarDate = [];
    for (let i = 1; i < CalendarListElements.length; i += 2) {
      let Date = CalendarListElements[i].getText();
      CalendarDate.push(Date);
    }
    let ExpectedDate = [
      '01',
      '02',
      '03',
      '04',
      '05',
      '06',
      '07',
      '08',
      '09',
      '10',
      '11',
      '12',
      '13',
      '14',
      '15',
      '16',
      '17',
      '18',
      '19',
      '20',
      '21',
      '22',
      '23',
      '24',
      '25',
      '26',
      '27',
      '28',
      '29',
      '30',
      '31',
    ];
    for (let i = 0; i < CalendarDate.length; i++) {
      assert.equal(
        eval(ExpectedDate.includes(CalendarDate[i])),
        true,
        'Date is displayed in DD format validation failed!'
      );
    }
  }

  verifyDateAsDisabledwithNoFlight(status, msg) {
    let noFlightDateMsg = browser.$$(noFlightMsg);
    for (let i = 0; i < noFlightDateMsg.length; i++) {
      assert.equal(
        noFlightDateMsg[i].getText(),
        msg,
        'No flights msg validation failed!'
      );
      assert.equal(
        noFlightDateMsg[i].isClickable(),
        eval(status),
        'No flights date disabled validation failed!'
      );
    }
  }

  verifyFlightFareIsDisplayedForAvailableFlight() {
    let calendarFlightFare = browser.$$(calendarAvailableFlightFares);
    for (let i = 0; i < calendarFlightFare.length; i++) {
      assert.isNumber(
        eval(calendarFlightFare[i].getText().replace('$', '')),
        'Value is not number'
      );
    }
    if ($(closeCookiesPopup).isDisplayed()) {
      $(closeCookiesPopup).click();
    }
  }
  selectDifferentDateThanSelected(flightType) {
    $(calendarViewGrid).waitForDisplayed();
    let CalendarListElements = browser.$$(calendarList);
    if ($(closeCookiesPopup).isDisplayed()) {
      $(closeCookiesPopup).click();
    }
    if (flightType.toLowerCase() === 'departing') {
	  this.getSelectedDepartureDate()
      var newDepartDate = new Date(departDate);
      newDepartDate.setDate(newDepartDate.getDate() + 1);
      newCalendarViewselectedDate = newDepartDate;         
      for (let i = 1; i < CalendarListElements.length; i += 2) {
        let getDate = CalendarListElements[i].getText();
        let newddate=newDepartDate.getDate()
           if(newddate<10){
	        newddate="0"+newddate
            }
        if (String(getDate) === String(newddate)) {	      
          CalendarListElements[i].click();
          browser.pause(2000);
          break;
        }
      }
    } else {
	  this.getSelectedReturnDate()
      var newReturnDate = new Date(returnDate);
      newReturnDate.setDate(newReturnDate.getDate() + 2);
      newCalendarViewselectedDate = newReturnDate;
      for (let i = 1; i < CalendarListElements.length; i += 2) {
        let getDate = CalendarListElements[i].getText();
         let newrdate=newReturnDate.getDate()
           if(newrdate<10){
          newrdate="0"+newrdate
            }
        if (String(getDate) === String(newrdate)) {
          CalendarListElements[i].click();
          break;
        }
      }
    }
  }

  getSelectedDepartureDate() {
    browser.pause(2000)
	try{
	departDate = $(selectedDepartDate)
      .getAttribute('data-hook')
      .slice(18);	
	}
	catch(ex){
				
	}    
  }
  getSelectedReturnDate() {
    browser.pause(2000)
    if ($(selectedReturnDate).isDisplayed()) {
	try{
		returnDate = $(selectedReturnDate)
        .getAttribute('data-hook')
        .slice(18);
	}catch(ex){		
	}      
    }
  }
  verifySelectedDateIsDisplayed(flightType) {	
    if (flightType === 'departing') {
      $(departingSelectedDateInListView).waitForDisplayed();
      assert.equal(
        newCalendarViewselectedDate.getDate(),
        $(departingSelectedDateInListView)
          .getText()
          .split(' ')[1],
        'Listview departing flight selected date does not match calendarview selected date!'
      );
    } else {
      $(returningSelectedDateInListView).waitForDisplayed();
      assert.equal(
        newCalendarViewselectedDate.getDate(),
        $(returningSelectedDateInListView)
          .getText()
          .split(' ')[1],
        'Listview returning flight selected date does not match calendarview selected date!'
      );
    }
  }
  clickPreviousMonthArrow() {
    $(previousMonthArrow).waitForDisplayed();
    $(previousMonthArrow).click();
    $(calendarViewGrid).waitForDisplayed();
  }

  clickNextMonthArrow() {
    $(nextMonthArrow).click();
    $(calendarViewGrid).waitForDisplayed();
  }
  clickNextMonthArrowTillLastAvailableMonth() {
    do {
      $(nextMonthArrow).click();
    } while (eval(
        $(calendarViewMonthYear).getText().split(' ')[0] != month[month.indexOf(BookingDisabledFromMonth)]&& $(nextMonthArrow).isClickable()===true  )
    );
  }
  verifyPreviousMonthArrowDisabledStatus(status) {
    assert.equal(
      $(previousMonthArrow).isClickable(),
      eval(status),
      'Validation failed: previous month arrow should be disabled for past month!'
    );
  }
  validateCalendarViewIsNavigatedToNextMonth() {
    var expectedNextMonth = month[d.getMonth() + 1];
    assert.equal(
      $(calendarViewMonthYear)
        .getText()
        .split(' ')[0],
      expectedNextMonth,
      'Validation failed: Calendar view should navigate to next month!'
    );
  }
  validateCalendarViewIsNavigatedToPreviousMonth() {
    var expectedNextMonth = month[d.getMonth()];
    assert.equal(
      $(calendarViewMonthYear)
        .getText()
        .split(' ')[0],
      expectedNextMonth,
      'Validation failed: Calendar view should navigate to next nonth!'
    );
  }

  validateCalendarViewStrikeThroughNonDiscountFare() {
    let originalPrice = browser.$$(calendarNonDiscountFlightFares);
    $(calendarViewGrid).waitForDisplayed();
    for (let i = 0; i < originalPrice.length; i++) {
      assert.isNumber(
        eval(originalPrice[i].getAttribute('aria-label').slice(15)),
        'Strike through non discount fare is not number!'
      );
    }
  }
  validateCalendarViewDiscountedFares() {
    let discountedPrice = browser.$$(calendarViewDiscountedFares);
    $(calendarViewGrid).waitForDisplayed();
    for (let i = 0; i < discountedPrice.length; i++) {
      assert.isNumber(
        eval(discountedPrice[i].getAttribute('aria-label').slice(18)),
        'discount fare is not number!'
      );
    }   
  }

  validateTravelerCannotNavigateToMonthPastLastAvailableMonth(status) {	
    assert.equal(
      $(nextMonthArrow).isClickable(),
      eval(status),
      'Validation failed: next month arrow should be disabled for last month'
    );
  }

  validateDepartureDateDisplayedWithBorderForSelectDepartDate(msg) {
    $(calendarViewDepartureDateLabel).isDisplayed();
    assert.equal(
      $(calendarViewDepartureDateLabel).getText(),
      msg,
      'Validation failed: departure date displayed with border for select depart date'
    );
  }
  validateDaysBeforeDepartureDateAppearsInactiveInReturningCalendar() {
    let calendarFlightFare = browser.$$(calendarViewDisabledDateElemnets);
    for (let i = 1; i < calendarFlightFare.length; i += 6) {
      if (
        eval(
          parseInt(calendarFlightFare[i].getText()) <
            parseInt(departDate.slice(8))
        )
      ) {
        console.log(
          'calendarFlightFare[i].getText(): ' +
            calendarFlightFare[i].getText() +
            ' calendarFlightFare[i].isClickable(): ' +
            calendarFlightFare[i].isClickable()
        );
        assert.equal(
          calendarFlightFare[i].isClickable(),
          false,
          'Validation failed: Days Before Departure date should appear inactive in returning flight calendar'
        );
      }
    }
  }
  selectNewDepartDateFromListView() {
    var newDate = new Date(departDate);
    newDate.setDate(newDate.getDate() + 3);
    var month = newDate.getMonth() + 1;
    var dDate=newDate.getDate()
    if (month < 10) {
      month = '0' + month;
    }
     if (dDate < 10) {
      dDate = '0' + dDate;
    }
    newDepartDate =
      newDate.getFullYear() + '-' + month + '-' + dDate;
    var SelectNewDateFromListView =
      "[data-hook='day-tab_departing_" + newDepartDate + "']";
    if($(SelectNewDateFromListView).isDisplayed()){
	 $(SelectNewDateFromListView).click();
    }
     else{
	 $(listViewDepartNextArrow).click();
       do {
                browser.pause(50);
        } while ($(spinnerBar).isDisplayed());
	 $(SelectNewDateFromListView).click();
    }
  }

  selectNewReturnDateFromListView() {
	this.getSelectedReturnDate()
    var newDate = new Date(returnDate);
    newDate.setDate(newDate.getDate() + 2);
    var month = newDate.getMonth() + 1;
    var dDate=newDate.getDate()
    if (month < 10) {
      month = '0' + month;
    }
if (dDate < 10) {
      dDate = '0' + dDate;
    }
    newReturnDate =
      newDate.getFullYear() + '-' + month + '-' + dDate;
    var SelectNewDateFromListView =
      "[data-hook='day-tab_returning_" + newReturnDate + "']";
    $(SelectNewDateFromListView).click();
    $(FlightLabelOnFlightTab).scrollIntoView();
  }
  selectReturnDateBeforeDepartDate() {
    this.getSelectedDepartureDate();
    this.getSelectedReturnDate();
    $(returningListViewButton).scrollIntoView();
    var newDate = new Date(departDate);
    newDate.setDate(newDate.getDate() - 1);
    var month = newDate.getMonth() + 1;
    if (month < 10) {
      month = '0' + month;
    }
    newReturnDate =
      newDate.getFullYear() + '-' + month + '-' + newDate.getDate();
    var SelectNewDateFromListView =
      "[data-hook='day-tab_returning_" + newReturnDate + "']";
    browser.pause(10000);

    $(SelectNewDateFromListView).click();
  }
  validateNewDepartureDateSelectedInReturningCalendar(SelectedDepartDate) {
    selectedDepartDateInCalendarView =
      "//button[contains(@aria-hidden,'false')][contains(@aria-label,'" +
      newDepartDate.slice(8) +
      "')]//span[contains(text(),'Departure Date')]";
         if(!$(selectedDepartDateInCalendarView).isDisplayed()){
	        if($(listViewReturnPreviousArrow).isClickable()){
		       $(listViewReturnPreviousArrow).click()
	          }
         do {
           browser.pause(50);
         } while ($(spinnerBar).isDisplayed());

         }
    assert.equal(
      $(selectedDepartDateInCalendarView).getText(),
      SelectedDepartDate,
      'Validation failed: New Departure date should be displayed in returning flight calendar'
    );
  }

  validateDepartureDateSelectedInDepartingCalendar(SelectedDepartDate) {
    selectedDepartDateInCalendarView =
      "//button[contains(@aria-hidden,'false')][contains(@aria-label,'" +
      departDate.slice(8) +
      "')]//span[contains(text(),'Departure Date')]";
    assert.equal(
      $(selectedDepartDateInCalendarView).getText(),
      SelectedDepartDate,
      'Validation failed: New Departure date should be displayed in departing flight calendar'
    );
  }

  selectNewReturnDateInListView() {
    $(newReturnFlightDate).click();
  }

  selectNewDepartDateInListView() {
    $(flightsBreadcrumb).scrollIntoView();
    $(newDepartFlightDate).click();
  }

  validateReturningBeforeDepartingErrorMessageIsDisplayed(errorMessage) {	
    $(returningBeforeDepartingErrorMessage).waitForDisplayed();
    $(returningBeforeDepartingErrorMessage).scrollIntoView();
    assert.equal(
      $(returningBeforeDepartingErrorMessage).getText(),
      errorMessage,
      'Error message not displayed.'
    );
  }

  validateDepartingAfterReturningNoteAdjustmentMessageIsDisplayed(
    noteAdjustmentMessage
  ) {
    $(departigAfterReturingNoteAdjustmentMessage).waitForDisplayed();
    assert.equal(
      $(departigAfterReturingNoteAdjustmentMessage).getText(),
      noteAdjustmentMessage,
      'Note Adjustment message is wrong.'
    );
  }
  validateDepartingFlightCalendarViewButton() {
    $(departingCalendarViewButton).waitForDisplayed();
    $(departingCalendarViewButton).click();
    $(calendarViewGrid).waitForDisplayed();
  }

  validateReturningFlightCalendarViewButton() {
    $(returningCalendarViewButton).click();
    $(returningCalendarViewButton).scrollIntoView();
    $(calendarViewGrid).waitForDisplayed();
  }

  validateDepartingFlightListViewButton() {
    $(FlightLabelOnFlightTab).scrollIntoView();
    $(departingListViewButton).waitForDisplayed();
    $(departingListViewButton).click();
    $(departingListViewTabs).waitForDisplayed();
  }

  validateReturningFlightListViewButton() {
    $(FlightLabelOnFlightTab).scrollIntoView();
    $(returningListViewButton).click();
    $(returningListViewTabs).waitForDisplayed();
  }

  validateDepartingAfterReturningErrorMessageIsDisplayed(errorMessage) {
    $(departingAfterReturningErrorMessage).waitForDisplayed();
    assert.equal(
      $(departingAfterReturningErrorMessage).getText(),
      errorMessage,
      'Error message not displayed.'
    );
  }
  navigateToDeepLinkURL(deepLinkURL) {
    var envURL = process.env.appEnv;
    var startDate = new Date(d);
    startDate.setDate(startDate.getDate() + 5);
    var month = startDate.getMonth() + 1;
    if (month < 10) {
      month = '0' + month;
    }
    startDate =
      startDate.getFullYear() + '-' + month + '-' + startDate.getDate();
    var EndDate = new Date(startDate);
    EndDate.setDate(EndDate.getDate() + 5);
    var Endmonth = EndDate.getMonth() + 1;
    if (Endmonth < 10) {
      Endmonth = '0' + Endmonth;
    }
    EndDate = EndDate.getFullYear() + '-' + Endmonth + '-' + EndDate.getDate();
    var listViewDeepLinkURL =
      envURL +
      '/booking/flights?tt=ROUNDTRIP&o=LAS&d=BLI&ta=1&tc=0&tis=0&til=0&ds=' +
      startDate +
      '&de=' +
      EndDate +
      '&c=0&h=0';
    var calendarViewDeepLinkURL =
      envURL +
      '/booking/flights?tt=ROUNDTRIP&o=LAS&d=BLI&ta=1&tc=0&tis=0&til=0&ds=' +
      startDate +
      '&de=' +
      EndDate +
      '&c=0&h=0&sc=1';
    super.setBrowserSize();
    browser.deleteAllCookies();
    if (deepLinkURL === 'calendarViewDeepLinkURL') {
      deepLinkURL = calendarViewDeepLinkURL;
    } else {
      deepLinkURL = listViewDeepLinkURL;
    }
    browser.url(deepLinkURL);
  }
  validateDeepLinkView(view) {
    if (view == 'calender view') {
      $(calendarViewGrid).waitForDisplayed();
      assert.equal(
        $(calendarViewMonthYear).isDisplayed(),
        true,
        'Validation failed: Deeplink with "sc" should navigate to departing calendar view'
      );
      $(calendarViewGridReturning).waitForDisplayed();
      assert.equal(
        $(calendarViewMonthYearReturning).isDisplayed(),
        true,
        'Validation failed: Deeplink with "sc" should navigate to returning calendar view'
      );
    } else {
      $(departingListViewTabs).waitForDisplayed();
      assert.equal(
        $(departingListViewTabs).isDisplayed(),
        true,
        'Validation failed: Deeplink without "sc" should navigate to list view'
      );
      $(returningListViewTabs).waitForDisplayed();
      assert.equal(
        $(returningListViewTabs).isDisplayed(),
        true,
        'Validation failed: Deeplink without "sc" should navigate to list view'
      );
    }
  }
  validateFlightSelection(flight) {
    $(departingSelectedDateInListView).scrollIntoView();
    browser.pause(5000);
    assert.equal(
      $(departureSelectedFlight).isDisplayed(),
      true,
      'Validation failed: depart flight selection is changed'
    );
  }

  validateNewReturnDateAdjustedForReturningFlight() {
    departDate = $(selectedDepartDate)
      .getAttribute('data-hook')
      .slice(18);
    returnDate = $(selectedReturnDate)
      .getAttribute('data-hook')
      .slice(18);
    var newDepartDate = new Date(departDate);
    newDepartDate.setDate(newDepartDate.getDate() + 3);
    month = newDepartDate.getMonth() + 1;
    var ddate=newDepartDate.getDate()
    if (month < 10) {
      month = '0' + month;
    }
    if (ddate < 10) {
      ddate = '0' + ddate;
    }
    newDepartDate =
      newDepartDate.getFullYear() + '-' + month + '-' + ddate;
    assert.equal(
      returnDate,
      newDepartDate,
      'Return Date not adjusted 3 days from departure date'
    );
  }

  validateRoundTripDiscountBannerContent(
    bannerTitle,
    description,
    buttonLabel
  ) {
    assert.equal(
      $(roundTripDiscountBannerDescription.replace('X', 1)).getText(),
      bannerTitle,
      'Validation failed: round trip discount banner titile mismatch'
    );
    assert.equal(
      $(roundTripDiscountBannerDescription.replace('X', 2)).getText(),
      description.replace('10$', $(roundTripDiscountValue).getText()),
      'Validation failed: round trip discount description mismatch'
    );
    assert.equal(
      $(viewReturnFlightButton)
        .getText()
        .replace('\n', ' '),
      buttonLabel,
      'Validation failed: round trip discount view return flight button label mismatch'
    );
  }

  clickRoundTripDiscountViewReturnFlights() {
    do {
      browser.pause(5);
      if (
        $(closeCookiesPopup).isDisplayed() &&
        $(closeCookiesPopup).isClickable()
      ) {
        $(closeCookiesPopup).click();
      }
      $(viewReturnFlightButton).waitForDisplayed();
    } while ($(closeCookiesPopup).isDisplayed());
    $(viewReturnFlightButton).isDisplayed();
    $(viewReturnFlightButton).click();
    do {
      browser.pause(5);
    } while ($(spinnerBar).isDisplayed());
    $(calendarViewGrid).waitForDisplayed({ timeout: 15000 });
    $(calendarViewGrid).scrollIntoView();
  }

  validateDepartDateAndReturnDateSelectedInCalendarView() {
    this.getSelectedDepartureDate();
    $(calendarViewGrid).scrollIntoView();
    try {
      assert.equal(
        $(calendarViewDepartureDateLabel).getText(),
        'Departure Date',
        'Validation failed:  Departure date should be displayed in return flight calendar'
      );
    } catch (ex) {
      assert.equal(
        $(calendarViewDepartureDateLabel).getText(),
        'DEPART',
        'Validation failed:  Departure date should be displayed in return flight calendar'
      );
    }
    assert.equal(
      $(calendarViewSelectedReturnDate).isDisplayed(),
      false,
      'Validation failed:  Return date should not be automatically selected in return flight calendar'
    );
  }

  selectNewReturingDateFromCalendarView() {
    this.getSelectedDepartureDate();
    this.getSelectedReturnDate();
    var currentSelectedDate;
    var currentMonthYear = $(calendarViewMonthYear).getText();
    var currentMonth = month.indexOf(currentMonthYear.split(' ')[0]) + 1;
    if (currentMonth < 10) {
      currentMonth = '0' + currentMonth;
    }
    let calendarFlightFare = browser.$$(calendarViewDisabledDateElemnets);
    for (let i = 1; i < calendarFlightFare.length; i += 6) {
      if (
        eval(
          parseInt(calendarFlightFare[i].getText()) >
            parseInt(departDate.slice(8))
        )
      ) {
        currentSelectedDate = calendarFlightFare[i].getText();
        break;
      }
    }
    var newReturnDate;
    if ($(calendarViewSelectedReturnDate).isDisplayed()) {
      returnDate = $(calendarViewSelectedReturnDate)
        .getAttribute('data-hook')
        .split('_')[1];
      newReturnDate = new Date(returnDate);
    } else {
      newReturnDate = new Date(departDate);
    }
    newReturnDate.setDate(newReturnDate.getDate() + 1);
    month = newReturnDate.getMonth() + 1;
    var rdate = newReturnDate.getDate();
    if (month < 10) {
      month = '0' + month;
    }
    if (rdate < 10) {
      rdate = '0' + rdate;
    }
    newReturnDate = newReturnDate.getFullYear() + '-' + month + '-' + rdate;
    var selectNewDate =
      "[data-hook='select-day-returning_" + newReturnDate + "']";
    if ($(selectNewDate).isDisplayed()) {
      $(calendarViewGrid).scrollIntoView();
      $(selectNewDate).click();
    } else {
      $(listViewReturnNextArrow).click();
      $(calendarViewGrid).waitForDisplayed();
      $(calendarViewGrid).scrollIntoView();
      $(selectNewDate).click();
    }
    returnDateCalendarView = newReturnDate;
  }

  validateSelectedReturnDateInListView() {
    assert.equal(
      $(selectedRetrunDateListView)
        .getAttribute('data-hook')
        .slice(18),
      returnDateCalendarView,
      'Validation failed:  Mismatch in calendar view selected date and list view selected date'
    );
    $(departingCalendarViewButton).scrollIntoView();
    $(departingCalendarViewButton).waitForDisplayed();
  }
  validateNewReturnDateIsSelectedInCalendarView() {
    $(calendarViewGrid).waitForDisplayed();
    $(calendarViewGrid).scrollIntoView();
    var selectNewDate =
      "[data-hook='selected-date-returning_" + returnDateCalendarView + "']";
    assert.equal(
      $(selectNewDate)
        .getAttribute('data-hook')
        .slice(24),
      returnDateCalendarView,
      'Validation failed:  Mismatch in calendar view selected date and new selected date'
    );
  }
  validateRoundTripDiscountInTripTotal() {
    $(tripSummaryPopUp).waitForDisplayed();
    assert.equal(
      $(tripSummaryRoundTripDiscount).getText(),
      'Roundtrip Discount Applied',
      'Validation failed:  Mismatch in Roundtrip Discount label in trip total'
    );
  }
  validateRoundTripPurchaseRequired(message, flightType) {
    browser.pause(2000)
    if (flightType === 'departing') {
      assert.equal(
        $(roundTripPurchaseRequiredMsg.replace('X', 1)).getText(),
        message,
        'Validation failed:  Mismatch in Roundtrip Discount purchase required msg'
      );
    } else {
      assert.equal(
        $(roundTripPurchaseRequiredMsg.replace('X', 2)).getText(),
        message,
        'Validation failed:  Mismatch in Roundtrip Discount purchase required msg'
      );
    }
  }

  clickHideReturnFlightButton() {
    $(departingListViewButton).waitForDisplayed();
    $(departingListViewButton).scrollIntoView();
    $(hideReturnFlightButton).click();
  }

  validateRoundTripSectionShouldBeClosed() {
    assert.equal(
      $(returningCalendarViewButton).isDisplayed(),
      false,
      'Validation failed:  Round trip section should be closed'
    );
  }

  validateRoundTripRequiredMsgIsNotDisplayed(message) {
    browser.pause(2000)
    assert.equal(
      $(roundTripPurchaseRequiredMsg.replace('X', 1)).isDisplayed(),
      false,
      'Validation failed:  Mismatch in Roundtrip Discount purchase required msg'
    );
    browser.pause(3000)
  }

  selectDateView(view, segment) {	
	this.getSelectedDepartureDate()
	this.getSelectedReturnDate()
	if($(headerReturnDate).isDisplayed() && segment.includes('resp')){
	if(returnDate!=$(headerReturnDate).getAttribute('data-hook').split('_')[2]){
		var selectCorrectReturnDate="//button[@data-hook='day-tab_returning_"+$(headerReturnDate).getAttribute('data-hook').split('_')[2]+"']"
		do{
			if($(listViewReturnPreviousArrow).isClickable()){
				$(listViewReturnPreviousArrow).click()
			}
			else{
				break;
			}			
		do {
            browser.pause(200);
         } while ($(spinnerBar).isDisplayed());
		}while (!$(selectCorrectReturnDate).isDisplayed());
		if($(selectCorrectReturnDate).isClickable()){
			$(selectCorrectReturnDate).click()
		}        
	}
	}
    if (segment === 'departing'||segment === 'departing-resp') {
      if (view === 'List') {
        $(departingFlightsFromLabel).scrollIntoView();
        $(selectFlights).scrollIntoView();
        $(departingListViewButton).click();
      } else {	    
	    this.clickFlightCalendarViewButton(segment)
        //$(departingCalendarViewButton).click();
      }
    } else if (segment === 'returning'||segment === 'returning-resp') {
      if (view === 'List') {
        $(returningFlightsFromLabel).scrollIntoView();
        //$(departingDiscountMessage).scrollIntoView();
         browser.execute("window.scrollBy(0,-100)");
        $(returningListViewButton).click();
      } else {	   
	    this.clickFlightCalendarViewButton(segment)
       // $(returningCalendarViewButton).click();
      }
    }
  }

  clickListViewArrow(arrow, flightType) {
    if (flightType === 'departing') {
      if (arrow === 'previous') {
        if ($(listViewDepartPreviousArrow).isClickable()) {
          $(listViewDepartPreviousArrow).click();
        } else {
          $(listViewDepartNextArrow).click();
          browser.pause(2000);
          $(listViewDepartPreviousArrow).click();
        }
      } else {
        $(departingListViewButton).scrollIntoView();
        $(listViewDepartNextArrow).click();
      }
    } else {
      if (arrow === 'previous') {
        $(listViewReturnPreviousArrow).click();
      } else {
        $(returningListViewButton).scrollIntoView();
        $(listViewReturnNextArrow).click();
      }
    }
  }

  clickFlightNumberbySeg(flightType) {
    if (flightType === 'departing') {
      $(clickDepartFlight).click();
    } else {
      $(flightReturningList).waitForDisplayed();
      $(flightReturningList).scrollIntoView();
      $(clickReturnFlight).click();
    }
  }

  clickFlightsDisclaimer(flightType) {
    if ($(closeCookiesPopup).isDisplayed()) {
      $(closeCookiesPopup).click();
    }
    if (flightType === 'Taxed- Fees') {
      $(clickFlightsDisclaimerButton).click();
      //$(flightsDisclaimerPopup).waitForDisplayed()
      $(flightsDisclaimerPopupClose).click();
    } else {
      $(clickFlightsDisclaimerExternalLink).click();
    }
  }
  validateReturningSectionTitleIsNotDisplayed() {
    assert.equal(
      $(returningSectionTitle).isDisplayed(),
      false,
      'Returning section title is displayed, Failed!.'
    );
  }
  validateReturningTabSectionIsNotDisplayed() {
    assert.equal(
      $(returningListViewTabs).isDisplayed(),
      false,
      'Returning days tab section is displayed, Failed!.'
    );
  }
  validateReturningFlightsSectionIsNotDisplayed() {
    browser.pause(2000)
    assert.equal(
      $(flightReturningList).isDisplayed(),
      false,
      'Returning flights list section is displayed, Failed!.'
    );
  }
  validateSelectedDepartureFlightIsCheapest() {
    let lowestFlightPriceDeparting = this.getLowestPriceForDeparting();
    let selectedDepartingFlightPriceText = $(selectedDepartingFlightPrice)
      .getText()
      .slice(1, -1);

    assert.equal(
      lowestFlightPriceDeparting,
      selectedDepartingFlightPriceText,
      'The cheapest available flight is not selected.'
    );
  }
  getLowestPriceForDeparting() {
    $(departingFlightsPriceList).waitForDisplayed();
    let departingFlightsPrices = browser.$$(departingFlightsPriceList);
    let departingFlightPricesArray = [];

    for (let i = 0; i < departingFlightsPrices.length; i++) {
      let individualFlightPrice = departingFlightsPrices[i].getText();
      departingFlightPricesArray.push(individualFlightPrice.slice(1));
    }
    let lowestPricedFlight = Math.min(...departingFlightPricesArray);
    return lowestPricedFlight;
  }
  validateSelectedDepartureFlightLabel(label) {
    browser.pause(3000);
    if (label === 'Flight') {
      assert.equal(
        $(selectedDepartureFlightFlightLabel).isDisplayed(),
        true,
        'The "Flight" label is not displayed for the selected flight.'
      );
    }
    if (label === 'Flight Number') {
      assert.equal(
        $(selectedDepartureFlightNumber).isDisplayed(),
        true,
        'The Flight Number is not displayed for the selected flight.'
      );
      let selectedDepartureFlightNumberValue = $(
        selectedDepartureFlightNumber
      ).getText();
      let flightNumberInteger = parseInt(selectedDepartureFlightNumberValue);

      assert.equal(
        Number.isInteger(flightNumberInteger),
        true,
        'The "Flight Number" label is not displayed for the selected flight.'
      );
    }
    if (label === 'Depart') {
      assert.equal(
        $(selectedDepartureFlightDepartLabel).isDisplayed(),
        true,
        'The "Depart" label is not displayed for the selected flight.'
      );
    }
    if (label === 'Arrive') {
      assert.equal(
        $(selectedDepartureFlightArriveLabel).isDisplayed(),
        true,
        'The "Arrive" label is not displayed for the selected flight.'
      );
    }
    if (label === 'Departure Time') {
      assert.equal(
        $(selectedDepartureFlightDepartingTime).isDisplayed(),
        true,
        'The Departure Time is not displayed for the selected flight.'
      );

      let selectedDepartureFlightDepartingTimeValue = $(
        selectedDepartureFlightDepartingTime
      )
        .getText()
        .slice(0, -5);
      let selectedDepartureFlightDepartingTimeInteger = parseInt(
        selectedDepartureFlightDepartingTimeValue
      );

      assert.equal(
        Number.isInteger(selectedDepartureFlightDepartingTimeInteger),
        true,
        'The Departure time number was not found or is not actually a number.'
      );
    }
    if (label === 'Arrival Time') {
      assert.equal(
        $(selectedDepartureFlightArrivalTime).isDisplayed(),
        true,
        'The Arrival Time is not displayed for the selected flight.'
      );

      let selectedDepartureFlightArrivalTimeValue = $(
        selectedDepartureFlightArrivalTime
      )
        .getText()
        .slice(0, -5);
      let selectedDepartureFlightArrivalTimeInteger = parseInt(
        selectedDepartureFlightArrivalTimeValue
      );

      assert.equal(
        Number.isInteger(selectedDepartureFlightArrivalTimeInteger),
        true,
        'The Arrival time number was not found or is not actually a number.'
      );
    }
    if (label === 'Marketing Message') {
      if ($(selectedDepartureFlightSeatMarketingMessage).isDisplayed()) {
        let selectedDepartureFlightSeatMarketingMessageText = $(
          selectedDepartureFlightSeatMarketingMessage
        ).getText();
        assert.equal(
          selectedDepartureFlightSeatMarketingMessageText.includes(
            'left at this price!'
          ),
          true,
          'The Marketing message does not include "left at this price!", so it might be incorrect.'
        );
      } else {	  
        assert.equal(
          $(selectedDepartureFlightSeatsAvailableMessage).isDisplayed(),
          true,
          'The "Seats available." message is not displayed for the selected flight.'
        );

        let selectedDepartureFlightSeatsAvailableMessageText = $(
          selectedDepartureFlightSeatsAvailableMessage
        ).getText();
        let correctSelectedDepartureFlightSeatsAvailableMessage =
          'Seats available.';
        assert.equal(
          selectedDepartureFlightSeatsAvailableMessageText,
          correctSelectedDepartureFlightSeatsAvailableMessage,
          'The text for the Seats available message is not "Seats available.".'
        );
      }
    }
  }
  validateFlightDisclaimerText() {
    $(flightsDisclaimer).scrollIntoView();
    assert.equal(
      $(flightsDisclaimer).isDisplayed(),
      true,
      'Flight Disclaimer text not displayed.'
    );
  }
  clickTaxesCarrierChargesAndGovernmentFeesLink() {
    $(taxesCarrierChargesAndGovernmentFeesLink).click();
  }
  validateTaxesAndFeesPopup() {
    assert.equal(
      $(taxesAndFeesPopup).isDisplayed(),
      true,
      'Taxes and Fees popup not displayed.'
    );
    assert.equal(
      $(taxesAndFeesPopupTitle).isDisplayed(),
      true,
      'Taxes and Fees title not displayed.'
    );
    assert.equal(
      $(taxesAndFeesPopupText).isDisplayed(),
      true,
      'Taxes and Fees text not displayed.'
    );
  }
  closeTaxesAndFeesPopup() {
    $(taxesAndFeesPopupCloseButton).click();
  }
  clickBaggageChargesLink() {
    $(baggageChargesLink).click();
  }
  validateBaggageChargesPage() {
    browser.switchWindow('Allegiant Air');
    browser.pause(1000);
    assert.equal(
      $(baggageChargesPageText).isDisplayed(),
      true,
      'Baggage Fees Page not loaded'
    );
  }
  clickFlightNumber(flightType) {
    $(selectedFlightNumber.replace('FLIGHTTYPE', flightType)).click();
  }
  validateOnTimePerformancePopup(flightType, heading) {
    browser.pause(4000);
    if (flightType === 'departing')
      assert.equal(
        $(selectedDepartingFlightOtpTooltipTitle).getText(),
        heading,
        'OTP Popup Title not displayed'
      );
    if (flightType === 'returning')
      assert.equal(
        $(selectedReturningFlightOtpTooltipTitle).getText(),
        heading,
        'OTP Popup Title not displayed'
      );
  }
  validateDepartingStrikeThroughPrice() {
    browser.pause(5000);
    assert.equal(
      $(selectedDepartingStrikeThroughFlightPrice).isDisplayed(),
      false,
      'Selected Departing Strike Through Flight Price is displayed'
    );
  }
  validateDepartingAndReturningHaveStrikeThroughPrices() {
    $(selectedDepartingStrikeThroughFlightPrice).waitForDisplayed();
    assert.equal(
      $(selectedDepartingStrikeThroughFlightPrice).isDisplayed(),
      true,
      'Selected Departing Strike Through Flight Price is not displayed'
    );
    $(selectedReturningStrikeThroughFlightPrice).waitForDisplayed();
    assert.equal(
      $(selectedReturningStrikeThroughFlightPrice).isDisplayed(),
      true,
      'Selected Returning Strike Through Flight Price is not displayed'
    );
  }
  validateDepartingStrikeThroughPriceNotDisplayed() {
    browser.pause(8000);
    assert.isFalse(
      $(selectedDepartingStrikeThroughFlightPrice).isDisplayed(),
      'Selected Departing Strike Through Flight Price is displayed'
    );
  }
  validatePricesAfterDiscountApplied() {
    $(selectedDepartingStrikeThroughFlightPrice).waitForDisplayed();
    $(selectedDepartingFlightPrice).waitForDisplayed();
    let strikedDepartingPriceText = $(selectedDepartingStrikeThroughFlightPrice)
      .getText()
      .slice(1, -1);
    let discountedDepartingPriceText = $(selectedDepartingFlightPrice)
      .getText()
      .slice(1, -1);
    assert.equal(
      strikedDepartingPriceText > discountedDepartingPriceText,
      true,
      'Discounted value price is higher than original price'
    );
  }
  selectHigherFareFlight(flightType) {
    browser.pause(5000);
    if (flightType === 'departing') {
      if ($(selectHigherDepartingFlight).isDisplayed()) {
        $(selectHigherDepartingFlight).click();
      } else {
        $(listViewDepartNextArrow).click();
        $(selectHigherDepartingFlight).click();
      }
    }
    if (flightType === 'returning') {
      if ($(selectHigherReturningFlight).isDisplayed()) {
        $(selectHigherReturningFlight).click();
      } else {
        $(listViewReturnNextArrow).click();
        $(selectHigherReturningFlight).click();
      }
    }
  }
  getSelectedFlightFare(flightType) {
    if (flightType === 'departing') {
      selectedDepartingFlightFare = $(selectedDepartingStrikeThroughFlightPrice)
        .getText()
        .slice(1, -1);
    }
    if (flightType === 'returning') {
      selectedReturningFlightFare = $(selectedReturningStrikeThroughFlightPrice)
        .getText()
        .slice(1, -1);
    }
  }
  validatePricesAfterToggleBetweenViews(flightType) {
    if (flightType === 'departing') {
      this.getSelectedFlightFare();
      let strikedDepartingPriceText = $(
        selectedDepartingStrikeThroughFlightPrice
      )
        .getText()
        .slice(1, -1);
      assert.equal(
        selectedDepartingFlightFare,
        strikedDepartingPriceText,
        true,
        'Discounted value price is higher than original price'
      );
    }
    if (flightType === 'returning') {
      this.getSelectedFlightFare();
      let strikedReturningPriceText = $(
        selectedReturningStrikeThroughFlightPrice
      )
        .getText()
        .slice(1, -1);
      assert.equal(
        selectedReturningFlightFare,
        strikedReturningPriceText,
        true,
        'Discounted value price is higher than original price'
      );
    }
  }

  validateFirstAvailableReturnDateIsClickableButNotSelected() {
    var newReturnDate = new Date(departDate);
    newReturnDate.setDate(newReturnDate.getDate() + 1);
    month = newReturnDate.getMonth() + 1;
    var rdate = newReturnDate.getDate();
    if (month < 10) {
      month = '0' + month;
    }
    if (rdate < 10) {
      rdate = '0' + rdate;
    }
    newReturnDate = newReturnDate.getFullYear() + '-' + month + '-' + rdate;
    var selectNewDate =
      "[data-hook='select-day-returning_" + newReturnDate + "']";
    if ($(selectNewDate).isDisplayed()) {
      assert.equal(
        $(selectNewDate).isClickable(),
        true,
        'Validation Failed: Available return flight date is not clickable'
      );
      assert.equal(
        $(calendarViewSelectedReturnDate).isDisplayed(),
        false,
        'Validation Failed: Available return flight date is already selected after clicking Return flights button'
      );
    }
  }
  validateContinueButtonIsNotClickable(clickable) {
    assert.equal(
      $(clickContinueButton).isClickable(),
      eval(clickable),
      'Validation Failed: continue button should not be active till returning segement is selected'
    );
  }
  validateReturnFlightListViewFirstTabDateEqualsDepartureDate() {
    assert.equal(
      $(selectedDepartDate)
        .getAttribute('data-hook')
        .split('_')[2],
      $(returnFlightFirstTab)
        .getAttribute('data-hook')
        .split('_')[2],
      'Validation Failed: continue button should not be active till returning segement is selected'
    );
  }
  validateReturnFlightListViewPreviousArrow(clickable) {
    assert.equal(
      $(listViewReturnPreviousArrow).isClickable(),
      eval(clickable),
      'Validation Failed: listViewReturnPreviousArrow should be disbaled'
    );
  }

  validateReturnFlightAvailabilityMessage(message) {
    if ($(closeCookiesPopup).isDisplayed()) {
      $(closeCookiesPopup).click();
    }
    this.getSelectedDepartureDate();
    this.getSelectedReturnDate();
    var boolean = false;
    var seg1 = browser.$$(getFirstSegArrivalTimeList);
    var seg2 = browser.$$(getSecondSegDepartTimeList);
    for (var i = 0; i < seg1.length; i++) {
      $(flightsBreadcrumb).scrollIntoView();
      seg1[i].waitForDisplayed();
      seg1[i].click();
      var newDate = new Date(departDate);
      newDate.setDate(newDate.getDate() + 1);
      month = newDate.getMonth() + 1;
      var rdate = newDate.getDate();
      if (month < 10) {
        month = '0' + month;
      }
      if (rdate < 10) {
        rdate = '0' + rdate;
      }
      newDate = newDate.getFullYear() + '-' + month + '-' + rdate;
      var selectReturnNewDate =
        "[data-hook='day-tab_returning_" + newDate + "']";
      var selectDepartNewDate =
        "[data-hook='day-tab_departing_" + newDate + "']";
      if ($(selectDepartNewDate).isDisplayed() && $(selectReturnNewDate).isDisplayed() && $(selectDepartNewDate).isClickable() && $(selectReturnNewDate).isClickable()      ) {
        $(flightsBreadcrumb).scrollIntoView();
        $(selectDepartNewDate).waitForDisplayed();
        $(selectDepartNewDate).click();
        browser.pause(1500);
        $(selectReturnNewDate).waitForDisplayed();
        $(selectReturnNewDate).click();
        browser.pause(1500);
        var expectedMsg = browser.$$(seatsAvailabilityText);
        for (var j = 0; j < expectedMsg.length; j++) {
          if (expectedMsg[j].getText() === message) {
            boolean = assert.equal(
              expectedMsg[j].getText(),
              message,
              'Validation Failed: message should not be disabled for return flight leaving after depart flight is arrived Seg1Arrival: ' +
                seg1ArrivalDateTime +
                ' and seg2Depart: ' +
                seg2DepartDateTime
            );
            this.getSelectedDepartureDate();
            this.getSelectedReturnDate();
            var seg1Arrival = this.getTimeInTwentyFourHourFormat(
              $(selectedDepartFlightArrivalTime)
                .getText()
                .slice(
                  0,
                  $(selectedDepartFlightArrivalTime).getText().length - 2
                ) +
                ' ' +
                $(selectedDepartFlightArrivalTime)
                  .getText()
                  .slice(
                    $(selectedDepartFlightArrivalTime).getText().length - 2
                  )
            );
            var seg2Depart = this.getTimeInTwentyFourHourFormat(
              seg2[j].getText().slice(0, seg2[j].getText().length - 2) +
                ' ' +
                seg2[j].getText().slice(seg2[j].getText().length - 2)
            );
            var seg1ArrivalDateTime = new Date(departDate + ' ' + seg1Arrival);
            var seg2DepartDateTime = new Date(departDate + ' ' + seg2Depart);
            if (seg1ArrivalDateTime >= seg2DepartDateTime) {
              console.log(
                '\n>>>>>>>>>>>>seg1ArrivalDateTime ' + seg1ArrivalDateTime
              );
              console.log(
                '\n<<<<<<<<<<<<seg2DepartDateTime ' + seg2DepartDateTime
              );
              assert.isOk(
                seg1ArrivalDateTime,
                'departing flight arrives after returing flight departure'
              );
            } else {
              console.log(
                '\n<<<<<<<<<<<<seg1ArrivalDateTime ' + seg1ArrivalDateTime
              );
              console.log(
                '\n>>>>>>>>>>>>seg2DepartDateTime ' + seg2DepartDateTime
              );
              assert.isOk(
                false,
                'Message should not be displayed for departing flight arrives before returing flight departure'
              );
            }
            boolean = true;
            break;
          }
        }
        if (boolean === true) {
          break;
        } else {
          browser.pause(2000)
          this.validateReturnFlightAvailabilityMessage(message);
        }
      } else if (!$(selectDepartNewDate).isDisplayed()) {
        browser.pause(2000);
        $(listViewDepartNextArrow).waitForDisplayed();
        $(listViewDepartNextArrow).click();
        do {
          browser.pause(5);
        } while ($(spinnerBar).isDisplayed());
        $(selectDepartNewDate).waitForDisplayed();
        $(selectDepartNewDate).click();
        if (!$(selectReturnNewDate).isDisplayed()) {
          $(listViewReturnPreviousArrow).waitForDisplayed();
          $(listViewReturnPreviousArrow).click();
          do {
            browser.pause(5);
          } while ($(spinnerBar).isDisplayed());
          browser.pause(2000);
          $(selectReturnNewDate).waitForDisplayed();
        }
        $(flightsBreadcrumb).waitForDisplayed();
        $(flightsBreadcrumb).scrollIntoView();
        $(selectReturnNewDate).waitForDisplayed();
        $(selectReturnNewDate).click();
        browser.pause(2000);
        var expectedMsg = browser.$$(seatsAvailabilityText);
        for (var j = 0; j < expectedMsg.length; j++) {
          if (expectedMsg[j].getText() === message) {
            boolean = assert.equal(
              expectedMsg[j].getText(),
              message,
              'Validation Failed: message should not be disabled for return flight leaving after depart flight is arrived Seg1Arrival: ' +
                seg1ArrivalDateTime +
                ' and seg2Depart: ' +
                seg2DepartDateTime
            );
            this.getSelectedDepartureDate();
            this.getSelectedReturnDate();
            browser.pause(2000);
            var seg1Arrival = this.getTimeInTwentyFourHourFormat(
              $(selectedDepartFlightArrivalTime)
                .getText()
                .slice(
                  0,
                  $(selectedDepartFlightArrivalTime).getText().length - 2
                ) +
                ' ' +
                $(selectedDepartFlightArrivalTime)
                  .getText()
                  .slice(
                    $(selectedDepartFlightArrivalTime).getText().length - 2
                  )
            );
            browser.pause(2000);
            var seg2Depart = this.getTimeInTwentyFourHourFormat(
              seg2[j].getText().slice(0, seg2[j].getText().length - 2) +
                ' ' +
                seg2[j].getText().slice(seg2[j].getText().length - 2)
            );
            var seg1ArrivalDateTime = new Date(departDate + ' ' + seg1Arrival);
            var seg2DepartDateTime = new Date(departDate + ' ' + seg2Depart);
            if (seg1ArrivalDateTime >= seg2DepartDateTime) {
              console.log(
                '\n>>>>>>>>>>>>seg1ArrivalDateTime ' + seg1ArrivalDateTime
              );
              console.log(
                '\n<<<<<<<<<<<<seg2DepartDateTime ' + seg2DepartDateTime
              );
              console.log(
                '\n>>>>>>>>Warning Msg<<<<<<<< ' + expectedMsg[j].getText()
              );
            } else {
              console.log(
                '\n<<<<<<<<<<<<seg1ArrivalDateTime ' + seg1ArrivalDateTime
              );
              console.log(
                '\n>>>>>>>>>>>>seg2DepartDateTime ' + seg2DepartDateTime
              );
              assert.isOk(
                false,
                'Message should not be displayed for departing flight arrives before returing flight departure'
              );
            }
            boolean = true;
            break;
          }
        }
        if (boolean === true) {
          break;
        } else {
          browser.pause(2000)
          this.validateReturnFlightAvailabilityMessage(message);
        }
      }
    }
  }

  getTimeInTwentyFourHourFormat(time) {
    var d = new Date(departDate + ' ' + time);
    return d.getHours() + ':' + d.getMinutes();
  }

  validateDateIsNotDisplayedWithText(text) {
    do {
      browser.pause(5);
    } while ($(spinnerBar).isDisplayed());
    $(calendarViewGrid).scrollIntoView();
    if ($(closeCookiesPopup).isDisplayed()) {
      $(closeCookiesPopup).click();
    }
    if (text === 'Departure Date' || text === 'DEPART') {
      assert.equal(
        $(calendarViewDepartureDateLabel).isDisplayed(),
        false,
        'Validation Failed: Departure Date should not be displayed :' + text
      );
    } else {	
      assert.equal(
        $(calendarViewReturnDateLabel).isDisplayed(),
        false,
        'Validation Failed: Return Date should not be displayed :' + text
      );
    }
  }
  validateDateIsDisplayedWithText(text) {
    do {
      browser.pause(5);
    } while ($(spinnerBar).isDisplayed());
    if ($(closeCookiesPopup).isDisplayed()) {
      $(closeCookiesPopup).click();
    }   
    if (text.includes("Departure Date")|| text.includes('DEPART')) {
	
      assert.equal(
        $(calendarViewDepartureDateLabel).getText(),
        text,
        'Validation Failed: Departure Date text mismatch '
      );
    } else if (text.includes('Return Date') || text.includes('RETURN')) {
	if (!$(calendarViewReturnDateLabel).isDisplayed()) {
      $(calendarViewGrid).scrollIntoView();
    } 
    if (!$(calendarViewReturnDateLabel).isDisplayed()) {
      $(listViewReturnPreviousArrow).click();
       do {
      browser.pause(50);
      } while ($(spinnerBar).isDisplayed());
    }   
      assert.equal(
        $(calendarViewReturnDateLabel).getText(),
        text,
        'Validation Failed: Return Date text mismatch'
      );
    }
  }
  validateReturningFlightsSectionIsDisplayed() {
    $(flightReturningList).scrollIntoView();
    assert.equal(
      $(flightReturningList).isDisplayed(),
      true,
      'Returning flights list section is not displayed, Failed!.'
    );
  }

  clickListViewReturningPreviousArrow() {
    this.getSelectedDepartureDate();
    this.getSelectedReturnDate();
    if ($(closeCookiesPopup).isDisplayed()) {
      $(closeCookiesPopup).click();
    }
    if ($(listViewReturnPreviousArrow).isClickable()) {
      $(listViewReturnPreviousArrow).click();
    }
  }
  clickListViewReturningNextArrow() {
    this.getSelectedDepartureDate();
    this.getSelectedReturnDate();
    if ($(closeCookiesPopup).isDisplayed()) {
      $(closeCookiesPopup).click();
    }
    if ($(listViewReturnNextArrow).isClickable()) {
      $(listViewReturnNextArrow).click();
    }
  }
  validateSelectedDepartDateAndReturnDate() {
    var expectedDepartDate = departDate;
    var expectedReturnDate = returnDate;
    this.getSelectedDepartureDate();
    this.getSelectedReturnDate();
    assert.equal(
      expectedDepartDate,
      departDate,
      'Validation Failed: Mismatch in departure Date'
    );
    assert.equal(
      expectedReturnDate,
      returnDate,
      'Validation Failed: Mismatch in Return Date'
    );
  }

  validateSelectedReturnDateDayOfTheWeekIsNotChanged() {
    assert.equal(
      this.collectSelectedDaysOfWeek()[0],
      $(departingSelectedDayOfWeek).getText(),
      'Validation Failed: Mismatch in departing Selected Day Of Week'
    );
    assert.equal(
      this.collectSelectedDaysOfWeek()[1],
      $(returningSelectedDayOfWeek).getText(),
      'Validation Failed: Mismatch in departing Selected Day Of Week'
    );
  }
  collectSelectedDaysOfWeek() {
    var selectedDepartDateDayOfWeek = $(departingSelectedDayOfWeek).getText();
    var selectedReturnDateDayOfWeek = $(returningSelectedDayOfWeek).getText();
    return [selectedDepartDateDayOfWeek, selectedReturnDateDayOfWeek];
  }
  validateSelectedFlightIsNotDisplayed() {
    assert.equal(
      $(selectedFlight).isDisplayed(),
      false,
      'Selected Flight is displayed, Failed!.'
    );
  }
  validateSelectedFlightIsDisplayedForDateSelected(text, flightType) {
    browser.pause(3000);
    $(departingListViewButton).waitForDisplayed();
    if (flightType === 'departing') {
      $(departingListViewButton).scrollIntoView();
      $(selectedDepartDate).click();
      assert.equal(
        $(departureSelectedFlight).getText(),
        text,
        'Selected Flight not displayed for Departing Flight, Failed!'
      );
    }
    if (flightType === 'returning') {
      $(returningListViewButton).scrollIntoView();
      $(selectedReturnDate).click();
      assert.equal(
        $(returnSelectedFlight).getText(),
        text,
        'Selected Flight not displayed for Returning Flight, Failed!'
      );
    }
  }
  validateSelectedFlightIsDisplayedForFlightSelected(text, flightType) {
    browser.pause(3000);
    if (flightType === 'departing') {
      $(departingListViewButton).scrollIntoView();
      $(selectDepartingFlight).click();
      assert.equal(
        $(departureSelectedFlight).getText(),
        text,
        'Selected Flight not displayed for Departing Flight, Failed!'
      );
    }
    if (flightType === 'returning') {
      $(returningListViewButton).scrollIntoView();
      $(selectReturningFlight).click();
      assert.equal(
        $(returnSelectedFlight).getText(),
        text,
        'Selected Flight not displayed for Returning Flight, Failed!'
      );
    }
  }
  validateSelectedFlightInitialLandingDefaults(flightType) {
    browser.pause(3000);
    if (flightType === 'departing') {
      $(departingListViewButton).scrollIntoView();
      assert.equal(
        $(initialSelectedDepartingFlight).isDisplayed(),
        true,
        'Selected Flight not displayed in center of the week for Departing Flight, Failed!'
      );
    }
    if (flightType === 'returning') {
      $(returningListViewButton).scrollIntoView();
      assert.equal(
        $(initialSelectedReturningFlight).isDisplayed(),
        true,
        'Selected Flight not displayed in center of the week for Returning Flight, Failed!'
      );
    }
  }
  validateReturningFlightInitialLandingDefaults(day) {
    
    $(returningListViewButton).scrollIntoView();
    assert.equal(
      $(initialSelectedReturningFlightDay).isDisplayed(),
      true,
      'Selected Flight not displayed in the week for Returning Flight, Failed!'
    );
  }
  selectReturnDateSameAsDepartDateFromListView() {
    this.getSelectedDepartureDate();
    var newDate = new Date(departDate);
    newDate.setDate(newDate.getDate());
    var month = newDate.getMonth() + 1;
    if (month < 10) {
      month = '0' + month;
    }
    var date = newDate.getDate();
    if(date < 10){
      date = '0' + date;
    }
    newReturnDate =
      newDate.getFullYear() + '-' + month + '-' + date;
    var SelectNewDateFromListView =
      "[data-hook='day-tab_returning_" + newReturnDate + "']";
    $(SelectNewDateFromListView).click();
    $(FlightLabelOnFlightTab).scrollIntoView();
  }

  verifyPasswordModalClosed() {
    assert.equal(
      $(forgotPasswordBookingPathModalTitle).isDisplayed(),
      false,
      'Test Failed Password Modal displayed.'
    );
  }

  collectFlightPageDetails() {
    try {
      do {
        browser.pause(50);
      } while ($(spinnerBar).isDisplayed());
      if ($(clickContinueButton).isClickable()) {
        this.getSelectedDepartureDate();
        flightPageCollector.set('departDate', departDate);
        flightPageCollector.set(
          'departFlightFare',
          $(SelectedFlightFare.replace('X', '1'))
            .getText()
            .split('$')[1]
        );
        flightPageCollector.set(
          'departFlightNum',
          $(selectedFlightNumbers.replace('X', '1')).getText()
        );
        flightPageCollector.set(
          'FlightDepartTimeSeg1',
          $(selectedFlightDepartTime.replace('X', '1')).getText()
        );
        flightPageCollector.set(
          'FlightArrivalTimeSeg1',
          $(selectedFlightArrivalTime.replace('X', '1')).getText()
        );
        flightPageCollector.set('departureCity', $(departureCity).getText());
        flightPageCollector.set(
          'destinationCity',
          $(destinationCity).getText()
        );
        flightPageCollector.set(
          'paxCount',
          $(paxCount)
            .getText()
            .replace(' Seated', '')
        );
        if ($(SelectedFlightFare.replace('X', '2')).isDisplayed()) {
          this.getSelectedReturnDate();
          flightPageCollector.set('returnDate', returnDate);
          flightPageCollector.set(
            'FlightDepartTimeSeg2',
            $(selectedFlightDepartTime.replace('X', '2')).getText()
          );
          flightPageCollector.set(
            'FlightArrivalTimeSeg2',
            $(selectedFlightArrivalTime.replace('X', '2')).getText()
          );
          flightPageCollector.set(
            'returnFlightNum',
            $(selectedFlightNumbers.replace('X', '2')).getText()
          );
           try{
            if ( $(SelectedFlightOriginalFare.replace('X', '1')).isDisplayed()){
	flightPageCollector.set(
            'departFlightOriginalFare',
            $(SelectedFlightOriginalFare.replace('X', '1'))
              .getText()
              .split('$')[1]
          );
  }
              }
             catch(ex){
	flightPageCollector.set('departFlightOriginalFare',$(SelectedFlightdiscountedFare.replace('X', '1'))
              .getText()
              .split('$')[1]
          );
}        
          flightPageCollector.set(
            'returnFlightFare',
            $(SelectedFlightFare.replace('X', '2'))
              .getText()
              .split('$')[1]
          );
          
                try{
                  if ( $(SelectedFlightOriginalFare.replace('X', '2')).isDisplayed()){              
	flightPageCollector.set(
            'returnFlightOriginalFare',
            $(SelectedFlightOriginalFare.replace('X', '2'))
              .getText()
              .split('$')[1]
          );
  }
              }
             catch(ex){
	flightPageCollector.set('returnFlightOriginalFare',$(SelectedFlightdiscountedFare.replace('X', '2'))
              .getText()
              .split('$')[1]
          );
	
}
        }
      } else if ($(tripType).getText() === 'Round Trip') {
        var clickContinue;
        if (eval($(flightDepartingList).isDisplayed())) {
          clickContinue = $(returnSelectedFlight).isDisplayed();
        }
        if (clickContinue) {
          clickContinue = eval($(selectReturningFlight).isClickable());
        }
        var checkReturnFlight = browser.$$(checkReturnFlightAvilable);
        var checkReturn;
        if (!clickContinue) {
          do {
            for (var i = 0; i < checkReturnFlight.length; i++) {
              checkReturn = checkReturnFlight[i].isClickable();
              if (checkReturn) {
                browser.pause(200);
                checkReturnFlight[i].click();
                $(selectReturningFlight).click();
                break;
              }
            }
            if (!checkReturn) {
              $(listViewReturnNextArrow).click();
              if ($(spinnerBar).isDisplayed()) {
                do {
                  browser.pause(5);
                } while ($(spinnerBar).isDisplayed());
              }
              if ($(selectReturningFlight).isClickable()) {
                $(selectReturningFlight).click();
                checkReturn = true;
                break;
              }
              browser.pause(2000);
            }
          } while (!checkReturn);
          $(selectReturningFlight).click();
        } else {
          $(selectReturningFlight).click();
        }
        if ($(clickContinueButton).isClickable()) {
          this.collectFlightPageDetails();
        }
      } else if ($(tripType).getText() === 'One way') {
        if (!$(flightDepartingList).isDisplayed()) {
          browser.execute('window.scrollBy(0,-1000)');
          $(listViewDepartNextArrow).click();
          do {
            browser.pause(5);
          } while ($(spinnerBar).isDisplayed());
          $(selectDepartingFlight).click();
        }
        if ($(clickContinueButton).isClickable()) {
          this.collectFlightPageDetails();
        }
      }
    } catch (ex) {
      console.log('Exception while collecting data on flights page: ' + ex);
    }
  }

  closeCookies() {
    while ($(closeCookiesPopup).isDisplayed()) {
      $(closeCookiesPopup).click();
      $(closeCookiesPopup).waitForDisplayed({reverse: true});
    }
  }

  clickListViewDepartNextArrow() {;
    $(listViewDepartNextArrow).waitForDisplayed()
    $(listViewDepartNextArrow).click();
  }
  verifyPotentialSavingTextForUsingPoints(tripType){
    $(loggedUser).waitForDisplayed();
      this.pause(2000);
     let availabelPoints= parseFloat($(pointsAvailable).getText().slice(20));
     let seatedNo= $(paxCount).getText().replace(' Seated', '');
     let usePointAmount= parseFloat(availabelPoints/seatedNo).toFixed(2);
     let departingFlightPrice;
     let returningFlightPrice;
     let departingFlightLoyaltyDiscountText;
     let returningFlightLoyaltyDiscountText
     let expectedDepartingFlightLoyaltyDiscountText;
     let expectedReturningFlightLoyaltyDiscountText;
     let departingFlightLoyaltyDiscountedAmount;
     let returningFlightLoyaltyDiscountedAmount;
     if (tripType.includes('oneway')) {
         departingFlightPrice = $(selectedDepartingFlightPrice).getText().slice(1);
         departingFlightLoyaltyDiscountedAmount=parseFloat(departingFlightPrice-usePointAmount).toFixed(2);
         departingFlightLoyaltyDiscountText = $(loyaltyDiscountedDepartingFlightPriceText.replace('X', 1)).getText().replace(/(\n)/gm, " ");
        if ((departingFlightLoyaltyDiscountedAmount)>0){
        expectedDepartingFlightLoyaltyDiscountText = "Or only $"+departingFlightLoyaltyDiscountedAmount+" per passenger when you use your Allways points";
      }
      else{
        expectedDepartingFlightLoyaltyDiscountText = "Or only $0.00 per passenger when you use your Allways points";
       }
        assert.equal(departingFlightLoyaltyDiscountText,
        expectedDepartingFlightLoyaltyDiscountText,"Departing Flight Loyalty Discount Text is not match");
    } else if (tripType.includes('roundTrip')) {
        departingFlightPrice = $(selectedDepartingFlightPrice).getText().slice(1);
        returningFlightPrice = $(selectedReturningFlightPrice).getText().slice(1);
        departingFlightLoyaltyDiscountedAmount=parseFloat(departingFlightPrice-usePointAmount).toFixed(2);
        returningFlightLoyaltyDiscountedAmount=parseFloat(returningFlightPrice-Math.abs(departingFlightLoyaltyDiscountedAmount)).toFixed(2);
        departingFlightLoyaltyDiscountText = $(loyaltyDiscountedDepartingFlightPriceText).getText().replace(/(\n)/gm, " ");
        if($(loyaltyDiscountedReturningFlightPriceText).isDisplayed()){
         returningFlightLoyaltyDiscountText = $(loyaltyDiscountedReturningFlightPriceText).getText().replace(/(\n)/gm, " ");
       }
       if ((departingFlightLoyaltyDiscountedAmount)>0){
              expectedDepartingFlightLoyaltyDiscountText = "Or only $"+departingFlightLoyaltyDiscountedAmount+" per passenger when you use your Allways points";
              assert.equal(departingFlightLoyaltyDiscountText,
              expectedDepartingFlightLoyaltyDiscountText,"Departing Flight Loyalty Discount Text is not match");
              assert.equal($(loyaltyDiscountedReturningFlightPriceText).isDisplayed(),
              false,"Returning Flight Loyalty Discount Text is not displayed");
              }
       else{
          if(returningFlightLoyaltyDiscountedAmount>0){
          expectedDepartingFlightLoyaltyDiscountText = "Or only $0.00 per passenger when you use your Allways points";
          expectedReturningFlightLoyaltyDiscountText = "Or only $"+returningFlightLoyaltyDiscountedAmount+" per passenger when you use your Allways points";
          assert.equal(departingFlightLoyaltyDiscountText,
          expectedDepartingFlightLoyaltyDiscountText,"Departing Flight Loyalty Discount Text is not match");
          assert.equal(returningFlightLoyaltyDiscountText,
          expectedReturningFlightLoyaltyDiscountText,"Returning Flight Loyalty Discount Text is not match");
         }
         else{
          expectedDepartingFlightLoyaltyDiscountText = "Or only $0.00 per passenger when you use your Allways points";
          expectedReturningFlightLoyaltyDiscountText = "Or only $0.00 per passenger when you use your Allways points";
          assert.equal(departingFlightLoyaltyDiscountText,
          expectedDepartingFlightLoyaltyDiscountText,"Departing Flight Loyalty Discount Text is not match");
          assert.equal(returningFlightLoyaltyDiscountText,
          expectedReturningFlightLoyaltyDiscountText,"Returning Flight Loyalty Discount Text is not match");
        }
      }
    }
 }
 verifyPotentialSavingTextNotDisplayed(tripType){
    $(loggedUser).waitForDisplayed();
    this.pause(2000);
    if (tripType.includes('oneway')) {
      assert.equal($(loyaltyDiscountedDepartingFlightPriceText).isDisplayed(),
      false,"Departing Flight Loyalty Discount Text is not displayed");
    }
   else if (tripType.includes('roundTrip')) {
    assert.equal($(loyaltyDiscountedDepartingFlightPriceText).isDisplayed(),
    false,"Departing Flight Loyalty Discount Text is not displayed");
    assert.equal($(loyaltyDiscountedReturningFlightPriceText).isDisplayed(),
    false,"Returning Flight Loyalty Discount Text is not displayed");
   }
 }
 verifyLoyaltyDiscountedDefaultText(tripType){
  $(loggedUser).waitForDisplayed();
    this.pause(2000);
    if (tripType.includes('oneway')) {
      assert.equal($(loyaltyDiscountedDepartingFlightPriceDefaultText).getText(),
      "Also eligible to pay with Allways points","Oh No!! Multiple departing flights are not availabe in the selected day");
  }
   else if (tripType.includes('roundTrip')) {
    assert.equal($(loyaltyDiscountedDepartingFlightPriceDefaultText).getText(),
    "Also eligible to pay with Allways points","Oh No!! Multiple departing flights are not availabe in the selected day");
    assert.equal($(loyaltyDiscountedReturningFlightPriceDefaultText).getText(),
    "Also eligible to pay with Allways points","Oh No!! Multiple returning flights are not availabe in the selected day");
   }
 }
 verifyLoyaltyFareDiscountBanner(Status){
    $(selectFlights).waitForDisplayed({ timeout: 10000 });
    this.pause(3000);
    if (Status ==='Active'){
    $(loyaltyFareDiscountBanner).isDisplayed();
    assert.equal($(loyaltyFareDiscountBanner).isDisplayed(),true,'Lolyalty fare discount banner is not displayed')
    assert.include($(loyaltyFareDiscountBanner).getText(),'has already been applied, just for being an Allways member!','Lolyalty fare discount banner is not correct')
      }
      else{
        assert.equal($(loyaltyFareDiscountBanner).isDisplayed(),false,'Lolyalty fare discount banner is displayed')
      }
}
}
export { departDate, returnDate, flightPageCollector };
export default new FlightPage();