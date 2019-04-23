function greaterThanTen(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 10) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(greaterThanTen([2,12,8, 14, 80, 0, 1]));
//[12,14,80]

function greaterThanFive(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 5) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(greaterThanFive([6,3,8,2,7]))
//6, 8, 7

function greaterThan20(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 20) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(greaterThan20([21, 19, 2, 3, 50]));
//[ 21, 50]

function lessThan10(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] < 10) {
      newArr.push(arr[i]);
    }
  }
  return console.log(newArr);
}

lessThan10([20,2,10,15,14]);
//2


function filterArray(arr, elem) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if(arr[i].indexOf(elem) === -1) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(filterArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
//[]
console.log(filterArray([['trumpets',2], ['flutes', 4], ['saxophones', 2]], 2));
//[ [ 'flutes', 4 ] ]
