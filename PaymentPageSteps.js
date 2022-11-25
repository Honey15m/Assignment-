import { Given, When, Then, And } from '@cucumber/cucumber';
import PaymentPage from '../pageobjects/PaymentPage.js';
import HomePage from '../pageobjects/HomePage';
import CarsPage from '../pageobjects/CarsPage';
import BagsPage from '../pageobjects/BagsPage';
import HotelsPage from '../pageobjects/HotelsPage';
import LoginForm from '../generic/pageobjects/LoginForm';
import GenerateVouchers from '@g4/prova/src/helpers/generate-vouchers';
import { collect } from '@g4/prova/src/helpers/collector';

let generatedVoucher;

/*<<<<<<<<<<<<<<<<<-----------Given Steps here----------->>>>>>>>>>>>>>>>>>>>>*/
When(/^I am on the Payment page and complete my booking$/, function() {
  PaymentPage.fillCardDetails();
  PaymentPage.fillBillingAddressDetails();
  PaymentPage.selectPurchaseMyTrip();
});

When(/^I am on the Payment page and complete my booking using ([^"]*) and ([^"]*)$/, function(cardNumber, cvv) {
  PaymentPage.fillCustomCardDetails(cardNumber, cvv);
  PaymentPage.fillBillingAddressDetails();
  PaymentPage.collectCardHolderName();
  PaymentPage.clickPurchaseMyTrip();
});

When(/^I am on the Payment page and complete my booking without using a card$/, function() {
  PaymentPage.fillBillingAddressDetails();
  PaymentPage.clickPurchaseMyTrip();
});

Given(/^I click on the burger menu$/, () => {
  PaymentPage.clickBurgerMenu();
});
/*<<<<<<<<<<<<<<<<<-----------When Steps here----------->>>>>>>>>>>>>>>>>>>>>*/
When(/^I am on payment page I expect payment page anchor to top$/, function() {
  PaymentPage.validatePaymentPageAnchorToTop();
});

When(/^I am on payment page I enter all required card details$/, function() {
  PaymentPage.fillCardDetails();
});

When(/^I am on payment page I enter "(.+)" card details$/, function(cardType) {
  PaymentPage.formsOfPaymentCardDetails(cardType);
});

When(
  /^I am on Payment page I enter all required billing address details$/,
  function() {
    PaymentPage.fillBillingAddressDetails();
  }
);
When(
  /^I am on Payment page I enter billing address firstname lastname$/,
  function() {
    PaymentPage.fillBillingAddressFirstNameLastName();
  }
);
When(
  /^I am on Payment page I collect the loyalty rewards points$/,
  function() {
    PaymentPage.collectLoyaltyRewardsPoints();
  }
);

When(/^I am on Payment page I select Purchase my trip button$/, function() {
  PaymentPage.selectPurchaseMyTrip();
});

When(/^I login in with a valid Loyalty Account$/, function() {
  PaymentPage.fillLoyalty();
});

When(/^I should see a loyalty section filled in$/, function() {
  PaymentPage.loyaltySection();
});

When(
  /^I am on the payment page I validate user name is correct on header$/,
  function() {
    PaymentPage.validateLoginName();
  }
);

When(
  /^I am on the payment page I should see billing prepopulated$/,
  function() {
    PaymentPage.validateBillingPopulated();
  }
);

When(
  /^I am on the payment page and I enter a non-loyalty email address$/,
  function() {
    PaymentPage.fillNonLoyalty();
  }
);

When(/^I sign in as a Loyalty member$/, function() {
  HomePage.fillLoyaltyHomePage();
});

When(
  /^I am on the payment page and I enter a invalid email address a valid email password$/,
  function() {
    PaymentPage.fillInvalidEmail();
  }
);

When(
  /^I am on the payment page and I enter a valid email address a invalid password$/,
  function() {
    PaymentPage.fillInvalidPassword();
  }
);

When(/^I am on the payment page and I evaluate error message$/, function() {
  PaymentPage.validateUserEmail();
});

When(
  /^I am on the payment page and I should not see billing or payment section pre-populated$/,
  function() {
    PaymentPage.validatePaymentEmpty();
  }
);

When(/^I should not see a loyalty section filled in$/, function() {
  PaymentPage.validateLoyaltyNotShown();
});

When(/^I am on payment page and I click on shopping cart$/, function() {
  CarsPage.clickOnHeaderCartButton();
});

When(/^I am on the Payment Page I click 'Log in'$/, () => {
  PaymentPage.clickLogIn();
});

When(/^I am on the Payment Page I click on the hamburger menu$/, function() {
  PaymentPage.clickBurgerMenu();
});

When(/^I am on the Payment page I click ‘Forgot your password\?’$/, function() {
  PaymentPage.clickForgotLink();
});

When(
  /^I am on Payments page and I verify payment page shown correctly$/,
  () => {
    PaymentPage.verifypaymentPageTitle();
  }
);

When(/^I am on the Payment Page I click ‘log in’$/, function() {
  PaymentPage.clickLogIn();
});

When(
  /^I am on Payments page and I click on the Trip Summary Expando$/,
  function() {
    PaymentPage.clickTripSummaryExpando();
  }
);

When(
  /^I am on Payments page and I click on the Trip Summary "(.+)" Section Edit link$/,
  function(section) {
    PaymentPage.clickTripSummaryEditLinks(section);
  }
);

When(
  /^I am on Payments page and I collect the total sum in the Travelers section$/,
  function() {
    PaymentPage.collectTripSummaryTravelersTotalSum();
  }
);

When(/^I am on Payment Page I click ICE Modal$/, function() {
  PaymentPage.clickCloseICEButton();
});

When(
  /^I am on Payment Page I apply the following promo code: "(.+)"$/,
  function(promoCode) {
    PaymentPage.applyPromoCode(promoCode);
  }
);

When(
  /^I am on Payment page and I fill in the voucher email field with "(.+)"$/,
  function(voucherEmail) {
    PaymentPage.fillVoucherEmailField(voucherEmail);
  }
);

When(/^I am on Payment page and I click the voucher Apply button$/, function() {
  PaymentPage.clickApplyVoucherButton();
});

When(/^I am on payment page I click Allegiant Voucher Expando$/, function() {
  PaymentPage.clickAllegiantVoucherExpando();
});

When(/^I am on payment page I click Allegiant Promo Expando$/, function() {
  PaymentPage.clickAllegiantPromoExpando();
});

When(
  /^I am on Payment page and I generate a voucher with the following params:$/,
  async function(dataTable) {
    let voucherData = dataTable.rowsHash();
    generatedVoucher = await GenerateVouchers.generateVoucher(voucherData);
    collect('generatedVoucherTextKey', generatedVoucher);
  }
);

When(
  /^I am on Payment page and I fill in the voucher field with the generated voucher$/,
  function() {
    PaymentPage.fillVoucherFieldWithGeneratedVoucher(generatedVoucher);
  }
);

When(
  /^I am on Payment page and I fill in the voucher field with "(.+)"$/,
  function(voucherData) {
    PaymentPage.fillVoucherFieldWithCustomData(voucherData);
  }
);

When(
  /^I am on Payment page and I close the ICE overlay if it is displayed$/,
  function() {
    PaymentPage.verifyIfIceOverlayBannerIsDisplayedAndCloseIt();
  }
);

When(
  /^I am on Payment page and I collect Uplift pay monthly value$/,
  function() {
    PaymentPage.collectUpliftPayMonthlyValue();
  }
);

When(
  /^I am on Payment page and I click on Uplift Pay Monthly radio button$/,
  function() {
    PaymentPage.clickPayMonthlyUplift();
  }
);

When(
  /^I am on Payment page and I fill the Check My Rate form with the required data$/,
  function() {
    PaymentPage.fillCheckMyRateForm();
  }
);

When(
  /^I am on Payment page and I fill the Uplift card details with the required data$/,
  function() {
    PaymentPage.completeUpLiftCardDetails();
  }
);

When(
  /^I am on Payment page and I click on Review and Accept Terms and Conditions checkbox$/,
  function() {
    PaymentPage.clickAgreeWithTermsAndConditions();
  }
);

When(
  /^I am on Payment page and I generate a CR voucher with "(.+)" percent value from Trip Total$/,
  async function(percentAmount) {
    let voucherAmount = await PaymentPage.amountCalculated(percentAmount).toFixed(2);
    let voucherData = {
      voucherType: 'CR',
      email: 'voucher.email@allegiantair.com',
      amount: voucherAmount,
      firstName: 'FirstName',
      lastName: 'LastName',
      itn: '',
      date: '',
    };
    generatedVoucher = await GenerateVouchers.generateVoucher(voucherData);
  }
);

When(
  /^I am on Payment page and I click on Remove voucher button applied (.+)$/,
  function(voucherPosition) {
    PaymentPage.removeVoucher(voucherPosition);
  }
);

When(
  /^I am on Payment Page and I click on the ICE banner Apply Button$/,
  function() {
    PaymentPage.collectManifestID();
    PaymentPage.collectEndpoint();
    PaymentPage.clickIceBannerApplyButton();
  }
);

When(
  /^I am on Payment Page and I apply for IC$/,
  function() {
    PaymentPage.collectTripSummaryValue();
    PaymentPage.collectManifestID();
    PaymentPage.collectEndpoint();
    PaymentPage.clickIcApplyButton();
  }
);

When(
  /^I open the Instant Credit Local Mock URL in a new tab, using the manifest ID of the current booking$/,
  function() {
    PaymentPage.openInstantCreditMockForm();
  }
);

When(
  /^I am on the Instant Credit Local Mock and I fill in the form using amount "(.+)" and "(.+)" state$/,
  function(amount, state) {
    PaymentPage.fillInInstantCreditForm(amount, state);
  }
);

When(
  /^I am on the Instant Credit Local Mock and I fill in the form using amount less than total trip and "(.+)" state$/,
  function(state) {
    PaymentPage.fillInInstantCreditFormWithCalculatedValue(state);
  }
);

When(
  /^I am on the Instant Credit Local Mock and I click submit$/,
  function() {
    PaymentPage.clickInstantCreditMockSubmitButton();
  }
);

When(
  /^I am on the Instant Credit Local Mock and I click Back button$/,
  function() {
    PaymentPage.clickInstantCreditMockBackButton();
  }
);

When(
  /^I am on Payment page I fill in the "(.+)" Payment page field with "(.+)"$/,
  function(field,data) {
    PaymentPage.enterDataByFieldName(field,data);
  }
);

When(
  /^I am on Payment page I validate that card icons status is correctly$/,
  function(dataTable) {
    let cardDetails = dataTable.hashes();
    PaymentPage.validateCardIconsStatus(cardDetails);
  }
);

When(
  /^I am on Payment Page and I complete the payment using Instant Credit$/,
  function() {
    PaymentPage.fillBillingAddressDetails();
    PaymentPage.selectPurchaseMyTrip();
  }
);

Then(
  /^I am on Payment Page and I expect that the ICE warning is displayed and reads "([^"]*)"$/,
  function(warningText) {
    PaymentPage.validateIceWarningText(warningText);
  }
);

Then(
  /^I am on Payment Page and I expect that the ICE warning is not displayed$/,
  function() {
    PaymentPage.validateIceWarningIsNotDisplayed();
  }
);

When(
  /^I am on Payment page and I click the voucher remove button$/,
  function() {
    PaymentPage.clickRemoveVoucherButton();
  }
);

When(
  /^I am on Payment page and I collect the value of the applied voucher$/,
  function() {
    PaymentPage.collectAppliedVoucherValue();
  }
);

When(/^I am on Payment page and I click on the Cars breadcrumb$/, function() {
  PaymentPage.clickCarsBreadcrumb();
})

When(/^I am on Payment page and I wait for page to load$/, function() {
  PaymentPage.waitForPageToLoad();
})

When(/^I am on Payment page and I to the Hotel Results page using Breadcrumb$/, function() {
  PaymentPage.clickHotelsBreadcrumb();
})

When(/^I am on Payment page and I click edit Hotel link from Trip Summary$/, function() {
  PaymentPage.clickEditHotelTripSummaryButton();
})

/*<<<<<<<<<<<<<<<<<-----------Then Steps here----------->>>>>>>>>>>>>>>>>>>>>*/

Then(/^I am on Payments page and cars title is shown in breadcrumb$/, () => {
  PaymentPage.verifyCarsBreadcrumb();
});

Then(/^I am on the Payment Page I validate modal is closed$/, function() {
  PaymentPage.verifypaymentPageTitle();
});

Then(
  /^I am on Payments page and I expect that Trip Summary is "(.+)"$/,
  expectedState => {
    PaymentPage.verifyTripSummaryState(expectedState);
  }
);

Then(
  /^I am on Payments page and I expect that the Bundle in the Trip Summary is "(.+)"$/,
  function(bundleType) {
    PaymentPage.validatePaymentPageTripSummaryBundleType(bundleType);
  }
);

Then(
  /^I am on Payments page and I expect that the "(.+)" is displayed in the Trip Summary$/,
  function(element) {
    PaymentPage.validateTripSummaryElementIsDisplayed(element);
  }
);

Then(
  /^I am on Payments page and I expect that the "(.+)" is not displayed in the Trip Summary$/,
  function(element) {
    PaymentPage.validateTripSummaryElementDoesNotExist(element);
  }
);

Then(
  /^I am on the Bundles page and I expect that the "(.+)" is selected$/,
  function(bundleType) {
    PaymentPage.verifyCorrectBundleIsSelectedOnBundlesPage(bundleType);
  }
);

Then(
  /^I am on payment page I verify decline amount adding extras$/,
  function() {
    var IsDeclined = PaymentPage.validateDeclinedAmount();
   
    if (IsDeclined) {
      BagsPage.addExtras();
      BagsPage.clickContinueButton();
      HotelsPage.clickContinueButton()
      CarsPage.clickContinueButton();
    }
  }
);
Then(
  /^I am on payment page I verify decline amount after saving amount adding extras$/,
  function() {
    var IsDeclined = PaymentPage.validateDeclinedAmountAfterSavingAmount();
    if (IsDeclined) {
      BagsPage.addExtras();
      BagsPage.clickContinueButton();
      HotelsPage.clickNoThanksButton()
      CarsPage.clickNoThanksButton();
    }
  }
);

Then(
  /^I am on Payments page and I expect that the Flights section header is "(.+)"$/,
  function(expectedText) {
    PaymentPage.verifyTripSummaryFlightsHeaderText(expectedText);
  }
);

Then(
  /^I am on Payments page and I expect that the departing cities for BLI LAS are "(.+)"$/,
  function(expectedCityPair) {
    PaymentPage.verifyTripSummaryDepartingMarkets(expectedCityPair);
  }
);

Then(
  /^I am on Payments page and I expect that the returning cities for LAS BLI are "(.+)"$/,
  function(expectedCityPair) {
    PaymentPage.verifyTripSummaryReturningMarkets(expectedCityPair);
  }
);

Then(
  /^I am on Payments page and I expect that the Round Trip discount banner is displayed and has positive value$/,
  function() {
    PaymentPage.verifyTripSummaryRoundTripDiscountIsShown();
  }
);

Then(
  /^I am on Payments page and I expect that "(.+)" is displayed and has positive value$/,
  function(tax) {
    PaymentPage.verifyTripSummaryFeesAreDisplayed(tax);
  }
);

Then(
  /^I am on Payments page and I expect that the Pick-up information is present$/,
  function() {
    PaymentPage.verifyTripSummaryCarPickUpIsDisplayed();
  }
);

Then(
  /^I am on the Responsive Payment Page I log out then log in using stored credentials$/,
  function() {
    LoginForm.logOutResponsive();
    PaymentPage.signInExistingCredentials();
    LoginForm.validateHelloUserResponsive();
  }
);

Then(
  /^I am on Payments page and I expect that the Drop-off information is present$/,
  function() {
    PaymentPage.verifyTripSummaryCarDropOffIsDisplayed();
  }
);

Then(
  /^I am on the Payment Page I log out then log in using stored credentials$/,
  function() {
    LoginForm.clickLogOut();
    PaymentPage.signInExistingCredentials();
    LoginForm.validateHelloUser();
  }
);

Then(
  /^I am on Payments page and I expect that the "(.+)" contains the text "(.+)"$/,
  function(element, text) {
    PaymentPage.verifyTripSummaryText(element, text);
  }
);

Then(
  /^I am on Payments page and I expect that the total sum in the Travelers section is unchanged$/,
  function() {
    PaymentPage.verifyTripSummaryTravelersSumIsCorrect();
  }
);

Then(
  /^I am on Payments page and I expect that the IATA codes for the Seats "(.+)" market are "(.+)"$/,
  function(segment, iataCodes) {
    PaymentPage.verifyTripSummarySeatsIataCodes(segment, iataCodes);
  }
);

Then(
  /^I am on Payments page and I expect that the "(.+)" seat ID matches the previously selected seat$/,
  function(segment) {
    PaymentPage.verifyTripSummarySeatIDs(segment);
  }
);

Then(
  /^I am on Payments page and I expect that the "(.+)" seat price matches the price from the Seats Page$/,
  function(segment) {
    PaymentPage.verifyTripSummarySeatPrices(segment);
  }
);

Then(
  /^I am on Payments page and I expect that the total price of the seats is correct$/,
  function() {
    PaymentPage.verifyTripSummaryTotalSeatPrice();
  }
);

Then(
  /^I am on Payments page and I expect that the Seat prices are listed as INCLUDED$/,
  function() {
    PaymentPage.verifyTripSummarySeatsIncluded();
  }
);

Then(
  /^I am on Payments page and I expect that the name of the Hotel in the Trip Summary is correct$/,
  function() {
    PaymentPage.verifyTripSummaryHotelName();
  }
);

Then(
  /^I am on Payments page and I expect that the Hotel Check In and Check Out dates in the Trip Summary are correct$/,
  function() {
    PaymentPage.verifyTripSummaryCheckInCheckOutDatesAndLabels();
  }
);

Then(
  /^I am on Payments page and I expect that the Room Name in the Trip Summary matches the name of the selected Room$/,
  function() {
    PaymentPage.verifyTripSummaryHotelRoomName();
  }
);

Then(
  /^I am on Payments page and I expect that the number of guests and rooms is "(.+)"$/,
  function(expectedRoomsAndAdults) {
    PaymentPage.verifyTripSummaryGuestsAndRooms(expectedRoomsAndAdults);
  }
);

Then(
  /^I am on Payments page and I expect that the IATA codes for the Bags "(.+)" market are "(.+)"$/,
  function(segment, iataCodes) {
    PaymentPage.verifyTripSummaryBagsIataCodes(segment, iataCodes);
  }
);

Then(
  /^I am on Payments page and I expect that the "(.+)" Checked Bags price matches the price from the Bags page$/,
  function(segment) {
    PaymentPage.verifyTripSummaryCheckedBagsLabelAndPrice(segment);
  }
);

Then(
  /^I am on Payments page and I expect that the "(.+)" Carry-on Bags price matches the price from the Bags page$/,
  function(segment) {
    PaymentPage.verifyTripSummaryCarryOnBagsLabelAndPrice(segment);
  }
);

Then(
  /^I am on Payments page and I expect that the total price of the bags is correct$/,
  function() {
    PaymentPage.verifyTripSummaryTotalBagsPrice();
  }
);

Then(
  /^I am on Payments page and I expect that the Bag prices are listed as INCLUDED$/,
  function() {
    PaymentPage.verifyTripSummaryBagsIncluded();
  }
);

Then(
  /^I am on Payments page and I expect that the IATA codes for the Extras "(.+)" market are "(.+)"$/,
  function(segment, iataCodes) {
    PaymentPage.verifyTripSummaryExtrasIataCodes(segment, iataCodes);
  }
);

Then(
  /^I am on Payments page and I expect that the "(.+)" Priority Access price matches the price from the Bags page$/,
  function(segment) {
    PaymentPage.verifyTripSummaryPriorityAccessLabelAndPrice(segment);
  }
);

Then(
  /^I am on Payments page and I expect that the Tripflex price for traveler "(.+)" is correct$/,
  function(traveler) {
    PaymentPage.verifyTripSummaryTripFlexLabelAndPrice(traveler);
  }
);

Then(
  /^I am on Payments page and I expect that the "(.+)" Pet in Cabin price matches the price from the Bags page$/,
  function(segment) {
    PaymentPage.verifyTripSummaryPetInCabinLabelAndPrice(segment);
  }
);

Then(
  /^I am on Payments page and I expect that the total price of the extras is correct$/,
  function() {
    PaymentPage.verifyTripSummaryTotalExtrasPrice();
  }
);

Then(
  /^I am on Payments page and I expect that the TripFlex and Priority Access prices are listed as INCLUDED$/,
  function() {
    PaymentPage.verifyTripSummaryExtrasIncluded();
  }
);

Then(
  /^I am on Payment Page and I expect the error message for the promo field to be: "(.+)"$/,
  function(promoErrorMessage) {
    PaymentPage.verifyPromoFieldError(promoErrorMessage);
  }
);

Then(
  /^I am on Payments page and I expect that the name of adult 1 in the Trip Summary is correct$/,
  function() {
    PaymentPage.verifyAdult1NameIsCorrect();
  }
);
When(/^I am on payment page I expect ICE overlay popup and Banner should not displayed$/, function() {
  PaymentPage.verifyIcePopUpAndBanner();
});
When(/^I am on payment page I expect ICE overlay popup$/, function() {
  PaymentPage.validateICEOverlayPopup();
});
When(/^I am on Payment page I expect future satement credit amount is 100 in the "(.+)"$/, function(ice) {
  PaymentPage.validateICEFutureSatementCreditAmount(ice);
});
When(/^I am on payment page I expect ICE overlay header is "(.+)"$/, function(popupHeader) {
  PaymentPage.validateICEOverlayHeader(popupHeader);
});
When(/^I am on Payment Page I close ICE Modal$/, function() {
  PaymentPage.clickCloseICEButton();
});


Then(
  /^I am on Payment page and I expect that the error message for the voucher field is: "(.+)"$/,
  function(voucherErrorMessage) {
    PaymentPage.validateVoucherErrorMessage(voucherErrorMessage);
  }
);

Then(
  /^I am on Payments page and I expect that the credit card image is displayed on the ICE overlay$/,
  function() {
    PaymentPage.validateIceOverlayImageIsDisplayed();
  }
);

Then(
  /^I am on Payment page and I expect that the error message for the voucher email field is: "(.+)"$/,
  function(voucherEmailFieldErrorMessage) {
    PaymentPage.validateVoucherEmailFieldErrorMessage(
      voucherEmailFieldErrorMessage
    );
  }
);

Then(
  /^I am on Payments page and I expect that You Pay Today value is correct on the ICE overlay$/,
  function() {
    PaymentPage.validateIceOverlayYouPayTodayValue();
  }
);

Then(
  /^I am on Payments page and I expect that the Apply now button is displayed on the ICE overlay$/,
  function() {
    PaymentPage.validateIceOverlayApplyNowIsDisplayed();
  }
);

Then(
  /^I am on Payments page and I expect that the instant credit banner is displayed$/,
  function() {
    PaymentPage.validateIceBannerIsDisplayed();
  }
);

Then(
  /^I am on Payments page and I expect that the instant credit image is displayed in the ICE banner$/,
  function() {
    PaymentPage.validateIceBannerImageIsDisplayed();
  }
);
When(/^I am on payment page I expect ICE banner header is "(.+)"$/, function(bannerHeader) {
  PaymentPage.validateICEBannerHeader(bannerHeader);
});
Then(
  /^I am on Payments and I expect that You Pay Today value from ICE banner is correct$/,
  function() {
    PaymentPage.validateIceBannerYouPayTodayValue();
  }
);

Then(
  /^I am on Payments page and I expect that Total Trip Cost is correct on the ICE overlay$/,
  function() {
    PaymentPage.verifyIceOverlayTotalTripCostValue();
  }
);
Then(
  /^I am on payment page I expect Zero or Positive total trip cost amount in the ICE overlay popup$/,
  function() {
    PaymentPage.verifyIceOverlayTotalTripCostValue();
  }
);
Then(
  /^I am on Payments page and I expect that Total Trip Cost from ICE banner is correct$/,
  function() {
    PaymentPage.verifyIceBannerTotalTripCostValue();
  }
);
Then(
  /^I am on payment page I expect Zero or Positive total trip cost amount in the ICE banner$/,
  function() {
    PaymentPage.verifyIceBannerTotalTripCostValue();
  }
);
Then(
  /^I am on Payment page and I validate that Pay Today value is equal with Total After Saving value$/,
  function() {
    PaymentPage.validatePayTodayValueAndTotalAfterSavingAreEqual();
  }
);

Then(
  /^I am on Payment page and I validate that Uplift pay monthly value is updated$/,
  function() {
    PaymentPage.validateUpliftPayMonthlyIsUpdated();
  }
);

Then(
  /^I am on payment page I expect checked bags "(.+)" to be displayed for "(.+)"$/,
  function(checkedBag, segment) {
    PaymentPage.validateCheckedBagCount(checkedBag, segment);
  }
);

Then(
  /^I am on Payment page and I expect that the Name on Card and First and Last name fields are prepopulated with data from the "(.+)" page$/,
  function(page) {
    PaymentPage.validateNameFieldsArePrepopulatedWithData(page);
  }
);

Then(
  /^I am on the Payment page and I expect that card section is populated with a stored card$/,
  function() {
    PaymentPage.validateStoredCardIsUsed();
  }
);

Then(
  /^I am on Payment page and I validate that the booking has Uplift Confirmed status$/,
  function() {
    PaymentPage.validateUpliftConfirmedStatus();
  }
);

Then(
  /^I am on Payment page and I validate that Trip Total is > than 100 and I collect the amount$/,
  function() {
    PaymentPage.validateTotalAndCollectValue();
  }
);

Then(
  /^I am on Payment page and I validate that Pay Today "([^"]*)" displayed$/,
  function(displayedStatus) {
    PaymentPage.validatePayTodayIsOrNotDisplayed(displayedStatus);
  }
);

Then(
  /^I am on Payment page and I validate that Uplift Pay Monthly "([^"]*)" displayed$/,
  function(displayedStatus) {
    PaymentPage.validateUpliftPayMonthlyIsOrNotDisplayed(displayedStatus);
  }
);

Then(
  /^I am on Payment page and I validate that Total After Saving "([^"]*)" than "([^"]*)"$/,
  function(operator, value) {
    PaymentPage.validateTotalAfterSaving(operator, value);
  }
);

Then(/^I am on Payment Page and I expect that the ICE payment option is selected$/,
  function() {
    PaymentPage.validateInstantCreditOptionIsSelected();
  }
);

Then(/^I am on Payment Page and I expect that the ICE details are displayed$/,
  function() {
    PaymentPage.validateIceDetails();
  }
);

Then(/^I am on Payment Page and I expect that the ICE details are not displayed$/,
  function() {
    PaymentPage.validateIceDetailsAreNotDisplayed();
  }
);

When(/^I am on Payment Page and I click on Use New Card button$/,
  function() {
    PaymentPage.clickUseNewCardButton();
  }
);

When(/^I am on Payment Page and I click on card section$/,
  function() {
    PaymentPage.clickOnCardSection();
  }
);

When(/^I am on Payment Page I click 'Use my MyAllegiant Points'$/, function () {
    PaymentPage.clickUseMyAllegiantPoints();
});

Then(/^I am on the Payment Page I verify my address is updated on payment page$/, function () {
  PaymentPage.validateUpdatedAddress();
});
When(/^I am on the Payment page I clear the email textbox$/, function () {
  PaymentPage.clearEmailTextBox();
});
When(/^I am on the payment page I enter my existing "(.+)" email in the email address field$/, function (accountStatus) {
  PaymentPage.enterExistingEmail(accountStatus);
});
When(/^I am on payment page I click on auto opt-in checkbox to uncheck the auto opt-in$/, function () {
  PaymentPage.clcikAutoOptInCheckbox();
});
When(/^I am on payment page I expect auto opt-in checkbox is selected "(.+)"$/, function (checkboxStatus) {
  PaymentPage.verifyAutoOptInCheckbox(checkboxStatus);
});
Then(/^I am on Payment Page and I expect that the Loyalty dropdown is "(.+)"$/,
  function(state) {
    PaymentPage.verifyLoyaltyDropdownState(state);
  }
);

Then(/^I am on Payment Page and I expect that the Loyalty section does not exist$/,
  function() {
    PaymentPage.verifyLoyaltySectionDoesNotExist();
  }
);

Then(/^I am on Payment page I expect the error message for the "(.+)" Payment page field is "(.+)"$/,
  function(field,msg) {
    PaymentPage.verifyValidationErrorForField(field,msg);
  }
);

Then(/^I am on Payment page I expect "(.+)" field is clickable (.+)$/, function(field,clickable) {
  PaymentPage.verifyElementIsClickable(field,clickable);
});

Then(/^I am on Payment page I expect "(.+)" field is displayed (.+)$/, function(field,displayed) {
  PaymentPage.verifyElementIsDisplayed(field,displayed);
});

Then(/^I am on Payment page I expect Balance due values are updated correctly$/, function() {
  PaymentPage.verifyBalanceDueAmountIsUpdatedCorreclty();
});

Then(/^I am on Payment page I validate that the Card Payment details are not displayed on page$/, function() {
  PaymentPage.checkCardHolderNameIsNotDisplayed();
});

Then(/^I am on Payment page I validate that the Uplift Pay Monthly option is checked$/, function() {
  PaymentPage.validateUpliftPayMonthlyIsChecked();
});

Then(/^I am on Payment page and I validate that "([^"]*)" promo code is displayed in the promo field$/, function(promo) {
  PaymentPage.validatePromoCodeName(promo);
});

Then(/^I am on Payment page and "([^"]*)" is displayed in the trip summary$/, function(packageHeading) {
  PaymentPage.validateHotelAndFlightTripSummaryDisplayed(packageHeading);
});
Then(/^I am on payment page I expect "Become an Allways member!" label$/, function() {
  PaymentPage.verifyBecomeAlwaysMemberContentLine1();
});
Then(/^I am on payment page I expect "Claim Your XXXX Points!" label$/, function() {
  PaymentPage.verifyBecomeAlwaysMemberContentLine2();
});
Then(/^I am on payment page I expect "As a member there is no limit to the points you can earn and your points don't expire." label$/, function() {
  PaymentPage.verifyBecomeAlwaysMemberContentLine3();
});
Then(/^I am on payment page I expect "Yes! Claim my points and become an Allways member!" label$/, function() {
  PaymentPage.verifyBecomeAlwaysMemberContentLine4();
});
Then(/^I am on payment page I should not see allways rewards section$/, function() {
  PaymentPage.verifyAllwaysRewardsSectionNotDisplayed();
});
Then(/^I am on payment page I expect "You can earn an estimated total of XXXX points from this purchase!" label$/, function() {
  PaymentPage.verifyEstimatedEarningPointsContentLine1();
});
Then(/^I am on payment page I expect "You will earn a total of XXXX points from this purchase!" label$/, function() {
  PaymentPage.verifyEstimatedEarningPointsContentLine1();
});
Then(/^I am on payment page I expect "Allways Loyalty Points" label$/, function() {
  PaymentPage.verifyEstimatedEarningPointsContentLine2();
});
Then(/^I am on payment page I expect "Allegiant World Mastercard®" label$/, function() {
  PaymentPage.verifyEstimatedEarningPointsContentLine3();
});
Then(/^I am on payment page I expect "Total Points" label$/, function() {
  PaymentPage.verifyEstimatedEarningPointsContentLine4();
});
Then(/^I am on payment page I expect estimation earn points disclaimer$/, function() {
  PaymentPage.verifyEstimatedEarningPointsDisclaimer();
});
Then(/^I am on payment page I expect alternative payment section title "PAYING WITH PROMO,VOUCHERS,AND POINTS"$/, function() {
  PaymentPage.verifyAlternativePaymentSection();
});
Then(/^I am on payment page I expect "Use my Allways™ Points" section$/, function() {
  PaymentPage.verifyUseAllwaysPointSection();
});
Then(/^I am on payment page I expect "Use my Allways™ Points" section is not displayed for suspended user$/, function() {
  PaymentPage.verifySuspendedUserUseAllwaysPointSection();
});
Then(/^I am on payment page I click "Use my Allways™ Points" section$/, function() {
  PaymentPage.clickUseAllwaysPointSection();
});
Then(/^I am on payment page I expect email password fields in "Use my Allways™ Points" section$/, function() {
  PaymentPage.useAllwaysPointsEmailPasswordField();
});
Then(/^I am on payment page I expect SignIn button in "Use my Allways™ Points" section$/, function() {
  PaymentPage.useAllwaysPointsSignInButton();
});
Then(/^I am on payment page I expect Allways Logo in "Use my Allways™ Points" section$/, function() {
  PaymentPage.verifyuseAllwaysPointsAllwaysLogo();
});
Then(/^I am on payment page I expect Allways message "Sign in to use Allways™ Points and book quicker by saving payment details!" in "Use my Allways™ Points" section$/, function() {
  PaymentPage.verifyuseAllwaysPointsAllwaysMessage();
});
Then(/^I am on payment page I expect current balance in "Use my Allways™ Points" section for "(.+)" points balance$/, function(element) {
  PaymentPage.verifyCurrentBalanceLabel(element);
});
Then(/^I am on payment page I expect points slider is not displayed in "Use my Allways™ Points" section for "(.+)" points balance$/, function(element) {
  PaymentPage.verifyuseAllwaysPointsSlider(element);
});
Then(/^I am on payment page I expect points slider is displayed in "Use my Allways™ Points" section for "(.+)" points balance$/, function(element) {
  PaymentPage.verifyuseAllwaysPointsSlider(element);
});
Then(/^I am on payment page I expect amount text box is not displayed in "Use my Allways™ Points" section for "(.+)" points balance$/, function(element) {
  PaymentPage.verifyuseAllwaysPointsAmountTextbox(element);
});
Then(/^I am on payment page I expect amount text box is displayed in "Use my Allways™ Points" section for "(.+)" points balance$/, function(element) {
  PaymentPage.verifyuseAllwaysPointsAmountTextbox(element);
});
Then(/^I am on payment page I expect apply button is not displayed in "Use my Allways™ Points" section for "(.+)" points balance$/, function(element) {
  PaymentPage.verifyuseAllwaysPointsApplyButton(element);
});
Then(/^I am on payment page I expect apply button is displayed in "Use my Allways™ Points" section for "(.+)" points balance$/, function(element) {
  PaymentPage.verifyuseAllwaysPointsApplyButton(element);
});
Then(/^I am on payment page I expect "(.+)" Points Available in the header$/, function(element) {
  PaymentPage.ValidateAvailabelPointsHeader(element);
});
Then(/^I am on Payment Page I apply full points$/, function() {
  PaymentPage.clickApplyPoints();
});



