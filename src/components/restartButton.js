import React from "react";
import "../App.css";

export default function RestartButton(props) {
  return (
    <div>
      <button className="button" onClick={props.restartGamePopup}>
        Restart
      </button>
    </div>
  );
}
