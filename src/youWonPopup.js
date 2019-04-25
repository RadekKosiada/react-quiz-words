import React, { Component } from "react";
import "./gameOverPopup.css";
import RestartButton from "./restartButton";
import "./App.css";

export default class YouWonPopup extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="overlay">
        <div className="game-over">
          <h4>Congrats, you Won!</h4>
          <p>Your score counts {this.props.scoreFromApp}</p>
          <RestartButton restartGamePopup = {this.props.restartGameApp}/>
        </div>
    </div>
    )    
  }
} 

// hide/show
// Restart button logiC??