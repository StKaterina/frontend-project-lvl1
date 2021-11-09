import {
  round,
  playGame,
} from '../index.js';

import getRandomInt from '../getRandom.js';

const minNumber = 1;
const maxNumber = 100;

const getRandomNumber = () => {
  const arrValues = [];
  for (let i = 0; i < round; i += 1) {
    const key = getRandomInt(minNumber, maxNumber);
    let value;
    if (key % 2 === 0) value = 'yes';
    else value = 'no';
    arrValues.push([key, value]);
  }
  return arrValues;
};

export default () => {
  const ruleGame = 'Answer "yes" if the number is even, otherwise answer "no".';
  const arrValues = getRandomNumber();
  playGame(arrValues, ruleGame);
};
