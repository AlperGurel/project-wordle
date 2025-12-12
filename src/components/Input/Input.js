import React from "react";

function Input() {
  const [val, setVal] = React.useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(val);
        setVal("");
      }}
      className="guess-input-wrapper"
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
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
