//my wrong attempted code
// function nextInLine(arr, item) {
//   if (arr != arr) {
//     return item;
//   }
//   else if (arr => 0) {
//   return arr[0];
// }

function nextInLine(arr, item) {
  arr.push(item);
  var removed = arr.shift();
  return removed;
}
console.log(nextInLine([], 1));
//1
console.log(nextInLine([2], 1));
//2
console.log(nextInLine([5,6,7,8,9], 1));
//5
console.log(nextInLine([0], 2));
//0



//push
var animals = ['pigs', 'goats', 'sheep'];
console.log(animals.push('cows'));
//4
console.log(animals);
//[ 'pigs', 'goats', 'sheep', 'cows' ]

//shift
var array1 = [1,2,3];
var firstElement = array1.shift();
console.log(array1);
//[2,3]
