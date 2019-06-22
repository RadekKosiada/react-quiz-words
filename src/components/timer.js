import React from "react";
import "../scss-files/App.scss";

export default function Timer(props) {
  return (
    <div id="timer-container">
      <div id="timer">
        {/* if time has only one digit */}
        {props.timeApp < 10 && <p className="time">00:0{props.timeApp}</p>}
        {/* if time has two digits */}
        {props.timeApp >= 10 && <p className="time">00:{props.timeApp}</p>}
        <p className="time-label">seconds left</p>
      </div>
    </div>
  );
}
