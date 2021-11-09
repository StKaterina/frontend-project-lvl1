import {
  round,
  playGame,
} from '../index.js';

import getRandomInt from '../getRandom.js';

const ruleGame = 'Answer "yes" if the number is even, otherwise answer "no".';
const maxNumber = 100;

const isEven = (key) => key % 2 === 0;

const getRandomNumber = () => {
  const arrValues = [];
  for (let i = 0; i < round; i += 1) {
    const key = getRandomInt(1, maxNumber);
    const value = isEven(key) ? 'yes' : 'no';
    arrValues.push([key, value]);
  }
  return arrValues;
};

export default () => {
  const arrValues = getRandomNumber();
  playGame(arrValues, ruleGame);
};
