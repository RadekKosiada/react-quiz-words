import React, { Component } from "react";
import "../scss-files/App.scss";
import axios from "axios";

export default class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allQuestions: [],
      correctAnswer: "",
      winCondition: 5
    };
    this.fetchQuestion = this.fetchQuestion.bind(this);
  }
  // componentWillMount() {
  //   this.fetchQuestion();
  // }
  fetchQuestion = () => {
    axios
      .get("http://jservice.io/api/random/?count=" + this.state.winCondition)
      .then(res => {
        const questions = res.data;
        this.props.getQuestions(questions);
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    return (
      <div>
        <p>Hello I'm a question</p>
        <p>And what about me?</p>
      </div>
    );
  }
}
