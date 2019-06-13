// Ctrl Shift F
import React, { Component } from "react";
import axios from "axios";
import "./App.scss";
import GameOverPopup from "./components/gameOverPopup";
import YouWonPopup from "./components/youWonPopup";
import InputForm from "./components/inputForm";
import Timer from "./components/timer";
import secrets from "./secrets.json"

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
      value: "",
      score: 0,
      currentRoundPoints: 1,
      errorMessage: "",
      round: 1,
      showGameOverPopup: false,
      showYouWonPopup: false,
      time: 60,
      winCondition: 5,
      answeredQuestions: 0,
      //NEW
      allTasks: [],
      data: []
    };
    this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.restartGame = this.restartGame.bind(this);
    // this.displayYouWonPopup = this.displayYouWonPopup.bind(this);
    this.countTime = this.countTime.bind(this);
  }
  componentDidMount() {
    this.countTime();
    this.getWordQuiz();
  }
  async getWordQuiz() {
    try {
      const response = await fetch(
        "https://twinword-word-association-quiz.p.rapidapi.com/type1/?area=sat&level=3",
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
    } catch(err) {
      console.log(err.message);
    }
  }

  //   if (!response.ok) {
  //     throw Error(response.statusText);
  //   }
  //     .then(res => res.json())
  //     .then(response => {
  //       console.log("Success:", response.quizlist);
  //       this.setState({
  //         allTasks: response.quizlist
  //       });
  //     })
  //     .catch(error => console.error("Error:", error));
  // }

  // restartGame() {
  //   console.log("fired");
  //   this.setState({
  //     showGameOverPopup: false,
  //     showYouWonPopup: false,
  //     round: 1,
  //     score: 0,
  //     value: "",
  //     time: 60,
  //     currentRoundPoints: 1,
  //     answeredQuestions: 0,
  //     errorMessage: ""
  //   });
  //   this.getQuestion();
  //   this.countTime();
  // }
  // displayYouWonPopup() {
  //   this.setState({
  //     showYouWonPopup: true
  //   });
  //   clearInterval(this.interval);
  // }
  handleChange(event) {
    this.setState({
      value: event.target.value,
      errorMessage: ""
    });
  }
  // handleSubmit(event) {
  //   console.log(this.state.allQuestions, this.state.round);
  //   const currentQuestion = this.state.allQuestions[this.state.round - 1];
  //   console.log("A name was submitted: " + this.state.value);
  //   event.preventDefault();
  //   //if no answer
  //   if (!this.state.value) {
  //     this.setState({
  //       errorMessage: "*This is a required field"
  //     });
  //     //if correct answer
  //   } else if (
  //     currentQuestion.answer
  //       .replace(/(<([^>]+)>)/gi, "")
  //       .toLowerCase()
  //       .includes(this.state.value.toLowerCase())
  //   ) {
  //     console.log("correct", this.state.answeredQuestions);
  //     this.setState({
  //       currentRoundPoints: this.state.currentRoundPoints * 2,
  //       round: this.state.round + 1,
  //       errorMessage: "",
  //       answeredQuestions: this.state.answeredQuestions + 1,
  //       time: 60
  //     });
  //     if (this.state.score === 0) {
  //       this.setState({
  //         score: +1
  //       });
  //     } else {
  //       this.setState({
  //         score: 2 * this.state.score
  //       });
  //     }
  //     //triggering popup after correctly answering required number of questions
  //     if (this.state.round === this.state.winCondition) {
  //       this.displayYouWonPopup();
  //     }
  //     this.setState({
  //       value: ""
  //     });
  //     //  resetting all to 0 if wrong answer
  //   } else {
  //     this.setState({
  //       score: 0,
  //       round: this.state.round,
  //       showGameOverPopup: true,
  //       errorMessage: "",
  //       answeredQuestions: 0
  //     });
  //     clearInterval(this.interval);
  //   }
  // }
  countTime() {
    this.interval = setInterval(() => {
      this.setState({
        time: this.state.time - 1
      });
      if (this.state.time === 0) {
        clearInterval(this.interval);
        // this.setState({
        //   showGameOverPopup: true
        // });
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
            <h1>Quiz*</h1>
            <div className="questions-container">
              <p className="title">Round: </p>
              <p>{this.state.round}</p>

              <p className="title">Points for the current round: </p>
              <p className="current-points">{this.state.currentRoundPoints}</p>

              <p className="title">Questions left to win: </p>
              <p>{this.state.winCondition - this.state.answeredQuestions}</p>

              <p className="title">Your score: </p>
              <p>{this.state.score}</p>

              {this.state.allTasks && (
              <InputForm 
                round = {this.state.round}
                allTasks={this.state.allTasks}
                handleChange={this.handleChange}
              />
              )}

              {/* <p className="title">Words:</p>              
                {currentSet && (<div className="form-check">
                {currentSet.quiz.map((elem, index) => (               
                <label key={index}>
                  <input type="radio" value={elem} className="form-check-input" />
                  {elem}
                </label>
               ))}</div>)} */}

              {/* {currentSet && (<p>{currentSet.quiz.map((elem, index) => (
                <input type="radio" key={index}>{elem} />
              ))}</p>)} */}
              {/* {<p> 
                <span>{currentQuestion.quiz[0]}</span>
                <span>{currentQuestion.quiz[1]}</span>
                <span>{currentQuestion.quiz[2]}</span>
              </p>} */}


            </div>
            <p className="error-message">{this.state.errorMessage}</p>
            {/* <Question getQuestions={this.getQuestions} /> */}
            <form className="grid-form" onSubmit={this.handleSubmit}>
              <span className="title">Your answer:</span>
              <input
                type="text"
                name="answer"
                className={alert}
                value={this.state.value}
                onChange={this.handleChange}
              />
              <input className="button" type="submit" value="Submit" />
            </form>
          </div>
          <Timer timeApp={this.state.time} />
        </div>

        {this.state.showGameOverPopup && (
          <GameOverPopup
            restartGameApp={this.restartGame}
            valueFromApp={this.state.value}
            // correctAnswer={currentQuestion.answer}
            timeApp={this.state.time}
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
