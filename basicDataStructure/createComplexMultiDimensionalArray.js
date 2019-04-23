let nestedArray = [ // top, or first level - the outer most array
  ['deep'], // an array within an array, 2 levels of depth
  [
    ['deeper'], ['deeper'] // 2 arrays nested 3 levels deep
  ],
  [
    [
      ['deepest'], ['deepest'] // 2 arrays nested 4 levels deep
    ],
    [
      [
        ['deepest-est?'] // an array nested 5 levels deep
      ]
    ]
  ]
];

console.log(nestedArray[2][1][0][0][0]);
//deepest-est?
nestedArray[2][1][0][0][0] = 'deeper still';
console.log(nestedArray[2][1][0][0][0]);
//deeper still


let myNestedArray = [
  // change code below this line
  ['unshift', false, 1, 2, 3, 'complex', 'nested'],
  ['loop', 'shift', 6, 7, 1000, 'method'],
  ['concat', false, true, 'spread', 'array'],
  ['mutate', 1327.98, 'splice', 'slice', 'push'],
  ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth', ['deep',['deeper',['deepest']]]]
  // change code above this line
];

console.log(myNestedArray[4][6][1][1])
//[ 'deepest' ]
