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

var rock = document.getElementById("rock");
var paper = document.getElementById("paper");
var scissors = document.getElementById("scissors");

var humanScoreElement = document.querySelector("#human-score");
var computerScoreElement = document.querySelector("#computer-score");

rock.addEventListener("click", () => playRound("Rock"));
paper.addEventListener("click", () => playRound("Paper"));
scissors.addEventListener("click", () => playRound("Scissors"));

var outcomeRound = document.querySelector("#outcome")

var outcomeGameHeader = document.createElement("h2");
var outcomeGameDiv = document.querySelector("#outcome");

outcomeGame.className = "game-outcome";

// Updated playRound function

function playRound(button) {
    var outcomeRound = document.querySelector("#outcome")
    
    humanChoice = button.toLowerCase()[0].toUpperCase() + button.toLowerCase().slice(1);
    computerChoice = getComputerChoice();

    if ((humanChoice === "Paper" && computerChoice === "Rock") || (humanChoice === "Rock" && computerChoice === "Scissors")|| (humanChoice === "Scissors" && computerChoice === "Paper")) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
        outcomeRound.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
        humanScore++;
        console.log(humanScore);
        humanScoreElement.textContent = `Human: ${humanScore}`;
        if (humanScore === 5) {
        outcomeGameHeader.textContent = "The Human Wins!";
        outcomeGameDiv.appendChild(outcomeGameHeader); 
        }

    } else if (humanChoice === computerChoice) {
        console.log(`Both opponents chose ${humanChoice}, it's a tie!`);  
        outcomeRound.textContent = `Both opponents chose ${humanChoice}, it's a tie!`;
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
        outcomeRound.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
        computerScore++;
        console.log(computerScore);
        computerScoreElement.textContent = `Computer: ${computerScore}`;
        if (computerScore === 5) {
        outcomeGameHeader.textContent = "The Computer Wins!";
        outcomeGameDiv.appendChild(outcomeGameHeader); 
        }
    }
}
