#!/usr/bin/env node
import readlineSync from 'readline-sync';

// eslint-disable-next-line max-len
const arithmeticProgression = (n, lim) => Array.from({ length: Math.ceil(lim / n) }, (_, i) => (i + 1) * n);// https://github.com/30-seconds/30-seconds-of-code/blob/master/snippets/arithmeticProgression.md

export default function Main() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What number is missing in the progression?');
  let rounds = 1;
  while (rounds <= 3) {
    // eslint-disable-next-line max-len
    const progression = arithmeticProgression(Math.floor(Math.random() * (20 - 10)) + 2, Math.floor(Math.random() * (200 - 50)) + 50);
    const trueNumber = progression[3];
    progression[3] = '..';
    console.log(`Question: ${progression.join(' ')}`);
    const userAnswer = readlineSync.question('You answer: ');
    if (Number(userAnswer) !== Number(trueNumber)) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${trueNumber}'.`);
      return console.log(`Let's try again, ${name}!`);
    }
    rounds += 1;
    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
}

Main();
