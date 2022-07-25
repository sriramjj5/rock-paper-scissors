function computerPlay() {
    let randomNo = Math.floor(Math.random() * 3); // 0 1 or 2
    return (randomNo === 0) ? "Rock" : 
    (randomNo === 1) ? "Paper" : 
    (randomNo === 2) ? "Scissors" :
    "Unexpected result. Random number generator likely isn't working.";
}

let playerScore;
let computerScore;

function oneRound(playerSelection) {

    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    let computerSelection = computerPlay();
    
    console.log("You picked: " + playerSelection);
    console.log("The computer picked: " + computerSelection);

    if (computerSelection === playerSelection) {
        console.log("Tie!");
    } else if ((playerSelection === "Rock" && computerSelection === "Paper") ||
                (playerSelection === "Paper" && computerSelection === "Scissors") ||
                (playerSelection === "Scissors" && computerSelection == "Rock")) {
        console.log("You lose!");
        computerScore++;
    } else {
        console.log("You win!");
        playerScore++;
    }

}


const rock = document.querySelector("#rock");
rock.addEventListener('click', () => {
    oneRound("rock");
}); 

const paper = document.querySelector("#paper");
paper.addEventListener('click', () => {
    oneRound("paper");
});

const scissors = document.querySelector("#scissors");
scissors.addEventListener('click', () => {
    oneRound("scissors");
})

const scores = document.querySelector("#scores");
