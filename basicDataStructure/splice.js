 let array = ['today', 'was', 'not', 'so', 'great'];

 array.splice(2,2);
 console.log(array);
// [ 'today', 'was', 'great' ]
let array = ['I', 'am', 'feeling','really', 'happy'];
let newArray = array.splice(3,2);
console.log(newArray);
//[ 'really', 'happy' ]


function sumOfTen(arr) {
  arr.splice(2,2);
  return arr.reduce((a, b) => a + b);
}

console.log(sumOfTen([2,5,1,5,2,1]));
// should return 10
// use splice method

//reduce method
var array = [1,2,3,4,5,6,7];
var array1 = [ 1, 2, 3, 4, 5, 6, 7 ];
var arrayPlus = array.reduce((a,b) => a + b);
console.log(arrayPlus);
//28
var arrayMultiply = array1.reduce((a,b) => a * b);
console.log(arrayMultiply);
//5040
