import React, { Component } from "react";
import "../scss-files/App.scss";
import "../scss-files/radioButton.scss";
import axios from "axios";

export default class InputForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    console.log(this.props.round, this.props.allTasks);
  }
  render() {
    const currentSet = this.props.allTasks[this.props.round - 1];
    return (
      <div>
        <div className="questions-container">
          <p className="title">Words:</p>
          {!currentSet && <p>Loading....</p>}
          {currentSet && (
            <p>
              {currentSet.quiz.map((elem, index) => (
                <span className="single-word" key={index}>{elem} </span>
              ))}
            </p>
          )}

          <p className="title">Your answer:</p>
          {!currentSet && <p>Loading....</p>}
          {currentSet && (
            <form className="grid-form" onSubmit={this.props.handleSubmit}>
              {currentSet.option.map((elem, index) => (
                <div className="radio" key={index}>
                  <label>
                    <input
                      type="radio"
                      name="quiz"
                      value={index}
                      checked={this.state.selected}
                      onChange={this.props.handleChange}
                    />
                    <span className="checkmark" />
                    {elem}
                  </label>
                </div>
              ))}
              <input className="button" type="submit" value="Submit" />
            </form>
          )}
        </div>
      </div>
    );
  }
}
