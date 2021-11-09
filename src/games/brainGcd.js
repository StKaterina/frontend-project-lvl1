import {
  round,
  playGame,
} from '../index.js';

import getRandomInt from '../getRandom.js';

const ruleGame = 'Find the greatest common divisor of given numbers.';
const maxNumber = 25;

const getNOD = (num1, num2) => {
  if (num2 === 0) return num1;
  return getNOD(num2, num1 % num2);
};

const getRandomTwoNumber = () => {
  const arrValues = [];
  for (let i = 0; i < round; i += 1) {
    const num1 = getRandomInt(1, maxNumber);
    const num2 = getRandomInt(1, maxNumber);
    const key = `${num1} ${num2}`;
    const value = String(getNOD(num1, num2));
    arrValues.push([key, value.toString()]);
  }
  return arrValues;
};

export default () => {
  const arrValues = getRandomTwoNumber();
  playGame(arrValues, ruleGame);
};
