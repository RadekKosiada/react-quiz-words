import React, { Component } from "react";
import "./App.css";

export default class RestartButton extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <button className="button" onClick={this.props.hideGameOverPopup}>Restart</button>
      </div>
    )    
  }
}