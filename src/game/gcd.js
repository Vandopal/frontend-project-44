import readlineSync from 'readline-sync';

// eslint-disable-next-line consistent-return
function smurf() {
  console.log('Welcome to the Brain Games!');
  const timmy = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${timmy}!`);
  console.log('Find the greatest common divisor of given numbers.');

  let trueCount = 1;
  while (trueCount <= 3) {
    // eslint-disable-next-line no-inner-declarations
    function exampleGCD(a, b) {
      if (b === 0) {
        return a;
      }
      return exampleGCD(b, a % b);
    }

    let logic;

    const min = 0;
    const max = 100;

    const mamba1 = `${Math.floor(Math.random() * (max - min) + min)}`;
    const mamba2 = `${Math.floor(Math.random() * (max - min) + min)}`;

    console.log(`Question: ${mamba1} ${mamba2}`);

    const userAnsw = readlineSync.question('Your answer: ');

    if (userAnsw === `${exampleGCD(mamba1, mamba2)}`) { logic = 'Correct!'; } else if (userAnsw !== `${exampleGCD(mamba1, mamba2)}`) {
      console.log(`'${userAnsw}' is wrong answer ;(. Correct answer was '${exampleGCD(mamba1, mamba2)}'.`);
      return console.log(`Let's try again, ${timmy}`);
    }

    if (logic !== 'Correct!') { trueCount = 0; }
    console.log(logic);
    trueCount += 1;
  }
  console.log(`Congratulations, ${timmy}!`);
}
smurf();
