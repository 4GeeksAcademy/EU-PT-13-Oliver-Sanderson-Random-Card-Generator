/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = loadCard();
//write your code here

function loadCard() {
  let cardNumberElement = document.getElementById("cardNumber");
  let cardSuitTElement = document.getElementById("cardSuitT");
  let cardSuitBElement = document.getElementById("cardSuitB");
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  let randomSuit = Math.floor(Math.random() * 4) + 1;
  let randomNumberString;
  let randomSuitString;
  let randomSuitColor;

  // asign number or picture card
  switch (randomNumber) {
    case 1:
      randomNumberString = "A";
      break;
    case 11:
      randomNumberString = "J";
      break;
    case 12:
      randomNumberString = "Q";
      break;
    case 13:
      randomNumberString = "K";
      break;
    default:
      randomNumberString = randomNumber;
  }
  console.log(randomNumberString);

  // asign suit
  switch (randomSuit) {
    case 1:
      randomSuitString = "♦";
      randomSuitColor = "red";
      break;
    case 2:
      randomSuitString = "♥";
      randomSuitColor = "red";
      break;
    case 3:
      randomSuitString = "♠";
      randomSuitColor = "black";
      break;
    case 4:
      randomSuitString = "♣";
      randomSuitColor = "black";
      break;
  }
  console.log(randomSuitString);

  cardNumberElement.innerHTML = randomNumberString;
  cardSuitTElement.innerHTML = randomSuitString;
  cardSuitBElement.innerHTML = randomSuitString;
  cardSuitTElement.style.color = randomSuitColor;
  cardSuitBElement.style.color = randomSuitColor;
}

let newCardBtn = document.getElementById("newCardBtn");
newCardBtn.addEventListener("click", loadCard);

// This is the 10 second timer to generate a new card
function timer() {
  loadCard();
  setTimeout(timer, 10000);
}

timer();

//change sizes
let sizeBtn = document.getElementById("sizeBtn");
function setSizes() {
  let width = parseInt(document.getElementById("widthInput").value);
  let height = parseInt(document.getElementById("heightInput").value);
  let cardMain = document.getElementById("cardMain");
  console.log(width);
  console.log(height);
  if (height != "NaN") {
    cardMain.style.height = height + "px";
  }
  if (width != "NaN") {
    cardMain.style.width = width + "px";
  }
}

sizeBtn.addEventListener("click", setSizes);
