function largestOfFour(arr) {
  //Step 1. Create an array that will host the result of the 4 sub-arrays
  var largestNumber = [0,0,0,0];
  //Step 2. Create the first FOR loop that will iterate through the arrays
  for(var arrayIndex = 0; arrayIndex < arr.length; arrayIndex++) {
    /* The starting point, index 0, corresponds to the first array */

  //Step 3. Create the second FOR loop that will iterate through the sub-arrays
  for(var subArrayIndex = 0; subArrayIndex < arr[arrayIndex].length; subArrayIndex++) {
    if(arr[arrayIndex][subArrayIndex] > largestNumber[arrayIndex]) {
      largestNumber[arrayIndex] = arr[arrayIndex][subArrayIndex];
/*FOR loop cycles
      arrayIndex => i
      subArrayIndex => j

  iteration in the first array
  For each iteration: arr[i][j]         largestNumber[arrayIndex]        if arr[i][j] > largestNumber
  1st iteration:      arr[0][1] => 4    largestNumber[0] => 0   4 > 0? => true
  2nd iteration:      arr[0][2] => 5    largestNumber[0] => 4   5 > 4? => true
  3rd iteration:      arr[0][3] => 1    largestNumber[0] => 5   1 > 5? => false
  4th iteration:      arr[0][4] => 3    largestNumber[0] => 5   3 > 5? => false
  5th iteration:      arr[0][5] =>false largestNumber[0] => 5

  iteration in the second array
  For each iteration: arr[i][j]         largestNumber[arrayIndex]        if arr[i][j] > largestNumber
  1st:                arr[1][0] => 13   largestNumber[1] => 0            13 > 0? => True
  2nd:                arr[1][0] => 27   largestNumber[1] => 13           27 > 13 => true
  3rd:                arr[1][0] => 18   largestNumber[1] => 27           18 > 27 => false
  4th:                arr[1][0] => 26   largestNumber[1] => 27           26 > 27 => false
  5th:                arr[1][0] => falselargestNumber[1] => 27

  */
      }
    }
  }
  return largestNumber;
}

//second method
//ternary operator
/*
(currentLargestNumber > previousLargestNumber) ? currentLargestNumber : previousLargestNumber;

same as:

if (currentLargestNumber > previousLargestNumber == true) {
return currentLargestNumber;
} else {
return previousLargestNumber;
}


*/
function largestOfFour(mainArray) {
  //Step 1. Map over the main arrays
  return mainArray.map(function(subArray) { //
    //Step 2. Grab the largest numbers for each sub-arrays with reduce() method
    return subArray.reduce(function(previousLargestNumber, currentLargestNumber) {
      return(currentLargestNumber > previousLargestNumber) ? currentLargestNumber : previousLargestNumber;
    }, 0); // 0 serves as the context for the first pLN in each sub array
  });
}
