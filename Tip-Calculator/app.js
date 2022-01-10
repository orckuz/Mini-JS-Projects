/*PSEUDO CODE*/
//1.Function that returns bill * percentage(service) / guests
//1.1 Calc percentage = percentage / 100
//2.eventListener for btn to calculate the function above when click

const percentage = document.querySelector("#percentage");
const bill = document.querySelector("#bill");
const guests = document.querySelector("#guest-num");
const button = document.querySelector("#btn");

function percentCalc() {
  return parseInt(percentage.value) / 100;
}

function totalTip() {
  return (bill.value * percentCalc()) / guests.value;
}

button.addEventListener("click", function () {
  alert(totalTip());
});
