import React from "react";
import RestartButton from "./restartButton";
import "../scss-files/App.scss";

export default function GameOverPopup(props) {
  return (
    <div>
      <div className="overlay">
        <div className="game-over">
          {props.timeApp === 0 && (
            <div>
              <h4>Too late!</h4>
              <p>
                The correct answer is:
                <br />
                <span className="title">{props.correctAnswer}</span>
              </p>
            </div>
          )}

          {props.timeApp > 0 && (
            <div>
              <h4>Wrong</h4>
              <p>
                The correct answer is:
                <br />
                <span className="title">{props.correctAnswer}</span>
              </p>
            </div>
          )}
          <RestartButton restartGamePopup={props.restartGameApp} />
        </div>
      </div>
    </div>
  );
}
