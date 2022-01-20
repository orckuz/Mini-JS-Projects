/* PSUEDO CODE */
//

// Global Variable
const modalCont = document.querySelector(".modal-container");
const modalCard = document.querySelector("#modal-card");
const notesContainer = document.querySelector(".notes-container");
const addNoteBtn = document.querySelector("#new-note-btn");
const noteInput = document.querySelector("#modal-input");
// const noteCard = document.querySelector("#note-card");

// Function: open note modal for adding new note
function showNoteModal() {
  modalCont.classList.add("show-modal");
  const closeButton = document.querySelector("#close-btn");
  // Event: Close note modal
  closeButton.addEventListener("click", () => {
    modalCont.classList.remove("show-modal");
  });
  const addButton = document.querySelector("#add-btn");
  // Event: Add note button
  addButton.addEventListener("click", () => {
    newNote();
  });
}

// Function: Create new sticky note
function newNote() {
  const noteCard = document.createElement("div");
  noteCard.classList.add("note-card");
  const noteContent = document.createElement("p");
  noteContent.textContent = noteInput.value;
  noteCard.append(noteContent);
  notesContainer.append(noteCard);
}

// Event: On key enter, add sticky note
noteInput.addEventListener("keydown", function (evt) {
  if (evt.key === "Enter") {
    newNote();
  }
});

// Event: Add new note
addNoteBtn.addEventListener("click", showNoteModal);
