// Ctrl Shift F
import React, { Component } from "react";
import axios from "axios";
import "./App.scss";
import GameOverPopup from "./components/gameOverPopup";
import YouWonPopup from "./components/youWonPopup";
import InputForm from "./components/inputForm";
import Timer from "./components/timer";
import secrets from "./secrets.json";
import { connect } from 'react-redux';
import {increment} from './actions';

const timeToAnswer = 15;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // OLD
      allQuestions: [],
      correctAnswer: "",
      category: "",
      questionId: 0,
      question: "",
      questionValue: 0,
      selected: "",
      score: 0,
      currentRoundPoints: 1,
      errorMessage: "",
      round: 1,
      showGameOverPopup: false,
      showYouWonPopup: false,
      time: timeToAnswer,
      winCondition: 10,
      answeredQuestions: 0,
      level: 5,
      //NEW
      allTasks: [],
      data: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.restartGame = this.restartGame.bind(this);
    this.displayYouWonPopup = this.displayYouWonPopup.bind(this);
    this.countTime = this.countTime.bind(this);
  }
  componentDidMount() {
    this.countTime();
    this.getWordQuiz();
  }
  async getWordQuiz() {
    try {
      const response = await fetch(
        "https://twinword-word-association-quiz.p.rapidapi.com/type1/?area=sat&level="+this.state.level,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "X-RapidAPI-Host": secrets["X-RapidAPI-Host"],
            "X-RapidAPI-Key": secrets["X-RapidAPI-Key"]
          }
        }
      );
      const data = await response.json();
      this.setState({ allTasks: data.quizlist });
      console.log(this.state.allTasks)
    } catch (err) {
      console.log(err.message);
    }
  }
  restartGame() {
    console.log("fired");
    this.setState({
      showGameOverPopup: false,
      showYouWonPopup: false,
      round: 1,
      score: 0,
      value: "",
      time: timeToAnswer,
      currentRoundPoints: 1,
      answeredQuestions: 0,
      errorMessage: ""
    });
    this.getWordQuiz();
    this.countTime();
  }
  displayYouWonPopup() {
    this.setState({
      showYouWonPopup: true
    });
    clearInterval(this.interval);
  }
  handleChange(event) {
    this.setState({
      selected: event.target.value,
      errorMessage: ""
    });
  }
  handleSubmit(event) {
    const currentSet = this.state.allTasks[this.state.round - 1];
    const selectedNumber = Number(this.state.selected);
    //unchecking the radio button
    document.querySelectorAll('input[type="radio"]')[
      selectedNumber
    ].checked = false;
    event.preventDefault();
    console.log(
      typeof selectedNumber,
      typeof this.state.selected,
      "handleSubmit"
    );
    // if no answer
    if (!this.state.selected) {
      this.setState({
        errorMessage: "*Please choose one of the options"
      });
    } else {
      //if correct answer
      if (selectedNumber === currentSet.correct - 1) {
        this.setState({
          currentRoundPoints: this.state.currentRoundPoints * 2,
          round: this.state.round + 1,
          errorMessage: "",
          answeredQuestions: this.state.answeredQuestions + 1,
          time: 60,
          selected: ""
        });
        //giving score for the current round
        if (this.state.score === 0) {
          this.setState({
            score: ++this.state.score
          });

          this.props.incrementScore();
        } else {
          this.setState({
            score: this.state.score * 2
          });
        }
        console.log("YAYAYAY!");
        // if wrong answer
      } else {
        this.setState({
          score: 0,
          round: this.state.round,
          errorMessage: "",
          answeredQuestions: 0,
          selected: "",
          showGameOverPopup: true,
          correctAnswer: currentSet.option[currentSet.correct-1]
        });
        clearInterval(this.interval);
      }
    }
    //Winning the whole round
    if(this.state.round === this.state.winCondition) {
      // this.setState({
      //   showYouWonPopup: true
      // })
      this.displayYouWonPopup();
    }

  }
  countTime() {
    this.interval = setInterval(() => {
      this.setState({
        time: this.state.time - 1
      });
      if (this.state.time === 0) {
        clearInterval(this.interval);
        this.setState({
          showGameOverPopup: true
        });
      }
    }, 1000);
  }
  render() {
    const currentSet = this.state.allTasks[this.state.round - 1];
    // console.log(this.state.allTasks[this.state.round - 1])
    let alert = "";
    if (this.state.errorMessage) {
      alert = "input-alert";
    }

    // if (currentQuestion) {
    return (
      <div className="App">
        <div className="main-container">
          <div className="quiz-container">
            <h1>Quiz</h1>
            <div className="questions-container">
              <p className="title">Round: </p>
              <p>{this.state.round}</p>

              <p className="title">Points for the current round: </p>
              <p className="current-points">{this.state.currentRoundPoints}</p>

              <p className="title">Questions left to win: </p>
              <p>{this.state.winCondition - this.state.answeredQuestions}</p>

              <p className="title">Your score: </p>
              <p>{this.state.score}</p>
            </div>
            <p className="error-message">{this.state.errorMessage}</p>
            {this.state.allTasks && (
              <InputForm
                selected={this.state.selected}
                round={this.state.round}
                allTasks={this.state.allTasks}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
              />
            )}
          </div>
          <Timer timeApp={this.state.time} />
        </div>

        {this.state.showGameOverPopup && (
          <GameOverPopup
            restartGameApp={this.restartGame}
            valueFromApp={this.state.value}
            correctAnswer={this.state.correctAnswer}
            timeApp={this.state.time}
          />
        )}

        {this.state.showYouWonPopup && (
          <YouWonPopup
            restartGameApp={this.restartGame}
            scoreFromApp={this.state.score}
          />
        )}
        <button onClick={()=>this.props.increment}>CLICK</button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    incrementScore: () => {
      dispatch(increment())
    }
  }
}

export default connect(
 null,
 //
  mapDispatchToProps
)(App);