import React, { Component } from "react";
import "./gameOverPopup.css";
import "./App.css";

export default class GameOverPopup extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="game-over">
      <p>Game Over</p>
      <button className="button">Restart</button>
    </div>
    )    
  }
} 

//  gameOverPopup;