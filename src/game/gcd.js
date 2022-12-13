import readlineSync from 'readline-sync';


export default function Main() {
  console.log('Welcome to the Brain Games!');
  const timmy = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${timmy}!`);   
  console.log('Find the greatest common divisor of given numbers.');

  let trueCount = 1;
  while (trueCount <= 3) {
    function gcd(a, b) {
      if (b === 0) {
      return a
      }
      return gcd(b, a % b)
      }

  let bigDeal;
  let result;


  const low = 0;
  const high = 100;
  const mamba1 = `${Math.floor(Math.random() * (high - low) + low)}`;
  const mamba2 = `${Math.floor(Math.random() * (high - low) + low)}`;

  console.log(`Question: ${mamba1} ${mamba2}`);

  const name = readlineSync.question('Your answer: ');


  if (name === `${gcd(mamba1, mamba2)}`) {result = 'Correct!'}
  else if (name !== `${gcd(mamba1, mamba2)}`){return console.log(`'${name}' is wrong answer ;(. Correct answer was '${gcd(mamba1, mamba2)}'.\nLet's try again, ${timmy}!`)}

  if (result !== "Correct!") {trueCount = 0;}

  console.log(result);
  trueCount += 1;
  }
  console.log (`Congratulations, ${timmy}!`);
}