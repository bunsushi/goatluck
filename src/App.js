import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import { Container, Row, Column } from './components/Bootstrap';
import PuzzleBoard from "./components/PuzzleBoard";
import ScoreBoard from "./components/ScoreBoard";
import GoatCard from "./components/GoatCard";
import goats from "./goats.json";

class App extends Component {
  state = {
    message: "Click a pic to begin!",
    highScore: 0,
    currentScore: 0,
    goats: goats,
    clicked: []
  }

  audio = new Audio("goat-noise.mp3");

  componentDidMount = () => {
    console.log(this.state.clicked);
  }

  // Fisher-Yates / Durstenfeld Shuffle algorithm
  shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  handleClick = id => {
    // if the clicked array does not contain the id of the clicked image
    if (this.state.clicked.indexOf(id) === -1) {
      // add to the player's score
      this.incrementScore();
      // concatenate the id to the array of clicked image ids
      this.setState({ clicked: this.state.clicked.concat(id) });
    } else {
      this.resetGame();
      this.shuffleArray(goats);
    }
  };

  incrementScore = () => {
    // increase current score by 1
    const newScore = this.state.currentScore + 1;
    const goatPuns = ["You goat this!", "Lookin' goat!", "OMG(oat)!", "Way to goat!"];
    const encouragement = goatPuns[Math.floor(Math.random() * goatPuns.length)];
    this.setState({
      currentScore: newScore,
      message: encouragement
    });
    console.log(this.state.clicked);

    if (newScore >= this.state.highScore) {
      this.setState({ highScore: newScore });
    }
    if (newScore === 16) {
      this.setState({
        message: "You're the GOAT!",
      });
    }
    this.shuffleArray(goats);
  };

  resetGame = () => {
    // Win conditions
    if (this.state.currentScore === 16) {
      this.setState({
        currentScore: 0,
        highScore: this.state.highScore,
        message: "Click a pic to begin!",
        clicked: []
      })
      this.shuffleArray(goats);
    }
    // Loss conditions
    else {
      this.setState({
        currentScore: 0,
        highScore: this.state.highScore,
        message: "Whoopsie daisy!",
        clicked: []
      });
      this.audio.play();
      this.shuffleArray(goats);
    }
  };

  render() {
    return (
      <Wrapper>
        <Container size="container-fluid">
          <Row>
            <Column size="col-md-6">
              <Header
                message={this.state.message}
              />
              <ScoreBoard
                currentScore={this.state.currentScore}
                highScore={this.state.highScore}
              />
            </Column>
            <Column size="col-md-6">
              <PuzzleBoard>
                {
                  this.state.goats.map(goat => (
                    <GoatCard
                      key={goat.id}
                      id={goat.id}
                      image={goat.image}
                      name={goat.name}
                      handleClick={this.handleClick}
                    />
                  ))
                }
              </PuzzleBoard>
            </Column>
          </Row>
        </Container>
      </Wrapper>
    );
  }
}

export default App;