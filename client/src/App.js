import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
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
      </Wrapper>
    );
  }
}

export default App;