//split method
function reverseString(str) {
  var splitString = str.split('');
  //["h", "e", "l", "l", "o"]
  var reverseArray = splitString.reverse();
  //["o", "l", "l","e", "h"]
  var joinArray = reverseArray.join("");
  //"olleh"

  return joinArray;

}

console.log(reverseString('word'))
//drow
//cleaner method
function reverseString(str) {

  return str.split('').reverse().join('');
}
console.log(reverseString('phone'))
//enohp

//reverse method
