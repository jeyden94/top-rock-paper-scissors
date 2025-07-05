humanScore = 0;
computerScore = 0;

function getComputerChoice() {
    tempValue = Math.floor(Math.random() * 100);
    if (tempValue <= 33) {
        computerChoice = "Rock"
    } else if (tempValue > 33 && tempValue<= 66) {
        computerChoice = "Paper"
    } else {
        computerChoice = "Scissors"
    }

    return computerChoice;
}

function getHumanChoice() {
    humanChoice = window.prompt("What will you play?", "Rock, Paper, Scissors");
    
    return humanChoice;
}

function capitalize(string) {
    return string.toLowerCase()[0].toUpperCase() + string.toLowerCase().slice(1);
}

function playRound(humanChoice, computerChoice) {
    capitalize(humanChoice);
    capitalize(computerChoice);
    if ((humanChoice === "Paper" && computerChoice === "Rock") || (humanChoice === "Rock" && computerChoice === "Scissors")|| (humanChoice === "Scissors" && computerChoice === "Paper")) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
        humanScore++;
    } else if (humanChoice === computerChoice) {
        console.log(`Both opponents chose ${humanChoice}, it's a tie!`);     
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
        computerScore++;
    }

}


function playGame() {
 
humanScore = 0;
computerScore = 0;

function playRound(humanChoice, computerChoice) {
    capitalize(humanChoice);
    capitalize(computerChoice);
    if ((humanChoice === "Paper" && computerChoice === "Rock") || (humanChoice === "Rock" && computerChoice === "Scissors")|| (humanChoice === "Scissors" && computerChoice === "Paper")) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
        humanScore++;
    } else if (humanChoice === computerChoice) {
        console.log(`Both opponents chose ${humanChoice}, it's a tie!`);     
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
        computerScore++;
    }

}

for (i = 0; i < 5; i++) {
    computerSelection = getComputerChoice();
    humanSelection = getHumanChoice();

    playRound(humanSelection, computerSelection);

}

    console.log(`Final Score: ${humanScore}-${computerScore}`);

}
