import readlineSync from 'readline-sync';

const getRandomNumber = (min, max = 100) => Math.floor(min + Math.random() * (max + 1 - min));

const description = 'What number is missing in the progression?';

const retry = 3;

// eslint-disable-next-line no-shadow
const runGame = (description, generateRound) => {
  console.log('Welcome to the Brain Games!');
  const timmy = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${timmy}!`);
  console.log(description);

  for (let i = 0; i < retry; i += 1) {
    const [quest, another] = generateRound(i);
    console.log(`Question: ${quest}`);
    const name = readlineSync.question('Your answer: ');

    if (name !== another) {
      console.log(`'${name}' is wrong answer;(. Correct answer was '${another}'`);
      console.log(`Let's try again, ${timmy}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${timmy}!`);
};

const progress = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    const number = start + step * i;
    progression.push(number);
  }
  return progression;
};

const generateRound = () => {
  const start = getRandomNumber(0, 100);
  const length = getRandomNumber(5, 10);
  const going = getRandomNumber(2, 6);
  const hiddencard = getRandomNumber(0, length - 1);
  const progression = progress(start, going, length);
  const answer = progression[hiddencard];
  progression[hiddencard] = '..';
  const question = progression.join(' ');
  return [question, String(answer)];
};

export default () => runGame(description, generateRound);
