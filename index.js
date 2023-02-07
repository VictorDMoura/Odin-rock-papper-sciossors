// Starting coding the game
// links to the img
let imgs = ["https://em-content.zobj.net/thumbs/120/google/350/oncoming-fist_1f44a.png", "https://em-content.zobj.net/thumbs/120/google/350/raised-hand_270b.png", "https://em-content.zobj.net/thumbs/120/google/350/victory-hand_270c-fe0f.png"]
let choices = ["rock", "paper", "scissors"];

let playerScore = 0;
let computerScore = 0;

for (const button of document.getElementsByTagName("button")){
    button.addEventListener("click", function () {
        playRound(this.id, getComputerChoice());
    });
}


function idToImg(choice){
    switch (choice) {
        case "rock":
            return imgs[0];
            break;
        case "paper":
            return imgs[1];
            break;
        case "scissors":
            return imgs[2];
            break;    
        default:
            break;
    }
}


function getComputerChoice(){
    let choice = Math.random() * choices.length;
    choice = Math.floor(choice);
    let computerId = document.getElementById("computerChoice");
    computerId.src = idToImg(choices[choice]);
    return choices[choice];
}

function playRound(playerSelection, computerSelection){
    let player = playerSelection;
    let playerId = document.getElementById("playerChoice");
    let message = document.getElementById("message");

    let computerScoreId = document.getElementById("computerScore");
    let playerScoreId = document.getElementById("playerScore");
    

    message.removeAttribute("class");
    playerId.src = idToImg(player);

    if (playerScore >= 5 || computerScore >= 5){
        message.innerText = "Game is Over! Please refresh the page";
    } else  if (player === "rock") {
        if (computerSelection === "scissors") {
            playerScore++;
            message.innerText = "You Win!";
            message.classList = "green";
            playerScoreId.innerText = playerScore;

        } else if (computerSelection === "paper") {
            message.innerText = "You loosed";
            message.classList = "red";
            computerScore++;
            computerScoreId.innerText = computerScore;
        } else {
            message.innerText = "It's a Tie!";
        }
    } else if (player === "paper") {
        if (computerSelection === "scissors") {
            message.innerText = "You loose";
            message.classList = "red";
            computerScore++;
            computerScoreId.innerText = computerScore;
        } else if (computerSelection === "rock") {
            message.innerText = "You Win!";
            message.classList = "green";
            playerScore++;
            playerScoreId.innerText = playerScore;
        } else {
            message.innerText = "It's a Tie!";
        }
    } else if (player === "scissors") {
        if (computerSelection === "rock") {
            message.innerText = "You loosed";
            message.classList = "red";
            computerScore++;
            computerScoreId.innerText = computerScore;
        } else if (computerSelection === "paper") {
            message.innerText = "You Win!";
            message.classList = "green";
            playerScore++;
            playerScoreId.innerText = playerScore;
        } else {
            message.innerText = "It's a Tie!";
        }
    }
}



