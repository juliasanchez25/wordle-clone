import React, { useContext, useEffect } from "react";
import { AppContext } from "../App";
import "../styles/index.scss";

const Letter = ({ letterPosition, attemptValue }: any) => {
  const {
    board,
    correctWord,
    currentAttempt,
    disabledLetters,
    setDisabledLetters,
  }: any = useContext(AppContext);
  const letter = board[attemptValue][letterPosition];

  const correct = correctWord.toUpperCase()[letterPosition] === letter;
  const almost = !correct && letter !== "" && correctWord.toUpperCase().includes(letter);

  const letterState: any =
    currentAttempt.attempt > attemptValue &&
    (correct ? "correct" : almost ? "almost" : "error");

  useEffect(() => {
    if (letter !== "" && !correct && !almost) {
      setDisabledLetters((prev: any) => [...prev, letter]);
    }
  }, [currentAttempt.attempt]);

  return (
    <div className="letter" id={letterState}>
      {" "}
      {letter}
    </div>
  );
};

export default Letter;
