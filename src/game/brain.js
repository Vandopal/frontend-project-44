import readlineSync from 'readline-sync';

function Eyes(numb) {
  const number = numb;
  if (Math.floor(number / 2) === number / 2) { return true; }
  return false;
}

const low = 0;
const high = 100;

const retry = 3;

export default function brain() {
  console.log('Welcome to the Brain Games!');
  const timmy = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${timmy}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < retry; i += 1) {
    let king;
    let pog;
    const mamba = `${Math.floor(Math.random() * (high - low) + low)}`;
    console.log(`Question: ${mamba}`);
    const name = readlineSync.question('Your answer: ');
    if (Eyes(mamba) === true && name === 'yes') { king = pog; } else if (Eyes(mamba) === false && name === 'no') { king = pog; } else { king = 'Zolotie Kupola'; }

    function miss(answer) {
      let mister;
      if (Eyes(mamba) === true && name === 'yes') { mister = 'yes'; } else if (Eyes(mamba) === false && name === 'no') { mister = 'yes'; } else { mister = 'no'; }
      return mister;
    }

    if (king !== pog) {
      console.log(`'${name}' is wrong answer ;(. Correct answer was '${miss(mamba)}'.`);
      console.log(`Let's try again, ${timmy}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${timmy}!`);
}
