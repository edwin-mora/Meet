import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import CitySearch from '../CitySearch';
import EventList from '../EventList';
import NumberOfEvents from '../NumberOfEvents';


Enzyme.configure({ adapter: new Adapter() });

describe('<App /> component', () => {
	let AppWrapper;
	beforeAll(() => {
		AppWrapper = shallow(<App />);
	});

  //test for Event List
  test('render list of events', () => {
    expect(AppWrapper.find(EventList)).toHaveLength(1);
  });

	//test for city search
	test('render CitySearch', () => {
		expect(AppWrapper.find(CitySearch)).toHaveLength(1);
	});
	//test for number of events
	 test('render NumberOfEvents', () => {
        expect(AppWrapper.find(NumberOfEvents)).toHaveLength(1);
    });
});