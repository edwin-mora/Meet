import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { extractLocations, getEvents } from './api';
import './nprogress.css/nprogress.css';

class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 32
  }

  render() {
    return (
      <div className="App">
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <EventList events={this.state.events} />
        <NumberOfEvents updateEvents={this.updateEvents}  />

      </div>
    );
  }
  //update events method
  updateEvents = (location, maxEvents) => {
    if (maxEvents === undefined){
      maxEvents = this.state.numberOfEvents;
    } else {
      this.setState({ numberOfEvents: maxEvents })
    }
    if (location === undefined) {
      location = this.state.locationEvents
    }
    getEvents().then((events) => {
      const locationEvents = (location === 'all') ?
        events :
        events.filter((event) => event.location === location);
      this.setState({
        events: locationEvents
      });
    });
  }

  // loading events when the app loads
  componentDidMount() {
    getEvents().then((events) => {
      this.setState({ events, locations: extractLocations(events) });
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }


}

export default App;