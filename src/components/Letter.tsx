import React, { useContext } from "react";
import { AppContext } from "../App";
import "../styles/index.scss";

const Letter = ({ letterPosition, attemptValue }: any) => {
  const { board, correctWord, currentAttempt }: any = useContext(AppContext);
  const letter = board[attemptValue][letterPosition];

  const correct = correctWord[letterPosition] === letter;
  console.log(correct)
  const almost = !correct && letter !== "" && correctWord.includes(letter);

  const letterState: any =
    currentAttempt.attempt > attemptValue &&
    (correct ? "correct" : almost ? "almost" : "error");

  return (
    <div className="letter" id={letterState}>
      {" "}
      {letter}
    </div>
  );
};

export default Letter;
