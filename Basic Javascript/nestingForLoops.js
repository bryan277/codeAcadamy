// var arr = [[1,2], [3,4], [5,6]];
//
// for(var i=0; i < arr.length; i++) {
//   for(var i=0; i < arr[i].length; i++) {
//     console.log(arr[i][j]);
//   }
// }


//mulitplyAll


function multiplyAll(arr) {
  var product = 1;
  // Only change code below this line
  for (var i=0; i < arr.length; i++) {
    for (var a= 0; a < arr[i].length; a++){
      product *= arr[i][a];
    }
  }
  // Only change code above this line
  return product;
}

console.log(mulitplyAll([2,3] [2,3]));
