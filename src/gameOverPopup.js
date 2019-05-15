import React, { Component } from "react";
import "./gameOverPopup.css";
import RestartButton from "./restartButton";
import "./App.css";

export default class GameOverPopup extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className="overlay" />
        <div className="game-over">
          <h4>Game Over</h4>
          <p>
            <span className="title">{this.props.valueFromApp}</span> is a wrong
            answer!
          </p>
          <p>
            The correct one is:{" "}
            <span className="title">{this.props.correctAnswer}</span>
          </p>
          <RestartButton restartGamePopup={this.props.restartGameApp} />
        </div>
      </div>
    );
  }
}
