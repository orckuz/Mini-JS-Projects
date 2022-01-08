/*PSEUDO CODE*/
//1.EventListener on keyup for Input item
//2.Input createElement li and add items(li) to ul
//3.EventListener on click add classlist to li (for crossing word)
//4.EventListener on click pen img, remove all items 

const input = document.querySelector('input');
const list = document.querySelector('#items');

function newElement() {
  let newLi = document.createElement('li');
  let newItem = input.value;  
  newLi.append(newItem);
  list.append(newLi);
  console.log(newItem);
}

input.addEventListener('keydown', function(event) {
  if (event.keyCode === 13) {
    newElement();
  }
});
