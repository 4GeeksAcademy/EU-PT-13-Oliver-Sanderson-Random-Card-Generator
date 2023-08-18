/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

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
};
