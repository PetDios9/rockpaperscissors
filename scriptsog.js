const computerPlay = () => {                                                        // determines computer choice between rock paper scissors
    let number = Math.floor(Math.random()*3);
    switch (number) {
        case 0:
         return 'rock';
         break;
        case 1:
         return 'scissors';
         break;
        case 2:
         return 'paper';
         break;
    }
}
computerPlay();
const playRound = (playerSelection, computerSelection) => {                        // plays round of rock paper scissors
    let selection = playerSelection;
    if (selection == computerSelection) {
        console.log('Draw!');
        return 'Draw!';
    } else if (selection == 'rock' && computerSelection == 'paper') {
        console.log('You Lose! Paper Beats Rock!');
        return 'You Lose! Paper Beats Rock!';
    } else if (selection == 'rock' && computerSelection == 'scissors') {
        console.log('You Win! Rock Beats Scissors!');
        return 'You Win! Rock Beats Scissors!';
    } else if (selection == 'paper' && computerSelection == 'scissors') {
        console.log('You Lose! Scissors Beats Rock!')
        return 'You Lose! Scissors Beats Rock!';
    } else if (selection == 'paper' && computerSelection == 'rock') {
        console.log('You Win! Paper Beats Rock!');
        return 'You Win! Paper Beats Rock!';
    } else if (selection == 'scissors' && computerSelection == 'rock') {
        console.log('You Lose! Rock Beats Scissors!');
        return 'You Lose! Rock Beats Scissors!'; 
    } else if (selection == 'scissors' && computerSelection == 'paper') {
        console.log('You Win! Scissors Beats Paper!');
        return 'You Win! Scissors Beats Paper!';
        }
}

let playerSelection = 'scissors';
let computerWinsCount = 0;
let playerWinsCount = 0;
let game = () =>{                                                                   //plays 5 rounds of rock paper scissors
for (let i = 0; i < 5; i++) {
let computerSelection = computerPlay();
   let victory = playRound(playerSelection, computerSelection);
    switch (victory) {
        case 'You Lose! Paper Beats Rock!':
        case 'You Lose! Scissors Beats Rock!':
        case 'You Lose! Rock Beats Scissors!':
             computerWinsCount++;
            break;
        case 'You Win! Rock Beats Scissors!':
        case 'You Win! Paper Beats Rock!':
        case 'You Win! Scissors Beats Paper!':
            playerWinsCount++;
            break;
        }
    }
}
game();
console.log(playerWinsCount);
console.log(computerWinsCount);                                                     //declares winner
let declareWinner = () => {
    if (playerWinsCount > computerWinsCount) {
            console.log('Player Wins!');
        } else if (computerWinsCount > playerWinsCount) {
            console.log('Computer Wins!');
        } else {
            console.log('It is a tie!')
        }
}
declareWinner();