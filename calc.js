"use strict";
function calculate() {
    // get form inputs
    const xInput = document.getElementById('x');
    const yInput = document.getElementById('y');
    // output display
    const resultElement = document.getElementById('result');
    // get input values & convert to numbers
    const x = parseFloat(xInput.value);
    const y = parseFloat(yInput.value);
    // validate for #'s
    if (isNaN(x) || isNaN(y)) {
        resultElement.textContent = 'Please enter valid numbers';
    }
    else {
        resultElement.textContent = `Result: ${x + y}`;
    }
}
let randomNumber = Math.floor(Math.random() * 10) + 1;
function checkGuess() {
    const guessInput = document.getElementById("guess");
    const guessResult = document.getElementById("guessResult");
    const guess = parseInt(guessInput.value);
    if (guessInput.value === "" || isNaN(guess) || guess < 1 || guess > 10) {
        guessResult.textContent = "Please enter a number between 1 and 10";
    }
    else if (guess === randomNumber) {
        guessResult.textContent = "You got it!";
    }
    else if (guess < randomNumber) {
        guessResult.textContent = "Too low, try again";
    }
    else {
        guessResult.textContent = "Too high, try again";
    }
}
