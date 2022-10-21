console.log(`This is a guessing namber game\n`);
const userName = prompt("What is your name");
console.log(`Welcome ${userName}\n\n`);
let points = 0;
let levels = 0;
console.log(`This is level 0`);
for (let i = 2; i <= 10; i++) {
  let trials = 0;
  while (trials <= 3) {
    var randomNumber = Math.floor(Math.random() * i) + 1;
    var guessedNumber = parseInt(
      prompt(`Enter your guess between 1 and ${i}`)
    );
    while (guessedNumber === NaN || guessedNumber > i || guessedNumber < 1) {
      guessedNumber = parseInt(
        prompt(
          `You did not enter a number or the number you entered is less than 1 or greater than ${i}!\nTry again with a correct number between 1 and ${i}`
        )
      );
    }
    if (trials === 3) {
      console.log(
        `You fail to guess the correct number\nThe number was ${randomNumber}\nYou tried to reach at level ${levels}\nYou gained ${points} points, congratulatins!!!\nHope you enjoyed the game\nwe'll be be happy to see you back`
      );
      process.exit();
    }
    else if (guessedNumber === randomNumber) {
      points += 1;
      levels += 1;
      console.log(`Wow! you guessed the number which is ${randomNumber}`);
      break;
    } else {
      console.log(`Wooo! Incorect number! Try again!!!`);
    }
    trials++;
  }

  console.log(`You upgraded to level ${levels}`);
}