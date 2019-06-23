import React, { Component } from "react";
import "../scss-files/App.scss";
import "../scss-files/radioButton.scss";

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
    
    if(currentSet) {
      return (
    //   <div className="words">
    //   {currentSet.quiz.map((elem, index) => (
    //     <p key={index}>
    //       {elem}
    //     </p>
    //   ))}
    // </div>
    // <div className="answer">
        
      
          <form onSubmit={this.props.handleSubmit}>
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
        )
      
      
      
    } else {

      return (
      <p className="loading">Loading....</p>
      )
    }
    
      // <div className="words-container">
      //   {/* fourth row */}
      //     {!currentSet && (
      //       <p className="loading">Loading....</p>)
      //    }

      //     {currentSet && (
            
      //     )}
       
      //   {/* fifth row */}
      
      // </div>
    
  }
}
