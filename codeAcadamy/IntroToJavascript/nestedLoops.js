const myArray = [6, 19, 20];
const yourArray = [19, 81, 2];

for (let i = 0; i < myArray.length; i++) {
  for (let j = 0; j < yourArray.length; j++) {
    if (myArray[i] === yourArray[j]) {
      console.log('Both loops have the number: ' + yourArray[j])
    }
  }
};

// var bobsFollowers = ['Hans', 'Jake', 'Brian', 'Rob'];
//
// var tinasFollowers = ['Hans', 'Jake', 'Justin'];
//
// var mutualFollowers = [];
//
// for (let i = 0; i < bobsFollowers.length; i++) {
//   for (let j = 0; j < tinasFollowers.length; j++) {
//     if (bobsFollowers[i] === tinasFollowers[i]) {
//       tinasFollowers.push[i] =+ mutualFollowers;
//     }
//   }
// }

// Write your code below
let bobsFollowers = ['Joe', 'Marta', 'Sam', 'Erin'];
let tinasFollowers = ['Sam', 'Marta', 'Elle'];
let mutualFollowers = [];

// for (let i = 0; i < bobsFollowers.length; i++) {
//   for (let j = 0; j < tinasFollowers.length; j++) {
//     if (bobsFollowers[i] === tinasFollowers[j]) {
//       mutualFollowers.push(bobsFollowers[i]);
//     }
//   }
// };


// [ 'Marta', 'Sam' ]

let bobsFollowers = ['Joe', 'Marta', 'Sam', 'Erin'];
let tinasFollowers = ['Sam', 'Marta', 'Elle'];
let mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
};

console.log(mutualFollowers);
// [ 'Marta', 'Sam' ]
