function computerPlay() {
    let randomNo = Math.floor(Math.random() * 3); // 0 1 or 2
    return (randomNo === 0) ? "Rock" : 
    (randomNo === 1) ? "Paper" : 
    (randomNo === 2) ? "Scissors" :
    "Unexpected result. Random number generator likely isn't working.";
}

let playerScore = 0;
let computerScore = 0;

const choices = document.querySelector("#choices");

function oneRound(playerSelection) {

    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    let computerSelection = computerPlay();
    
    let choiceString = "You picked: " + playerSelection + ", The computer picked: " + computerSelection;

    if (computerSelection === playerSelection) {
        choiceString += ". Tie!";
    } else if ((playerSelection === "Rock" && computerSelection === "Paper") ||
                (playerSelection === "Paper" && computerSelection === "Scissors") ||
                (playerSelection === "Scissors" && computerSelection == "Rock")) {
        choiceString += ". You lose!";
        computerScore++;
    } else {
        choiceString += ". You win!";
        playerScore++;
    }

    editScores();
    choices.textContent = choiceString;


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

function editScores() {
    let text = "Computer Score: " + computerScore + ", Your Score: " + playerScore;
    if (computerScore == 5) {
        text += ". Computer hit 5 points! Computer wins!";
        playerScore = 0;
        computerScore = 0;
    } else if (playerScore == 5) {
        text += ". You hit 5 points! You win!"
        playerScore = 0;
        computerScore = 0;
    }
    scores.textContent = text;
}

