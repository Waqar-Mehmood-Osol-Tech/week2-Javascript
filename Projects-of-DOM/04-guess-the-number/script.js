let randomNumber = parseInt(Math.random() * 100 + 1)  // number can be 100 but not zero


const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

// Store the values which user enteres while guessing the num
let prevGuess = []

// number of guesses and ;imit it to 10
let numGuess = 1

// Enable or disable you to play the game
let playGame = true

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess)
    })
}


function validateGuess(guess) {
    // Validate the guess number
    if (isNaN(guess)) {
        alert('Please enter a valid number')
    }
    else if (guess < 1) {
        alert('Please enter a number greater than 0')
    }
    else if (guess > 100) {
        alert('Please Enter a number less than 100')
    }
    else {
        prevGuess.push[guess]
        if (numGuess === 11) {
            displayGuess(guess)
            displayMessage(`Game Over. Random Number was ${randomNumber}`)
            endGame()
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}


function checkGuess(guess) {
    // 
    if (guess === randomNumber) {
        displayMessage(`You Guessed it right`)
        endGame()
    }
    else if (guess < randomNumber) {
        displayMessage(`Number is too low`)
    }
    else if (guess > randomNumber) {
        displayMessage(`Number is too high`)
    }
}

function displayGuess(guess) {
    // 
    userInput.value = '';
    guessSlot.innerHTML += `${guess},  `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;

}

function displayMessage(message) {
    // 
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame() {
    userInput.value = '';
    userInput.setAttribute(`disabled`, '')
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
    startOver.appendChild(p)
    playGame = false
    newGame()
}

function newGame() {
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function (e) {
        randomNumber = parseInt(Math.random() * 100 + 1)
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true
    })
}










