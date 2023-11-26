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

let playerScore = 0;
let computerScore = 0;
const btn = document.querySelectorAll('button.choice');
const roundWinner = document.querySelector('#roundWinner');

let playAgain = document.querySelector('#playAgain');
playAgain.style.display = 'none';
const winner = document.querySelector('#announceWinner');

function updateScore(roundWinner)
{
    const showPlayerScore = document.querySelector('#showPlayerScore');
    const showComputerScore = document.querySelector('#showComputerScore');
    if (roundWinner.match("You Win!"))
    {
        showPlayerScore.textContent = ++playerScore;
    }
    else if (roundWinner.match("You Lose!"))
    {
        showComputerScore.textContent = ++computerScore;
    }

    if (playerScore === 5)
    {
        winner.style.backgroundColor = 'green';
        winner.textContent = "YOU WIN THE GAME!";
        playAgain.style.display="";
        btn.forEach(button => {
            button.disabled = true; 
          });
    }

    else if (computerScore === 5)
    {
        winner.style.backgroundColor = 'red';
        winner.textContent = "YOU LOSE THE GAME!";  
        playAgain.style.display=""; 
        btn.forEach(button => {
            button.disabled = true; 
          });
    }
}

btn.forEach(button => {
    button.addEventListener('click', () => {
        roundWinner.textContent = playRound(button.id, getComputerChoice());
        updateScore(roundWinner.textContent);
    })
})

playAgain.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
  
    // Clear winner announcement
    winner.textContent = '';
    winner.style.backgroundColor = '';
  
    // Reset UI
    showPlayerScore.textContent = 0; 
    showComputerScore.textContent = 0;
  
    // Hide Play Again button
    roundWinner.textContent = '';
    playAgain.style.display = 'none'; 
    btn.forEach(button => {
        button.disabled = false; 
      });
})
