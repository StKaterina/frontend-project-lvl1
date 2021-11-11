import {
  round,
  playGame,
} from '../index.js';

import getRandomInt from '../getRandomInt.js';

const ruleGame = 'Find the greatest common divisor of given numbers.';

const getNOD = (a, b) => (b === 0 ? a : getNOD(b, a % b));

export default () => {
  const roundsData = [];
  for (let i = 0; i < round; i += 1) {
    const num1 = getRandomInt(1, 25);
    const num2 = getRandomInt(1, 25);
    const correctQuestion = `${num1} ${num2}`;
    const correctAnswer = String(getNOD(num1, num2));
    roundsData.push([correctQuestion, correctAnswer.toString()]);
  }
  playGame(roundsData, ruleGame);
};
