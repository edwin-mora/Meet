Feature: Show/hide an events details

    Scenario: An event element is collapsed by default.
        Given the main page is open
        When the user wants to view the featured city
        Then the user can see the events from that city will be collapsed or hidden from the user

    Scenario: User can expand an event to see its details.
        Given the user clicked on the events button
        When the user selects an event
        Then the user will be able to see the details of the event they clicked on

    Scenario: User can collapse an event to hide its details.
        Given the event details is open and being viewed
        When the user closes the event element
        Then the details are hidden or collapsed