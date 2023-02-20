function getComputerChoice(){
    let rndInt = Math.floor(Math.random() * 3) + 1
    switch(rndInt){
        case 1:
            return 'Rock';
        case 2:
            return 'Paper';
        case 3:
            return 'Scissors';
    }
}

function playRound(playerSelection, computerSelection){
    if(playerSelection.toLowerCase() === 'rock'){
        if(computerSelection.toLowerCase() === 'rock'){
            console.log(`Its a tie! Both selected ${playerSelection}`);
            return 3; // means a tie
        }
        else if(computerSelection.toLowerCase() === 'paper'){
            console.log(`You loose! ${computerSelection} beats ${playerSelection}`);
            return 2; // means computer wins
        }
        else{
            console.log(`You win! ${playerSelection} beats ${computerSelection}`);
            return 1; // means player wins
        }
    }

    else if(playerSelection.toLowerCase() === 'paper'){
        if(computerSelection.toLowerCase() === 'rock'){
            console.log(`You win! ${playerSelection} beats ${computerSelection}`);
            return 1;
        }
        else if(computerSelection.toLowerCase() === 'paper'){
            console.log(`Its a tie! Both selected ${playerSelection}`);
            return 3;
        }
        else{
            console.log(`You loose! ${computerSelection} beats ${playerSelection}`);
            return 2;
        }
    }

    else{ //player selected Scissors
        if(computerSelection.toLowerCase() === 'rock'){
            console.log(`You loose! ${computerSelection} beats ${playerSelection}`);
            return 2;
        }
        else if(computerSelection.toLowerCase() === 'paper'){
            console.log(`You win! ${playerSelection} beats ${computerSelection}`);
            return 1;
        }
        else{
            console.log(`Its a tie! Both selected ${playerSelection}`);
            return 3;
        }
    }

    console.log('Round finished!\n');
}

function game(){
    let playerSelection;
    let computerSelection;
    let partialResult;
    let playerScore = 0;
    let computerScore = 0;
    for(let i=0; i<5; i++){
        playerSelection = prompt('Please choose rock, paper or scissors');
        computerSelection =  getComputerChoice();
        partialResult = playGame(playerSelection, computerSelection);
        switch(partialResult){
            case 1:
                playerScore++;
                break;
            case 2:
                computerScore++;
                break;
            case 3:
                playerScore++;
                computerScore++;
                break;
            default:
                console.log('Error, imposible case');
                break;
        }
    }
    console.log(`Player Score: ${playerScore}`);
    console.log(`Computer Score: ${computerScore}`);
    if(playerScore > computerScore){
        console.log('Player wins!');
    }
    else if(computerScore > playerScore){
        console.log('Computer wins!');
    }
    else{
        console.log('Its a tie!');
    }
}



let playerSelection = "Rock";
let computerSelection = getComputerChoice();
console.log(`Player selected: ${playerSelection}`);
console.log(`Computer selected: ${computerSelection}`);
console.log(playRound(playerSelection, computerSelection));