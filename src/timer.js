import React, { Component } from "react";
import "./timer.css";
import "./App.css";

export default class Timer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="timer">
        <p>Clock</p>
      </div>
    );
  }
}
