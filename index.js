// alert("Welcome to the Rock, Paper and Scissors games!");
// alert("Please open the console to play the game");

// Starting coding the game

let choices = ["rock", "paper", "scissors"];

function getComputerChoice(){
    let choice = Math.random() * choices.length;
    choice = Math.floor(choice);
    return choices[choice];
}

function playRound(playerSelection, computerSelection){
    let player = playerSelection.toLowerCase();


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
        let playerSelection = prompt("Rock, paper or scissors?");
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

game();

