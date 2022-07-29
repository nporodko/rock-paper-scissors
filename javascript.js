let names = {rock: "Rock", 
             paper: "Paper", 
             scissors: "Scissors"};
const result = document.getElementById('textResult');
const playerScores = document.getElementById('playerScores');
const computerScores = document.getElementById('computerScores');
const buttons = document.querySelectorAll('.button')
let playerWin = 0;
let computerWin = 0;

const getComputerChoice = () => { 
  const arrayNames = Object.values(names);
return arrayNames[Math.floor(Math.random() * arrayNames.length)];
}

function disableButtons() {
  buttons.forEach(elem => {
      elem.disabled = true
  })
}

function playRound (playerSelection) {
  const computerSelection = getComputerChoice();
 
   if ((playerSelection ===  names.rock && computerSelection === names.rock) ||
        (playerSelection ===  names.scissors && computerSelection === names.scissors) ||
        (playerSelection ===  names.paper && computerSelection === names.paper)) {
      result.innerHTML = "It's a tie! " + playerSelection + " ties with " + computerSelection
       }
    else if ((playerSelection ===  names.rock && computerSelection === names.paper) ||
            (playerSelection === names.paper && computerSelection === names.scissors) ||
            (playerSelection === names.scissors && computerSelection === names.rock)) {
        result.innerHTML = "You lost! " + playerSelection + " is beaten by " + computerSelection
        computerScores.innerHTML++;
        computerWin++;
      }
    else if ((playerSelection === names.rock && computerSelection === names.scissors) ||
            (playerSelection === names.paper && computerSelection === names.rock) ||
            (playerSelection === names.scissors && computerSelection === names.paper)) {
        result.innerHTML = "You won! " + playerSelection + " beats " + computerSelection
        playerScores.innerHTML++;
        playerWin++;
      } 
      // count scores 
       if (playerWin === 5 && computerWin < 5) {
        result.innerHTML = "YOU WIN! Refresh the page to play again"
        disableButtons()
      } else if (playerWin < 5 && computerWin === 5) {
        result.innerHTML = "COMPUTER WIN! Refresh the page to play again"
        disableButtons()
      }
    }
