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
var completeCampo = document.getElementById("completeCampo");
var alert = document.getElementById("alertError");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  validation();
});

function validation() {
  const cardNumberValue = cardNumber.value;
  const cvcValue = cvcNumber.value;
  const amountValue = amount.value;
  const firstNameValue = firstName.value;
  const lastNameValue = lastName.value;
  const cityValue = city.value;
  const postalCodeValue = postalCode.value;
  const textAreaValue = textArea.value;

  if (cardNumberValue.length == 0) {
    cardMsg.style.display = "flex";
    cardMsg.innerHTML = "Por favor, complete este campo";
    cardNumber.style.backgroundColor = "#f8d7da";
    alert.style.display = "block";
  } else if (cardNumberValue.length < 16) {
    cardMsg.innerHTML = "El número de tarjeta debe contener 16 caracteres";
  } else if (cardNumberValue.length > 16) {
    cardMsg.innerHTML = "El número de tarjeta debe contener 16 caracteres";
  } else {
    cardMsg.style.display = "none";
    cardNumber.style.background = "#fff";
    alert.style.display = "none";
  }

  if (cvcNumber.length == 0) {
    cvcMsg.style.display = "flex";
    cvcMsg.innerHTML = "Por favor, complete este campo";
    cvcNumber.style.backgroundColor = "#f8d7da";
  } else if (cvcNumber.length < 3) {
    cvcMsg.innerHTML = "El número no debe contener menos de 3 caracteres";
  } else if (cvcNumber.length > 4) {
    cvcMsg.innerHTML = "El número no debe contener más de 4 caracteres";
  } else {
    cvcMsg.style.display = "none";
    cvcNumber.style.background = "#fff";
    alert.style.display = "none";
  }

  if (amountValue == "") {
    amountMsg.style.display = "flex";
    amountMsg.innerHTML = "Por favor, complete este campo";
    amount.style.backgroundColor = "#f8d7da";
  } else {
    amountMsg.style.display = "none";
    amount.style.background = "#fff";
  }

  if (firstNameValue == "") {
    firstNameMsg.style.display = "flex";
    firstNameMsg.innerHTML = "Por favor, complete este campo";
    firstName.style.backgroundColor = "#f8d7da";
  } else {
    firstNameMsg.style.display = "none";
    firstName.style.background = "#fff";
  }

  if (lastNameValue == "") {
    lastNameMsg.style.display = "flex";
    lastNameMsg.innerHTML = "Por favor, complete este campo";
    lastName.style.backgroundColor = "#f8d7da";
  } else {
    lasttNameMsg.style.display = "none";
    lastName.style.background = "#fff";
  }

  if (cityValue == "") {
    cityMsg.style.display = "flex";
    cityMsg.innerHTML = "Por favor, complete este campo";
    city.style.backgroundColor = "#f8d7da";
  } else {
    cityMsg.style.display = "none";
    city.style.background = "#fff";
  }

  if (postalCodeValue == "") {
    zipMsg.style.display = "flex";
    zipMsg.innerHTML = "Por favor, complete este campo";
    postalCode.style.backgroundColor = "#f8d7da";
  } else {
    zipMsg.style.display = "none";
    postalCode.style.background = "#fff";
  }

  if (textAreaValue == "") {
    textMsg.style.display = "flex";
    textMsg.innerHTML = "Por favor, complete este campo";
    textArea.style.backgroundColor = "#f8d7da";
  } else {
    textMsg.style.display = "none";
    textArea.style.background = "#fff";
  }
}
