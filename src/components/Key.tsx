import React, { useContext } from "react";
import { AppContext } from "../App";

const Key = ({ keyValue, largeKey, disabled }: any) => {
  const { onClickedLetter, onEnter, onDelete }: any = useContext(AppContext);

  const selectLetter = () => {
    if (keyValue === "ENTER") {
      onEnter();
    } else if (keyValue === "X") {
      onDelete();
    } else {
      onClickedLetter(keyValue);
    }
  };

  return (
    <div className="key" id={largeKey ? "large": disabled && "disabled"} onClick={selectLetter}>
      {keyValue}
    </div>
  );
};

export default Key;
