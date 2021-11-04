import {
  round,
  greetingInTheGame, questionAnswer, winTheGame,
} from './cli.js';

const getRandomNumber = () => {
  const arrValues = [];
  for (let i = 0; i < round; i += 1) {
    const key = Math.floor(Math.random() * 100);
    let value;
    if (key % 2 === 0) value = 'yes';
    else value = 'no';
    arrValues.push([key, value]);
  }
  return arrValues;
};

export default () => {
  greetingInTheGame();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const arrValues = getRandomNumber();
  questionAnswer(arrValues);
  winTheGame();
};
