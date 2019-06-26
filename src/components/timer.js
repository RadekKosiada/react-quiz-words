import React from "react";
import "../scss-files/App.scss";

export default function Timer(props) {
  const currentSet = props.allTasks[props.round - 1];
  if (currentSet) {
    return (
      <div className="timer-container">
        {/* if time has only one digit */}
        {props.timeApp < 10 && <h2 className="time">00:0{props.timeApp}</h2>}
        {/* if time has two digits */}
        {props.timeApp >= 10 && <h2 className="time">00:{props.timeApp}</h2>}
      </div>
    );
  } else {
    return (
      <div className="timer-container">
        <h2 className="starting">Starting...</h2>
      </div>
    );
  }
}
