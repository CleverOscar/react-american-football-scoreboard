import React, {useState} from "react";
import BottomRow from "./BottomRow";
import HomeScore from './ScoreBoard/HomeComponents/homeScore.js';
import AwayScore from './ScoreBoard/AwayComponents/awayScore.js';
import TouchDown from './ScoreBoard/Buttons/pointFunctions.js';
import "./App.css";

function App() {

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <HomeScore />
          <div className="timer">00:03</div>
          <AwayScore />
        </div>
        <BottomRow />
      </section>
      <TouchDown/>
    </div>
  );
}

export default App;
