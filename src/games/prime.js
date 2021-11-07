import {
  round,
  getRandomInt,
  playGame,
} from '../index.js';

const minNumber = 1;
const maxNumber = 100;

const getRandomNumber = () => {
  const arrValues = [];
  for (let i = 0; i < round; i += 1) {
    const key = getRandomInt(minNumber, maxNumber);
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
  const ruleGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const arrValues = getRandomNumber();
  playGame(arrValues, ruleGame);
};
