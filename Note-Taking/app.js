/*PSUEDO CODE*/
// 1. addEventListener on click <button 'add note'> =>
// 1.1 createElement <h3>, for note title
// 1.2 <textArea>.value, for note text
// 1.3 createElement <button 'view details'>
// 1.3.1 addEventListener on click, display note modal
// 1.4 add to classList cardTemplate

const note = document.querySelector("#note");
const addBtn = document.querySelector("#addBtn");
const noteContainer = document.querySelector("#noteCardCont");

addBtn.addEventListener("click", function (e) {
  noteText = note.value;
  noteTitle = document.createElement("h3");
  noteContent = document.createElement("p");
  noteBtn = document.createElement("button");
  noteCard = document.createElement("div");
  noteBtn.textContent = "View Details";
  noteContent.textContent = noteText;
  noteCard.append(noteTitle);
  noteCard.append(noteContent);
  noteCard.append(noteBtn);
  noteCard.classList.add("sampleCard");
  noteContainer.append(noteCard);
});

function newNote() {}
