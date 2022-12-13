import readlineSync from 'readline-sync';

export default function Main() {
  console.log('Welcome to the Brain Games!');
  const timmy = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${timmy}!`);   
  console.log('What is the result of the expression?');

  let trueCount = 1;
  while (trueCount <= 3) {
  let bigDeal;
  let logic;

  const low = 0;
  const high = 100;

  const mamba1 = `${Math.floor(Math.random() * (high - low) + low)}`;
  const mamba2 = `${Math.floor(Math.random() * (high - low) + low)}`;

  const calc = ["+", "-", "*"];
  function random(calc) {var radious = Math.floor(Math.random() * calc.length);return calc[radious];}

  const sign = random(calc);
  const bigBrain = `${mamba1} ${sign} ${mamba2}`;  
  console.log(`Question: ${bigBrain}`);     
  
  if (sign === '+') {logic = `${(mamba1 * 1) + (mamba2 * 1)}`}
  else if (sign === '*') {logic = `${mamba1 * mamba2}`}
  else {logic = `${mamba1 - mamba2}`}

  const name = readlineSync.question('Your answer: ');

  if (name === logic) {bigDeal = "Correct!"}
  else {return console.log(`'${name}' is wrong answer ;(. Correct answer was '${logic}'.\nLet's try again, ${timmy}!`)}

  if (bigDeal !== "Correct!") {trueCount = 0;}

  console.log(bigDeal);
  trueCount ++;
  }
  console.log (`Congratulations, ${timmy}!`);
}