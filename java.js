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

rock.addEventListener("click", () => playRound("Rock"));
paper.addEventListener("click", () => playRound("Paper"));
scissors.addEventListener("click", () => playRound("Scissors"));

var outcome = document.querySelector("#outcome")

// Updated playRound function

function playRound(button) {
    var outcome = document.querySelector("#outcome")
    
    humanChoice = button.toLowerCase()[0].toUpperCase() + button.toLowerCase().slice(1);
    computerChoice = getComputerChoice();

    if ((humanChoice === "Paper" && computerChoice === "Rock") || (humanChoice === "Rock" && computerChoice === "Scissors")|| (humanChoice === "Scissors" && computerChoice === "Paper")) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
        outcome.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
        humanScore++;
    } else if (humanChoice === computerChoice) {
        console.log(`Both opponents chose ${humanChoice}, it's a tie!`);  
        outcome.textContent = `Both opponents chose ${humanChoice}, it's a tie!`;
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
        outcome.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
        computerScore++;
    }

}
