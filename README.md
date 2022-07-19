1. Filter Events by City

SCENARIO 1: WHEN USER HASN’T SEARCHED FOR A CITY, SHOW UPCOMING EVENTS FROM ALL CITIES.
- Given user hasn’t searched for any city
- When the user opens the app
- Then the user should see a list of all upcoming events

SCENARIO 2: USER SHOULD SEE A LIST OF SUGGESTIONS WHEN THEY SEARCH FOR A CITY.
- Given the main page is open
- When user starts typing in the city textbox
- Then the user should see a list of cities (suggestions) that match what they’ve typed

SCENARIO 3: USER CAN SELECT A CITY FROM THE SUGGESTED LIST.
- Given the user was typing “Berlin” in the city textbox
And the list of suggested cities is showing
- When the user selects a city (e.g., “Berlin, Germany”) from the list
- Then their city should be changed to that city (i.e., “Berlin, Germany”)
And the user should receive a list of upcoming events in that city

User Story:
As a user,
I should be able to see the events’ details in the city I clicked
So that I am given as much information as possible about that city and its events

2. Show/Hide an Event's Details

SCENARIO 1: An event element is collapsed by default
- Given the main page is open
- When the user wants to view the featured city
- Then the user can see the events from that city will be collapsed or hidden from the user

SCENARIO 2: User can expand an event to see its details
- Given the user clicked on the events button
- When the user selects an event
- Then the user will be able to user the details of the event they clicked on

SCENARIO 3:  User can collapse an event to hide its details
- Given the event details is open and being viewed
- When the user closes the event element
- Then the details are hidden or collapsed

User Story:
As a user,
I should be able to view and hide events of cities
So that navigating through different cities' events is made easily

3. Specify a Number of Events

SCENARIO 1: When user hasn’t specified a number, 32 is the default number
- Given the user searched for events for a city
- When the user hasn't specifically chosen the number of search results
- Then 32 will be the default amount of search results per city

SCENARIO 2:  User can change the number of events they want to see
- Given the user searched events per city
- When the user changes the default 32 number
- Then the default number of search results will be changed to what the user desires

User Story:
As a user,
I should be able to choose the number of search results I want
So that I know how many events are taking place comfortably according to my screen size


4. Use the App When Offline

SCENARIO 1:  Show cached data when there’s no internet connection
- Given the app or user has no internet connection
- When the data is cached
- Then the data will be shown to the user

SCENARIO 3: Show error when user changes the settings (city, time range)
- Given the user opens the settings
- When the user changes a city, time range setting
- Then the app will display an error

User Story:
As a user,
I should be able to use the Meet App offline
So that I can still use the app without an internet connection

5. Data Visualization

SCENARIO 1: Show a chart with the number of upcoming events in each city
- Given the user chose a city
- When the user clicks on the upcoming events button for that city
- Then a data chart will display the upcoming events taking place in that city

User Story:
As a user,
I should be able to see a list or chart of events that are taking place in a city of my choosing
So that I can sort through my options of events for that city.


