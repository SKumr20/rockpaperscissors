// Function to randomnly return rock, paper or scissors for a computer

function getComputerChoice() {

    const computerResult = Math.floor(Math.random() * 3)
    if (computerResult == 0)
    {
        return "rock";
    }
    if (computerResult == 1)
    {
        return "paper";
    }
    if (computerResult == 2)
    {
        return "scissors";
    }
}


// Play one round of game

// Declare score variable
let computerScore = 0;
let playerScore = 0;

function playRound(playerSelection, computerSelection)
{
    if (playerSelection == "rock")
    {
        if (computerSelection == "paper")
        {
            computerScore++;
            return "You lost! paper beats rock!";
        }
        else if (computerSelection == "scissors")
        {
            playerScore++;
            return "You won! rock beats paper!";
        }
        else if (computerSelection == "rock")
        {
            return "It's a tie!!";
        }
    }
    if (playerSelection == "paper")
    {
        if (computerSelection == "paper")
        {
            return "It's a tie!!!";
        }
        else if (computerSelection == "scissors")
        {
            computerScore++;
            return "You lost! Scissors beats paper!";
        }
        else if (computerSelection == "rock")
        {
            playerScore++;
            return "You won! Paper beats rock!";
        }
    }
    if (playerSelection == "scissors")
    {
        if (computerSelection == "paper")
        {
            playerScore++;
            return "You won! scissors beats paper!";
        }
        else if (computerSelection == "scissors")
        {
            return "It's a tie!";
        }
        else if (computerSelection == "rock")
        {
            computerScore++;
            return "You lost! Rock beats scissors!";
        }
    }
}


for (let i=0; i<5; i++)
{   
    const playerSelection = prompt("Enter choice: rock, paper, scissors:- ").toLowerCase()
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
}

console.log("The player score is: " + playerScore);
console.log("The computer score is: " + computerScore);
