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
            <form className="" onSubmit={this.props.handleSubmit}>
              {currentSet.option.map((elem, index) => (
                <div className="radio" key={index}>
                  <label>
                    <input 
                      type="radio" 
                      name="quiz"
                      value={index} 
                      checked={this.state.selected} 
                      onChange={this.props.handleChange} />
                    {elem}
                  </label>
                </div>
              ))}
              <button type="submit">Submit</button>
            </form>
          )}
        </div>

      </div>
    );
  }
}
