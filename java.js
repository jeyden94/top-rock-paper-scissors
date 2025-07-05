humanScore = 0;
computerScore = 0;

function getComputerChoice() {
    tempValue = Math.floor(Math.random() * 100);
    if (tempValue <= 33) {
        console.log("Rock");
        computerChoice = "Rock"
    } else if (tempValue > 33 && tempValue<= 66) {
        console.log("Paper");
        computerChoice = "Paper"
    } else {
        console.log("Scissors")
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







// humanScore = 0;
// computerScore = 0;

// tempValue = Math.floor(Math.random() * 100);

// if (tempValue <= 33) {
//     console.log("Rock");
//     computerChoice = "Rock";
// } else if (tempValue > 33 && tempValue<= 66) {
//     console.log("Paper");
//     computerChoice = "Paper";
// } else {
//     console.log("Scissors")
//     computerChoice = "Scissors";
// }

// humanChoice = window.prompt("What will you play?", "Rock, Paper, Scissors");


// humanChoice = humanChoice.toLowerCase()[0].toUpperCase() + humanChoice.toLowerCase().slice(1);
// computerChoice = computerChoice.toLowerCase()[0].toUpperCase() + computerChoice.toLowerCase().slice(1);

// if ((humanChoice === "Paper" && computerChoice === "Rock") || (humanChoice === "Rock" && computerChoice === "Scissors")|| (humanChoice === "Scissors" && computerChoice === "Paper")) {
//     console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
//     humanScore++;
// } else if (humanChoice === computerChoice) {
//     console.log(`Both opponents chose ${humanChoice}, it's a tie!`);
// } else {
//     console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
//     computerScore++;
// } 