import React from "react";
import { Router } from "@reach/router";
import Board from "./components/Board";
import "./App.css";
import ItemBuilder from "./components/ItemBuilder";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Board path="/" />
        <ItemBuilder path="item-builder" />
      </Router>
    </div>
  );
};

export default App;
