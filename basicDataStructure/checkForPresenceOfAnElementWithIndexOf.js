//Example

let fruits = ['apple', 'pears', 'oranges', 'peaches', 'pears'];

let fruitsIndex1 = fruits.indexOf('dates');
console.log(fruitsIndex1);
//-1   it means the element does not exist on the array
console.log(fruits.indexOf('oranges'));
//2
console.log(fruits.indexOf('pears'));
//1

function quickCheck(arr, elem) {
  if (arr.indexOf(elem) !== -1) {
    return true;
  } else {
    return false;
  }
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));
//false
console.log(quickCheck(['squash', 'onions', 'shallots'], 'onions'));
//true
