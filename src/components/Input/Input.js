import React from "react";

function Input({onAddGuess, isGameOver}) {
  const [val, setVal] = React.useState("");
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
    </form>
  );
}

export default Input;
