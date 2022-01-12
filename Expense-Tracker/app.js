/*PSEUDO CODE*/
// 1. EventListener on click for 'add expense' <button>, adds 4 <td> to <table body> in a <tr> element
// 1.1 CreateElement <tr> append <td>´s for 'Item Name', 'Date', 'Amount', delete <button>
// 2. EventListener on click for delete <button>, removes all all <tr> element with its childs

const addBtn = document.querySelector("#expBtn");
const tBody = document.querySelector("#tableBody");
const nameIpt = document.querySelector("#name");
const dateIpt = document.querySelector("#date");
const amntIpt = document.querySelector("#amount");

addBtn.addEventListener("click", function (e) {
  let item = nameIpt.value;
  let date = dateIpt.value;
  let amount = amntIpt.value;
  const newTr = document.createElement("tr");
  const itemTd = document.createElement("td");
  const dateTd = document.createElement("td");
  const amountTd = document.createElement("td");
  itemTd.append(item);
  dateTd.append(date);
  amountTd.append(amount);
  newTr.append(itemTd);
  newTr.append(dateTd);
  newTr.append(amountTd);
  console.log(newTr);
});
