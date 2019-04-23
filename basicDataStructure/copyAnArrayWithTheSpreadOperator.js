let thisArray = [true, true, undefined, false, null];

let thatArray = [...thisArray];
console.log(thatArray);
//[ true, true, undefined, false, null ]
console.log(thisArray);
//[ true, true, undefined, false, null ]


function copyMachine(arr,num) {
  let newArr = [];
  while (num >= 1) {
    newArr.push([...arr]);

    num--;
  }
  return newArr;
}


console.log(copyMachine([true, false, true], 2));
//opyMachine([true, false, true], 2) should return [[true, false, true], [true, false, true]]
