import React from "react";
import { range } from "../../utils";
import {checkGuess} from "../../game-helpers";

function Guess({ guess, answer }) {
  const wordLength = 5;
  const lst = guess?.split("") || [];
  const results = checkGuess(guess, answer);
  return (
    <p className="guess">
      {range(0, wordLength).map((el, index) => (
        <span className={`cell${results?.[index].status ? ` ${results?.[index].status}` : ""}`} key={el}>
          {lst[el] ? lst[el] : ""}
        </span>
      ))}
    </p>
  );
}

export default Guess;
