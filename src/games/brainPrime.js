import {
  round,
  playGame,
} from '../index.js';

import getRandomInt from '../getRandom.js';

const ruleGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const maxNumber = 100;

const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const getRandomNumber = () => {
  const arrValues = [];
  for (let i = 0; i < round; i += 1) {
    const key = getRandomInt(1, maxNumber);
    const value = isPrime(key) ? 'yes' : 'no';
    arrValues.push([key, value]);
  }
  return arrValues;
};

export default () => {
  const arrValues = getRandomNumber();
  playGame(arrValues, ruleGame);
};
