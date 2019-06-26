import React from "react";
import "../scss-files/App.scss";
import "../scss-files/radioButton.scss";

export default function Words(props) {
  const currentSet = props.allTasks[props.round - 1];

  if (currentSet) {
    return (
      <div className="words">
        {currentSet.quiz.map((elem, index) => (
          <p key={index}>{elem}</p>
        ))}
      </div>
    );
  } else {
    return <p className="loading-words">Loading words....</p>;
  }
}
