import React, { useState, useEffect } from "react";
import Card from "./components/card";
import "./styles/style.css";

function App() {
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

  const [flags, setFlags] = useState(flagsDefaultState);

  const [gameControl, setGameControl] = useState({
    shuffleTrigger: true,
    selectedFlags: [],
    score: 0,
  });

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

  const handleClick = (countryName) => {
    // Trigger lose game if selected flag is found in selectedFlags state array
    if (gameControl.selectedFlags.includes(countryName, 0)) {
      setGameControl((prevState) => ({
        ...prevState,
        selectedFlags: [],
        shuffleTrigger: true,
        score: 0,
      }));
    }
    // Trigger add point if selected flag is not found in selectedFlags state array
    else {
      setGameControl((prevState) => ({
        ...prevState,
        score: prevState.score + 1,
        selectedFlags: [...prevState.selectedFlags, countryName],
        shuffleTrigger: true,
      }));
    }
  };

  useEffect(() => {
    if (gameControl.shuffleTrigger === true) {
      setGameControl((prevState) => ({
        ...prevState,
        shuffleTrigger: false,
      }));

      shuffleFlags();
      console.log(gameControl.selectedFlags);
      console.log(gameControl.score);
    }
  }, [gameControl.shuffleTrigger]); // Empty dependency array to run the effect once

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
            <Card img={flags.flag1} onClick={handleClick}></Card>
            <Card img={flags.flag2} onClick={handleClick}></Card>
            <Card img={flags.flag3} onClick={handleClick}></Card>
            <Card img={flags.flag4} onClick={handleClick}></Card>
            <Card img={flags.flag5} onClick={handleClick}></Card>
            <Card img={flags.flag6} onClick={handleClick}></Card>
            <Card img={flags.flag7} onClick={handleClick}></Card>
            <Card img={flags.flag8} onClick={handleClick}></Card>
            <Card img={flags.flag9} onClick={handleClick}></Card>
            <Card img={flags.flag10} onClick={handleClick}></Card>
            <Card img={flags.flag11} onClick={handleClick}></Card>
            <Card img={flags.flag12} onClick={handleClick}></Card>
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
