const concept = [
  'arrays',
  'can',
  'be',
  'mutated'
];

const concept1 = [
  'hans',
  'dude',
  'gay',
  'horse'
];

let changeArr = (arr) => {
  arr[3] = 'MUTATED';
}

changeArr(concept1);
console.log(concept1);
changeArr(concept);
console.log(concept);
// [ 'arrays', 'can', 'be', 'MUTATED' ]
