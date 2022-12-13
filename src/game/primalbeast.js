import readlineSync from 'readline-sync';

function miss(answer){
  let mister;
   if (answer === 'no') {mister = 'yes'}
   else {mister = 'no'}
   return mister
  };

  function yes(ans){
    let mist;
     if (ans === 'yes') {mist = 'yes'}
     else {mist = 'no'}
     return mist
  };

  const Prime = num => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i === 0) return false; 
    return num > 1;
  }

export default function Main() {
  const timmy = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${timmy}!`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  let trueCount = 1;
  while (trueCount <= 3) {
  let biglogic;
  let bigDeal;

  const low = 0;
  const high = 15;

  const mamba1 = `${Math.floor(Math.random() * (high - low) + low)}`;
  
  console.log(`Question: ${mamba1}`);
  const name = readlineSync.question('Your answer: ');
    
  function fire (n) {
    if (n === 'yes') {return true}
    else {return false}
  }

  if (name === 'yes' && fire(name) === Prime(mamba1)) {biglogic = "Correct!";}
  else if (name === 'no' && fire(name) === Prime(mamba1)) {biglogic = "Correct!";}
  else {return console.log(`'${yes(name)}' is wrong answer ;(. Correct answer was '${miss(name)}'.\nLet's try again, ${timmy}!`)}

  if (biglogic !== "Correct!") {trueCount = 0;}

  console.log(biglogic);
  trueCount ++;
  }
  console.log(`Congratulations, ${timmy}!`);
}