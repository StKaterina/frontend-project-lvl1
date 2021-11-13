import readlineSyns from 'readline-sync';

export default () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSyns.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};
