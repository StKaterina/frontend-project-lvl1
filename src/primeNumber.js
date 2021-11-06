import {
  round,
  greetingInTheGame, questionAnswer,
} from './index.js';

const getRandomNumber = () => {
  const arrValues = [];
  for (let i = 0; i < round; i += 1) {
    const key = Math.floor(Math.random() * 100);
    let value;
    if (key % 2 === 0) {
      arrValues.push([key, 'no']);
      // eslint-disable-next-line no-continue
      continue;
    }
    let d = 3;
    while (d * d <= key && key % d !== 0) {
      d += 2;
    }
    if (d * d > key) value = 'yes';
    else value = 'no';
    arrValues.push([key, value]);
  }
  return arrValues;
};

export default () => {
  greetingInTheGame();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  const arrValues = getRandomNumber();
  questionAnswer(arrValues);
};
