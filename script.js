function getComputerChoice(){
    let rand = Math.random()
    if(rand<=.33){return 'Rock'}
    else if(rand<=.66){return 'Scissors'}
    else{return 'Paper'}
}

let ans = getComputerChoice()
console.log(ans)