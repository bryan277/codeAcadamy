//First Method
function findLongestWord(str) {
//Step 1. Split the string into an array of strings
var strSplit = str.split(' ');
// var strSplit = "The quick brown fox jumped over the lazy dog".split(' ');
// var strSplit = ["The", "quick", "brown", "fox", "jumped", "over", "the", "lazy", "dog"];


//Step 2. Initiate a variable that will hold the length fo the longest findLongestWord
var longestWord = 0;

//Step 3. Create the FOR loop
for (var i = 0; i < strSplit.length; i++) {
  if(strSplit[i].length > longestWord) { // If strSplit[i].length is greater than the word it is compared with.
    longestWord = strSplit[i].length; //...then longestWord takes this new value
  }
}
return longestWord;
}
findLongestWord("The quick brown fox jumped over the lazy dog");


// findLongestWord(“The quick brown fox jumped over the lazy dog”) should return a number
// findLongestWord(“The quick brown fox jumped over the lazy dog”) should return 6
// findLongestWord(“May the force be with you”) should return 5
// findLongestWord(“Google do a barrel roll”) should return 6
// findLongestWord(“What is the average airspeed velocity of an unladen swallow”) should return 8
// findLongestWord(“What if we try a super-long word such as otorhinolaryngology”) should return 19

//Second Method Sort()
function findLongestWord(str) {
  //Step 1. Split the string into an array of strings
  var strSplit = str.split(' ');
  // var strSplit = "The quick brown fox jumped over the lazy dog".split(' ');
  // var strSplit = ["The", "quick", "brown", "fox", "jumped", "over", "the", "lazy", "dog"];

  //Step 2. Sort the elements in the array
  var longestWord = strSplit.sort(function(a,b) {
    return b.length - a.length;
  });

//Step 3. Return the length of the first element of the array
  return longestWord[0].length; // var longestWord = ["jumped", "quick", "brown", "over", "lazy", "The", "fox", "the", "dog"];
}
//Without comments:
function findLongestWord(str) {
  var longestWord = str.split(' ').sort(function(a,b) { return b.length - a.length});
  return longestWord[0].length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");


//Third Method Reduce()
function findLongestWord(str) {
  // Step 1. Split the string itno an array of strings
  var strSplit = str.split(' ');
  // var strSplit = "The quick brown fox jumped over the lazy dog".split(' ');
  // var strSplit = ["The", "quick", "brown", "fox", "jumped", "over", "the", "lazy", "dog"];

  // Step 2. Use the reduce Method
  var longestWord = strSplit.reduce(function(longest, currentWord) {
    if(currentWord.length > longest.length)
      return currentWord;
    else
      return longest;
  }, "");
  return longestWord.length; //var longestWord = "jumped"
                            //longestWord.length => 'jumped'.length => 6
}



//Third Method
