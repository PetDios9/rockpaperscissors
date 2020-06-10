const computerSelection = () => {                   // get computer choice
   let choiceNumber = Math.floor(Math.random() * 3);
    switch (choiceNumber) {
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissors';
            break;
    }
}
function playRound(playerSelection) {   // plays round of rock paper scissors      console.log(playerSelection)
    let computerChoice = computerSelection();
    if (playerSelection == computerChoice) {
        console.log('Draw!');
        return 'Draw!';
    } else if (playerSelection == 'rock' && computerChoice == 'paper') {
        console.log('You Lose! Paper Beats Rock!');
        computerScore.innerHTML++;
        return 'You Lose! Paper Beats Rock!';
    } else if (playerSelection == 'rock' && computerChoice == 'scissors') {
        console.log('You Win! Rock Beats Scissors!');
        playerScore.innerHTML++;
        return 'You Win! Rock Beats Scissors!';
    } else if (playerSelection == 'paper' && computerChoice == 'scissors') {
        console.log('You Lose! Scissors Beats Rock!');
        computerScore.innerHTML++;
        return 'You Lose! Scissors Beats Rock!';
    } else if (playerSelection == 'paper' && computerChoice == 'rock') {
        console.log('You Win! Paper Beats Rock!');
        playerScore.innerHTML++;
        return 'You Win! Paper Beats Rock!';
    } else if (playerSelection == 'scissors' && computerChoice == 'rock') {
        console.log('You Lose! Rock Beats Scissors!');
        computerScore.innerHTML++;
        return 'You Lose! Rock Beats Scissors!'; 
    } else if (playerSelection == 'scissors' && computerChoice == 'paper') {
        console.log('You Win! Scissors Beats Paper!');
        playerScore.innerHTML++;
        return 'You Win! Scissors Beats Paper!';
        }
        
}

const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
let playerScore = document.getElementById('player-score-box');
let computerScore = document.getElementById('computer-score-box');
rock.addEventListener('click', function (){alert(playRound('rock'));});
paper.addEventListener('click', function (){alert(playRound('paper'));});
scissors.addEventListener('click', function (){alert(playRound('scissors'));});
