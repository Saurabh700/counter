import React from "react";
import { useState } from "react";

const Input = ({ TakeInput }) => {
  const [str, setStr] = useState("");

  const handleClick = () => {
    TakeInput(str);
    setStr("");
  };
  return (
    <div>
      <input type="text" value={str} onChange={(e) => setStr(e.target.value)} />
      <button onClick={handleClick}>+</button>
    </div>
  );
};

export default Input;
