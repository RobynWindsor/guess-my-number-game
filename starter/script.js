'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    displayMessage('No Number ☹️');

    // When the player wins
  } else if (guess === secretNumber) {
    displayMessage('Correct Number!');

    // This will reveal the actual secret number after player wins
    document.querySelector('.number').textContent = secretNumber;

    // When player wins, background will change to green and the sizing of the box will double
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // When the player guesses too high and scored is decreased by 1 each time

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high! ' : '📈 Too Low! ');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game. Sad face. ');
      document.querySelector('.score').textContent = 0;
    }
  }
});

// Event Listener for 'Again' Button to restore all values
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start Guessing.....');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
