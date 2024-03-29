import React, { Component } from "react";
import "./scss-files/App.scss";
import GameOverPopup from "./components/gameOverPopup";
import YouWonPopup from "./components/youWonPopup";
import InputForm from "./components/inputForm";
import Words from "./components/words";
import Timer from "./components/timer";
import secrets from "./secrets.json";

const timeToAnswer = 15;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allTasks: [],
      correctAnswer: "",
      selected: "",
      score: 0,
      currentRoundPoints: 1,
      errorMessage: false,
      round: 1,
      showGameOverPopup: false,
      showYouWonPopup: false,
      time: timeToAnswer,
      winCondition: 10,
      answeredQuestions: 0,
      level: 5
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.restartGame = this.restartGame.bind(this);
    this.displayYouWonPopup = this.displayYouWonPopup.bind(this);
    this.countTime = this.countTime.bind(this);
  }
  componentDidMount() {
    this.getWordQuiz();
  }
  async getWordQuiz() {
    try {
      const response = await fetch(
        "https://twinword-word-association-quiz.p.rapidapi.com/type1/?area=sat&level=" +
          this.state.level,
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
      //calling countTime here so the timer starts first when the data loads
      this.countTime();
    } catch (err) {
      console.log(err.message);
    }
  }
  restartGame() {
    this.setState({
      showGameOverPopup: false,
      showYouWonPopup: false,
      round: 1,
      score: 0,
      value: "",
      time: timeToAnswer,
      currentRoundPoints: 1,
      answeredQuestions: 0,
      errorMessage: false
    });
    this.getWordQuiz();
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
      errorMessage: false
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
    // if no answer
    if (!this.state.selected) {
      this.setState({
        errorMessage: true
      });
    } else {
      //if correct answer
      if (selectedNumber === currentSet.correct - 1) {
        this.setState({
          currentRoundPoints: this.state.currentRoundPoints * 2,
          round: this.state.round + 1,
          errorMessage: false,
          answeredQuestions: this.state.answeredQuestions + 1,
          time: timeToAnswer,
          selected: ""
        });
        //giving score for the current round
        if (this.state.score === 0) {
          this.setState({
            score: ++this.state.score
          });
        } else {
          this.setState({
            score: this.state.score * 2
          });
        }
        // if wrong answer
      } else {
        this.setState({
          score: 0,
          round: this.state.round,
          errorMessage: false,
          answeredQuestions: 0,
          selected: "",
          showGameOverPopup: true,
          correctAnswer: currentSet.option[currentSet.correct - 1]
        });
        clearInterval(this.interval);
      }
    }
    //Winning the whole round
    if (this.state.round === this.state.winCondition) {
      // this.setState({
      //   showYouWonPopup: true
      // })
      this.displayYouWonPopup();
    }
  }
  countTime() {
    const currentSet = this.state.allTasks[this.state.round - 1];
    this.interval = setInterval(() => {
      this.setState({
        time: this.state.time - 1
      });
      if (this.state.time === 0) {
        clearInterval(this.interval);
        this.setState({
          showGameOverPopup: true,
          correctAnswer: currentSet.option[currentSet.correct - 1]
        });
      }
    }, 1000);
  }
  render() {

    return (
      <div className="App">
        <div className="main-container">
          {/* first row */}
          <h1 className="game-title">Quiz</h1>
          <Timer
            timeApp={this.state.time}
            allTasks={this.state.allTasks}
            round={this.state.round}
          />
          {/* second row */}
          <p className="round">
            <span className="title">Round: </span>
            <span>{this.state.round}</span>
          </p>

          <p className="questions-left">
            <span className="title">Questions: </span>
            <span>
              {this.state.winCondition - this.state.answeredQuestions}
            </span>
          </p>
          <p className="score">
            <span className="title">Score: </span>
            <span>{this.state.score}</span>
          </p>
          {/* third row */}
          <div className="instruction">
            <p>
              Choose the best matching answer for following words within given
              time
            </p>
            <p className="error-message">{this.state.errorMessage}</p>
          </div>
          {/* fourth row */}
          <Words allTasks={this.state.allTasks} round={this.state.round} />
          {/* fifth row */}
          <InputForm
            selected={this.state.selected}
            round={this.state.round}
            allTasks={this.state.allTasks}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            errorMessage={this.state.errorMessage}
          />
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
      </div>
    );
  }
}

export default App;
