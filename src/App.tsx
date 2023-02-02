import React, { useEffect, useState } from "react";
import "./styles/index.scss";
import Board from "./components/Board";
import Keyboard from "./components/Keyboard";
import GameOver from "./components/GameOver";
import { createContext } from "react";
import { boardDefault, generateWordSet } from "./Words";

export const AppContext = createContext({});

function App() {
  const [board, setBoard] = useState<string[][]>(boardDefault);
  const [currentAttempt, setCurrentAttempt] = useState({
    attempt: 0,
    letterPosition: 0,
  });
  const [wordSet, setWordSet] = useState<any>();
  const [disabledLetters, setDisabledLetters] = useState([]);
  const [gameOver, setGameOver] = useState({
    gameOver: false,
    guessedWord: false,
  });
  const [correctWord, setCorrectWord] = useState("");

  useEffect(() => {
    generateWordSet().then((words: any) => {
      setWordSet(words.wordSet);
      setCorrectWord("RIGHT");
      //words.todaysWord
    });
  }, []);

  const onClickedLetter = (keyValue: string) => {
    if (currentAttempt.letterPosition > 4) return;
    const newBoard = [...board];
    newBoard[currentAttempt.attempt][currentAttempt.letterPosition] = keyValue;
    setBoard(newBoard);
    setCurrentAttempt({
      ...currentAttempt,
      letterPosition: currentAttempt.letterPosition + 1,
    });
  };

  const onEnter = () => {
    if (currentAttempt.letterPosition !== 5) {
      return;
    }

    let currentWord = "";
    for (let attempts = 0; attempts < 5; attempts++) {
      currentWord += board[currentAttempt.attempt][attempts];
    }

    let currentWordExists = false;
    wordSet?.forEach((word: any) => {
      if (word.includes(currentWord.toLowerCase())) {
        currentWordExists = true;
      }
    });

    if (!currentWordExists) {
      return alert("Word not found");
    }

    if (currentWord === correctWord) {
      setGameOver({ gameOver: true, guessedWord: true });
      return;
    }

    if (currentAttempt.attempt === 5) {
      setGameOver({ gameOver: true, guessedWord: false });
    }

    setCurrentAttempt({
      attempt: currentAttempt.attempt + 1,
      letterPosition: 0,
    });
  };

  const onDelete = () => {
    if (currentAttempt.letterPosition === 0) {
      return;
    }
    const newBoard = [...board];
    newBoard[currentAttempt.attempt][currentAttempt.letterPosition - 1] = "";
    setBoard(newBoard);
    setCurrentAttempt({
      ...currentAttempt,
      letterPosition: currentAttempt.letterPosition - 1,
    });
  };

  return (
    <div>
      <nav>
        <h1>Wordle</h1>
      </nav>
      <AppContext.Provider
        value={{
          board,
          setBoard,
          currentAttempt,
          setCurrentAttempt,
          correctWord,
          onClickedLetter,
          onDelete,
          onEnter,
          setDisabledLetters,
          disabledLetters,
          gameOver
        }}
      >
        <div className="game-container">
          <Board />
          {gameOver.gameOver ? <GameOver /> : <Keyboard />}
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;
