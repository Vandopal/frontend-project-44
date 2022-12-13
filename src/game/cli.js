import readlineSync from 'readline-sync';

 export default function cli() {
  console.log('Welcome to the Brain Games!');
  const timmy = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${timmy}!`);
};