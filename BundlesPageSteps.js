import { Given, When, Then } from '@cucumber/cucumber';
import BundlesPage from '../pageobjects/BundlesPage.js';
import { Actions } from '@g4/prova';

Given(/^I am on Bundles page I select "(.+)"$/, function(bundleType) {
	BundlesPage.selectBundles(bundleType);
});

Given(/^I am on bundles page I click (.+) button$/, function(button) {
	BundlesPage.clickContinueButton(button)
});
When(/^I am on Bundles page I click (.+) link$/, function(link) {
	BundlesPage.clickLink(link);
});
When(/^I am on Bundles page I click info icon for (.+)$/, function(bundleItem) {
	BundlesPage.clickInfoIcon(bundleItem);
});
When(/^I am on Bundle page I collect bundle items available for (.+)$/, function(bundleType) {
	BundlesPage.collectBundleItems(bundleType);
});
When(/^I am on Bundles Page I expect flight details added to the trip summary$/, function() {
	BundlesPage.validateFlightDetailsFromTripSummary();
});
Then(/^I expect "Allegiant Basic Bundle" "Allegiant Bonus Bundle" and "Allegiant Total Bundle" banners are displayed$/, function() {
	BundlesPage.validateBundlesBanners();
});
Then(/^I am on Bundles page I expect "(.+)" OnePersonalItem to be "(.+)"$/, function(bundleType, OnePersonalItem) {
	if (bundleType === "Allegiant Total Bundle") {
		BundlesPage.validateTotalBundleOnePersonalItem(OnePersonalItem);
	}
	else {
		BundlesPage.validateBonusBundleOnePersonalItem(OnePersonalItem);
	}

});
Then(/^I am on Bundles page I expect "(.+)" carryOn to be "(.+)"$/, function(bundleType, carryOn) {
	if (bundleType === "Allegiant Total Bundle") {
		BundlesPage.validateTotalBundleCarryOn(carryOn);
	}
	else {
		BundlesPage.validateBonusBundleCarryOn(carryOn);
	}
});
Then(/^I am on Bundles page I expect "(.+)" checkedBag to be "(.+)"$/, function(bundleType, checkedBag) {
	if (bundleType === "Allegiant Total Bundle") {
		BundlesPage.validateTotalBundleCheckedBag(checkedBag);
	}
	else {
		BundlesPage.validateBonusBundleCheckedBag(checkedBag);
	}
});
Then(/^I am on Bundles page I expect "(.+)" seatSelection to be "(.+)"$/, function(bundleType, seatSelection) {
	if (bundleType === "Allegiant Total Bundle") {
		BundlesPage.validateTotalBundleSeatSelection(seatSelection);
	}
	else {
		BundlesPage.validateBonusBundleSeatSelection(seatSelection);
	}
});
Then(/^I am on Bundles page I expect "(.+)" priorityAccess to be "(.+)"$/, function(bundleType, priorityAccess) {
	if (bundleType === "Allegiant Total Bundle") {
		BundlesPage.validateTotalBundlePriorityAccess(priorityAccess);
	}
	else {
		BundlesPage.validateBonusBundlePriorityAccess(priorityAccess);
	}
});
Then(/^I am on Bundles page I expect "(.+)" tripFlex to be "(.+)"$/, function(bundleType, tripFlex) {
	if (bundleType === "Allegiant Total Bundle") {
		BundlesPage.validateTotalBundleTripFlex(tripFlex);
	}
	else {
		BundlesPage.validateBonusBundleTripFlex(tripFlex);
	}
});
Then(/^I am on Bundles Page I click (.+) button$/, function(button) {
	BundlesPage.clickContinueButton(button);
});
Then(/^I am on Bundles page I expect bundles page anchor to top$/, function() {
	BundlesPage.validateBundlesPageAnchorToTop();
});

Then(/^I am on bundles page I validate bundles page is loaded with title "(.+)" and heading "(.+)"$/, function(BundlesPageTitle, BundlesPageHeading) {
	BundlesPage.validateBundlesPageIsLoaded(BundlesPageTitle, BundlesPageHeading);
});


Then(/^I am on Bundles page I expect "(.+)" discounted value is displayed$/, function(bundleType) {
	BundlesPage.validateBundleDiscountedPriceIsDisplayed(bundleType);
	BundlesPage.validateBundleDiscount();
});

Then(/^I validate that the "(.+)" selected button label reads "(.+)"$/, function(bundleType, label) {
	BundlesPage.validateLabelSelected(bundleType, label);
});

Then(/^I am on Bundles page I expect roundtrip discount should not be displayed in Trip total$/, function() {
	BundlesPage.validateRoundTripDiscountInTripTotal();
});

Then(/^I am on Bundles page I expect default focus to be on (.+)$/, function(defaultFocus) {
	BundlesPage.validateDefaultFocusedBundleValue(defaultFocus);
});
Then(/^I am on  Bundles page I expect bundle is not selected by default$/, function() {
	BundlesPage.validateBundleNotSelectedByDefault();
});
Then(/^I am on bundles page I expect bundles page is loaded with "(.+)" Disclaimer$/, function(text) {
	BundlesPage.validateBundleDisclaimerText(text);
});
Then(/^I verify Bundles is shown in breadcrump I click Continue button in Bundles page$/, () => {
    BundlesPage.clickBundlesPageContinueButton();
});
Then(/^I am on Bundles page I expect "(.+)" checkedBag to be displayed for "(.+)"$/, function(checkedBag, bundleType) {
	if (bundleType === "Allegiant Total Bundle") {
	    BundlesPage.validateBundleCheckedBagCount(checkedBag, bundleType);
     }
});

When(/^I am on the bundles page I click on Trip Total$/, function () {
    BundlesPage.clickTripTotal();
});

Then(/^I am on the bundles page I see that expand arrow and sub\-total are not visible$/, function () {
  BundlesPage.validateTripTotalItemsRemoved();
});

When(/^I am on the Bundles Page and I continue if the page is not skipped$/, function() {
	BundlesPage.continueOnBundlesPageIfNotSkipped();
  });

Then(/^I am on Bags page and I expect that the Priority access box contains the text: "(.+)"$/, function (expectedText) {
	BundlesPage.validatePriorityAccessBoxText(expectedText);
  });

Then(/^I am on Bags page and I expect that the Trip Flex box contains the text: "(.+)"$/, function (expectedText) {
	BundlesPage.validateTripFlexBoxText(expectedText);
  });

When(/^I am on (?:Bundles|Travelers|Seats|Bags|Hotels|Cars|Payment) Page I navigate to "(.+)" via the URL$/, function (expectedPage) {
	BundlesPage.navigateToPage(expectedPage);
  });


  
    

