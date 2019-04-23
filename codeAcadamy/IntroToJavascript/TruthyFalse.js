let myVariable = 'I Exist!';

if (myVariable) {
  console.log(myVariable)
} else {
  console.log('The variable does not exist.')
}
// I Exist!

let wordCount = 1;

if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log('Better get to work!');
}
//0
// Better get to work!
//1
// Great! You've started your work!

let favoritePhrase = false;

if (favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
}
// let favoritePhrase = 'Hello World!';
// This string doesn't seem to be empty.
// let favoritePhrase = '';
// This string is definitely empty.
// let favoritePhrase = false;
// This string is definitely empty.

let username = 'Hans';
let defaultName;

if (username) {
  defaultName = username;
} else {
  defaultName = 'Stranger';
}

console.log(defaultName);


let tool = '';

let writingUtensil = tool || 'pen';

console.log(`The ${writingUtensil} is mightier than the sword.`);
//''
// The pen is mightier than the sword.
//'pencil'
// The pencil is mightier than the sword.
