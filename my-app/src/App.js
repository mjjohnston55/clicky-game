import './App.css';
import React, {Component} from "react";
import Card from "./components/Card.js";
import cards from "./cards.json";
import Header from "./components/header.js";

class App extends Component {
state = {
    cards,
    score: 0,
    highscore: 0
  };

  // run every time a round ends (wrong card chosen)
  roundEnd = () => {
    // updates highscore if applicable with a special alert
    if (this.state.score > this.state.highscore) {
      this.setState({highscore: this.state.score})
      alert("Game over. New high score " + this.state.score + " achieved!");
    }
    else {
    // if no new high score, notifies of loss and display score achieved
    alert("You Lost! You scored: " + this.state.score)
    };
    // resets card counts
    this.state.cards.forEach(card => {
      card.counter = 0;
    });
    // reset current score
    this.setState({score: 0});
  };

  render() {
    return (
      <wrapper>
        <Header score={this.state.score} highscore={this.state.highscore}>
        </Header>
      </wrapper>
    )
    };
}






export default App;
