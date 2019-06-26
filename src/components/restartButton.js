import React from "react";
import "../scss-files/App.scss";

export default function RestartButton(props) {
  return (
    <div>
      <button className="button" onClick={props.restartGamePopup}>
        Restart
      </button>
    </div>
  );
}
