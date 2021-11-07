import {
  round,
  getRandomInt,
  playGame,
} from '../index.js';

const minNumber = 1;
const maxNumber = 25;

const getRandomTwoNumber = () => {
  const arrValues = [];
  for (let i = 0; i < round; i += 1) {
    let num1 = getRandomInt(minNumber, maxNumber);
    let num2 = getRandomInt(minNumber, maxNumber);
    const key = `${num1} ${num2}`;
    while (num1 !== 0 && num2 !== 0) {
      if (num1 > num2) num1 %= num2;
      else num2 %= num1;
    }
    const value = num1 + num2;
    arrValues.push([key, value.toString()]);
  }
  return arrValues;
};

export default () => {
  const ruleGame = 'Find the greatest common divisor of given numbers.';
  const arrValues = getRandomTwoNumber();
  playGame(arrValues, ruleGame);
};
