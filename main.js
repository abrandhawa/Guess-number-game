let randomNumber = parseInt(Math.random()* 100 + 1);

const userInput = document.querySelector('#guessField');
const submit = document.querySelector('#subt');
const previousGuess = document.querySelector('.guesses');
const remainingGuess = document.querySelector('.lastResult');
const score = document.querySelector('.lowOrHi');

const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let playGame = true;
let numGuess = 1;
let prevGuess=[];

if(playGame){
    submit.addEventListener( 'click' , function(e){
 e.preventDefault();
 guess =parseInt(userInput.value);
 validateGuess(guess);
 
    })
}

function validateGuess(guess){
  if(isNaN(guess)){
    alert(`Please Provide a Valid Number`)
  } else if (guess < 1){
    alert(`please provide number more than 0`)
  } else if (guess > 100){
    alert(`please provide number less than 101`)
  } else {
    prevGuess.push(guess);
    if(numGuess === 8){
        displayGuess(guess);
        displayMessage(`Game over , Random number was ${randomNumber}`);
        endGame();
    } else {
        displayGuess(guess);
        checkGuess(guess);
    }
  }
}


function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`you guessed it right `);
        endGame();
    } else {
        if(guess < randomNumber){
            displayMessage(`Your guess is Too Low`)
        } else if (guess > randomNumber){
            displayMessage(`Your guess is too High`)}
    }

}

function displayGuess(guess){
userInput.value ='';
numGuess++;
previousGuess.innerHTML += `${guess} ,`
remainingGuess.innerHTML = `${7 - numGuess}`
}

function displayMessage(message){
score.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
userInput.value='';
userInput.setAttribute('disabled' , '')
p.classList.add('button');
p.innerHTML=` <h2 id="newGame" class="guessSubmit w-[200px] mt-3 p-[10px] cursor-pointer mx-auto bg-red-700 rounded-2xl border border-transparent"> Start New Game </h2>`;
startOver.appendChild(p);
playGame=false;
newGame();
}

function newGame(){
const newGameButton = document.querySelector('#newGame');
newGameButton.addEventListener('click', function(e){
    e.preventDefault();
    randomNumber = parseInt(Math.random()* 100 + 1);
    prevGuess=[];
    numGuess=1;
    previousGuess.innerHTML='';
    remainingGuess.innerHTML = `${7 - numGuess}`
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame=true;
})
}