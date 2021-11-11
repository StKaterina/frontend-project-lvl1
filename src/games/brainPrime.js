import {
  round,
  playGame,
} from '../index.js';

import getRandomInt from '../getRandomInt.js';

const ruleGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

export default () => {
  const roundsData = [];
  for (let i = 0; i < round; i += 1) {
    const correctQuestion = getRandomInt(1, 100);
    const correctAnswer = isPrime(correctQuestion) ? 'yes' : 'no';
    roundsData.push([correctQuestion, correctAnswer]);
  }
  playGame(roundsData, ruleGame);
};
