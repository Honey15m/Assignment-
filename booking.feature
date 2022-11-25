Feature: This feature file is to run make a flight only booking
        
        Scenario: To navigate to travelers page
      #   Background:
            Given I navigate to www application
             When I am on landing page I select "oneway"
              And I am on landing page I select "BLI" for the departure airport
              And I am on landing page I select "LAS" for the destination airport
              And I am on landing page I choose the departure date "1" days from current day
              And I am on landing page I select "1" adult travelers
              
            
              # And I am on landing page I select Child as "1"
              # And I am on landing page I select InfantInSeat as "1"
              # And I am on landing page I select InfantInLap as "1"
              And I am on landing page I click on search button
              And I am on flights page I click continue button
              And I am on Bundles page I click "Total Bundle"
              And I am on Bundles Page I click continue button
            #   And I am on Bundles Page I click continue button
              And I am on Travelers page I type first name as "Honey"
              And I am on Travelers page I type last name as "Mariam"
              And I am on Travelers page I Select gender as "female" for travelers
              And I am on Travelers page I enter DOB "25-10-2000" for Travelers
              And I am on travelers page I click on continue button
              And I am on Seat page I select seats
              And I am on seat Page I click continue button
              And I am bags page I click continue
              And I am on hotels page I select a hotel room
              And I am on hotels page click continue
#  And I am on hotels page I select a room
            #   Then I am on hotels page Added to cart message is shown
              And I am on Hotel Results page I click on continue
              And I am on cars page I add a car to cart
              And I am on cars page and I click on continue
             
        
     #    Scenario:On payments page to make payment for the booking
            #  When I am on Payments page close the popup
            #   And I am on Payments I enter the card number "5454545454545454"
        #       And I am on Payments I enter expiry date
        #     
        
        
            #   And I am on Payments I enter cvv "123"
        #       And I am on Payments page and enter Billing address street address as "Abc street"
        #       And I am on payments page and enter city name "florida"
        #       And I am on payments page I select state "California"
        #       And I am on payments page enter zip code as "92011"
        #       And I am on payments page and enter mobile number "702-555-1111" and email address "accept@fraudtest.com"
        #       And I am on payments page accept terms and condition
        #       And I am on payments page I click Purchasemytrip button
        
      #   @Myo
      #   Scenario: Test
      #       #  When I am on Seat page I select seats of type "any" on "departing" segment
      #       #  Then I am on seat Page I click continue button
              #  And I am on Bags page I click continue button without selecting bags
      #         And I am on Hotel Results page and I click No thanks link
      #        Then I am on cars page and I click on continue
      #   @run
        # Scenario:Booking including bundles

        #      When I am on Bundles page I click "Total Bundle"
        #       And I am on Bundles Page I click continue button
        #     #   And I am on Bundles Page I click continue button
        #       And I am on Travelers page I type first name as "Honey"
        #       And I am on Travelers page I type last name as "Mariam"
        #       And I am on Travelers page I Select gender as "female" for travelers
        #       And I am on Travelers page I enter DOB "25-10-2000" for Travelers
        #       And I am on travelers page I click on continue button
        #       And I am on Seat page I select seats
        #       And I am on seat Page I click continue button
        #       And I am bags page I click continue
        #       And I am on hotels page I select a hotel room