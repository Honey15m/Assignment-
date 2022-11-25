import {When} from '@cucumber/cucumber';
import bookingpaymentt from '../pageobjects/bookingpayment.js';
import { Actions } from '@g4/prova';
When(/^I am bags page I click continue$/, function(){
    bookingpaymentt.bagscontinue();
});
When(/^I am on Hotel Results page I click on continue$/, function(){
    bookingpaymentt.hotelscontinue();
});
When(/^I am on Payments page close the popup$/, function(){
    bookingpaymentt.closepopup();
});
When(/^I am on Payments I enter the card number "(.+)"$/, function(cardNumber){
    bookingpaymentt.entercardnumber(cardNumber);
});
When(/^I am on Payments I enter expiry date$/, function(){
    bookingpaymentt.enterexpiry();
});
When(/^I am on Payments I enter cvv "(.+)"$/, function(cvv){
     bookingpaymentt.entercvv(cvv);
});
When(/^I am on Payments page and enter Billing address street address as "(.+)"$/, function(street){
    bookingpaymentt.enterstreet(street);
});
When(/^I am on payments page and enter city name "(.+)"$/, function(cityname){
    bookingpaymentt.entercity(cityname);
});
When(/^I am on payments page I select state "(.+)"$/,function(statename){
    bookingpaymentt.enterstate(statename);
});
When(/^I am on payments page enter zip code as "(.+)"$/, function(zipcode){
    bookingpaymentt.enterzipcode(zipcode);
});
When(/^I am on payments page and enter mobile number "(.+)" and email address "(.+)"$/,function(phonenumber,emailid){
    bookingpaymentt.enternumber(phonenumber,emailid);
});
When(/^I am on payments page accept terms and condition$/, function(){
    bookingpaymentt.agreeterm();
});
When(/^I am on payments page I click Purchasemytrip button$/, function(){
    bookingpaymentt.purchasetrip();
});
When(/^I am on Bundles page I click "(.+)"$/, function(BundleType){
    bookingpaymentt.Selectbundletype(BundleType);
});
// When(/^I am on flights page I click continue button$/, function(){
//     bookingpaymentt.continueonflights();
// });
 When(/^I am on hotels page I select a hotel room$/, function(){
     bookingpaymentt.SelectHotel();
 });
 When(/^I am on hotels page click continue$/, function(){
    bookingpaymentt.continue();
 })
When(/^I am on cars page I select a car$/, function(){
    bookingpaymentt.selectcar();
});
