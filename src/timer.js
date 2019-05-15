import React, { Component } from "react";
import "./timer.css";
import "./App.css";

export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      end: 0,
    }
  }
  render() {
    return (
      <div id="timer-container">
        <div id="timer">
          {/* if time has only one digit */}
          {this.props.timeApp < 10 && (<p className="time">00:0{this.props.timeApp}</p>)}
          {/* if time has two digits */}
          {this.props.timeApp >= 10 && (<p className="time">00:{this.props.timeApp}</p>)}
          <p>seconds left</p>
          </div>
      </div>
    );
  }
}
