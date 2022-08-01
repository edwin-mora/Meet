import React, { Component } from "react";

class Event extends Component {
  state = {
    collapsed: true,
  }

  handleButtonClick = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    const { event } = this.props;
    return (
      <div className="event">
        <h2 className="event-title">{event.summary}</h2>
        <h5 className="location">{event.location}</h5>

        {this.state.collapsed === false && (
          <div className="more-detials">
            <p className="start-date">
              <label>Date: </label>
              {event.start.dateTime}
            </p>
            <p className="event-description">
              <label>Event Details: </label>
              {event.description}
            </p>
            <button className="toggleEvent"
            onClick={this.handleButtonClick}>Hide Details</button>
            </div>
        )}
        {this.state.collapsed === true && (
          <button className="details-button"
          onClick={this.handleButtonClick}>Show Details
          </button>
        )}


      
      </div>
    );
  }
}
export default Event;
