import { zip } from "lodash"
const bag="//*[@data-hook='ancillaries-page_continue']"
const closepopup="//*[@data-hook='payment-page_ice-popup_close']"
const cardnumber="//*[@data-hook='payment-page_card-number']"
const expirymonth="//*[@data-hook='payment-page_card-expiration-month']"
const expiryyear ="//*[@data-hook='payment-page_card-expiration-year']"
const cvvv="//*[@data-hook='payment-page_card-cvv']"
const streetaddress="//*[@data-hook='payment-page_address-line-1']"
const city="//*[@data-hook='payment-page_city']"
const state="//*[@data-hook='payment-page_state']"
const zipCode="//*[@data-hook='payment-page_zip-code']"
const number="//input[@id='phone-number']";
const email="//input[@id='email-address']"
const Agree="//*[@data-hook='payment_terms-and-conditions-checkbox_label']//*[@fill='#fff']"
const Bonustype="//*[@data-hook='select-tier-2']"
const totaltype="//button[@data-hook='select-tier-3']//span";
const hotel="[data-hook='hotels-page-hotel-card_encore-at-the-wynn-las-vegas_hotel-details-button']";
// const room="//*[@data-hook='room-pod_0']//*[@data-hook='room-pod_hotel-book-button']"
const room="//div[@data-hook='room-pod_1']//button[@data-hook='room-pod_hotel-book-button']";
const Continuehotel="[data-hook='hotel-details-page_continue']";
const car="//*[@class='Button__StyledButton-sc-1ececxa-1 eznEzY CarVendorPrices__PriceSelectionButton-ayz81e-3 kZTAAf']"
class bookingpaymentt{
closepopup(){
    //$(closepopup).isClickable();
	browser.pause(1000);
    $(closepopup).click();
}

entercardnumber(cardNumber){
    $(cardnumber).setValue(cardNumber);}
enterexpiry(){
			
    $("//*[text()='Month']").click();
    browser.pause(1000);
    $("//div[contains(text(),'December')]").click();
    browser.pause(2000);

    $("//*[text()='Year']").click();
    browser.pause(1000);
    $("//div[contains(text(),'2030')]").click();
    browser.pause(2000);
}
entercvv(cvv){
    $(cvvv).setValue(cvv);
}
enterstreet(street){
	$(streetaddress).setValue(street)
}
entercity(cityname){
	$(city).setValue(cityname)
}
enterstate(statename){
	$(state).scrollIntoView();
	$(state).isClickable() 
	$(state).click()
		browser.keys(String(statename));
		browser.pause(200);
		browser.keys('Enter');
}
enterzipcode(zipcode){
	$(zipCode).setValue(zipcode);

}
enternumber(phonenumber,emailid){
		$(number).setValue(phonenumber);
		//browser.pause(2000);
        $(email).setValue(emailid);
       browser.pause(2000);}
agreeterm(){
	$(Agree).click();
	browser.pause(2000);
}
purchasetrip(){
	$("//span[contains(text(),'PURCHASE MY TRIP')]").click();
browser.pause(20000);
}
continueonflights(){
	$("//*[@data-hook='flights-page_continue']").click();
}

Selectbundletype(SelectBundleType){
	if(SelectBundleType ==="Bonus Bundle"){
		// $(Bonustype).isClickable();
		$(Bonustype).click();
	}
	else if(SelectBundleType === "Total Bundle"){
		// $(totaltype).isClickable();
		$(totaltype).click();

	}
	else{
		const Bundlecontinue="//*[@data-hook='bundles-page_continue']"
		// $(Bundlecontinue).isClickable();
		$(Bundlecontinue).click();
	}
	browser.pause(2000);
}
SelectHotel(){
	browser.pause(3000);
	$(hotel).click();
	browser.pause(4000);
	$(room).click();
	browser.pause(4000);
}
continue(){
	$(Continuehotel).scrollIntoView();
	$(Continuehotel).click();
}
selectcar(){

}
bagscontinue(){
	$(bag).click();
}
}

export default new bookingpaymentt();