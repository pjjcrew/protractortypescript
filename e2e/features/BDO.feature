Feature: BDO

    @SmokeTest  @Alltenants
    Scenario: C197,C387 - Create BDO from OHD not associated with a File (1 Pax, 1 Bag)
         And wait for overlay
        Given Set to dashboard
    #     When Navigate to Create OHD screen
    #     And Skip prepopulation window
    #     And  Navigate to the 'baggage-details-tab' link
    #     And Fill 'Baggage Details'
    #         | tenant | bagarrivedate | claimnum | color | type | manufacturer_ID |
    #         | AA     | $date$        | $        |       |      |                 |
    #         | WN     | $date$        | $        |       |      |                 |
    #         | B6     | $date$        | $        |       |      |                 |
    #         | F9     | $date$        | $        |       |      |                 |
    #         | NK     | $date$        | $        |       |      |                 |
    #         | AS     | $date$        | $        |       |      |                 |
    #     And  Navigate to the 'baggage-itinerary-tab' link
    #     And Fill 'Baggage Itinerary'
    #         | tenant | legfrom | legto | flightnum | departdate | arrivedate |
    #         | AA     | DAL     | ATL   | 123       | $date$     | $date$     |
    #         | WN     | DAL     | ATL   | 123       | $date$     | $date$     |
    #         | B6     | DAL     | ATL   | 123       | $date$     | $date$     |
    #         | F9     | DAL     | ATL   | 123       | $date$     | $date$     |
    #         | NK     | DAL     | ATL   | 123       | $date$     | $date$     |
    #         | AS     | DAL     | ATL   | 123       | $date$     | $date$     |
    #     And Fill contentcategorydetails Details
    #         | tenant | contentcategoryno | content-description | contentCategory |
    #         | AA     | 0                 | content             |                 |
    #         | WN     | 0                 | content             |                 |
    #         | B6     | 0                 | content             |                 |
    #         | F9     | 0                 | content             |                 |
    #         | NK     | 0                 | content             |                 |
    #         | AS     | 0                 | content             |                 |
    #     Then Click on the save button
    #     And wait for overlay
    #     And  Close the OHD saved success-popup
    #     # And  Navigate to the 'overview-tab' link
    #     And get OHD File 'Overview' details
    #         | tenant | On-Hand ID |
    #     Then Check 'On-Hand Status' is displaying as 'Open'
    #     When Click on 'Create New BDO' button
    #     And Click confirm the delivery address pop up
    #     # And Close the saved success-popup
    #     And wait for overlay
    #     And  Navigate to the 'General Details' link
    #     And Fill 'General Details'
    #         | tenant | selectedDeliveryCompany | selectedDeliverServiceLevel | deliveryDate | pickupDateString | pickupTimeString | selectedCurrency | bdoCost | deliveryRemark |
    #         | AA     |                         |                             | $date$       | $date$           | NA               |                  | NA      | test remarks   |
    #         | WN     |                         |                             | $date$       | $date$           | 10:10            |                  | 10      | test remarks   |
    #         | B6     |                         |                             | $date$       | $date$           | 10:10            |                  | 10      | test remarks   |
    #         | F9     |                         |                             | $date$       | $date$           | 10:10            |                  | 10      | test remarks   |
    #         | NK     |                         |                             | $date$       | $date$           | 10:10            |                  | 10      | test remarks   |
    #         | AS     |                         |                             | $date$       | $date$           | 10:10            |                  | 10      | test remarks   |
    #     And Navigate to the 'Passenger Details' link
    #     And Fill 'Passenger Details'
    #         | tenant | lastName | firstName | address1     | city     | selectedStateId | zip   | selectedCountryCodeId |
    #         | AA     | Will     | David     | 120 Broadway | New York |                 | 10032 |                       |
    #         | WN     | Will     | David     | 120 Broadway | New York |                 | 10032 |                       |
    #         | B6     | Will     | David     | 120 Broadway | New York |                 | 10032 |                       |
    #         | F9     | Will     | David     | 120 Broadway | New York |                 | 10032 |                       |
    #         | NK     | Will     | David     | 120 Broadway | New York |                 | 10032 |                       |
    #         | AS     | Will     | David     | 120 Broadway | New York |                 | 10032 |                       |
    #     Then Click on the save button
    #     And wait for overlay
    #     Then Filecreated success message popup is displayed
    #     And Close the saved success-popup
    #     Then verify 'Cancel BDO' button is displayed
    #     And  Navigate to the 'Overview' link
    #     Then Check 'Delivery Status' is displaying as 'Submitted for Delivery'
    #     And wait for overlay
    #     And Click horizantal 'On-Hands' record
    #     And wait for overlay
    #     Then verify OHD File details
    #         | tenant | On-Hand ID |
    #         | AA     |            |
    #         | WN     |            |
    #         | B6     |            |
    #         | F9     |            |
    #         | NK     |            |
    #         | AS     |            |
    #     Then verify 'View BDO' button is displayed
    #     Then verify 'Create Message' button is displayed
    #     Then Check 'On-Hand Status' is displaying as 'Closed'
    #     And Click horizantal 'Messages' record
    # @SmokeTest  @Alltenants
    # Scenario:C389 - Update BDO and Edit BDO that is not associated with a File (1 Pax, 1 Bag)
    #     When Click horizantal 'BDOs' record
    #     Then check whether 'On-Hands' is enabled
    #     When Navigate to the 'General Details' link
    #     And Fill 'General Details'
    #         | tenant | deliveryDate | pickupDateString | deliveryRemark |
    #         | AA     | $date$       | $date$           | test remarks   |
    #         | WN     | $date$       | $date$           | test remarks   |
    #         | B6     | $date$       | $date$           | test remarks   |
    #         | F9     | $date$       | $date$           | test remarks   |
    #         | NK     | $date$       | $date$           | test remarks   |
    #         | AS     | $date$       | $date$           | test remarks   |
    #     Then Click on the save button
    #     And Navigate to the 'Passenger Details' link
    #     And Fill 'Passenger Details'
    #         | tenant | lastName   | firstName   | address1         | city      | zip   | selectedCountryCodeId |
    #         | AA     | Willupdate | Davidupdate | 45 Clarke Street | Southbank | 3006  | AU                    |
    #         | WN     | Willupdate | Davidupdate | 45 Clarke Street | Southbank | 3006  | AU                    |
    #         | B6     | Willupdate | Davidupdate | 45 Clarke Street | Southbank | 3006  | AU                    |
    #         | F9     | Willupdate | Davidupdate | 120 Broadway     | New York  | 10032 | US                    |
    #         | NK     | Willupdate | Davidupdate | 120 Broadway     | New York  | 10032 | US                    |
    #         | AS     | Willupdate | Davidupdate | 120 Broadway     | New York  | 10032 | US                    |
    #     Then Click on the save button
    #     And Close the saved success-popup
    #     And get BDO File 'Overview' details
    #         | tenant | BDO ID | BDO Cost | Station | Airline | Agent | Last Name | First Name | MI | Bag Tag Number |
    # @SmokeTest  @Alltenants
    # Scenario:C730 - Search BDO and Cancel BDO
    #     Given Set to dashboard
    #     When Navigate to the Global-search
    #     And Apply search filters
    #         | tenant | Type |
    #         | AA     | BDO  |
    #         | WN     | BDO  |
    #         | B6     | BDO  |
    #         | F9     | BDO  |
    #         | NK     | BDO  |
    #         | AS     | BDO  |
    #     And Search with BDO File
    #         | tenant | BDO ID | Last Name | First Name |
    #         | AA     |        |           |            |
    #         | WN     |        |           |            |
    #         | B6     |        |           |            |
    #         | F9     |        |           |            |
    #         | NK     |        |           |            |
    #         | AS     |        |           |            |
    #     And Click on 'Search' button
    #     And wait for overlay
    #     Then verify BDO File details
    #         | tenant | BDO ID | BDO Cost | Station | Airline | Agent | Bag Tag Number |
    #         | AA     |        |          |         |         |       |                |
    #         | WN     |        |          |         |         |       |                |
    #         | B6     |        |          |         |         |       |                |
    #         | F9     |        |          |         |         |       |                |
    #         | NK     |        |          |         |         |       |                |
    #         | AS     |        |          |         |         |       |                |
    #     And Click on 'Cancel BDO' button
    #     And Click on 'OK' button
    #     And wait for overlay
    #     And Click horizantal 'On-Hands' record
    #     Then Check 'On-Hand Status' is displaying as 'Open'
    #     Then verify 'Create New BDO' button is displayed
    #     And Click on 'Create New BDO' button
    #     And Click confirm the delivery address pop up
    #     # And Close the saved success-popup
    #     And wait for overlay
    #     And  Navigate to the 'General Details' link
    #     And Fill 'General Details'
    #         | tenant | selectedDeliveryCompany | selectedDeliverServiceLevel | deliveryDate | pickupDateString | pickupTimeString | selectedCurrency | bdoCost | deliveryRemark |
    #         | AA     |                         |                             | $date$       | $date$           | NA               |                  | NA      | test remarks   |
    #         | WN     |                         |                             | $date$       | $date$           | 10:10            |                  | 10      | test remarks   |
    #         | B6     |                         |                             | $date$       | $date$           | 10:10            |                  | 10      | test remarks   |
    #         | F9     |                         |                             | $date$       | $date$           | 10:10            |                  | 10      | test remarks   |
    #         | NK     |                         |                             | $date$       | $date$           | 10:10            |                  | 10      | test remarks   |
    #         | AS     |                         |                             | $date$       | $date$           | 10:10            |                  | 10      | test remarks   |
    #     And Navigate to the 'Passenger Details' link
    #     And Fill 'Passenger Details'
    #         | tenant | lastName | firstName | address1     | city     | selectedStateId | zip   | selectedCountryCodeId |
    #         | AA     | Williams | David     | 120 Broadway | New York |                 | 10032 |                       |
    #         | WN     | Williams | David     | 120 Broadway | New York |                 | 10032 |                       |
    #         | B6     | Williams | David     | 120 Broadway | New York |                 | 10032 |                       |
    #         | F9     | Williams | David     | 120 Broadway | New York |                 | 10032 |                       |
    #         | NK     | Williams | David     | 120 Broadway | New York |                 | 10032 |                       |
    #         | AS     | Williams | David     | 120 Broadway | New York |                 | 10032 |                       |
    #     Then Click on the save button
    #     And wait for overlay
    #     Then Filecreated success message popup is displayed
    #     And Close the saved success-popup
    #     And get secondBDOFile 'Overview' details
    #         | tenant | BDO ID | BDO Cost | Station | Airline | Agent | Last Name | First Name | MI | Bag Tag Number |
    #     And Click horizantal 'On-Hands' record
    #     And wait for overlay
    #     And Click horizantal 'BDOs' record
    #     And wait for overlay
    #     And Verify whether 'BDO ID' of 'BDO File' is displayed
    #     And Verify whether 'BDO ID' of 'secondBDOFile' is displayed

