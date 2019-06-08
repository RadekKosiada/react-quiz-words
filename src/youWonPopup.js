import React, { Component } from "react";
import "./gameOverPopup.css";
import RestartButton from "./restartButton";
import "./App.css";

export default class YouWonPopup extends Component {
  render() {
    return (
      <div>
        <div className="overlay" />
        <div className="game-over">
          <h4>Congrats, you Won!</h4>
          <p>Your score counts {this.props.scoreFromApp}</p>
          <RestartButton restartGamePopup={this.props.restartGameApp} />
        </div>
      </div>
    );
  }
}
