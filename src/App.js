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
    message: "You goat this! Click an image to begin!",
    highScore: 0,
    currentScore: 0,
    goats: goats,
    clicked: []
  }

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
      this.handleReset();
      this.shuffleArray(goats);
    }
  };

  incrementScore = () => {
    // increase current score by 1
    const newScore = this.state.currentScore + 1;
    this.setState({
      currentScore: newScore,
      message: "You goat this!"
    });
    if (newScore >= this.state.highScore) {
      this.setState({ highScore: newScore });
    }
    else if (newScore === 12) {
      this.setState({ message: "You win!" });
    }
    this.shuffleArray(goats);
  };

  handleReset = () => {
    this.setState({
      currentScore: 0,
      highScore: this.state.highScore,
      message: "Whoopsy daisy!",
      clicked: []
    });
    this.shuffleArray(goats);
  };

  render() {
    return (
      <Wrapper>
        <Header />
        <Container>
          <Row>
            <Column size="col-md-7">
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
            <Column size="col-md-5">
              <ScoreBoard
                message={this.state.message}
                currentScore={this.state.currentScore}
                highScore={this.state.highScore}
              />
            </Column>
          </Row>
        </Container>
      </Wrapper>
    );
  }
}

export default App;