import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import Input from "../input/Input";
import UserGuessList from "../UserGuessList/UserGuessList";
import { checkGuess } from "../../game-helpers";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);
  let isGameOver = guesses.length >= 6 || guesses.includes(answer);
  let isWin = guesses.includes(answer);
  const usedLetters = {};
  guesses.forEach((el) => {
    const check = checkGuess(el, answer);
    check.forEach((el) => {
      usedLetters[el.letter] = el.status;
    });
  });
  return (
    <>
      {isGameOver && !isWin && (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </div>
      )}
      {isGameOver && isWin && (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong>3 guesses</strong>.
          </p>
        </div>
      )}
      <UserGuessList guessList={guesses} answer={answer} />
      <Input
        onAddGuess={(guess) => {
          setGuesses([...guesses, guess]);
        }}
        usedLetters={usedLetters}
        isGameOver={isGameOver}
      />
    </>
  );
}

export default Game;
