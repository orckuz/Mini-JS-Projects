/*PSEUDO CODE*/
//1.EventListener on keyup for Input item --DONE
//2.Input createElement li and add items(li) to ul --DONE
//3.EventListener on click add textDecoration to li (line-through) --DONE
//4.EventListener on click img remove all items from list

const input = document.querySelector("input");
const list = document.querySelector("#list");
const listItems = document.querySelector("#items");
const remove = document.querySelector("#img");

function newElement() {
  let newLi = document.createElement("li");
  let newItem = input.value;
  newLi.append(newItem);
  listItems.append(newLi);
  input.value = "";
}

input.addEventListener("keydown", function (evt) {
  if (evt.key === "Enter") {
    newElement();
  }
});

listItems.addEventListener("click", function (evt) {
  if (evt.target.nodeName === "LI") {
    evt.target.style.textDecoration = "line-through";
  }
});

remove.addEventListener("click", function (evt) {
  // while (listItems.length > 0) {
  //   listItems.remove();
  // }
  while (listItems.firstChild) {
    listItems.removeChild(listItems.firstChild);
  }
});
console.log(listItems.firstChild);
