import React, { Component } from "react";
import NavBar from "./components/navbar";
import "./App.css";

class App extends Component {
  state = {
    counters: [],
  };

  handleAdd = () => {
    console.log("added click", this);
  };

  render() {
    return (
      <React.Fragment>
        <NavBar counters={this.state.counters} onAdd={this.handleAdd} />
        <main className="container"></main>
      </React.Fragment>
    );
  }
}

export default App;
