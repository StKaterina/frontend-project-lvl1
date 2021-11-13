import {
  numberRounds,
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
  for (let i = 0; i < numberRounds; i += 1) {
    const question = getRandomInt(1, 100);
    const correctAnswer = isPrime(question) ? 'yes' : 'no';
    roundsData.push([question, correctAnswer]);
  }
  playGame(roundsData, ruleGame);
};
