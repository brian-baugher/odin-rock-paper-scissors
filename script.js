function getComputerChoice(){
    let rand = Math.random()
    if(rand<=.33){return 'rock'}
    else if(rand<=.66){return 'scissors'}
    else{return 'paper'}
}

/**
 * 
 * @param {String} playerSelection 
 * @param {String} computerSelection
 */
function playRound(playerSelection, computerSelection){
    let lowerPlay = playerSelection.toLowerCase()
    switch(lowerPlay){
        case 'rock': {
            switch(computerSelection){
                case 'rock': {return 0}
                case 'paper': {return -1}
                case 'scissors': {return 1}
            }
        }
        case 'paper': {
            switch(computerSelection){
                case 'rock': {return 1}
                case 'paper': {return 0}
                case 'scissors': {return -1}
            }
        }
        case 'scissors': {
            switch(computerSelection){
                case 'rock': {return -1}
                case 'paper': {return 1}
                case 'scissors': {return 0}
            }
        }
        default: return 0
    }
}

function game(){
    let sum = 0
    for(i = 0; i<5; i++){
        let userAns = prompt("Your move?")
        let compAns = getComputerChoice()
        let result = playRound(userAns, compAns)
        sum += result
    }
    if(sum > 0){
        console.log('You win!')
    }
    else{
        console.log('You lose :(')
    }
}

game()