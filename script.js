const CHOICES = ["rock", "paper", "scissors"];
let playerScore = 0;
let compScore = 0;
let isGameOver = false;

const container = document.querySelector('#container');
const resultText = document.createElement('p');
const score = document.createElement('p');
const winner = document.createElement('p');
const playAgainBtn = document.createElement('button');
playAgainBtn.textContent = 'Play Again';
playAgainBtn.hidden = true;

function computerPlay() {
    return CHOICES[Math.floor(Math.random() * CHOICES.length)]
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Tie!";
    } 
    
    if (playerSelection === "rock" && computerSelection === "paper") {
        return "You Lose! Paper beats rock!";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You Win! Rock beats scissors!";
    }

    if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You Lose! Scissors beats paper!";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You Win! Paper beats rock!";
    }

    if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You Lose! Rock beats scissors!";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You Win! Scissors beats paper!";
    }
}

function disableButtons() {
    CHOICES.forEach(button => document.getElementById(button).disabled = true);
}

function enableButtons() {
    CHOICES.forEach(button => document.getElementById(button).disabled = false);
}

function playAgain() {
  playAgainBtn.hidden = false;
  playAgainBtn.addEventListener('click', () => {
    enableButtons();
    playerScore = 0;
    compScore = 0;
    resultText.textContent = '';
    score.textContent = '';
    winner.textContent = '';
    isGameOver = false;
    playAgainBtn.hidden = true;
  });

}

function game() {
    const buttons = document.querySelectorAll('button');

    buttons.forEach((button) => {
      button.addEventListener('click', () => {
        const playerChoice = button.id;
        const compChoice = computerPlay();

        let result = playRound(playerChoice, compChoice);
        resultText.textContent = result;

        if (result.includes('Tie')) {
          // Do nothing
        } else if (result.includes("Win")) {
          playerScore++;
        } else {
          compScore++;
        }
        score.textContent = `Score: ${playerScore}-${compScore}`;

        if (playerScore == 5) {
          winner.textContent = 'You won the game!';
          disableButtons();
          isGameOver = true;
        }
      
        if (compScore == 5) {
          winner.textContent = 'Computer won the game!';
          disableButtons();
          isGameOver = true;
        }

        winner.setAttribute('style', 'color: red; font-size: 20px; font-weight: 600');

        container.appendChild(resultText);
        container.appendChild(score);
        container.appendChild(winner);

        if (isGameOver) {
          playAgain();
        }
      });
    });

    container.appendChild(playAgainBtn);
}

game()