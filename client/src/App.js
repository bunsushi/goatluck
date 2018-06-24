import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import PuzzleBoard from "./components/PuzzleBoard";
import GoatCard from "./components/GoatCard";
import goats from "./goats.json";

class App extends Component {
  state = {
    goats
  };

  render() {
    return (
      <Wrapper>
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <PuzzleBoard>
                {this.state.goats.sort(() => 0.5 - Math.random()).map((goat) => {
                  return (
                    <GoatCard
                      name={goat.name}
                      image={goat.image}
                    />
                  )
                })}
                {this.state.goats.sort(() => 0.5 - Math.random()).map((goat) => {
                  return (
                    <GoatCard
                      name={goat.name}
                      image={goat.image}
                    />
                  )
                })}
              </PuzzleBoard>
            </div>
            <div className="col-md-5">
                <h1>Score goes here</h1>
            </div>
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default App;