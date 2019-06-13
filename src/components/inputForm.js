import React, { Component } from "react";
import "../App.scss";
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
        <div>
          <p className="title">Words:</p>
          {!currentSet && (<p>Loading....</p>)}
          {currentSet && (<p>{currentSet.quiz.map((elem, index) => (
          <span key={index}>{elem} </span>
          ))}</p>)}

          <p className="title">Your answer:</p>
          {!currentSet && (<p>Loading....</p>)}
          {currentSet && (
            <form className="">
              {currentSet.option.map((elem, index) => (
                <div className="radio" key={index}>
                  <label>
                    <input type="radio" value={elem} onChange={this.props.onChange} />
                    {elem}
                  </label>
                </div>
              ))}
            </form>
          )}
        </div>

      </div>
    );
  }
}
