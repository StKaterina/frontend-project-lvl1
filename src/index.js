import readlineSyns from 'readline-sync';

export const round = 3;

export const playGame = (arrValues, ruleGame) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSyns.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(ruleGame);

  /* eslint-disable-next-line */
  for (const [key, value] of arrValues) {
    console.log(`Question: ${key}`);
    const answer = readlineSyns.question('Your answer: ');

    if (value === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${value}')`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
