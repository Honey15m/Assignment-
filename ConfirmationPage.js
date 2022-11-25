import { Page, Actions } from '@g4/prova';
import { assert } from 'chai';
import { seatIdDepart, seatIdReturn } from '../pageobjects/SeatPage.js';
import { paymentPageCollector } from '../pageobjects/PaymentPage.js';
import {
  firstName,
  lastName,
} from '../generic/pageobjects/FillTravelersDetails.js';
import { collect, getValueCollectorMap } from '@g4/prova/src/helpers/collector';
const pocSSRDisplay = "(//span[contains(text(),'Oxygen Concentrator')])[1]";
const saSSRDisplay = "(//span[contains(text(),'Service Animal')])[1]";
const esSSRDisplay = "(//span[contains(text(),'Emotional Support Animal')])[1]";
const dpnaSSRDisplay = "(//span[contains(text(),'Disabled passenger')])[1]";
const wchcSSRDisplay = "(//span[contains(text(),'Wheelchair to seat')])[1]";
const wcbwSSRDisplay =
  "(//span[contains(text(),'Wheelchair, wet battery')])[1]";
const departingLeg = "[data-hook='confirmation-page-flight-departing_leg']";
const returningLeg = "[data-hook='confirmation-page-flight-returning_leg']";
const departingSeatAssignment =
  "(//div[@data-hook='confirmation-page-flight-departing']//td//span)[1]";
const repartingSeatAssignment =
  "(//div[@data-hook='confirmation-page-flight-returning']//td//span)[1]";
const departingSeatAssigned =
  "(//div[@data-hook='confirmation-page-flight-departing']//td//span[(contains(@class,'Text-sc-1o5ubbx-0 dqygUN'))])[X]";
const repartingSeatAssigned =
  "(//div[@data-hook='confirmation-page-flight-returning']//td//span[(contains(@class,'Text-sc-1o5ubbx-0 dqygUN'))])[X]";
const confirmItnNumber = "[data-hook='confirmation-number_text']";
const manageTrip = "//span[text()='Manage trip']";
const lapChildSSRDisplayed =
  "(//div[@display='flex']//li//span)[1][contains(text(),'Lap')]";
const childSSRDisplayed =
  "(//div[@display='flex']//li//span)[2][contains(text(),'Child')]";
const infantInSeatSSRDisplayed =
  "(//div[@display='flex']//li//span)[3][contains(text(),'Child')]";
const thingToKnowDrop =
  "[data-hook='confirmation-page-things-to-know-condition_arrow-icon-expanded-down']";
const checkInVerbiage =
  "//div[contains(text(),'To get your boarding pass(es), check in online or')]";
const planToGoVerbiage =
  "//li[contains(text(),'Arrive at the airport at least two (2) hours prior')]";
const seatAssigmentsDrop =
  "[data-hook='confirmation-seat-assignments-condition_arrow-icon-expanded-down']";
const seatAssignmentVerbiage =
  "//div[contains(text(),'Passengers who have not purchased a seat assignmen')]";
const bagsFeesDrop =
  "[data-hook='confirmation-bags-airport-bag-fees-condition_arrow-icon-expanded-down']";
const bagsVerbiage =
  "//div[contains(text(),'You may travel with on Personal Item not to exceed')]";
const airportbagFeesVerbiage =
  "//span[contains(text(),'Airport bag fees will apply to:')]";
const overweightBagVerbiage =
  "//span[contains(text(),'Overweight and oversized checked bag fees apply to')]";
const bagFeeTableVerbiage = "//span[contains(text(),'Baggage Fee Table:')]";
const noticesDrop =
  "[data-hook='confirmation-important-notices-condition_arrow-icon-expanded-down']";
const baggageLiabilityVerbiage =
  "[data-hook='confirmation-important-notices-condition_baggage-liability-title']";
const eticketVerbiage =
  "[data-hook='confirmation-important-notices-condition_eticket-expiration-title']";
const overbookingVerbiage =
  "[data-hook='confirmation-important-notices-condition_overbooking-title']";
const incorporatedVerbiage =
  "[data-hook='confirmation-important-notices-condition_incorporated-terms-title']";
const hotelVerbiage =
  "[data-hook='confirmation-important-notices-condition_hotel-package-title']";
const conditionsResponsiveButton =
  "[data-hook='confirmation-page-section_conditions_arrow-icon-expanded-right']";
const customerFullName = "[data-hook='customer-full-name']";
const customerEmail = "[data-hook='confirmation-page-thank-you-message_email']";
const travelerName =
  '//div[1]/div[1]/div[2]/div[1]/div[3]/div[X]/div[1]/div[1]/div[1]/span[1]';
const checkinButton = "[data-hook='confirmation-page_check-in-button']";
const checkinPageHeading = "//h1[contains(.,'Welcome back,')]";
const weAreSorry = "[id='ui-id-7']";
const petInCabinDeparting =
  "(//div[@data-hook='confirmation-page-flight-departing']//ul//span)[contains(text(),'Pet')][X]";
const petInCabinReturning =
  "(//div[@data-hook='confirmation-page-flight-returning']//ul//span)[contains(text(),'Pet')][X]";
const tripFlexDeparting =
  "(//div[@data-hook='confirmation-page-flight-departing']//ul//span)[contains(text(),'Trip Flex')][X]";
const tripFlexReturning =
  "(//div[@data-hook='confirmation-page-flight-returning']//ul//span)[contains(text(),'Trip Flex')][X]";
const priorityAccessDeparting =
  "(//div[@data-hook='confirmation-page-flight-departing']//ul//span)[contains(text(),'Priority Access')][X]";
const priorityAccessReturning =
  "(//div[@data-hook='confirmation-page-flight-returning']//ul//span)[contains(text(),'Priority Access')][X]";
const bagsExtrasValue =
  "[data-hook='confirmation-page-price-breakdown_bags-extras_value']";
const bookingTotalValue =
  "[data-hook='confirmation-page-price-breakdown_total_value']";
const confirmationCarHeading =
  "[data-hook='confirmation-page-section_car_title']";
const confirmationPageCarImage =
  "[data-hook='confirmation-page-rented-car_image']";
const confirmationPageCarVendorName =
  "[data-hook='confirmation-page-rented-car_vendor_name']";
const confirmationPageCarType =
  "[data-hook='confirmation-page-rented-car_type_label']";
const confirmationPageConfirmationNumber =
  "[data-hook='confirmation-page-rented-car_confirmation_number_label']";
const confirmationPagePickupLocation =
  "[data-hook='confirmation-page-rented-car_pick_up_location']";
const confirmationPagePickupLabel =
  "[data-hook='confirmation-page-rented-car_pick_up_label']";
const confirmationPagePickupDate =
  "[data-hook='confirmation-page-rented-car_pick_up_date']";
const confirmationPagePickupTime =
  "[data-hook='confirmation-page-rented-car_pick_up_time']";
const confirmationPagePickupIcon =
  "[data-hook='confirmation-page-rented-car_pick_up_icon']";
const confirmationPageDropoffLabel =
  "[data-hook='confirmation-page-rented-car_drop_off_label']";
const confirmationPageDropoffDate =
  "[data-hook='confirmation-page-rented-car_drop_off_date']";
const confirmationPageDropoffTime =
  "[data-hook='confirmation-page-rented-car_drop_off_time']";
const confirmationPageDropoffIcon =
  "[data-hook='confirmation-page-rented-car_drop_off_icon']";
const confirmationPageCarTypeValue =
  "[data-hook='confirmation-page-rented-car_type_value']";
const confirmationPageConfirmationNumberValue =
  "[data-hook='confirmation-page-rented-car_confirmation_number_value']";
const confirmationPageDisclaimerText =
  "[data-hook='confirmation-page-rented-car_disclaimer_text']";
const confirmationPageCarDisclaimerExpandoLink =
  "[data-hook='confirmation-page-rented-car_disclaimer_show_more']";
const confirmationPageReceiptHeading =
  "[data-hook='confirmation-page-section_payment_title']";
const confirmationPagePaidByText = "//span[contains(text(),'Paid by')]";
const confirmationPageChargeStatementText =
  "//span[contains(text(),'You will see')]";
const confirmationPageCharge1Text =
  "[data-hook='confirmation-page-price-breakdown_charge-1-text']";
const confirmationPageSubTotalText =
  "[data-hook='confirmation-page-price-breakdown_subtotal']";
const confirmationPageSubTotalValue =
  "[data-hook='confirmation-page-price-breakdown_subtotal_value']";
const confirmationPageHotelUpsellText = "[data-hook='hotel-upsell-text']";
const confirmationPageCarUpsellText = "[data-hook='vehicle-upsell-text']";
const confirmationPageHotelName =
  "[data-hook='confirmation-page-booked-hotel_name']";
const confirmationPageHotelCheckInLabel =
  "[data-hook='confirmation-page-booked-hotel_check_in_label']";
const confirmationPageHotelCheckOutLabel =
  "[data-hook='confirmation-page-booked-hotel_checkout_label']";
const confirmationPageHotelCheckInDate =
  "[data-hook='confirmation-page-booked-hotel_check_in_date']";
const confirmationPageHotelCheckOutDate =
  "[data-hook='confirmation-page-booked-hotel_checkout_time']";
const confirmationPageHotelSectionName =
  "[data-hook='confirmation-page-section_hotel_title']";
const confirmationPageHotelGuestsAndRooms =
  "[data-hook='confirmation-page-booked-hotel_guest_avatar_value']";
const confirmationPageHotelRoomName =
  "[data-hook='confirmation-page-booked-hotel_room_value']";
const confirmationPageHotelNights =
  "[data-hook='confirmation-page-booked-hotel_stay_length_value']";
const loginButton = "[data-hook='header-user-menu-item_log-in']";
const loggedInUser = "//*[starts-with(text(),'Hello')]";
const myAccount = "//*[text()='My Account']";
const trip = "//*[text()='Trips']";
const point = "//*[text()='Points']";
const logout = "//*[text()='LOGOUT']";
const customerInformationLabel="[data-hook='confirmation-page-section_customer-info_title']";
const customerInformationPageTitle="[data-hook='confirmation-page-section_customer-info_title']";
const claimMyPointsSection ="//*[@data-hook='confirmation-page-allways-section']";
const claimMyPointsThankYouMessage= "//*[contains(text(),'Thank you for your interest in becoming an Allways')]";
const resendEmailButton="//*[@data-hook='confirmation-page-allways-section_resend-email-button']";
const inlineNoteAfterSuccessfullyEmailSent="//*[contains(text(),'An email has been sent to')]";
const allwaysEarningPointsAllwaysIcon = "//*[@data-hook='confirmation-page-allways-section']/div/img"
const allwaysEarningPointsContentsLine1 = "//*[contains(text(),'It’s not too late!')]"
const allwaysEarningPointsContentsLine2 = "//*[contains(text(),'Claim Your')]"
const allwaysEarningPointsContentsLine3 = "//*[contains(text(),'Allways Loyalty Points from this purchase')]"
const allwaysEarningPointsContentsLine4 = "//*[contains(text(),'New Member Bonus Points')]"
const allwaysEarningPointsContentsLine5 = "//*[contains(text(),'Total Points')]"
const claimMyPointsButton ="//*[contains(text(),'CLAIM MY POINTS!')]"
const cardholderDestinationAdvertBanner = "[data-hook='confirmation-page-cardholder-destination-advert']"
const nonCardholderDestinationAdvertBanner = "[data-hook='confirmation-page-noncardholder-destination-advert']"
const confirmationPageBannerMessage ="[data-hook='confirmation-page-account-already-exists-message']"
const clickHereFromMessageBanner = "//*[text()='here']"
const loginPassword= "[data-hook='booking-login_password-field_login-password']"
const signInButton = "//*[contains(@data-hook,'home-login_submit-button_continue')] | //*[contains(@data-hook,'booking-login_submit-button_continue')]";
var itinerary;
class ConfirmationPage extends Page {
  validateConfirmationPageSpecialAssistance(ssr, ssrDisplay) {
    if (ssr === 'oxygen-concentrator') {
      assert.equal(
        $(pocSSRDisplay).getText(),
        ssrDisplay,
        'Portable Oxygen Concentrator SSR Display validation fail!!'
      );
    }
    if (ssr === 'service-animal') {
      assert.equal(
        $(saSSRDisplay).getText(),
        ssrDisplay,
        'Service Animal SSR Display validation fail!!'
      );
    }
    if (ssr === 'emotional-support-animal') {
      assert.equal(
        $(esSSRDisplay).getText(),
        ssrDisplay,
        'Emotional Support Animal SSR Display validation fail!!'
      );
    }
    if (ssr === 'intellectual-or-developmental-disability') {
      assert.equal(
        $(dpnaSSRDisplay).getText(),
        ssrDisplay,
        'DPNA SSR Display validation fail!!'
      );
    }
    if (ssr === 'airport-provided-wheelchair') {
      assert.equal(
        $(wchcSSRDisplay).getText(),
        ssrDisplay,
        'DPNA SSR Display validation fail!!'
      );
    }
    if (ssr === 'intellectual-or-developmental-disability') {
      assert.equal(
        $(wcbwSSRDisplay).getText(),
        ssrDisplay,
        'DPNA SSR Display validation fail!!'
      );
    }
  }

  validateSSRDisplayed(ssr, traveler) {
    if (traveler === 'LapInfant') {
      assert.equal(
        $(lapChildSSRDisplayed).getText(),
        ssr,
        'Lap Infant SSR Display validation fail!!'
      );
    }
    if (traveler === 'Child') {
      assert.equal(
        $(childSSRDisplayed).getText(),
        ssr,
        'Child SSR Display validation fail!!'
      );
    }
    if (traveler === 'Infant in Seat') {
      assert.equal(
        $(infantInSeatSSRDisplayed).getText(),
        ssr,
        'infantInSeat SSR Display validation fail!!'
      );
    }
  }
  validateOnlyDepartingLegIsDisplayed() {
    assert.equal(
      $(departingLeg).getText(),
      'Departing:',
      'Validation Failed: Departing leg info is not displayed in confirmation page'
    );
    assert.equal(
      $(returningLeg).isDisplayed(),
      false,
      'Validation Failed: returning leg info should not be displayed in confirmation page'
    );
  }

  validateConfirmationPageSpecialAssistance(ssr, ssrDisplay) {
    if (ssr === 'oxygen-concentrator') {
      assert.equal(
        $(pocSSRDisplay).getText(),
        ssrDisplay,
        'Portable Oxygen Concentrator SSR Display validation fail!!'
      );
    }
    if (ssr === 'service-animal') {
      assert.equal(
        $(saSSRDisplay).getText(),
        ssrDisplay,
        'Service Animal SSR Display validation fail!!'
      );
    }
    if (ssr === 'emotional-support-animal') {
      assert.equal(
        $(esSSRDisplay).getText(),
        ssrDisplay,
        'Emotional Support Animal SSR Display validation fail!!'
      );
    }
    if (ssr === 'intellectual-or-developmental-disability') {
      assert.equal(
        $(dpnaSSRDisplay).getText(),
        ssrDisplay,
        'DPNA SSR Display validation fail!!'
      );
    }
    if (ssr === 'airport-provided-wheelchair') {
      assert.equal(
        $(wchcSSRDisplay).getText(),
        ssrDisplay,
        'DPNA SSR Display validation fail!!'
      );
    }
    if (ssr === 'intellectual-or-developmental-disability') {
      assert.equal(
        $(wcbwSSRDisplay).getText(),
        ssrDisplay,
        'DPNA SSR Display validation fail!!'
      );
    }
  }
  validateOnlyDepartingLegIsDisplayed() {
    assert.equal(
      $(departingLeg).getText(),
      'Departing:',
      'Validation Failed: Departing leg info is not displayed in confirmation page'
    );
    assert.equal(
      $(returningLeg).isDisplayed(),
      false,
      'Validation Failed: returning leg info should not be displayed in confirmation page'
    );
  }
  validateSelectedSeats(flightType) {
    if (flightType === 'Departing') {
      $(departingSeatAssignment).scrollIntoView();
      assert.equal(
        $(departingSeatAssignment).isDisplayed(),
        true,
        'Select seat is not displayed, Failed'
      );
    }
    if (flightType === 'Returning') {
      assert.equal(
        $(repartingSeatAssignment).isDisplayed(),
        true,
        'Select seat is not displayed, Failed'
      );
    }
  }
  validateSeatsNotAssigned() {
    assert.equal(
      $(departingSeatAssignment).isDisplayed(),
      false,
      'Seat assignment displayed, Failed'
    );
    assert.equal(
      $(repartingSeatAssignment).isDisplayed(),
      false,
      'Seat assignment displayed, Failed'
    );
  }
  getItnNumber() {
    const confirmationNumber = $(confirmItnNumber).getText();
    console.log(confirmationNumber);
    return confirmationNumber;
  }

  clickConfirmationNumber() {
	$(customerInformationLabel).scrollIntoView();
	this.pause(5000);
    this.clickElement($(confirmItnNumber));
  }
  validateConfirmationPageAnchorToTop(){
    this.pause(5000);
    assert.equal(
			$(customerInformationPageTitle).isDisplayedInViewport(),
			true,
			'Confirmation Page is not anchor to top'
		);
  }
  confirmationNumberReturn() {
	$(customerInformationLabel).scrollIntoView();
	this.pause(5000);
    const itnNumber = this.getItnNumber();
    // this.clickConfirmationNumber();
    itinerary = itnNumber;
    process.env.confirmationNumber = itnNumber;
    return itnNumber;
  }

  validateSeatIdInConfirmationPage() {
    for (var i = 0; i < seatIdDepart.length; i++) {
      assert.equal(
        $(departingSeatAssigned.replace('X', i + 1)).getText(),
        seatIdDepart[i],
        'Validation failed: Confirmation Page Departing Seat mismatch for pax: ' +
          i +
          1
      );
    }
    for (var i = 0; i < seatIdReturn.length; i++) {
      assert.equal(
        $(repartingSeatAssigned.replace('X', i + 1)).getText(),
        seatIdReturn[i],
        'Validation failed: Confirmation Page Returning Seat mismatch for pax: ' +
          i +
          1
      );
    }
    while (seatIdDepart.length > 0) {
      seatIdDepart.pop();
      seatIdReturn.pop();
    }
  }

  validatePetInCabinInConfirmationPage(petInCabin, paxNum, segment) {
    if (segment === 'departing') {
      assert.equal(
        $(petInCabinDeparting.replace('X', paxNum)).getText(),
        petInCabin,
        'Validation failed: Pet in cabin not displayed for Departing Segment'
      );
    }
    if (segment === 'returning') {
      assert.equal(
        $(petInCabinReturning.replace('X', paxNum)).getText(),
        petInCabin,
        'Validation failed: Pet in cabin not displayed for Returning Segment'
      );
    }
    if (segment === 'both') {
      assert.equal(
        $(petInCabinDeparting.replace('X', paxNum)).getText(),
        petInCabin,
        'Validation failed: Pet in cabin not displayed for Departing Segment'
      );
      assert.equal(
        $(petInCabinReturning.replace('X', paxNum)).getText(),
        petInCabin,
        'Validation failed: Pet in cabin not displayed for Returning Segment'
      );
    }
  }

  validatePriorityAccessInConfirmationPage(priorityAccess, paxNum, segment) {
    if (segment === 'departing') {
      assert.equal(
        $(priorityAccessDeparting.replace('X', paxNum)).getText(),
        priorityAccess,
        'Validation failed: Priority Access not displayed for Departing Segment'
      );
    }
    if (segment === 'returning') {
      assert.equal(
        $(priorityAccessReturning.replace('X', paxNum)).getText(),
        priorityAccess,
        'Validation failed: Priority Access not displayed for Returning Segment'
      );
    }
    if (segment === 'both') {
      assert.equal(
        $(priorityAccessDeparting.replace('X', paxNum)).getText(),
        priorityAccess,
        'Validation failed: Priority Access not displayed for Departing Segment'
      );
      assert.equal(
        $(priorityAccessReturning.replace('X', paxNum)).getText(),
        priorityAccess,
        'Validation failed: Priority Access not displayed for Returning Segment'
      );
    }
  }

  validateTripFlexInConfirmationPage(tripFlex, paxNum, segment) {
    if (segment === 'departing') {
      assert.equal(
        $(tripFlexDeparting.replace('X', paxNum)).getText(),
        tripFlex,
        'Validation failed: TripFlex not displayed for Departing Segment'
      );
    }
    if (segment === 'returning') {
      assert.equal(
        $(tripFlexReturning.replace('X', paxNum)).getText(),
        tripFlex,
        'Validation failed: TripFlex not displayed for Returning Segment'
      );
    }
    if (segment === 'both') {
      assert.equal(
        $(tripFlexDeparting.replace('X', paxNum)).getText(),
        tripFlex,
        'Validation failed: TripFlex not displayed for Departing Segment'
      );
      assert.equal(
        $(tripFlexReturning.replace('X', paxNum)).getText(),
        tripFlex,
        'Validation failed: TripFlex not displayed for Returning Segment'
      );
    }
  }

  validateConfirmationNumberDisplayed() {
    $(customerInformationLabel).scrollIntoView();
    $(confirmItnNumber).waitForDisplayed();
    assert.isTrue(
      $(confirmItnNumber).isDisplayed,
      'The Confirmation Number is not displayed.'
    );
  }

  validateConfirmationNumberDisplayed() {
    $(confirmItnNumber).scrollIntoView();
    const itnNumber = this.getItnNumber();
    itinerary = itnNumber;
    process.env.confirmationNumber = itnNumber;
    assert.equal(
      $(confirmItnNumber).isDisplayed(),
      true,
      'Validation Failed: Confirmation Number not displayed'
    );
    return itnNumber;
  }

  clickManageTrip() {
    $(manageTrip).click();
    browser.pause(25000);
    browser.switchWindow('Manage Travel My Trip | Allegiant Air');
  }

  clickCheckinButton() {
    browser.execute('window.scrollBy(0,-1000)');
    browser.pause(2000);
    $(checkinButton).click();
    browser.pause(10000);
    browser.switchWindow('Select Passengers for Check-in | Allegiant Air');
    try {
      $(checkinPageHeading).waitForDisplayed({ timeout: 15000 });
    } catch (ex) {
      if ($(weAreSorry).isDisplayed()) {
        assert.fail(
          'Online check-in is available between 24 hours and 45 minutes before scheduled flight departure.'
        );
      } else {
        assert.fail(ex);
      }
    }
  }

  clickOnThingsToKnow() {
    this.clickElement($(thingToKnowDrop));
  }

  validateThingsToKnow() {
    $(planToGoVerbiage).waitForDisplayed();
    assert.isTrue(
      $(checkInVerbiage).isDisplayed(),
      'Validation Failed: Conditions Verbiage not displayed'
    );
    assert.isTrue(
      $(planToGoVerbiage).isDisplayed(),
      'Validation Failed: Conditions Verbiage not displayed'
    );
  }

  clickOnSeatAssignments() {
    this.clickElement($(seatAssigmentsDrop));
  }

  validateSeatAssignments() {
    $(seatAssignmentVerbiage).waitForDisplayed();
    assert.isTrue(
      $(seatAssignmentVerbiage).isDisplayed(),
      'Validation Failed: Conditions Verbiage not displayed'
    );
  }

  clickOnBagsVerbiage() {
    this.clickElement($(bagsFeesDrop));
  }

  validateBagsVerbiage() {
    $(bagFeeTableVerbiage).waitForDisplayed();
    assert.isTrue(
      $(bagsVerbiage).isDisplayed(),
      'Validation Failed: Conditions Verbiage not displayed'
    );
    assert.isTrue(
      $(airportbagFeesVerbiage).isDisplayed(),
      'Validation Failed: Conditions Verbiage not displayed'
    );
    assert.isTrue(
      $(overweightBagVerbiage).isDisplayed(),
      'Validation Failed: Conditions Verbiage not displayed'
    );
    assert.isTrue(
      $(bagFeeTableVerbiage).isDisplayed(),
      'Validation Failed: Conditions Verbiage not displayed'
    );
  }

  clickOnNoticesVerbiage() {
    this.clickElement($(noticesDrop));
  }

  validateNoticesVerbiage() {
    $(hotelVerbiage).waitForDisplayed();
    assert.isTrue(
      $(baggageLiabilityVerbiage).isDisplayed(),
      'Validation Failed: Conditions Verbiage not displayed'
    );
    assert.isTrue(
      $(eticketVerbiage).isDisplayed(),
      'Validation Failed: Conditions Verbiage not displayed'
    );
    assert.isTrue(
      $(overbookingVerbiage).isDisplayed(),
      'Validation Failed: Conditions Verbiage not displayed'
    );
    assert.isTrue(
      $(incorporatedVerbiage).isDisplayed(),
      'Validation Failed: Conditions Verbiage not displayed'
    );
    assert.isTrue(
      $(hotelVerbiage).isDisplayed(),
      'Validation Failed: Conditions Verbiage not displayed'
    );
  }

  clickConditions() {
    $(conditionsResponsiveButton).waitForDisplayed();
    $(conditionsResponsiveButton).click();
  }

  validateCustomerNameAndEmailId() {
    assert.equal(
      $(customerFullName).getText(),
      paymentPageCollector.get('customerFirstName') +
        ' ' +
        paymentPageCollector.get('customerLastName'),
      'Validation Failed: customerName is not displayed correctly'
    );
    assert.equal(
      $(customerEmail).getText(),
      paymentPageCollector.get('emailAddress'),
      'Validation Failed: emailAddress is not displayed correctly'
    );
  }
  validateTravelerDetailsDisplayedCorrectly() {
    var fname = firstName.split('|');
    for (var i = 0; i < fname.length; i++) {
      assert.equal(
        $(travelerName.replace('X', i + 1)).getText(),
        firstName.split('|')[i] + ' ' + lastName.split('|')[i],
        'Validation Failed: Traveler ' +
          Number(i) +
          Number(1) +
          ' is not displayed correctly'
      );
    }
  }

  validateCheckInButtonIsNotDisplayed() {
    assert.isFalse(
      $(checkinButton).isExisting(),
      'The Check-in button should not be displayed.'
    );
  }

  /**
   * This method provides other methods below with the text of the desired receipt item, which is determined by what parameter is given in the feature file. This is then used to create a selector and to obtain a collector map value.
   * @param {String}  item     Flight Package, Round Trip Discount, Seats, Airline Fees, Government Fees, Total Booking
   * @returns {String}
   */
  getFormattedItem(item) {
    let formattedItem = item.toLowerCase().replace(/ /g, '_');
    let itemText = {
      flight_package: 'flightHotelCar',
      bundle: 'bundle',
      round_trip_discount: 'flight_discount',
      seats: 'seats',
      bags_and_extras: 'bags-extras',
      airline_fees: 'airline-fees',
      carrier_usage_charge: 'carrier-usage-charge',
      government_fees: 'government-taxes-fees',
      usa_federal_excise_tax: 'fed-tax',
      usa_segment_tax: 'segment-fees',
      usa_security_fee: '911-security',
      usa_passenger_facility_charge: 'pfc',
      cr_voucher: 'CR_voucher_1',
      do_voucher: 'DO_voucher_1',
      subtotal: 'subtotal',
      total_due: 'total',
      hotel_image: 'image',
      hotel_address: 'address',
      phone_label: 'phone_label',
      phone_number: 'phone_value',
      confirmation_label: 'confirmation_number_label',
      hotel_details: 'stay_details_label',
      checkin_icon: 'check_in_icon',
      checkout_icon: 'checkout_icon',
      room_and_guests_icon: 'guest_avatar_icon',
      room_type_icon: 'room_icon',
      lenght_of_stay_icon: 'stay_length_icon',
      checkin_policy: 'check_in_policy',
      checkout_policy: 'checkout_policy',
      disclaimer_text: 'disclaimer_text',
    };
    return itemText[formattedItem];
  }

  /**
   * This method calls getFormattedItem to obtain the text which will be used to create selectors and obtain values from the collector map. Afterwards, it validates that the values in the receipt match the values in the booking path.
   * @param {String} item     Flight Package, Round Trip Discount, Seats, Airline Fees, Government Fees, Total Booking
   */
  validateReceiptItemValue(item) {
    let formattedItem = this.getFormattedItem(item);
    let expectedItemValue;
    if (getValueCollectorMap(`${formattedItem}ValueKey`) === undefined) {
      return;
    } else {
      expectedItemValue = getValueCollectorMap(`${formattedItem}ValueKey`);
    }
    $(
      `[data-hook='confirmation-page-price-breakdown_${formattedItem}_value']`
    ).waitForDisplayed();
    let actualItemValue = $(
      `[data-hook='confirmation-page-price-breakdown_${formattedItem}_value']`
    )
      .getText()
      .replace('$', '');
    if (formattedItem === 'subtotal') {
      formattedItem = 'total';
    } // when it exists, the value of the subtotal is the value of the total
    else if (formattedItem.includes('voucher')) {
      formattedItem = 'voucher';
    } // this is needed because we have a unique collector key for both DO and CR voucher values
    if (expectedItemValue === 0.0) {
      expectedItemValue = 'INCLUDED';
    }
    assert.equal(
      actualItemValue,
      expectedItemValue,
      `The value of the ${item} in the receipt is incorrect`
    );
  }

  // This method is needed because in the receipt, two separate items (bags and extras) are added up. As a result, they cannot fit in the method above.
  validateBagsAndExtrasValue() {
    let actualBagsAndExtrasValue = $(bagsExtrasValue)
      .getText()
      .replace('$', '');
    let bagsValue = getValueCollectorMap('bagsValueKey');
    let extrasValue = getValueCollectorMap('extrasValueKey');
    if (bagsValue === 0 && extrasValue === 0) {
      assert.equal(
        actualBagsAndExtrasValue,
        'INCLUDED',
        'The value of the Bags and Extras in the receipt is incorrect'
      );
    } else {
      let expectedBagsAndExtrasValue = bagsValue + extrasValue;
      assert.equal(
        actualBagsAndExtrasValue,
        expectedBagsAndExtrasValue,
        'The value of the Bags and Extras in the receipt is incorrect'
      );
    }
  }

  /**
   * This method calls getFormattedItem to obtain the text which will be used to create selectors. It then validates that the texts of each line item is correct.
   * @param {String} item     		    Flight Package, Round Trip Discount, Seats, Airline Fees, Government Fees, Total Booking
   * @param {String} expectedItemText     e.g. FLIGHT + HOTEL + CAR, SEATS, Airline Fees, etc
   */
  validateReceiptItemText(item, expectedItemText) {
    let formattedItem = this.getFormattedItem(item);
    if (getValueCollectorMap(`${formattedItem}ValueKey`) === undefined) {
      return;
    }
    $(
      `[data-hook='confirmation-page-price-breakdown_${formattedItem}']`
    ).waitForDisplayed();
    let actualItemText = $(
      `[data-hook='confirmation-page-price-breakdown_${formattedItem}']`
    ).getText();
    assert.equal(
      actualItemText,
      expectedItemText,
      `The text of the ${item} in the receipt is incorrect`
    );
  }

  clickReceiptItem(item) {
    let formattedItem = this.getFormattedItem(item);
    $(
      `[data-hook='confirmation-page-price-breakdown_${formattedItem}']`
    ).waitForDisplayed();
    $(
      `[data-hook='confirmation-page-price-breakdown_${formattedItem}']`
    ).click();
  }

  validateCarSectionHeading(carSectionHeading) {
    assert.equal(
      $(confirmationCarHeading).getText(),
      carSectionHeading,
      'The name of the car section should be ' +
        carSectionHeading +
        ' but it is not'
    );
  }

  validateCarSectionImageIsDisplayed() {
    assert.isTrue(
      $(confirmationPageCarImage).isDisplayed(),
      'Validation Failed: Car Image is not displayed'
    );
  }
  validateCarVendorNameIsDisplayed() {
    assert.isTrue(
      $(confirmationPageCarVendorName).isDisplayed(),
      'Validation Failed: Car vendor name is not displayed'
    );
  }

  validateCarDetailsElements(carType, confirmationNumber) {
    assert.equal(
      $(confirmationPageCarType).getText(),
      carType,
      'Car type label should be ' + carType + ' but it is not'
    );
    assert.equal(
      $(confirmationPageConfirmationNumber).getText(),
      confirmationNumber,
      'Confirmation number label should be ' +
        confirmationNumber +
        ' but it is not'
    );
  }

  validateCarTypeValueDisplayed() {
    assert.isTrue(
      $(confirmationPageCarTypeValue).isDisplayed(),
      'Validation Failed: Car type is not displayed'
    );
  }

  validateConfirmationNumberValueDisplayed() {
    assert.isTrue(
      $(confirmationPageConfirmationNumberValue).isDisplayed(),
      'Validation Failed: Confirmation Number is not displayed'
    );
  }

  validatePickupLocationDisplayed() {
    assert.isTrue(
      $(confirmationPagePickupLocation).isDisplayed(),
      'Validation Failed: Pickup Location is not displayed'
    );
  }

  validatePickupDetailsDisplayed() {
    assert.isTrue(
      $(confirmationPagePickupLabel).isDisplayed(),
      'Validation Failed: Pickup label is not displayed'
    );
    assert.isTrue(
      $(confirmationPagePickupDate).isDisplayed(),
      'Validation Failed: Pickup date is not displayed'
    );
    assert.isTrue(
      $(confirmationPagePickupTime).isDisplayed(),
      'Validation Failed: Pickup hour is not displayed'
    );
    assert.isTrue(
      $(confirmationPagePickupIcon).isDisplayed(),
      'Validation Failed: Pickup icon is not displayed'
    );
  }

  validateDropoffDetailsDisplayed() {
    assert.isTrue(
      $(confirmationPageDropoffLabel).isDisplayed(),
      'Validation Failed: Dropoff label is not displayed'
    );
    assert.isTrue(
      $(confirmationPageDropoffDate).isDisplayed(),
      'Validation Failed: Dropoff date is not displayed'
    );
    assert.isTrue(
      $(confirmationPageDropoffTime).isDisplayed(),
      'Validation Failed: Dropoff hour is not displayed'
    );
    assert.isTrue(
      $(confirmationPageDropoffIcon).isDisplayed(),
      'Validation Failed: Dropoff icon is not displayed'
    );
  }

  validateDisclaimerTextDisplayed() {
    assert.isTrue(
      $(confirmationPageDisclaimerText).isDisplayed(),
      'Validation Failed: Disclaimer Text is not displayed'
    );
  }

  validateCarDisclaimerExpandoLinkText(expectedLinkText) {
    $(confirmationPageCarDisclaimerExpandoLink).waitForDisplayed();
    let actualLinkText = $(confirmationPageCarDisclaimerExpandoLink).getText();
    assert.equal(
      actualLinkText,
      expectedLinkText,
      'The car disclaimer expando link text is incorrect'
    );
  }

  validateCarDisclaimerExpandoLinkNotDisplayed() {
    assert.isFalse($(confirmationPageCarDisclaimerExpandoLink).isDisplayed());
  }

  clickCarDisclaimerExpandoLink() {
    $(confirmationPageCarDisclaimerExpandoLink).click();
  }

  validateCarDisclaimerParagraphsVisibility(status) {
    if (status === 'are not displayed') {
      assert.isTrue($(confirmationPageCarDisclaimerExpandoLink).isDisplayed());
    } else {
      assert.isTrue(
        $(
          "[data-hook='confirmation-page-rented-car_disclaimer_text']>span>div:nth-child(6)"
        ).isDisplayed()
      );
      assert.isTrue(
        $(
          "[data-hook='confirmation-page-rented-car_disclaimer_text']>span>div:nth-child(5)"
        ).isDisplayed()
      );
      assert.isTrue(
        $(
          "[data-hook='confirmation-page-rented-car_disclaimer_text']>span>div:nth-child(4)"
        ).isDisplayed()
      );
      assert.isTrue(
        $(
          "[data-hook='confirmation-page-rented-car_disclaimer_text']>span>div:nth-child(3)"
        ).isDisplayed()
      );
      assert.isTrue(
        $(
          "[data-hook='confirmation-page-rented-car_disclaimer_text']>span>div:nth-child(2)"
        ).isDisplayed()
      );
      assert.isTrue(
        $(
          "[data-hook='confirmation-page-rented-car_disclaimer_text']>span>div:nth-child(1)"
        ).isDisplayed()
      );
    }
  }

  validateReceiptHeadingText(expectedText) {
    let actualText = $(confirmationPageReceiptHeading).getText();
    assert.equal(
      actualText,
      expectedText,
      'The text of the receipt heading is incorrect'
    );
  }

  /**
   * This method verifies that the paid by message on the confirmation page is correct. The if conditions are needed because some card types are displayed differently on the Confirmation page than their full name. E.g. Visa Debit >>> Visa.
   * @param {String}  cardType     e.g. Visa Debit, Visa Credit, Diners, JCB etc
   * @param {String}  cardNumber   e.g. 5109385867505046
   */
  validateEveryTypeOfPaymentMessage(cardType, cardNumber) {
    if (cardType === 'Visa Credit') {
      cardType = 'Visa';
    } else if (
      cardType === 'Mastercard Credit' ||
      cardType === 'Mastercard Debit'
    ) {
      cardType = 'Mastercard';
    } else if (cardType === 'Discover Credit') {
      cardType = 'Discover';
    }
    $(confirmationPagePaidByText).waitForDisplayed();
    let lastFourDigits = cardNumber.slice(-4);
    let actualText = $(confirmationPagePaidByText).getText();
    let cardHolderName = getValueCollectorMap('cardHolderNameKey');
    let expectedText = `Paid by ${cardHolderName} with ${cardType} ending in ****${lastFourDigits}. `;
    assert.equal(
      actualText,
      expectedText,
      'The payment type message on the Confirmation page is incorrect.'
    );
  }

  validateChargeStatementText(expectedText) {
    let actualText = $(confirmationPageChargeStatementText).getText();
    assert.equal(
      actualText,
      expectedText,
      'The charge statement text is incorrect'
    );
  }

  validateAppliedVoucherText(voucherType) {
    let formattedVoucherType = this.getFormattedItem(voucherType);
    let voucherNumber = getValueCollectorMap('generatedVoucherTextKey');
    let expectedReceiptVoucherText = 'Voucher ' + voucherNumber;
    let actualReceiptVoucherText = $(
      `[data-hook='confirmation-page-price-breakdown_${formattedVoucherType}']`
    ).getText();

    assert.equal(
      actualReceiptVoucherText,
      expectedReceiptVoucherText,
      'The line item text for the CR voucher is incorrect'
    );
  }

  validateCreditCardInformationNotDisplayed() {
    assert.isFalse(
      $(confirmationPagePaidByText).isExisting(),
      'Credit Card Information is displayed, but it should not be'
    );
    assert.isFalse(
      $(confirmationPageChargeStatementText).isExisting(),
      'Credit Card Information is displayed, but it should not be'
    );
    assert.isFalse(
      $(confirmationPageCharge1Text).isExisting(),
      'Credit Card Information is displayed, but it should not be'
    );
  }

  validateCreditCardChargeIsCorrect() {
    let voucherValue = parseFloat(
      $("[data-hook='confirmation-page-price-breakdown_DO_voucher_1_value']")
        .getText()
        .slice(2)
    );
    let subTotalValue = parseFloat(
      $(confirmationPageSubTotalValue)
        .getText()
        .slice(1)
    );
    let actualChargeValue = parseFloat(
      $(confirmationPageCharge1Text)
        .getText()
        .slice(11)
    );
    let expectedChargeValue = subTotalValue - voucherValue;

    assert.equal(
      actualChargeValue,
      expectedChargeValue,
      'The credit card value charge is incorrect'
    );
  }

  validateCreditCardChargeText() {
    let creditCardChargeText = $(confirmationPageCharge1Text).getText();
    assert.isTrue(
      creditCardChargeText.includes('Charge 1: $'),
      'The credit card charge text is incorrect'
    );
  }

  validateSubTotalLineNotDisplayed() {
    assert.isFalse(
      $(confirmationPageSubTotalText).isExisting(),
      'The Sub-total line item is displayed, but it should not be'
    );
    assert.isFalse(
      $(confirmationPageSubTotalValue).isExisting(),
      'The Sub-total line item is displayed, but it should not be'
    );
  }

  validateTotalDueValue(expectedTotalValue) {
    let actualTotalValue = $(bookingTotalValue)
      .getText()
      .slice(1);
    if (expectedTotalValue === 'correct') {
      let actualChargeValue = $(confirmationPageCharge1Text)
        .getText()
        .slice(11);
      assert.equal(
        actualTotalValue,
        actualChargeValue,
        'The Total Due is incorrect'
      ); // the charge and total must be equal, when they exist
    } else {
      assert.equal(
        actualTotalValue,
        expectedTotalValue,
        'The Total Due is incorrect.'
      );
    }
  }

  getDesiredSection(section) {
    let formattedSection = section.toLowerCase().replace(/ /g, '_');
    let sectionSelector = {
      car: "[data-hook='button-view-update-trip-add-vehicle']",
      hotel: "[data-hook='button-view-update-trip-add-hotel']",
      add_a_car: "[data-hook='button-view-update-trip-add-vehicle']",
      add_a_hotel: "[data-hook='button-view-update-trip-add-hotel']",
    };
    return sectionSelector[formattedSection];
  }

  validateHotelUpsellTextIsDisplayed() {
    let hotelUpsellText = $(confirmationPageHotelUpsellText).getText();
    assert.isTrue(
      hotelUpsellText.includes('Great deals in'),
      'The text for the Hotel Upsell section is incorrect'
    );
    assert.isTrue(
      $(confirmationPageHotelUpsellText).isDisplayed(),
      'The Hotel Upsell text is not displayed'
    );
  }

  validateUpsellButtonText(section, expectedText) {
    let desiredSection = this.getDesiredSection(section);
    let actualText = $(desiredSection).getText();
    assert.equal(
      actualText,
      expectedText,
      'The text for the ' + section + ' is incorrect'
    );
  }

  validateCarUpsellText(expectedText) {
    let actualText = $(confirmationPageCarUpsellText).getText();
    assert.equal(actualText, expectedText, 'The Car Upsell text is incorrect');
  }

  clickUpsellButton(section) {
    let desiredSection = this.getDesiredSection(section);
    $(desiredSection).click();
  }

  validateManageTravelHotelTitleIsDisplayed() {
    browser.pause(8000);
    $(
      "//h1[contains(text(), 'Bundle Air + Hotel and Save!')]"
    ).waitForDisplayed({ timeout: 20000 });
    assert.isTrue(
      $("//h1[contains(text(), 'Bundle Air + Hotel and Save!')]").isDisplayed(),
      'The Manage Travel Hotel Page title is not displayed'
    );
  }

  validateManageTravelCarTitleIsDisplayed() {
    browser.pause(8000);
    $("//h1[contains(text(), 'Getting Around')]").waitForDisplayed({
      timeout: 20000,
    });
    assert.isTrue(
      $("//h1[contains(text(), 'Getting Around')]").isDisplayed(),
      'The Manage Travel Getting Around title is not displayed'
    );
  }

  validateUpsellSectionIsNotDisplayed(section) {
    let desiredSection = this.getDesiredSection(section);
    assert.isFalse(
      $(desiredSection).isDisplayed(),
      `The ${section} Upsell section is displayed, but should not be`
    );
  }
  validateConfirmationPageHotelSectionName(hotelSectionTitle) {
    assert.equal(
      $(confirmationPageHotelSectionName).getText(),
      hotelSectionTitle,
      `The name of the hotel section should be ${hotelSectionTitle} but it is not`
    );
  }

  validateHotelSectionItemText(item, expectedItemText) {
    let formattedItem = this.getFormattedItem(item);
    let actualItemText = $(
      `[data-hook='confirmation-page-booked-hotel_${formattedItem}']`
    ).getText();
    assert.equal(
      actualItemText,
      expectedItemText,
      `The text of ${item} in not correct`
    );
  }

  validateHotelSectionItemDisplayed(item) {
    let formattedItem = this.getFormattedItem(item);
    let actualItemText = $(
      `[data-hook='confirmation-page-booked-hotel_${formattedItem}']`
    );
    assert.isTrue(
      actualItemText.isDisplayed(),
      'Validation Failed: Item is not displayed'
    );
  }

  validateConfirmationPageHotelName() {
    let actualHotelName = $(confirmationPageHotelName).getText();
    let expectedHotelName = getValueCollectorMap('hotelNameKey');
    assert.equal(
      actualHotelName,
      expectedHotelName,
      'The name of the Hotel is incorrect.'
    );
  }

  validateConfirmationPageHotelCheckinLabelAndData() {
    let actualCheckInLabel = $(confirmationPageHotelCheckInLabel).getText();
    let actualCheckInDate = $(confirmationPageHotelCheckInDate).getText();
    let expectedCheckInDate = getValueCollectorMap('hotelCheckInDateKey');
    assert.equal(
      actualCheckInLabel,
      'Check-in:',
      'The Check In label is incorrect'
    );

    assert.equal(
      actualCheckInDate,
      expectedCheckInDate,
      'The Check In date is incorrect'
    );
  }

  validateConfirmationPageHotelCheckoutLabelAndData() {
    let actualCheckOutLabel = $(confirmationPageHotelCheckOutLabel).getText();
    let actualCheckOutDate = $(confirmationPageHotelCheckOutDate).getText();
    let expectedCheckOutDate = getValueCollectorMap('hotelCheckOutDateKey');
    assert.equal(
      actualCheckOutLabel,
      'Checkout:',
      'The Check Out label is incorrect'
    );
    assert.equal(
      actualCheckOutDate,
      expectedCheckOutDate,
      'The Check Out date is incorrect'
    );
  }

  validateConfirmationPageGuestsAndRooms(expectedGuestsAndRooms) {
    let actualGuestsAndRooms = $(confirmationPageHotelGuestsAndRooms).getText();
    assert.equal(
      actualGuestsAndRooms,
      expectedGuestsAndRooms,
      'The Hotel number of Rooms or Guest is incorrect'
    );
  }

  verifyConfirmationPageHotelRoomName() {
    let actualHotelRoomName = $(confirmationPageHotelRoomName).getText();
    let expectedHotelRoomName = getValueCollectorMap('hotelRoomNameKey');

    assert.equal(
      actualHotelRoomName,
      expectedHotelRoomName,
      'The Hotel Room name is incorrect'
    );
  }

  validateConfirmationPageHotelDays(expectedNumberOfNights) {
    let actualNumberOfNights = $(confirmationPageHotelNights).getText();
    assert.equal(
      actualNumberOfNights,
      expectedNumberOfNights,
      'The Hotel number of Nights is incorrect'
    );
  }

  validateInstantCreditPayment() {
    let actualText = $(confirmationPagePaidByText).getText();
    let expectedText = `Paid by Adult One with Instant Credit Allegiant World Mastercard ending in ****0501. `;

    assert.equal(
      actualText,
      expectedText,
      'The instant credit payment message on the Confirmation Page is incorrect.'
    );
  }

  validatePaidWithUpliftMessage() {
    let actualText = $(confirmationPagePaidByText).getText();
    assert.equal(
      actualText,
      'Paid by Arthur Davis with Uplift. ',
      'The Paid with Uplift message is incorrect or missing.'
    );
  }

  collectConfirmationNumber() {
    $(confirmItnNumber).waitForDisplayed();
    collect('itnKey', $(confirmItnNumber).getText());
  }

  clickItn() {
    $(confirmItnNumber).waitForDisplayed();
    $(confirmItnNumber).scrollIntoView({
      block: 'center',
      inline: 'start',
    });
    $(confirmItnNumber).click();
  }

  clickLoggedInUserDropdown() {
    browser.pause(3000);
    $(loggedInUser).click();
  }

  clickMyAccount() {
    browser.pause(3000);
    $(myAccount).click();
  }
validateCheckInButtonIsNotDisplayed(){
	assert.isFalse($(checkinButton).isExisting(), 'The Check-in button should not be displayed.');
}
clickLoggedInUserDropdown(){
	browser.pause(3000);
	$(loggedInUser).click();
}
clickMyAccount(){
	browser.pause(3000);
	$(myAccount).click();
}
clickTripMenu(){
	browser.pause(3000);
	$(trip).click();
}
clickPointsMenu(){
  browser.pause(3000);
	$(point).click();
  browser.pause(20000);
}
logOutFromConfirmationPage(){
  browser.pause(3000);
  $(loggedInUser).click();
  browser.pause(3000);
	$(logout).click();
}
clickLogInButton(){
  browser.pause(3000);
  $(loginButton).click();
}
verifyClaimMyPointsSectionNotDisplayed(){
  assert.equal($(claimMyPointsSection).isDisplayed(),
  false,'Claim my points section is displayed');
}
verifyAllwaysEstimatedEarnPointsContentsLine1(){
  this.waitForDisplayed($(claimMyPointsSection), 5000);
    assert.equal($(allwaysEarningPointsAllwaysIcon).isDisplayed(),
  true,'Allways icon is not displyed in allways member section');
  assert.equal($(allwaysEarningPointsContentsLine1).getText(),
  'It’s not too late! Become an Allways member and','Allways Member Contents Line1 is not displyed');
}
verifyAllwaysEstimatedEarnPointsContentsLine2(){
  // assert.include($(allwaysEarningPointsContentsLine2).getText(),
  // 'Claim Your','Allways Member Contents Line2 is not displyed');
  let claimMyPoints = getValueCollectorMap('estimationPoints');
  assert.equal($(allwaysEarningPointsContentsLine2).getText(),
  'Claim Your '+claimMyPoints+' Points!','Claim My points value is not correct');
}
verifyAllwaysEstimatedEarnPointsContentsLine3(){
  assert.equal($(allwaysEarningPointsContentsLine3).getText(),
  'Allways Loyalty Points from this purchase','Allways Member Contents Line3 is not displyed');
}
verifyAllwaysEstimatedEarnPointsContentsLine4(){
    assert.equal($(allwaysEarningPointsContentsLine4).getText(),
  'New Member Bonus Points','Allways Member Contents Line4 is not displyed');
}
verifyAllwaysEstimatedEarnPointsContentsLine5(){
  assert.equal($(allwaysEarningPointsContentsLine5).getText(),
  'Total Points','Allways Member Contents Line5 is not displyed');
}
verifyClaimMyPointsButton(){
  browser.execute('window.scrollBy(0, -window.innerHeight)');
    assert.equal($(claimMyPointsButton).isDisplayed(),
  true,'Claim My Points button is not displyed in allways member section');
}
clickClaimMyPointsButton(){
  browser.pause(3000);
	$(claimMyPointsButton).click();
}
verifyThankYouMessageForClaimMyPoints(){
  browser.execute('window.scrollBy(0, -window.innerHeight)');
  assert.equal($(claimMyPointsSection).isDisplayed(),
  true,'Thank you message section for claim my points is displayed');
  assert.include($(claimMyPointsThankYouMessage).getText(),
  'Thank you for your interest in becoming an Allways','Thank you message is not displyed correctly');
}
verifyResendEmailButton(){
  assert.equal($(resendEmailButton).isDisplayed(),
  true,'Resend Email button is not displyed');
}
verifyInlineNoteAfterClickOnResendEmail(){
  browser.pause(3000);
	$(resendEmailButton).click();
  assert.include($(inlineNoteAfterSuccessfullyEmailSent).getText(),
  'An email has been sent to','Inline note after email sent successfull is not displyed correctly');
}
verifyBannerMessage(){
  browser.execute('window.scrollBy(0, -window.innerHeight)');
  assert.equal($(confirmationPageBannerMessage).isDisplayed(),
  true,'Confirmation page account exist banner is not displyed');
  assert.include($(confirmationPageBannerMessage).getText(),
  'An account already exists with email','Confirmation page account exist banner is not correct');
}
clickHereFromMessageBanner(){
  browser.pause(3000);
	$(clickHereFromMessageBanner).click();
}
enterPassword(accountStatus){
  switch (accountStatus) {
    case 'active':
      let password = getValueCollectorMap('password');
  this.pause(3000);
  $(loginPassword).click();
  $(loginPassword).setValue(password);
  this.pause(3000);
      break;
      case 'suspended':
        this.pause(3000);
    $(loginPassword).click();
    $(loginPassword).setValue('Test@123');
    this.pause(1000);
     case 'closed':
      this.pause(3000);
      $(loginPassword).click();
      $(loginPassword).setValue('Test@123');
      this.pause(1000);
   break;
    default:
      assert.fail('Existing Password Enter validation failed');
  }
}
clickSignInButton(){
  $(signInButton).scrollIntoView();
  $(signInButton).click();
}
verifyDestinationAdvert(user){
  switch (user) {
    case 'cardholder':
      this.waitForDisplayed($(cardholderDestinationAdvertBanner), 5000);
     assert.equal($(cardholderDestinationAdvertBanner).isDisplayed(),
  true,'Card holder destination advert banner is not displyed');
      break;
      case 'noncardholder':
        this.waitForDisplayed($(nonCardholderDestinationAdvertBanner), 5000);
        assert.equal($(nonCardholderDestinationAdvertBanner).isDisplayed(),
     true,'Non card holder destination advert banner is not displyed');
     break;
    default:
      assert.fail('Destination advert validation failed');
  }
}

verifyDestinationAdvertClickable(clickable){
  browser.execute('window.scrollBy(0, -window.innerHeight)');
  switch (clickable) {
    case 'true':
      this.waitForDisplayed($(nonCardholderDestinationAdvertBanner), 5000);
     assert.equal($(nonCardholderDestinationAdvertBanner).isClickable(),
  true,'Non Card holder destination advert banner is not clickable');
      break;
      case 'false':
        this.waitForDisplayed($(cardholderDestinationAdvertBanner), 5000);
        $(cardholderDestinationAdvertBanner).click();
        assert.notInclude(browser.getUrl(),
      "secure.bankofamerica.com","User is redirected to the bofa credit card application page");
     break;
    default:
      assert.fail('Destination advert clickable validation failed');
  }
}
clickDestinationAdvert(){
  browser.pause(3000);
	$(nonCardholderDestinationAdvertBanner).click();
}
verifyBofaApplicationPageLink(){
  let windowsName = browser.getWindowHandles().length;
  this.switchToTabNumber(windowsName -1);
  this.pause(5000);
      assert.include(browser.getUrl(),
      "secure.bankofamerica.com","User is not redirected to the bofa credit card application page");
      browser.closeWindow();
      windowsName = browser.getWindowHandles().length;
      this.switchToTabNumber(windowsName -1);
   }
}

export default new ConfirmationPage();
export { itinerary };
