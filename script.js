const CHOICES = ["rock", "paper", "scissors"];

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

function game() {
    playerScore = 0;
    compScore = 0;

    for (i = 0; i < 5; i++) {
        const playerChoice = prompt("Please select rock/paper/scissors").toLocaleLowerCase();
        const compChoice = computerPlay();

        let result = playRound(playerChoice, compChoice);
        console.log(result);
        if (result.includes("Tie")) {
          continue;
        } else if (result.includes("Win")) {
          playerScore++;
        } else {
          compScore++;
        }
        console.log(`Current Score: ${playerScore}-${compScore}`)
    }

}

game()