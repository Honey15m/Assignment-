import { Page, Actions } from '@g4/prova';
import { collect } from '@g4/prova/src/helpers/collector';
import { assert } from 'chai';

const seatsPageSkip = "[data-hook='seats-page_skip']";
const seatsPageHeading = "[data-hook='seats-page_page-heading']";
const bagsPageHeading = "[data-hook='ancillaries-page_page-heading']";
const exitRowSeats = "//button//span[contains(@data-hook,'exit-row')][not(contains(@data-hook,'taken'))]"
const exitRowBundleSeat = "(//span[@data-hook='select-legroom-plus-seat_exit-row']//img)[X]"
const economyBundleSeat = "//button//span[contains(@data-hook,'economy-seat')][not(contains(@data-hook,'taken'))]"
const nonBundleSeat = "//button//span[contains(@data-hook,'unrestricted')][not(contains(@data-hook,'taken'))]"
const economySeat = "//button//span[contains(@data-hook,'economy-seat')][not(contains(@data-hook,'taken'))]"
const legroom = "//button//span[contains(@data-hook,'legroom')][not(contains(@data-hook,'taken'))]"
const departingSeg = "[data-hook='seats-page-tabs_departing']"
const returningSeg = "[data-hook='seats-page-tabs_returning']"
const TravelerList = "//div[contains(@data-hook,'traveler-list')]"
const selectTraveler = "//label[contains(@for,'traveler-input-X')]"
const seatMap = "(//div[contains(@class,'SeatMap')])[1]"
const seatId = "(//span[@data-hook='seat-id'])[X]"
const seatPrice = "(//span[@data-hook='seat-price'])[X]"
const takenSeats = "(//button//span[contains(@data-hook,'taken')])[X]"
const takenSeatsList = "//span[contains(@data-hook,'taken')]"
const spinnerBar = "//span[contains(@data-hook,'spinner')]"
const exitRowPopup = "[data-hook='seats-popover_seat_update_button_XX']"
const seatBreadcrumb = "[data-hook='flights-breadcrumb_item-seats']"
const continueButton = "//button[@data-hook='seats-page_continue']| //button[@data-hook='seats-page_continue-popup']"
const popupContinueButton = "[data-hook='seats-page_continue-popup']"
const tailOfPlane = "//div[contains(text(),'Tail of Plane')]"
const frontOfPlane = "//div[contains(text(),'Front of Plane')]"
const selectReturningButton = "[data-hook='seats-select-returning']"
const travelerGridSeat = "//span[contains(text(),'Seat')]//span[@aria-label]"
const returningSeatsSelectButton = "[data-hook='seats-select-returning']"
const deselectSeatButton = "//button[contains(@data-hook,'seat_deselect_button')]"
const travelerGridPaxNum = "(//div[contains(@data-hook,'traveler-list-item')])[X]"
const unAssignedSeat = "(//span[@aria-label='unassigned'])[X]"
const updateSelectedSeat = "//div[contains(@data-hook,'_active')]//span[contains(text(),'Update to this seat')]"
const seatsPageDepartingTabs = "[data-hook='seats-page-tabs_departing']"
const seatsPageReturningTabs = "[data-hook='seats-page-tabs_returning']"
const selectSeatsForMe = "//button[contains(text(),'Select Seats For Me')]"
const selectSeatPopupContinueButton = "[data-hook='seats-page-continue-button-popup_continue-button']"
const continueButtonInReturning = "[data-hook='seats-page-legend-continue-button-popup']"
const selectSeatsPopupText = "//span[@class='Text-sc-1o5ubbx-0 cpURxy']"
const selectSeatsNowButton = "[data-hook='seats-page-continue-button-popup_select-seats-button']"
const bundleBannerContent = "//div[contains(@class,'SeatsPage__BannerContent')]//span//span"
const bundleSeatCount = "//img[contains(@class,'Seat__Star')]"
const nonBundleSeatCount = "//span[contains(@data-hook,'select')]//span"
const nonAdjacentSeatPopUpWarning = "//div[contains(@data-hook,'_active')]//span[contains(text(),'A child')]"
const nonAdjacentSeatPopUp = "//div[contains(@data-hook,'seats-popover_')][contains(@data-hook,'_active')]"
const nonAdjacentSeatPopUpWarningOkButton = "//div[contains(@data-hook,'_active')]//span[contains(text(),'Ok')]"
const legendWrapper = "(//div[contains(@class,'SeatsPage__LeftSideWrapperOne')])[1]"
const legendWrapperText = "(//div//h2[contains(@class,'SeatmapLegend__Title')])[1]"
const legendWrapperT1 = "(//div[contains(@class,'SeatmapLegend__SelectedIcon')])[1]"
const legendWrapperT1Selected = "//div[contains(text(),'Selected')]"
const legendWrapperLegroom = "//div[contains(text(),'Legroom+ ®')]"
const legendWrapperUnavailable = "//div[contains(text(),'Unavailable')]"
const legendWrapperEconomy = "(//div[contains(text(),'Economy')])[1]"
const legendWrapperExitRowIcon = "(//div[contains(@class,'SeatmapLegend__ExitRowIcon')])[1]"
const legendWrapperExitRow = "//div[contains(text(),'Exit Row')]"
const legroomToolTip = "[data-hook='seat-map-legend-legroom-plus-tooltip_trigger']"
const economyToolTip = "[data-hook='seat-map-legend-economy-tooltip_trigger']"
const legroomToolTipContentPopup = "[data-hook='seat-map-legend-legroom-plus-tooltip_content']"
const economyToolTipContentPopup = "[data-hook='seat-map-legend-economy-tooltip_content']"
const legroomPlusContent = "//span[@class='Text-sc-1o5ubbx-0 gRLrXA'][contains(text(),'Legroom+ ®')]"
const extraLegroomContent = "//li[contains(text(),'Extra legroom')]"
const extraComfortContent = "//li[contains(text(),'Extra comfort')]"
const seatsPopoverDeselect = "[data-hook='seats-popover_deselect']"
const seatsPopoverTravelerIcon = "(//div[contains(@data-hook,'seats-popover_traveler_icon')])[1]"
const seatsPopoverTravelerName = "(//span[contains(@data-hook,'seats-popover_traveler_name')])[1]"
const seatsPopoverSeatTypeLabel = "//div[contains(@data-hook,'seats-popover_deselect')]//span[contains(@data-hook,'seats-popover_seat_type_label')]"
const seatsPopoverSeatID = "//div[contains(@data-hook,'seats-popover_deselect')]//span[contains(@data-hook,'seats-popover_seat_id')]"
const seatsPopoverSeatPrice = "//div[contains(@data-hook,'seats-popover_deselect')]//span[contains(@data-hook,'seats-popover_seat_price')]"
const seatsPopoverComfortLevel = "//div[contains(@data-hook,'seats-popover_deselect')]//span[contains(@data-hook,'seats-popover_legroom_stars_label')]"
const seatsPopoverStars = "//div[contains(@data-hook,'seats-popover_deselect')]//div[contains(@data-hook,'seats-popover_legroom_stars')]"
const seatsPopoverSeatInfo = "//div[contains(@data-hook,'seats-popover_deselect')]//div[contains(@data-hook,'seats-popover_seat_info')]//li"
const unavailable = "//span[contains(@data-hook,'exit-row')]//div[contains(@class,'Seat__Icon')]//*[name()='svg']"
const adultAlreadySelectedPopup = "//div[contains(@data-hook,'active')]//span[contains(@data-hook,'already_selected')]|//div[contains(@data-hook,'active')]//span[contains(@data-hook,'update')]|//div[contains(@data-hook,'active')]//span[contains(@data-hook,'not_selected')]|//div[contains(@data-hook,'active')]//span[contains(@data-hook,'deselect')]"
const travelingWithChildrenNote = "//div[contains(@class,'TravelerList__TravelingWithChildrenNote')]//span"
const travelerSelectedSeat ="//span[contains(@data-hook,'taken')]//span[contains(.,'X')]"
const legroomLegendTooltip ="[data-hook='seat-map-legend-legroom-plus-tooltip_trigger']"
const economyLegendTooltip ="[data-hook='seat-map-legend-economy-tooltip_trigger']"
const selectedSeatTypeDeselectPopup ="//div[contains(@data-hook,'deselect')]//span[contains(@data-hook,'seats-popover_seat_type_label_')]"
const selectedSeatIdDeselectPopup="//div[contains(@data-hook,'deselect')]//span[contains(@data-hook,'seats-popover_seat_id_')]"
const selectedSeatPriceDeselectPopup ="//div[contains(@data-hook,'deselect')]//span[contains(@data-hook,'seats-popover_seat_price_')]"
const selectedSeatTypeUpdatePopup ="//div[contains(@data-hook,'_active')]//span[contains(@data-hook,'seats-popover_seat_type_label_')]"
const selectedSeatIdUpdatePopup="//div[contains(@data-hook,'_active')]//span[contains(@data-hook,'seats-popover_seat_id_')]"
const selectedSeatPriceUpdatePopup ="//div[contains(@data-hook,'_active')]//span[contains(@data-hook,'seats-popover_seat_price_')]"
const activePopup ="//div[contains(@data-hook,'_active')][contains(@data-hook,'popover')]"
const legendContinueButton="//button[@data-hook='seats-page-legend-continue-button-popup']//span"
const exitRowSeatPopUp="//div[contains(@data-hook,'active')]//span[contains(@data-hook,'seats-popover_exit_row_title_')]"
const tripType="[data-hook='header-flight-info_trip-type']"
var seatPriceDepart = [];
var seatPriceReturn = [];
var seatIdDepart = [];
var seatIdReturn = [];
let selectedSeat;
var deselectedSeatDetails;
var updatedSeatDetails;
var selectedSeatDetails;
class SeatPage extends Page {
	validateSeatsPageAnchorToTop(){
		do {
			browser.pause(500)
		} while ($(spinnerBar).isDisplayed())		
		assert.equal(
			$(seatsPageHeading).isDisplayedInViewport(),
			true,
			'Seats Page is not anchor to top'
		);
	}
	skipSeatsPage() {
		do {
			browser.pause(500)
		} while ($(spinnerBar).isDisplayed())		
		try{			
			$(tailOfPlane).scrollIntoView({
				block: 'center',
				inline: 'start',
			  });
		$(seatsPageSkip).waitForClickable();
		$(seatsPageSkip).click()	
		}catch(ex){			
		  assert.fail("Seat page not loaded! execution failed on: "+$("//title").getTitle())	
		}			
	}
	/*
	*  seatType: any/exitRow/legroom/bundleSeat/economyBundleSeat/exitRowBundleSeat/economyNonBundleSeat/economy
	*  tripType: both/departing/returning
	*  travelerNum: all/paxNum
	*/
	selectSeat(seatType, tripType, travelerNum) {
		do {
			browser.pause(5)
		} while ($(spinnerBar).isDisplayed())
		if (tripType === "departing") {
			this.selectDepartureSegAdjacentSeats(tripType,seatType, travelerNum)
		}
		else if (tripType == "returning") {
			this.selectReturningSegAdjacentSeats(tripType,seatType, travelerNum)
		}
		else {
			this.selectDepartureSegAdjacentSeats(tripType,seatType, travelerNum)
			this.selectReturningSegAdjacentSeats(tripType,seatType, travelerNum)
			$(TravelerList).waitForDisplayed()
			var totalTravelers = browser.$$(TravelerList)
			for (var i = 1; i <= totalTravelers.length; i++) {
				console.log("seatsSelected: " + $(seatId.replace("X", i)).getText())
			}
			this.collectTravelerSeatInfo()
		}


	}
	clickSeat(seatType, tripType, travelerNum){
		do {
			browser.pause(5)
		} while ($(spinnerBar).isDisplayed())
		if (tripType == "returning") {
		$(seatBreadcrumb).scrollIntoView();
		if ($(returningSeatsSelectButton).isDisplayed()) {
			$(returningSeatsSelectButton).click()
		}
		}		
		var availableSeats
		var getAllSeats = []
		$(TravelerList).waitForDisplayed()
		var totalTravelers = browser.$$(TravelerList)
		if (seatType === "exitRow") {
			availableSeats = exitRowSeats
			seatType = "exit-row"
		}
		else if (seatType === "bundleSeat" || seatType === "economyBundleSeat") {
			availableSeats = economyBundleSeat
			seatType = "economy-seat"
		}
		else if (seatType === "exitRowBundleSeat") {
			availableSeats = exitRowBundleSeat
			seatType = "exit-row"
		}
		else if (seatType === "nonBundleSeat") {
			availableSeats = legroom
			seatType = "legroom"
		}
		else if (seatType === "economy") {
			availableSeats = economySeat
			seatType = "economy-seat"
		}
		else if (seatType === "legroom") {
			availableSeats = legroom
			seatType = "legroom"
		}
		else {
			availableSeats = economySeat
			seatType = "economy-seat"
		}
		$(availableSeats).waitForDisplayed()
		var getSeats = browser.$$(availableSeats)
		for (var i = 0; i < getSeats.length; i++) {
			getAllSeats.push(getSeats[i].getAttribute("data-hook").split('_')[2])
		}
		var adjacentSeats = []
		for (var i = 0; i < getAllSeats.length; i++) {
			if (totalTravelers.length === 1) {
				if (getAllSeats[i].slice(0, getAllSeats[i].length - 1) === getAllSeats[i + 1].slice(0, getAllSeats[i + 1].length - 1)) {
					adjacentSeats.push(getAllSeats[i])
					break;
				}
			}
			if (totalTravelers.length === 2) {
				if (getAllSeats[i].slice(0, getAllSeats[i].length - 1) === getAllSeats[i + 1].slice(0, getAllSeats[i + 1].length - 1)) {
					adjacentSeats.push(getAllSeats[i])
					adjacentSeats.push(getAllSeats[i + 1])
					break;
				}
			}
			if (totalTravelers.length === 3) {
				if (getAllSeats[i].slice(0, getAllSeats[i].length - 1) === getAllSeats[i + 1].slice(0, getAllSeats[i + 1].length - 1) &&
					getAllSeats[i].slice(0, getAllSeats[i].length - 1) === getAllSeats[i + 2].slice(0, getAllSeats[i + 2].length - 1)) {
					adjacentSeats.push(getAllSeats[i])
					adjacentSeats.push(getAllSeats[i + 1])
					adjacentSeats.push(getAllSeats[i + 2])
					break;
				}
			}
			if (totalTravelers.length === 4) {
				if (getAllSeats[i].slice(0, getAllSeats[i].length - 1) === getAllSeats[i + 1].slice(0, getAllSeats[i + 1].length - 1) &&
					getAllSeats[i].slice(0, getAllSeats[i].length - 1) === getAllSeats[i + 2].slice(0, getAllSeats[i + 2].length - 1) &&
					getAllSeats[i].slice(0, getAllSeats[i].length - 1) === getAllSeats[i + 3].slice(0, getAllSeats[i + 3].length - 1)
				) {
					adjacentSeats.push(getAllSeats[i])
					adjacentSeats.push(getAllSeats[i + 1])
					adjacentSeats.push(getAllSeats[i + 2])
					adjacentSeats.push(getAllSeats[i + 3])
					break;
				}
				else {
					continue;
				}
			}
			if (totalTravelers.length === 5) {
				if (getAllSeats[i].slice(0, getAllSeats[i].length - 1) === getAllSeats[i + 1].slice(0, getAllSeats[i + 1].length - 1) &&
					getAllSeats[i].slice(0, getAllSeats[i].length - 1) === getAllSeats[i + 2].slice(0, getAllSeats[i + 2].length - 1) &&
					getAllSeats[i].slice(0, getAllSeats[i].length - 1) === getAllSeats[i + 3].slice(0, getAllSeats[i + 3].length - 1) &&
					getAllSeats[i].slice(0, getAllSeats[i].length - 1) === getAllSeats[i + 4].slice(0, getAllSeats[i + 4].length - 1)) {
					adjacentSeats.push(getAllSeats[i])
					adjacentSeats.push(getAllSeats[i + 1])
					adjacentSeats.push(getAllSeats[i + 2])
					adjacentSeats.push(getAllSeats[i + 3])
					adjacentSeats.push(getAllSeats[i + 4])
					break;
				}
			}
		}
		$(seatBreadcrumb).scrollIntoView();
		$(seatMap).waitForDisplayed()
	    $(selectTraveler.replace("X", travelerNum)).click()	
		$("//span[contains(@data-hook,'" + seatType + "')][contains(@data-hook,'_" + adjacentSeats[travelerNum - 1] + "')]").click();				
		
		}
	selectSeatByPosition(position,adjacency,segment,traveler)  {
		if(adjacency==="adjacent"){
			if (segment === "departing") {
			this.selectDepartureSegSeatByPosition(position, traveler)
		}
		if (segment === "returning") {
			this.selectReturnSegSeatByPosition(position, traveler)
		}
		}
		if(adjacency==="non-adjacent"){
			if (segment === "departing") {
			this.selectDepartureSegNonAdjacentSeatByPosition(position, traveler)
		}
		if (segment === "returning") {
			this.selectReturnSegSeatByPosition(position, traveler)
		}
		}
		
	}

	selectDepartureSegSeatByPosition(position, traveler) {
		var getAllSeats = []
		let getAvailSeat = "//button//span[contains(@aria-label,'" + position.toLowerCase() + "')]"  //aisle,middle,window
		var getSeats = browser.$$(getAvailSeat)
		for (var i = 0; i < getSeats.length; i++) {
			getAllSeats.push(getSeats[i].getAttribute("data-hook").split('_')[2])
		}
		$(selectTraveler.replace("X", traveler)).click()		
		for (var i = 0; i < getAllSeats.length; i++) {			
			$("//button//span[contains(@data-hook,'_" + getAllSeats[i] + "')]").click()
			break;
		}
		do {
				browser.pause(5)
		} while ($(spinnerBar).isDisplayed())		
	}
	selectReturnSegSeatByPosition(position, traveler) {
		$(seatBreadcrumb).scrollIntoView();
		if ($(returningSeatsSelectButton).isDisplayed()) {
			$(returningSeatsSelectButton).click()
		}
		else {
			$(returningSeg).click()
		}
		var getAllSeats = []
		let getAvailSeat = "//button//span[contains(@aria-label,'" + position.toLowerCase() + "')]"  //aisle,middle,window
		var getSeats = browser.$$(getAvailSeat)
		for (var i = 0; i < getSeats.length; i++) {
			getAllSeats.push(getSeats[i].getAttribute("data-hook").split('_')[2])
		}
		$(selectTraveler.replace("X", traveler)).click()		
		for (var i = 0; i < getAllSeats.length; i++) {			
			$("//button//span[contains(@data-hook,'_" + getAllSeats[i] + "')]").click()
			break;
		}
		do {
				browser.pause(5)
		} while ($(spinnerBar).isDisplayed())
	}
	
	selectDepartureSegNonAdjacentSeatByPosition(position, traveler){
		var getAllSeats = []
		let getAvailSeat = "//button//span[contains(@aria-label,'" + position.toLowerCase() + "')]"  //aisle,middle,window
		var getSeats = browser.$$(getAvailSeat)
		for (var i = 0; i < getSeats.length; i++) {
			getAllSeats.push(getSeats[i].getAttribute("data-hook").split('_')[2])
		}
		$(selectTraveler.replace("X", traveler)).click()		
		for (var i = 0; i < getAllSeats.length; i++) {			
			$("//button//span[contains(@data-hook,'_" + getAllSeats[i+1] + "')]").click()
			break;
		}
		do {
				browser.pause(5)
		} while ($(spinnerBar).isDisplayed())
	}
	selectNonAdjacentSeat(seatType, tripType, travelerNum) {
		do {
			browser.pause(5)
		} while ($(spinnerBar).isDisplayed())
		if (tripType === "departing") {
			this.selectDepartureSegNonAdjacentSeats(seatType, travelerNum)
		}
		else if (tripType == "returning") {
			this.selectReturningSegNonAdjacentSeats(seatType, travelerNum)
		}
		else {
			this.selectDepartureSegNonAdjacentSeats(seatType, travelerNum)
			this.selectReturningSegNonAdjacentSeats(seatType, travelerNum)
			$(TravelerList).waitForDisplayed()
			var totalTravelers = browser.$$(TravelerList)
			for (var i = 1; i <= totalTravelers.length; i++) {
				console.log("seatsSelected: " + $(seatId.replace("X", i)).getText())
			}
			this.collectTravelerSeatInfo()
		}
	}
	selectDepartureSegAdjacentSeats(tripType,seatType, travelerNum) {
		var availableSeats
		var getAllSeats = []
		$(TravelerList).waitForDisplayed()
		var totalTravelers = browser.$$(TravelerList)
		if (seatType === "exitRow") {
			availableSeats = exitRowSeats
			seatType = "exit-row"
		}
		else if (seatType === "bundleSeat" || seatType === "economyBundleSeat") {
			availableSeats = economyBundleSeat
			seatType = "economy-seat"
		}
		else if (seatType === "exitRowBundleSeat") {
			availableSeats = exitRowBundleSeat
			seatType = "exit-row"
		}
		else if (seatType === "nonBundleSeat") {
			availableSeats = legroom
			seatType = "legroom"
		}
		else if (seatType === "economy") {
			availableSeats = economySeat
			seatType = "economy-seat"
		}
		else if (seatType === "legroom") {
			availableSeats = legroom
			seatType = "legroom"
		}
		else {
			availableSeats = economySeat
			seatType = "economy-seat"
		}
		$(availableSeats).waitForDisplayed()
		var getSeats = browser.$$(availableSeats)
		for (var i = 0; i < getSeats.length; i++) {
			getAllSeats.push(getSeats[i].getAttribute("data-hook").split('_')[2])
		}
		var adjacentSeats = []
		for (var i = 0; i < getAllSeats.length; i++) {
			if (totalTravelers.length === 1) {
				if (getAllSeats[i].slice(0, getAllSeats[i].length - 1) === getAllSeats[i + 1].slice(0, getAllSeats[i + 1].length - 1)) {
					adjacentSeats.push(getAllSeats[i])
					break;
				}
			}
			if (totalTravelers.length === 2) {
				if (getAllSeats[i].slice(0, getAllSeats[i].length - 1) === getAllSeats[i + 1].slice(0, getAllSeats[i + 1].length - 1)) {
					adjacentSeats.push(getAllSeats[i])
					adjacentSeats.push(getAllSeats[i + 1])
					break;
				}
			}
			if (totalTravelers.length === 3) {
				if (getAllSeats[i].slice(0, getAllSeats[i].length - 1) === getAllSeats[i + 1].slice(0, getAllSeats[i + 1].length - 1) &&
					getAllSeats[i].slice(0, getAllSeats[i].length - 1) === getAllSeats[i + 2].slice(0, getAllSeats[i + 2].length - 1)) {
					adjacentSeats.push(getAllSeats[i])
					adjacentSeats.push(getAllSeats[i + 1])
					adjacentSeats.push(getAllSeats[i + 2])
					break;
				}
			}
			if (totalTravelers.length === 4) {
				if (getAllSeats[i].slice(0, getAllSeats[i].length - 1) === getAllSeats[i + 1].slice(0, getAllSeats[i + 1].length - 1) &&
					getAllSeats[i].slice(0, getAllSeats[i].length - 1) === getAllSeats[i + 2].slice(0, getAllSeats[i + 2].length - 1) &&
					getAllSeats[i].slice(0, getAllSeats[i].length - 1) === getAllSeats[i + 3].slice(0, getAllSeats[i + 3].length - 1)
				) {
					adjacentSeats.push(getAllSeats[i])
					adjacentSeats.push(getAllSeats[i + 1])
					adjacentSeats.push(getAllSeats[i + 2])
					adjacentSeats.push(getAllSeats[i + 3])
					break;
				}
				else {
					continue;
				}
			}
			if (totalTravelers.length === 5) {
				if (getAllSeats[i].slice(0, getAllSeats[i].length - 1) === getAllSeats[i + 1].slice(0, getAllSeats[i + 1].length - 1) &&
					getAllSeats[i].slice(0, getAllSeats[i].length - 1) === getAllSeats[i + 2].slice(0, getAllSeats[i + 2].length - 1) &&
					getAllSeats[i].slice(0, getAllSeats[i].length - 1) === getAllSeats[i + 3].slice(0, getAllSeats[i + 3].length - 1) &&
					getAllSeats[i].slice(0, getAllSeats[i].length - 1) === getAllSeats[i + 4].slice(0, getAllSeats[i + 4].length - 1)) {
					adjacentSeats.push(getAllSeats[i])
					adjacentSeats.push(getAllSeats[i + 1])
					adjacentSeats.push(getAllSeats[i + 2])
					adjacentSeats.push(getAllSeats[i + 3])
					adjacentSeats.push(getAllSeats[i + 4])
					break;
				}
			}
		}
		$(seatBreadcrumb).scrollIntoView();
		$(seatMap).waitForDisplayed()
		if (travelerNum === "all") {
			for (var i = 0; i < adjacentSeats.length; i++) {
				$("//span[contains(@data-hook,'" + seatType + "')][contains(@data-hook,'_" + adjacentSeats[i] + "')]").click();
				if ($(exitRowPopup.replace("XX", adjacentSeats[i].toUpperCase())).isDisplayed()) {
					$(exitRowPopup.replace("XX", adjacentSeats[i].toUpperCase())).click()
					$(seatBreadcrumb).scrollIntoView();
				}
				if ($(updateSelectedSeat).isDisplayed()) {
					updatedSeatDetails=$(selectedSeatTypeUpdatePopup).getText()+'-'+$(selectedSeatIdUpdatePopup).getText()+'-'+$(selectedSeatPriceUpdatePopup).getText()
					$(updateSelectedSeat).click()
				}
				do {
					browser.pause(5)
				} while ($(spinnerBar).isDisplayed())
				$(takenSeats.replace("X", i + 1)).waitForDisplayed()
			}
		}
		else {
			$(selectTraveler.replace("X", travelerNum)).click()
			var takenCount = browser.$$(takenSeatsList)			
			if (takenCount.length > 0) {
				var lastSelectedSeat = $(takenSeats.replace("X", takenCount.length)).getAttribute("data-hook").split('_')[3]
				$("//span[contains(@data-hook,'" + seatType + "')][contains(@data-hook,'_" + adjacentSeats[adjacentSeats.indexOf(lastSelectedSeat) + 1] + "')]").click();
				if (!$(activePopup).isDisplayed()) {
					selectedSeatDetails=seatType+'-'+adjacentSeats[adjacentSeats.indexOf(lastSelectedSeat) + 1]+'-'+$("//span[@data-hook='seats-popover_seat_price_"+adjacentSeats[adjacentSeats.indexOf(lastSelectedSeat) + 1]+"']").getText()
				}
				
				if ($(exitRowPopup.replace("XX", adjacentSeats[travelerNum - 1].toUpperCase())).isDisplayed()) {
					updatedSeatDetails=$(selectedSeatTypeUpdatePopup).getText()+'-'+$(selectedSeatIdUpdatePopup).getText()+'-'+$(selectedSeatPriceUpdatePopup).getText()
					$(exitRowPopup.replace("XX", adjacentSeats[travelerNum - 1].toUpperCase())).click()
				}
				else if ($(updateSelectedSeat).isDisplayed()) {
					updatedSeatDetails=$(selectedSeatTypeUpdatePopup).getText()+'-'+$(selectedSeatIdUpdatePopup).getText()+'-'+$(selectedSeatPriceUpdatePopup).getText()
					$(updateSelectedSeat).click()
				}	
							
			}
			else {
				$("//span[contains(@data-hook,'" + seatType + "')][contains(@data-hook,'_" + adjacentSeats[travelerNum - 1] + "')]").click();				
				if (!$(activePopup).isDisplayed()) {
					try{
					this.clickSelectedSeat(tripType,travelerNum)
					selectedSeatDetails=$(selectedSeatTypeDeselectPopup).getText()+'-'+$(selectedSeatIdDeselectPopup).getText()+'-'+$(selectedSeatPriceDeselectPopup).getText()
				    this.clickSelectedSeat(tripType,travelerNum) 
                    }  
                    catch(ex){
	                 this.clickSelectedSeat(tripType,travelerNum) 
                     }               
				}				
				if ($(exitRowPopup.replace("XX", adjacentSeats[travelerNum - 1].toUpperCase())).isDisplayed()) {
					updatedSeatDetails=$(selectedSeatTypeUpdatePopup).getText()+'-'+$(selectedSeatIdUpdatePopup).getText()+'-'+$(selectedSeatPriceUpdatePopup).getText()
					$(exitRowPopup.replace("XX", adjacentSeats[travelerNum - 1].toUpperCase())).click()
				}
				else if ($(updateSelectedSeat).isDisplayed()) {
					updatedSeatDetails=$(selectedSeatTypeUpdatePopup).getText()+'-'+$(selectedSeatIdUpdatePopup).getText()+'-'+$(selectedSeatPriceUpdatePopup).getText()
					$(updateSelectedSeat).click()
				}	
			}
			do {
				browser.pause(5)
			} while ($(spinnerBar).isDisplayed())
		}
	}
	selectDepartureSegNonAdjacentSeats(seatType, travelerNum) {
		var availableSeats
		var getAllSeats = []
		$(TravelerList).waitForDisplayed()
		var totalTravelers = browser.$$(TravelerList)
		if (seatType === "exitRow") {
			availableSeats = exitRowSeats
			seatType = "exit-row"
		}
		else if (seatType === "bundleSeat" || seatType === "economyBundleSeat") {
			availableSeats = economyBundleSeat
			seatType = "economy-seat"
		}
		else if (seatType === "exitRowBundleSeat") {
			availableSeats = exitRowBundleSeat
			seatType = "exit-row"
		}
		else if (seatType === "nonBundleSeat") {
			availableSeats = legroom
			seatType = "legroom"
		}
		else if (seatType === "economy") {
			availableSeats = economySeat
			seatType = "economy-seat"
		}
		else if (seatType === "legroom") {
			availableSeats = legroom
			seatType = "legroom"
		}
		else {
			availableSeats = economySeat
			seatType = "economy-seat"
		}
		$(availableSeats).waitForDisplayed()
		var getSeats = browser.$$(availableSeats)
		for (var i = 0; i < getSeats.length; i++) {
			getAllSeats.push(getSeats[i].getAttribute("data-hook").split('_')[2])
		}
		var adjacentSeats = []
		for (var i = 0; i < getAllSeats.length; i++) {
			if (totalTravelers.length === 1) {
				if (getAllSeats[i].slice(0, getAllSeats[i].length - 1) != getAllSeats[i + 1].slice(0, getAllSeats[i + 1].length - 1)) {
					adjacentSeats.push(getAllSeats[i + 1])
					break;
				}
			}
			if (totalTravelers.length === 2) {
				if (getAllSeats[i].slice(0, getAllSeats[i].length - 1) != getAllSeats[i + 1].slice(0, getAllSeats[i + 1].length - 1)) {
					adjacentSeats.push(getAllSeats[i + 1])
					adjacentSeats.push(getAllSeats[i + 3])
					break;
				}
			}
			if (totalTravelers.length === 3) {
				if (getAllSeats[i].slice(0, getAllSeats[i].length - 1) != getAllSeats[i + 1].slice(0, getAllSeats[i + 1].length - 1) &&
					getAllSeats[i].slice(0, getAllSeats[i].length - 1) != getAllSeats[i + 2].slice(0, getAllSeats[i + 2].length - 1)) {
					adjacentSeats.push(getAllSeats[i + 1])
					adjacentSeats.push(getAllSeats[i + 3])
					adjacentSeats.push(getAllSeats[i + 5])
					break;
				}
			}
			if (totalTravelers.length == 4) {
				if (getAllSeats[i].slice(0, getAllSeats[i].length - 1) != getAllSeats[i + 1].slice(0, getAllSeats[i + 1].length - 1) &&
					getAllSeats[i].slice(0, getAllSeats[i].length - 1) != getAllSeats[i + 2].slice(0, getAllSeats[i + 2].length - 1) &&
					getAllSeats[i].slice(0, getAllSeats[i].length - 1) != getAllSeats[i + 3].slice(0, getAllSeats[i + 3].length - 1)
				) {
					adjacentSeats.push(getAllSeats[i + 1])
					adjacentSeats.push(getAllSeats[i + 3])
					adjacentSeats.push(getAllSeats[i + 5])
					adjacentSeats.push(getAllSeats[i + 7])
					break;
				}
				else {
					continue;
				}
			}
			if (totalTravelers.length === 5) {
				if (getAllSeats[i].slice(0, getAllSeats[i].length - 1) != getAllSeats[i + 1].slice(0, getAllSeats[i + 1].length - 1) &&
					getAllSeats[i].slice(0, getAllSeats[i].length - 1) != getAllSeats[i + 2].slice(0, getAllSeats[i + 2].length - 1) &&
					getAllSeats[i].slice(0, getAllSeats[i].length - 1) != getAllSeats[i + 3].slice(0, getAllSeats[i + 3].length - 1) &&
					getAllSeats[i].slice(0, getAllSeats[i].length - 1) != getAllSeats[i + 4].slice(0, getAllSeats[i + 4].length - 1)) {
					adjacentSeats.push(getAllSeats[i + 1])
					adjacentSeats.push(getAllSeats[i + 3])
					adjacentSeats.push(getAllSeats[i + 5])
					adjacentSeats.push(getAllSeats[i + 7])
					adjacentSeats.push(getAllSeats[i + 9])
					break;
				}
			}
		}
		$(seatBreadcrumb).scrollIntoView();
		$(seatMap).waitForDisplayed()
		if (travelerNum === "all") {
			for (var i = 0; i < adjacentSeats.length; i++) {
				$("//span[contains(@data-hook,'" + seatType + "')][contains(@data-hook,'_" + adjacentSeats[i] + "')]").click();
				if ($(exitRowPopup.replace("XX", adjacentSeats[i].toUpperCase())).isDisplayed()) {
					$(exitRowPopup.replace("XX", adjacentSeats[i].toUpperCase())).click()
					$(seatBreadcrumb).scrollIntoView();
				}
				if ($(updateSelectedSeat).isDisplayed()) {
					updatedSeatDetails=$(selectedSeatTypeUpdatePopup).getText()+'-'+$(selectedSeatIdUpdatePopup).getText()+'-'+$(selectedSeatPriceUpdatePopup).getText()
					$(updateSelectedSeat).click()
				}
				do {
					browser.pause(5)
				} while ($(spinnerBar).isDisplayed())
			}
		}
		else {
			$(selectTraveler.replace("X", travelerNum)).click()
			$("//span[contains(@data-hook,'" + seatType + "')][contains(@data-hook,'_" + adjacentSeats[travelerNum - 1] + "')]").click();
			if ($(exitRowPopup.replace("XX", adjacentSeats[travelerNum - 1].toUpperCase())).isDisplayed()) {
				$(exitRowPopup.replace("XX", adjacentSeats[travelerNum - 1].toUpperCase())).click()
			}
			if ($(updateSelectedSeat).isDisplayed()) {
				updatedSeatDetails=$(selectedSeatTypeUpdatePopup).getText()+'-'+$(selectedSeatIdUpdatePopup).getText()+'-'+$(selectedSeatPriceUpdatePopup).getText()
				$(updateSelectedSeat).click()
			}
			do {
				browser.pause(5)
			} while ($(spinnerBar).isDisplayed())
		}
	}
	selectReturningSegAdjacentSeats(tripType,seatType, travelerNum) {
		$(seatBreadcrumb).scrollIntoView();
		if ($(returningSeatsSelectButton).isDisplayed()) {
			$(returningSeatsSelectButton).click()
		}
		else {
			$(returningSeg).click()
		}
		browser.pause(5000);
		var availableSeats
		var getAllSeats = []
		if (seatType === "exitRow") {
			availableSeats = exitRowSeats
			seatType = "exit-row"
		}
		else if (seatType === "bundleSeat" || seatType === "economyBundleSeat") {
			availableSeats = economyBundleSeat
			seatType = "economy-seat"
		}
		else if (seatType === "exitRowBundleSeat") {
			availableSeats = exitRowBundleSeat
			seatType = "exit-row"
		}
		else if (seatType === "nonBundleSeat") {
			availableSeats = legroom
			seatType = "legroom"
		}
		else if (seatType === "economy") {
			availableSeats = economySeat
			seatType = "economy"
		}
		else if (seatType === "legroom") {
			availableSeats = legroom
			seatType = "legroom"
		}
		else {
			availableSeats = economySeat
			seatType = "economy"
		}
		$(availableSeats).waitForDisplayed()
		$(TravelerList).waitForDisplayed()
		var totalTravelers = browser.$$(TravelerList)
		var getSeats = browser.$$(availableSeats)
		for (var i = 0; i < getSeats.length; i++) {
			getAllSeats.push(getSeats[i].getAttribute("data-hook").split('_')[2])
		}
		var adjacentSeats = []
		for (var i = 0; i < getAllSeats.length; i++) {
			if (totalTravelers.length === 1) {
				if (getAllSeats[i].slice(0, getAllSeats[i].length - 1) === getAllSeats[i + 1].slice(0, getAllSeats[i + 1].length - 1)) {
					adjacentSeats.push(getAllSeats[i])
					break;
				}
			}
			if (totalTravelers.length === 2) {
				if (getAllSeats[i].slice(0, getAllSeats[i].length - 1) === getAllSeats[i + 1].slice(0, getAllSeats[i + 1].length - 1)) {
					adjacentSeats.push(getAllSeats[i])
					adjacentSeats.push(getAllSeats[i + 1])
					break;
				}
			}
			if (totalTravelers.length === 3) {
				if (getAllSeats[i].slice(0, getAllSeats[i].length - 1) === getAllSeats[i + 1].slice(0, getAllSeats[i + 1].length - 1) &&
					getAllSeats[i].slice(0, getAllSeats[i].length - 1) === getAllSeats[i + 2].slice(0, getAllSeats[i + 2].length - 1)) {
					adjacentSeats.push(getAllSeats[i])
					adjacentSeats.push(getAllSeats[i + 1])
					adjacentSeats.push(getAllSeats[i + 2])
					break;
				}
			}
			if (totalTravelers.length == 4) {
				if (getAllSeats[i].slice(0, getAllSeats[i].length - 1) === getAllSeats[i + 1].slice(0, getAllSeats[i + 1].length - 1) &&
					getAllSeats[i].slice(0, getAllSeats[i].length - 1) === getAllSeats[i + 2].slice(0, getAllSeats[i + 2].length - 1) &&
					getAllSeats[i].slice(0, getAllSeats[i].length - 1) === getAllSeats[i + 3].slice(0, getAllSeats[i + 3].length - 1)
				) {
					adjacentSeats.push(getAllSeats[i])
					adjacentSeats.push(getAllSeats[i + 1])
					adjacentSeats.push(getAllSeats[i + 2])
					adjacentSeats.push(getAllSeats[i + 3])
					break;
				}
				else {
					continue;
				}
			}
			if (totalTravelers.length === 5) {
				if (getAllSeats[i].slice(0, getAllSeats[i].length - 1) === getAllSeats[i + 1].slice(0, getAllSeats[i + 1].length - 1) &&
					getAllSeats[i].slice(0, getAllSeats[i].length - 1) === getAllSeats[i + 2].slice(0, getAllSeats[i + 2].length - 1) &&
					getAllSeats[i].slice(0, getAllSeats[i].length - 1) === getAllSeats[i + 3].slice(0, getAllSeats[i + 3].length - 1) &&
					getAllSeats[i].slice(0, getAllSeats[i].length - 1) === getAllSeats[i + 4].slice(0, getAllSeats[i + 4].length - 1)) {
					adjacentSeats.push(getAllSeats[i])
					adjacentSeats.push(getAllSeats[i + 1])
					adjacentSeats.push(getAllSeats[i + 2])
					adjacentSeats.push(getAllSeats[i + 3])
					adjacentSeats.push(getAllSeats[i + 4])
					break;
				}
			}
		}
		$(seatMap).waitForDisplayed()
		if (travelerNum === "all") {
			for (var i = 0; i < adjacentSeats.length; i++) {
				$("//span[contains(@data-hook,'" + seatType + "')][contains(@data-hook,'_" + adjacentSeats[i] + "')]").click();
				if ($(exitRowPopup.replace("XX", adjacentSeats[i].toUpperCase())).isDisplayed()) {
					$(exitRowPopup.replace("XX", adjacentSeats[i].toUpperCase())).click()
					$(seatBreadcrumb).scrollIntoView();
				}
				if ($(updateSelectedSeat).isDisplayed()) {
					updatedSeatDetails=$(selectedSeatTypeUpdatePopup).getText()+'-'+$(selectedSeatIdUpdatePopup).getText()+'-'+$(selectedSeatPriceUpdatePopup).getText()
					$(updateSelectedSeat).click()
				}
				do {
					browser.pause(5)
				} while ($(spinnerBar).isDisplayed())
				$(takenSeats.replace("X", i + 1)).waitForDisplayed()
			}
		}
		else {
			$(selectTraveler.replace("X", travelerNum)).click()
			var takenCount = browser.$$(takenSeatsList)
			if (takenCount.length > 0) {
				var lastSelectedSeat = $(takenSeats.replace("X", takenCount.length)).getAttribute("data-hook").split('_')[3]
				$("//span[contains(@data-hook,'" + seatType + "')][contains(@data-hook,'_" + adjacentSeats[adjacentSeats.indexOf(lastSelectedSeat) + 1] + "')]").click();
				if ($(exitRowPopup.replace("XX", adjacentSeats[travelerNum - 1].toUpperCase())).isDisplayed()) {
					$(exitRowPopup.replace("XX", adjacentSeats[travelerNum - 1].toUpperCase())).click()
				}
				if ($(updateSelectedSeat).isDisplayed()) {
					updatedSeatDetails=$(selectedSeatTypeUpdatePopup).getText()+'-'+$(selectedSeatIdUpdatePopup).getText()+'-'+$(selectedSeatPriceUpdatePopup).getText()
					$(updateSelectedSeat).click()
				}
			}
			else {
				$("//span[contains(@data-hook,'" + seatType + "')][contains(@data-hook,'_" + adjacentSeats[travelerNum - 1] + "')]").click();
				if ($(exitRowPopup.replace("XX", adjacentSeats[travelerNum - 1].toUpperCase())).isDisplayed()) {
					$(exitRowPopup.replace("XX", adjacentSeats[travelerNum - 1].toUpperCase())).click()
				}
				if ($(updateSelectedSeat).isDisplayed()) {
					updatedSeatDetails=$(selectedSeatTypeUpdatePopup).getText()+'-'+$(selectedSeatIdUpdatePopup).getText()+'-'+$(selectedSeatPriceUpdatePopup).getText()
					$(updateSelectedSeat).click()
				}
			}
			do {
				browser.pause(5)
			} while ($(spinnerBar).isDisplayed())
		}
	}
	validateSeatsPageLoaded() {
		do {
			browser.pause(5)
		} while ($(spinnerBar).isDisplayed())
		$(seatMap).waitForDisplayed()
		assert.equal(
			$(seatMap).isDisplayed(),
			true,
			'validation failed: SeatMap not loaded correctly'
		);
	}
	selectReturningSegNonAdjacentSeats(seatType, travelerNum) {
		$(seatBreadcrumb).scrollIntoView();
		if ($(returningSeatsSelectButton).isDisplayed()) {
			$(returningSeatsSelectButton).click()
		}
		else {
			$(returningSeg).click()
		}
		var availableSeats
		var getAllSeats = []
		if (seatType === "exitRow") {
			availableSeats = exitRowSeats
			seatType = "exit-row"
		}
		else if (seatType === "bundleSeat" || seatType === "economyBundleSeat") {
			availableSeats = economyBundleSeat
			seatType = "economy-seat"
		}
		else if (seatType === "exitRowBundleSeat") {
			availableSeats = exitRowBundleSeat
			seatType = "exit-row"
		}
		else if (seatType === "nonBundleSeat") {
			availableSeats = legroom
			seatType = "legroom"
		}
		else if (seatType === "economy") {
			availableSeats = economySeat
			seatType = "economy"
		}
		else if (seatType === "legroom") {
			availableSeats = legroom
			seatType = "legroom"
		}
		else {
			availableSeats = economySeat
			seatType = "economy"
		}
		$(availableSeats).waitForDisplayed()
		$(TravelerList).waitForDisplayed()
		var totalTravelers = browser.$$(TravelerList)
		var getSeats = browser.$$(availableSeats)
		for (var i = 0; i < getSeats.length; i++) {
			getAllSeats.push(getSeats[i].getAttribute("data-hook").split('_')[2])
		}
		var adjacentSeats = []
		for (var i = 0; i < getAllSeats.length; i++) {
			if (totalTravelers.length === 1) {
				if (getAllSeats[i].slice(0, getAllSeats[i].length - 1) != getAllSeats[i + 1].slice(0, getAllSeats[i + 1].length - 1)) {
					adjacentSeats.push(getAllSeats[i + 1])
					break;
				}
			}
			if (totalTravelers.length === 2) {
				if (getAllSeats[i].slice(0, getAllSeats[i].length - 1) != getAllSeats[i + 1].slice(0, getAllSeats[i + 1].length - 1)) {
					adjacentSeats.push(getAllSeats[i + 1])
					adjacentSeats.push(getAllSeats[i + 3])
					break;
				}
			}
			if (totalTravelers.length === 3) {
				if (getAllSeats[i].slice(0, getAllSeats[i].length - 1) != getAllSeats[i + 1].slice(0, getAllSeats[i + 1].length - 1) &&
					getAllSeats[i].slice(0, getAllSeats[i].length - 1) != getAllSeats[i + 2].slice(0, getAllSeats[i + 2].length - 1)) {
					adjacentSeats.push(getAllSeats[i + 1])
					adjacentSeats.push(getAllSeats[i + 3])
					adjacentSeats.push(getAllSeats[i + 5])
					break;
				}
			}
			if (totalTravelers.length == 4) {
				if (getAllSeats[i].slice(0, getAllSeats[i].length - 1) != getAllSeats[i + 1].slice(0, getAllSeats[i + 1].length - 1) &&
					getAllSeats[i].slice(0, getAllSeats[i].length - 1) != getAllSeats[i + 2].slice(0, getAllSeats[i + 2].length - 1) &&
					getAllSeats[i].slice(0, getAllSeats[i].length - 1) != getAllSeats[i + 3].slice(0, getAllSeats[i + 3].length - 1)
				) {
					adjacentSeats.push(getAllSeats[i + 1])
					adjacentSeats.push(getAllSeats[i + 3])
					adjacentSeats.push(getAllSeats[i + 5])
					adjacentSeats.push(getAllSeats[i + 7])
					break;
				}
				else {
					continue;
				}
			}
			if (totalTravelers.length === 5) {
				if (getAllSeats[i].slice(0, getAllSeats[i].length - 1) != getAllSeats[i + 1].slice(0, getAllSeats[i + 1].length - 1) &&
					getAllSeats[i].slice(0, getAllSeats[i].length - 1) != getAllSeats[i + 2].slice(0, getAllSeats[i + 2].length - 1) &&
					getAllSeats[i].slice(0, getAllSeats[i].length - 1) != getAllSeats[i + 3].slice(0, getAllSeats[i + 3].length - 1) &&
					getAllSeats[i].slice(0, getAllSeats[i].length - 1) != getAllSeats[i + 4].slice(0, getAllSeats[i + 4].length - 1)) {
					adjacentSeats.push(getAllSeats[i + 1])
					adjacentSeats.push(getAllSeats[i + 3])
					adjacentSeats.push(getAllSeats[i + 5])
					adjacentSeats.push(getAllSeats[i + 7])
					adjacentSeats.push(getAllSeats[i + 9])
					break;
				}
			}
		}
		$(seatMap).waitForDisplayed()
		if (travelerNum === "all") {
			for (var i = 0; i < adjacentSeats.length; i++) {
				$("//span[contains(@data-hook,'" + seatType + "')][contains(@data-hook,'_" + adjacentSeats[i] + "')]").click();
				if ($(exitRowPopup.replace("XX", adjacentSeats[i].toUpperCase())).isDisplayed()) {
					$(exitRowPopup.replace("XX", adjacentSeats[i].toUpperCase())).click()
					$(seatBreadcrumb).scrollIntoView();
				}
				if ($(updateSelectedSeat).isDisplayed()) {
					updatedSeatDetails=$(selectedSeatTypeUpdatePopup).getText()+'-'+$(selectedSeatIdUpdatePopup).getText()+'-'+$(selectedSeatPriceUpdatePopup).getText()
					$(updateSelectedSeat).click()
				}
				do {
					browser.pause(5)
				} while ($(spinnerBar).isDisplayed())
				$(takenSeats.replace("X", i + 1)).waitForDisplayed()
			}
		}
		else {
			$(selectTraveler.replace("X", travelerNum)).click()

			$("//span[contains(@data-hook,'" + seatType + "')][contains(@data-hook,'_" + adjacentSeats[travelerNum - 1] + "')]").click();
			if ($(exitRowPopup.replace("XX", adjacentSeats[travelerNum - 1].toUpperCase())).isDisplayed()) {
				$(exitRowPopup.replace("XX", adjacentSeats[travelerNum - 1].toUpperCase())).click()
				$(seatBreadcrumb).scrollIntoView();
			}
			if ($(updateSelectedSeat).isDisplayed()) {
				updatedSeatDetails=$(selectedSeatTypeUpdatePopup).getText()+'-'+$(selectedSeatIdUpdatePopup).getText()+'-'+$(selectedSeatPriceUpdatePopup).getText()
				$(updateSelectedSeat).click()
			}
			do {
				browser.pause(5)
			} while ($(spinnerBar).isDisplayed())
			$(takenSeats.replace("X", 1)).waitForDisplayed()
		}
	}
	clickContinueButton() {
		$(tailOfPlane).scrollIntoView({
			block: 'center',
			inline: 'start',
		  });
		this.pause(5000);
		$(continueButton).click();	
		
	}
	clickSelectSeatPopupContinueButton(flightType) {		
		if (flightType === 'Departing') {
			$(tailOfPlane).scrollIntoView({
				block: 'center',
				inline: 'start',
			  });
			$(continueButton).click()
		}
		$(popupContinueButton).click()
		$(selectSeatPopupContinueButton).waitForDisplayed()
		$(selectSeatPopupContinueButton).click()
	}

	validateTravelersGridSeat(tripType) {
		var totalTravelers = browser.$$(TravelerList)
		for (var i = 1; i <= totalTravelers.length; i++) {
			if($(seatId.replace("X", i)).isDisplayed()){
			assert.equal(
				$(seatId.replace("X", i)).getAttribute("data-hook"),
				'seat-id',
				'validation failed: Seat is not updated in travelers grid for ' + tripType
			);
		}
		else{
			assert.fail("Validation Failed: Seat not assigned for travelers:"+i);
		}
		}
		
	}
	deselectSelectedSeat(segment, paxNum) {
		if (segment == "departing") {
			$(departingSeg).click()
			$(travelerGridPaxNum.replace("X", paxNum)).click()
			$(takenSeats.replace("X", paxNum)).click()			
		}
		else {
			$(travelerGridPaxNum.replace("X", paxNum)).click()
			$(takenSeats.replace("X", paxNum)).click()
		}
		deselectedSeatDetails=$(selectedSeatTypeDeselectPopup).getText()+'-'+$(selectedSeatIdDeselectPopup).getText()+'-'+$(selectedSeatPriceDeselectPopup).getText()
		$(deselectSeatButton).click()
		do {
			browser.pause(5)
		} while ($(spinnerBar).isDisplayed())
	}
	validateSelectedFlightTypeInSeatsPage(flightType) {
		do {
			browser.pause(1000)
		} while ($(spinnerBar).isDisplayed())
		if (flightType.toLowerCase() === 'departing') {
			$(seatsPageDepartingTabs).waitForDisplayed();
			assert.equal(
				$(seatsPageDepartingTabs).getAttribute('aria-selected'),
				'true',
				'Departing Tab not selected'
			);
		}
		if (flightType.toLowerCase() === 'returning') {
			$(seatsPageReturningTabs).waitForDisplayed();
			$(seatsPageReturningTabs).click();
			assert.equal(
				$(seatsPageReturningTabs).getAttribute('aria-selected'),
				'true',
				'Returning Tab not selected'
			);
		}
	}
	validateSelectSeatsForMeButton(travelers, display) {
		if (travelers === '3')
			assert.equal(
				$(selectSeatsForMe).isDisplayed(),
				display,
				'Select seats for me button is not displayed, Failed'
			);
		if (travelers === '6')
			assert.equal(
				$(selectSeatsForMe).isDisplayed(),
				display,
				'Select seats for me button is displayed, Failed'
			);
	}
	clickSelectSeatsForMeButton(flightType) {
		browser.pause(4000);
		if (flightType === 'Departing') {
			$(seatsPageDepartingTabs).waitForDisplayed();
			$(seatsPageDepartingTabs).click();
			$(selectSeatsForMe).click();
			browser.pause(4000);
		}
		if (flightType === 'Returning') {
			$(seatsPageReturningTabs).waitForDisplayed();
			$(seatsPageReturningTabs).click();
			$(selectSeatsForMe).click();
			browser.pause(4000);
			this.collectTravelerSeatInfo();
		}
	}
	validateTravelersGridSeatIsUnselected(paxNum) {
		assert.equal(
			$(unAssignedSeat.replace("X", 1)).getText(),
			' —',
			'validation failed: Travelers Grid Seat should be unselected for traveler ' + paxNum
		);
	}
	validateActiveButtonInSeatsPage(button, flightType) {
		if (flightType === 'Departing') {
			$(selectReturningButton).isClickable()
			assert.equal(
				$(selectReturningButton).getText(),
				button,
				'SELECT RETURNING button is not displayed, Failed'
			);
		}
		if (flightType === 'Returning') {
			$(continueButtonInReturning).isClickable()
			assert.equal(
				$(continueButtonInReturning).getText(),
				button,
				'Continue button is not displayed, Failed'
			);
		}
	}
	clickSelectReturningButtonInDepartingTab() {
		$(selectReturningButton).click();
	}
	clickContinueButtonInReturningTab() {
		$(continueButtonInReturning).click();
	}
	validateSelectSeatsPopup(text) {
		assert.equal(
			$(selectSeatsPopupText).getText(),
			text.replace("�", "’"),
			'SELECT RETURNING button is not displayed, Failed'
		);
		assert.equal(
			$(selectSeatsNowButton).isDisplayed(),
			true,
			'SELECT SEATS NOW button is not displayed in Select Seats Popup, Failed'
		);
		assert.equal(
			$(selectSeatPopupContinueButton).isDisplayed(),
			true,
			'CONTINUE button is not displayed in Select Seats Popup, Failed'
		);
	}
	clickSelectSeatContinueButton() {
		$(selectSeatPopupContinueButton).click();
	}
	clickSelectSeatNowButton() {
		$(selectSeatsNowButton).waitForDisplayed()
		$(selectSeatsNowButton).click()
	}
	validateBundleContent(content) {
		assert.equal(
			$(bundleBannerContent).getText(),
			content.replace("star", ""),
			'validation failed: Mismatch in bundle banner content '
		);
	}
	validateBundleSeat() {
		var starSeat = browser.$$(bundleSeatCount)
		assert.isAbove(
			starSeat.length,
			1,
			'Validation failed: No star marked bundle seat found'
		);
	}
	validateNonBundleSeat() {
		var count = browser.$$(nonBundleSeatCount)
		if (count.length < 1) {
			$(returningSeg).click()
			count = browser.$$(nonBundleSeatCount)
		}
		assert.isAbove(
			count.length,
			1,
			'Validation failed: No priced seat found in the Seat Map'
		);
	}

	validateSelectedSeatIsHighlighted() {
		var totalTravelers = browser.$$(TravelerList)
		var takenSeats = browser.$$(takenSeatsList)
		assert.equal(
			totalTravelers.length,
			takenSeats.length,
			'validation failed: Mismatch selected seat count '
		);
	}
	collectTravelerSeatInfo() {
		var totalTravelers = browser.$$(TravelerList)
		$(seatBreadcrumb).scrollIntoView();
		$(departingSeg).click()
		$(TravelerList).scrollIntoView()
		while(seatIdDepart.length>0){
			seatIdDepart.pop()
			seatPriceDepart.pop()
			seatIdReturn.pop()
			seatPriceReturn.pop()
		}
		for (var i = 0; i < totalTravelers.length; i++) {
			seatIdDepart.push($(seatId.replace("X", i + 1)).getText())
			seatPriceDepart.push($(seatPrice.replace("X", i + 1)).getText())
		}		
		if($(returningSeg).isDisplayed()){
		$(seatBreadcrumb).scrollIntoView()
		$(returningSeg).click()
		for (var i = 0; i < totalTravelers.length; i++) {

			seatIdReturn.push($(seatId.replace("X", i + 1)).getText())
			seatPriceReturn.push($(seatPrice.replace("X", i + 1)).getText())
		}	
		}		
	}
	validateChildNonAdjacentSeatWarningPopup(text) {		
		assert.equal(
			$(nonAdjacentSeatPopUpWarning).getText(),
			text,
			'validation failed: non Adjacent Seat PopUp Warning msg mismatch'
		);
		assert.equal(
			$(nonAdjacentSeatPopUpWarningOkButton).isClickable(),
			true,
			'validation failed: non Adjacent Seat PopUp Ok Button mismatch'
		);
	}
	clickOkButton() {
		$(nonAdjacentSeatPopUpWarningOkButton).click()
	}
	validateNonAdjacentSeatWarningPopupIsClosed() {
		assert.equal(
			$(nonAdjacentSeatPopUp).isDisplayed(),
			false,
			'validation failed: non Adjacent Seat PopUp not closed'
		);
	}
	validateSeatLegendWrapper() {
		assert.equal(
			$(legendWrapper).isDisplayed(),
			true,
			'Validation failed: Legend Wrapper not displayed'
		);
	}
	validateLegendWrapperText(text) {
		assert.equal(
			$(legendWrapperText).getText(),
			text,
			'Validation failed: Legend Wrapper text not displayed'
		);
	}
	validateSeatLegendWrapperIcon(icon, text) {
		if (icon === 'tOne') {
			assert.equal(
				$(legendWrapperT1).getText(),
				text,
				'Validation failed: Legend Wrapper T1 Icon not displayed'
			);
		}
		if (icon === 'Selected') {
			assert.equal(
				$(legendWrapperT1Selected).getText().replace("\n", " "),
				text,
				'Validation failed: Legend Wrapper T1 Selected not displayed'
			);
		}
		if (icon === 'Legroom') {
			assert.equal(
				$(legendWrapperLegroom).getText().replace("\n", " "),
				text,
				'Validation failed: Legend Wrapper Legroom not displayed'
			);
		}
		if (icon === 'Unavailable') {
			assert.equal(
				$(legendWrapperUnavailable).getText().replace("\n", " "),
				text,
				'Validation failed: Legend Wrapper Unavailable not displayed'
			);
		}
		if (icon === 'Economy') {
			assert.equal(
				$(legendWrapperEconomy).getText().replace("\n", " "),
				text,
				'Validation failed: Legend Wrapper Economy not displayed'
			);
		}
		if (icon === 'ExitExit') {
			assert.equal(
				$(legendWrapperExitRowIcon).getText().replace("\n", " "),
				text,
				'Validation failed: Legend Wrapper Exit Row not displayed'
			);
		}
		if (icon === 'ExitRow') {
			assert.equal(
				$(legendWrapperExitRow).isDisplayed(),
				true,
				'Validation failed: Legend Wrapper Exit Row not displayed'
			);
		}
	}
	validateSeatLegendLegroomTooltipContent(text, textOne, textTwo) {
		$(legroomToolTip).waitForDisplayed();
		$(legroomToolTip).click();
		assert.equal(
			$(legroomToolTipContentPopup).isDisplayed(),
			true,
			'Validation failed: Seat Legend Legroom Content Popup not displayed'
		);
		assert.equal(
			$(legroomPlusContent).getText(),
			text,
			'Validation failed: Seat Legend Legroom Plus Content not displayed'
		);
		assert.equal(
			$(extraLegroomContent).getText(),
			textOne,
			'Validation failed: Seat Legend Legroom - Extra Legroom Content not displayed'
		);
		assert.equal(
			$(extraComfortContent).getText().replace("\n", " "),
			textTwo,
			'Validation failed: Seat Legend Legroom Extra Comfort & Inc. Appl. Taxes Content not displayed'
		);
	}
	validateSeatLegendEconomyTooltipContent(text) {
		$(economyToolTip).waitForDisplayed();
		$(economyToolTip).click();
		assert.equal(
			$(economyToolTipContentPopup).isDisplayed(),
			true,
			'Validation failed: Seat Legend Economy Content Popup not displayed'
		);
		assert.equal(
			$(economyToolTipContentPopup).getText().replace("\n", " "),
			text,
			'Validation failed: Seat Legend Economy Tooltip Content not displayed'
		);
	}
	validateTravelersGridSeatPrice(tripType) {
		var totalTravelers = browser.$$(TravelerList)
		for (var i = 1; i <= totalTravelers.length; i++) {
			assert.equal(
				$(seatPrice.replace("X", i)).getAttribute("data-hook"),
				'seat-price',
				'validation failed: Seat price is not updated in travelers grid for ' + tripType
			);
		}
	}
	validateUnassignSeatPopup(segment, paxNum) {
		if (segment == "departing") {
			$(departingSeg).click()
			$(travelerGridPaxNum.replace("X", paxNum)).click()
			$(takenSeats.replace("X", paxNum)).click()
		}
		else {
			$(travelerGridPaxNum.replace("X", paxNum)).click()
			$(takenSeats.replace("X", paxNum)).click()
		}
	}
	validateUnassignSeatPopupContent() {
		$(seatsPopoverDeselect).waitForDisplayed()
		assert.equal(
			$(seatsPopoverDeselect).isDisplayed(),
			true,
			'Validation failed: Seat Popover - Deselect Popup is not displayed'
		);
		assert.equal(
			$(seatsPopoverTravelerIcon).isDisplayed(),
			true,
			'Validation failed: Seat Popover - Traveler Icon is not displayed'
		);
		assert.equal(
			$(seatsPopoverTravelerName).isDisplayed(),
			true,
			'Validation failed: Seat Popover - Traveler Name is not displayed'
		);
		assert.equal(
			$(seatsPopoverSeatTypeLabel).isDisplayed(),
			true,
			'Validation failed: Seat Popover - Traveler Type Label is not displayed'
		);
		assert.equal(
			$(seatsPopoverSeatID).isDisplayed(),
			true,
			'Validation failed: Seat Popover - Traveler Seat ID is not displayed'
		);
		assert.equal(
			$(seatsPopoverSeatPrice).isDisplayed(),
			true,
			'Validation failed: Seat Popover - Traveler Seat Price is not displayed'
		);
		assert.equal(
			$(seatsPopoverComfortLevel).getText(),
			'Comfort Level',
			'Validation failed: Seat Popover - Comfort Level is not displayed'
		);
		assert.equal(
			$(seatsPopoverStars).isDisplayed(),
			true,
			'Validation failed: Seat Popover - Stars is not displayed'
		);
		assert.equal(
			$(seatsPopoverSeatInfo).isDisplayed(),
			true,
			'Validation failed: Seat Popover - Seat Info is not displayed'
		);
	}
	validateUnavailableSeatDisabled() {
		var restrictedSeats = browser.$$(unavailable)
		for (var i = 0; i < restrictedSeats.length; i++) {
			try {
				restrictedSeats[i].click()
			}
			catch (ex) {
			}
			assert.equal(
				$(takenSeats.replace("X", 1)).isDisplayed(),
				false,
				'Validation Failed: Unavailable Seats not disabled'
			);
		}
	}
	storeCurrentlySelectedSeatDataHook() {
		let dataHook = $("[data-hook*='taken']").getAttribute("data-hook");
		selectedSeat = dataHook;
	}

	collectSelectedSeatIdAndPrice(segment) {
		$("[data-hook='seat-id']").waitForDisplayed();
		if (segment === "departing") {
			collect('departingSelectedSeatIdKey', $("[data-hook='seat-id']").getText());
			collect('departingSelectedSeatPriceKey', $("[data-hook='seat-price']").getText());
		}
		else if (segment === "returning") {
			collect('returningSelectedSeatIdKey', $("[data-hook='seat-id']").getText());
			collect('returningSelectedSeatPriceKey', $("[data-hook='seat-price']").getText());
		}
	}

	selectSpecificSeat() {
		let dataHook = selectedSeat.replace("taken_", "");
		$(`[data-hook='${dataHook}']`).click();
	}
    clickSelectedSeat(segment,traveler){
	browser.pause(2000);
	if(segment==="departing"){
		$(travelerSelectedSeat.replace("X",traveler)).click()
	}	
    }
	validateSpecificSeatIsNotDisplayed() {
		browser.pause(2000);
		if ($(`[data-hook='${selectedSeat}']`).isDisplayed()) {
			assert.fail("The unavailable seat is still displayed as selected.")
		}
		let dataHook = selectedSeat.replace("taken_", "");
		$(`[data-hook='${dataHook}']`).waitForDisplayed();
		try {
			$(`[data-hook='${dataHook}']`).click();
			assert.fail("Seat is still available.");
		} catch(ex) {
			assert.isOk("The seat is no longer available.");
		}
	}
	
	validateErrorMessageIsDisplayed(content){
		assert.equal(
				$(adultAlreadySelectedPopup).getText(),
				content,
				'Validation Failed: Mismatch in adult already selected popup'
			);
	}
	validateMessageWhileTravelingWithChild(content){		
		assert.equal(
				$(travelingWithChildrenNote).getText(),
				content,
				'Validation Failed: Mismatch in traveling With Children Note'
			);
	}
	clickInfoIconForPackage(seatType){
		if(seatType==="Legroom"){
			$(legroomLegendTooltip).click()
		}
		if(seatType==="Economy"){
			$(economyLegendTooltip).click()
		}
	}
	clickLink(link){
		if(link==="Select Seats for me"){
			$(selectSeatsForMe).click()
		}
		if(link==="No Thanks"){
			$(seatsPageSkip).click()
		}
	}
	clickSegmentTabButton(segment){
		if(segment.toLowerCase()==="departing"){
			$(returningSeg).click()
			$(departingSeg).click()
		}
		if(segment.toLowerCase()==="returning"){
			$(returningSeg).click()
		}
	}
	clickLegendContinueButton(){
		$(legendContinueButton).click()
	}
	validateSelectContinuePopup(popup) {
		if(popup === 'true'){
		assert.equal(
			$(selectSeatsNowButton).isDisplayed(),
			true,
			'Select continue popup not dislayed, Failed'
		);
		} else {
		assert.equal(
			$(selectSeatsNowButton).isDisplayed(),
			false,
			'Select continue popup displayed, Failed'
		);
		}
	}
	validateExitRowPopup(){
		assert.equal(
			$(exitRowSeatPopUp).isDisplayed(),
			true,
			'Validation Failed: exitRowSeatPopUp not displayed!'
		);
	}
	validateSeatMap(seg){
		if (seg.toLowerCase()==="departing"){
			assert.equal(
				$(seatsPageHeading).getText(),
				'Choose Departing Seats',
				'Validation failed: Departing seg seat map is not displayed'
			);
		}else if(seg.toLowerCase()==="returning"){
		assert.equal(
			$(seatsPageHeading).getText(),
			'Choose Returning Seats',
			'Validation failed: Returning seg seat map is not displayed'
		);
		}

	}
	selectSeatsByParams(params){		
		if(!params.includes("false")){
		var travelerNum= params.split(' ')[0].split('-')[1]
		var seg= params.split(' ')[1].split('-')[1]
		var seatType= params.split(' ')[2].split('-')[1]
		if(seg.includes("all")){
			if($(tripType).getText()==="Round Trip"){			
			this.selectSeat(seatType,"departing",travelerNum)			
			this.selectSeat(seatType,"returning",travelerNum)	
			}
			else{
			this.selectSeat(seatType,"departing",travelerNum)	
			}
		}else{
			this.selectSeat(seatType,tripType,travelerNum)
		}		
		 
		}		
	}
}
export { seatIdDepart, seatPriceDepart, seatIdReturn, seatPriceReturn,deselectedSeatDetails,updatedSeatDetails,selectedSeatDetails }
export default new SeatPage(); 