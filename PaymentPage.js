import { Page } from '@g4/prova';
import { assert } from 'chai';
import { collect, getValueCollectorMap } from '@g4/prova/src/helpers/collector';
import { userEmailId, userPassword } from '../generic/pageobjects/LoginForm';
import Config from '@g4/prova/src/helpers/config';

const spinnerBar = "//span[contains(@data-hook,'spinner')]";
const headerTripTotal = "[data-hook='header-cart-button_price']";
const bagsBreadcrumb = "[data-hook='flights-breadcrumb_item-bags']";
const cardHolderName = "//input[@data-hook='payment-page_card-holder-name']";
const cardNumberInputField = "[data-hook='payment-page_card-number']";
const cardExpirationMonthInput =
  "[data-hook='payment-page_card-expiration-month']";
const cardExpirationYearInput =
  "[data-hook='payment-page_card-expiration-year']";
const cvvInput = "[data-hook='payment-page_card-cvv']";
const streetAddressInput = "[data-hook='payment-page_address-line-1']";
const aptSuiteFloorInput = "[data-hook='payment-page_address-line-2']";
const cityInput = "[data-hook='payment-page_city']";
const stateInput = "[data-hook='payment-page_state']";
const zipCodeInput = "[data-hook='payment-page_zip-code']";
const billingAddress = "[data-hook = 'payment-page_billing_section_title']";
const phoneNumberInput = "[data-hook='payment-page_phone-number']";
const emailAddressInput = "[data-hook='payment-page_email-address']";
const termsAndConditionsCheckbox =
  "[data-hook = 'payment_terms-and-conditions-checkbox_label']";
const purchaseMyTrip = "[data-hook = 'payment-page_continue']";
const confirmationPageTitle = "[data-hook = 'confirmation-page_title']";
const loyaltyLogin = "//input[@placeholder='Type your email address']";
const loyaltyPassword = "//input[@placeholder='Type your password']";
const loyaltySignInButton = "//span[text()='Sign In']";
const loyaltySection = "//li[contains(text(),'Loyalty')]";
const loyaltyProfileName =
  "//button[contains(@data-hook,'header-user-menu-item_hello')]";
const paymentCardTitle = "[data-hook='payment-card-title']";
const signinValidation = "[data-hook='field-error-message_email-address']";
const paymentpurchasebutton = "[data-hook='payment-page_continue']";
const burgerMenuButton = "[data-hook='header-burger-menu-button']";
const logInButton = "[data-hook='header-user-menu-item_log-in']";
const forgotPasswordLink = "//span[contains(text(),'Forgot your password?')]";
const tripSummaryExpando = "[data-hook='payment-page_trip_summary_header']";
const tripSummaryBundleName = "//*[@id='main']//div[2]/span/span/strong";
const bundlesPageTitle = "[data-hook='bundles-page_page-heading']";
const bundlePageBonusBundleSelected =
  "//button[@data-hook='select-tier-2']/span[text()='SELECTED']";
const bundlePageTotalBundleSelected =
  "//button[@data-hook='select-tier-3']/span[text()='SELECTED']";
const tripSummaryFlightHeader =
  "[data-hook='payment-page_trip_summary_content'] [data-hook='cart-item_flight-package_heading']";
const tripSummaryAmount = "[data-hook='payment-page_trip_summary_amount']";
const tripSummaryDepartingMarket =
  "//div[@data-hook='payment-page_trip_summary_content']//span[@data-hook='cart-flight-departing_origin']/..";
const tripSummaryReturningMarket =
  "//div[@data-hook='payment-page_trip_summary_content']//span[@data-hook='cart-flight-returning_origin']/..";
const tripSummaryRoundTripDiscountValue =
  "[data-hook='payment-page_trip_summary_content'] [data-hook='price-breakdown_flight-discount_value']";
const baseTaxTextSelector = "[data-hook='price-breakdown_X']";
const baseTaxValueSelector = "[data-hook='price-breakdown_X_value']";
const tripSummaryCarSectionPickupLabel =
  "//div[@data-hook='payment-page_trip_summary_content']//div[@data-hook='cart-item_vehicle_content']//span[contains(text(),'Pick Up')]";
const tripSummaryCarSectionPickupDate =
  "div[data-hook='payment-page_trip_summary_content'] div[data-hook='cart-item_vehicle_content']>div>div:nth-child(2)>div:nth-child(1)>div:nth-child(2)>div:nth-child(2)>div>span";
const tripSummaryCarSectionPickUpHour =
  "div[data-hook='payment-page_trip_summary_content'] div[data-hook='cart-item_vehicle_content']>div>div:nth-child(2)>div:nth-child(1)>div:nth-child(2)>div:nth-child(2)>span";
const tripSummaryCarSectionDropoffLabel =
  "//div[@data-hook='payment-page_trip_summary_content']//div[@data-hook='cart-item_vehicle_content']//span[contains(text(),'Drop Off')]";
const tripSummaryCarSectionDropoffDate =
  "div[data-hook='payment-page_trip_summary_content'] div[data-hook='cart-item_vehicle_content']>div>div:nth-child(2)>div:nth-child(2)>div:nth-child(2)>div:nth-child(2)>div>span";
const tripSummaryCarSectionDropoffHour =
  "div[data-hook='payment-page_trip_summary_content'] div[data-hook='cart-item_vehicle_content']>div>div:nth-child(2)>div:nth-child(2)>div:nth-child(2)>div:nth-child(2)>span";
const tripSummaryCarSectionDropoffCalendarIcon =
  "div[data-hook='payment-page_trip_summary_content'] div[class='Box-s8oj9r-0 dAClHk']>div:nth-child(2)>div:nth-child(1)";
const tripSummaryCarSectionPickupCalendarIcon =
  "div[data-hook='payment-page_trip_summary_content'] div[class='Box-s8oj9r-0 dAClHk']>div:nth-child(1)>div:nth-child(1)";
const tripSummaryTraveler0TotalPrice =
  "//div[@data-hook='payment-page_trip_summary_content']//span[@data-hook='cart-travelers_0_price']";
const tripSummarySeatsDepartingIata =
  "[data-hook='payment-page_trip_summary_content'] [data-hook='cart-travelers_0_seats_departing'] [data-hook='cart-travelers_0_seats_flight-codes']";
const tripSummarySeatsReturningIata =
  "[data-hook='payment-page_trip_summary_content'] [data-hook='cart-travelers_0_seats_returning'] [data-hook='cart-travelers_0_seats_flight-codes']";
const tripSummarySeatsDepartingId =
  "[data-hook='payment-page_trip_summary_content'] [data-hook='cart-travelers_0_seats_seat_departing_label']";
const tripSummarySeatsReturningId =
  "[data-hook='payment-page_trip_summary_content'] [data-hook='cart-travelers_0_seats_seat_returning_label']";
const tripSummarySeatsDepartingPrice =
  "[data-hook='payment-page_trip_summary_content'] [data-hook='cart-travelers_0_seats_seat_departing_price']";
const tripSummarySeatsReturningPrice =
  "[data-hook='payment-page_trip_summary_content'] [data-hook='cart-travelers_0_seats_seat_returning_price']";
const tripSummarySeatsTotalPrice =
  "[data-hook='payment-page_trip_summary_content'] [data-hook='cart-travelers_0_seats_price']";
const tripSummaryHotelName =
  "//div[@data-hook='payment-page_trip_summary_content']//div[@data-hook='cart-item_hotel_content']/div/div/span";
const tripSummaryHotelCheckInLabel =
  "//div[@data-hook='payment-page_trip_summary_content']//div[@data-hook='cart-item_hotel_content']/div/div/div[1]/div[1]/div/span";
const tripSummaryHotelCheckInDate =
  "//div[@data-hook='payment-page_trip_summary_content']//div[@data-hook='cart-item_hotel_content']/div/div/div/div[1]//time";
const tripSummaryHotelCheckOutLabel =
  "//div[@data-hook='payment-page_trip_summary_content']//div[@data-hook='cart-item_hotel_content']/div/div/div[1]/div[2]/div/span";
const tripSummaryHotelCheckOutDate =
  "//div[@data-hook='payment-page_trip_summary_content']//div[@data-hook='cart-item_hotel_content']/div/div/div/div[2]//time";
const tripSummaryHotelRoomName =
  "//div[@data-hook='payment-page_trip_summary_content']//div[@data-hook='cart-item_hotel_content']/div/div/div[2]/div[1]//span";
const tripSummaryHotelGuests =
  "//div[@data-hook='payment-page_trip_summary_content']//div[@data-hook='cart-item_hotel_content']/div/div/div[2]/div[2]//span";
const tripSummaryBagsDepartingIata =
  "[data-hook='payment-page_trip_summary_content'] [data-hook='cart-travelers_0_bags_departing'] [data-hook='cart-travelers_0_bags_flight-codes']";
const tripSummaryBagsReturningIata =
  "[data-hook='payment-page_trip_summary_content'] [data-hook='cart-travelers_0_bags_returning'] [data-hook='cart-travelers_0_bags_flight-codes']";
const tripSummaryBagsDepartingCheckedLabel =
  "[data-hook='payment-page_trip_summary_content'] [data-hook='cart-travelers_0_bags_departing'] [data-hook='cart-travelers_0_bags_checked_label']";
const tripSummaryBagsReturningCheckedLabel =
  "[data-hook='payment-page_trip_summary_content'] [data-hook='cart-travelers_0_bags_returning'] [data-hook='cart-travelers_0_bags_checked_label']";
const tripSummaryBagsDepartingCarryOnLabel =
  "[data-hook='payment-page_trip_summary_content'] [data-hook='cart-travelers_0_bags_departing'] [data-hook='cart-travelers_0_bags_carry-on_label']";
const tripSummaryBagsReturningCarryOnLabel =
  "[data-hook='payment-page_trip_summary_content'] [data-hook='cart-travelers_0_bags_returning'] [data-hook='cart-travelers_0_bags_carry-on_label']";
const tripSummaryBagsDepartingCheckedPrice =
  "[data-hook='payment-page_trip_summary_content'] [data-hook='cart-travelers_0_bags_departing'] [data-hook='cart-travelers_0_bags_checked_price']";
const tripSummaryBagsReturningCheckedPrice =
  "[data-hook='payment-page_trip_summary_content'] [data-hook='cart-travelers_0_bags_returning'] [data-hook='cart-travelers_0_bags_checked_price']";
const tripSummaryBagsDepartingCarryOnPrice =
  "[data-hook='payment-page_trip_summary_content'] [data-hook='cart-travelers_0_bags_departing'] [data-hook='cart-travelers_0_bags_carry-on_price']";
const tripSummaryBagsReturningCarryOnPrice =
  "[data-hook='payment-page_trip_summary_content'] [data-hook='cart-travelers_0_bags_returning'] [data-hook='cart-travelers_0_bags_carry-on_price']";
const tripSummaryBagsTotalPrice =
  "[data-hook='payment-page_trip_summary_content'] [data-hook='cart-travelers_0_bags_price']";
const tripSummaryExtrasDepartingIata =
  "[data-hook='payment-page_trip_summary_content'] [data-hook='cart-travelers_0_extras_departing'] [data-hook='cart-travelers_0_extras_flight-codes']";
const tripSummaryExtrasReturningIata =
  "[data-hook='payment-page_trip_summary_content'] [data-hook='cart-travelers_0_extras_returning'] [data-hook='cart-travelers_0_extras_flight-codes']";
const tripSummaryExtrasDepartingPriorityAccessLabel =
  "[data-hook='payment-page_trip_summary_content'] [data-hook='cart-travelers_0_extras_departing'] [data-hook='cart-travelers_0_extras_priority-access_label']";
const tripSummaryExtrasReturningPriorityAccessLabel =
  "[data-hook='payment-page_trip_summary_content'] [data-hook='cart-travelers_0_extras_returning'] [data-hook='cart-travelers_0_extras_priority-access_label']";
const tripSummaryExtrasDepartingPriorityAccessPrice =
  "[data-hook='payment-page_trip_summary_content'] [data-hook='cart-travelers_0_extras_departing'] [data-hook='cart-travelers_0_extras_priority-access_price']";
const tripSummaryExtrasReturningPriorityAccessPrice =
  "[data-hook='payment-page_trip_summary_content'] [data-hook='cart-travelers_0_extras_returning'] [data-hook='cart-travelers_0_extras_priority-access_price']";
const tripSummaryExtrasTripFlexLabelTraveler1 =
  "[data-hook='payment-page_trip_summary_content'] [data-hook='cart-travelers_0_extras_trip-flex_label']";
const tripSummaryExtrasReturningTripFlexLabelTraveler1 =
  "[data-hook='payment-page_trip_summary_content'] [data-hook='cart-travelers_0_extras_returning'] [data-hook='cart-travelers_0_extras_trip-flex_label']";
const tripSummaryExtrasTripFlexLabelTraveler2 =
  "[data-hook='payment-page_trip_summary_content'] [data-hook='cart-travelers_1_extras_trip-flex_label']";
const tripSummaryExtrasReturningTripFlexLabelTraveler2 =
  "[data-hook='payment-page_trip_summary_content'] [data-hook='cart-travelers_1_extras_returning'] [data-hook='cart-travelers_1_extras_trip-flex_label']";
const tripSummaryExtrasTripFlexPriceTraveler1 =
  "[data-hook='payment-page_trip_summary_content'] [data-hook='cart-travelers_0_extras_trip-flex_price']";
const tripSummaryExtrasTripFlexPriceTraveler2 =
  "[data-hook='payment-page_trip_summary_content'] [data-hook='cart-travelers_1_extras_trip-flex_price']";
const tripSummaryExtrasDepartingPetInCabinLabel =
  "[data-hook='payment-page_trip_summary_content'] [data-hook='cart-travelers_0_extras_departing'] [data-hook='cart-travelers_0_extras_pet-in-cabin']";
const tripSummaryExtrasReturningPetInCabinLabel =
  "[data-hook='payment-page_trip_summary_content'] [data-hook='cart-travelers_0_extras_returning'] [data-hook='cart-travelers_0_extras_pet-in-cabin']";
const tripSummaryExtrasDepartingPetInCabinPrice =
  "[data-hook='payment-page_trip_summary_content'] [data-hook='cart-travelers_0_extras_departing'] [data-hook*='cart-travelers_0_extras_pet-in-cabin-price']";
const tripSummaryExtrasReturningPetInCabinPrice =
  "[data-hook='payment-page_trip_summary_content'] [data-hook='cart-travelers_0_extras_returning'] [data-hook*='cart-travelers_0_extras_pet-in-cabin-price']";
const tripSummaryExtrasTotalPrice =
  "[data-hook='payment-page_trip_summary_content'] [data-hook='cart-travelers_0_extras_price']";
const promoDropDownSection =
  "[data-hook='payment-page_promo-section_toggle-button']";
const promoApplyButton = "[data-hook='payment-page_promo-section_continue']";
const promoField = "[data-hook='payment-page_promo-section_field_promo-code']";
const promoFieldError =
  "//fieldset[@data-hook='payment-page_promo-section']/div/div/span";
const tripSummaryAdult1Header =
  "[data-hook='payment-page_trip_summary_content'] [data-hook='cart-travelers_0_name']";
const voucherDropDownSection =
  "[data-hook='payment-page_vouchers-section_toggle-button']";
const voucherApplyButton =
  "[data-hook='payment-page_vouchers-section_continue']";
const voucherField =
  "[data-hook='payment-page_vouchers-section_allegiant-voucher']";
const voucherFieldError = "[data-hook='field-error-message_allegiant-voucher']";
const voucherEmailField =
  "[data-hook='payment-page_vouchers-section_allegiant-voucher-email']";
const voucherEmailFieldError =
  "[data-hook='field-error-message_allegiant-voucher-email']";
const voucherApplySpinner =
  "[data-hook='payment-page_vouchers-section_spinner']";
  const afterSavingAmount =
  "[data-hook='payment-page_after-savings-value']";
const iceOverlayImage =
  "//div[@data-hook='payment-page_ice-popup_content']//div/img";
const iceOverlayPayToday =
  "span[data-hook='payment-page_ice-header-pay-today-amount']";
const icePopupClose = "[data-hook='payment-page_ice-popup_close']";
const icePopup= "[data-hook='payment-page_ice-popup']";
const icePopupHeader= "[data-hook='payment-page_ice-popup-header']";
const billingFirstName="[data-hook='payment-page_first-name']";
const billingLastName="[data-hook='payment-page_last-name']";
const breadcrumbToggle="[data-hook='flights-breadcrumb_toggle']"
const iceOverlayApplyNow =
  "button[data-hook='payment-page_ice-header-apply-button']";
const iceBanner = "div[data-hook='payment-page_ice-banner']";
const iceBannerHeader= "[data-hook='payment-page_ice-banner-header']";
const iceBannerImage = '//body//main//div[6]//img';
const iceBannerPayToday =
  "[data-hook='payment-page_ice-banner-pay-today-amount']";
const iceOverlayTotalCost =
  "[data-hook='payment-page_ice-header-total-trip-cost-amount']";
const iceOverlayFutureCardStatement =
  "[data-hook='payment-page_ice-header-future-card-statement-amount']";
const iceBannerTotalCost =
  "[data-hook='payment-page_ice-banner-total-trip-cost-amount']";
const iceBannerFutureCardStatement =
  "[data-hook='payment-page_ice-banner-future-card-statement-amount']";
const tripSummaryHeader = "[data-hook='payment-page_trip_summary_header']";
const payTodayLabel =
  "[data-hook='payment-radio-group_payment-method_card-payment']";
const payMonthlyLabel =
  "[data-hook='payment-page_uplift-logo']";
  const upliftPayMonthlyLabel =
    "[data-g4-id='uplift-payment']";
const totalAfterSavingValue = "[data-hook='payment-page_after-savings-value']";
const checkedBagCountDeparture =
  "(//span[contains(@data-hook,'cart-travelers_0_bags_checked_label')])[1]";
const checkedBagCountReturn =
  "(//span[contains(@data-hook,'cart-travelers_0_bags_checked_label')])[2]";
const billingAddressFirstName = "[data-hook='payment-page_first-name']";
const billingAddressLastName = "[data-hook='payment-page_last-name']";
const storedCardTypeAndNumber =
  "[data-hook='payment_card_label_collapsed_card_details']";
const instantCreditBannerApplyNowButton = "[data-hook='payment-page_ice-banner-apply-button']";
const instantCreditPopupApplyNowButton = "[data-hook='payment-page_ice-header-apply-button']";
const loyaltyEarnPointsDisclaimer = "[data-hook='payment-page_loyalty_earn_points_disclaimer']";
const myAllegiantPoints = "[data-hook='payment-page_points-section_toggle-button']";
const loyaltyEmailAddress = "[data-hook='payment-page_points-section_login_email-address']";
const loyaltyTotalPoints = "[data-hook='payment-page_points-section_loyalty_points_section_total_points_value']";
const cardholderNameErrorMsg="//em[@data-hook='field-error-message_card-holder-name']"
const cardNumberErrorMsg="//em[@data-hook='field-error-message_card-number']"
const cvvErrorMsg="//em[@data-hook='field-error-message_card-cvv']"
const billingFnameErrorMsg="//em[@data-hook='field-error-message_first-name']"
const billingLnameErrorMsg="//em[@data-hook='field-error-message_last-name']"
const billingStreetErrorMsg="//em[@data-hook='field-error-message_address-line-1']"
const billingStateErrorMsg="//em[@data-hook='field-error-message_state']"
const billingCityErrorMsg="//em[@data-hook='field-error-message_city']"
const billingZipCodeErrorMsg="//em[@data-hook='field-error-message_zip-code']"
const billingPhoneErrorMsg="//em[@data-hook='field-error-message_phone-number']"
const emailErrorMsg="//em[@data-hook='field-error-message_email-address']"
const password="[data-hook='payment-page_password']"
const passwordConfirmation="[data-hook='payment-page_password-confirmation']"
const passwordErrorMsg="//em[@data-hook='field-error-message_password']"
const passwordConfirmationErrorMsg="//em[@data-hook='field-error-message_password-confirmation']"
const allegiantVouchersExpando="(//div//span[contains(text(),'Allegiant Vouchers')]//..//..//span)[2]"
const allegiantPromoCode="(//div//span[contains(text(),'Allegiant Promo Codes')]//..//..//span)[2]"
const applyVoucher="//button[@data-hook='payment-page_vouchers-section_continue']"
const applyPromo="//button[@data-hook='payment-page_promo-section_continue']"
const voucherNumberInput="//input[@data-hook='payment-page_vouchers-section_allegiant-voucher']"
const voucherEmailInput="//input[@data-hook='payment-page_vouchers-section_allegiant-voucher-email']"
const voucherErrorMsg="//em[@data-hook='field-error-message_allegiant-voucher']"
const promoCodeErrorMsg="[data-hook='payment-page_promo-section_field-error']"
const voucherNumber="//span[@data-hook='payment-page_vouchers-section_voucher-number-0']"
const allegiantPromoInput="[data-hook='payment-page_promo-section_field_promo-code']"
const appliedVoucherAmount="//span[@data-hook='payment-page_vouchers-section_value-X']"
const myAllegiantSectionAmount="[data-hook='payment-page_myAllegiant-section_amount']"
const removeVoucher="[data-hook='payment-page_vouchers-section_remove-button-0']"
const upliftPaymentOption = "[value='uplift-payment']"
const iceWarning = "span[class*='CardSection__WarningText']"
const iceCardIcon= "[data-hook='payment_card_label_collapsed_icon_allegiant_world_mastercard']"
const iceCardDetails= "[data-hook='payment_card_label_expanded_allegiant world mastercard']"
const useNewCardButton = "[data-hook='payment-page_stored-card_new_card']"
const cardSection = "[data-hook='card-section_label_toggle-button']"
const hotelBreadcrumb = "[data-hook='flights-breadcrumb_item-hotels']"
const activCardTypeInitial = "[data-hook='payment-page_card-logo_TYPE_active']"
const inactivCardTypeInitial = "[data-hook='payment-page_card-logo_TYPE_inactive']"
const editHotelCartButton = "[data-hook='cart-item_hotel_heading]"
const currentExpirationMonth="//div[@id='react-select-card-expiration-month-option-X']"
const currentExpirationYear="//div[@id='react-select-card-expiration-year-option-X']"
const cardExpireMonthFieldError="[data-hook='field-error-message_card-expiration-month']"
const hooks = {
  paymentPageTitle: "[data-hook='payment-page_page-heading']",
  carsBreadcrumb: "[data-hook='flights-breadcrumb_item-cars']",
  globalCartButton: "[data-hook='header-cart-button_label']",
  carsLinkGlobalCart: "[data-hook='cart-item_hotel_link']",
};
const allwaysMemberAllwaysIcon = "//*[@data-hook='payment-page_allways-section_claim-your-points']/img"
const allwaysMemberContentsLine1 = "//*[contains(text(),'Become')]"
const allwaysMemberContentsLine2 = "//*[contains(text(),'Claim Your')]"
const allwaysMemberContentsLine3 = "//*[contains(text(),'As a member there is')]"
const allwaysMemberContentsLine4 = "//*[contains(text(),'Yes! Claim my points')]"
const allwaysRewardsSection = "//*[@data-hook='payment-page_allways-section']"
const allwaysRewardsTitle = "//*[text()='Allways™ Rewards']"
const allwaysEarningPointsAllwaysIcon = "//*[@data-hook='payment-page_allways-section']/descendant::img"
const allwaysEarningPointsContentsLine1 = "//*[contains(text(),'You can earn an estimated total of')]"
const allwaysEarningPointsContentsLine2 = "//*[contains(text(),'Allways Loyalty Points')]"
const allwaysEstimationLoyaltyPoints ="[data-hook='payment-page_allways-section_allways-points']"
const allwaysEarningPointsContentsLine3 = "//*[contains(text(),'Allegiant World Mastercard®')]"
const allwaysEarningPointsContentsLine4 = "//*[contains(text(),'Total Points')]"
const allwaysRewardsPointsDisclaimer = "//*[contains(text(),'Points shown here are just an estimate')]"
const loggedInUser = "//*[starts-with(text(),'Hello')]"
const useMyAllwaysPoints ="[data-hook='payment-page_points-section_label']"
const useMyAllwaysPointsAllwaysIcon = "//span[@data-hook='payment-page_points-section_label']//following-sibling::div"
const allwaysLogo ="//*[contains(text(),'Sign in to use Allways')]//preceding::img[1]"
const allwaysSignInMessage ="//*[contains(text(),'Sign in to use Allways')]"
const allwaysPointSlider ="//input[@type='range']"
const allwaysPointInputBox ="//input[@id='points-input']"
const allwaysPointInputBoxTitle ="[data-hook='undefined_points-input_label']"
const allwaysPointsApplyButton = "//*[text()='APPLY']"
const allwaysPointsSectionCurrentBalance = "//*[@data-hook='payment-page_points-section_loyalty_points_section']/div/div[1]"
const pointsAvailableHeader ="//span[contains(text(),'Points Available : ')]"
const claimMyPointsCheckbox = "//*[@name='claim-my-points-checkbox']"
const autoOptInCheckbox= "//*[contains(text(),'Yes! Claim my points and become an Allways member!')]"
var paymentPageCollector = new Map();

const upliftCustomerDetails = {
  home_address: '1013 Weda Cir',
  home_city: 'Mayfield',
  home_postal_code: '99999',
  email: 'any@email.com',
  mobile: '5555551234',
  yearly_income: '189762',
  ssn: '3507',
};

const upliftCardDetails = {
  number: '4111111111111111',
  expiration: '1122',
  ccv: '123',
  zip: '55555',
};

const cartTypeCodes = {
  Allegiant_World_Mastercard: 'lm',
  Visa: 'vi',
  Mastercard: 'mc',
  American_Express: 'ax',
  Diners_Club: 'dc',
  JCB: 'jc',
  Union_Pay: 'up',
  Discover: 'ds',
}

var TotalFareAmount = 0;
let tripSummaryTravelersTotalSum;
let tripSummaryTripFlexPrice;
let actualDepartingPriorityAccessPrice;
let actualReturningPriorityAccessPrice;
let actualDepartingPetInCabinPrice;
let actualReturningPetInCabinPrice;

class PaymentPage extends Page {
  validatePaymentPageAnchorToTop(){
    do {
      browser.pause(5);
    } while ((!$(hooks.paymentPageTitle).isDisplayed()||$(spinnerBar).isDisplayed()));
    if ($(icePopupClose).isDisplayed()) {
      $(icePopupClose).click();
    }
    assert.equal(
			$(hooks.paymentPageTitle).isDisplayedInViewport(),
			true,
			'Payments Page is not anchor to top'
		);
  }
  fillCardDetails() {
  do {
    browser.pause(5);
  } while ((!$(hooks.paymentPageTitle).isDisplayed()||$(spinnerBar).isDisplayed()));
  if ($(icePopupClose).isDisplayed()) {
    $(icePopupClose).click();
  }
    $(cardHolderName).waitForDisplayed({ timeout: 40000 });
    $(cardHolderName).setValue('')
    $(cardHolderName).clearValue();
    $(cardHolderName).setValue('Auto Tester');
    // $(cardNumberInputField).setValue('5454545454545454');
    const cardNumArray = ["5454545454545454", "4112344112344113", "4400000000000008", "6243030000000001", "6011055039379233"];
    const random = Math.floor(Math.random() * cardNumArray.length);
    const value = cardNumArray[random];
    console.log("----------Using This Card:--------"+ value );
    const strLen = value.split('');
    for (let i = 0; i < value.length; i++) {
      $(cardNumberInputField).addValue(strLen[i]);
    }
    $(cardExpirationMonthInput).waitForClickable()
    $(cardExpirationMonthInput).click();
     browser.pause(100)
    $(currentExpirationMonth.replace("X","11")).click()
    browser.pause(1000)
     browser.keys(['Tab']);
     if($(cardExpireMonthFieldError).isDisplayed()){
	  $(cardExpirationMonthInput).waitForClickable()
      $(cardExpirationMonthInput).click();
      browser.pause(100)
      $(currentExpirationMonth.replace("X","11")).click()
     }
    $(cardExpirationYearInput).click();
     browser.pause(200)
     $(currentExpirationYear.replace("X","8")).click()
    $(cvvInput).setValue('737');
    $(billingAddress).waitForDisplayed();

  }

  formsOfPaymentCardDetails(cardType) {
    do {
      browser.pause(5);
    } while ((!$(hooks.paymentPageTitle).isDisplayed()||$(spinnerBar).isDisplayed()));
    if ($(icePopupClose).isDisplayed()) {
      $(icePopupClose).click();
    }
    $(cardHolderName).waitForDisplayed({ timeout: 40000 });
    $(cardHolderName).clearValue();
    $(cardHolderName).setValue('Auto Tester');
    if (cardType === 'Visa') {
	const value = '4112344112344113';
    const strLen = value.split('');
    for (let i = 0; i < value.length; i++) {
    $(cardNumberInputField).addValue(strLen[i]);
    }
    }
    if (cardType === 'Master') {
	const value = '5454545454545454';
    const strLen = value.split('');
    for (let i = 0; i < value.length; i++) {
    $(cardNumberInputField).addValue(strLen[i]);
    }
    }
    if (cardType === 'Discover') {
	const value = '6011055039379233';
    const strLen = value.split('');
    for (let i = 0; i < value.length; i++) {
    $(cardNumberInputField).addValue(strLen[i]);
    }
    }
    if (cardType === 'Amex') {
	const value = '370000000100018';
    const strLen = value.split('');
    for (let i = 0; i < value.length; i++) {
    $(cardNumberInputField).addValue(strLen[i]);
    }
    }
    $(cardExpirationMonthInput).waitForClickable()
    $(cardExpirationMonthInput).click();
     browser.pause(100)
    $(currentExpirationMonth.replace("X","11")).click()
    browser.pause(1000)
     browser.keys(['Tab']);
     if($(cardExpireMonthFieldError).isDisplayed()){
	  $(cardExpirationMonthInput).waitForClickable()
      $(cardExpirationMonthInput).click();
      browser.pause(100)
      $(currentExpirationMonth.replace("X","11")).click()
     }
    $(cardExpirationYearInput).click();
     browser.pause(200)
     $(currentExpirationYear.replace("X","8")).click()
    if (cardType === 'Amex') {
    $(cvvInput).setValue('7373');
    } else {
	$(cvvInput).setValue('737');
    }
    $(billingAddress).waitForDisplayed();
  }
  /*
  * Created custom method to enter customer firstname lastname in billing address
  * For - DC-17958 - To achive acceptance criteria created this method
  *
  */
fillBillingAddressFirstNameLastName(){
   $(billingFirstName).click()
	 $(billingFirstName).setValue('')
	 browser.pause(5)
	 $(billingFirstName).clearValue()
   $(billingFirstName).setValue('Saikat');
   $(billingLastName).click()
	 $(billingLastName).setValue('')
	 browser.pause(5)
	 $(billingLastName).clearValue()
   $(billingLastName).setValue('Patra');
}
  fillBillingAddressDetails() {
    let email = `tsqa.automation+${new Date().getTime()}@tridentsqa.com`;
    $(streetAddressInput).setValue('Test Address');
    $(aptSuiteFloorInput).setValue('Test Address 2');
    $(cityInput).setValue('Albany');
    $(stateInput).click();
    browser.keys(['ArrowDown', 'ArrowDown', 'Enter']);
    $(zipCodeInput).setValue('12345');
    $(phoneNumberInput).setValue('98765432100');
    $(emailAddressInput).clearValue();
    $(emailAddressInput).setValue(email);
    $(termsAndConditionsCheckbox).click();
    console.log('terms clicked');
  }

  collectCardHolderName() {
    $(cardHolderName).waitForDisplayed();
    collect("cardHolderNameKey", $(cardHolderName).getAttribute('value'));
  }

  clickAgreeWithTermsAndConditions() {
    $(termsAndConditionsCheckbox).scrollIntoView();
    $(termsAndConditionsCheckbox).click();
  }

  selectPurchaseMyTrip() {
    $(purchaseMyTrip).waitForEnabled();
    this.waitToBeClickable($(purchaseMyTrip));
    // $(purchaseMyTrip).click();
    try{
	paymentPageCollector.set('customerFirstName',$(billingFirstName).getAttribute('value'))
	paymentPageCollector.set('customerLastName',$(billingLastName).getAttribute('value'))
    paymentPageCollector.set('emailAddress',$(emailAddressInput).getAttribute('value'))
    this.getTripSummaryAmount();
     }
     catch(ex){
	   console.log("Exception while collecting paymentPage details")
     }
    this.clickElement($(purchaseMyTrip));
    do {
      browser.pause(1000);
    } while ($(spinnerBar).isDisplayed());
    $(confirmationPageTitle).waitForDisplayed({ timeout: 40000 });
  }

  getTripSummaryAmount() {
    TotalFareAmount = $(tripSummaryAmount).getText();
  }

  fillLoyalty() {
    $(loyaltyLogin).setValue('testtester@allegiantair.com');
    $(loyaltyPassword).setValue('Spirit1!');
    $(loyaltySignInButton).click();
  }

  fillInvalidEmail() {
    $(loyaltyLogin).setValue('testtester@gmail.com');
    $(loyaltyPassword).setValue('Spirit1!');
    $(loyaltySignInButton).click();
  }

  fillInvalidPassword() {
    $(loyaltyLogin).setValue('testtester@allegiantair.com');
    $(loyaltyPassword).setValue('FOO');
    $(loyaltySignInButton).click();
  }

  signInExistingCredentials() {
    $(myAllegiantPoints).click();
    $(loyaltyLogin).setValue(userEmailId);
    $(loyaltyPassword).setValue(userPassword);
    $(loyaltySignInButton).click();
    browser.pause(5000);
  }

  fillNonLoyalty() {
    $(loyaltyLogin).setValue('noinfo@allegiantair.com');
    $(loyaltyPassword).setValue('Spirit1!');
    $(loyaltySignInButton).click();
  }

  loyaltySection() {
    $(loyaltySection).waitForDisplayed({ timeout: 15000 });
    if ($(loyaltySection).isDisplayed()) {
      console.log('Loyalty Member is Logged In');
    } else {
      console.log('Loyalty not logged in');
    }
  }

  validateLoginName() {
    $(loyaltyProfileName).waitForDisplayed({ timeout: 15000 });
    if ($(loyaltyProfileName).isDisplayed()) {
      console.log('Loyalty Member Name Appears');
    } else {
      console.log('Loyalty Member Name Does Not Appear');
    }
  }

  validateBillingPopulated() {
    if ($(paymentCardTitle).isDisplayed()) {
      console.log('Payment is Stored');
    } else {
      console.log('Payment is not Stored');
    }
  }

  validateUserEmail() {
    $(signinValidation).waitForDisplayed({ timeout: 15000 });
    if ($(signinValidation).isDisplayed()) {
      console.log('Validation Is Displayed');
    } else {
      console.log('Validation Not Displayed');
    }
  }

  validateLoyaltyNotShown() {
    if ($(loyaltySection).isDisplayed()) {
      console.log('Loyalty Is Displayed, Test Failed');
    } else {
      console.log('Loyalty Is Not Displayed, Test Pass');
    }
  }

  validatePaymentEmpty() {
    $(cardHolderName).waitForDisplayed({ timeout: 15000 });
    const cardHolderValue = $(cardHolderName).getAttribute('value');
    if (cardHolderValue === '') {
      console.log('No Card Holder name Displayed, Test Passed');
    } else {
      console.log('Card Holder name Displayed, Test Failed');
    }
  }

  verifypaymentPageTitle() {
    $(paymentpurchasebutton).waitForDisplayed({ timeout: 10000 });
    assert.equal(
      $(hooks.paymentPageTitle).isDisplayed(),
      true,
      'payment page title is not displayed'
    );
  }

  verifyCarsBreadcrumb() {
    assert.equal(
      $(hooks.carsBreadcrumb).isDisplayed(),
      true,
      'cars breadcrumb is not displayed'
    );
  }

clickRemoveVoucherButton(){
	 this.clickElement($(removeVoucher));
}
  clickOnGlobalCartLink() {
    this.clickElement(hooks.globalCartButton);
  }

  validateNoCarsAdded() {
    assert.equal(
      $(hooks.carsLinkGlobalCart).isDisplayed(),
      false,
      'Car is added to the Cart'
    );
  }

  clickBurgerMenu() {
    $(burgerMenuButton).click();
    this.pause(1000);
  }

  clickLogIn() {
    $(logInButton).click();
    this.pause(1000);
  }

  clickForgotLink() {
    $(forgotPasswordLink).click();
    console.log('Log In Button Clicked');
    this.pause(1000);
  }

  /**
   * This method verifies that the Trip Summary on the Payment Page is either expanded or collapsed, depending on what parameter we provide.
   * @param {String} expectedState     expanded OR collapsed
   */
  verifyTripSummaryState(expectedState) {
    let actualState = $(tripSummaryExpando).getAttribute('aria-expanded');
    if (expectedState === 'expanded') {
      assert.equal(
        actualState,
        'true',
        'The Trip Summary expando is not expanded, but it should be'
      );
    } else if (expectedState === 'collapsed') {
      assert.equal(
        actualState,
        'false',
        'The Trip Summary expando is expanded, but it should NOT be'
      );
    }
  }

  clickTripSummaryExpando() {
    browser.pause(2000);
    this.clickElement($(tripSummaryExpando));
    $(tripSummaryFlightHeader).waitForDisplayed();
    browser.pause(2000);
  }

  validatePaymentPageTripSummaryBundleType(bundleType) {
    assert.equal(
      $(tripSummaryBundleName).getText(),
      bundleType,
      'The name of the bundle should be ' + bundleType + ' but it is not'
    );
  }

  /**
   * This method provides clickTripSummaryEditLinks with the data-hook of the desired Edit link, which is determined by what parameter is given in the feature file.
   * @param {String} section     Flights, Bundle, Traveler, Hotel, Car
   * @returns {String}
   */
  getDesiredEditLink(section) {
    let formattedSection = section.toLowerCase().replace(/ /g, '_');
    let sectionSelector = {
      flights:
        "[data-hook='payment-page_trip_summary_content'] [data-hook='cart-item_flight-info_link']",
      bundle:
        "[data-hook='payment-page_trip_summary_content'] [data-hook='cart-item_bundles_link']",
      travelers:
        "[data-hook='payment-page_trip_summary_content'] [data-hook='cart-item_travelers_link']",
      travelers_seats:
        "[data-hook='payment-page_trip_summary_content'] [data-hook='cart-travelers_0_seats_edit']",
      travelers_bags:
        "[data-hook='payment-page_trip_summary_content'] [data-hook='cart-travelers_0_bags_edit']",
      travelers_extras:
        "[data-hook='payment-page_trip_summary_content'] [data-hook='cart-travelers_0_extras_edit']",
      hotel:
        "[data-hook='payment-page_trip_summary_content'] [data-hook='cart-item_hotel_link']",
      car:
        "[data-hook='payment-page_trip_summary_content'] [data-hook='cart-item_vehicle_link']",
    };
    return sectionSelector[formattedSection];
  }

  /**
   * This method calls desiredEditLink to obtain the selector for the Edit link mentioned in the feature file, then clicks it.
   * @param {String} section     Flights, Bundle, Traveler, Hotel, Car
   */
  clickTripSummaryEditLinks(section) {
    let desiredEditLink = this.getDesiredEditLink(section);
    this.clickElement($(desiredEditLink));
  }

  verifyCorrectBundleIsSelectedOnBundlesPage(bundleType) {
    $(bundlesPageTitle).waitForDisplayed();
    if (bundleType === 'Allegiant Total Bundle') {
      assert.isTrue(
        $(bundlePageTotalBundleSelected).isDisplayed(),
        'The Total Bundle should be selected, but it is not'
      );
    } else if (bundleType === 'Allegiant Bonus Bundle') {
      assert.isTrue(
        $(bundlePageBonusBundleSelected).isDisplayed(),
        'The Bonus Bundle should be selected, but it is not'
      );
    }
  }

  getDesiredElement(element) {
    let formattedElement = element.toLowerCase().replace(/ /g, '_');
    let elementSelector = {
      bundle_section: "//*[@id='main']//div[2]/span/span/strong",
      car_section_header:
        "[data-hook='payment-page_trip_summary_content'] [data-hook='cart-item_vehicle_heading']",
      car_section:
        "[data-hook='payment-page_trip_summary_content'] [data-hook='cart-item_vehicle_content']",
      car_title: "[class='Text-sc-1o5ubbx-0 cWswmK']",
      car_type:
        "div[data-hook='payment-page_trip_summary_content'] div[class='Box-s8oj9r-0 xevgW']>div>div>span",
      car_icon:
        "div[data-hook='payment-page_trip_summary_content'] div[class='Box-s8oj9r-0 xevgW']>div:nth-child(1)",
      hotel_name:
        "//div[@data-hook='payment-page_trip_summary_content']//div[@data-hook='cart-item_hotel_content']/div/div/span",
      returning_market:
        "//div[@data-hook='payment-page_trip_summary_content']//span[@data-hook='cart-flight-returning_origin']/..",
      round_trip_discount:
        "[data-hook='payment-page_trip_summary_content'] [data-hook='price-breakdown_flight-discount_value']",
      seats_data:
        "[data-hook='payment-page_trip_summary_content'] [data-hook='cart-travelers_0_seats_departing']",
      bags_data:
        "[data-hook='payment-page_trip_summary_content'] [data-hook='cart-travelers_0_bags_price']",
      extras_data:
        "[data-hook='payment-page_trip_summary_content'] [data-hook='cart-travelers_0_extras_price']",
    };
    return elementSelector[formattedElement];
  }

  verifyTripSummaryText(element, expectedText) {
    let desiredElement = this.getDesiredElement(element);
    let actualText = $(desiredElement).getText();
    assert.equal(
      actualText,
      expectedText,
      'Element does not contain the desired text.'
    );
  }

  validateTripSummaryElementIsDisplayed(element) {
    let desiredElement = this.getDesiredElement(element);
    assert.isTrue(
      $(desiredElement).isDisplayed(),
      'The ' + element + ' is not displayed.'
    );
  }

  validateTripSummaryElementDoesNotExist(element) {
    let desiredElement = this.getDesiredElement(element);
    assert.isFalse(
      $(desiredElement).isExisting(),
      'The ' + element + ' is displayed, though it should not be.'
    );
  }

  verifyTripSummaryCarPickUpIsDisplayed() {
    assert.isTrue($(tripSummaryCarSectionPickupLabel).isDisplayed());
    assert.isTrue($(tripSummaryCarSectionPickupCalendarIcon).isDisplayed());
    assert.equal(
      $(tripSummaryCarSectionPickupDate).getText().length,
      13,
      'Pick Up date has a wrong format'
    );
    assert.equal(
      $(tripSummaryCarSectionPickUpHour).getText().length,
      8,
      'Pick Up hour has a wrong format'
    );
  }

  verifyTripSummaryCarDropOffIsDisplayed() {
    assert.isTrue($(tripSummaryCarSectionDropoffLabel).isDisplayed());
    assert.isTrue($(tripSummaryCarSectionDropoffCalendarIcon).isDisplayed());
    assert.equal(
      $(tripSummaryCarSectionDropoffDate).getText().length,
      13,
      'Pick Up date has a wrong format'
    );
    assert.equal(
      $(tripSummaryCarSectionDropoffHour).getText().length,
      8,
      'Pick Up hour has a wrong format'
    );
  }

  validateDeclinedAmount() {
    do {
      browser.pause(10000)
    } while ($(spinnerBar).isDisplayed());
    if ($(icePopupClose).isDisplayed()) {
      $(icePopupClose).click();
    }

    var IsDeclined = false;
    var declinedAmount = [
      '201',
      '204',
      '249',
      '253',
      '258',
      '280',
      '281',
      '282',
      '283',
      '284',
      '301',
      '302',
      '303',
      '304',
      '305',
      '306',
      '307',
      '401',
      '402',
      '501',
      '502',
      '508',
      '509',
      '510',
      '521',
      '522',
      '530',
      '531',
      '551',
      '570',
      '571',
      '572',
      '591',
      '592',
      '594',
      '595',
      '596',
      '602',
      '603',
      '605',
      '606',
      '607',
      '754',
      '802',
      '806',
      '813',
      '825',
      '833',
      '902',
      '903',
      '904',
      '999',
    ];
    let actualTripPrice =parseInt($(headerTripTotal)
      .getText()
      .slice(1, )).toString();
    console.log('declinedAmount: ' + declinedAmount);
    console.log('actualTripPrice: ' + actualTripPrice);
    if (declinedAmount.includes(actualTripPrice)) {
    // for (let i = 0; i < declinedAmount.length; i++) {
      // if (actualTripPrice.split('.')[0]===(declinedAmount[i])) {
        console.log('It is a declined amount, adding extras to proceed!');
        if($(breadcrumbToggle).isDisplayed()){
	      $(breadcrumbToggle).click();
         }
        $(bagsBreadcrumb).click();
        IsDeclined = true;
    }
    return IsDeclined;
  }
  validateDeclinedAmountAfterSavingAmount() {
    var IsDeclined = false;
    var declinedAmount = [
      '201',
      '204',
      '249',
      '253',
      '258',
      '280',
      '281',
      '282',
      '283',
      '284',
      '301',
      '302',
      '303',
      '304',
      '305',
      '306',
      '307',
      '401',
      '402',
      '501',
      '502',
      '508',
      '509',
      '510',
      '521',
      '522',
      '530',
      '531',
      '551',
      '570',
      '571',
      '572',
      '591',
      '592',
      '594',
      '595',
      '596',
      '602',
      '603',
      '605',
      '606',
      '607',
      '754',
      '802',
      '806',
      '813',
      '825',
      '833',
      '902',
      '903',
      '904',
      '999',
    ];
    let actualTripPrice = $(afterSavingAmount)
      .getText().replace(/(\n)/gm,"")
      .slice(1, 4);
    console.log('declinedAmount: ' + declinedAmount);
    console.log('actualTripPrice: ' + actualTripPrice);
    for (let i = 0; i < declinedAmount.length; i++) {
      if (eval(actualTripPrice.split('.')[0].includes(declinedAmount[i]))) {
        console.log('It is a declined amount, adding extras to proceed!');
        if($(breadcrumbToggle).isDisplayed()){
	      $(breadcrumbToggle).click();
         }
         browser.execute('window.scrollBy(0, -window.innerHeight)');
        $(bagsBreadcrumb).click();
        IsDeclined = true;
      }
    }
    return IsDeclined;
  }

  verifyTripSummaryFlightsHeaderText(expectedText) {
    assert.equal(
      $(tripSummaryFlightHeader).getText(),
      expectedText,
      'The header title should be ' + expectedText + ' but it is not'
    );
  }

  verifyTripSummaryCarHeaderText(expectedText) {
    assert.equal(
      $(tripSummaryCarSectionHeader).getText(),
      expectedText,
      'The Header title should be' + expectedText + 'but it is not'
    );
  }

  verifyTripSummaryDepartingMarkets(expectedCityPair) {
    assert.equal(
      $(tripSummaryDepartingMarket).getText().replace(/(\r\n|\n|\r)/gm, " "),
      expectedCityPair,
      'The departing city pair should be ' + expectedCityPair + ' but it is not'
    );
    // the replace is used to eliminate \n from the getText, which is not visible in the UI.
  }

  verifyTripSummaryReturningMarkets(expectedCityPair) {
    assert.equal(
      $(tripSummaryReturningMarket).getText().replace(/(\r\n|\n|\r)/gm, " "),
      expectedCityPair,
      'The returning city pair should be ' + expectedCityPair + ' but it is not'
    );
    // the replace is used to eliminate \n from the getText, which is not visible in the UI.
  }

  verifyTripSummaryRoundTripDiscountIsShown() {
    let roundTripDiscountValue = parseFloat(
      $(tripSummaryRoundTripDiscountValue)
        .getText()
        .slice(2)
    );
    assert.isTrue(roundTripDiscountValue > 0);
  }

  /**
   * This method provides verifyTripSummaryFeesAreDisplayed with the data-hook of the desired tax, which is determined by what parameter is given in the feature file.
   * @param {String}   tax     Carrier Usage Charge, Fed Tax, Segment Fees, Nine Eleven Security, PFC
   * @returns {String}
   */
  getDesiredTax(tax) {
    let formattedTax = tax.toLowerCase().replace(/ /g, '_');
    let taxSelector = {
      carrier_usage_charge: 'carrier-usage-charge',
      usa_federal_excise_tax: 'fed-tax',
      usa_segment_tax: 'segment-fees',
      usa_security_fee: '911-security',
      usa_passenger_facility_charge: 'pfc',
    };
    return taxSelector[formattedTax];
  }

  /**
   * This method provides calls getDesiredTax to obtain the base of the selector for the desired tax. Then it builds the rest itself and gets the text and value for that tax. Lastly, it verifies that the name of the tax is correct and that the value of the tax is > 0.
   * @param {String}   tax     Carrier Usage Charge, Fed Tax, Segment Fees, Nine Eleven Security, PFC
   *
   */
  verifyTripSummaryFeesAreDisplayed(tax) {
    let formattedTax = this.getDesiredTax(tax);

    let taxName = $(baseTaxTextSelector.replace('X', formattedTax)).getText();
    let taxValue = parseFloat(
      $(baseTaxValueSelector.replace('X', formattedTax))
        .getText()
        .slice(1)
    );
      assert.equal(
        taxName,
        tax,
        'The name of the tax should be ' + tax + ' but it is not.'
      );
      assert.isTrue(taxValue > 0);
  }

  collectTripSummaryTravelersTotalSum() {
    tripSummaryTravelersTotalSum = parseFloat(
      $(tripSummaryTraveler0TotalPrice)
        .getText()
        .slice(1)
    );
  }

  verifyTripSummaryTravelersSumIsCorrect() {
    let actualTripSummaryTravelersTotalSum = parseFloat(
      $(tripSummaryTraveler0TotalPrice)
        .getText()
        .slice(1)
    );

    assert.equal(
      actualTripSummaryTravelersTotalSum,
      tripSummaryTravelersTotalSum,
      'The current total sum from the Travelers section is different from the one previously collected'
    );
  }

  verifyTripSummarySeatsIataCodes(segment, expectedIataCodes) {
    if (segment === 'departing') {
      let actualIataCodes = $(tripSummarySeatsDepartingIata).getText();
      assert.equal(
        actualIataCodes,
        expectedIataCodes,
        'The expected departing IATA codes are not ' + expectedIataCodes
      );
    } else if (segment === 'returning') {
      let actualIataCodes = $(tripSummarySeatsReturningIata).getText();
      assert.equal(
        actualIataCodes,
        expectedIataCodes,
        'The expected returning IATA codes are not ' + expectedIataCodes
      );
    }
  }

  verifyTripSummarySeatIDs(segment) {
    if (segment === 'departing') {
      let actualDepartingSeatId = $(tripSummarySeatsDepartingId).getText();
      let expectedDepartingSeatId = getValueCollectorMap(
        'departingSelectedSeatIdKey'
      );
      assert.equal(
        actualDepartingSeatId,
        expectedDepartingSeatId,
        'The expected departing Seat ID is not correct'
      );
    } else if (segment === 'returning') {
      let actualReturningSeatId = $(tripSummarySeatsReturningId).getText();
      let expectedReturningSeatId = getValueCollectorMap(
        'returningSelectedSeatIdKey'
      );
      assert.equal(
        actualReturningSeatId,
        expectedReturningSeatId,
        'The expected returning Seat ID is not correct'
      );
    }
  }

  verifyTripSummarySeatPrices(segment) {
    if (segment === 'departing') {
      let actualDepartingSeatPrice = $(tripSummarySeatsDepartingPrice)
        .getText()
        .slice(1);
      let expectedDepartingSeatPrice = getValueCollectorMap(
        'departingSelectedSeatPriceKey'
      );
      assert.equal(
        actualDepartingSeatPrice,
        expectedDepartingSeatPrice,
        'The expected departing Seat Price is not correct'
      );
    } else if (segment === 'returning') {
      let actualReturningSeatPrice = $(tripSummarySeatsReturningPrice)
        .getText()
        .slice(1);
      let expectedReturningSeatPrice = getValueCollectorMap(
        'returningSelectedSeatPriceKey'
      );
      assert.equal(
        actualReturningSeatPrice,
        expectedReturningSeatPrice,
        'The expected returning Seat Price is not correct'
      );
    }
  }

  verifyTripSummaryTotalSeatPrice() {
    let departingSeatPrice = parseFloat(
      getValueCollectorMap('departingSelectedSeatPriceKey')
    );
    let returningSeatPrice = parseFloat(
      getValueCollectorMap('returningSelectedSeatPriceKey')
    );
    let expectedTotalSeatPrice = departingSeatPrice + returningSeatPrice;
    let actualTotalSeatPrice = parseFloat(
      $(tripSummarySeatsTotalPrice)
        .getText()
        .slice(1)
    );

    assert.equal(
      actualTotalSeatPrice,
      expectedTotalSeatPrice,
      'The Total Seat price is incorrect.'
    );
  }

  verifyTripSummarySeatsIncluded() {
    let departingSeatPrice = $(tripSummarySeatsDepartingPrice).getText();
    let returningSeatPrice = $(tripSummarySeatsReturningPrice).getText();
    let totalSeatPrice = $(tripSummarySeatsTotalPrice).getText();

    assert.equal(
      departingSeatPrice,
      'INCLUDED',
      'The departing seat price is incorrect.'
    );

    assert.equal(
      returningSeatPrice,
      'INCLUDED',
      'The returning seat price is incorrect.'
    );

    assert.equal(
      totalSeatPrice,
      'INCLUDED',
      'The total seat price is incorrect.'
    );
  }

  verifyTripSummaryHotelName() {
    let actualHotelName = $(tripSummaryHotelName).getText();
    let expectedHotelName = getValueCollectorMap('hotelNameKey');
    assert.equal(
      actualHotelName,
      expectedHotelName,
      'The name of the Hotel is incorrect.'
    );
  }

  verifyTripSummaryCheckInCheckOutDatesAndLabels() {
    let actualCheckInLabel = $(tripSummaryHotelCheckInLabel).getText();
    let actualCheckOutLabel = $(tripSummaryHotelCheckOutLabel).getText();
    let actualCheckInDate = $(tripSummaryHotelCheckInDate).getText();
    let actualCheckOutDate = $(tripSummaryHotelCheckOutDate).getText();
    let expectedCheckInDate = getValueCollectorMap('hotelCheckInDateKey');
    let expectedCheckOutDate = getValueCollectorMap('hotelCheckOutDateKey');
    assert.equal(
      actualCheckInLabel,
      'Check In:',
      'The Check In label is incorrect'
    );
    assert.equal(
      actualCheckOutLabel,
      'Check Out:',
      'The Check Out label is incorrect'
    );
    assert.equal(
      actualCheckInDate,
      expectedCheckInDate,
      'The Check In date is incorrect'
    );
    assert.equal(
      actualCheckOutDate,
      expectedCheckOutDate,
      'The Check Out date is incorrect'
    );
  }

  verifyTripSummaryHotelRoomName() {
    let actualHotelRoomName = $(tripSummaryHotelRoomName).getText();
    let expectedHotelRoomName = getValueCollectorMap('hotelRoomNameKey');

    assert.equal(
      actualHotelRoomName,
      expectedHotelRoomName,
      'The Hotel Room name is incorrect'
    );
  }

  verifyTripSummaryGuestsAndRooms(expectedGuestsAndRooms) {
    let actualGuestsAndRooms = $(tripSummaryHotelGuests).getText();
    assert.equal(
      actualGuestsAndRooms,
      expectedGuestsAndRooms,
      'The Hotel number of rooms or guests is incorrect'
    );
  }

  verifyTripSummaryBagsIataCodes(segment, expectedIataCodes) {
    if (segment === 'departing') {
      let actualIataCodes = $(tripSummaryBagsDepartingIata).getText();
      assert.equal(
        actualIataCodes,
        expectedIataCodes,
        'The expected departing IATA codes are not ' + expectedIataCodes
      );
    } else if (segment === 'returning') {
      let actualIataCodes = $(tripSummaryBagsReturningIata).getText();
      assert.equal(
        actualIataCodes,
        expectedIataCodes,
        'The expected returning IATA codes are not ' + expectedIataCodes
      );
    }
  }

  verifyTripSummaryCheckedBagsLabelAndPrice(segment) {
    let expectedCheckedBagPrice = parseInt(
      getValueCollectorMap('checkedBagsIndividualPriceKey')
    );
    if (segment === 'departing') {
      let actualDepartingCheckedBagLabel = $(
        tripSummaryBagsDepartingCheckedLabel
      ).getText();
      let actualDepartingCheckedBagPrice = parseInt(
        $(tripSummaryBagsDepartingCheckedPrice)
          .getText()
          .slice(1)
      );

      assert.equal(
        actualDepartingCheckedBagLabel,
        '1 Checked',
        'The departing Checked bag label is incorrect'
      );

      assert.equal(
        actualDepartingCheckedBagPrice,
        expectedCheckedBagPrice,
        'The departing Checked bag price is incorrect'
      );
    } else if (segment === 'returning') {
      let actualReturningCheckedBagLabel = $(
        tripSummaryBagsReturningCheckedLabel
      ).getText();
      let actualReturningCheckedBagPrice = parseInt(
        $(tripSummaryBagsReturningCheckedPrice)
          .getText()
          .slice(1)
      );

      assert.equal(
        actualReturningCheckedBagLabel,
        '1 Checked',
        'The returning Checked bag label is incorrect'
      );

      assert.equal(
        actualReturningCheckedBagPrice,
        expectedCheckedBagPrice,
        'The returning Checked bag price is incorrect'
      );
    }
  }

  verifyTripSummaryCarryOnBagsLabelAndPrice(segment) {
    let expectedCarryOnBagPrice = parseInt(
      getValueCollectorMap('carryOnBagsIndividualPriceKey')
    );
    if (segment === 'departing') {
      let actualDepartingCarryOnBagLabel = $(
        tripSummaryBagsDepartingCarryOnLabel
      ).getText();
      let actualDepartingCarryOnBagPrice = parseInt(
        $(tripSummaryBagsDepartingCarryOnPrice)
          .getText()
          .slice(1)
      );

      assert.equal(
        actualDepartingCarryOnBagLabel,
        '1 Carry-On',
        'The departing CarryOn bag label is incorrect'
      );

      assert.equal(
        actualDepartingCarryOnBagPrice,
        expectedCarryOnBagPrice,
        'The departing CarryOn bag price is incorrect'
      );
    } else if (segment === 'returning') {
      let actualReturningCarryOnBagLabel = $(
        tripSummaryBagsReturningCarryOnLabel
      ).getText();
      let actualReturningCarryOnBagPrice = parseInt(
        $(tripSummaryBagsReturningCarryOnPrice)
          .getText()
          .slice(1)
      );

      assert.equal(
        actualReturningCarryOnBagLabel,
        '1 Carry-On',
        'The returning CarryOn bag label is incorrect'
      );

      assert.equal(
        actualReturningCarryOnBagPrice,
        expectedCarryOnBagPrice,
        'The returning CarryOn bag price is incorrect'
      );
    }
  }

  verifyTripSummaryTotalBagsPrice() {
    let expectedTotalBagPrice = parseInt(
      getValueCollectorMap('bagsTotalPriceKey')
    );
    let actualTotalBagPrice = parseInt(
      $(tripSummaryBagsTotalPrice)
        .getText()
        .slice(1)
    );

    assert.equal(
      actualTotalBagPrice,
      expectedTotalBagPrice,
      'The total bag price does not match the total from the Bags page'
    );
  }

  verifyTripSummaryBagsIncluded() {
    let actualDepartingCarryOnBagPrice = $(
      tripSummaryBagsDepartingCarryOnPrice
    ).getText();
    let actualReturningCarryOnBagPrice = $(
      tripSummaryBagsReturningCarryOnPrice
    ).getText();
    let actualDepartingCheckedBagPrice = $(
      tripSummaryBagsDepartingCheckedPrice
    ).getText();
    let actualReturningCheckedBagPrice = $(
      tripSummaryBagsReturningCheckedPrice
    ).getText();
    let totalBagsPrice = $(tripSummaryBagsTotalPrice).getText();

    assert.equal(
      actualDepartingCarryOnBagPrice,
      'INCLUDED',
      'The departing CarryOn bags price is incorrect.'
    );

    assert.equal(
      actualReturningCarryOnBagPrice,
      'INCLUDED',
      'The returning CarryOn bags price is incorrect.'
    );

    assert.equal(
      actualDepartingCheckedBagPrice,
      'INCLUDED',
      'The departing Checked bags price is incorrect.'
    );

    assert.equal(
      actualReturningCheckedBagPrice,
      'INCLUDED',
      'The returning Checked bags price is incorrect.'
    );

    assert.equal(
      totalBagsPrice,
      'INCLUDED',
      'The total bags price is incorrect.'
    );
  }

  verifyTripSummaryExtrasIataCodes(segment, expectedIataCodes) {
    if (segment === 'departing') {
      let actualIataCodes = $(tripSummaryExtrasDepartingIata).getText();
      assert.equal(
        actualIataCodes,
        expectedIataCodes,
        'The expected departing IATA codes are not ' + expectedIataCodes
      );
    } else if (segment === 'returning') {
      let actualIataCodes = $(tripSummaryExtrasReturningIata).getText();
      assert.equal(
        actualIataCodes,
        expectedIataCodes,
        'The expected returning IATA codes are not ' + expectedIataCodes
      );
    }
  }

  verifyTripSummaryPriorityAccessLabelAndPrice(segment) {
    let expectedPriorityAccessPrice = parseFloat(
      getValueCollectorMap('priorityAccessIndividualPriceKey')
    );
    if (segment === 'departing') {
      let actualDepartingPriorityAccessLabel = $(
        tripSummaryExtrasDepartingPriorityAccessLabel
      ).getText();
      actualDepartingPriorityAccessPrice = parseFloat(
        $(tripSummaryExtrasDepartingPriorityAccessPrice)
          .getText()
          .slice(1)
      );

      assert.equal(
        actualDepartingPriorityAccessLabel,
        'Priority Access',
        'The departing Priority Access label is incorrect'
      );

      assert.equal(
        actualDepartingPriorityAccessPrice,
        expectedPriorityAccessPrice,
        'The departing Priority Access price is incorrect'
      );
    } else if (segment === 'returning') {
      let actualReturningPriorityAccessLabel = $(
        tripSummaryExtrasReturningPriorityAccessLabel
      ).getText();
      actualReturningPriorityAccessPrice = parseFloat(
        $(tripSummaryExtrasReturningPriorityAccessPrice)
          .getText()
          .slice(1)
      );

      assert.equal(
        actualReturningPriorityAccessLabel,
        'Priority Access',
        'The returning Priority Access label is incorrect'
      );

      assert.equal(
        actualReturningPriorityAccessPrice,
        expectedPriorityAccessPrice,
        'The returning Priority Access price is incorrect'
      );
    }
  }

  verifyTripSummaryPetInCabinLabelAndPrice(segment) {
    let expectedPetInCabinPrice = parseInt(
      getValueCollectorMap('petInCabinIndividualPriceKey')
    );
    if (segment === 'departing') {
      let actualDepartingPetInCabinLabel = $(
        tripSummaryExtrasDepartingPetInCabinLabel
      ).getText();
      actualDepartingPetInCabinPrice = parseInt(
        $(tripSummaryExtrasDepartingPetInCabinPrice)
          .getText()
          .slice(1)
      );

      assert.equal(
        actualDepartingPetInCabinLabel,
        'Pet in Cabin',
        'The departing Pet in Cabin label is incorrect'
      );

      assert.equal(
        actualDepartingPetInCabinPrice,
        expectedPetInCabinPrice,
        'The departing Pet in Cabin price is incorrect'
      );
    } else if (segment === 'returning') {
      let actualReturningPetInCabinLabel = $(
        tripSummaryExtrasReturningPetInCabinLabel
      ).getText();
      actualReturningPetInCabinPrice = parseInt(
        $(tripSummaryExtrasReturningPetInCabinPrice)
          .getText()
          .slice(1)
      );

      assert.equal(
        actualReturningPetInCabinLabel,
        'Pet in Cabin',
        'The returning Pet in Cabin label is incorrect'
      );

      assert.equal(
        actualReturningPetInCabinPrice,
        expectedPetInCabinPrice,
        'The returning Pet in Cabin price is incorrect'
      );
    }
  }

  verifyTripSummaryTripFlexLabelAndPrice(traveler) {
    if (traveler === '1') {
      let expectedTripFlexPrice = parseInt(
        getValueCollectorMap('tripFlexPriceKey')
      );

      let actualDepartingTripFlexLabel = $(
        tripSummaryExtrasTripFlexLabelTraveler1
      ).getText();
      tripSummaryTripFlexPrice = parseInt(
        $(tripSummaryExtrasTripFlexPriceTraveler1)
          .getText()
          .slice(1)
      );

      assert.equal(
        actualDepartingTripFlexLabel,
        'TRIP FLEX',
        'The Trip Flex label is incorrect'
      );

      assert.equal(
        tripSummaryTripFlexPrice,
        expectedTripFlexPrice,
        'The Trip Flex price is incorrect'
      );

      assert.isFalse(
        $(tripSummaryExtrasReturningTripFlexLabelTraveler1).isExisting()
      );
    } else if (traveler === '2') {
      let actualDepartingTripFlexLabel = $(
        tripSummaryExtrasTripFlexLabelTraveler2
      ).getText();
      tripSummaryTripFlexPrice = $(
        tripSummaryExtrasTripFlexPriceTraveler2
      ).getText();

      assert.equal(
        actualDepartingTripFlexLabel,
        'TRIP FLEX',
        'The Trip Flex label is incorrect'
      );

      assert.equal(
        tripSummaryTripFlexPrice,
        'INCLUDED',
        'The Trip Flex price is incorrect'
      );

      assert.isFalse(
        $(tripSummaryExtrasReturningTripFlexLabelTraveler2).isExisting()
      );
    }
  }

  verifyTripSummaryTotalExtrasPrice() {
    let priorityAccessTotalPrice =
      actualDepartingPriorityAccessPrice + actualReturningPriorityAccessPrice;
    let petInCabinTotalPrice =
      actualDepartingPetInCabinPrice + actualReturningPetInCabinPrice;
    let expectedTotalExtrasPrice =
      priorityAccessTotalPrice +
      petInCabinTotalPrice +
      tripSummaryTripFlexPrice;
    let actualTotalExtrasPrice = parseFloat(
      $(tripSummaryExtrasTotalPrice)
        .getText()
        .slice(1)
    );

    assert.equal(
      actualTotalExtrasPrice,
      expectedTotalExtrasPrice,
      'The total extras price is incorrect'
    );
  }

  verifyTripSummaryExtrasIncluded() {
    let actualDepartingPriorityAccessPrice = $(
      tripSummaryExtrasDepartingPriorityAccessPrice
    ).getText();
    let actualReturningPriorityAccessPrice = $(
      tripSummaryExtrasReturningPriorityAccessPrice
    ).getText();
    let tripSummaryTripFlexPrice = $(
      tripSummaryExtrasTripFlexPriceTraveler1
    ).getText();

    let totalExtrasPrice = $(tripSummaryExtrasTotalPrice).getText();

    assert.equal(
      actualDepartingPriorityAccessPrice,
      'INCLUDED',
      'The departing Priority Access price is incorrect.'
    );

    assert.equal(
      actualReturningPriorityAccessPrice,
      'INCLUDED',
      'The returning Priority Access price is incorrect.'
    );

    assert.equal(
      tripSummaryTripFlexPrice,
      'INCLUDED',
      'The departing Trip Flex price is incorrect.'
    );

    assert.equal(
      totalExtrasPrice,
      'INCLUDED',
      'The total extras price is incorrect.'
    );
  }

  applyPromoCode(promoCode) {
    do {
      browser.pause(5);
    } while ((!$(hooks.paymentPageTitle).isDisplayed()||$(spinnerBar).isDisplayed()));
    if ($(icePopupClose).isDisplayed()) {
      $(icePopupClose).click();
    }
    $("[data-hook='payment-page_alternative-payments-section']").scrollIntoView(
      {
        block: 'center',
        inline: 'start',
      }
    );
    if (!$(promoField).isDisplayed()) {
      this.clickElement($(promoDropDownSection));
    }
    $(promoField).setValue(promoCode);
    this.clickElement($(promoApplyButton));
    this.pause(3000);
  }

  verifyPromoFieldError(expectedPromoError) {
    $(promoFieldError).waitForDisplayed();
    let actualPromoError = $(promoFieldError).getText();
    assert.equal(
      actualPromoError,
      expectedPromoError,
      'The promo code error message is incorrect'
    );
  }

  // This method retrieves the first name, middle name, last name and suffix from the collector and then concatenates them into a full name, so it can verify the name in the Trip Summary header is correct. E.g John Robert Doe Sr.
  verifyAdult1NameIsCorrect() {
    let firstName = getValueCollectorMap('traveler1FirstName');
    let middleName = getValueCollectorMap('traveler1MiddleName');
    let lastName = getValueCollectorMap('traveler1LastName');
    let suffix = getValueCollectorMap('traveler1Suffix');
    let expectedName = firstName.concat(
      ' ',
      middleName,
      ' ',
      lastName,
      ' ',
      suffix
    );
    let actualName = $(tripSummaryAdult1Header).getText();

    assert.equal(
      actualName,
      expectedName,
      'The name of adult 1 in the Trip Summary is incorrect'
    );
  }
  verifyIcePopUpAndBanner(){
    browser.pause(1000);
    assert.equal($(icePopup).isDisplayed(),false,'ICE pop up is displayed');
    assert.equal($(iceBanner).isDisplayed(),false,'ICE pop up is displayed');

  }
  validateICEOverlayPopup() {
    browser.pause(1000);
    $(icePopup).isDisplayed();
  }
  validateICEOverlayHeader(popupHeader) {
    browser.pause(1000);
    $(icePopupHeader).isDisplayed();
    assert.equal(($(icePopupHeader).getText().replace(/(\n)/gm, " ")),popupHeader,'ICE pop up header is incorrect')
  }
  clickCloseICEButton() {
    browser.pause(1000);
    $(icePopupClose).click();
  }

  fillVoucherFieldWithCustomData(customVoucherData) {
    if (!$(voucherField).isDisplayed()) {
      this.clickElement($(voucherDropDownSection));
    }

    $(voucherField).setValue(customVoucherData);
  }

  fillVoucherFieldWithGeneratedVoucher(generatedVoucher) {
    do {
      browser.pause(5);
    } while ((!$(hooks.paymentPageTitle).isDisplayed()||$(spinnerBar).isDisplayed()));
    if ($(icePopupClose).isDisplayed()) {
      $(icePopupClose).click();
    }
    $("[data-hook='payment-page_alternative-payments-section']").scrollIntoView(
      {
        block: 'center',
        inline: 'start',
      }
    );
    if (!$(voucherField).isDisplayed()) {
      this.clickElement($(voucherDropDownSection));
    }

    console.log("generatedVoucher "+ generatedVoucher)
    $(voucherField).setValue(generatedVoucher);
  }

  fillVoucherEmailField(email) {
    $(voucherEmailField).setValue(email);
  }

  clickApplyVoucherButton() {
	$(voucherApplyButton).scrollIntoView()
	$(voucherApplyButton).waitForClickable()
    this.clickElement($(voucherApplyButton));
    $(voucherApplySpinner).waitForDisplayed({ reverse: true });
  }

   clickAllegiantVoucherExpando(){
	this.clickElement($(allegiantVouchersExpando));
   }

   clickAllegiantPromoExpando(){
	this.clickElement($(allegiantPromoCode));
   }

  validateVoucherErrorMessage(expectedErrorMessage) {
    let actualErrorMessage = $(voucherFieldError).getText();
    assert.equal(
      actualErrorMessage,
      expectedErrorMessage,
      'The Voucher field error message is incorrect'
    );
  }

  validateVoucherEmailFieldErrorMessage(expectedErrorMessage) {
    let actualErrorMessage = $(voucherEmailFieldError).getText();
    assert.equal(
      actualErrorMessage,
      expectedErrorMessage,
      'The Voucher email field error message is incorrect'
    );
  }

  validateIceOverlayImageIsDisplayed() {
    $(iceOverlayImage).waitForDisplayed({ timeout: 18000 });
    assert.isTrue($(iceOverlayImage).isDisplayed());
  }

  validateIceOverlayYouPayTodayValue() {
    let overlayIcePayToday = $(iceOverlayPayToday).getText();
    let totalTripPrice = $(headerTripTotal).getText();
    assert.equal(
      overlayIcePayToday,
      totalTripPrice,
      'Trip price do not match with ICE total trip price'
    );
  }

  validateIceOverlayApplyNowIsDisplayed() {
    $(iceOverlayApplyNow).waitForDisplayed({ timeout: 18000 });
    assert.isTrue($(iceOverlayApplyNow).isDisplayed());
  }

  validateIceBannerIsDisplayed() {
    $(iceBanner).waitForDisplayed({ timeout: 18000 });
    assert.isTrue($(iceBanner).isDisplayed());
  }
  validateICEBannerHeader(bannerHeader){
    browser.pause(1000);
    $(iceBannerHeader).isDisplayed();
    assert.equal(($(iceBannerHeader).getText().replace(/(\n)/gm, " ")),bannerHeader,'ICE banner header is incorrect')
  }
  validateIceBannerImageIsDisplayed() {
    $(iceBannerImage).waitForDisplayed({ timeout: 18000 });
    assert.isTrue($(iceBannerImage).isDisplayed());
  }

  validateIceBannerYouPayTodayValue() {
    let bannerIcePayToday = $(iceBannerPayToday).getText();
    let totalTripPrice = $(headerTripTotal).getText();
    assert.equal(
      bannerIcePayToday,
      totalTripPrice,
      'Trip price does not match with ICE total trip price'
    );
  }
  validateICEFutureSatementCreditAmount(ice){
    switch (ice) {
      case 'ice popup':
        assert.equal((parseFloat(
          $(iceOverlayFutureCardStatement).getText().split('$')[1])),
          100,'ICE overlay Future statement credit amount is not 100');
        break;
        case 'ice banner':
          assert.equal((parseFloat(
            $(iceBannerFutureCardStatement).getText().split('$')[1])),
            100,'ICE banner Future statement credit amount is not 100');
          break;
      default:
        assert.fail('Future Satement credit amount validation failed');
    }
  }
  verifyIceOverlayTotalTripCostValue() {
    let actualTotalCost = parseFloat(
      $(iceOverlayTotalCost)
        .getText()
        .split('$')[1]
    );
    let youPayToday = parseFloat(
      $(iceOverlayPayToday)
        .getText()
        .split('$')[1]
    );
    let futureCardStatement = parseFloat(
      $(iceOverlayFutureCardStatement)
        .getText()
        .split('$')[1]
    );
    let expectedTotalCost = youPayToday - futureCardStatement;
    if(expectedTotalCost>0){
    assert.equal(
      actualTotalCost,
      expectedTotalCost,
      'ICE overlay Total Trip Cost is incorrect'
    );
    console.log('actualTotalCost:'+actualTotalCost +' and expectedTotalCost: ' +expectedTotalCost);
    } else
    {
      assert.equal(
        actualTotalCost,0.00,'ICE overlay Total Trip Cost is incorrect');
        console.log('actualTotalCost:'+actualTotalCost +' and expectedTotalCost: ' +expectedTotalCost);
    }
  }

  verifyIceBannerTotalTripCostValue() {
    let actualTotalCost = parseFloat(
      $(iceBannerTotalCost)
        .getText()
        .split('$')[1]
    );
    let youPayToday = parseFloat(
      $(iceBannerPayToday)
        .getText()
        .split('$')[1]
    );
    let futureCardStatement = parseFloat(
      $(iceBannerFutureCardStatement)
        .getText()
        .split('$')[1]
    );
    let expectedTotalCost = youPayToday - futureCardStatement;
    if(expectedTotalCost>0){
      assert.equal(
        actualTotalCost,
        expectedTotalCost,
        'ICE Banner Total Trip Cost is incorrect'
      );
      console.log('actualTotalCost:'+actualTotalCost +' and expectedTotalCost: ' +expectedTotalCost);
      } else
      {
        assert.equal(
          actualTotalCost,0.00,'ICE Banner Total Trip Cost is incorrect');
          console.log('actualTotalCost:'+actualTotalCost +' and expectedTotalCost: ' +expectedTotalCost);
      }
  }

  verifyIfIceOverlayBannerIsDisplayedAndCloseIt() {
    try {
      browser.pause(2000)
      $(icePopupClose).waitForDisplayed();
      $(icePopupClose).click();
    } catch (err) {
      $(tripSummaryHeader).waitForDisplayed();
    }
  }

  getPayTotalValue() {
    $(payTodayLabel).waitForDisplayed();
    return $(payTodayLabel)
      .getText()
      .split(' ')[1]
      .split(' ')[0];
  }

  getUpliftPayMonthlyValue() {
    $(upliftPayMonthlyLabel).waitForDisplayed();
    browser.pause(2000)
    return parseFloat(
      $(upliftPayMonthlyLabel)
        .getText()
        .split('$')[1]
        .split(' ')[0]
    );
  }

  collectUpliftPayMonthlyValue() {
    let upliftPayMonthlyValue = this.getUpliftPayMonthlyValue();
    collect('upliftPayMonthlyValueKey', upliftPayMonthlyValue);
  }

  clickPayMonthlyUplift() {
    $(payMonthlyLabel).waitForDisplayed({ timeout: 20000 });
    $(payMonthlyLabel).click();
    $("iframe[name='pay-monthly']").waitForDisplayed({ timeout: 20000 });
  }

  completeUpLiftCardDetails() {
    const entries = Object.entries(upliftCardDetails);
    browser.pause(10000);
    for (const [key, value] of entries) {
      $(`iframe[id='uplift-secure-form-${key}']`).waitForDisplayed();
      let iFrame = $(`iframe[id='uplift-secure-form-${key}']`);
      browser.switchToFrame(iFrame);
      $(`input[id='${key}']`).waitForDisplayed();
      $(`input[id='${key}']`).setValue(value);
      browser.switchToParentFrame();
      browser.pause(2000);
    }

    $("input[id='full-ssn']").setValue('666583507');
    $("a[id='continue']").scrollIntoView({
      block: 'center',
      inline: 'start',
    });
    browser.pause(2000);
    $("a[id='continue']").waitForDisplayed();
    $("a[id='continue']").click();
    browser.pause(10000);
    $("a[id='i-agree-and-continue']").waitForDisplayed();
    $("a[id='i-agree-and-continue']").click();
    browser.pause(15000);
  }

  fillCheckMyRateForm() {
    const entries = Object.entries(upliftCustomerDetails);
    let iframe = $("iframe[name='pay-monthly']");
    iframe.scrollIntoView({
      block: 'center',
      inline: 'start',
    });
    browser.switchToFrame(iframe);

    for (const [key, value] of entries) {
      let formattedKey = key.replace(/_/g, '-');
      $(`input[id='${formattedKey}']`).waitForDisplayed();
      $(`input[id='${formattedKey}']`).setValue(value);
      browser.pause(2000);
    }
    $("select[id='home-region']").selectByVisibleText('Kentucky');
    $("a[id='check-my-rate']").waitForDisplayed();
    $("a[id='check-my-rate']").click();
    browser.pause(5000);
    $("a[id='i-agree-and-continue']").click();
    $("input[id='mobile-verification-code']").waitForDisplayed();
    $("input[id='mobile-verification-code']").setValue('76222');
    browser.pause(3000);
    $("a[id='verify']").waitForDisplayed();
    $("a[id='verify']").click();
    browser.pause(10000);
  }

  validateUpliftConfirmedStatus() {
    assert.isTrue(
      $("h2[class='loan-approved']").isDisplayed(),
      'The Uplift Confirmed status is not displayed.'
    );
    browser.switchToParentFrame(); //moving out of the Uplift iframe
  }

  validatePayTodayValueAndTotalAfterSavingAreEqual() {
    browser.pause(2000)
    let payTodayValue = this.getPayTotalValue();
    $(totalAfterSavingValue).waitForDisplayed();
    let afterSavingValue = $(totalAfterSavingValue).getText();
    assert.equal(
      payTodayValue,
      afterSavingValue,
      'Pay Today value is not updated or is not updated correctly.'
    );
  }

  validateUpliftPayMonthlyIsUpdated() {
    let upliftPayMonthlyCollected = getValueCollectorMap(
      'upliftPayMonthlyValueKey'
    );
    $(upliftPayMonthlyLabel).scrollIntoView({
      block: 'center',
      inline: 'start',
    });
    browser.waitUntil(
      () => this.getUpliftPayMonthlyValue() !== upliftPayMonthlyCollected,
      {
        timeout: 9000,
        timeoutMsg: 'Uplift Pay Monthly is not updated.',
        interval: 3000,
      }
    );
    let upliftPayMonthlyValue = this.getUpliftPayMonthlyValue();
    assert.isTrue(
      upliftPayMonthlyValue < upliftPayMonthlyCollected,
      'Uplift pay monthly value is not updated.'
    );
  }

  validateCheckedBagCount(checkedBag, segment) {
    browser.pause(3000);
    if (segment === 'departing') {
      $(checkedBagCountDeparture).scrollIntoView();
      assert.equal(
        $(checkedBagCountDeparture)
          .getText()
          .split(' ')[0],
        checkedBag,
        'Validation Failed: Bundle CheckedBag Count is not displayed'
      );
    }
    if (segment === 'returning') {
      $(checkedBagCountReturn).scrollIntoView();
      assert.equal(
        $(checkedBagCountReturn)
          .getText()
          .split(' ')[0],
        checkedBag,
        'Validation Failed: Bundle CheckedBag Count is not displayed'
      );
    }
  }

  validateNameFieldsArePrepopulatedWithData(page) {
    browser.pause(3000);
    let expectedFirstName;
    let expectedLastName;
    if (page === 'Travelers') {
      expectedFirstName = getValueCollectorMap('traveler1FirstName');
      expectedLastName = getValueCollectorMap('traveler1LastName');
    } else if (page === 'My Profile') {
      expectedFirstName = getValueCollectorMap('accountFirstName');
      expectedLastName = getValueCollectorMap('accountLastName');
    }
    let expectedNameOnCard = expectedFirstName + ' ' + expectedLastName;
    let actualFirstName = $(billingAddressFirstName).getAttribute('value');
    let actualLastName = $(billingAddressLastName).getAttribute('value');
    let actualNameOnCard = $(cardHolderName).getAttribute('value');

    assert.equal(
      actualFirstName,
      expectedFirstName,
      'The First Name is incorrect'
    );
    assert.equal(
      actualLastName,
      expectedLastName,
      'The Last Name is incorrect'
    );
    assert.equal(
      actualNameOnCard,
      expectedNameOnCard,
      'The Name on Card is incorrect'
    );
  }

  validateStoredCardIsUsed() {
    $(storedCardTypeAndNumber).waitForDisplayed();
    let actualCardTypeAndNumber = $(storedCardTypeAndNumber).getText();
    let actualBillingAddressLine1 = $(streetAddressInput).getAttribute('value');
    let actualCity = $(cityInput).getAttribute('value');
    let actualState = $(stateInput).getText();
    let actualZipCode = $(zipCodeInput).getAttribute('value');

    assert.equal(
      actualCardTypeAndNumber,
      'Visa Ending in ****4448',
      'The Card type or number is incorrect'
    );
    assert.equal(
      actualBillingAddressLine1,
      'Test Address',
      'The address is incorrect'
    );
    assert.equal(actualCity, 'Albany', 'The city is incorrect');
    assert.equal(actualState, 'Alaska', 'The state is incorrect');
    assert.equal(actualZipCode, '12345', 'The zip code is incorrect');
  }

  validateTotalAndCollectValue() {
    let totalAmount = parseFloat(
      $(headerTripTotal)
        .getText()
        .split('$')[1]
    );
    assert.isTrue(totalAmount > 100, 'Total amount is less than $100.');
    collect('totalAmountKey', totalAmount);
  }

  amountCalculated(percentValue) {
    return (percentValue / 100) * getValueCollectorMap('totalAmountKey');
  }

  validatePayTodayIsOrNotDisplayed(displayedStatus) {
    if (displayedStatus === 'is') {
      $(payTodayLabel).waitForDisplayed();
      $(payTodayLabel).scrollIntoView({
        block: 'center',
        inline: 'start',
      });
      assert.isTrue(
        $(payTodayLabel).isDisplayed(),
        'Pay Today is not displayed.'
      );
    } else {
      browser.pause(2000);
      assert.isFalse($(payTodayLabel).isDisplayed(), 'Pay Today is displayed.');
    }
  }

  validateUpliftPayMonthlyIsOrNotDisplayed(displayedStatus) {
    if (displayedStatus === 'is') {
      $(upliftPayMonthlyLabel).waitForDisplayed();
      $(upliftPayMonthlyLabel).scrollIntoView({
        block: 'center',
        inline: 'start',
      });
      assert.isTrue(
        $(upliftPayMonthlyLabel).isDisplayed(),
        'Uplift Pay Monthly is not displayed.'
      );
    } else {
      browser.pause(2000);
      assert.isFalse(
        $(upliftPayMonthlyLabel).isDisplayed(),
        'Uplift Pay Monthly is displayed.'
      );
    }
  }

  validateTotalAfterSaving(operator, value) {
    $(totalAfterSavingValue).waitForDisplayed();
    let totalAfterSaving = parseFloat(
      $(totalAfterSavingValue)
        .getText()
        .slice(1)
    );
    assert.isTrue(
      eval(`${totalAfterSaving} ${operator} ${value}`),
      `The Total After Saving value is not ${operator} $${value}`
    );
  }

  getTripSummary() {
    $(tripSummaryAmount).waitForDisplayed()
    let tripSummaryValue = $(tripSummaryAmount).getText()
    return tripSummaryValue;
  }

  removeVoucher(voucherPosition) {
    let tripSummaryAmountBeforeVoucherApplied = parseFloat(
      this.getTripSummary().split('$')[1]
    );
    $(
      `[data-hook='payment-page_vouchers-section_remove-button-${voucherPosition -
        1}']`
    ).waitForDisplayed();
    $(
      `[data-hook='payment-page_vouchers-section_remove-button-${voucherPosition -
        1}']`
    ).scrollIntoView({
      block: 'center',
      inline: 'start',
    });
    $(
      `[data-hook='payment-page_vouchers-section_remove-button-${voucherPosition -
        1}']`
    ).click();
    let totalAmountAfterVoucherRemoved = parseFloat(
      this.getTripSummary().split('$')[1]
    );
    browser.pause(5000)
  }

  // This method collects the manifest ID for later use. E.g. timeline5f60761c6a050.
  collectManifestID() {
    let manifestID = browser.getUrl().split("booking/")[1].split("/")[0];
    collect('manifestID', manifestID);
  }

  collectEndpoint() {
    let endpoint = this.getEnvironmentEndpoint()
    collect('endpoint', endpoint);
  }

  clickIceBannerApplyButton() {
    browser.pause(2000)
    $(instantCreditBannerApplyNowButton).waitForDisplayed();
    $(instantCreditBannerApplyNowButton).click();
    browser.pause(50000)
  }

  clickIcApplyButton() {
    browser.pause(4000)
    if($(instantCreditPopupApplyNowButton).isDisplayed()) {
      $(instantCreditPopupApplyNowButton).click();
    } else {
      $(instantCreditBannerApplyNowButton).waitForDisplayed();
      $(instantCreditBannerApplyNowButton).click();
    }
    browser.pause(50000)
  }

  // This method opens the ICE mock form in a new tab
  openInstantCreditMockForm(){
    browser.pause(5000)
    let mockUrl;
    let envEndpoint = getValueCollectorMap('endpoint')
    let currentBookingTimeline = getValueCollectorMap('manifestID')
    if(envEndpoint === 'intnexusrebr.okd' || envEndpoint === 'devnexusrebr.okd') {
      mockUrl = `http://ice-mock.devshare.allegiantair.com/index.php?returntoken=${currentBookingTimeline}`
    } else{
      mockUrl = `http://lhqdevjbrap01.devshare.allegiantair.com:8080/index.php?returntoken=${currentBookingTimeline}`;
    }
    browser.newWindow(mockUrl)
  }

  /**
   * This method obtains the environment endpoint from the appEnv argument used to run the test.
   * @returns {String}         e.g. stg, qa1, qa2, intnexusrebr.okd
   */
  getEnvironmentEndpoint() {
    let env = process.env.appEnv;
    let endpoint;
    if (env.includes('stg') || env.includes('qa1') || env.includes('qa2') || env.includes('in1') || env.includes('in2')) {
      endpoint = env.split('.')[1].split('.')[0];
  } else if (env.includes('int')) {
       endpoint = 'intnexusrebr.okd';
  } else if (env.includes('dev')) {
      endpoint = 'devnexusrebr.okd';
  }
  return endpoint;
}

  /**
   * This method fills in the ICE mock form with the data below. The amount and state (accepted or pending) are configurable.
   * @param {Int}  amount      e.g. 5000
   * @param {state} state      accepted OR pending
   */
  fillInInstantCreditForm(amount, state) {
    browser.pause(1000)
    let endpoint = this.getEnvironmentEndpoint()
    $("input[name='firstname']").setValue('Adult');
    $("input[name='lastname']").setValue('One');
    $("input[name='addr']").setValue('Test Address');
    $("input[name='city']").setValue('Test City');
    $("input[name='state']").setValue('Florida');
    $("input[name='zip']").setValue('12345');
    $(`input[value=${state}]`).click();
    $("input[name='env']").setValue(endpoint);

    if (state === 'accepted') {
    $("input[name='amount']").setValue(amount);
    $("input[name='ccno']").setValue('5280726999800501');
    $("input[name='cvv']").setValue('345');
    }
  }

  collectTripSummaryValue(){
    let tripSummaryValue = this.getTripSummary();
    collect("tripSummary", tripSummaryValue);
  }

  fillInInstantCreditFormWithCalculatedValue(state) {
    let tripSummaryAmount = getValueCollectorMap("tripSummary");
    let amount = parseInt(tripSummaryAmount.split("$")[1].split(".")[0]) - 50;
    this.fillInInstantCreditForm(amount, state);
  }

  clickInstantCreditMockSubmitButton() {
    $("button[id='but1']").click();
    browser.pause(2000)
  }

  clickInstantCreditMockBackButton() {
    $("button[id='but2']").click();
    browser.pause(2000)
  }

  validateInstantCreditOptionIsSelected() {
    $(storedCardTypeAndNumber).waitForDisplayed();
    assert.isFalse($(loyaltyEarnPointsDisclaimer).isDisplayed());
    let actualInstantCreditCardName = $(storedCardTypeAndNumber).getText();

    assert.include(actualInstantCreditCardName, 'Allegiant World Mastercard', 'The name of the card is incorrect');
  }

  validateUpdatedAddress() {
    $(hooks.paymentPageTitle).waitForDisplayed();
    assert.equal(
      $(streetAddressInput).getValue(), '123 any street', 'Failed: Address not shown'
    );
    assert.equal(
      $(cityInput).getValue(), 'Alabama', 'Failed: Address not shown'
    );
    assert.equal(
      $(stateInput).getValue(), 'Las Vegas', 'Failed: Address not shown'
    );
    assert.equal(
      $(zipCodeInput).getValue(), '89144', 'Failed: Address not shown'
    );
  }

  clearEmailTextBox(){
    $(emailAddressInput).waitForDisplayed({timeout: 3000});
    $(emailAddressInput).setValue(' ');
    this.pause(2000);
  }
  enterExistingEmail(accountStatus){
    switch (accountStatus) {
      case 'active':
        let email_address = getValueCollectorMap('email_address');
    this.pause(3000);
    $(emailAddressInput).setValue( email_address);
    console.log("Existing email address:- " + email_address)
    this.pause(10000);
        break;
        case 'suspended':
          this.pause(3000);
    $(emailAddressInput).setValue('suspendeduser@allegiantair.com');
    this.pause(1000);
       break;
       case 'closed':
        this.pause(3000);
        $(emailAddressInput).setValue('closeduser@allegiantair.com');
        this.pause(1000);
     break;
      default:
        assert.fail('Existing email address Enter validation failed');
    }
}
clcikAutoOptInCheckbox(){
  $(autoOptInCheckbox).waitForDisplayed({ timeout: 4000 });
  $(autoOptInCheckbox).click();
}
  verifyAutoOptInCheckbox(checkboxStatus){
    if (checkboxStatus==='true'){
    assert.equal($(claimMyPointsCheckbox).getAttribute('value'),'true','Claim my points is not selected');
    }
    else if(checkboxStatus==='false'){
      assert.equal($(claimMyPointsCheckbox).getAttribute('value'),'false','Claim my points is not selected');
    }
  }
  clickUseMyAllegiantPoints(){
    $(myAllegiantPoints).waitForDisplayed({ timeout: 4000 });
    $(myAllegiantPoints).click();
  };

   enterDataByFieldName(field,data){
	if(data==='empty'){
		data=''
	}
	do {
      browser.pause(5);
    } while ($(spinnerBar).isDisplayed());
    if ($(icePopupClose).isDisplayed()) {
      $(icePopupClose).click();
    }
	if(field==="Name on Card"){
		$(cardHolderName).click();
			if($(cardHolderName).getAttribute('value')!=''){
				var strLen=String($(cardHolderName).getAttribute('value')).length
				for(var i=0;i<strLen;i++){
					browser.keys('Backspace')
				}
			}
		$(cardHolderName).clearValue()
		$(cardHolderName).setValue('');
		if(data!=""){
		$(cardHolderName).setValue(data);
		}
		browser.keys('Tab')
	}
	if(field==="Card Number"){
		$(cardNumberInputField).click();
		$(cardNumberInputField).setValue('')
		$(cardNumberInputField).setValue(data);
		browser.keys('Tab')
  }
  if(field==="CVV"){
		$(cvvInput).click();
		$(cvvInput).setValue('')
		$(cvvInput).setValue(data);
		browser.keys('Tab')
	}
	if(field==="First Name"){
		$(billingAddressFirstName).click();
			if($(billingAddressFirstName).getAttribute('value')!=''){
				var strLen=String($(billingAddressFirstName).getAttribute('value')).length
				for(var i=0;i<strLen;i++){
					browser.keys('Backspace')
				}
			}
		$(billingAddressFirstName).clearValue()
		$(billingAddressFirstName).setValue('');
		if(data!=""){
		$(billingAddressFirstName).setValue(data);
		}
		browser.keys('Tab')
	}
	if(field==="Last Name"){
		$(billingAddressLastName).click();
			if($(billingAddressLastName).getAttribute('value')!=''){
				var strLen=String($(billingAddressLastName).getAttribute('value')).length
				for(var i=0;i<strLen;i++){
					browser.keys('Backspace')
				}
			}
		$(billingAddressLastName).clearValue()
		$(billingAddressLastName).setValue('');
		if(data!=""){
		$(billingAddressLastName).setValue(data);
		}
		browser.keys('Tab')
	}
	if(field==="Street Address 1"){
		$(streetAddressInput).click();
		$(streetAddressInput).setValue('')
		$(streetAddressInput).setValue(data);
		browser.keys('Tab')
	}
	if(field==="State"){
		$(stateInput).click();
		browser.keys('Tab')
	}
	if(field==="City"){
		$(cityInput).click();
		$(cityInput).setValue('')
		$(cityInput).setValue(data);
		browser.keys('Tab')
	}
	if(field==="Zip Code"){
		$(zipCodeInput).click();
		$(zipCodeInput).setValue('')
		$(zipCodeInput).setValue(data);
		browser.keys('Tab')
	}
	if(field==="Phone Number"){
		$(phoneNumberInput).click();
		$(phoneNumberInput).setValue('')
		$(phoneNumberInput).setValue(data);
		browser.keys('Tab')
	}
	if(field==="Email Address"){
		$(emailAddressInput).click();
		$(emailAddressInput).setValue('')
		$(emailAddressInput).setValue(data);
		browser.keys('Tab')
	}
	if(field==="Password"){
		$(password).scrollIntoView();
		$(password).waitForClickable();
		$(password).click();
		$(password).setValue('')
		$(password).setValue(data);
		browser.keys('Tab')
	}
	if(field==="Password Confirmation"){
		$(passwordConfirmation).scrollIntoView();
		$(passwordConfirmation).waitForClickable();
		$(passwordConfirmation).click();
		$(passwordConfirmation).setValue('')
		$(passwordConfirmation).setValue(data);
		browser.keys('Tab')
	}
	if(field==="Voucher Email"){
		 $(voucherEmailField).scrollIntoView();
		$(voucherEmailField).waitForClickable();
		$(voucherEmailField).click();
		$(voucherEmailField).setValue('')
		$(voucherEmailField).setValue(data);
		browser.keys('Tab')
	}
	if(field==="Voucher Number" && data.includes("same voucher")){
		$(voucherNumberInput).scrollIntoView();
		$(voucherNumberInput).waitForClickable();
		$(voucherNumberInput).click();
		$(voucherNumberInput).setValue('')
		$(voucherNumberInput).setValue($(voucherNumber).getText());
		}
	else if(field==="Voucher Number" && data!="same voucher"){
		$(voucherNumberInput).scrollIntoView();
		$(voucherNumberInput).waitForClickable();
		$(voucherNumberInput).click();
		$(voucherNumberInput).setValue('')
		$(voucherNumberInput).setValue(data);
	}
   }

   verifyValidationErrorForField(field,msg){
	if(field==="Name on Card"){
		assert.equal(
				$(cardholderNameErrorMsg).getText(),
				msg,
				'Validation failed: CVV msg validation failed!'
			);
	}
	if(field==="Card Number"){
		assert.equal(
				$(cardNumberErrorMsg).getText(),
				msg,
				'Validation failed: CVV msg validation failed!'
			);
	}
	if(field==="CVV"){
		assert.equal(
				$(cvvErrorMsg).getText(),
				msg,
				'Validation failed: CVV msg validation failed!'
			);
	}

	if(field==="First Name"){
		assert.equal(
				$(billingFnameErrorMsg).getText(),
				msg,
				'Validation failed: First Name msg validation failed!'
			);
	}
	if(field==="Last Name"){
		assert.equal(
				$(billingLnameErrorMsg).getText(),
				msg,
				'Validation failed: Last Name msg validation failed!'
			);
	}
	if(field==="Street Address 1"){
		assert.equal(
				$(billingStreetErrorMsg).getText(),
				msg,
				'Validation failed: Street Address 1 msg validation failed!'
			);
	}
	if(field==="State"){
		assert.equal(
				$(billingStateErrorMsg).getText(),
				msg,
				'Validation failed: State msg validation failed!'
			);
	}
	if(field==="City"){
		assert.equal(
				$(billingCityErrorMsg).getText(),
				msg,
				'Validation failed: City msg validation failed!'
			);
	}
	if(field==="Zip Code"){
		assert.equal(
				$(billingZipCodeErrorMsg).getText(),
				msg,
				'Validation failed: Zip Code msg validation failed!'
			);
	}
	if(field==="Phone Number"){
		assert.equal(
				$(billingPhoneErrorMsg).getText(),
				msg,
				'Validation failed: Phone Number msg validation failed!'
			);
	}
	if(field==="Email Address"){
		assert.equal(
				$(emailErrorMsg).getText(),
				msg,
				'Validation failed: Email Address msg validation failed!'
			);
	}
	if(field==="Password"){
		assert.equal(
				$(passwordErrorMsg).getText(),
				msg,
				'Validation failed: Password msg validation failed!'
			);
	}
	if(field==="Password Confirmation"){
		assert.equal(
				$(passwordConfirmationErrorMsg).getText(),
				msg,
				'Validation failed: Password Confirmation msg validation failed!'
			);
	}
	if(field==="Allegiant Voucher"){

		assert.equal(
				$(voucherErrorMsg).getText(),
				msg,
				'Validation failed: voucherErrorMsg validation failed!'
			);
			$(voucherNumberInput).clearValue()
	}
	if(field==="Allegiant Voucher Email"){

		assert.equal(
				$(voucherEmailFieldError).getText(),
				msg,
				'Validation failed: voucherErrorMsg validation failed!'
			);
			$(voucherNumberInput).clearValue()
	}
	if(field==="Allegiant Voucher Email"){

		assert.equal(
				$(promoCodeErrorMsg).getText(),
				msg,
				'Validation failed: voucherErrorMsg validation failed!'
			);
			$(voucherNumberInput).clearValue()
	}
   }

  // This method verifies if the loyalty section is expanded or collapsed in any scenario (guest / logged user / loyalty user)
  verifyLoyaltyDropdownState(state){
    if (state === "expanded") {
  try {
  $(loyaltyEmailAddress).waitForDisplayed();
} catch(ex) {
  $(loyaltyTotalPoints).waitForDisplayed();
}
}   else if (state === "collapsed"){
  try {
    assert.isFalse($(loyaltyEmailAddress).isDisplayed());
} catch(ex) {
    assert.isFalse($(loyaltyTotalPoints).isDisplayed());
  }}
}

  verifyLoyaltySectionDoesNotExist() {
    assert.isFalse($(myAllegiantPoints).isExisting(), 'The Loyalty section is displayed, but it should not be.');
  }

     verifyElementIsClickable(field,clickable){

	  if(field==="Voucher Apply"){
		  assert.equal(
				$(applyVoucher).isClickable(),
				eval(clickable),
				'Validation failed: applyVoucher button is clickable '
			);
	  }

       if(field==="Promo Code Apply"){
		  assert.equal(
				$(applyPromo).isClickable(),
				eval(clickable),
				'Validation failed: applyPromo button is clickable'
			);
	  }

       }

verifyElementIsDisplayed(field,displayed){
	  if(field==="Voucher Email"){
		  assert.equal(
				$(voucherEmailInput).isDisplayed(),
				eval(displayed),
				'Validation failed: voucherEmailInput is displayed : '+displayed
			);
	  }

      if(field==="Voucher Number"){
		  assert.equal(
				$(voucherNumber).isDisplayed(),
				eval(displayed),
				'Validation failed: voucherNumber is displayed : '+displayed
			);
	  }

     if(field==="Allegiant Promo Code"){
		  assert.equal(
				$(allegiantPromoInput).isDisplayed(),
				eval(displayed),
				'Validation failed: voucherNumber is displayed '
			);
	  }
}

verifyBalanceDueAmountIsUpdatedCorreclty(){
	try{
		var voucherAmount= parseFloat($(appliedVoucherAmount.replace("X",0)).getText().split('$')[1])
		if($(appliedVoucherAmount.replace("X",1)).isDisplayed()){
			voucherAmount=voucherAmount+ parseFloat($(appliedVoucherAmount.replace("X",1)).getText().split('$')[1])
		}
		if($(appliedVoucherAmount.replace("X",2)).isDisplayed()){
			voucherAmount=voucherAmount+ parseFloat($(appliedVoucherAmount.replace("X",2)).getText().split('$')[1])
		}
	}catch(ex){
		var voucherAmount=0
	}
	this.getTripSummaryAmount()
	var ExpectedAmount= parseFloat(TotalFareAmount.split('$')[1])-parseFloat(voucherAmount)
	assert.equal(
				eval($(myAllegiantSectionAmount).getText().split('$')[1]),
				eval(ExpectedAmount),
				'Validation failed: Balance Due Amount mismatch: '
			);
}


  fillCustomCardDetails(cardNumber, cvv) {
    do {
      browser.pause(5);
    } while ($(spinnerBar).isDisplayed());
    if ($(icePopupClose).isDisplayed()) {
      $(icePopupClose).click();
    }
    const strLen = cardNumber.split('');
    for (let i = 0; i < cardNumber.length; i++) {
      $(cardNumberInputField).addValue(strLen[i]);
    }
    $(cardExpirationMonthInput).click();
    browser.keys(['ArrowDown', 'ArrowDown', 'Enter']);
    $(cardExpirationYearInput).click();
    browser.keys(['ArrowDown', 'ArrowDown', 'Enter']);
    $(cvvInput).setValue(cvv);
    $(billingAddress).waitForDisplayed();
  }

  clickPurchaseMyTrip() {
    $(purchaseMyTrip).waitForEnabled();
    this.waitToBeClickable($(purchaseMyTrip));
    while ($(purchaseMyTrip).isExisting()) {
      this.clickElement($(purchaseMyTrip));
      $(confirmationPageTitle).waitForDisplayed({ timeout: 20000 });
    }
  }

  collectAppliedVoucherValue() {
    $("[data-hook='payment-page_vouchers-section_value-0']").waitForDisplayed();
    collect('voucherValueKey', $("[data-hook='payment-page_vouchers-section_value-0']").getText().replace("$", ""));
  }

  clickCarsBreadcrumb() {
    $(hooks.carsBreadcrumb).waitForDisplayed();
    $(hooks.carsBreadcrumb).scrollIntoView({
      block: 'center',
      inline: 'start',
    });
    $(hooks.carsBreadcrumb).click();
  }

  clickHotelsBreadcrumb() {
    $(hotelBreadcrumb).waitForDisplayed();
    $(hotelBreadcrumb).scrollIntoView({
      block: 'center',
      inline: 'start',
    });
    $(hotelBreadcrumb).click();
    browser.pause(4000)
  }

  waitForPageToLoad() {
    $(spinnerBar).waitForDisplayed({reverse: true})
    browser.pause(4000);
  }

  checkCardHolderNameIsNotDisplayed() {
    assert.isFalse($(cardHolderName).isDisplayed(), "Payment Card details are displayed on page");
  }

  validateUpliftPayMonthlyIsChecked() {
    browser.pause(2000)
    $(upliftPayMonthlyLabel).waitForDisplayed();
    expect($(upliftPaymentOption)).toHaveAttr('checked');
    expect($(upliftPaymentOption)).toBeChecked();
    assert.isOk('Uplift Pay Monthly option is selected');
  }

  validatePromoCodeName(promo) {
    $(promoField).waitForDisplayed();
    assert.equal($(promoField).getAttribute('value'), promo, "Promo code is missing or doesn't match with expected promo")
  }

  validateIceWarningText(warningText) {
    $(iceWarning).waitForDisplayed()
    assert.equal($(iceWarning).getText(), warningText, "The ICE warning text is wrong.")
  }

  validateIceWarningIsNotDisplayed() {
    browser.pause(2000)
    assert.isFalse($(iceWarning).isDisplayed(), "The ICE warning is still displayed.")
  }

  validateIceDetails() {
    $(iceCardIcon).waitForDisplayed();
    $(iceCardDetails).waitForDisplayed();
  }

  validateIceDetailsAreNotDisplayed() {
    browser.pause(2000)
    assert.isFalse($(iceWarning).isDisplayed(), "The ICE warning is displayed.")
    assert.isFalse($(iceCardIcon).isDisplayed(), "The ICE card icon is displayed.")
    assert.isFalse($(iceCardDetails).isDisplayed(), "The ICE card details is displayed.")
  }

  clickUseNewCardButton() {
    $(useNewCardButton).waitForDisplayed();
    $(useNewCardButton).click();
  }

  clickOnCardSection() {
    $(cardSection).waitForDisplayed();
    $(cardSection).click();
  }

  clearField(selector) {
    $(selector).waitForDisplayed();
    let inputValue = $(selector).getAttribute('value')
    $(selector).click();
    for(let i = 0; i < inputValue.length; i++) {
      browser.keys(['Backspace']);
    }
  }

  validateCardIconsStatus(cardDetails){
   this.verifyIfIceOverlayBannerIsDisplayedAndCloseIt()
   const selector = cardNumberInputField;
    for(let i=0; i < cardDetails.length; i++) {
    let cardTypeTable = cardDetails[i].cardType
    let cardFormatMap = cardTypeTable.replace(/ /g, '_');
    let cardTypeCode = cartTypeCodes[cardFormatMap];
    let data = cardDetails[i].number;
    this.clearField(selector);
    $(cardNumberInputField).setValue(data);
    browser.pause(1000)
    assert.isTrue($(activCardTypeInitial.replace('TYPE', cardTypeCode)).isDisplayed(), `${cardDetails[i].cardType} is not active`)
    let cardCodes = Object.values(cartTypeCodes)
    cardCodes = cardCodes.filter(item => item !== cardTypeCode)
    cardCodes.forEach((name, index) => {
      cardCodes[index] = $(inactivCardTypeInitial.replace('TYPE', name)).isDisplayed();
      assert.equal(cardCodes[index], true, `The Icon ${cardCodes[index]} cards is not inactive`);
    });
    this.clearField(selector);
   }
  }

  validateHotelAndFlightTripSummaryDisplayed(packageHeading) {
    $(tripSummaryFlightHeader).waitForDisplayed();
    let headerDetails = $(tripSummaryFlightHeader).getText()
    assert.equal(headerDetails, packageHeading, "Whrong package heading is displayed in the trip summary")
  }
clickEditHotelTripSummaryButton() {
  $(editHotelCartButton).waitForDisplayed();
  $(editHotelCartButton).click();
}
verifyBecomeAlwaysMemberContentLine1(){
  do {
    browser.pause(5);
  } while ((!$(hooks.paymentPageTitle).isDisplayed()||$(spinnerBar).isDisplayed()));
  if ($(icePopupClose).isDisplayed()) {
    $(icePopupClose).click();
  }
  $(allwaysMemberAllwaysIcon).scrollIntoView();
  assert.equal($(allwaysMemberAllwaysIcon).isDisplayed(),
  true,'Allways icon is not displyed in allways member section');
  assert.equal($(allwaysMemberContentsLine1).getText(),
  'Become an Allways member!','Allways Member Contents Line1 is not displyed');
}
verifyBecomeAlwaysMemberContentLine2(){
    assert.include($(allwaysMemberContentsLine2).getText(),
  'Claim Your','Allways Member Contents Line2 is not displyed');
}
verifyBecomeAlwaysMemberContentLine3(){
  assert.include($(allwaysMemberContentsLine3).getText(),
  'As a member there is no limit to the points you can earn','Allways Member Contents Line3 is not displyed');
}
verifyBecomeAlwaysMemberContentLine4(){
  assert.equal($(allwaysMemberContentsLine4).getText(),
  'Yes! Claim my points and become an Allways member!','Allways Member Contents Line4 is not displyed');
}
verifyAllwaysRewardsSectionNotDisplayed(){
    assert.equal($(allwaysRewardsSection).isDisplayed(),
  false,'Allways Rewards Section is displayed');
}
verifyEstimatedEarningPointsContentLine1(){
  do {
    browser.pause(5);
  } while ((!$(hooks.paymentPageTitle).isDisplayed()||$(spinnerBar).isDisplayed()));
  if ($(icePopupClose).isDisplayed()) {
    $(icePopupClose).click();
  }
  $(allwaysEarningPointsAllwaysIcon).scrollIntoView();
  if($(loggedInUser).isDisplayed()){
    assert.equal($(allwaysEarningPointsAllwaysIcon).isDisplayed(),
  true,'Allways icon is not displyed in allways Earning points section');
  assert.equal($(allwaysRewardsTitle).getText(),
  'Allways™ Rewards','Allways rewards title is not displayed');
  assert.include($(allwaysEarningPointsContentsLine1).getText(),
  'You can earn an estimated total of','Allways earning points Contents Line1 is not displyed');
  }
  else{
  assert.equal($(allwaysEarningPointsAllwaysIcon).isDisplayed(),
  true,'Allways icon is not displyed in allways Earning points section');
  assert.equal($(allwaysRewardsTitle).getText(),
  'Allways™ Rewards','Allways rewards title is not displayed');
  assert.include($(allwaysEarningPointsContentsLine1).getText(),
  'You can earn an estimated total of','Allways earning points Contents Line1 is not displyed');
  }
}
verifyEstimatedEarningPointsContentLine2(){
  assert.include($(allwaysEarningPointsContentsLine2).getText(),
  'Allways Loyalty Points','Allways earning points Contents Line2 is not displyed');
}
verifyEstimatedEarningPointsContentLine3(){
  assert.include($(allwaysEarningPointsContentsLine3).getText(),
  'Allegiant World Mastercard®','Allways earning points Contents Line3 is not displyed');
}
verifyEstimatedEarningPointsContentLine4(){
  assert.include($(allwaysEarningPointsContentsLine4).getText(),
  'Total Points','Allways earning points Contents Line4 is not displyed');
  }
  verifyEstimatedEarningPointsDisclaimer(){
    assert.include($(allwaysRewardsPointsDisclaimer).getText(),
    'Points shown here are just an estimate','Allways Reward points disclaimer text not displyed');
  }
  collectLoyaltyRewardsPoints(){
      let allwaysLoyaltyEstimatePoints = $(allwaysEstimationLoyaltyPoints).getText();
      collect('estimationPoints', allwaysLoyaltyEstimatePoints);
  }
  verifyUseAllwaysPointSection(){
    do {
      browser.pause(5);
    } while ((!$(hooks.paymentPageTitle).isDisplayed()||$(spinnerBar).isDisplayed()));
    if ($(icePopupClose).isDisplayed()) {
      $(icePopupClose).click();
    }
    $(useMyAllwaysPoints).waitForDisplayed({ timeout: 40000 });
    assert.equal($(useMyAllwaysPoints).getText(),
    'Use my Allways™ Points','Use my Allways™ Points section is not displayed');
    assert.equal($(useMyAllwaysPointsAllwaysIcon).isDisplayed(),
    true,'Use my Allways™ Points section is not displayed');
  }
  verifySuspendedUserUseAllwaysPointSection(){
    do {
      browser.pause(5);
    } while ((!$(hooks.paymentPageTitle).isDisplayed()||$(spinnerBar).isDisplayed()));
    if ($(icePopupClose).isDisplayed()) {
      $(icePopupClose).click();
    }
    assert.equal($(useMyAllwaysPointsAllwaysIcon).isDisplayed(),
    false,'Use my Allways™ Points section is displayed');
  }
  clickUseAllwaysPointSection(){
    $(useMyAllwaysPoints).click();
  }
  useAllwaysPointsEmailPasswordField(){
    $(loyaltyLogin).waitForDisplayed({ timeout: 40000 });
    assert.equal($(loyaltyLogin).isDisplayed(),true,'Allways Email field is not displyed');
    $(loyaltyPassword).waitForDisplayed({ timeout: 40000 });
    assert.equal($(loyaltyPassword).isDisplayed(),true,'Allways Password field is not displyed');
  }
  useAllwaysPointsSignInButton(){
    assert.equal($(loyaltySignInButton).isDisplayed(),true,'Allways SignIN button is not displyed');
  }
  verifyuseAllwaysPointsAllwaysLogo(){
    $(allwaysLogo).waitForDisplayed({ timeout: 40000 });
    assert.equal($(allwaysLogo).isDisplayed(),true,'Allways Logo is not displyed in use my allways poonts section');
  }
  verifyuseAllwaysPointsAllwaysMessage(){
    assert.equal($(allwaysSignInMessage).getText(),
    'Sign in to use Allways™ points and book quicker by saving payment details!','Allways SignIn message is not displyed in use my allways poonts section');
  }
  verifyCurrentBalanceLabel(element){
    switch (element) {
      case 'Zero':
        assert.equal($(allwaysPointsSectionCurrentBalance).getText().replace(/(\n)/gm, " "),
    'Your Current Balance: 0 points = $0.00','Current Zero balance label in the Use my Allways™ Points section is not displayed');
        break;
        case 'Negative':
          assert.equal($(allwaysPointsSectionCurrentBalance).getText().replace(/(\n)/gm, " "),
          'Your Current Balance: 0 points = $0.00','Current negative balance label in the Use my Allways™ Points section is not displayed');
       break;
       case 'Positive':
        assert.include($(allwaysPointsSectionCurrentBalance).getText(),
        'Your Current Balance:','Current positive balance label in the Use my Allways™ Points section is not displayed');
        assert.include($(allwaysPointsSectionCurrentBalance).getText(),
        getValueCollectorMap('dollarAmount'),'Current positive balance label in the Use my Allways™ Points section is not displayed');
     break;
      default:
        assert.fail('Current balance label in the Use my Allways™ Points section validation failed');
    }
  }
verifyuseAllwaysPointsSlider(element){
  switch (element) {
    case 'Zero':
      assert.equal($(allwaysPointSlider).isDisplayed(),
      false,'Point slider in the Use my Allways™ Points section is displayed');
      break;
      case 'Negative':
        assert.equal($(allwaysPointSlider).isDisplayed(),
        false,'Point slider in the Use my Allways™ Points section is displayed');
     break;
     case 'Positive':
      assert.equal($(allwaysPointSlider).isDisplayed(),
      true,'Point slider in the Use my Allways™ Points section is not displayed');
   break;
    default:
      assert.fail('Point slider in the Use my Allways™ Points section validation failed');
  }
}
verifyuseAllwaysPointsAmountTextbox(element){
  switch (element) {
    case 'Zero':
      assert.equal($(allwaysPointInputBox).isDisplayed(),
  false,'Amount text box in the Use my Allways™ Points section is displayed');
      break;
      case 'Negative':
        assert.equal($(allwaysPointInputBox).isDisplayed(),
  false,'Amount text box in the Use my Allways™ Points section is displayed');
     break;
     case 'Positive':
      assert.equal($(allwaysPointInputBoxTitle).getText(),
      'Dollar Amount','Dollar Amount text box title in the Use my Allways™ Points section is not displayed');
      assert.equal($(allwaysPointInputBox).isDisplayed(),
      true,'Amount text box in the Use my Allways™ Points section is not displayed');
     break;
    default:
      assert.fail('Amount text box in the Use my Allways™ Points section validation failed');
  }
}
verifyuseAllwaysPointsApplyButton(element){
  switch (element) {
    case 'Zero':
      assert.equal($(allwaysPointsApplyButton).isDisplayed(),
      false,'Apply button in the Use my Allways™ Points section is displayed');
      break;
      case 'Negative':
        assert.equal($(allwaysPointsApplyButton).isDisplayed(),
      false,'Apply button in the Use my Allways™ Points section is displayed');
     break;
     case 'Positive':
        assert.equal($(allwaysPointsApplyButton).isDisplayed(),
      true,'Apply button in the Use my Allways™ Points section is not displayed');
      assert.equal($(allwaysPointsApplyButton).isEnabled(),
      true,'Apply button in the Use my Allways™ Points section is not Enabled');
     break;
    default:
      assert.fail('Apply button in the Use my Allways™ Points section validation failed');
  }
}
ValidateAvailabelPointsHeader(element){
  switch (element) {
    case 'Zero':
      assert.equal(
        $(pointsAvailableHeader).getText(),
        'Points Available : $0.00', 'Zero points Availabel label is not displayed');
      break;
      case 'Negative':
        assert.equal(
          $(pointsAvailableHeader).getText(),
          'Points Available : $0.00', 'Negative points Availabel label is not displayed');
     break;
     case 'Positive':
     let dollarAmount =  $(pointsAvailableHeader).getText().substr(19);
     collect('dollarAmount', dollarAmount);
      assert.equal(
        $(pointsAvailableHeader).getText(),
        'Points Available : '+dollarAmount, 'Positive points Availabel label is not displayed');
        break;
        default:
      assert.fail('Points Availabel label validation failed');
  }
}
clickApplyPoints(){
  do {
    browser.pause(5);
  } while ((!$(hooks.paymentPageTitle).isDisplayed()||$(spinnerBar).isDisplayed()));
  if ($(icePopupClose).isDisplayed()) {
    $(icePopupClose).click();
  }
  $(allwaysPointsApplyButton).click();
}
}
export default new PaymentPage();
export { TotalFareAmount ,paymentPageCollector};
