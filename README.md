Description
The goal of this project is to build a serverless, progressive web application (PWA) with React using a test-driven development (TDD) technique. The application uses the Google Calendar API to fetch upcoming events.

What technology did I use and why?
For the frontend of my femmovies application I chose React. The main reasons are

type of application: I need a library helping me build the UI of my app. React is suited best for the view side of the mvc approach and its virtual DOM ensures faster rendering of views

scope: The component-based nature of React allows me to increase the scope of my web application with little to no performance issues or concerns about entropy.

good documentation: for a beginner like me, it is important that the tools I use are well documented, so that I can understand the different components I work with. Another factor in my decision was, that it is kept up to date. In case of a library developed and maintained by Facebook, that is not a problem.

popularity: React is in high demand at the moment. This can be seen in job ad, the stars on GitHub (187k) as well as the contributions to stack overflow. This support in the developer community ensures that Il will eventually find solutions when troubleshooting.

mobile version: with its associated ecosystem of tools, React is also a good springboard for my next project, where I want to use React Native for a mobile application. So getting familiar with React first is valuable.

I created the application using the Create React App boilerplate, enabling the pwa template to transfer the app into a PWA in the development process:

npx create-react-app meet --template cra-template-pwa --use-npm
Key features
Filter events by city.
Show/hide event details.
Specify number of events.
Use the app when offline.
Add an app shortcut to the home screen.
View a chart showing the number of upcoming events by city.
User stories and tesing scenarios
As a user, I would like to be able to show/hide event details so that I can see more/less information about an event.
Scenario 1: An event element is collapsed by default Given the main page is open When a user search for a city and the events are loaded Then the event element details will be hidden
Scenario 2: User can expand an event to see its details Given the list of events has been loaded When user clicks on “Show details” button for an event Then the event element will be expanded to show the event details
Scenario 3: User can collapse an event to hide its details Given the “Show details” button for an event has been clicked and the details are expanded When user clicks on “Hide details” button on that event Then the event element will collapse again, hiding the details
As a user, I would like to be able to specify the number of events I want to view in the app so that I can see more or fewer events in the events list at once.
Scenario 1: When user hasn’t specified a number, 32 is the default number Given a user has chosen the city they want to see events for When the user doesn’t specify a number of events they want to view Then the default number will be set to 32
Scenario 2: User can change the number of events they want to see Given a user has chosen the city they want to see events for When they type a number into the box “Number of Events” Then the according number of events will load for the respective city
As a user, I would like to be able to use the app when offline so that I can see the events I viewed the last time I was online.
Scenario 1: Show cached data when there’s no internet connection Given a user has used the app before When they access the website offline Then the events they viewed previously will be shown
Scenario 2: Show error when user changes the settings (city, time range) Given a user accesses the website offline When they change the setting such as city or time range Then an error will be shown
As a user, I would like to be able to see a chart showing the upcoming events in each city so that I know what events are organized in which city.
Scenario 1: Show a chart with the number of upcoming events in each city Given a user has chosen a city When the list of events is shown Then on top of the list a chart that visualizes the type of upcoming events will be shown
What challenges did I face, what did I learn?
The recommended testing utility for React, Enzyme, doesn't support React versions from 17 upward. There exists an unofficial adapter for version 17, however, there is no adapter for React v.18. Therefore, I had to downgrade my React version to v.17 to still be able to work with Enzyme.

You can use end-to-end tesing to create videos for tutorials or customer presentations

When using the creat react app biolerplate, the components are created as .js files (instead of .jsx)

How to install and run the project ...
... as a developer, who wants to work with the project
Clone or download repository ...
git clone https://github.com/edwin-mora/Meet.git
Connect to your github pages Follow the instructions provided by github: https://pages.github.com

Edit homepage address in package.json to fit to your github account

To run app on localhost:

npm run start
To push changes to github pages
npm run deploy
... to access the already hostet the live app:
https://f3nj0.github.io/meet-app/

Technical Requirements (according to project brief)
React application
Built using TDD technique
Use the Google Calendar API and OAuth2 authentication flow.
Use use serverless functions (AWS lambda is preferred) for the authorization server instead of using a traditional server
Work offline or in slow network conditions with the help of a service worker.
Use React axios and async/await.
Implement an alert system using an OOP approach to show information to the user.
Make use of data visualization using the recharts library.
Be monitored using an online monitoring tool.
Development Process for the meet-app
Create test scenarios for each user story
See above

Create serverless functions to adhere to Google OAuth2 authentication flow
Create a Oauth Consumer
Create new project in Google's API console
Enable Google Calendar API
Create credentials
Add scopes
Add origin and URI to app's domain
Add test users
Download credentials (client_secret_.json file)
Verify app's domain
Download the HTML verification file from Google developer console and add to /public folder in app

Create a serverless service
Install serverless toolkit:
npm install -g serverless
Set up server directory:
# Create a new serverless service/project using aws-nodejs
serverless create --template aws-nodejs --path auth-server
# Jump into the newly created directory
cd auth-server
# Then create a package.json
npm init
# You can simply press the Enter key through all the options here.
Add config.json to .gitignore file
Configure AWS credentials
Go to AWS console
Navigate to 'My security credentials'
Create new access key & download file
Configure credentials for serverless:
serverless config credentials --provider aws --key ACCESS_KEY_ID --secret SECRET_ACCESS_KEY
Add secrets to config.json file
Within server directory, create config.json file
Add credentials stored in client_secret_.json file to config.file
Add Calendar ID of calendar that will be used in application to config.file
Set up serverless file
Install Google APIs package
npm install googleapis@^59.0.0 --save
Set up handler.js file with serverless functions
Deploy serverless
serverless deploy
Obtain serverless API endpoints
serverless info
Unit testing
Integration testing
User Acceptance & End-to-end tesing
Transform applications into PWA
In src/index.js file, register service worker by changing from serviceWorkerRegistration.unregister() to serviceWorkerRegistration.register()
Add app infos to manifest.json
Add data visualization using Recharts



#################
User Stories:



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


