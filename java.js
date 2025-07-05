function getComputerChoice() {
    computerChoice = Math.floor(Math.random() * 100);
    if (computerChoice <= 33) {
        console.log("Rock");
    } else if (computerChoice > 33 && computerChoice<= 66) {
        console.log("Paper");
    } else {
        console.log("Scissors")
    }

    return computerChoice;
}

function getHumanChoice() {
    humanChoice = window.prompt("What will you play?", "Rock, Paper, Scissors");
    
    return humanChoice;
}