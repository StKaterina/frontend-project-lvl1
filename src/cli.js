import readlineSyns from 'readline-sync';

export const round = 3;

let userName = '';

export const greetingInTheGame = () => {
  console.log('Welcome to the Brain Games!');
  userName = readlineSyns.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};

const getAnswer = () => readlineSyns.question('Your answer: ');

export const questionAnswer = (arrValues) => {
  /* eslint-disable-next-line */
  for (const [key, value] of arrValues) {
    console.log(`Question: ${key}`);
    const answer = getAnswer();
    if (value === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${value}')`);
      return;
    }
  }
};

export const winTheGame = () => {
  console.log(`Congratualaions, ${userName}!`);
};
