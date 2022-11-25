@commercial @digital-customer @booking @prova @hd @travelers
Feature: This feature file is to run all the test in Travelers Page

        Background:
            Given I navigate to www application
             When I am on landing page I select "BLI" for the departure airport
              And I am on landing page I select "LAS" for the destination airport
              And I am on landing page I choose the departure date "1" days from current day
              And I am on landing page I choose the returning date "3" days from departure
              And I am on landing page I select "1" adult travelers
              # And I am on landing page I select Child as "1"
              # And I am on landing page I select InfantInSeat as "1"
              # And I am on landing page I select InfantInLap as "1"
              And I am on landing page I click on search button
              And I am on flights page I click continue button
              And I am on Bundles Page I click continue button

  #QAA-8047
        Scenario: Validate Title, Description and TSA Link on Travelers Page
             When I am on Travelers page I enter First name "QA" for Travelers
             Then I am on Travelers page I expect title "Travelers"
              And I am on Travelers page I expect header description "Who Will Be Traveling?"
              And I am on Travelers page I expect subtitle "Please enter all names exactly as they appear on the traveler's government-issued photo id."
              And I am on Travelers page I click on travelers government link

        @Myo
        Scenario: Learning element using travelsers page
             When I am on Travelers page I type first name as "Honey"
             Then I am on Travelers page I type last name as "Mari"
             Then I am on Travelers page I Select gender as "female" for travelers
             Then I am on Travelers page I enter DOB "25-10-2000" for Travelers
             Then I am on travelers page I click on continue button
             When I am on Seat page I select seats of type "any" on "departing" segment
          #    Then I am on Seat Page I click on select returning button
             Then I am on seat page I click continue button
             Then I am on Seat page I select seats of type "any" on "returning" segment
          #    Then I am on Seat Page i click on select returning flight 
             Then I am on seat Page I click continue button
     #    @Myo
     #    Scenario: Learning element using Seats selection page
     #         When I am on Seat page I select seats of type "any" on "departing" segment
     #      #    Then I am on Seat page I select seats of type "any" on "returning" segment
     #      #    Then I am on Seat Page i click on select returning flight 
     #         Then I am on Seat page I click continue button
           
        @regression
        Scenario Outline: Traveler page: No data entered for Lap Infant DOB - Inline error message displayed
              And I am on Travelers page I click continue button without option selection
             Then I am on Travelers page I expect "dob-month" field for "<travelerType>" <paxNum> is "<fieldErrorMessage>"
             Then I am on Travelers page I expect "dob-day" field for "<travelerType>" <paxNum> is "<fieldErrorMessage>"
             Then I am on Travelers page I expect "dob-year" field for "<travelerType>" <paxNum> is "<fieldErrorMessage>"

        Examples:
                  | travelerType | paxNum | fieldErrorMessage                  |
                  | infantsInLap | 1      | Please enter a valid Date Of Birth |

        @regression
        Scenario Outline: Traveler page: No data entered for mandatory fields  - Inline error message displayed
              And I am on Travelers page I click continue button without option selection
             Then I am on Travelers page I expect "first-name" field for "<travelerType>" <paxNum> is "<firstNameErrorMsg>"
             Then I am on Travelers page I expect "last-name" field for "<travelerType>" <paxNum> is "<lastNameErrorMsg>"
             Then I am on Travelers page I expect "gender" field for "<travelerType>" <paxNum> is "<genderErrorMsg>"
             Then I am on Travelers page I expect "dob-month" field for "<travelerType>" <paxNum> is "<dobMonthErrorMsg>"
             Then I am on Travelers page I expect "dob-day" field for "<travelerType>" <paxNum> is "<dobDayErrorMsg>"
             Then I am on Travelers page I expect "dob-year" field for "<travelerType>" <paxNum> is "<dobYearErrorMsg>"

        Examples:
                  | travelerType  | paxNum | firstNameErrorMsg               | lastNameErrorMsg               | genderErrorMsg      | dobMonthErrorMsg                   | dobDayErrorMsg                     | dobYearErrorMsg                    |
                  | adults        | 1      | Please enter a valid First Name | Please enter a valid Last Name | Please Enter Gender | Please enter a valid Date Of Birth | Please enter a valid Date Of Birth | Please enter a valid Date Of Birth |
                  | children      | 1      | Please enter a valid First Name | Please enter a valid Last Name | Please Enter Gender | Please enter a valid Date Of Birth | Please enter a valid Date Of Birth | Please enter a valid Date Of Birth |
                  | infantsInSeat | 1      | Please enter a valid First Name | Please enter a valid Last Name | Please Enter Gender | Please enter a valid Date Of Birth | Please enter a valid Date Of Birth | Please enter a valid Date Of Birth |

        @regression
        Scenario Outline: Traveler page: Invalid data entered for mandatory fields  - Inline error message displayed
              And I am on Travelers page I enter First name "111" for Travelers
              And I am on Travelers page I enter Last name "222" for Travelers
              And I am on Travelers page I enter email "$!$@*&^.com"
              And I am on Travelers page I enter phone "9876543210" for Traveler
             Then I am on Travelers page I expect "first-name" field for "<travelerType>" <paxNum> is "<firstNameErrorMsg>"
             Then I am on Travelers page I expect "last-name" field for "<travelerType>" <paxNum> is "<lastNameErrorMsg>"
             Then I am on Travelers page I expect "email" field for "<travelerType>" <paxNum> is "<emailErrorMsg>"

        Examples:
                  | travelerType | paxNum | firstNameErrorMsg               | lastNameErrorMsg               | emailErrorMsg                      |
                  | adults       | 1      | Please enter a valid First Name | Please enter a valid Last Name | Please enter a valid Email Address |

        @regression
        Scenario Outline: Traveler page: Invalid DOB details - Inline Error message displayed
             When I am on Travelers page I enter First name "QA|Test|Child" for Travelers
              And I am on Travelers page I enter Last name "Automation|Done|One" for Travelers
              And I am on Travelers page I select gender "male|male|male" for Travelers
              And I am on Travelers page I enter DOB "25-10-2019|16-10-1980|21-10-1989" for Travelers
              And I am on Travelers page I click continue button without option selection
             Then I am on Travelers page I expect "dob-full" field for "adults" <paxNum> is "The date of birth you entered is too young for an adult passenger."
             Then I am on Travelers page I expect "dob-full" field for "children" <paxNum> is "The date of birth you entered is too old for a child passenger."
             Then I am on Travelers page I expect "dob-full" field for "infantsInSeat" <paxNum> is "The date of birth you entered is too old for an infant passenger."

        Examples:
                  | paxNum |
                  | 1      |
        @hd
        Scenario Outline: Validate Infant in Lap on Travelers Page
             Then I am on Travelers page I expect title "Travelers"
              And I click Modify from the header
              And I am on landing page I select "2" adult travelers
              And I am on landing page I click on search button
              And I am on flights page I click continue button
              And I am on Bundles Page I click continue button
             When I am on Travelers page I enter First name "QA|Paul|Test|Child" for Travelers
              And I am on Travelers page I enter Last name "Automation|Mike|Done|One" for Travelers
              And I am on Travelers page I select gender "male|male|male|male" for Travelers
              And I am on Travelers page I enter DOB "25-10-1970|16-11-1990|16-10-2009|21-10-2019|30-06-2020" for Travelers
              And I am on Travelers page I click continue button without option selection
             Then I am on Travelers page I expect "designated-lap" field for "<travelerType>" <paxNum> is "<fieldErrorMessage>"
              And I am on Travelers page I select adult 1 as designated lap for infant 1
              And I am on Travelers page I click continue button

        Examples:
                  | travelerType | paxNum | fieldErrorMessage                                                |
                  | infantsInLap | 1      | Please select the traveler who will have the infant on their lap |

        Scenario Outline: Validate Infant in Lap Error message on Travelers Page
             When I am on Travelers page I enter First name "QA|Test|Child" for Travelers
              And I am on Travelers page I enter Last name "Automation|Done|One" for Travelers
              And I am on Travelers page I select gender "male|male|male" for Travelers
             When I am on Travelers page I enter DOB "<DOB>" for travelerType <travelerType> travelerTypeNum <paxNum> Travelers
              And I am on Travelers page I click continue button without option selection
             Then I am on Travelers page I expect "dob-full" field for "<travelerType>" <paxNum> is "<fieldErrorMessage>"

        Examples:
                  | travelerType | DOB                  | paxNum | fieldErrorMessage                                                                      |
                  | infantsInLap | >2yrsForRetrunflight | 1      | Please modify your travel. Lap infants must be less than 24 mo. at the time of travel. |

  #DC-11994
        Scenario Outline: Validate Travelers: Traveler Form - CTA "Clear"
             When I am on Travelers page I enter <field> field with <testData> for <travelerType> <travelerNumber>
             Then I am on Travelers page I expect Clear form button to be displayed for <travelerType> <travelerNumber>
             Then I am on Travelers page I expect next traveler clear form button not to be displayed <nextTravelerType> <travelerNumber>
              And I am on Travelers page I select Clear form button for <travelerType> <travelerNumber>
             Then I am on Travelers page I expect Clear form button not to be displayed <travelerType> <travelerNumber>
             Then I am on Travelers page I expect <field> field to be cleared for <travelerType> <travelerNumber>

        Examples:
                  | field      | testData | travelerType | nextTravelerType | travelerNumber |
                  | first-name | TWO      | adults       | children         | 1              |
                  | first-name | TWO      | children     | adults           | 1              |

  #DC-11277
        Scenario Outline: Validate that Phone number field has the correct validations using 2 adults
              And I am on Travelers page I enter First name "<firstName>" for Travelers
              And I am on Travelers page I enter phone "<phoneNumber>" for Traveler
              And I am on Travelers page I enter email "<emailAddress>"
             Then I am on Travelers page I expect "primary-phone-number" field for "<travelerType>" <paxNum> is "<primaryPhoneNumberErrorMsg>"

        Examples:
                  | travelerType | paxNum | firstName | phoneNumber | emailAddress | primaryPhoneNumberErrorMsg        |
                  | adults       | 1      | QA        | 12345       | qa@test.com  | Please enter a valid Phone Number |
                  | adults       | 1      | QA        | 9           | qa@test.com  | Please enter a valid Phone Number |
                  | adults       | 1      | QA        | 1234567890  | qa@test.com  | Please enter a valid Phone Number |