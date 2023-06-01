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
    "./memory-card/images/argentina.png",
    "./memory-card/images/australia.png",
    "./memory-card/images/brazil.png",
    "./memory-card/images/canada.png",
    "./memory-card/images/china.png",
    "./memory-card/images/france.png",
    "./memory-card/images/germany.png",
    "./memory-card/images/india.png",
    "./memory-card/images/italy.png",
    "./memory-card/images/japan.png",
    "./memory-card/images/south-africa.png",
    "./memory-card/images/united-kingdom.png",
  ];

  // State variables
  const [flags, setFlags] = useState(flagsDefaultState);
  const [gameControl, setGameControl] = useState({
    shuffleTrigger: true,
    selectedFlags: [],
    score: 0,
    bestScore: 0,
  });
  const [imagesRendered, setImagesRendered] = useState(false);
  const [loadPage, setLoadPage] = useState(true);

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
    if (gameControl.selectedFlags.includes(countryName, 0)) {
      setGameControl((prevState) => ({
        ...prevState,
        selectedFlags: [],
        shuffleTrigger: true,
        score: 0,
      }));
    } else {
      if (gameControl.bestScore < gameControl.score + 1) {
        setGameControl((prevState) => ({
          ...prevState,
          score: prevState.score + 1,
          bestScore: prevState.bestScore + 1,
          selectedFlags: [...prevState.selectedFlags, countryName],
          shuffleTrigger: true,
        }));
      } else {
        setGameControl((prevState) => ({
          ...prevState,
          score: prevState.score + 1,
          selectedFlags: [...prevState.selectedFlags, countryName],
          shuffleTrigger: true,
        }));
      }
    }
  };

  useEffect(() => {
    if (gameControl.shuffleTrigger === true) {
      if (loadPage === true) {
        setTimeout(() => {
          setLoadPage(false);
        }, 1000);
      }
      setGameControl((prevState) => ({
        ...prevState,
        shuffleTrigger: false,
      }));

      // Delay setting imagesRendered to true by a short period to animate the rendered images
      setTimeout(() => {
        shuffleFlags();
        setImagesRendered(true);
        // Delay setting imagesRendered to false by a short period to animate the rendered images
        setTimeout(() => {
          setImagesRendered(false);
        }, 500);
      }, 100);
    }
  }, [gameControl.shuffleTrigger]);

  return (
    <div className="App">
      <div
        id="loading-screen"
        style={{
          visibility: loadPage ? "visible" : "hidden",
          opacity: loadPage ? 1 : 0,
        }}
      >
        <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className="wrapper">
        <div className="header">
          <div className="title">Memory Flag</div>
          <div className="instructions">
            Get points by clicking on a flag, don't click on a flag more than
            once
          </div>
          <div className="score-board">
            <div>
              Score: <span style={{ color: "red" }}>{gameControl.score}</span>
            </div>
            <div>
              Best Score:{" "}
              <span style={{ color: "red" }}>{gameControl.bestScore}</span>
            </div>
          </div>
        </div>
        <div className="card-section-container">
          <div className="card-section">
            <Card
              img={flags.flag1}
              onClick={handleClick}
              imagesRendered={imagesRendered}
            ></Card>
            <Card
              img={flags.flag2}
              onClick={handleClick}
              imagesRendered={imagesRendered}
            ></Card>
            <Card
              img={flags.flag3}
              onClick={handleClick}
              imagesRendered={imagesRendered}
            ></Card>
            <Card
              img={flags.flag4}
              onClick={handleClick}
              imagesRendered={imagesRendered}
            ></Card>
            <Card
              img={flags.flag5}
              onClick={handleClick}
              imagesRendered={imagesRendered}
            ></Card>
            <Card
              img={flags.flag6}
              onClick={handleClick}
              imagesRendered={imagesRendered}
            ></Card>
            <Card
              img={flags.flag7}
              onClick={handleClick}
              imagesRendered={imagesRendered}
            ></Card>
            <Card
              img={flags.flag8}
              onClick={handleClick}
              imagesRendered={imagesRendered}
            ></Card>
            <Card
              img={flags.flag9}
              onClick={handleClick}
              imagesRendered={imagesRendered}
            ></Card>
            <Card
              img={flags.flag10}
              onClick={handleClick}
              imagesRendered={imagesRendered}
            ></Card>
            <Card
              img={flags.flag11}
              onClick={handleClick}
              imagesRendered={imagesRendered}
            ></Card>
            <Card
              img={flags.flag12}
              onClick={handleClick}
              imagesRendered={imagesRendered}
            ></Card>
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
