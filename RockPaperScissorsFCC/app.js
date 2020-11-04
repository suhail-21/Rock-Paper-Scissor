/* This process is known as catching the DOM(Document object model). 
   Catching generally means storing something for future use. Here we are
   storing the DOM variables(or catching) so that we can use this for later use.
   The idea of storing these in a variable is to create a reference to DOM elements
   and therefore user dont need to write document.getelement etc everytime.*/

let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById('user-score');
const compScore_span = document.getElementById('comp-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_div = document.querySelector('.result');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');
const smalluser = 'User';
const smallcomp = 'CPU';
function convertToWord(letter){
    if(letter === 'R') return 'Rock';
    else if(letter === 'P') return 'Paper';
    else return 'Scissor';

}

function win(user, computer){
    userScore ++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    if(user === 'R' && computer === 'S'){
        result_div.innerHTML = `${convertToWord(user)}(${smalluser}) beats ${convertToWord(computer)}(${smallcomp}) . You win`;
    }
    else if(user === 'P' && computer === 'R'){
        result_div.innerHTML = `${convertToWord(user)}(${smalluser}) covers ${convertToWord(computer)}(${smallcomp}) . You win.`
    }
    else{
        result_div.innerHTML = `${convertToWord(user)}(${smalluser}) cuts ${convertToWord(computer)}(${smallcomp}) . You win.`;
    }
}

function lose(user, computer){
    compScore ++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    if(user === 'R' && computer === 'P'){
        result_div.innerHTML =  `${convertToWord(computer)}(${smallcomp}) covers  ${convertToWord(user)}(${smalluser}) . You lose.`;
    }
    else if(user === 'P' && computer === 'S'){
        result_div.innerHTML = `${convertToWord(computer)}(${smallcomp}) cuts  ${convertToWord(user)}(${smalluser}) . You lose.`;
    }
    else{
        result_div.innerHTML = `${convertToWord(computer)}(${smallcomp}) beats  ${convertToWord(user)}(${smalluser}) . You lose.`;
    }

}

function tie(user, computer){
    if(user === 'R' && computer === 'R'){
        result_div.innerHTML = `${convertToWord(computer)}(${smalluser}) and  ${convertToWord(user)}(${smallcomp}) . It's a tie.`;
    }
    else if(user === 'P' && computer === 'P'){
        result_div.innerHTML = `${convertToWord(computer)}(${smalluser}) and  ${convertToWord(user)}(${smallcomp}) . It's a tie.`;
    }
    else{
        result_div.innerHTML = `${convertToWord(computer)}(${smalluser}) and  ${convertToWord(user)}(${smallcomp}) . It's a tie.`;
    }
}

function getComputerChoice(){
    const choices = ['R', 'P', 'S'];
    const random = Math.floor(Math.random() * 3);
    return choices[random];
}

function game(userChoice){
    const computerChoice = getComputerChoice(); 
    switch(userChoice + computerChoice){
        case 'RS':
        case 'PR':
        case 'SP':
            win(userChoice, computerChoice);
            break;
        case 'RP':
        case 'PS':
        case 'SR':
            lose(userChoice, computerChoice);
            break;
        case 'RR':
        case 'PP':
        case 'SS':
            tie(userChoice, computerChoice);
            break;
    }
}
function main(){
    rock_div.addEventListener('click', ()=> game('R'));
    
    paper_div.addEventListener('click', ()=> game('P'));
    
    scissors_div.addEventListener('click', ()=> game('S'));
}

main();
