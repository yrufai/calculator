import React, { Component } from "react";
import Padz from "./padz";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <div id="App">
        <div className="display" />
        <div className="controls">
          <Padz />
        </div>
      </div>
    );
  }
}

export default App;
