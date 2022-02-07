/*PSEUDO CODE*/
//1.EventListener on keyup for Input item --DONE
//2.Input createElement li and add items(li) to ul --DONE
//3.EventListener on click add textDecoration to li (line-through) --DONE
//4.EventListener on click img remove all items from list

const input = document.querySelector("input");
const list = document.querySelector("#list");
const listItems = document.querySelector("#items");
const remove = document.querySelector("#img");

//Function: add the input element to an <li>
function newElement() {
  //variable that creates a new <li>
  let newLi = document.createElement("li");
  //variable that that set the value of it to the inputed value
  let newItem = input.value;
  //now append the variable that has de inputed to value to the new <li> variable
  newLi.append(newItem);
  //now append that <li> that contains the inputed value(item) to the <li> parent (ul)
  listItems.append(newLi);
  //now reset the input value where the user adds the new item
  input.value = "";
}

//eventListener to add item to the list when key 'enter' is pressed
input.addEventListener("keydown", function (evt) {
  if (evt.key === "Enter") {
    newElement();
  }
});

//eventListener for adding a line-through to the item when cliked
listItems.addEventListener("click", function (evt) {
  if (evt.target.nodeName === "LI") {
    evt.target.style.textDecoration = "line-through";
  }
});

//eventListener for removing the items in the list
remove.addEventListener("click", function (evt) {
  //this code continues to loop while there still is a first child in listItems, it removes the first child
  //everytime it loops untils there is no first child.
  while (listItems.firstChild) {
    listItems.removeChild(listItems.firstChild);
  }
});
