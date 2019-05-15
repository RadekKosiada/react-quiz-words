// Ctrl Shift F
import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import GameOverPopup from "./gameOverPopup";
import YouWonPopup from "./youWonPopup";
import Timer from "./timer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      correctAnswer: "",
      category: "",
      questionId: 0,
      question: "",
      questionValue: 0,
      value: "",
      score: 0,
      currentRoundPoints: 1,
      errorMessage: "",
      round: 1,
      showGameOverPopup: false,
      showYouWonPopup: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.restartGame = this.restartGame.bind(this);
    this.getQuestion = this.getQuestion.bind(this);
    this.displayYouWonPopup = this.displayYouWonPopup.bind(this);
  }
  getQuestion() {
    axios
      .get("http://jservice.io/api/random")
      .then(res => {
        console.log(res.data[0]);
        const data = res.data[0];
        this.setState({
          correctAnswer: data.answer,
          category: data.category.title,
          questionId: data.id,
          question: data.question,
          questionValue: data.value
        });
        console.log(this.state.correctAnswer);
      })
      .catch(err => {
        console.log(err);
      });
  }
  restartGame() {
    console.log("fired");
    this.setState({
      showGameOverPopup: false,
      showYouWonPopup: false,
      round: 1,
      score: 0,
      value: ""
    });
    this.getQuestion();
  }
  displayYouWonPopup() {
    this.setState({
      showYouWonPopup: true
    });
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) {
    console.log("A name was submitted: " + this.state.value);
    event.preventDefault();
    //if no answer
    if (!this.state.value) {
      this.setState({
        errorMessage: "*This is a required field"
      });
      //if correct answer
    } else if (
      this.state.correctAnswer
        .toLowerCase()
        .includes(this.state.value.toLowerCase())
    ) {
      console.log("correct");
      this.setState({
        currentRoundPoints: 2 * this.state.currentRoundPoints,
        round: 1 + this.state.round,
        errorMessage: ""
      });
      if (this.state.score === 0) {
        this.setState({
          score: +1
        });
      } else {
        this.setState({
          score: 2 * this.state.score
        });
      }
      //triggering popup after 30 correct answers
      if (this.state.round === 30) {
        this.displayYouWonPopup();
      }
      this.state.value = "";
      //triggering a new question
      this.getQuestion();
      //  resetting all to 0 if wrong answer
    } else {
      this.setState({
        score: 0,
        round: this.state.round,
        showGameOverPopup: true,
        errorMessage: ""
      });
    }
  }
  componentDidMount() {
    this.getQuestion();
  }
  render() {
    return (
      <div className="App">
        <div className="main-container">
          <div class="quiz-container">
            <div className="questions-container">
              <p className="title">Round: </p>
              <p>{this.state.round}</p>

              <p className="title">Points for the current round: </p>
              <p>{this.state.currentRoundPoints}</p>

              <p className="title">Your score: </p>
              <p>{this.state.score}</p>

              <p className="title">Category: </p>
              <p>{this.state.category}</p>
              <p className="title">Question: </p>
              <p>{this.state.question}</p>
            </div>
            <p className="error-message">{this.state.errorMessage}</p>

            <form className="grid-form" onSubmit={this.handleSubmit}>
              {/* <label className="title">                */}
              Your answer:
              <input
                type="text"
                name="answer"
                value={this.state.value}
                onChange={this.handleChange}
              />
              {/* <p>{this.state.value}</p> */}
              {/* </label> */}
              <input className="button" type="submit" value="Submit" />
            </form>
          </div>
          <Timer />
        </div>
       

        {this.state.showGameOverPopup && (
          <GameOverPopup
            restartGameApp={this.restartGame}
            valueFromApp={this.state.value}
            correctAnswer={this.state.correctAnswer}
          />
        )}

        {this.state.showYouWonPopup && (
          <YouWonPopup
            restartGameApp={this.restartGame}
            scoreFromApp={this.state.score}
          />
        )}
      </div>
    );
  }
}

export default App;
