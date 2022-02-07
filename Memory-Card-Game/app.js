/* Desglose */
// 1. Display only backface of card
// 2. Card addEventListener on click flip to front face
//// 2.1 If 1st card clicked !== to 2nd card clicked, flip to backface
//// 2.2 If 1st card clicked === to 2nd card clicked, front face greys out
// 3. Card on click starts timer
//// 3.1 When all cards are guessed timer stops

/* PSEUDO CODE */
// 1. Card display set to none
// 2. Card addEventListener on click .target classList.remove("active"), .front-face classList.add('active')
// 2.1 If 1st Card .target.dataset.id clicked !== 2nd Card .target.dataset.id, card back-face classList.add('active')
// 2.2 If 1st Card .target.dataset.id clicked === 2nd Card .target.dataset.id, both cards classList.add('greyd-out')
// 3. Function for time start
// 3.1

// Global Variables
