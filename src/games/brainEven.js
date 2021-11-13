import {
  numberRounds,
  playGame,
} from '../index.js';

import getRandomInt from '../getRandomInt.js';

const ruleGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (question) => question % 2 === 0;

export default () => {
  const roundsData = [];
  for (let i = 0; i < numberRounds; i += 1) {
    const question = getRandomInt(1, 100);
    const correctAnswer = isEven(question) ? 'yes' : 'no';
    roundsData.push([question, correctAnswer]);
  }
  playGame(roundsData, ruleGame);
};
