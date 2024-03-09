// For future revision
// function getComputerChoice(){
//     const choices = ['rock', 'paper', 'scissor'];
//     const randomIndex = Math.floor(Math.random() * choices.length);
//     return choices[randomIndex];
// }

function getComputerSelection() {
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    if (computerChoice === 1) {
        return "Rock";
    } else if (computerChoice === 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function getPlayerSelection() {
    let userChoice = prompt(`Choose Rock, Paper or Scissor`);
    if (userChoice.toLowerCase() !== "rock"
        || userChoice.toLowerCase() !== "paper"
        || userChoice.toLowerCase() !== "scissors") {
        do {
            let userChoice = prompt(`Wrong input! Choose Rock, Paper or Scissor`);
        } while (userChoice.toLowerCase() == ! "rock"
        || userChoice.toLowerCase() !== "paper"
        || userChoice.toLowerCase() !== "scissors"
        || userChoice !== null);
    }
    return userChoice.toLowerCase();
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection.toLowerCase()) {
        return "Draw!";
    } else if ((playerSelection === "rock" && computerSelection === "Scissors")
        || (playerSelection === "paper" && computerSelection === "Rock")
        || (playerSelection === "scissors" && computerSelection === "Paper")) {
        let capital = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
        playerScore++;
        return `You Win! ${capital} beats ${computerSelection}`;
    } else {
        const capital = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
        computerScore++;
        return `You Lose! ${computerSelection} beats ${capital}`;
    }
}

function playGame() {
    for (let i = 1; i <= 5; i++) {
        console.log(i);
        const computerSelection = getComputerSelection();
        const playerSelection = getPlayerSelection();
        console.log(playRound(playerSelection, computerSelection));
    }
    winner(playerScore, computerScore);
}

// Can be improved by using .include() function by checking if string has Won/Lose words in it.
function winner(playerScore, computerScore) {
    if (playerScore > computerScore) {
        console.log(`You win, with score ${playerScore}:${computerScore}!`);
    } else if (playerScore < computerScore) {
        console.log(`You lose, with score ${playerScore}:${computerScore}!`);
    } else {
        console.log(`Draw!`);
    }
}

let playerScore = 0;
let computerScore = 0;

playGame();