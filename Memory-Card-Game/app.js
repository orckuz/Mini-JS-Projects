/* Desglose */
// 1. Display only backface of card
// 2. Card addEventListener on click flip to front face
//// 2.1 If 1st card clicked !== to 2nd card clicked, flip to backface
//// 2.2 If 1st card clicked === to 2nd card clicked, front face greys out
// 3. Card on click starts timer
//// 3.1 When all cards are guessed timer stops

/* PSEUDO CODE */
// 1. Card display set to none --DONE-- 
// 2. Card addEventListener on click .target classList.remove("active"), .front-face classList.add('active')
// 2.1 If 1st Card .target.dataset.id clicked !== 2nd Card .target.dataset.id, card back-face classList.add('active')
// 2.2 If 1st Card .target.dataset.id clicked === 2nd Card .target.dataset.id, both cards classList.add('greyd-out')
// 3. Function for time start
// 3.1

// Global Variables
const cardBoard = document.querySelector(".cards-container");
const memoryCard = document.querySelectorAll(".memory-card");
const cardFace = document.querySelectorAll(".card");
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

// Time Variables
let minute = 0;
let second = 0;
let millisecond = 0;
// Timer HTML Selectors
let minutesSpan= document.querySelectorAll('#minutes');
let secondsSpan = document.querySelectorAll('#seconds');
let millisecondSpan = document.querySelectorAll('#tens');
let cron;
 
shuffleBoard();

// Event: Flip clicked card
memoryCard.forEach(card => card.addEventListener('click', flipcard))

// Function: Flipcard
function flipcard(){
  // Flip it
  this.classList.add('active');
  if(lockBoard) return;
  // When click a card, hasFlippedCard becomes true and the value for the firstCard = this(where we click)
  if(!hasFlippedCard){
    hasFlippedCard = true;
    firstCard = this;
    return;
  } 
  // When second click a card, hasFlippedCard becomes false and the value for the firstCard = this(where we click)
  hasFlippedCard = false;
  secondCard = this;
  checkForMatch();
}


// Function: check if cards match
function checkForMatch(){
  if (firstCard.dataset.card === secondCard.dataset.card) {
  disableCards(); 
  } else {
  unflipCards();
  }
}

//Function: unflip cards when timeout
function unflipCards() {
  lockBoard = true;
    setTimeout(() => {
      firstCard.classList.remove('active');
      secondCard.classList.remove('active');
    lockBoard = false;
    }, 500);
}

// Function: Disable cards
function disableCards() {
  firstCard.removeEventListener('click', flipcard);
  secondCard.removeEventListener('click', flipcard);
}

// Function: Shuffle Cards
function shuffleBoard() {
    for (let i = cardBoard.children.length; i >= 0; i--) {
        cardBoard.appendChild(cardBoard.children[Math.random() * i | 0]);
    }
}

// Function: Timer
function timer (){
  if((millisecond += 10) === 1000){
    millisecond = 0;
    second++;
  }
  if(second === 60){
    second = 0;
    minute++;
  }
  minutesSpan.innerText = returnData(minute);
  secondsSpan.innerText = returnData(second);
  millisecondSpan.innerText = returnData(millisecond);
}

// Function: If the digit is less than 10 then concatenates with a 0(zero) in front.
function returnData(input) {
  return input > 10 ? input : `0${input}`;
}

// Function: Start Timer
function start() {
  cron = setInterval(() => { timer(); }, 10);
}
