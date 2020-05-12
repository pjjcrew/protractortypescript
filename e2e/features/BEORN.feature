Feature: BEORN

    @SmokeTest @Alltenants
    Scenario: Create Beorn
        When Navigate to Create BEORN screen
        And Navigate to the 'routing-notice-tab' link
        And Fill 'Routing Notice'
            | tenant | bagTagNumber | expediteNumber | destinationStation | faultStation |
            | AA     | $            | $              |                    |              |
            | WN     | $            | $              |                    |              |
            | B6     | $            | $              |                    |              |
            | F9     | $            | $              |                    |              |
            | NK     | $            | $              |                    |              |
            | AS     | $            | $              |                    |              |
        And Navigate to the 'forward-itinerary-tab' link
        And Fill 'Forward Itinerary'
            | tenant | legfrom | legto | airline | flightnum | departDate | arriveDate |
            | AA     | DAL     | ATL   |         | 456       |$date$ |$date$ |
            | WN     | DAL     | ATL   |         | 456       |$date$ |$date$ |
            | B6     | DAL     | ATL   |         | 456       |$date$ |$date$ |
            | F9     | DAL     | ATL   |         | 456       |$date$ |$date$ |
            | NK     | DAL     | ATL   |         | 456       |$date$ |$date$ |
            | AS     | DAL     | ATL   |         | 456       |$date$ |$date$ |
        Then Click on 'Forward' button
        And Close the saved success-popup
        And Click on 'Yes' button