import React, { useState, useEffect } from "react";
import Card from "./components/card";
import "./styles/style.css";

const images = [
  "/images/argentina.png",
  "/images/australia.png",
  "/images/brazil.png",
  "/images/canada.png",
  "/images/china.png",
  "/images/france.png",
  "/images/germany.png",
  "/images/india.png",
  "/images/italy.png",
  "/images/japan.png",
  "/images/south-africa.png",
  "/images/united-kingdom.png",
];

const flagsDefaultState = {
  flag1: "",
  flag2: "",
  flag3: "",
  flag4: "",
  flag5: "",
  flag6: "",
  flag7: "",
  flag8: "",
  flag9: "",
  flag10: "",
  flag11: "",
  flag12: "",
};

function App() {
  const [flags, setFlags] = useState(flagsDefaultState);

  useEffect(() => {
    const shuffleFlags = () => {
      // Clear flags state object
      setFlags(flagsDefaultState);

      // Make a shallow copy of the images array
      const imagesCopy = [...images];
      // Make a new object that is a shallow copy of the flagsDefaultState
      const newFlags = { ...flagsDefaultState };

      // Recursively dump images from imagesCopy into random keys of the newFlags object
      for (const flag in newFlags) {
        const randomIndex = Math.floor(Math.random() * imagesCopy.length);
        newFlags[flag] = imagesCopy[randomIndex];
        imagesCopy.splice(randomIndex, 1);
      }
      setFlags(newFlags);
    };

    shuffleFlags();
  }, []); // Empty dependency array to run the effect once

  return (
    <div className="App">
      <div className="wrapper">
        <div className="header">
          <div className="title">Memory Flag</div>
          <div className="instructions">
            Get points by clicking on a flag, don't click on a flag more than
            once
          </div>
          <div className="score-board">
            <div>Score:</div>
            <div>Best Score:</div>
          </div>
        </div>
        <div className="card-section-container">
          <div className="card-section">
            <Card img={flags.flag1}></Card>
            <Card img={flags.flag2}></Card>
            <Card img={flags.flag3}></Card>
            <Card img={flags.flag4}></Card>
            <Card img={flags.flag5}></Card>
            <Card img={flags.flag6}></Card>
            <Card img={flags.flag7}></Card>
            <Card img={flags.flag8}></Card>
            <Card img={flags.flag9}></Card>
            <Card img={flags.flag10}></Card>
            <Card img={flags.flag11}></Card>
            <Card img={flags.flag12}></Card>
          </div>
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
