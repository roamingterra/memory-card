import React, { useState, useEffect } from "react";
import Card from "./components/card";
import "./styles/style.css";

function App() {
  return (
    <div className="App">
      <div className="header">
        <div className="title">Memory Card Game</div>
        <div className="instructions">
          Get points by clicking on the an image, don't click on an image more
          than once
        </div>
        <div className="score-board">
          <div>Score:</div>
          <div>Best Score:</div>
        </div>
      </div>
      <div className="card-section-container">
        <div className="card-section">
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>
      </div>
      <div className="footer">
        <div>Website created by Daniel Ballerini</div>
        <div>
          with help from the
          <a href="https://www.theodinproject.com/"> © Odin Project</a>
        </div>
      </div>
    </div>
  );
}

export default App;
