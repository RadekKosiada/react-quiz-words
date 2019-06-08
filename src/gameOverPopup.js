import React, { Component } from "react";
import "./gameOverPopup.css";
import RestartButton from "./restartButton";
import "./App.css";

export default class GameOverPopup extends Component {
  render() {
    return (
      <div>
        <div className="overlay" />
        <div className="game-over">
          <h4>Game Over</h4>
          {this.props.valueFromApp && (<p><span className="title">{this.props.valueFromApp}</span> is wrong!</p>)}
          {this.props.timeApp===0 && (<p><span className="title">{this.props.valueFromApp}</span>Too late!</p>)}
          <p>
            The correct answer is:
            <span className="title">{this.props.correctAnswer}</span>
          </p>
          <RestartButton restartGamePopup={this.props.restartGameApp} />
        </div>
      </div>
    );
  }
}
