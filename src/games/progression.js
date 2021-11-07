import {
  round,
  getRandomInt,
  playGame,
} from '../index.js';

const minNumber = 1;
const maxNumber = 25;

const minLength = 5;
const maxLength = 10;

const minStep = 2;
const maxStep = 5;

const oneSequencesNumbers = (lengthProgr) => {
  const sequences = [];
  const oneElement = getRandomInt(minNumber, maxNumber);
  const step = getRandomInt(minStep, maxStep);
  for (let i = 0, j = oneElement; i < lengthProgr; i += 1, j += step) {
    sequences.push(j);
  }
  return sequences;
};

const getRandomProgression = () => {
  const arrValues = [];
  for (let i = 0; i < round; i += 1) {
    const lengthProgr = getRandomInt(minLength, maxLength);
    const sequences = oneSequencesNumbers(lengthProgr);

    const numPosition = getRandomInt(minNumber, lengthProgr);
    const value = sequences[numPosition];

    sequences[numPosition] = '..';
    const key = sequences.join(' ');

    arrValues.push([key, value.toString()]);
  }
  return arrValues;
};

export default () => {
  const ruleGame = 'What number is missing in the progression?';
  const arrValues = getRandomProgression();
  playGame(arrValues, ruleGame);
};
