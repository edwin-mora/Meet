/** 
FEATURE:
Show/Hide an Event's Details
SCENARIO 1: An event element is collapsed by default

Given the main page is open
When the user wants to view the featured city
Then the user can see the events from that city will be collapsed or hidden from the user

SCENARIO 2: User can expand an event to see its details

Given the user clicked on the events button
When the user selects an event
Then the user will be able to user the details of the event they clicked on

SCENARIO 3: User can collapse an event to hide its details

Given the event details is open and being viewed
When the user closes the event element
Then the details are hidden or collapsed */




import { loadFeature, defineFeature } from "jest-cucumber";
import React from "react";
import { mount } from "enzyme";
import App from "../App";
import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new Adapter() });

const feature = loadFeature("./src/features/showHideAnEventsDetails.feature");

defineFeature(feature, (test) => {
  //first scenario
  let AppWrapper;
  test("An event element is collapsed by default.", ({ given, when, then }) => {
    given("the main page is open", () => {});

    when("the user wants to view the featured city", () => {
      AppWrapper = mount(<App />);
    });

    then("the user can see the events from that city will be collapsed or hidden from the user", () => {
      AppWrapper.update();
      expect(AppWrapper.find(".event.details")).toHaveLength(0);
    });
  });
  //second scenario
  test("User can expand an event to see its details.", ({
    given,
    when,
    then,
  }) => {
    given("the user clicked on the events button", () => {
      AppWrapper = mount(<App />);
    });

    when("the user selects an event", () => {
      AppWrapper.update();
      AppWrapper.find(".event .details-button").at(0).simulate("click");
    });

    then("the user will be able to see the details of the event they clicked on", () => {
      expect(AppWrapper.find(".event .event-details")).toHaveLength(1);
    });
  });
  //third scenario
  test("User can collapse an event to hide its details.", ({
    given,
    when,
    then,
  }) => {
    given("the event details is open and being viewed", async () => {
      AppWrapper = await mount(<App />);
      AppWrapper.update();
      AppWrapper.find(".event .details-button").at(0).simulate("click");
    });

    when("the user closes the event element", () => {
      AppWrapper.update();
      AppWrapper.find(".event .details-button").at(0).simulate("click");
    });

    then("the details are hidden or collapsed", () => {
      expect(AppWrapper.find(".event .event-details")).toHaveLength(0);
    });
  });
});
