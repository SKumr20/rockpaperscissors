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
const playerSelection = prompt("Enter choice: rock, paper, scissors:- ").toLowerCase()
const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection)
{

    if (playerSelection == "rock")
    {
        if (computerSelection == "paper")
        {
            return "You lost! paper beats rock!"
        }
        else if (computerSelection == "scissors")
        {
            return "You won! rock beats paper!"
        }
        else if (computerSelection == "rock")
        {
            return "It's a tie!!"
        }
    }
    if (playerSelection == "paper")
    {
        if (computerSelection == "paper")
        {
            return "It's a tie!!!"
        }
        else if (computerSelection == "scissors")
        {
            return "You lost! Scissors beats paper!"
        }
        else if (computerSelection == "rock")
        {
            return "You won! Paper beats rock!"
        }
    }
    if (playerSelection == "scissors")
    {
        if (computerSelection == "paper")
        {
            return "You won! scissors beats paper!"
        }
        else if (computerSelection == "scissors")
        {
            return "It's a tie!"
        }
        else if (computerSelection == "rock")
        {
            return "You lost! Rock beats scissors!"
        }
    }
}

console.log(playRound(playerSelection, computerSelection));