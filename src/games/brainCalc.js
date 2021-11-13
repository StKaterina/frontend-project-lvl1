import {
  numberRounds,
  playGame,
} from '../index.js';

import getRandomInt from '../getRandomInt.js';

const ruleGame = 'What is the result of the expression?';
const arrSign = ['+', '-', '*'];

const getRandomSign = () => arrSign[getRandomInt(0, arrSign.length)];

const makeCalc = (num1, sign, num2) => {
  switch (sign) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default: return null;
  }
};

export default () => {
  const roundsData = [];
  for (let i = 0; i < numberRounds; i += 1) {
    const num1 = getRandomInt(1, 25);
    const sign = getRandomSign();
    const num2 = getRandomInt(1, 25);
    const question = `${num1} ${sign} ${num2}`;
    const correctAnswer = makeCalc(num1, sign, num2);
    roundsData.push([question, correctAnswer.toString()]);
  }
  playGame(roundsData, ruleGame);
};
