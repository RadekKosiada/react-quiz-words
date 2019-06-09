import React from "react";
import "./youWonPopup.css";
import RestartButton from "./restartButton";
import "../App.css";

export default function GameOverPopup(props) {
  return (
    <div>
      <div className="overlay" />
      <div className="game-over">
        <h4>Game Over</h4>
        {props.valueFromApp && (
          <p>
            <span className="title">{props.valueFromApp}</span> is wrong!
          </p>
        )}
        {props.timeApp === 0 && (
          <p>
            <span className="title">{props.valueFromApp}</span>Too late!
          </p>
        )}
        <p>
          The correct answer is:
          <span className="title">{props.correctAnswer}</span>
        </p>
        <RestartButton restartGamePopup={props.restartGameApp} />
      </div>
    </div>
  );
}
