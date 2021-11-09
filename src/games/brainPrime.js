import {
  round,
  playGame,
} from '../index.js';

import getRandomInt from '../getRandom.js';

const minNumber = 1;
const maxNumber = 100;

const isPrime = (num) => {
  if (num < 2) return false;
  if (num % 2 === 0) return false;
  let d = 3;
  while (d * d <= num && num % d !== 0) d += 2;
  return d * d > num;
};

const getRandomNumber = () => {
  const arrValues = [];
  for (let i = 0; i < round; i += 1) {
    const key = getRandomInt(minNumber, maxNumber);
    const value = isPrime(key) ? 'yes' : 'no';
    arrValues.push([key, value]);
  }
  return arrValues;
};

export default () => {
  const ruleGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const arrValues = getRandomNumber();
  playGame(arrValues, ruleGame);
};
