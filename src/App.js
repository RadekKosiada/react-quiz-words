import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  state = {
    answer: '',
    category: '',
    questionId: 0,
    question: '', 
    value: 0
  }
  componentDidMount() {
    axios.get('http://jservice.io/api/random')
      .then(res => {
        console.log(res.data[0])

        const data = res.data[0];

       this.setState({
        answer: data.answer,
        category: data.category.title,
        questionId: data.id,
        question: data.question, 
        value: data.value
       })
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    return (
      <div className="App">
        <div className="quiz-container">  
        <div className="grid-container">    
          <p className="title">Category:</p><p> {this.state.category}</p>
          <p className="title">Question:</p><p> {this.state.question}</p>
        </div>
          <input />
          <button>Submit</button>
          </div> 
      </div>
    );
  }
}

export default App;
