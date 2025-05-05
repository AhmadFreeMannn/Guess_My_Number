"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1; // random number

let score = 20;
let highScoreTemp = 0;
let highScore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guessNumber = Number(document.querySelector(".guess").value);

  console.log(guessNumber, typeof guessNumber);

  //when there is no input
  if (!guessNumber) {
    document.querySelector(".message").textContent = "No Numberrr!!";

    //when player wins
  } else if (guessNumber === secretNumber) {
    document.querySelector(".message").textContent = "👍 correct number!";

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "35rem";
    document.querySelector(".number").textContent = secretNumber;

    highScore = Number(
      (document.querySelector(".highscore").value = highScoreTemp)
    );
    if (highScore > highScoreTemp) {
      document.querySelector(".highscore").textContent = highScore;
    } else {
      document.querySelector(".highscore").textContent = highScoreTemp;
    }

    // to be sure when number is 0 the will stop & guess is too high
  } else if (guessNumber < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "too low!";
      score--;
      document.querySelector(".score").textContent = score;

      highScoreTemp = score;
    } else {
      document.querySelector(".message").textContent = "you lost the game";
      document.querySelector(".score").textContent = "0";
    }
  } else {
    // to be sure when number is 0 the will stop & guess is too low
    if (score > 1) {
      document.querySelector(".message").textContent = "too high!";
      score--;
      document.querySelector(".score").textContent = score;

      highScoreTemp = score;
    } else {
      document.querySelector(".message").textContent = "you lost the game";
      document.querySelector(".score").textContent = "0";
    }
  }
});

// restart btn
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1; // random number
  document.querySelector(".score").textContent = score;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = ""; //value

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
