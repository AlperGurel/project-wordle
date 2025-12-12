import React from "react";

function UserGuessList({ guessList }) {
  return (
    <div className="guess-results">
      {guessList.map((el, index) => (
        <p className="guess" key={index}>
          {el}
        </p>
      ))}
    </div>
  );
}

export default UserGuessList;
