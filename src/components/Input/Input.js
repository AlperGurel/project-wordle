import React, { useState } from "react";

function Input({ onAddGuess, isGameOver, usedLetters }) {
  console.log(usedLetters)
  const [val, setVal] = React.useState("");
  const chars = [
    "qwertyuiop".toLocaleUpperCase().split(""),
    "asdfghjkl".toLocaleUpperCase().split(""),
    "zxcvbnm".toLocaleUpperCase().split(""),
  ];
  const [pressed, setPressed] = useState([]);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(val);
        onAddGuess(val);
        setVal("");
      }}
      className="guess-input-wrapper"
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        disabled={isGameOver}
        value={val}
        pattern="\w{5,5}"
        onChange={(e) => {
          if (e.target.value.length <= 5) {
            setVal(e.target.value.toLocaleUpperCase());
          }
        }}
      ></input>

      <div className="keyboard">
        {chars.map((row, index) => (
          <div key={index}>
            {row.map((el, index) => (
              <span
                className={`key ${usedLetters[el]}`}
                key={index}
                onClick={() => {
                  if (val.length > 4) {
                    return;
                  }
                  setVal((val) => {
                    return val + el.toUpperCase();
                  });
                  setPressed([...pressed, el.toUpperCase()])
                }}
              >
                {el}
              </span>
            ))}
          </div>
        ))}
      </div>
    </form>
  );
}

export default Input;
