/*PSUEDO CODE*/
// 1. addEventListener on click <button 'add note'> =>
// 1.1 createElement <h3>, for note title
// 1.2 <textArea>.value, for note text
// 1.3 createElement <button 'view details'>
// 1.3.1 addEventListener on click, display note modal
// 1.4 add to classList cardTemplate

// Note Card variables
const note = document.querySelector("#noteInpt");
const addBtn = document.querySelector("#addBtn");
const noteContainer = document.querySelector(".noteContainer");
const mainCont = document.querySelector("#container");

// Modal variables
const modal = document.querySelector(".modalCont");
const modalCard = document.querySelector(".modalCard");
const modalBody = document.querySelector(".modalDetails");
const closeButton = document.querySelector(".closeBtn");

// Create new note function
function newNote() {
  noteText = note.value;
  noteTitle = document.createElement("h3");
  noteContent = document.createElement("p");
  noteBtn = document.createElement("button");
  noteCard = document.createElement("div");
  const noteNum = noteContainer.childElementCount;
  noteTitle.textContent = `Note ${noteNum + 1}`;
  noteContent.textContent = noteText;
  noteContent.classList.add("noteBody");
  noteContent.setAttribute("data-id", noteNum);
  noteBtn.textContent = "View Details";
  noteBtn.classList.add("noteBtn");
  noteBtn.addEventListener("click", expandNote(noteNum));
  noteCard.append(noteTitle);
  noteCard.append(noteContent);
  noteCard.append(noteBtn);
  noteCard.classList.add("note");
  noteContainer.append(noteCard);
  note.value = "";
}

// Show modal function
function expandNote(noteNum) {
  return function () {
    modalCard.classList.add("showModal");
    modal.style.visibility = "visible";
    closeButton.addEventListener("click", () => {
      modal.style.visibility = "hidden";
      modalCard.classList.remove("showModal");
    });
    const data = document.querySelector(`[data-id='${noteNum}']`).innerText;
    showMoreModal(noteContainer, data);
  };
}

function showMoreModal(noteContainer, data) {
  modal.classList.add("modalCont");
  modalCard.classList.add("modalCard");
  closeButton.classList.add("closeBtn");
  modalCard.append(closeButton);
  modalBody.innerText = `${data}`;
  modalCard.append(modalBody);
  modal.append(modalCard);
  noteContainer.append(modal);
}

// Event for note button
noteContainer.addEventListener;

//Add new note event
addBtn.addEventListener("click", newNote);
