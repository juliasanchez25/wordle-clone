import React, { useCallback, useContext, useEffect } from "react";
import { AppContext } from "../App";
import "../styles/index.scss";
import Key from "./Key";

const Keyboard = () => {
  const { onEnter, onDelete, onClickedLetter, disabledLetters, setDisabledLetters }: any = useContext(AppContext);

  const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];

  const handleKeyboard = useCallback((event: { key: string; }) => {
    if (event.key === "Enter") {
      onEnter();
    } else if (event.key === "Backspace") {
      onDelete();
    } else {
      keys1.forEach((key) => {
        if (event.key.toLowerCase() === key.toLowerCase()) {
          onClickedLetter(key);
        }
      });
      keys2.forEach((key) => {
        if (event.key.toLowerCase() === key.toLowerCase()) {
          onClickedLetter(key);
        }
      });
      keys3.forEach((key) => {
        if (event.key.toLowerCase() === key.toLowerCase()) {
          onClickedLetter(key);
        }
      });
    }
  }, [keys1]);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyboard);

    return () => {
      document.removeEventListener("keydown", handleKeyboard);
    };
  }, [handleKeyboard]);

  return (
    <div className="keyboard-container" onKeyDown={handleKeyboard}>
      <div className="keyboard-container__line1">
        {keys1.map((key) => {
          return <Key keyValue={key} disabled={disabledLetters.includes(key)}/>;
        })}
      </div>
      <div className="keyboard-container__line2">
        {keys2.map((key) => {
          return <Key keyValue={key} disabled={disabledLetters.includes(key)}/>;
        })}
      </div>
      <div className="keyboard-container__line3">
        <Key keyValue={"ENTER"} largeKey />
        {keys3.map((key) => {
          return <Key keyValue={key} disabled={disabledLetters.includes(key)}/>;
        })}
        <Key keyValue={"X"} largeKey />
      </div>
    </div>
  );
};

export default Keyboard;
