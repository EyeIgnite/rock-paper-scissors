let playerScore = 0;
let computerScore = 0;

const playerWinRound = "Player wins this round!";
const computerWinRound = "Computer wins this round!";

const choices = ["rock", "paper", "scissors"];
const btns = document.querySelectorAll("button");

const playerChoice = document.querySelector("#choice-item1");
const computerChoice = document.querySelector("#choice-item2")
const roundResult = document.querySelector("#round-result");
const userScore = document.querySelector("#user-score");
const cpuScore = document.querySelector("#cpu-score");
const winner = document.querySelector("#game-winner");

btns.forEach(button => button.addEventListener("click", (e) => {
  if (winner.textContent !== "") {
    reset();
  }
  const playerSelection = e.target.textContent.toLowerCase();
  const computerSelection = getComputerChoice();
  const result = playRound(playerSelection, computerSelection);
  playerChoice.textContent = `${playerSelection.charAt(0).toUpperCase() + 
  playerSelection.slice(1)}`;
  computerChoice.textContent = `${computerSelection.charAt(0).toUpperCase() + 
  computerSelection.slice(1)}`;
  roundResult.textContent = result;
  userScore.textContent = playerScore;
  cpuScore.textContent = computerScore;
  checkWinner();
}));

function getComputerChoice() {
  let randomChoice = choices[Math.floor(Math.random() * choices.length)];
  return randomChoice;
}


function checkWinner() {
  if (playerScore === 5) {
    return winner.textContent = "Player has won the game, congrats!";
  }
  else if (computerScore === 5) {
    return winner.textContent = "Computer has won the game, congrats!";
  }
}



function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return `Draw! Both players picked ${playerSelection}!`;
  }
  else if (
    playerSelection === "rock" && computerSelection === "scissors" || 
    playerSelection === "paper" && computerSelection === "rock" || 
    playerSelection === "scissors" && computerSelection === "paper"
  ) {
    playerScore++;
    return playerWinRound + ` ${playerSelection.charAt(0).toUpperCase() + 
    playerSelection.slice(1)} beats ${computerSelection}!`;
  }
  else {
    computerScore++;
    return computerWinRound + ` ${computerSelection.charAt(0).toUpperCase() + 
    computerSelection.slice(1)} beats ${playerSelection}!`;
  }
}

function reset() {
  playerScore = 0;
  computerScore = 0;
  userScore.textContent = "Player's score is: " + playerScore;
  cpuScore.textContent = "Computer's score is: " + computerScore;
  winner.textContent = "";
}