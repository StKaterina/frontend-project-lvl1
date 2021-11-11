import readlineSyns from 'readline-sync';

export const round = 3;

export const playGame = (roundsData, ruleGame) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSyns.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(ruleGame);

  /* eslint-disable-next-line */
  for (const [correctQuestion, correctAnswer] of roundsData) {
    console.log(`Question: ${correctQuestion}`);
    const answerUser = readlineSyns.question('Your answer: ');

    if (correctAnswer !== answerUser) {
      console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${correctAnswer}')`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};
