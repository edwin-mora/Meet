// new Alert component
import React, { Component } from 'react';

class Alert extends Component {
	constructor(props) {
		super(props);
		this.color = null;
	}

	getStyle = () => {
		return {
			color: this.color,
		};
	}

	render() {
		return (
			<div className="Alert">
				<p style={this.getStyle()} >{this.props.text}</p>
			</div>
		);
	}
}

//subclass for InfoAlert

class InfoAlert extends Alert {
	constructor(props) {
		super(props);
		this.color = 'blue';
		this.marginBottom = "12px";
	}
}

class ErrorAlert extends Alert {
    constructor(props) {
      super(props);
      this.color = 'red';
	  
    }
  }

  class OfflineAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = 'red';
  }
}

export { InfoAlert, ErrorAlert, OfflineAlert };