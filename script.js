"use strict";

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let scoreCounter = 20; // me
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
const updateScore = function () {
  scoreCounter = scoreCounter - 1; // or scoreCounter--;
  document.querySelector(".score").textContent = scoreCounter;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess); // show the number and typeof

  if (scoreCounter > 1) {
    // scoreCounter check
    if (!guess) {
      // when there is no number
      displayMessage("⛔ No Number!");
    } else if (guess === secretNumber) {
      displayMessage("🎊 correct Number!!");
      document.querySelector(".number").textContent = secretNumber; // we show a correct number after user won the game
      document.querySelector("body").style.backgroundColor = "#60b347";
      document.querySelector(".number").style.width = "30rem";

      if (scoreCounter > highScore) {
        // highScore block
        highScore = scoreCounter;
        document.querySelector(".highscore").textContent = highScore;
      }
      // when player win
    } else if (guess > secretNumber) {
      displayMessage("📈 Too high!"); // me
      updateScore();
      // block of bigger number
    } else if (guess < secretNumber) {
      displayMessage("📉 Too low!");
      updateScore();
    }
  } else {
    displayMessage("💥 You lost the game!!");
    document.querySelector(".score").textContent = 0;
    document.querySelector("body").style.backgroundColor = "#720000ff";
    document.querySelector(".number").style.width = "35rem";
  } // block of bigger number
});

// again botton
document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  scoreCounter = 20;
  document.querySelector(".number").textContent = "?";
  document.querySelector("body").style.backgroundColor = "#222";
  displayMessage("Start guessing again...");
  document.querySelector(".guess").value = "";
  document.querySelector(".score").textContent = scoreCounter;
  document.querySelector(".number").style.width = "15rem";
});
