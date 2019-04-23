//split method
function reverseString(str){
  var splitString = str.split('');
  console.log(splitString)
  //['h', 'a', 'n', 's']
  var reverseArray = splitString.reverse();
  console.log(reverseArray);
  //['s', 'n', 'a', 'h']
  var joinArray = reverseArray.join("");
  console.log(joinArray);
  //snah
  return joinArray;
}

console.log(reverseString('hans'));
//snah

//cleaner method

function reverseString(str) {
  return str.split('').reverse().join('');
}

console.log(reverseString('phone'))
//enohp
