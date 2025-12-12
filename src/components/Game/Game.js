import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import Input from "../input/Input";
import UserGuessList from "../UserGuessList/UserGuessList";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([])
  return (
    <>
      <p>Put a game here!</p>
      <UserGuessList guessList={guesses}/>
      <Input onAddGuess={(guess)=>{
        setGuesses([...guesses, guess])
      }}/>
    </>
  );
}

export default Game;
