'use strict';

const score = document.getElementById("score--0");
const score1 = document.getElementById("score--1");
const current0 = document.getElementById("current--0");
const current1 = document.getElementById('current--1');
const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");
const dice = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
score.textContent = 0;
score1.textContent = 0;
dice.classList.add("hidden");
let scores_arr = [0, 0];
let currentScore = 0;
let activepalyer = 0;
let playing = true;
function rollDice() {
    if (playing) {
        let randomNumber = Math.floor(Math.random() * 6) + 1;
        dice.classList.remove("hidden");
        dice.src = `dice-${randomNumber}.png`;
        if (randomNumber !== 1) {
            currentScore += randomNumber;
            document.getElementById(`current--${activepalyer}`).textContent = currentScore;
        } else {
            currentScore = 0;
            document.getElementById(`current--${activepalyer}`).textContent = 0;
            activepalyer = activepalyer === 0 ? 1 : 0;
            player0.classList.toggle("player--active");
            player1.classList.toggle("player--active");
        }
    }
}
function holdDice() {
    if (playing) {
        scores_arr[activepalyer] += currentScore;
        document.getElementById(`score--${activepalyer}`).textContent = scores_arr[activepalyer];
        if (scores_arr[activepalyer] >= 100) {
            playing = false;
            document.querySelector(`.player--${activepalyer}`).classList.add("player--winner");
            document.querySelector(`.player--${activepalyer}`).classList.remove("player--active");
            dice.classList.add("hidden");
        } else {
            currentScore = 0;
            document.getElementById(`current--${activepalyer}`).textContent = 0;
            activepalyer = activepalyer === 0 ? 1 : 0;
            player0.classList.toggle("player--active");
            player1.classList.toggle("player--active");
        }
    }
}
function start() {
    score.textContent = 0;
    score1.textContent = 0;
    current0.textContent = 0;
    current1.textContent = 0;
    playing = true;
    dice.classList.add("hidden");
    scores_arr = [0, 0];
    currentScore = 0;
    //document.querySelector(`.player--${activepalyer}`).classList.remove("player--winner");
    activepalyer = 0;
    player0.classList.remove("player--winner");
    player1.classList.remove("player--winner");
    player1.classList.remove("player--active");
    player0.classList.add("player--active");
}
btnRoll.addEventListener("click", rollDice);
btnHold.addEventListener("click", holdDice);
btnNew.addEventListener("click", start);