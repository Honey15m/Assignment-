import { When, Then } from '@cucumber/cucumber';
import TravelersPage from '../pageobjects/travelers_page';

When(/^I fill in data for all travelers$/, function() {
  TravelersPage.fillAllTravelersData();

  // Todo: Below code was added by William Aguirre
  // https://git.allegiantair.com:8443/projects/WWW/repos/jeefour-www/diff/packages/booking/e2e/step-definitions/travelers-page-definitions.js?until=9acb0ecd0fa04f777622b3af089fcd859f2e6ded
  // This code is failing, needs to be fixed

  // TravelersPage.fillTravelerForm();
  // browser.pause(20000);
});
