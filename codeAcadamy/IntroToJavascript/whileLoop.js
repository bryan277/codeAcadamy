for (let counterOne = 1; counterOne < 4; counterOne++){
  console.log(counterOne);
}
// 1
// 2
// 3

let counterTwo = -5;

while (counterTwo < 4) {
  console.log(counterTwo);
  counterTwo++;
}
// -5
// -4
// -3
// -2
// -1
// 0
// 1
// 2
// 3
const cards = ['diamond', 'spade', 'heart', 'club'];

// Write your code below
let currentCard;

while(currentCard != 'heart'){
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard)
}
