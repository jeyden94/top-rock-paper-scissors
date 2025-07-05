function getComputerChoice() {
    x = Math.floor(Math.random() * 100);
    if (x <= 33) {
        console.log("Rock");
    } else if (x > 33 && x<= 66) {
        console.log("Paper");
    } else {
        console.log("Scissors")
    }
}
