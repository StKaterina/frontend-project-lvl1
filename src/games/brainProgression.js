import {
  round,
  playGame,
} from '../index.js';

import getRandomInt from '../getRandom.js';

const ruleGame = 'What number is missing in the progression?';
const maxNumber = 25;

const oneSequencesNumbers = (lengthProgr) => {
  const sequences = [];
  const oneElement = getRandomInt(1, maxNumber);
  const step = getRandomInt(2, 5);
  for (let i = 0; i < lengthProgr; i += 1) {
    sequences.push(oneElement + i * step);
  }
  return sequences;
};

const getRandomProgression = () => {
  const arrValues = [];
  for (let i = 0; i < round; i += 1) {
    const lengthProgr = getRandomInt(5, 10);
    const sequences = oneSequencesNumbers(lengthProgr);

    const numPosition = getRandomInt(1, lengthProgr);
    const value = sequences[numPosition];

    sequences[numPosition] = '..';
    const key = sequences.join(' ');

    arrValues.push([key, value.toString()]);
  }
  return arrValues;
};

export default () => {
  const arrValues = getRandomProgression();
  playGame(arrValues, ruleGame);
};
