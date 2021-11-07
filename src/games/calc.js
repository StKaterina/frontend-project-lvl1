import {
  round,
  getRandomInt,
  playGame,
} from '../index.js';

const minNumber = 1;
const maxNumber = 25;
const arrSign = ['+', '-', '*'];

const getRandomSign = () => arrSign[Math.floor(Math.random() * arrSign.length)];

const getRandomExpression = () => {
  const arrValues = [];
  for (let i = 0; i < round; i += 1) {
    const num1 = getRandomInt(minNumber, maxNumber);
    const sign = getRandomSign();
    const num2 = getRandomInt(minNumber, maxNumber);
    const key = `${num1} ${sign} ${num2}`;
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
    arrValues.push([key, value.toString()]);
  }
  return arrValues;
};

export default () => {
  const ruleGame = 'What is the result of the expression?';
  const arrValues = getRandomExpression();
  playGame(arrValues, ruleGame);
};
