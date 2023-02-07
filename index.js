// Starting coding the game
// links to the img
let imgs = ["https://em-content.zobj.net/thumbs/120/google/350/oncoming-fist_1f44a.png", "https://em-content.zobj.net/thumbs/120/google/350/raised-hand_270b.png", "https://em-content.zobj.net/thumbs/120/google/350/victory-hand_270c-fe0f.png"]
let choices = ["rock", "paper", "scissors"];

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
}

function playRound(playerSelection, computerSelection){
    let player = playerSelection;
    let playerId = document.getElementById("playerChoice");
    playerId.src = idToImg(player);
    if (player === "rock") {
        if (computerSelection === "scissors") {
            return "You Win! Rock beats Scissors";
        } else if (computerSelection === "paper") {
            return "You Lose! Paper beats Rock";
        } else {
            return "It's a tie!";
        }
    } else if (player === "paper") {
        if (computerSelection === "scissors") {
            return "You Lose! Scissors beats paper";
        } else if (computerSelection === "rock") {
            return "You Win! Paper beats Rock";
        } else {
            return "It's a tie!";
        }
    } else if (player === "scissors") {
        if (computerSelection === "rock") {
            return "You Lose! Rock beats Scissors";
        } else if (computerSelection === "paper") {
            return "You Win! Scissors beats paper";
        } else {
            return "It's a tie!"
        }
    }


}

function game(){
    let playerScore = 0;
    let computerScore = 0;
    for(let i = 0; i < 5; i++){
        console.log("Your score is: " + playerScore);
        console.log("The computer score is: " + computerScore);
        // let playerSelection = prompt("Rock, paper or scissors?");
        computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
        console.log(result);
        if (result.slice(0,7) === "You Win"){
            playerScore++;
        } else if (result.slice(0,8) === "You Lose"){
            computerScore++;
        }      

    }

    if(computerScore > playerScore){
        console.log("The computer wins!")
    } else if (playerScore > computerScore){
        console.log("You beat the computer!")
    } else {
        console.log("It's a tie")
    }
}

// game();

