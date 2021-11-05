import {
  round,
  greetingInTheGame, questionAnswer,
} from './index.js';

const maxNumber = 25;
const minLength = 5;
const maxLength = 10;

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);
const getPositionPass = (max) => Math.floor(Math.random() * max);
const getRandomInt = () => Math.floor(Math.random() * maxNumber);

const oneSequencesNumbers = (lengthProgr) => {
  const sequences = [];
  const oneElement = getRandomInt();
  const step = getRandomNumber(2, 5);
  for (let i = 0, j = oneElement; i < lengthProgr; i += 1, j += step) {
    sequences.push(j);
  }
  return sequences;
};

const getRandomProgression = () => {
  const arrValues = [];
  for (let i = 0; i < round; i += 1) {
    const lengthProgr = getRandomNumber(minLength, maxLength);
    const sequences = oneSequencesNumbers(lengthProgr);

    const numPosition = getPositionPass(lengthProgr);
    const value = sequences[numPosition];

    sequences[numPosition] = '..';
    const key = sequences.join(' ');

    arrValues.push([key, value.toString()]);
  }
  return arrValues;
};

export default () => {
  greetingInTheGame();
  console.log('What number is missing in the progression?');

  const arrValues = getRandomProgression();
  questionAnswer(arrValues);
};
