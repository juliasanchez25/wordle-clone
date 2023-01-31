import React, { useContext } from "react";
import { AppContext } from "../App";

const Key = ({ keyValue, largeKey }: any) => {
  const { onSelectLetter, onEnter, onDelete }: any = useContext(AppContext);

  const selectLetter = () => {
    if (keyValue === "ENTER") {
      onEnter();
    } else if (keyValue === "DELETE") {
      onDelete();
    } else {
      onSelectLetter(keyValue);
    }
  };

  return (
    <div className="key" id={largeKey && "large"} onClick={selectLetter}>
      {keyValue}
    </div>
  );
};

export default Key;
