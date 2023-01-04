// alert("Welcome to the Rock, Paper and Scissors games!");
// alert("Please open the console to play the game");

// Starting coding the game

let choices = ["rock", "paper", "scissors"];

function getComputerChoice(){
    let choice = Math.random() * choices.length;
    choice = Math.floor(choice);
    return choices[choice];
}