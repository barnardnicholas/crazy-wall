import React from "react";
import { Router } from "@reach/router";
import Board from "./components/Board";
import "./App.css";
import ItemBuilder from "./components/ItemBuilder";
import ThreadTests from "./components/ThreadTests";
import * as apiLocal from "./utils/api-local";
import ErrorPage from "./components/ErrorPage";

const App = () => {
  // apiLocal
  //   .isStorageAvailable("localStorage")
  //   .then(() => {
  //     console.log("Storage available");
  //   })
  //   .catch((e) => {
  //     console.log("Not available");
  //   });
  return (
    <div className="App">
      <Router>
        <Board path="/" />
        <ItemBuilder path="/item-builder" />
        <ThreadTests path="/threadtests" />
        <ErrorPage default />
      </Router>
    </div>
  );
};

export default App;
