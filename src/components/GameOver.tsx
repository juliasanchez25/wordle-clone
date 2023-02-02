import React, { useContext } from "react";
import { AppContext } from "../App";

const GameOver = () => {
  const { gameOver, currentAttempt, correctWord }: any = useContext(AppContext);
  return (
    <div className="game-over-container">
      <h3>{gameOver.guessedWord ? "Congrats!" : "Game over :("}</h3>
      <h1>Correct word: {correctWord}</h1>
      {gameOver.guessedWord && (<h3>You guessed in { currentAttempt.attempt } attempts</h3>)}
    </div>
  );
};

export default GameOver;
