const rock = document.getElementById('Rock').innerHTML;
const paper = document.getElementById('Paper').innerHTML;
const scissor = document.getElementById('Scissor').innerHTML;



function computerMove(){
    const moves = ['Rock', 'Paper', 'Scissor'];
    const randomMove = Math.floor(Math.random() * moves.length);
    return moves[randomMove];
}

function play(name){
    let computer = computerMove()
    if(name === computer){
        document.getElementById('result').innerHTML = "Tie"
    }else if(name === rock && computer === scissor){
        document.getElementById('result').innerHTML = "You Won,  Computer pick: " + `<b class="computer">${ computer}</b>`
    }else if(name === paper && computer === rock){
        document.getElementById('result').innerHTML = "You Won,  Computer pick: " + `<b class="computer">${ computer}</b>`
    }else if(name === scissor && computer === paper){
        document.getElementById('result').innerHTML = "You Won,  Computer pick: " + `<b class="computer">${ computer}</b>`
    }else{
        document.getElementById('result').innerHTML = "You Lose,  Computer pick: " + `<b class="computer">${ computer}</b>`
    }

}

