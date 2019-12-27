import './App.css';
import React, {Component} from "react";
import Card from "./components/Card.js";
import cards from "./cards.json";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";

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
    // resets card click counts
    this.state.cards.forEach(card => {
      card.counter = 0;
    });
    // reset current score
    this.setState({score: 0});
  };

  guessChecker = id => {
    this.state.cards.find((j, i) => {
      if (j.id === id) {
        // if clicked card hasn't been clicked yet
        if (cards.i.clicks === 0) {
          // +1 to card's click count variable and +1 to score
          cards.i.clicks ++;
          this.setState({score: this.state.score = this.}, function(){
            console.log(this.state.score);
          });
          // shuffle cards randomly
          this.state.cards.sort(() => Math.random() - 0.5)
        }
        else  {
          this.roundEnd();
        }
      }
    });
  }


  render() {
    return (
      <Wrapper>
        <Header score={this.state.score} highscore={this.state.highscore}>
        </Header>
        {this.state.cards.map(card => (
          <Card
          id={card.id}
          key={card.id}
          image={card.image}
          guessChecker={this.guessChecker}
          />
        ))}
      </Wrapper>
    )
    };
}


export default App;
