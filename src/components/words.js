import React, { Component } from "react";
import "../scss-files/App.scss";
import "../scss-files/radioButton.scss";

export default class Words extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    console.log(this.props.round, this.props.allTasks);
  }
  render() {
    const currentSet = this.props.allTasks[this.props.round - 1];

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
}
