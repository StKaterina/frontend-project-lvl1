import {
  round,
  playGame,
} from '../index.js';

import getRandomInt from '../getRandomInt.js';

const ruleGame = 'What is the result of the expression?';
const arrSign = ['+', '-', '*'];

const getRandomSign = () => arrSign[getRandomInt(0, arrSign.length)];

const makeCalc = (num1, sign, num2) => {
  let correctAnswer;
  switch (sign) {
    case '+':
      correctAnswer = num1 + num2;
      break;
    case '-':
      correctAnswer = num1 - num2;
      break;
    case '*':
      correctAnswer = num1 * num2;
      break;
    default: break;
  }
  return correctAnswer;
};

export default () => {
  const roundsData = [];
  for (let i = 0; i < round; i += 1) {
    const num1 = getRandomInt(1, 25);
    const sign = getRandomSign();
    const num2 = getRandomInt(1, 25);
    const correctQuestion = `${num1} ${sign} ${num2}`;
    const correctAnswer = makeCalc(num1, sign, num2);
    roundsData.push([correctQuestion, correctAnswer.toString()]);
  }
  playGame(roundsData, ruleGame);
};
