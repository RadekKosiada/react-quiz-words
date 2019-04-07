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
      value: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({value: event.target.value.toUpperCase()});
  }
  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
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
            <p className="title">Category: </p>
            <p>{this.state.category}</p>
            <p className="title">Question: </p>
            <p>{this.state.question}</p>

            <form className="grid-form" onSubmit={this.handleSubmit}>
              <label className="title">
                Your answer: 
                <input type="text" name="answer" value={this.state.value} onChange={this.handleChange}/>
                <p>{this.state.value}</p>
              </label>
              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
