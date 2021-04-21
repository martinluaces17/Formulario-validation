/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  console.log("Hello Rigo from the console!");
};

var form = document.getElementById("form");
var cardNumber = document.getElementById("cardNumber");
var cvcNumber = document.getElementById("cvcNumber");
var amount = document.getElementById("amount");
var firstName = document.getElementById("firstName");
var lastName = document.getElementById("lastName");
var city = document.getElementById("city");

var postalCode = document.getElementById("postalCode");
var cards = document.getElementById("cards");
var textArea = document.getElementById("textArea");
var sendBtn = document.getElementById("sendBtn");
var alert = document.getElementById("alertError");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  if (cardNumber.value.length == 0) {
    alert.style.display = "block";
    cardNumber.style.backgroundColor = "#f8d7da";
  } else {
    alert.style.display = "none";
    cardNumber.style.backgroundColor = "#fff";
  }

  if (cvcNumber.value.length == 0) {
    alert.style.display = "block";
    cvcNumber.style.backgroundColor = "#f8d7da";
  } else {
    alert.style.display = "none";
    cvcNumber.style.backgroundColor = "#fff";
  }

  if (amount.value.length == 0) {
    alert.style.display = "block";
    amount.style.backgroundColor = "#f8d7da";
  } else {
    alert.style.display = "none";
    amount.style.backgroundColor = "#fff";
  }

  if (firstName.value.length == 0) {
    alert.style.display = "block";
    firstName.style.backgroundColor = "#f8d7da";
  } else {
    alert.style.display = "none";
    firstName.style.backgroundColor = "#fff";
  }

  if (lastName.value.length == 0) {
    alert.style.display = "block";
    lastName.style.backgroundColor = "#f8d7da";
  } else {
    alert.style.display = "none";
    lastName.style.backgroundColor = "#fff";
  }

  if (city.value.length == 0) {
    alert.style.display = "block";
    city.style.backgroundColor = "#f8d7da";
  } else {
    alert.style.display = "none";
    city.style.backgroundColor = "#fff";
  }

  if (postalCode.value.length == 0) {
    alert.style.display = "block";
    postalCode.style.backgroundColor = "#f8d7da";
  } else {
    alert.style.display = "none";
    postalCode.style.backgroundColor = "#fff";
  }

  if (textArea.value.length == 0) {
    alert.style.display = "block";
    textArea.style.backgroundColor = "#f8d7da";
  } else {
    alert.style.display = "none";
    textArea.style.backgroundColor = "#fff";
  }
});
