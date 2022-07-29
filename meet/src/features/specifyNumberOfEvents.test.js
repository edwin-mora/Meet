/* 
FEATURE:
Specify a Number of Events

SCENARIO 1: When user hasn’t specified a number, 32 is the default number

Given the user searched for events for a city
When the user hasn't specifically chosen the number of search results
Then 32 will be the default amount of search results per city

SCENARIO 2: User can change the number of events they want to see

Given the user searched events per city
When the user changes the default 32 number
Then the default number of search results will be changed to what the user desires */

import { loadFeature, defineFeature } from "jest-cucumber";
import React from "react";
import { mount } from "enzyme";
import App from "../App";
import { mockData } from "../mock-data";
import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new Adapter() });

const feature = loadFeature("./src/features/specifyNumberOfEvents.feature");

defineFeature(feature, (test) => {
  let AppWrapper;

	//first scenario
  test("When user has not specified a number, 32 is the default number.", ({
    given,
    when,
    then,
  }) => {
    given("the user searched for events for a city", () => {});

    when("the user has not specifically chosen the number of search results", () => {
      AppWrapper = mount(<App />);
    });

    then("32 will be the default amount of search results per city", () => {
      AppWrapper.update();
      expect(AppWrapper.find(".event")).toHaveLength(mockData.length);
    });
  });

	//second scenario
  test("User can change the number of events they want to see.", ({
    given,
    when,
    then,
  }) => {
    given("the user searched events per city", async () => {
      AppWrapper = await mount(<App />);
    });

    when("the user changes the default 32 number", () => {
      AppWrapper.update();
      AppWrapper.find(".number-input").simulate("change", {
        target: { value: 2 },
      });
    });

    then("the default number of search results will be changed to what the user desires", () => {
      expect(AppWrapper.find(".event")).toHaveLength(2);
    });
  });
});
