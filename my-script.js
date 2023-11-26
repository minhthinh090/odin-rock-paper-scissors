function getComputerChoice()
{
    const seed = Math.random();
    if (seed < 0.33) {
        return "r";
    }
    else if (seed >= 0.33 && seed < 0.66) {
        return "p";
    }
    else return "s";
}

function playRound(playerSelection, computerSelection)
{
    if (playerSelection.toLowerCase() == 'rock')
    {
        if (computerSelection == 'p') return "You Lose! Paper beats Rock"; 
        else if (computerSelection == 's') return "You Win! Rock beats Scissors";
        else return "Draw";
    }
    else if (playerSelection.toLowerCase() == 'paper')
    {
        if (computerSelection == 's') return "You Lose! Scissors beats Paper"; 
        else if (computerSelection == 'r') return "You Win! Scissors beats Rock";
        else return "Draw";
    }
    
    else if (playerSelection.toLowerCase() == 'scissors')
    {
        if (computerSelection == 'r') return "You Lose! Rock beats Scissors"; 
        else if (computerSelection == 'p') return "You Win! Scissors beats Paper";
        else return "Draw";
    }
    else return "Invalid choice.";
}

function game()
{
    for (let i = 0; i < 5; ++i)
    {
        playerSelection = prompt("What's your choice?");
        console.log(playRound(playerSelection, getComputerChoice()));
    }
}
