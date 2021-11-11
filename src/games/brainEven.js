import {
  round,
  playGame,
} from '../index.js';

import getRandomInt from '../getRandomInt.js';

const ruleGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (correctQuestion) => correctQuestion % 2 === 0;

export default () => {
  const roundsData = [];
  for (let i = 0; i < round; i += 1) {
    const correctQuestion = getRandomInt(1, 100);
    const correctAnswer = isEven(correctQuestion) ? 'yes' : 'no';
    roundsData.push([correctQuestion, correctAnswer]);
  }
  playGame(roundsData, ruleGame);
};
