import {
  numberRounds,
  playGame,
} from '../index.js';

import getRandomInt from '../getRandomInt.js';

const ruleGame = 'What number is missing in the progression?';

const generateProgression = (lengthProgr) => {
  const sequences = [];
  const oneElement = getRandomInt(1, 25);
  const step = getRandomInt(2, 5);
  for (let i = 0; i < lengthProgr; i += 1) {
    sequences.push(oneElement + i * step);
  }
  return sequences;
};

export default () => {
  const roundsData = [];
  for (let i = 0; i < numberRounds; i += 1) {
    const lengthProgr = getRandomInt(5, 10);
    const sequences = generateProgression(lengthProgr);

    const numPosition = getRandomInt(1, lengthProgr);
    const correctAnswer = sequences[numPosition];

    sequences[numPosition] = '..';
    const question = sequences.join(' ');

    roundsData.push([question, correctAnswer.toString()]);
  }
  playGame(roundsData, ruleGame);
};
