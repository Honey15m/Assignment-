import { Given, When, Then } from '@cucumber/cucumber';
import HotelsPage from '../pageobjects/HotelsPage';

Then(/^I click on continue in Hotels page$/, function() {
  HotelsPage.clickoncontinueforHotelPage();
});

When(/^I click on the Hotels Page No Thanks Link$/, function() {
  HotelsPage.clickOnNoThanksLink();
});

When(/^I click on the Hotels Page Continue Button$/, function() {
  HotelsPage.waitForHotelResultsPageToLoad();
  HotelsPage.clickOnContinueButton();
});

When(/^I am on Hotels page and I see Hotels page title$/, function() {
  HotelsPage.waitForHotelResultsPageToLoad();
  HotelsPage.validateHotelsPageHeader();
});

When(/^I am on Hotel Results page and I click No thanks link$/, function() {
  HotelsPage.clickNoThankslinkHotelResults();
});

When(
  /^I am on Hotels page and property count should display the total count$/,
  function() {
    HotelsPage.validatePropertyCount();
  }
);

When(
  /^I am on Hotels page and I see Hotels label on the breadcrumb menu$/,
  function() {
    HotelsPage.waitForHotelResultsPageToLoad();
    HotelsPage.validateBreadcrumb();
  }
);

When(/^I am on Hotels page and I click on the search field$/, function() {
  HotelsPage.waitForHotelResultsPageToLoad();
  HotelsPage.clickOnSearch();
});

When(/^I am on Hotels page and I search by property name (.+)$/,
  function(propertyName) {
  HotelsPage.waitForHotelResultsPageToLoad();
  HotelsPage.searchByPropertyName(propertyName);
});

When(
  /^I am on Hotels page and all hotels matching "([^"]*)" should be displayed$/,
  function(searchKeyword) {
    HotelsPage.validateSearchResultsByPropertyName(searchKeyword);
  }
);

When(
  /^I am on Hotels page and the hotel count section is updated as per the filtered results$/,
  function() {
    HotelsPage.validatePropertyCount();
  }
);

When(/^I am on Hotels page and I clear the searched keyword$/, function() {
  HotelsPage.clearSearchResult();
});

When(
  /^I am on hotels page and all the filtered results should be cleared$/,
  function() {
    HotelsPage.validateSearchClear();
  }
);

When(/^I am on Hotels page and no hotels should be displayed$/, function() {
  HotelsPage.validateAddedToCartMessage();
});

Then(
  /^I am on Cars Page I navigate to Hotels Page by clicking on Hotels Breadcrumb$/,
  () => {
    HotelsPage.clickHotelBreadCrumb();
  }
);

Then(/^I am on hotels page I select a hotel$/, () => {
  HotelsPage.waitForHotelResultsPageToLoad();
  HotelsPage.clickRoomsandRateButton();
});

Then(/^I am on hotels page I select a room$/, () => {
  HotelsPage.clickBookButton();
});

Then(/^I am on hotels page Added to cart message is shown$/, () => {
  HotelsPage.ValidateHotelAddedToCart();
});

When(
  /^I am on Hotels page and I enter keyword "([^"]*)" in the search field$/,
  function(searchKeyword) {
    HotelsPage.enterTheSearchKeyword(searchKeyword);
  }
);

When(/^I am on Hotels page and I click on go$/, function() {
  HotelsPage.clickOnGoButton();
});

When(
  /^I am on Hotels page and all hotels with keyword "Paris" should be displayed$/,
  function() {
    HotelsPage.validateSearchResult();
  }
);

When(
  /^I am on Hotels page and the hotel count section with the hotel count for the filter should be updated$/,
  function() {
    HotelsPage.validateSearchCount();
  }
);

When(/^I am on Hotels page and I clear the searched keyword$/, function() {
  HotelsPage.clearSearchResult();
});

When(
  /^I am on hotels page and all the filtered results should be cleared$/,
  function() {
    HotelsPage.validateSearchClear();
  }
);

When(
  /^I am on Hotels page and I enter Invalid keyword "([^"]*)" in the search field$/,
  function(InvalidKeyWord) {
    HotelsPage.enterTheInvalidSearchKeyword(InvalidKeyWord);
  }
);

When(/^I click on the Hotels details Page Continue Button$/, function() {
  HotelsPage.clickHotelsDetailsPageContinueButton();
});

When(/^I am on Hotel Results page and I select "([^"]*)" rooms on Customize Hotel Stay$/, function(hotelRoomsCount) {
  HotelsPage.selectHotelRoomsCount(hotelRoomsCount);
});

When(/^I am on Hotel Results page and I click the Update button from Customize Hotel Stay$/, function() {
  HotelsPage.clickUpdateCustomizeHotelStayButton();
});

Then(
  /^I am on cars page and only flight details are displayed in the trip summary$/,
  function() {
    HotelsPage.validateOnlyFlightDetailsDisplayed();
  }
);

Then(
  /^I am on cars page and only the flight and hotel details are displayed in the trip summary$/,
  function() {
    HotelsPage.validateOnlyFlightAndHotelDetailsDisplayed();
  }
);

Then(
  /^I am on cars page and the flight hotel and car details are displayed in the trip summary$/,
  function() {
    HotelsPage.validateFlightHotelAndCarDetailsDisplayed();
  }
);

Then(
  /^I am on cars page and I click on expand or collapse section to expose hotel details$/,
  function() {
    HotelsPage.VerifyExpandSelection();
  }
);

When(/^I am on cars page and I click on edit$/, function() {
  HotelsPage.verifyEditHotelButton();
});

When(
  /^I am navigated to the hotels page from the shopping cart page$/,
  function() {
    HotelsPage.validateHotelsPageHeader();
  }
);

Then(/^I am on hotel page I select Map View$/, function() {
  HotelsPage.clickMapViewButton();
});

Then(/^I am on hotel page I check the map has zoom in & out$/, function() {
  HotelsPage.validateMapZoomViewFunctions();
});

Then(
  /^I am on hotel page I check the map has terrain view & satellite view$/,
  function() {
    HotelsPage.validateMapViewType();
  }
);

Then(
  /^I am on hotel page I check the map has Full screen & default view port$/,
  function() {
    HotelsPage.validateMapViewPort();
  }
);

When(/^I am on Hotels page I click continue button$/, function() {
  HotelsPage.clickContinueButton();
});
When(/^I am on Hotels page I expect Hotels page anchor to top$/, function() {
  HotelsPage.validateHotelsPageAnchorToTop();
});

When(/^I am on Hotels page I click No thanks button$/, function() {
  HotelsPage.clickNoThanksButton();
});

Then(
  /^I am on Hotels page I expect carryon bag (.+) for traveler (.+) for (.+) segments$/,
  function(carryOn, paxNum, segment) {
    HotelsPage.validateTripSummaryCarryOnBag(carryOn, paxNum, segment);
  }
);

Then(
  /^I am on Hotels page I expect checked bag (.+) for traveler (.+) for (.+) segments$/,
  function(checked, paxNum, segment) {
    HotelsPage.validateTripSummaryCheckedBag(checked, paxNum, segment);
  }
);

Then(
  /^I am on Hotels page I expect priorityAccess (.+) for traveler (.+) for (.+) segments$/,
  function(priorityAccess, paxNum, segment) {
    HotelsPage.validateTripSummaryPriorityAccess(
      priorityAccess,
      paxNum,
      segment
    );
  }
);

Then(
  /^I am on Hotels page I expect petInCabin (.+) for traveler (.+) for (.+) segments$/,
  function(petInCabin, paxNum, segment) {
    HotelsPage.validateTripSummaryPetInCabin(petInCabin, paxNum, segment);
  }
);

Then(/^I am on Hotels page I expect tripflex (.+) for traveler (.+)$/, function(
  tripflex,
  paxNum
) {
  HotelsPage.validateTripSummaryTripflex(tripflex, paxNum);
});
Then(
  /^I expect button from Bundles section of the Shopping Cart reads "(.+)"$/,
  function(buttonLabel) {
    HotelsPage.validateBundlesSectionButtonLabel(buttonLabel);
  }
);

Then(/^I am on Hotels Page I expect title "(.+)"$/, function(title) {
  HotelsPage.validateHotelsPageTitle(title);
});

When(/^I am on Hotels page and I click on reset all$/, function() {
  HotelsPage.clickOnResetAll();
});

When(
  /^I am on Hotels page and I check I am in hotels page and not navigated to cars page$/,
  function() {
    HotelsPage.validateUserInHotelsPage();
  }
);

When(
  /^I am on Hotels page and I check I am in hotels page and not navigated to cars page$/,
  function() {
    HotelsPage.validateUserInHotelsPage();
  }
);

When(
  /^I am on Hotels page and I store the check in and check out dates$/,
  function() {
    HotelsPage.collectCheckInAndCheckOut();
  }
);

When(
  /^I am on Hotels page and I store the name of the selected room$/,
  function() {
    HotelsPage.collectSelectedNameRoom();
  }
);

When(
  /^I am on Hotel Details page and I store the name of the selected hotel$/,
  function() {
    HotelsPage.collectSelectedHotelName();
  }
);

When(/^I am on hotels page and the disclaimer text is available$/, function() {
  HotelsPage.validateDisclaimerText();
});

When(
  /^I am on hotels page and I click on disclaimer taxes and fees link$/,
  function() {
    HotelsPage.clickOnTaxesAndFeesLink();
  }
);

When(/^I am on hotels page and I see the taxes and fees popup$/, function() {
  HotelsPage.validateTaxesAndFeespopup();
});

When(
  /^I am on hotels page and I click on disclaimer terms and conditions link$/,
  function() {
    HotelsPage.clickOnTermsAndConditionsLink();
  }
);

When(
  /^I am on hotels page and I see the disclaimer terms and conditions popup$/,
  function() {
    HotelsPage.validateTermsAndConditionspopup();
  }
);

When(/^I am on hotels page I click on back to results$/, function() {
  HotelsPage.clickOnBackToResults();
});

When(
  /^I am on Hotels page I check the Label for Current Hotel in the banner$/,
  function() {
    HotelsPage.validateCurrentHotelLabel();
  }
);

When(
  /^I am on Hotels page I click on Remove Selection in the banner$/,
  function() {
    HotelsPage.clickOnRemoveSelection();
  }
);

When(/^I am on Hotels page I click on cart$/, function() {
  HotelsPage.clickOnCart();
});

When(
  /^I am on Hotels page I check there are no hotels in the cart$/,
  function() {
    HotelsPage.validateHotelNotInCart();
  }
);

When(/^I am on Hotels page I click on price Low to High button$/, function() {
  HotelsPage.clickOnPriceLowToHigh();
});

When(/^I am on Hotels page I select the first non featured hotel$/, function() {
  HotelsPage.selectFirstNonFeaturedHotel();
});

When(/^I am on Hotel Details page I select the first hotel room$/, function() {
  HotelsPage.selectFirstRoom();
});

When(/^I am on Hotel Details page I click No Thanks Hotel Link$/, function() {
  HotelsPage.clickNoThanksButtonFromHotelDetails();
});

When(
  /^I validate the flights added to the tripsummary before selecting the hotel$/,
  function() {
    HotelsPage.validateFlightPrice();
  }
);

When(/^I am on hotels page I validate the room added$/, function() {
  HotelsPage.validateRoomPrice();
});

Then(
  /^I am on cars page and only the flight and hotel price is displayed in the trip summary$/,
  () => {
    HotelsPage.validateFlightAndHotelPrice();
  }
);

Then(/^I am on hotels page I click on View breakdown link$/, () => {
  HotelsPage.clickViewBreakdown();
});

Then(/^I am on hotels page I close the View breakdown popup$/, () => {
  HotelsPage.clickViewBreakdownCloseButton();
});

Then(/^I check the hotels page is skipped$/, function() {
  HotelsPage.ValidateHotelsPageSkipped();
});

When(
  /^I am on hotels details page I click on the Continue Button$/,
  function() {
    HotelsPage.clickHotelsDetailsPageContinueButton();
  }
);

When(/^I am on hotels page I choose checkIn Date$/, function() {
  HotelsPage.selectCheckInDate(HotelsPage.getTripCheckInDate() + 1);
});

When(/^I am on hotels page I click on customize stay date button$/, function() {
  HotelsPage.clickCustomizeStayDates();
});

Then(/^I am on hotels Page I click on update$/, () => {
  HotelsPage.clickOnUpdateButton();
});

When(
  /^I am on hotels Page I check the cart doesn't have any hotel$/,
  function() {
    HotelsPage.clickOnHeaderCartButton();
    HotelsPage.validateHotelNotInCart();
  }
);

Then(
  /^I am on Hotel Results page and I validate that Uplift banner is displayed$/,
  function() {
    HotelsPage.validateUpliftBannerIsDisplayedHotelPages();
  }
);

Then(
  /^I am on Hotel Results page and I validate that Uplift description reades "([^"]*)"$/,
  description => {
    HotelsPage.validateUpliftBannerDescriptionHotelResultsPage(description);
  }
);

Then(
  /^I am on Hotel Results page and I validate that Uplift logo is displayed$/,
  function() {
    HotelsPage.validateUpliftBannerLogoHotelResultsPage();
  }
);

Then(
  /^I am on Hotel Details page and I validate that Uplift banner is displayed$/,
  function() {
    HotelsPage.validateUpliftBannerIsDisplayedHotelPages();
  }
);

Then(
  /^I am on Hotel Details page and I validate that Uplift description reades "([^"]*)"$/,
  description => {
    HotelsPage.validateUpliftBannerDescriptionHotelDetailsPage(description);
  }
);

Then(
  /^I am on Hotel Details page and I validate that Uplift logo is displayed$/,
  function() {
    HotelsPage.validateUpliftBannerLogoHotelDetailsPage();
  }
);

When(
  /^I am on Hotel Results page and I collect the Uplift banner value$/,
  function() {
    HotelsPage.collectUpliftBannerValueHotelResultsPage();
  }
);

When(
  /^I am on Hotel Details page and I collect the Uplift banner value$/,
  function() {
    HotelsPage.collectUpliftBannerValueHotelDetailsPage();
  }
);

When(
  /^I am on Hotel Results page and I click on Hotels Rating filter$/,
  function() {
    HotelsPage.clickHotelRating();
  }
);

When(/^I am on Hotel Results page and I click on Uplift banner$/, function() {
  HotelsPage.clickUpliftBannerHotelResults();
});

Then(
  /^I am on Hotel Results page and I validate that the content of the pop-up is displayed$/,
  function() {
    HotelsPage.validateUpliftBannerPopupIsDisplayed();
  }
);

Then(
  /^I am on Hotel Results page and I validate that the Uplift banner value is metching with Uplift Pop-up value$/,
  function() {
    HotelsPage.validateUpliftValueBannerAndPopupHotelResults();
  }
);

When(/^I am on Hotel Details page and I click on Uplift banner$/, function() {
  HotelsPage.clickUpliftBannerHotelDetails();
});

Then(
  /^I am on Hotel Details page and I validate that the content of the pop-up is displayed$/,
  function() {
    HotelsPage.validateUpliftBannerPopupIsDisplayed();
  }
);

Then(
  /^I am on Hotel Details page and I validate that the Uplift banner value is metching with Uplift Pop-up value$/,
  function() {
    HotelsPage.validateUpliftValueBannerAndPopupHotelDetails();
  }
);

Then(
  /^I am on Hotel Results page and I validate the Uplift banner value is different than the previous collected value$/,
  function() {
    HotelsPage.validateUpliftBannerValueIsDifferentThanCollectedValue();
  }
);

When(
  /^I am on Hotel Results page and I wait for the spinner to disappear$/,
  function() {
    HotelsPage.waitSpinnerToDisappearHotelResults();
  }
);

Then(
  /^I am on Hotel Details page and I validate that the Uplift banner value is higher than the Hotel Results value$/,
  function() {
    HotelsPage.validateUpliftHotelDetailsValueIsHigherThanTheHotelResultsValue();
  }
);

When(
  /^I am on the Hotels page and I open the Hotel gallery pop-up$/,
  function() {
    HotelsPage.clickHotelGalleryIcon();
  }
);

Then(
  /^I am on the Hotel gallery pop-up and I expect that the image alternate text is displayed$/,
  function() {
    HotelsPage.validateImageGalleryAltTextIsDisplayed();
  }
);

Then(/^I am navigated to the hotels page from the cars page$/, () => {
  HotelsPage.validateHotelsPageHeader();
});
Then(
  /^I am on Hotels page I click (.+) option$/,
  function(view){
    HotelsPage.clickListOrMapView(view);
  }
);
Then(
  /^I am on Hotels page I click (.+) link$/,
  function(SortBy){
    HotelsPage.clickSortByOption(SortBy);
  }
);
  Then(
    /^I am on Hotels page I click (.+) filter by Rating$/,
    function(hotelRating){
     HotelsPage.clickHotelRating();
      HotelsPage.clickHotelRatingOption(hotelRating);
    }
);
Then(
  /^I am on Hotels page I click (.+) filter by Price Per Night$/,
  function(PricePerNight){
    HotelsPage.clickHotelPricePerNight();
    HotelsPage.clickPricePerNightOption(PricePerNight);
  }
);
Then(
  /^I am on Hotels page I click (.+) filter by Amenities$/,
  function(Amenities){
    HotelsPage.clickHotelAmenities();
    HotelsPage.clickAmenitiesOption(Amenities);
  }
);
Then(
  /^I am on Hotels page I click (.+) filter by Nearby$/,
  function(Nearby){
    HotelsPage.clickHotelNearby();
    HotelsPage.clickNearbyOption(Nearby);
  }
);
Then(
  /^I am on Hotels page I click (.+) filter by Neighborhood$/,
  function(Neighborhood){
    HotelsPage.clickHotelNeighborhood();
    HotelsPage.clickNeighborhoodOption(Neighborhood);
  }
);
Then(
  /^I am on hotels page I click on a hotel image$/, () => {
    HotelsPage.waitForHotelResultsPageToLoad();
    HotelsPage.clickHotelImage();
  }
);
Then(
  /^I am on hotels page I click on the Map link$/, () => {
    HotelsPage.waitForHotelResultsPageToLoad();
    HotelsPage.clickHotelMap();
  }
);
Then(
  /^I am on Hotels page I click (.+) disclaimer$/, 
  function(disclaimer){
    HotelsPage.waitForHotelResultsPageToLoad();
    HotelsPage.clickDisclaimerLink(disclaimer);
  }
);
Then(
  /^I am on hotels details page I click on the Back to results link$/,()=>{
    HotelsPage.clickHotelsBackToResult();
  }
);
Then(
  /^I am on hotels details page I click on the Map link$/,()=>{
    HotelsPage.clickHoteDetailslMap();
  }
);
Then(
  /^I am on Hotels page I click (.+) information$/, 
  function(information){
    HotelsPage.clickInformationLink(information);
  }
);
Then(
  /^I am on hotels details page I click on the View Breakdown link$/,()=>{
    HotelsPage.clickHoteDetailslViewBreakdownLink();
  }
);
Then(
  /^I am on hotels details page I click on the More Room Information link$/,()=>{
    HotelsPage.collectSelectedNameRoom();
    HotelsPage.clickHoteDetailsMoreRoomInformation();
  }
);
Then(
  /^I am on hotels details page I click on a hotel room image$/,()=>{
    HotelsPage.collectSelectedNameRoom();
    HotelsPage.clickHoteRoomImage();
  }
);
Then(/^I am hotel details page I remove the room from cart$/, () => {
  HotelsPage.clickRemoveCart();
});
When(/^I am on hotels page I click on Uplift link$/, function() {
  HotelsPage.waitForHotelResultsPageToLoad();
  HotelsPage.clickHotelsUpliftLink();
});
When(/^I am on hotels page I click on Uplift logo$/, function() {
  HotelsPage.waitForHotelResultsPageToLoad();
  HotelsPage.clickHotelsUpliftLogo();
});
When(/^I am on hotels details page I click on Uplift link$/, function() {
  HotelsPage.clickHotelsDetailsUpliftLink();
});
When(/^I am on hotels details page I click on Uplift logo$/, function() {
  HotelsPage.clickHotelsDetailsUpliftLogo();
});
When(/^I am on hotels details page I click on the View Breakdown$/, function() {
  HotelsPage.collectSelectedNameRoom();
  HotelsPage.clickViewBreakdown();
});
When(/^I am on hotels page I check the label Sort By$/, function() {
  HotelsPage.validateSortByLabel();
});
When(/^I am on hotels page I check the Sort list contains$/, function() {
  HotelsPage.validateSortList();
});
When(/^I am on hotels page I check the default selected sort option$/, function() {
  HotelsPage.validateDefaultSortListOption();
});

When(/^I am on hotels page I select maxim number of rooms$/, function() {
  HotelsPage.selectMaxRoomsCount();
});

When(/^I am on hotels page I click on (.+) View breakdown link$/,
  function(propertyName) {
  HotelsPage.waitForHotelResultsPageToLoad();
  HotelsPage.clickHotelDetailsViewBreakdownLink(propertyName);
});

Then(/^I am on hotels page I expect (.+) View Breakdown popup to be displayed$/,
  function(propertyName) {
  HotelsPage.validateViewBreakdownPopupIsDisplayed(propertyName);
});

Then(/^I am on hotels page I expect (.+) displayed on View Breakdown popup$/,
  function(propertyName) {
  HotelsPage.validateViewBreakdownHotelNameHeaderIsDisplayed(propertyName);
});

Then(/^I am on hotels page I expect promo label, promo APPLIED status and check mark to be displayed on View BreakdownPopup$/,
  function() {
  HotelsPage.validatePromoLabelPromoAppliedStatusAndCheckMarkIsDisplayed();
});

Then(/^I am on hotels page I expect stadium package items and package price to be displayed on View Breakdown popup (.+)$/,
  function(packageItems) {
  HotelsPage.validateViewBreakdownPopUpPackageItemsLabelIsDisplayed(packageItems);
});

Then(/^I am on hotels page I expect taxes label is displayed along with tax value$/, function() {
  HotelsPage.validateViewBreakdownPopUpTaxesLabelAndTaxValueIsDisplayed();
});

Then(/^I am on hotels page I expect total package price label to be displayed along with amount on View Breakdown popup$/, function() {
  HotelsPage.validateViewBreakdownPopupTotalPackageLabelAndAmountIsDisplayed();
});

Then(/^I am on hotels page I expect Rooms and Rates button to be displayed$/, function() {
  HotelsPage.validateViewBreakdownPopupRoomsAndRatesButtonIsDisplayed();
});

Then(/^I am on hotels page I expect cross button to be displayed on View Breakdown popup to close the popup$/, function() {
  HotelsPage.validateViewBreakdownPopupCrossMarkButtonIsDisplayed();
});

When(/^I am on Hotels page I click Rooms and Rates on View Breakdown popup$/, function() {
  HotelsPage.clickRoomsAndRatesButtonOnViewBreakdownPopup();
});

Then(/^I am on Hotel details page I expect back to results link is displayed$/, function() {
  HotelsPage.validateHotelDetailsPageIsDisplayed();
});

Then(/^I am on hotels details page I expect a room added to cart is displayed$/, function() {
  HotelsPage.validateRoomAddedToCartIsDisplayed();
});

When(/^I am on Hotels page I click Room selected on View Breakdown popup$/, function() {
  HotelsPage.clickRoomsAndRatesButtonOnViewBreakdownPopup();
});

When(/^I am on hotels details page I click on back to results button$/, function() {
  HotelsPage.clickOnBackToResults();
});

Then(/^I am on Hotels page I expect hotel card to display total stadium package price for (.+)$/, function(propertyName) {
  HotelsPage.validateHotelCardPackagePriceIsDisplayed(propertyName);
});

Then(/^I am on Hotels page I expect hotel card to display package details label including package amount and package items (.+)$/, function(packageItems) {
  HotelsPage.validateHotelCardPriceSuffixIsDisplayedAndContainsAccuratePackageDetails(packageItems);
});

When(/^I am on Hotel Details page I get first room package price$/, function() {
  HotelsPage.collectRoomPackagePrice();
});

Then(/^I am on Hotels page I expect hotel card to display lowest stadium package price$/, function() {
  HotelsPage.validateHotelCardDisplaysLowestPackagePrice();
});