import React from "react";
import Guess from "../Guess/Guess";
import { range } from "../../utils";
import {NUM_OF_GUESSES_ALLOWED} from "../../constants";

function UserGuessList({ guessList }) {
  return (
    <div className="guess-results">
      {range(0, NUM_OF_GUESSES_ALLOWED).map((el) => <Guess
      key={el}
      guess={guessList[el]}
      />)}
    </div>
  );
}

export default UserGuessList;
