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

  // every time a round ends
  gameEnd = () => {
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
      card.count = 0;
    });
    // reset current score
    this.setState({score: 0});
  };

  render() {
    return (
      <wrapper>
        <header>
        </header>
      </wrapper>
    )
    };
}






export default App;
