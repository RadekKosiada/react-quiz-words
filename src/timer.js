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
          <p className="time">00:{this.props.timeApp}</p>
          <p>seconds left</p>
          </div>
      </div>
    );
  }
}
