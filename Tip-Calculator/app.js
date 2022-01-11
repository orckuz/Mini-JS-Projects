/*PSEUDO CODE*/
//1.Function that returns bill * percentage(service) / guests
//1.1 Calc percentage = percentage / 100
//2.eventListener for btn to calculate the function above when click

const percentage = document.querySelector("#percentage");
const bill = document.querySelector("#bill");
const guests = document.querySelector("#guest-num");
const button = document.querySelector("#btn");
const alertBox = document.querySelector("#tip-amnt");

function percentCalc() {
  return parseInt(percentage.value) / 100;
}

function totalTip() {
  return (bill.value * percentCalc()) / guests.value;
}

function showTipAmnt() {
  let x = document.querySelector("#tip-amnt");
  x.classList = "show";
  setTimeout(() => {
    x.classList.replace("show", "");
  }, 3000);
}

button.addEventListener("click", function () {
  if (totalTip === NaN) {
    alertBox.textContent = "Total tip $0";
    showTipAmnt();
  } else {
    alertBox.textContent = `Total tip is: $${totalTip()}`;
    showTipAmnt();
  }
  percentage.value = "";
  bill.value = "";
  guests.value = "";
});
