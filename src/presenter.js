import {sumar, multiplicar } from "./sumador";
const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
const form = document.querySelector("#calcular-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  div.innerHTML = "<p>Suma: " + sumar(firstNumber, secondNumber) + "<br/>Multiplicacion: " +multiplicar(firstNumber, secondNumber) + "</p>";
});