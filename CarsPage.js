import { Page } from '@g4/prova';
import { collect, getValueCollectorMap } from '@g4/prova/src/helpers/collector';
import { assert } from 'chai';
import { reverse } from 'lodash';
import { hotelValue } from '../pageobjects/HotelsPage';

const carsPageSpiner = "[data-hook='cars-page-spinner']";
const clickContinueButton = "[data-hook='cars-page_continue']";
const clickNoThanksButton = "[data-hook='cars-page_skip']";
const carsPageHeading = "[data-hook='cars-page_page-heading']";
const rentalDatesUpdateButton = "//div[5]/div[2]/form/div/div[2]/div[4]/button";
const addedToCart = "//span[contains(text(),'Added to cart')]";
const spinnerBar = "//span[contains(@data-hook,'spinner')]"
const hotelSectionCart = "[data-hook='cart-item_hotel']"
const dateFlagValue = {
  enabled: 'Day-a047d8-0 bMaVmA',
  disabled: 'Day-a047d8-0 jAshZa',
  between: 'Day-a047d8-0 hPJEvb',
  dropOffEnabled: 'Day-a047d8-0 clntea',
};
const colorFlagValue = {
  enabled: 'rgba(1,87,155,1)',
  disabled: 'rgba(113,111,111,1)',
};
const timeToIdMapping = {
  '12:00 AM': 0,
  '12:30 AM': 1,
  '1:00 AM': 2,
  '1:30 AM': 3,
  '2:00 AM': 4,
  '2:30 AM': 5,
  '3:00 AM': 6,
  '3:30 AM': 7,
  '4:00 AM': 8,
  '4:30 AM': 9,
  '5:00 AM': 10,
  '5:30 AM': 11,
  '6:00 AM': 12,
  '6:30 AM': 13,
  '7:00 AM': 14,
  '7:30 AM': 15,
  '8:00 AM': 16,
  '8:30 AM': 17,
  '9:00 AM': 18,
  '9:30 AM': 19,
  '10:00 AM': 20,
  '10:30 AM': 21,
  '11:00 AM': 22,
  '11:30 AM': 23,
  '12:00 PM': 24,
  '12:30 PM': 25,
  '1:00 PM': 26,
  '1:30 PM': 27,
  '2:00 PM': 28,
  '2:30 PM': 29,
  '3:00 PM': 30,
  '3:30 PM': 31,
  '4:00 PM': 32,
  '4:30 PM': 33,
  '5:00 PM': 34,
  '5:30 PM': 35,
  '6:00 PM': 36,
  '6:30 PM': 37,
  '7:00 PM': 38,
  '7:30 PM': 39,
  '8:00 PM': 40,
  '8:30 PM': 41,
  '9:00 PM': 42,
  '9:30 PM': 43,
  '10:00 PM': 44,
  '10:30 PM': 45,
  '11:00 PM': 46,
  '11:30 PM': 47,
};
const hooks = {
  passengerCapacityZero: '//*[text()="0"]',
  bagCapacityTwo: '//*[text()="2"]',
  carCount: '[data-hook="cars-page-properties-count"]',
  paginationNext: '[data-hook="select-next-page"]',
  carsBreadcrumb: "[data-hook='flights-breadcrumb_item-cars']",
  noCarsResultMessage: "[data-hook='cars-page-no-result-message']",
  carsPageLoadingSpinner: "[data-hook='cars-page-spinner']",
  carsPageContinueButton: "[data-hook='cars-page_continue']",
  carsPageNoThanksButton: "[data-hook='cars-page_skip']",
  carsPageHeading: "[data-hook='cars-page_page-heading']",
  searchContinueButton: "[data-hook='cars-page_continue']",
  carTypeMinimize: '//div[7]/div[1]/div/div[6]/div[1]',
  passengerCapacityMinimize: '//div[7]/div[1]/div/div[8]/div[1]',
  bagCapacityMinimize: '//div[7]/div[1]/div/div[10]/div[1]',
  closeFilter: '//div[7]/div[1]/div/div[3]/button',
  resetAll: '//*[text()="Reset All"]',
  carTypefilterCompact: '//*[text()="Compact"]',
  carTypefilterEconomy: '//*[text()="Economy"]',
  carTypefilterFullsize: '//*[text()="Fullsize"]',
  carTypefilterIntermediate: '//*[text()="Intermediate"]',
  carTypefilterPremium: '//*[text()="Premium"]',
  carTypefilterStandard: '//*[text()="Standard"]',
  carTypeFirst: '//div[6]/div[2]/div/div/div/div[',
  carTypeSecond: ']/label/div[2]',
  passengerCapFirst: '//div[8]/div[2]/div/div/div/div[',
  passengerCapSecond: ']/label/div[2]',
  bagCapacityFirst: '//div[10]/div[2]/div/div/div/div[',
  bagCapacitySecond: ']/label/div[2]',
  carTypeElmFirst: '//div[7]/div[2]/div[',
  carTypeElmSecond: ']/div/div[2]/div/span',
  passengerCapElmFirst: '//div[7]/div[2]/div[',
  passengerCapElmSecond: ']/div/div[2]/div/div/div[1]/span',
  bagCapElmFirst: '//div[7]/div[2]/div[',
  bagCapElmSecond: ']/div/div[2]/div/div/div[2]/span',
  carsPageLoadingSpinner: '[data-hook="cars-page-spinner_fetching-cars"]',
  carCount: '[data-hook="cars-page-properties-count"]',
  paginationNext: '[data-hook="select-next-page"]',
  carCheckboxFirst: '//div[6]/div[2]/div/div/div/div[',
  carCheckboxSecond: ']/label/div[1]/input',
  passengerCheckboxFirst: '//div[8]/div[2]/div/div/div/div[',
  passengerCheckboxSecond: ']/label/div[1]/input',
  bagCheckboxFirst: '//div[10]/div[2]/div/div/div/div[',
  bagCheckboxSecond: ']/label/div[1]/input',
  carTypeExpando: '//div[7]/div[1]/div/div[6]/button',
  passengerCapExpando: '//div[7]/div[1]/div/div[8]/button',
  bagCapExpando: '//div[7]/div[1]/div/div[10]/button',
  noCarsAvailable: '//div[7]/div[2]/div[2]/span',
  addToCartLable: '//div[3]/div/div[3]/div[1]/div/div[2]/button',
  addedToCard: '//span[text()="Added to cart"]',
  cartButton: '[data-hook="header-cart-button_price"]',
  vehicleContentInCart: '[data-hook="cart-item_vehicle_content"]',
  priceButton: '(//button[contains(@class,"Button__StyledButton-sc-1ececxa-1 eznEzY CarVendorPrices__PriceSelectionButton-ayz81e-3 kZTAAf")])[1]',
  firstPage: '[data-hook="select-page_1"]',
  headerCartButton: '[data-hook="header-cart-button"]',
  carLabel: '[data-hook="cart-item_hotel_heading"]',
  upDownArrowCarPanel: '//div[3]/div/div[2]/div[6]/div[1]/div/div[2]/img',
  carType: '//span[@class="Text-sc-1o5ubbx-0 bOHioz"]',
  carCartVehicle: '//*[@id="__next"]/div[2]/div[1]/header/div/div[3]/div/div[2]/div[6]/div[2]/div/div/div/div/div[1]/div/span',
  vehicleName: '//div[7]/div[2]/div[2]/div/div[2]/div/span',
  pickUpLabel: '//span[contains(text(),"Pick Up:")]',
  dropOffLabel: '//span[contains(text(),"Drop Off:")]',
  cartPickUpDate: '//*[@id="__next"]/div[2]/div[1]/header/div/div[3]/div/div[2]/div[6]/div[2]/div/div/div/div/div[2]/div[1]/div/div[2]/span',
  cartDropOffDate: '//*[@id="__next"]/div[2]/div[1]/header/div/div[3]/div/div[2]/div[6]/div[2]/div/div/div/div/div[2]/div[2]/div/div[2]/span',
  pickUpdate: '//div[5]/div/div[1]/div/span',
  dropOffDate: '//div[5]/div/div[2]/div/span',
  carPanelItems: "[data-hook='cart-item_hotel_content']",
  carsPickUp: '//*[text()="Pick Up:"]',
  carsDropOf: '//*[text()="Drop Off:"]',
  passengerFilter:"//div[7]/div[1]/div/div[3]/button/div/span",
  bagFilter:"//div[7]/div[1]/div/div[3]/button/div/span",
  customizeRentalDates: '//*[text()="Customize Rental Dates"]',
  cartPickUpLabel: '//span[contains(text(),"Pick Up")and @class="Text-sc-1o5ubbx-0 cKyEGU"]',
  pickUpDateField: '[data-hook="car-date-picker_input-start-date"]',
  pickUpDateFieldValue: '[data-hook="car-date-picker_calendar-0_select-day-15"]',
  pickUpTimeField: '[data-hook="vehicle-pickup-time_start-time"]',
  pickUpTimeDefault: '[data-hook="vehicle-pickup-time_start-time_input"]',
  pickUpTimeFieldValue: '//div[@id="react-select-start-time-option-21"]',
  clickOnPickUpCalendar: "[class='Input__ClickableWrapper-dn8eno-2 gBZxbe']",
  clickOnDropOffCalendar: "[class='DatePicker__DateFieldControl-iz35q0-0 gecfVU']",
  dropOffLabel: '//*[@id="__next"]/div[2]/div[1]/header/div/div[3]/div/div[2]/div[6]/div[2]/div/div/div/div/div[2]/div[2]/div/div[1]/span',
  dropOffDateField: '[data-hook="car-date-picker_input-end-date"]',
  dropoffTimeFieldValue: '//div[@id="react-select-end-time-option-45"]',
  dropOffTimeField: '[data-hook="share-itinerary-confirmation-message_end-time"]',
  dropOffTimeFieldValue: '[data-hook="share-itinerary-confirmation-message_end-time"] input',
  updateButton: "[class='Button__ButtonText-sc-1ececxa-0 fFLZUm']",
  tripDurationPickUpDate: '//div[5]/div[1]/div[1]/div/span',
  carPageTitle: '//title',
  tripDurationDropOffDate: '//div[5]/div[1]/div[2]/div/span',
  HeaderCartHeading:'[data-hook="cart-item_flight-package_heading"]',
  headerCartValue:'[data-hook="cart-total_value"]',
  tripSummaryPopupCloseButton:'[data-hook="cart-close"]',
  ancillariespagecontinuebutton: "[data-hook='ancillaries-page_continue-popup']",
  ancillariescontinuepopupbutton: "[data-hook='ancillaries-continue-popup_button_continue']",
  carsPageUpliftBanner: "[data-hook='cars-uplift-banner-description']",
  upliftFirstDescriptionBanner: "[data-hook='cars-uplift-banner-description']>span:nth-child(1)",
  upliftPriceDescriptionBanner: "[data-hook='cars-uplift-banner-description']>span:nth-child(2)>span:nth-child(1)",
  carsPageUpliftBannerLogo: "[data-hook='cars-page_uplift-logo']",
  carsPagePriceButtonsList: "[data-hook*='cars-page-car-card'] button[type='button']",
  upliftPopupIFrame: "iframe[id='up-modal-iframe']",
  upliftModal: "div[id='modal-body']",
  upliftModalDescription: "div[class='modal-action-call'] span",
  tripSummary: "//button[contains(@class,'TripSummary__TripSummaryButton-sc-1528jiq-0 iyTunf')]",
  editCta: "(//a[contains(text(),'Edit') and (@data-hook='cart-item_vehicle_link')])[2]",
  tripSummaryAddButton: "[data-hook='cart-item_hotel_link']",
  carsPageDisclaimerFeesLink: "[data-hook='cars-page-disclaimer']",
  alamoCarVendor : "(//*[@alt='vendor ALAMO'])[1]",
  enterpriseCarVendor:"(//*[@alt='vendor ENTERPRISE'])[1]",
  nationalCarVendor : "(//*[@alt='vendor NATIONAL'])[1]"

};

var flightValue=0;
var carValue=0;

class CarsPage extends Page {
  /**
   * opens a certain url
   * @param {String} url
   * * */
  waitForCarsPageToLoad() {
    if ($(hooks.carsPageLoadingSpinner).isDisplayed()) {
      this.waitForDisappear(hooks.carsPageLoadingSpinner, 30000);
    } else {
      $(hooks.carsPageContinueButton).waitForDisplayed();
    }
  }
  validateCarsPageAnchorToTop(){
    browser.pause(4000);
    try{
      if($(hooks.carsPageHeading).isDisplayed()===true){
        assert.equal(
          $(carsPageHeading).isDisplayedInViewport(),
          true,
          'Cars Page is not anchor to top'
        );
      }
		  browser.pause(1000);
     }catch(ex){
	    console.log('Cars page skipped');
     }
	do {
			browser.pause(50)
	} while ($(spinnerBar).isDisplayed())
	browser.pause(3000);
  }
 clickNoThanksButton() {
    browser.pause(8000);
    try{
      if($(hooks.carsPageHeading).isDisplayed()===true){
      $(hooks.carsPageNoThanksButton).waitForDisplayed();
	    $(hooks.carsPageNoThanksButton).scrollIntoView();
		  $(hooks.carsPageNoThanksButton).click();
      }
		  browser.pause(1000);
     }catch(ex){
	    console.log('Cars page skipped');
     }
	do {
			browser.pause(50)
	} while ($(spinnerBar).isDisplayed())
	browser.pause(3000);
  }

  applyCarTypeFilter(element) {
    switch (element) {
      case 'Compact':
        this.clickElement(hooks.carTypefilterCompact);
        break;
      case 'Economy':
        this.clickElement(hooks.carTypefilterEconomy);
        break;
      case 'Fullsize':
        this.clickElement(hooks.carTypefilterFullsize);
        break;
      case 'Intermediate':
        this.clickElement(hooks.carTypefilterIntermediate);
        break;
      case 'Premium':
        this.clickElement(hooks.carTypefilterPremium);
        break;
      case 'Standard':
        this.clickElement(hooks.carTypefilterStandard);
        break;
      default:
        assert.fail('car type filter not available');
    }
  }

  applyPassengerCapacityFilter(element) {
    switch (element) {
      case '0':
        this.clickElement(
          `${hooks.passengerCapFirst}2${hooks.passengerCapSecond}`
        );
        break;
      case '4':
        this.waitToBeClickable(
          `${hooks.passengerCapFirst}3${hooks.passengerCapSecond}`
        );
        this.clickElement(
          `${hooks.passengerCapFirst}3${hooks.passengerCapSecond}`
        );
        break;
      case '5':
        this.clickElement(
          `${hooks.passengerCapFirst}4${hooks.passengerCapSecond}`
        );
        break;
      case '7':
        this.clickElement(
          `${hooks.passengerCapFirst}5${hooks.passengerCapSecond}`
        );
        break;
      default:
        assert.fail('passesnger capacity filter not available');
    }
  }

  applyBagCapacityFilter(element) {
    switch (element) {
      case '0':
        this.clickElement(
          `${hooks.bagCapacityFirst}2${hooks.bagCapacitySecond}`
        );
        break;
      case '2':
        this.clickElement(
          `${hooks.bagCapacityFirst}3${hooks.bagCapacitySecond}`
        );
        break;
      case '3':
        this.clickElement(
          `${hooks.bagCapacityFirst}4${hooks.bagCapacitySecond}`
        );
        break;
      case '4':
        this.clickElement(
          `${hooks.bagCapacityFirst}5${hooks.bagCapacitySecond}`
        );
        break;
      case '5':
        this.clickElement(
          `${hooks.bagCapacityFirst}6${hooks.bagCapacitySecond}`
        );
        break;
      default:
        assert.fail('passesnger capacity filter not available');
    }
  }

  resetAllFilter() {
    this.scrollIntoViewElement(hooks.carsPageHeading);
    this.clickElement(hooks.resetAll);
  }

  closeFilter() {
    this.scrollIntoViewElement(hooks.carsPageHeading);
    this.clickElement(hooks.closeFilter);
  }

  noFilterByDefault() {
    let flag = true;
    let num = 2;
    while (flag) {
      const _element = hooks.carTypeFirst + num + hooks.carTypeSecond;
      $(_element).isDisplayed()
        ? assert.isTrue(
          !$(
            hooks.carCheckboxFirst + num++ + hooks.carCheckboxSecond
          ).isSelected(),
          'Car type selected by default'
        )
        : (flag = false);
    }
    flag = true;
    num = 2;
    while (flag) {
      const _element = hooks.passengerCapFirst + num + hooks.passengerCapSecond;
      $(_element).isDisplayed()
        ? assert.isTrue(
          !$(
            hooks.passengerCheckboxFirst
                + num++
                + hooks.passengerCheckboxSecond
          ).isSelected(),
          'Passenger capacity selected by default'
        )
        : (flag = false);
    }
    flag = true;
    num = 2;
    while (flag) {
      const _element = hooks.bagCapacityFirst + num + hooks.bagCapacitySecond;
      $(_element).isDisplayed()
        ? assert.isTrue(
          !$(
            hooks.bagCheckboxFirst + num++ + hooks.bagCheckboxSecond
          ).isSelected(),
          'Bag capacity selected by default'
        )
        : (flag = false);
    }
  }

  noExpandedByDefault() {
    assert.isTrue(
      $(hooks.carTypeExpando).getAttribute('aria-expanded') === 'true',
      'Car type not expended by default'
    );
    assert.isTrue(
      $(hooks.passengerCapExpando).getAttribute('aria-expanded') === 'true',
      'Passenger capacity not expended by default'
    );
    assert.isTrue(
      $(hooks.bagCapExpando).getAttribute('aria-expanded') === 'true',
      'Bag capacity not expended by default'
    );
  }

  expandoCollapse(type) {
    switch (type) {
      case 'Cars Type':
        this.clickElement(hooks.carTypeMinimize);
        break;
      case 'Passenger Capacity':
        this.clickElement(hooks.passengerCapacityMinimize);
        break;
      case 'Bags Capacity':
        this.clickElement(hooks.bagCapacityMinimize);
        break;
      default:
        assert.fail('type is not available');
    }
  }

  validateCollapse(type) {
    switch (type) {
      case 'Cars Type':
        assert.isTrue(
          $(hooks.carTypeExpando).getAttribute('aria-expanded') === 'false',
          'Car type not collapsed'
        );
        break;
      case 'Passenger Capacity':
        assert.isTrue(
          $(hooks.passengerCapExpando).getAttribute('aria-expanded')
            === 'false',
          'Passenger capacity not collapsed'
        );
        break;
      case 'Bags Capacity':
        assert.isTrue(
          $(hooks.bagCapExpando).getAttribute('aria-expanded') === 'false',
          'Bag capacity not collapsed'
        );
        break;
      default:
        assert.fail('type is not available');
    }
  }

  validateFilter(element, type) {
    switch (type) {
      case 'Car Type':
        this.validateCarType(element);
        break;
      case 'Passenger Capacity':
        this.validatePassengerCapacity(element);
        break;
      case 'Bag Capacity':
        this.validateBagCapacity(element);
        break;
      default:
        assert.fail('filter not available');
    }
  }

  validateCarType(type) {
    this.waitForCarsPageToLoad();
    if ($(hooks.noCarsAvailable).isDisplayed()) {
      return;
    }
    const count = this.getText(hooks.carCount).split(' ');
    let num = 2;
    let elm;
    elm = hooks.carTypeElmFirst + num++ + hooks.carTypeElmSecond;
    for (let i = 0; i < count[0]; i++) {
      if (!$(elm).isDisplayed()) {
        this.clickElement(hooks.paginationNext);
        num = 2;
        this.waitForCarsPageToLoad();
      }
      assert.include(
        this.getElement(elm).getText(),
        type,
        `${type} is not included`
      );
    }
  }

  validatePassengerCapacity(number) {
    this.waitForCarsPageToLoad();
    if ($(hooks.noCarsAvailable).isDisplayed()) {
      return;
    }
    const count = this.getText(hooks.carCount).split(' ');
    let num = 2;
    let elm;
    elm = hooks.passengerCapElmFirst + num++ + hooks.passengerCapElmSecond;
    for (let i = 0; i < count[0]; i++) {
      if (!$(elm).isDisplayed()) {
        this.clickElement(hooks.paginationNext);
        num = 2;
        this.waitForCarsPageToLoad();
      }
      assert.equal(
        this.getElement(elm).getText(),
        number,
        `${number} passenger capacity`
      );
    }
  }

  validateBagCapacity(number) {
    this.waitForCarsPageToLoad();
    if ($(hooks.noCarsAvailable).isDisplayed()) {
      return;
    }
    const count = this.getText(hooks.carCount).split(' ');
    let num = 2;
    let elm;
    for (let i = 0; i < count[0]; i++) {
      elm = hooks.bagCapElmFirst + num++ + hooks.bagCapElmSecond;
      if (!$(elm).isDisplayed()) {
        this.clickElement(hooks.paginationNext);
        num = 2;
        this.waitForCarsPageToLoad();
      }
      assert.equal(
        this.getElement(elm).getText(),
        number,
        `${number} bag capacity`
      );
    }
  }

  updatedCarList(carType, passengerCap, bagCap) {
    this.waitForCarsPageToLoad();
    if ($(hooks.noCarsAvailable).isDisplayed()) {
      return;
    }
    const count = this.getText(hooks.carCount).split(' ');
    let num = 2;
    let carTypeElm;
    let passengerCapElm;
    let bagCapElm;
    carTypeElm = hooks.passengerCapElmFirst + num++ + hooks.passengerCapElmSecond;
    passengerCapElm = hooks.passengerCapElmFirst + num++ + hooks.passengerCapElmSecond;
    bagCapElm = hooks.bagCapElmFirst + num++ + hooks.bagCapElmSecond;
    for (let i = 0; i < count[0]; i++) {
      if (!$(carTypeElm).isDisplayed()) {
        this.clickElement(hooks.paginationNext);
        num = 2;
        this.waitForCarsPageToLoad();
      }
      assert.include(
        this.getElement(carTypeElm).getText(),
        carType,
        `${carType} is not included`
      );
      assert.equal(
        this.getElement(passengerCapElm).getText(),
        passengerCap,
        `${passengerCap} passenger capacity`
      );
      assert.equal(
        this.getElement(bagCapElm).getText(),
        bagCap,
        `${bagCap} bag capacity`
      );
    }
  }

  waitForCarsPageToLoad() {
    browser.pause(2500);
    if ($(hooks.carsPageLoadingSpinner).isDisplayed()) {
      this.waitForDisappear(hooks.carsPageLoadingSpinner, 30000);
    } else {
      this.waitForDisplayed(hooks.searchContinueButton);
    }
  }

  openUrl(url) {
    super.setBrowserSize();
    browser.deleteAllCookies();
    browser.url(url);
  }

  clickOnCompact() {
    this.clickElement(hooks.carTypefilterCompact);
  }

  clickOnPassengerCapacity0() {
    this.pause(5000);
    this.clickElement(hooks.passengerCapacityZero);
  }

  clickOnBagCapacityTwo() {
    this.pause(5000);
    this.clickElement(hooks.bagCapacityTwo);
    this.pause(3000);
  }

  verifyNoCarsResultMessage() {
    this.pause(4000);
    assert.equal(
      $(hooks.noCarsResultMessage).isDisplayed(),
      true,
      'error message is not displayed'
    );
  }
  verifyUnAvailableCarVendors(vendor){
    switch (vendor) {
      case 'All':
        assert.equal(
          $(hooks.noCarsResultMessage).isDisplayed(),true,'error message is not displayed'
        );
        break;
       case 'Alamo':
        assert.equal(
          $(hooks.alamoCarVendor).isDisplayed(),false,'Alamo vendor car is displayed'
        );
        break;
       case 'Enterprise':
          assert.equal(
            $(hooks.enterpriseCarVendor).isDisplayed(),false,'Enterprise vendor car is displayed'
          );
          break;
        case 'National':
            assert.equal(
              $(hooks.nationalCarVendor).isDisplayed(),false,'National vendor car is displayed'
            );
        break;
      default:
        assert.fail('Vendor validation failed');
    }
  }
  verifyAvailableCarVendors(vendor){
    switch (vendor) {
      case 'All':
        $(hooks.alamoCarVendor).waitForDisplayed({ timeout: 15000 });
        assert.equal(
          $(hooks.alamoCarVendor).isDisplayed(),true,'Alamo vendor car is not displayed'
        );
        $(hooks.enterpriseCarVendor).waitForDisplayed({ timeout: 15000 });
        assert.equal(
          $(hooks.enterpriseCarVendor).isDisplayed(),true,'Enterprise vendor car is not displayed'
        );
        $(hooks.nationalCarVendor).waitForDisplayed({ timeout: 15000 });
        assert.equal(
          $(hooks.nationalCarVendor).isDisplayed(),true,'National vendor car is not displayed'
        );
        break;
       case 'Alamo':
        $(hooks.alamoCarVendor).waitForDisplayed({ timeout: 15000 });
        assert.equal(
          $(hooks.alamoCarVendor).isDisplayed(),true,'Alamo vendor car is not displayed'
        );
        break;
       case 'Enterprise':
        $(hooks.enterpriseCarVendor).waitForDisplayed({ timeout: 15000 });
          assert.equal(
            $(hooks.enterpriseCarVendor).isDisplayed(),true,'Enterprise vendor car is not displayed'
          );
        break;
        case 'National':
          $(hooks.nationalCarVendor).waitForDisplayed({ timeout: 15000 });
            assert.equal(
              $(hooks.nationalCarVendor).isDisplayed(),true,'National vendor car is not displayed'
            );
        break;
      default:
        assert.fail('Vendor validation failed');
    }
  }

  // added to cart functionality
  noCarsAddedToCard() {
    this.pause(2000);
    assert.equal(
      $(hooks.addedToCard).isDisplayed(),
      false,
      'Card added to cart, initially it should not added any car to the cart'
    );
  }

  carDetails() {
    this.waitForCarsPageToLoad();
    if ($(hooks.noCarsAvailable).isDisplayed()) {
      return;
    }
    const count = this.getText(hooks.carCount).split(' ');
    let num = 2;
    let elm;
    for (let i = 0; i < count[0]; i++) {
      elm = `//div[7]/div[2]/div[${num++}]/div/div[2]/div`;
      if (!$(`${elm}/span`).isDisplayed()) {
        this.clickElement(hooks.paginationNext);
        num = 2;
        i--;
        this.waitForCarsPageToLoad();
      } else {
        assert.notEqual(
          this.getElement(`${elm}/span`).getText(),
          this.getElement(elm).getAttribute('alt'),
          'Details are missing'
        );
      }
    }
  }

  addToList(elm, map) {
    if (elm.error) {
      return map;
    }
    const n = elm.getAttribute('alt');
    if (map.get(n)) {
      map.set(n, map.get(n) + 1);
    } else {
      map.set(n, 1);
    }
    return map;
  }

  checkForVendorLogo() {
    const count = this.getText(hooks.carCount).split(' ');
    let map = new Map();
    let num1 = 2; let num2 = 1;
    let elm1; let elm2; let
      elm3;
    if ($(hooks.firstPage).isDisplayed()) {
      this.clickElement($(hooks.firstPage));
    }
    for (let i = 0; i < count[0]; i++) {
      elm1 = `//div[7]/div[2]/div[${num1}]/div/div[3]/div[${num2++}]/div/div[1]`;
      elm2 = `//div[7]/div[2]/div[${num1}]/div/div[3]/div[${num2++}]/div/div[1]`;
      elm3 = `//div[7]/div[2]/div[${num1}]/div/div[3]/div[${num2++}]/div/div[1]`;
      if (!$(elm1).isDisplayed() && !$(elm2).isDisplayed() && !$(elm3).isDisplayed()) {
        this.clickElement(hooks.paginationNext);
        num1 = 2;
        num2 = 1;
        i--;
        this.waitForCarsPageToLoad();
      } else {
        num1++;
        num2 = 1;
        map = this.addToList($(`${elm1}/img`), map);
        map = this.addToList($(`${elm2}/img`), map);
        map = this.addToList($(`${elm3}/img`), map);
      }
    }
    assert.equal(map.get('vendor ENTERPRISE'), count[0], 'vendor ENTERPRISE is missing');
    assert.equal(map.get('vendor NATIONAL'), count[0], 'vendor NATIONAL is missing');
    assert.equal(map.get('vendor ALAMO'), count[0], 'vendor ALAMO is missing');
  }

  checkForVendorPrice() {
    const count = this.getText(hooks.carCount).split(' ');
    let num1 = 2; let num2 = 1;
    let elm1; let elm2; let
      elm3;
    if ($(hooks.firstPage).isDisplayed()) {
      this.clickElement($(hooks.firstPage));
    }
    for (let i = 0; i < count[0]; i++) {
      elm1 = `//div[7]/div[2]/div[${num1}]/div/div[3]/div[${num2++}]/div/div[2]`;
      elm2 = `//div[7]/div[2]/div[${num1}]/div/div[3]/div[${num2++}]/div/div[2]`;
      elm3 = `//div[7]/div[2]/div[${num1}]/div/div[3]/div[${num2++}]/div/div[2]`;
      if (!$(elm1).isDisplayed() && !$(elm2).isDisplayed() && !$(elm3).isDisplayed()) {
        this.clickElement(hooks.paginationNext);
        num1 = 2;
        num2 = 1;
        i--;
        this.waitForCarsPageToLoad();
      } else {
        num1++;
        num2 = 1;
        assert.equal($(`${elm1}/button`).isDisplayed(), true, 'price label of vendor ENTERPRISE is missing');
        assert.equal($(`${elm2}/button`).isDisplayed(), true, 'price label of vendor NATIONAL is missing');
        assert.equal($(`${elm3}/button`).isDisplayed(), true, 'price label of vendor ALAMO is missing');
      }
    }
  }

  addToCart() {
    this.pause(3000);
    this.clickElement($(hooks.priceButton));
    this.waitForCarsPageToLoad();
  }

  addedToCart() {
    this.waitForCarsPageToLoad();
    this.pause(3000);
    assert.equal(
      $(hooks.addedToCard).isDisplayed(),
      true,
      'Car should be added to cart'
    );
  }

  carCartDetails() {
    this.clickElement($(hooks.cartButton));
    this.pause(4000);
    const carDetailsField = '//div[3]/div/div[2]/div[6]/div[1]/div/div[2]';
    assert.equal($(carDetailsField).isDisplayed(), true, 'should display car details');
  }

  clickOnHeaderCartButton() {
    $(hooks.headerCartButton).waitForDisplayed({ timeout: 15000 });
    this.pause(2000);
    this.clickElement(hooks.headerCartButton);
    this.pause(2000);
  }

  verifyCarLabel() {
    assert.equal(
      $(hooks.carLabel).isDisplayed(),
      true,
      'car label is not displayed'
    );
  }

  upDownArrowCarPanel() {
    this.clickElement(hooks.upDownArrowCarPanel);
  }

  verifyCarPanelItems() {
    assert.equal(
      !$(hooks.carPanelItems).isDisplayed(),
      true,
      'car panel items displayed'
    );
  }

  verifyCarType() {
    assert.equal(
      $(hooks.carType).isDisplayed(),
      true,
      'car type is not displayed'
    );
  }

  verifyCarDescription() {
    this.pause(5000);
    assert.include(
      $(hooks.carCartVehicle).getText(),
      $(hooks.vehicleName).getText(),
      'car description is not same'
    );
  }

  verifyPickUpLabel() {
    assert.equal(
      $(hooks.cartPickUpLabel).isDisplayed(),
      true,
      'pick up label is not displayed'
    );
  }

  verifyPickUpDate() {
    const cartPickUpDate = new Date($(hooks.cartPickUpDate).getText());
    const pickUpdate = new Date($(hooks.pickUpdate).getText());

    assert.equal(
      cartPickUpDate.getDate(),
      pickUpdate.getDate(),
      'pick up date should be same'
    );

    assert.equal(
      cartPickUpDate.getMonth(),
      pickUpdate.getMonth(),
      'pick up month should be same'
    );

    assert.equal(
      cartPickUpDate.getHours(),
      pickUpdate.getHours(),
      'pick up hours should be same'
    );

    assert.equal(
      cartPickUpDate.getMinutes(),
      pickUpdate.getMinutes(),
      'pick up minutes should be same'
    );
  }

  verifyDropOffLabel() {
    assert.equal(
      $(hooks.dropOffLabel).isDisplayed(),
      true,
      'drop off label is not displayed'
    );
  }

  verifyDropOffDate() {
    const cartDropOffDate = new Date($(hooks.cartDropOffDate).getText());
    const dropOffDate = new Date($(hooks.dropOffDate).getText());

    assert.equal(
      cartDropOffDate.getDate(),
      dropOffDate.getDate(),
      'drop off date should be same'
    );

    assert.equal(
      cartDropOffDate.getMonth(),
      dropOffDate.getMonth(),
      'drop off month should be same'
    );

    assert.equal(
      cartDropOffDate.getHours(),
      dropOffDate.getHours(),
      'drop off hours should be same'
    );

    assert.equal(
      cartDropOffDate.getMinutes(),
      dropOffDate.getMinutes(),
      'drop off minutes should be same'
    );
  }

  validateCarPage() {
    this.pause(4000);
    assert.equal(
      $(hooks.carsPickUp).isDisplayed(),
      true,
      'Car Pick Up is not displayed'
    );
    assert.equal(
      $(hooks.carsDropOf).isDisplayed(),
      true,
      'Car Drop Off is not displayed'
    );
  }

  validatePassengerCapacityFilter(passengerCapacity) {
    assert.equal(
      this.getElement(hooks.passengerFilter).getText(),
      passengerCapacity +" "+ 'Passengers',
      `${passengerCapacity} passenger capacity`
    );
  }

  validateBagCapacityFilter(bagCapacity) {
    assert.equal(
      this.getElement(hooks.bagFilter).getText(),
      bagCapacity +" "+ 'Bags',
      `${bagCapacity} Bag capacity`
    );
  }

  validateCustomizeRentalDates() {
    this.pause(10000);
    $(hooks.customizeRentalDates).waitForDisplayed();
    assert.equal(
      $(hooks.customizeRentalDates).isDisplayed(),
      true,
      'Customize Rental Dates is not displayed'
    );
    this.clickCustomizeRentalDates();
  }

  validatePickUpFields() {
    this.pause(4000);
    $(hooks.pickUpLabel).waitForDisplayed();
    assert.equal(
      $(hooks.pickUpLabel).isDisplayed(),
      true,
      'Pickup Label is not displayed'
    );

    $(hooks.pickUpDateField).waitForDisplayed();
    assert.equal(
      $(hooks.pickUpDateField).isDisplayed(),
      true,
      'Pickup Date Field is not displayed'
    );

    $(hooks.pickUpTimeField).waitForDisplayed();
    assert.equal(
      $(hooks.pickUpTimeField).isDisplayed(),
      true,
      'Pickup Time Field is not displayed'
    );
  }

  validateDropOffFields() {
    this.pause(4000);
    assert.equal(
      $(hooks.dropOffLabel).isDisplayed(),
      true,
      'DropOff Label is not displayed'
    );
    assert.equal(
      $(hooks.dropOffDateField).isDisplayed(),
      true,
      'DropOff Date Field is not displayed'
    );
    assert.equal(
      $(hooks.dropOffTimeField).isDisplayed(),
      true,
      'DropOff Time Field is not displayed'
    );
  }

  validateTraverllerFields() {
    this.selectPickUpDate(this.getTripPickUpDate() + 1);
    this.selectDropOffDate(this.getTripDropOffDate());
    this.selectPickUpTime(this.getTripPickUpTime());
    this.addThirtyMinutesDropOffTime(this.getTripPickUpTime());
    this.pause(4000);
  }

  selectPickUpDate(pickDate) {
    this.pause(1000);
    this.clickElement(hooks.clickOnPickUpCalendar);
    this.clickElement(this.getDynamicDate(pickDate));
  }

  selectDropOffDate(dropOffDate) {
    this.pause(2000);
	  this.clickElement(this.getDynamicDate(dropOffDate));
  }

  selectPickUpTime(pickUpTime) {
    this.clickElement(hooks.pickUpTimeField);
    const color = this.getColorForTime(this.getPickUpTimeHooks(timeToIdMapping[pickUpTime]));
    this.pause(2000);
    this.clickElement(this.getPickUpTimeHooks(timeToIdMapping[pickUpTime]));
  }

  getDynamicDate(number) {
    return `//button[@data-hook='car-date-picker_calendar-0_select-day-${number}' and contains(@aria-hidden,'false') ]`;
  }

  getPickUpTimeHooks(pickUpTime) {
    return `//div[@id='react-select-start-time-option-${pickUpTime}']`;
  }

  getColorForTime(timeHooks) {
    return $(timeHooks).getCSSProperty('color').value;
  }

  validateTime(color) {
    if (colorFlagValue.enabled === color) {
      return true;
    } if (colorFlagValue.disabled === color) {
      return false;
    }
  }

  getDropOffTimeHooks(dropOffTime) {
    return `//div[@id='react-select-end-time-option-${dropOffTime}']`;
  }

  clickCustomizeRentalDates() {
    this.clickElement(hooks.customizeRentalDates);
    this.pause(2000);
  }

  validateDefaultValue() {
    const date1 = new Date(`${$(hooks.pickUpDateField).getAttribute('value')} ${$(hooks.pickUpTimeField).getText()}`);
    const date2 = new Date(`${$(hooks.dropOffDateField).getAttribute('value')} ${$(hooks.dropOffTimeField).getText()}`);
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    assert.equal(diffDays, 3, 'PickUp and DropOff diff is not 3 days');
  }

  validatethirtyDaysRule() {
    const d = new Date($(hooks.pickUpDateField).getAttribute('value'));
    d.setDate(d.getDate() + 31);
    const disabledDate = $(this.selectdisabledPickUpDate(d.getDate())).getAttribute('class');
    assert.equal(this.validateDate(disabledDate), false, 'PickUp Date is not disabled 30 days after flight pick up date');
  }

  selectdisabledPickUpDate(pickDate) {
    this.pause(1000);
    this.clickElement(hooks.clickOnPickUpCalendar);
    return this.getDisabledDynamicDate(pickDate);
  }

  getDisabledDynamicDate(number) {
    return `[data-hook='car-date-picker_calendar-1_select-day-${number}']`;
  }

  validateDate(dateClassName) {
    if (dateFlagValue.enabled === dateClassName || dateFlagValue.between === dateClassName || dateFlagValue.dropOffEnabled === dateClassName) {
      return true;
    } if (dateFlagValue.disabled === dateClassName) {
      return false;
    }
  }

  validateThirtyMinuteRule() {
    const date1 = new Date(`${$(hooks.pickUpDateField).getAttribute('value')} ${$(hooks.pickUpTimeField).getText()}`);
    const newTime = date1.setMinutes(date1.getMinutes() + 30);
    this.addThirtyMinutesTime($(hooks.pickUpTimeField).getText());
  }

  addThirtyMinutesTime(pickUpTime) {
    this.clickElement(hooks.pickUpTimeField);
    this.clickElement(this.getPickUpTimeHooks(timeToIdMapping[pickUpTime] + 1));
    this.pause(1000);
  }

  validatethirtyDaysRuleForDropOff() {
    this.pause(2000);
    const d = new Date($(hooks.pickUpDateField).getAttribute('value'));
    d.setDate(d.getDate() + 31);
    const disabledDate = $(this.selectdisabledDropOffDate(d.getDate())).getAttribute('class');
    this.pause(2000);
    assert.equal(this.validateDate(disabledDate), false, 'Drop Off Date is not disabled 30 days after flight pick up date');
  }

  selectdisabledDropOffDate(pickDate) {
    this.pause(1000);
    this.clickElement(hooks.clickOnDropOffCalendar);
    this.pause(2000);
    return this.getDisabledDynamicDate(pickDate);
  }

  validateSameDateAndTime() {
    this.clickElement(hooks.dropOffTimeField);
    const color = this.getColorForTime(this.getDropOffTimeHooks(timeToIdMapping[$(hooks.pickUpTimeField).getText()]));
    this.pause(2000);
    assert.equal(this.validateTime(color), false, 'Drop Off Date is not disabled.');
  }

  validateEnabledDatesinTripDuration() {
    const pick = new Date($(hooks.pickUpDateField).getAttribute('value'));
    const drop = new Date($(hooks.dropOffDateField).getAttribute('value'));
    const d = new Date($(hooks.pickUpDateField).getAttribute('value'));
    const diffTime = Math.abs(drop - pick);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    for (let i = 1; i < diffDays; i++) {
      if (pick.getDate() < drop.getDate()) {
        const d = pick;
        const enabledDate = $(`[data-hook='car-date-picker_calendar-0_select-day-${d.getDate()}']`).getAttribute('class');
        assert.equal(this.validateDate(enabledDate), true, 'Selected date range are disabled');
      } else {
        const d = pick;
        const enabledDate = $(`[data-hook='car-date-picker_calendar-1_select-day-${d.getDate()}']`).getAttribute('class');
        assert.equal(this.validateDate(enabledDate), true, 'Selected date range are disabled');
      }
    }
  }

  validateDatesOutsideTripDuration() {
    const pick = new Date($(hooks.pickUpDateField).getAttribute('value'));
    const drop = new Date($(hooks.dropOffDateField).getAttribute('value'));
    if (pick.getDate() < drop.getDate()) {
      let d = pick;
      d.setDate(d.getDate() - 1);
      const beforePickup = $(`[data-hook='car-date-picker_calendar-0_select-day-${d.getDate()}']`).getAttribute('class');
      assert.equal(this.validateDate(beforePickup), false, 'Prior to pickup date should be disabled');
      d = drop;
      d.setDate(d.getDate() + 1);
      const afterDropoff = $(`[data-hook='car-date-picker_calendar-0_select-day-${d.getDate()}']`).getAttribute('class');
      assert.equal(this.validateDate(afterDropoff), false, 'After to dropoff date should be disabled');
    } else {
      let d = pick;
      d.setDate(d.getDate() - 1);
      const beforePickup = $(`[data-hook='car-date-picker_calendar-0_select-day-${d.getDate()}']`).getAttribute('class');
      assert.equal(this.validateDate(beforePickup), false, 'Prior to pickup date should be disabled');
      d = drop;
      d.setDate(d.getDate() + 1);
      const afterDropoff = $(`[data-hook='car-date-picker_calendar-1_select-day-${d.getDate()}']`).getAttribute('class');
      assert.equal(this.validateDate(afterDropoff), false, 'After to dropoff date should be disabled');
    }
  }

  validateTimeDisabledTripDuration() {
    this.clickElement(hooks.pickUpTimeField);
    for (let i = 0; i < timeToIdMapping[$(hooks.pickUpTimeField).getText()]; i++) {
      const color = this.getColorForTime(this.getPickUpTimeHooks(i));
      assert.equal(this.validateTime(color), false, 'Time slots are not disabled');
    }
  }

  validateTimeEnabledTripDuration() {
    for (let i = timeToIdMapping[$(hooks.pickUpTimeField).getText()]; i < 48; i++) {
      const color = this.getColorForTime(this.getPickUpTimeHooks(i));
      assert.equal(this.validateTime(color), true, 'Time slots are not enabled');
    }
  }

  validatePickUpWithDropOff() {
    const pick = new Date($(hooks.pickUpDateField).getAttribute('value'));
    const drop = new Date($(hooks.dropOffDateField).getAttribute('value'));
    if (pick.getDate() < drop.getDate()) {
      this.pause(2000);
      this.clickElement(hooks.clickOnPickUpCalendar);
      drop.setDate(drop.getDate() + 1);
      this.pause(2000);
      this.clickElement(hooks.clickOnPickUpCalendar);
      const afterDropoff = $(`[data-hook='car-date-picker_calendar-0_select-day-${drop.getDate()}']`).getAttribute('class');
      assert.equal(this.validateDate(afterDropoff), false, 'Pick up Date and Time is greater than the Cars drop off date and time');
    } else {
      this.pause(2000);
      this.clickElement(hooks.clickOnPickUpCalendar);
      drop.setDate(drop.getDate() + 1);
      this.pause(2000);
      this.clickElement(hooks.clickOnPickUpCalendar);
      const afterDropoff = $(`[data-hook='car-date-picker_calendar-1_select-day-${drop.getDate()}']`).getAttribute('class');
      assert.equal(this.validateDate(afterDropoff), false, 'Pick up Date and Time is greater than the Cars drop off date and time');
    }
  }

  validateDropOffEnabledDateSlots() {
    const pick = new Date($(hooks.tripDurationPickUpDate).getText());
    const drop = new Date($(hooks.tripDurationDropOffDate).getText());
    const diffTime = Math.abs(drop - pick);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    for (let i = 1; i < diffDays; i++) {
      if (pick.getDate() < drop.getDate()) {
        const d = pick;
        d.setDate(d.getDate() + 1);
        if (!($(`[data-hook='car-date-picker_calendar-0_select-day-${d.getDate()}']`).isDisplayed())) {
          this.clickElement(hooks.clickOnPickUpCalendar);
        }
        const disabledDate = $(`[data-hook='car-date-picker_calendar-0_select-day-${d.getDate()}']`).getAttribute('class');
        assert.equal(this.validateDate(disabledDate), true, 'Selected date range are disabled');
      } else {
        const d = pick;
        d.setDate(d.getDate() + 1);
        const disabledDate = $(`[data-hook='car-date-picker_calendar-1_select-day-${d.getDate()}']`).getAttribute('class');
        assert.equal(this.validateDate(disabledDate), true, 'Selected date range are disabled');
      }
    }
  }

  validateDropOffTimeEnabledTripDuration() {
    this.clickElement(hooks.dropOffTimeField);
    for (let i = 0; i < timeToIdMapping[$(hooks.dropOffTimeField).getText()] + 1; i++) {
      const color = this.getColorForTime(this.getDropOffTimeHooks(i));
      assert.equal(this.validateTime(color), true, 'Time slots are not enabled');
    }
  }

  validateDropOffTimeDisabledTripDuration() {
    for (let i = timeToIdMapping[$(hooks.dropOffTimeField).getText()] + 1; i < 48; i++) {
      const color = this.getColorForTime(this.getDropOffTimeHooks(i));
      assert.equal(this.validateTime(color), false, 'Time slots are not disabled');
    }
  }

  getTripPickUpDate() {
    const pick = new Date($(hooks.tripDurationPickUpDate).getText());
    return pick.getDate();
  }

  getTripDropOffDate() {
    const drop = new Date($(hooks.tripDurationDropOffDate).getText());
    return drop.getDate();
  }

  getTripPickUpTime() {
    const pick = new Date($(hooks.tripDurationPickUpDate).getText());
    if (pick.getHours() >= 12) {
      if (pick.getHours() === 12) {
        var tripPickUpTime = `${pick.getHours()}:${this.getZeroForTime(pick.getMinutes())} PM`;
        return tripPickUpTime;
      }
      var tripPickUpTime = `${pick.getHours() - 12}:${this.getZeroForTime(pick.getMinutes())} PM`;
      return tripPickUpTime;
    }
    var tripPickUpTime = `${pick.getHours()}:${this.getZeroForTime(pick.getMinutes())} AM`;
    return tripPickUpTime;
  }

  getZeroForTime(timeInMinutes) {
    if (timeInMinutes === 0) {
      return '00';
    }
    return timeInMinutes;
  }

  addThirtyMinutesDropOffTime(dropOffTime) {
    this.clickElement(hooks.dropOffTimeField);
    this.clickElement(this.getDropOffTimeHooks(timeToIdMapping[dropOffTime] + 1));
    this.pause(1000);
  }

  validateDropOffTime() {
    this.addThirtyMinutesDropOffTime(this.getTripPickUpTime());
  }

  clickOnNoThanksLink(){
    this.clickElement(hooks.carsPageNoThanksButton);
  }

  // Todo: This function needs be named better
  carSelection() {
    this.waitForCarsPageToLoad();
    if ($(hooks.carPageTitle).getTitle() === 'Cars') {
      this.clickNoThanksButton();
    } else {
      console.log('Car Page is skipped');
    }
  }

  validateCarPageTitle(){
    browser.pause(5000)
    assert.equal(
      $(hooks.carsPageHeading).isDisplayed(),
      true,
      'Car page failed to load'
    );
  }

  clickCarBreadCrumb() {
    this.clickElement(hooks.carsBreadcrumb);
    this.pause(1000);
  }
  validateRemoveFromCartButton(){
    this.pause(4000);
    assert.equal(
      $(hooks.priceButton).getText(),
      'REMOVE FROM CART','Remove from cart Button is present')
  }
  clickRemoveFromCartButton(){
    this.clickElement(hooks.priceButton);
    this.pause(4000);
  }
  clickOnContinueButton(){
    $(hooks.carsPageContinueButton).waitForDisplayed();
		$(hooks.carsPageContinueButton).click();
		browser.pause(8000);
  }
  validateOnlyFlightAndCarDetailsDisplayed(){
    assert.equal(
      $(hooks.HeaderCartHeading).getText(),
      'FLIGHTS + VEHICLE','Only Flight and Car Details are not selected');
    this.pause(4000);
  }
clickContinueButton() {
		 $(hooks.carsPageContinueButton).waitForDisplayed();
		$(hooks.carsPageContinueButton).click();
		browser.pause(8000);
	}
  
  clickOnUpdateButton(){
    this.waitForDisplayed(rentalDatesUpdateButton, 5000);
    this.clickElement(rentalDatesUpdateButton);
    this.pause(5000);
  }

  validateCarPriceNotSelected(){
    assert.equal(
      $(addedToCart).isDisplayed(),
      false,
      'selected car is not deselected after customizing rental dates'
    );
  }

  validateCarNotInCart(){
    assert.equal(
      $(hooks.vehicleContentInCart).isDisplayed(),
      false,
      'selected car is not deselected after customizing rental dates'
    );
  }

  validateCarsListdisplayed(){
    assert.equal(
      (hooks.carCount).isDisplayed(),
      true,
      'Cars list is not displayed'
    );
  }

  clickFlightsCartButton(){
    this.pause(1000);
    this.clickElement(hooks.headerCartButton);
    this.pause(1000);
    flightValue=$(hooks.headerCartValue).getText().split('$')[1];
  }
    
 validateFlightOnlyPrice(){
    assert.equal (
    $(hooks.headerCartValue).getText().split('$')[1],
    flightValue,
    'Only Flight price is not available in the cart'
    ); 
  }

  validateFlightAndCarPrice(){
    var flightCarSum= parseFloat(flightValue)+parseFloat(carValue)
    assert.equal (
      $(hooks.headerCartValue).getText().split('$')[1],
      flightCarSum,
      'Only Flight and Car price is not available in the cart'
    ); 
  }

  validateCarPrice(){    
    this.pause(1000);
    carValue=$(hooks.priceButton).getText().split('$')[1];
  }
  
  validateFlightHotelAndCarPrice(){
    var flightHotelCarSum= parseFloat(hotelValue)+parseFloat(carValue);
    assert.equal (
      $(hooks.headerCartValue).getText().split('$')[1],
      flightHotelCarSum,
      'Only Flight, Hotel and car price is not available in the cart'
    ); 
  }

  clickCloseTripSummaryPopup(){
    this.clickElement(hooks.tripSummaryPopupCloseButton);
  }
  clickOnContinueInAncillariesPage(){
    this.waitForDisplayed(hooks.ancillariespagecontinuebutton, 5000);
    this.clickElement(hooks.ancillariespagecontinuebutton);
    browser.pause(1000);
    this.clickElement(hooks.ancillariescontinuepopupbutton);
  }

  validateCarsPageSkipped(){
    this.waitForDisplayed("//img[contains(@alt,'closeIcon')]", 10000);
      $("//img[contains(@alt,'closeIcon')]").click();
      console.log($("//span[contains(text(),'Review & Payment')]").isDisplayed());
      assert.equal(
        $("//span[contains(text(),'Review & Payment')]").isDisplayed(),
        true,
        'Cars Page is not skipped'
      );
  }

  clickCarsPageContinueButton() {
    try {
      $(hooks.carsPageHeading).waitForDisplayed({ timeout: 15000 });
      $(clickContinueButton).waitForDisplayed();
      browser.pause(1000);
      $(clickContinueButton).click();
    } catch (ex) {
      console.log('Cars page skipped!!!');
    }
  }

  validateUpliftBannerIsDisplayed() {
    assert.isTrue($(hooks.carsPageUpliftBanner).isDisplayed(), "The Uplift banners from the Cars page is missing for Uplift eligible booking.")
  }

  getUpliftBannerDescription() {
    let firstBannerDescription = $(hooks.upliftFirstDescriptionBanner).getText();
    let priceBannerDescription = $(hooks.upliftPriceDescriptionBanner).getText();
    let upliftBannerDescription = `${firstBannerDescription} ${priceBannerDescription}`

    return upliftBannerDescription
  }

  getUpliftRateFromUpliftBannerCarsPage() {
    let upliftRate = parseFloat($(hooks.carsPageUpliftBanner).getText().split("$")[1].split("/")[0]);
    return upliftRate
  }

  //make sure you're switched to Uplift iframe before calling this function. Use waitUpliftPopupToBeDisplayed() before this
  //to do the switch.
  getUpliftRateFromUpliftPopupCarsPage() {
    let upliftRate = parseFloat($(hooks.upliftModalDescription).getText().split("$")[1].split("/")[0]);
    return upliftRate
  }

  validateUpliftBannerDescriptionCarsPage(expectedText) {
    let upliftRateFromCarsPageBanner = this.getUpliftRateFromUpliftBannerCarsPage;
    let upliftBannerActualText = this.getUpliftBannerDescription()
    let upliftBannerExpectedText = expectedText.replace("XX", upliftRateFromCarsPageBanner);

    assert.equal(upliftBannerActualText, upliftBannerExpectedText, "The description of the Uplift banners from the Cars page is incorrect.")
  }

  validateUpliftLogoIsDisplayed() {
    assert.isTrue($(hooks.carsPageUpliftBannerLogo).isDisplayed(), "The Uplift logo is missing in the Uplift Banner from the Cars page.")
  }

  getLowestCarPrice() {
    let carsPagePriceButtonsList = $$(hooks.carsPagePriceButtonsList);
    let carPricesList = [];

    for(let price of carsPagePriceButtonsList) {
      let text = price.getText();
      if (text.includes("$")) {
        carPricesList.push(parseFloat(text.replace("$", "")))
      }
    }
    let lowestPrice = Math.min(...carPricesList);

    return lowestPrice
  }

  collectCarPageUpliftBannerRate() {
    let upliftBannerRate = this.getUpliftRateFromUpliftBannerCarsPage()
    collect('upliftBannerRateCarsPage', upliftBannerRate);
  }

  collectLowestPriceCar() {
    let lowestCarPrice = this.getLowestCarPrice();
    collect('lowestCarPrice', lowestCarPrice);
  }

  validateCollectedCarPriceIsLower() {
    let collectedPrice = getValueCollectorMap('lowestCarPrice');
    let currentLowestPrice = this.getLowestCarPrice();

    assert.isTrue(collectedPrice < currentLowestPrice, `The previously collected price of ${collectedPrice} is higher than the
    current lowest price of ${currentLowestPrice}`);
  }

  clickUpliftBannerCarsPage() {
    $(hooks.carsPageUpliftBanner).click()
  }

  waitUpliftPopupToBeDisplayed() {
    let iFrame = $(hooks.upliftPopupIFrame);
    browser.switchToFrame(iFrame);
    $(hooks.upliftModal).waitForDisplayed();
  }

  validateUpliftRateFromBannerVsPopup() {
    let collectedUpliftRate = getValueCollectorMap('upliftBannerRateCarsPage');
    let upliftRateFromPopUp = this.getUpliftRateFromUpliftPopupCarsPage();

    assert.equal(upliftRateFromPopUp, collectedUpliftRate, "The Uplift rate displayed in the banner does not equal the rate displayed in the Uplift pop-up.")
  }

  clickOnEditCtaOnPaymentsPage(){
    this.waitForDisplayed("//img[contains(@alt,'closeIcon')]", 5000);
      $("//img[contains(@alt,'closeIcon')]").click();
    this.waitForDisplayed(hooks.tripSummary, 5000);
    $(hooks.tripSummary).click();
    this.pause(2000);
    $(hooks.editCta).click();
  }

  clickAddButton(){
    this.scrollIntoViewElement(hooks.tripSummaryAddButton);
    this.clickElement(hooks.tripSummaryAddButton);
  }

  waitCarsPageToLoad() {
    $(carsPageSpiner).waitForDisplayed({reverse: true});
  }

  clickDisclaimerLink(disclaimer){
    if(disclaimer === "Taxes,carrier charges,&government fees"){
      $(hooks.carsPageDisclaimerFeesLink).waitForDisplayed();
      $(hooks.carsPageDisclaimerFeesLink).waitForClickable();
      $(hooks.carsPageDisclaimerFeesLink).click();
    
    }
   else if(disclaimer === "See Terms"){
    $(hooks.carsPageDisclaimerTermsLink).waitForDisplayed();
    $(hooks.carsPageDisclaimerTermsLink).waitForClickable();
    $(hooks.carsPageDisclaimerTermsLink).click();
    }
  }

  verifyHotelSectionFromCartCollapsedExpando() {
    $(hotelSectionCart).waitForDisplayed();
    $(hooks.carPanelItems).waitForDisplayed();
    $(hotelSectionCart).click();
    $(hooks.carPanelItems).waitForDisplayed({reverse:true});
    $(hotelSectionCart).click();
    $(hooks.carPanelItems).waitForDisplayed();
  }
}

export default new CarsPage();