Feature: Specify number of events

    Scenario: When user has not specified a number, 32 is the default number.
        Given the user searched for events for a city
        When the user has not specifically chosen the number of search results
        Then 32 will be the default amount of search results per city

    Scenario: User can change the number of events they want to see.
        Given the user searched events per city
        When the user changes the default 32 number
        Then the default number of search results will be changed to what the user desires