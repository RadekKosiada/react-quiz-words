import React from "react";
import "./gameOverPopup.css";
import RestartButton from "./restartButton";
import "./App.css";

export default function YouWonPopup(props) {
  return (
    <div>
      <div className="overlay" />
      <div className="game-over">
        <h4>Congrats, you Won!</h4>
        <p>Your score counts {props.scoreFromApp}</p>
        <RestartButton restartGamePopup={props.restartGameApp} />
      </div>
    </div>
  );
}
