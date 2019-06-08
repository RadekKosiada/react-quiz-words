import React, { Component } from "react";
import "../App.css";
import axios from "axios";

export default class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allQuestions: [],
      correctAnswer: ""
    };
    this.getQuestion = this.getQuestion.bind(this);
  }
  getQuestion() {
    axios
      .get("http://jservice.io/api/random/?count=" + this.state.winCondition)
      .then(res => {
        //needs to change this to render
        const data = res.data;
        this.setState({
          allQuestions: data
        });
        for (let i = 0; i < data.length; i++) {
          console.log(data[i].answer);
        }
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
