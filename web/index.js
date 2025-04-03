const choices =["rock","paper","scissors"];
const playerDisplay =document.getElementById("playerDisplay");
const computerDisplay =document.getElementById("computerDisplay");
const resultDisplay =document.getElementById("resultDisplay");
const playerScoreDisplay=document.getElementById("playerScoreDisplay");
const computerScoreDisplay=document.getElementById("computerScoreDisplay");

let playerScore =0;
let computerScore =0;

function playGame(playerChoice){
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    console.log(computerChoice);

    let result = "";
    if (playerChoice === computerChoice) {
        result = "It's a tie!";
    }
    else{
        switch(playerChoice){
            case "rock":
                result=(computerChoice === "scissors") ? "You WIN!" : "You Lose!";
                break;
            case "paper":
                result=(computerChoice === "rock") ? "You WIN!" : "You Lose!";
                break;    
            case "scissors":
                result=(computerChoice === "paper") ? "You WIN!" : "You Lose!";            
                break;
            }
    }
    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greenText","redText")

    switch(result){
        case "You WIN!":
            resultDisplay.classList.add("greenText");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case "You Lose!":
            resultDisplay.classList.add("redText");
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;
        }

}
function restartGame() {
    playerScore = 0;
    computerScore = 0;
    playerScoreDisplay.textContent = "";
    computerScoreDisplay.textContent = "";
    playerDisplay.textContent = "PLAYER: ";
    computerDisplay.textContent = "COMPUTER: ";
    resultDisplay.textContent = "";
    resultDisplay.classList.remove("greenText", "redText");
}