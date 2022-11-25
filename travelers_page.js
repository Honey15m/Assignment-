import { Page } from '@g4/prova';
import { assert } from 'chai';

const travelersFormTitle =
  "span[data-hook*='travelers-form'][data-hook*='title']";
const travelerOneAdult = "[data-hook='travelers-form_adults_0_first-name']";
const continueButton = "[data-hook='travelers-page_continue']";

const travelerDOB = {
  travelerMonthClick: "[data-hook='travelers-form_adults_0_dob-month']",
  travelerMonthEnter: "//input[@id='adults.0.dob-month']",
  travelerDayClick: "[data-hook='travelers-form_adults_0_dob-day']",
  travelerDayEnter: "//input[@id='adults.0.dob-day']",
  travelerYear: "[data-hook='travelers-form_adults_0_dob-year']",
};

const travelerElements = {
  travelerPageContinue: "[data-hook='travelers-page_continue']",
  travelerFirstName: "[data-hook='travelers-form_adults_0_first-name']",
  travelerLastName: "[data-hook='travelers-form_adults_0_last-name']",
  travelerGenderMale: "//span[text()='Male']",
  travelerGenderFemale: "//span[text()='Female']",
  travelerPageTitle: '//title',
};

const travelersForm = {};
travelersForm.Title = "[data-hook='travelers-form_TYPE_X_title']";
travelersForm.First_Name = "[data-hook='travelers-form_TYPE_X_first-name']";
travelersForm.Middle_Name = "[data-hook='travelers-form_TYPE_X_middle-name']";
travelersForm.Last_Name = "[data-hook='travelers-form_TYPE_X_last-name']";
travelersForm.Suffix = "[data-hook='travelers-form_TYPE_X_suffix']";
travelersForm.Gender_Male = "[data-hook='travelers-form_TYPE_X_gender_MALE']";
travelersForm.Gender_Female = "[data-hook='travelers-form_TYPE_X_gender_FEMALE";
travelersForm.Gender_Not_Selected =
  "[data-hook='travelers-form_TYPE_X_gender_NOT_SELECTED";
travelersForm.Dob_Month = "[data-hook='travelers-form_TYPE_X_dob-month";
travelersForm.Dob_Day = "[data-hook='travelers-form_TYPE_X_dob-day";
travelersForm.Dob_Year = "[data-hook='travelers-form_TYPE_X_dob-year";
travelersForm.Phone_Prefix =
  "[data-hook='travelers-form_TYPE_X_primary-phone-prefix";
travelersForm.Phone_Number =
  "[data-hook='travelers-form_TYPE_X_primary-phone-number";
travelersForm.Allegiant_Number =
  "[data-hook='travelers-form_TYPE_X_allegiant-number";
travelersForm.Email = "[data-hook='travelers-form_TYPE_X_email";
travelersForm.Redress_Section =
  "[data-hook='travelers-form_TYPE_X_known-traveler-redress-section_label";
travelersForm.Known_Traveler_Number =
  "[data-hook='travelers-form_TYPE_X_known-traveler-number";
travelersForm.Redress_Number =
  "[data-hook='travelers-form_TYPE_X_redress-number";
travelersForm.FieldErrorMessage =
  "[data-hook='field-error-message_TYPE.X.FIELD']";
travelersForm.Emergency_contacts_first_name =
  "[data-hook='travelers-form_TYPE_X_emergency-contacts-first-name']";
travelersForm.Emergency_contacts_last_name =
  "[data-hook='travelers-form_TYPE_X_emergency-contacts-last-name']";
travelersForm.Emergency_contacts_phone_number =
  "[data-hook='travelers-form_TYPE_X_emergency-contacts-phone-number']";
travelersForm.Infant_designated_lap =
  "[data-hook='travelers-form_infantsInLap_X_designated-lap']";
const departingDayDateFromHeader =
  "[data-hook*='header-flight-info_departing-date']";

class TravelersPage extends Page {
  /**
   * This method identifies the total number of travelers and their type and then will fill data for each of them
   */
  fillAllTravelersData() {
    const totalTravelers = browser.$$(travelersFormTitle);
    let adultIndex = 0;
    let childIndex = 0;
    let infantInLapIndex = 0;
    let infantInSeatIndex = 0;
    $(travelerOneAdult).waitForDisplayed()
;    $(travelerOneAdult).scrollIntoView(
      {
        block: 'center',
        inline: 'start',
      }
    );
    totalTravelers.forEach(tr => {
      const travelerLabel = tr.getText().toLowerCase();
      switch (true) {
        case travelerLabel.includes('adult'): {
          this.fillTravelerForm('adult', ++adultIndex);
          break;
        }
        case travelerLabel.includes('child'): {
          this.fillTravelerForm('child', ++childIndex);
          break;
        }
        case travelerLabel.includes('infant in seat'): {
          this.fillTravelerForm('infant_in_seat', ++infantInSeatIndex);
          break;
        }
        case travelerLabel.includes('infant in lap'): {
          this.fillInfantInLapForm(++infantInLapIndex);
          break;
        }
        // no default
      }
    });
  }

  /**
   * This method fills all required data for an "Adult", "Child" or "Infant in seat" traveler
   * @param { String } travelerType "Adult"; "Child"; "Infant in seat"
   * @param { Number } travelerIndex   Numbers 1-9
   */
  fillTravelerForm(travelerType, travelerIndex) {
    this.fillTravelerFieldDetails(
      'First Name',
      'FirstName',
      travelerType,
      travelerIndex
    );
    this.fillTravelerFieldDetails(
      'Middle Name',
      'MidName',
      travelerType,
      travelerIndex
    );
    this.fillTravelerFieldDetails(
      'Last Name',
      'LastName',
      travelerType,
      travelerIndex
    );
    this.selectTravelerGender('Male', travelerType, travelerIndex);
    const travelerDOB = this.generateTravelerDOB(
      travelerType.includes('infant_') ? 'infant' : travelerType
    );
    this.fillTravelerDob(travelerDOB, travelerType, travelerIndex);
  }

  fillTravelerFieldDetails(field, data, travelerType, travelerNumber) {
    const formattedTravelerType = this.getTravelerTypeData(travelerType);
    const formattedField = this.getFieldData(field);
    // eslint-disable-next-line max-len
    const selector = travelersForm[formattedField]; // This is how we build the selector dynamically, see the list of selectors above
    this.clickElement(
      $(
        selector
          .replace('X', travelerNumber - 1)
          .replace('TYPE', formattedTravelerType)
      )
    );

    this.setInputField(
      $(
        selector
          .replace('X', travelerNumber - 1)
          .replace('TYPE', formattedTravelerType)
      ),
      data
    );
  }

  /**
   * This method assign an Adult to a Lap Infant and fills his DOB.
   * It will assign the first Lap infant to the first Adult, the second Infant to the Second Adult and so on.
   * @param { Number } travelerIndex   Numbers 1-9
   */
  fillInfantInLapForm(travelerIndex) {
    this.selectAdultForInfant(travelerIndex, travelerIndex);
    const travelerDOB = this.generateTravelerDOB('infant');
    this.fillTravelerDob(travelerDOB, 'infant_in_lap', travelerIndex);
  }

  /**
   * This method is used to fill in the desired DoB for the specified traveler.
   * @param { String } travelerNumber 1, 2, 3 etc
   * @param { String } travelerDOB    e.g. "1520593124587" milliseconds
   * @param { String } travelerType   Adult, Child, Infant in Seat, Infant in Lap
   */
  fillTravelerDob(travelerDOB, travelerType, travelerNumber) {
    this.selectTravelerDOBMonth(
      new Date(travelerDOB).getMonth() + 1,
      travelerType,
      travelerNumber
    );
    this.fillTravelerFieldDetails(
      'year',
      new Date(travelerDOB).getFullYear(),
      travelerType,
      travelerNumber
    );
    this.selectTravelerDOBDay(
      new Date(travelerDOB).getDate(),
      travelerType,
      travelerNumber
    );
  }

  /**
   * This function is used to format parameters from the feature file, to allow them to be more readable.
   * It then converts them into a string, which is used to build a data hook.
   * @param { String } travelerType e.g. "Adult" is formatted into "adult" and then converted into "adults"
   *
   * @returns { Object }
   */
  getTravelerTypeData(travelerType) {
    const formattedTravelerType = travelerType.toLowerCase().replace(/ /g, '_');
    const obj = {
      adult: 'adults',
      child: 'children',
      infant_in_seat: 'infantsInSeat',
      infant_in_lap: 'infantsInLap',
    };
    return obj[formattedTravelerType];
  }

  /**
   * This function is used to format parameters from the feature file, to allow them to be more readable.
   * It then converts them into a string, which is used to build a dynamic data hook (see "const travelersForm" at the top).
   * @param { String } field e.g. "First Name" is formatted into "first_name" and then converted into "First_Name"
   *
   * @returns { Object }
   */
  getFieldData(field) {
    const formattedField = field.toLowerCase().replace(' ', '_');
    const obj = {
      first_name: 'First_Name',
      middle_name: 'Middle_Name',
      last_name: 'Last_Name',
      email: 'Email',
      phone_number: 'Phone_Number',
      allegiant_number: 'Allegiant_Number',
      year: 'Dob_Year',
      month: 'Dob_Month',
      day: 'Dob_Day',
    };
    return obj[formattedField];
  }

  selectTravelerGender(gender, travelerType, travelerNumber) {
    const formattedTravelerType = this.getTravelerTypeData(travelerType);
    const formattedGender = this.getGenderData(gender);
    browser.pause(200);
    this.clickElement(
      $(
        travelersForm[`Gender_${formattedGender}`]
          .replace('X', travelerNumber - 1)
          .replace('TYPE', formattedTravelerType)
      )
    );
  }

  /**
   * This function is used to format parameters from the feature file, to allow them to be more readable.
   * It then converts them into a string, which is used to build a data hook.
   * @param { String } gender e.g. "Female" is formatted into "female" and then converted into "Female"
   * The toLowerCase() is done to make sure both "Female" and "female" will work.
   * @returns { Object }
   */
  getGenderData(gender) {
    const formattedGender = gender.toLowerCase();
    const obj = {
      female: 'Female',
      male: 'Male',
    };
    return obj[formattedGender];
  }

  /**
   * This method generates the traveler's DoB to be a certain type of traveler  at the time of departure, based on a parameter we give.
   * First it splits a collected string (e.g. 2020-03-06) from the Flights page into day, month and year. Next, it converts it into date format in the fullDepartureDate variable.
   * In daysAgo, we convert the parameter we get into a number (e.g. infant = 365).
   * Lastly, getDate() gives us the day of the month, so that we can subtract daysAgo and end up with something like -360, which will be the traveler's DoB. setUTCDate() converts this value to milliseconds.
   * @param { String } desiredAgeGroup Adult, Child, Infant, Infant_Turning_Child
   *
   * @returns { Number } e.g. "1520593124587" milliseconds
   */
  generateTravelerDOB(desiredAgeGroup) {
    const departureDate = $(departingDayDateFromHeader)
      .getAttribute('data-hook')
      .slice(-10);

    const departureDateDay = departureDate.slice(-2);
    const departureDateMonth = departureDate.slice(-5, -3) - 1;
    const departureDateYear = departureDate.slice(0, 4);

    const fullDepartureDate = new Date();

    fullDepartureDate.setFullYear(
      departureDateYear,
      departureDateMonth,
      departureDateDay
    );

    const daysAgo = this.getAgeGroupDays(desiredAgeGroup);

    return fullDepartureDate.setUTCDate(fullDepartureDate.getDate() - daysAgo);
  }

  /**
   * This function is used to format parameters from the feature file, to allow them to be more readable.
   * It then converts them into a number, which is used to build a date of birth that will make the traveler an infant at departure time, for example.
   * @param { String } desiredAgeGroup e.g. "Adult" is formatted into "adult" and then converted into "6935"
   *
   * @returns { Object }
   */
  getAgeGroupDays(desiredAgeGroup) {
    const formattedAgeGroup = desiredAgeGroup.toLowerCase().replace(/ /g, '_');
    const obj = {
      adult: 11688 /* 32 years old adult */,
      young_adult: 6205 /* 17 years old young adult */,
      child: 5110 /* 14 years old child */,
      infant: 365 /* 1 year old infant */,
      infant_turning_child: 728 /* 1 year old infant at departure time, turning 2 after 2-3 days */,
    };
    return obj[formattedAgeGroup];
  }

  selectTravelerDOBMonth(month, travelerType, travelerNumber) {
    const formattedTravelerType = this.getTravelerTypeData(travelerType);
    this.clickElement(
      $(
        travelersForm.Dob_Month.replace('X', travelerNumber - 1).replace(
          'TYPE',
          formattedTravelerType
        )
      )
    );
    browser.pause(200);
    browser.keys(String(month));
    browser.pause(200);
    browser.keys('Enter');
  }

  selectTravelerDOBDay(day, travelerType, travelerNumber) {
    const formattedTravelerType = this.getTravelerTypeData(travelerType);
    this.clickElement(
      $(
        travelersForm.Dob_Day.replace('X', travelerNumber - 1).replace(
          'TYPE',
          formattedTravelerType
        )
      )
    );
    browser.pause(200);
    browser.keys(String(day));
    browser.pause(200);
    browser.keys('Enter');
  }

  clickContinue() {
    this.clickElement(continueButton);
  }

  travelerDOB() {
    this.clickElement($(travelerDOB.travelerMonthClick));
    browser.keys(['ArrowUp', 'ArrowUp', 'ArrowUp', 'Enter']);
    this.clickElement($(travelerDOB.travelerDayClick));
    browser.keys(['ArrowUp', 'ArrowUp', 'ArrowUp', 'Enter']);
    this.setInputField($(travelerDOB.travelerYear), '1999');
  }

  travelorinfo() {
    this.setInputField($(travelerElements.travelerFirstName), 'Test');
    this.setInputField($(travelerElements.travelerLastName), 'Auto');
    this.clickElement($(travelerElements.travelerGenderMale));
  }

  validateTravelerPageIsLoaded(TravelerPageTitle) {
    $(travelerElements.travelerPageContinue).waitForDisplayed({
      timeout: 5000,
    });
    assert.equal(
      $(travelerElements.travelerPageTitle).getTitle(),
      TravelerPageTitle,
      'Traveler page failed to load'
    );
  }
}

export default new TravelersPage();
