import React, { useEffect, useState } from "react";
import "./ColorGuess.css";
import "../../App.css";

function ColorGuess() {
  const [randomNum, setRandomNum] = useState(0);
  const [score, setScore] = useState(0);
  const [numOfAttempts, setNumOfAttempts] = useState(0);
  const [colors, setColors] = useState([]);
  const [needHelp, setNeedHelp] = useState(true);

  const setColorsInArrayAndSetRandumNum = () => {
    const newColors = Array.from({ length: 3 }, generateRandomColor);
    setRandomNum(randomNumberInRange(0, 2));
    setColors([...newColors]);
  };

  useEffect(() => {
    setColorsInArrayAndSetRandumNum();
  }, []);
  const generateRandomColor = () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  };

  const randomNumberInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const submitAnswer = (e, selectedNum) => {
    e.preventDefault();
    console.log("Selected num", selectedNum);
    console.log("option sleceted for the Color of the back ground", randomNum);

    if (randomNum === selectedNum) {
      setScore((prevScore) => prevScore + 1);
      console.log("scored");
    }
    setNumOfAttempts((prevAttempts) => prevAttempts + 1);
    setColorsInArrayAndSetRandumNum();
    setNeedHelp(false);
  };

  const displayButtonsBG = (e) => {
    e.preventDefault();
    setNeedHelp(!needHelp);
  };

  const buttons = colors.map((clr, index) => (
    <button
      key={index}
      onClick={(e) => submitAnswer(e, index)}
      style={{ backgroundColor: needHelp ? clr : "white" }}
    >
      {clr}
    </button>
  ));

  return (
    <div className="body_container">
      <div className="project_title">
        <p>Color Guess Game</p>
      </div>
      <div className="project_color_guess_container">
        <div className="color_guess_game">
          <div
            className="color_guess_screen"
            style={{ backgroundColor: colors[randomNum] }}
          >
            <button onClick={(e) => displayButtonsBG(e)}>
              Need help? Click here!
            </button>
          </div>
          <div className="color_guess_btns">{buttons}</div>
        </div>
        <div className="color_guess_rslt">
          <p>
            Correct answers <span>{score}</span>
          </p>
          <p>
            Wrong answers <span>{numOfAttempts - score}</span>
          </p>
          <p>
            Number of attempts <span>{numOfAttempts}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ColorGuess;
