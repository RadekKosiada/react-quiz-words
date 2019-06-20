import React from "react";
import RestartButton from "./restartButton";
import "../scss-files/App.scss";

export default function GameOverPopup(props) {
  return (
    <div>
      <div className="overlay" />
      <div className="game-over">
        <h4>Wrong</h4>
        {props.timeApp === 0 && (
          <p>Too late!</p>
        )}
        <p>
          The correct answer is:<br />
          <span className="title">{props.correctAnswer}</span>
        </p>
        <RestartButton restartGamePopup={props.restartGameApp} />
      </div>
    </div>
  );
}
