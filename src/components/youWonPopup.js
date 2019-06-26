import React from "react";
import RestartButton from "./restartButton";
import "../scss-files/App.scss";

export default function YouWonPopup(props) {
  return (
    <div>
      <div className="overlay" />
      <div className="game-over">
        <h4>Congrats, you won!</h4>
        <p>Your score counts {props.scoreFromApp}</p>
        <RestartButton restartGamePopup={props.restartGameApp} />
      </div>
    </div>
  );
}
