import React from 'react';
import { range } from '../../utils';

function Guess({guess}) {
  const wordLength = 5;
  const lst = guess?.split("") || [];
  return <p className='guess'>
    {range(0, wordLength).map((el) => <span className="cell" key={el}>{lst[el] ? lst[el] : ""}</span>)}
  </p>;
}

export default Guess;
