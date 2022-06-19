function computerPlay() {
    let randomNo = Math.floor(Math.random() * 3); // 0 1 or 2
    return (randomNo === 0) ? "Rock" : 
    (randomNo === 1) ? "Paper" : 
    (randomNo === 2) ? "Scissors" :
    "Unexpected result. Random number generator likely isn't working.";
}

function playerPlay() {
    let playerChoice = prompt("Pick Rock, Paper or Scissors.");
    playerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1).toLowerCase();
    if (playerChoice !== "Rock" && playerChoice !== "Paper" && playerChoice !== "Scissors") {
        return false;
    }
    return playerChoice;

}

function oneRound() {
    let computerSelection = computerPlay();
    let playerSelection = playerPlay();
    
    console.log("You picked: " + playerSelection);
    console.log("The computer picked: " + computerSelection);

    if (computerSelection === playerSelection) {
        console.log("Tie!");
    } else if ((playerSelection === "Rock" && computerSelection === "Paper") ||
               (playerSelection === "Paper" && computerSelection === "Scissors") ||
               (playerSelection === "Scissors" && computerSelection == "Rock")) {
        console.log("You lose!");
    } else {
        console.log("You win!");
    }
 
}
