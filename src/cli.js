import readlineSyns from 'readline-sync';

export default () => {
  const userName = readlineSyns.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};
