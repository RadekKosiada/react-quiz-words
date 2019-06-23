import React from "react";
import "../scss-files/App.scss";

export default function Timer(props) {
  return (
    <div className="timer-container">
      {/* if time has only one digit */}
      {props.timeApp < 10 && <h2 className="time">00:0{props.timeApp}</h2>}
      {/* if time has two digits */}
      {props.timeApp >= 10 && <h2 className="time">00:{props.timeApp}</h2>}
    </div>
  );
}
