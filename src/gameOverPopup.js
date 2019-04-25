import React, { Component } from "react";
import "./gameOverPopup.css";
import "./App.css";

export default class GameOverPopup extends Component {
  constructor(props) {
    super(props);
  }
  restart () {

  }
  render() {
    return (
      <div className="overlay">
        <div className="game-over">
          <h4>Game Over</h4>
          <p>Unfortunately your answer <span className="title">{this.props.valueFromApp}</span> is wrong!</p>
          <p>The correct answer is <span className="title">{this.props.correctAnswer}</span>
          </p>
          <button className="button" onClick={this.props.hideGameOverPopup}>Restart</button>
        </div>
    </div>
    )    
  }
} 