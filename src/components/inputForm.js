import React from "react";
import "../scss-files/App.scss";
import "../scss-files/radioButton.scss";

export default function InputForm(props) {
  const currentSet = props.allTasks[props.round - 1];
  let alert = "";
  if (props.errorMessage) {
    alert = "input-alert";
  }

  if (currentSet) {
    return (
      <form className="answers" onSubmit={props.handleSubmit}>
        {currentSet.option.map((elem, index) => (
          <label className="radio" key={index}>
            <input
              type="radio"
              name="quiz"
              value={index}
              // checked={this.props.selected}
              onChange={props.handleChange}
            />
            <span className={"checkmark " + alert} />
            <span className="single-answer">{elem}</span>
          </label>
        ))}
        <input className="button" type="submit" value="Submit" />
      </form>
    );
  } else {
    return <p className="loading-answers">Loading answers....</p>;
  }
}
