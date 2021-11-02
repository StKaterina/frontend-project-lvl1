import readlineSyns from 'readline-sync';

export const findTheName = () => {
	var userName = readlineSyns.question('May I have your name? ');
	console.log('Hello, ' + userName + '!');
};

