//First Method
function findLongestWord(str) {
  //Step 1. Split strting into an array of strings
  var strSplit = str.split(' ');
  console.log(strSplit);
  // [ 'The','quick','brown','fox','jumped','over','the','lazy','dog' ]

  //Step 2. Initiate a variable that will hold the length for the longest findLongestWord
  var longestWord = 0;

  //Step 3. Create the FOR loop

  for (var i = 0; i < strSplit.length; i++) {
    if(strSplit[i].length > longestWord) { // If strSplit[i].length is greater than the word it is compared with.
      longestWord = strSplit[i].length; //...then longestWord takes this new value
    }
  }
  return longestWord;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));


//Second Method Sort()
function findLongestWord(str){
  //Step 1. Split the string into an array of strings
  var strSplit = str.split(' ');

  //Step 2. Sort the elements in the array
  var longestWord = strSplit.sort(function(a,b) {
    return b.length - a.length;
  });

  return longestWord[0].length;
}


let s = "It was a dark and stormy night.";
let words = s.split(/\W+/).filter(word => word.length);
words.sort((a, b) => a.length - b.length);
console.log(words);
