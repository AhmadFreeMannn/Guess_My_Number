"use strict";

const secretNumber = Math.trunc(Math.random() * 20) + 1; // random number
document.querySelector(".number").textContent = secretNumber;

let score = 20;

document.querySelector(".check").addEventListener("click", function () {
  const guessNumber = Number(document.querySelector(".guess").value);

  console.log(guessNumber, typeof guessNumber);

  if (!guessNumber) {
    // score and number comparison logic
    document.querySelector(".message").textContent = "No Numberrr!!";
  } else if (guessNumber === secretNumber) {
    document.querySelector(".message").textContent = "👍 correct number!";
  } else if (guessNumber < secretNumber) {
    if (score > 1) {
      // to be sure when number is 0 the will stop
      document.querySelector(".message").textContent = "too low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "you lost the game";
      document.querySelector(".score").textContent = "0";
    }
  } else {
    if (score > 1) {
      // to be sure when number is 0 the will stop
      document.querySelector(".message").textContent = "too high!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "you lost the game";
      document.querySelector(".score").textContent = "0";
    }
  }
});
