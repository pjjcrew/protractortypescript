Feature: Patients
    Scenario: Add patients
        Given Set to patients page
        When Add patient details with
            # | Name*   | Phone*     | Email                                  | Age |
            # | Deepthi | 9167897695 | praveen.jagathpally1@valuemomentum.com | 29  |
            | Name*   | Phone*    | 
            | Deepthi | 9167897696|
        Then Verify patient added successmessage

