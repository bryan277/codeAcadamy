let countString = '';
let i = 0;

do {
  countString = countString + i;
  i++;

} while (i < 5);

console.log(countString);
// 01234

const firstMessage = 'I will print!';
const secondMessage = 'I will not print!';

// A do while with a stopping condition that evaluates to false
do {
 console.log(firstMessage)
} while (true === false);

// A while loop with a stopping condition that evaluates to false
while (true === false){
  console.log(secondMessage)
};

let cupsOfSugarNeeded = 5;
let cupsAdded = 0;

do {
 cupsAdded++
} while (cupsAdded < cupsOfSugarNeeded);

console.log(cupsAdded);
// 5
