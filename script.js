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

function updateScores(){
    player.textContent = `Player: ${playerCount}`
    computer.textContent = `Computer: ${compCount}`
} 

function checkWin(){
    if(count==5){
        if(playerCount>compCount){
            output.textContent = 'you win'
            return true;
        }
        else{
            output.textContent = 'you lose'
            return true;
        }
    }
    return false
}

function checkRes(res){
    if(checkWin()){return;}
    if(res>0){
        playerCount += 1
        count = playerCount+compCount
        updateScores();
        output.textContent = ''
        checkWin()
    }
    else if(res<0){
        compCount += 1
        count = playerCount+compCount
        updateScores();
        output.textContent = ''
        checkWin()
    }
    else{
        output.textContent = 'tie, try again'
    }
}

function rockGame() {
    let res = playRound('rock', getComputerChoice())
    checkRes(res)
}

function paperGame() {
    let res = playRound('paper', getComputerChoice())
    checkRes(res)
}

function scissorsGame() {
    let res = playRound('scissors', getComputerChoice())
    checkRes(res)
}

let count = 0;
let compCount = 0;
let playerCount = 0;

const rock = document.querySelector('#rock')
rock.addEventListener('click', () => rockGame())

const paper = document.querySelector('#paper')
paper.addEventListener('click', () => paperGame())

const scissors = document.querySelector('#scissors')
scissors.addEventListener('click', () => scissorsGame())

const scores = document.querySelector('.scores')
const computer = document.querySelector('#comp')
const player = document.querySelector('#player')

let output = document.createElement('h3')
output.style.width = '100px'
output.style.textAlign = 'center'

scores.insertBefore(output, computer)

//game()