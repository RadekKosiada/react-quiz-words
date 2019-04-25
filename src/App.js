// Ctrl Shift F
import React, { Component } from "react";
import "./App.css";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: "",
      category: "",
      questionId: 0,
      question: "",
      questionValue: 0,
      value: "",
      score: 0,
      errorMessage: "",
      round: 1,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  handleSubmit(event) {
    console.log('A name was submitted: ' + this.state.value);
    event.preventDefault();
    if(!this.state.value) {
      this.setState({
        errorMessage: "Please make sure you typed your answer correctly"
      })
    } else if(this.state.value == this.state.answer){
      //counting points if correct answer
      if(this.state.score ==0) {
        this.setState({
          score: +1,
          round: 1+this.state.round,
      
        })
      } else {
        this.setState({
          score: 2*this.state.score,
          round: 1+this.state.round     
        })
      }
      this.state.value = "";
      //triggering a new question
      axios
      .get("http://jservice.io/api/random")
      .then(res => {
        console.log(res.data[0]);
        const data = res.data[0];
        this.setState({
          answer: data.answer,
          category: data.category.title,
          questionId: data.id,
          question: data.question,
          questionValue: data.value
        });
        console.log(this.state.answer)
      })
      .catch(err => {
        console.log(err);
      });
      
    } else {
      this.setState({
        score: 0,
        round: this.state.round
      })
    }
  }
  componentDidMount() {
    axios
      .get("http://jservice.io/api/random")
      .then(res => {
        console.log(res.data[0]);
        const data = res.data[0];
        this.setState({
          answer: data.answer,
          category: data.category.title,
          questionId: data.id,
          question: data.question,
          questionValue: data.value
        });
        console.log(this.state.answer)
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="App">
        <div className="quiz-container">
          <div className="grid-container">
          <p className="title">Round: </p>
            <p>{this.state.round}</p>
            <p className="title">Category: </p>
            <p>{this.state.category}</p>
            <p className="title">Question: </p>
            <p>{this.state.question}</p>

            <form className="grid-form" onSubmit={this.handleSubmit}>
              <label className="title">
                Your answer: 
                <p className="error-message">{this.state.errorMessage}</p>
                <input type="text" name="answer" value={this.state.value} onChange={this.handleChange}/>
                <p>{this.state.value}</p>
              </label>
              <input className="button" type="submit" value="Submit" />
            </form>
          </div>
          <div className="grid-container">
              <p className="title">Your score: </p>
              <p>{this.state.score}</p>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
