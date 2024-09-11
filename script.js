"use strict";
const containerEl = document.querySelector(".container");
const btnPlayEl = document.querySelector(".btn_again");
const btnChckEl = document.querySelector(".btn_check");
const hideNumEl = document.querySelector(".hide_num");
const msgEl = document.querySelector(".message");
const inputNumEl = document.querySelector(".input_number");
const highScoreEl = document.querySelector(".high_score");
const scoreEl = document.querySelector(".score");

let secretNum = Math.trunc(Math.random() * 15 + 1);
let score = 15;
let highScore = 0;
console.log(secretNum);
// event to check the hide num
btnChckEl.addEventListener("click", () => {
    const guess = Number(inputNumEl.value);
    // check empty input
    if (guess) {
        // not match hide number
        if (guess != secretNum) {
            if (score > 1) {
                score--;
                scoreEl.textContent = score;
                msgEl.textContent = guess > secretNum ? " Too High " : "Too Low";
                scoreEl.textContent = score;
            } else {
                displayMessage("You've Lossed the Game");
                containerEl.style.backgroundColor = "red";
                scoreEl.textContent = 0;
            }
        } else {
            // Success
            hideNumEl.textContent = secretNum;
            hideNumEl.style.width = "50%";
            hideNumEl.style.transition = "all 0.5s ease-in";
            containerEl.style.backgroundColor = "green";
            highScoreEl.textContent = score;
            displayMessage("Congtratulation You've Won the Game :)");
        }
    } else {
        displayMessage("Please Enter the Number :(");
    }
});
// display message
const displayMessage = function (message) {
    msgEl.textContent = message;
};
// reset the game
btnPlayEl.addEventListener("click", () => {
    score = 15;
    secretNum = Math.floor(Math.random() * 15) + 1;
    scoreEl.textContent = score;
    hideNumEl.textContent = "?";
    hideNumEl.style.width = "25%";
    hideNumEl.style.transition = "all 0.5s ease-in";
    inputNumEl.value = "";
    containerEl.style.backgroundColor = "#ddd";
    displayMessage("Start Guesing..............");
});