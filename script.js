"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1; // random number

let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guessNumber = Number(document.querySelector(".guess").value);

  //when there is no input
  if (!guessNumber) {
    displayMessage("No Numberrr!!");

    //when player wins
  } else if (guessNumber === secretNumber) {
    displayMessage("👍 correct number!");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "35rem";
    document.querySelector(".number").textContent = secretNumber;

    document.querySelector(".highscore").textContent = highScore;
    if (highScore < score) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }

    // to be sure when number is 0 the will stop & guess is too high
  } else if (guessNumber !== secretNumber) {
    if (score > 1) {
      displayMessage(guessNumber < secretNumber ? "too low!" : "too high!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("you lost the game");
      document.querySelector(".score").textContent = "0";
    }
  }
});

// restart btn
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1; // random number
  document.querySelector(".score").textContent = score;
  displayMessage("Start guessing...");
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = ""; //value

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
