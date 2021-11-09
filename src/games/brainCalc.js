import {
  round,
  playGame,
} from '../index.js';

import getRandomInt from '../getRandom.js';

const ruleGame = 'What is the result of the expression?';
const maxNumber = 25;
const arrSign = ['+', '-', '*'];

const getRandomSign = () => arrSign[getRandomInt(0, arrSign.length)];

const isCalc = (num1, sign, num2) => {
  let value;
  switch (sign) {
    case '+':
      value = num1 + num2;
      break;
    case '-':
      value = num1 - num2;
      break;
    case '*':
      value = num1 * num2;
      break;
    default: break;
  }
  return value;
};

const getRandomExpression = () => {
  const arrValues = [];
  for (let i = 0; i < round; i += 1) {
    const num1 = getRandomInt(1, maxNumber);
    const sign = getRandomSign();
    const num2 = getRandomInt(1, maxNumber);
    const key = `${num1} ${sign} ${num2}`;
    const value = isCalc(num1, sign, num2);
    arrValues.push([key, value.toString()]);
  }
  return arrValues;
};

export default () => {
  const arrValues = getRandomExpression();
  playGame(arrValues, ruleGame);
};
