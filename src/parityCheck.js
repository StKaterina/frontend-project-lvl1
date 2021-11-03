import readlineSyns from 'readline-sync';

const getAnswer = () => readlineSyns.question('Your answer: ');

const getRandomNumber = () => Math.floor(Math.random() * 100);
export default () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSyns.question('May I have your name? ');
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let count = 0;
  while (count < 3) {
    const num = getRandomNumber();
    console.log(`Question: ${num}`);
    const answer = getAnswer();
    if ((num % 2 === 0 && answer === 'yes') || (num % 2 !== 0 && answer === 'no')) {
      console.log('Correct!');
      count += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no')`);
      return;
    }
  }
  console.log(`Congratualaions, ${userName}!`);
};
