import React, { Component } from "react";
import "../App.scss";
import axios from "axios";

export default class InputForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
    };
   
  }
  componentDidMount() {
    console.log(this.props.round, this.props.allTasksApp)
  }  
  render() {
    const currentSet = this.props.allTasksApp[this.props.round - 1];
    return (
      <div>
        {currentSet && (<p className="title">
          Words: 
          
          </p>)}
      Hello

        <p className="title">Words:</p>              
                {currentSet && (<div className="form-check">
                {currentSet.quiz.map((elem, index) => (               
                <label key={index}>
                  <input type="radio" value={elem} className="form-check-input" />
                  {elem}
                </label>
               ))}</div>)}
      </div>
    );
  }
}
