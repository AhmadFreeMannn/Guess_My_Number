"use strict";
// console.log(document.querySelector(".message").textContent);

// document.querySelector(".message").textContent =
//   "😶‍🌫️ Correct Numberrrrr!!!!!!!!";

// document.querySelector(".number").textContent = "23";
// document.querySelector(".score").textContent = "24";

// document.querySelector(".guess").value = 10;

document.querySelector(".check").addEventListener("click", function () {
  const guessNumber = Number(document.querySelector(".guess").value);

  console.log(guessNumber, typeof guessNumber);

  if (!guessNumber) {
    document.querySelector(".message").textContent = "No Numberrr!!";
  } else {
    document.querySelector(".message").textContent = "Yeah this a numberrrr";
  }
});
