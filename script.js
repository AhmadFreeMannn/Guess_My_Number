"use strict";

const secretNumber = Math.trunc(Math.random() * 20) + 1; // random number
document.querySelector(".number").textContent = secretNumber;

let score = 20;

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

    // to be sure when number is 0 the will stop & guess is too high
  } else if (guessNumber < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "too low!";
      score--;
      document.querySelector(".score").textContent = score;
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
    } else {
      document.querySelector(".message").textContent = "you lost the game";
      document.querySelector(".score").textContent = "0";
    }
  }
});
