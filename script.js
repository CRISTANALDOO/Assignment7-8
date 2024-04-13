const player1Dice = document.getElementById('player1-dice');
const player2Dice = document.getElementById('player2-dice');
const rollBtn = document.getElementById('roll-btn');
const player1Score = document.getElementById('player1-score');
const player2Score = document.getElementById('player2-score');
const winnerMsg = document.getElementById('winner-msg');

const targetScore = 20;
let player1Points = 0;
let player2Points = 0;

function rollDice() {
  const dice1Value = Math.floor(Math.random() * 6) + 1;
  const dice2Value = Math.floor(Math.random() * 6) + 1;

  player1Dice.src = `dice${dice1Value}.png`;
  player2Dice.src = `dice${dice2Value}.png`;

  const pointsDifference = Math.abs(dice1Value - dice2Value);
  if (dice1Value > dice2Value) {
    player1Points += pointsDifference;
  } else if (dice2Value > dice1Value) {
    player2Points += pointsDifference;
  }

  updateScores();

  if (player1Points >= targetScore) {
    endGame('Player 1');
  } else if (player2Points >= targetScore) {
    endGame('Player 2');
  }
}

function updateScores() {
  player1Score.textContent = `Player 1 Score: ${player1Points}`;
  player2Score.textContent = `Player 2 Score: ${player2Points}`;
}

function endGame(winner) {
  winnerMsg.textContent = `${winner} wins!`;
  rollBtn.disabled = true;
}

rollBtn.addEventListener('click', rollDice);
