import {
  round,
  greetingInTheGame, questionAnswer,
} from './index.js';

const maxNumber = 25;

const getRandomInt = () => Math.floor(Math.random() * maxNumber);

const getRandomTwoNumber = () => {
  const arrValues = [];
  for (let i = 0; i < round; i += 1) {
    let num1 = getRandomInt();
    let num2 = getRandomInt();
    const key = `${num1} ${num2}`;
    while (num1 !== 0 && num2 !== 0) {
      if (num1 > num2) num1 %= num2;
      else num2 %= num1;
    }
    const value = num1 + num2;
    arrValues.push([key, value.toString()]);
  }
  return arrValues;
};

export default () => {
  greetingInTheGame();
  console.log('Find the greatest common divisor of given numbers.');

  const arrValues = getRandomTwoNumber();
  questionAnswer(arrValues);
};
