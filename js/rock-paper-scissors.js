function getComputerChoice(){
    let rndInt = Math.floor(Math.random() * 3) + 1
    switch(rndInt){
        case 1:
            console.log('Rock');
            break;
        case 2:
            console.log('Paper');
            break;
        case 3:
            console.log('Scissors');
            break;
    }
}

getComputerChoice();
getComputerChoice();
getComputerChoice();
getComputerChoice();
getComputerChoice();
getComputerChoice();