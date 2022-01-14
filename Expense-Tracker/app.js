/*PSEUDO CODE*/
// 1. EventListener on click for 'add expense' <button>, adds 4 <td> to <table body> in a <tr> element
// 1.1 CreateElement <tr> append <td>´s for 'Item Name', 'Date', 'Amount', delete <button>
// 2. EventListener on click for delete <button>, removes all all <tr> element with its childs

const addBtn = document.querySelector("#expBtn");
const tBody = document.querySelector("#tableBody");
const nameIpt = document.querySelector("#name");
const dateIpt = document.querySelector("#date");
const amntIpt = document.querySelector("#amount");

const sampleTr = document.createElement("tr");
const sampleItem = document.createElement("td");
sampleItem.textContent = "No items added!";
sampleItem.colSpan = 4;
sampleTr.append(sampleItem);
tBody.append(sampleTr);

// while (!tBody.childElementCount !== 2) {
//   tBody.append(sampleTr);
// }

function newExpenseItem() {
  let item = nameIpt.value;
  let date = dateIpt.value;
  let amount = amntIpt.value;
  const deleteBtn = document.createElement("button");
  const newTr = document.createElement("tr");
  const itemTd = document.createElement("td");
  const dateTd = document.createElement("td");
  const amountTd = document.createElement("td");
  const deleteTd = document.createElement("td");
  deleteBtn.textContent = "X";
  deleteTd.append(deleteBtn);
  deleteBtn.addEventListener("click", deleteExpense);
  itemTd.append(item);
  dateTd.append(date);
  amountTd.append(amount);
  newTr.append(itemTd, dateTd, amountTd, deleteTd);
  return tBody.append(newTr);
}

function deleteExpense() {
  this.parentElement.parentElement.remove(this);
}

addBtn.addEventListener("click", function (e) {
  newExpenseItem();
  sampleTr.remove(this);
  nameIpt.value = "";
  dateIpt.value = "";
  amntIpt.value = "";
});
