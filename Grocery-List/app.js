/*PSEUDO CODE*/
//1.EventListener on keyup for Input item --DONE
//2.Input createElement li and add items(li) to ul --DONE
//3.EventListener on click add classlist to li (for crossing word)
//4.EventListener on click img remove all items from list

const input = document.querySelector("input");
const list = document.querySelector("#items");

function newElement() {
  let newLi = document.createElement("li");
  let newItem = input.value;
  newLi.append(newItem);
  list.append(newLi);
  console.log(newItem);
}

input.addEventListener("keydown", function (evt) {
  if (evt.key === "Enter") {
    newElement();
  }
});

list.addEventListener("click", function (evt) {
  if (evt.target.nodeName === "LI") {
    evt.target.style.textDecoration = "line-through";
  }
});
