//Use Bracket Notation to find the nth Charatcter in at String
var firstName = 'Hans';
var secondLetterOfFirstName = firstName[1];
console.log(secondLetterOfFirstName);
//a

var lastName = "Lovelace";

var thirdLetterOfLastName = lastName[2];
console.log(thirdLetterOfLastName);
//v

var fN = "Ada";
var lastLetterOffN = fN[fN.length - 1];
console.log(lastLetterOffN);

var lN = 'Bryant';
var lastletterOflN = lN[lN.length - 1];
console.log(lastletterOflN);
//t


var firstName1 = "Lebron";
var thirdToLastOfFirstName = firstName1[firstName1.length - 3];
console.log(thirdToLastOfFirstName);
//r

var lastName1 = "James";
var secondToLastLetterOFLastName = lastName1[lastName1.length - 2]
console.log(secondToLastLetterOFLastName);
//e

//Word Blank
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  var result = "My " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb;
  return result;

}
var code = wordBlanks('dog', 'big', 'ran', 'quickly');
console.log(code);
//My big dog ran quickly

var ourArray = [['the universe', 42],['everything, 101010']];
var myArray = [["Lebron James", 23], ["Kobe Bryant", 24]];


var ourArray = [1,2,3];
var outData = ourArray[0];
console.log(outData);
//1

var myArray = [1,2,3];
var myData = myArray[0];
console.log('My data is ' + myData);
//My data is 1

var ourArray = [1,2,3];
ourArray[1] = 3
console.log(ourArray);
//[1,3,3]

var myArray = [1,2,3]
myArray[0] = 3
console.log(myArray);
//[3,2,3]

var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];
var myData = myArray[2][1]
console.log(myData);
//8

var ourArray = ["Stimpson", "J", "cat"];
ourArray.push(["happy", "joy"]);
console.log(ourArray);
//[ 'Stimpson', 'J', 'cat', [ 'happy', 'joy' ] ]

var myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog", 3]);
console.log(myArray);
//[ [ 'John', 23 ], [ 'cat', 2 ], [ 'dog', 3 ] ]


var ourArray = [1,2,3];
var removedFromOurArray = ourArray.pop();
console.log(ourArray);
//[1,2]

var myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog", 3]);
console.log(myArray);
//[ [ 'John', 23 ], [ 'cat', 2 ], [ 'dog', 3 ] ]

var removedFromMyArray = myArray.pop();
console.log(myArray);
//[ [ 'John', 23 ], [ 'cat', 2 ] ]

var ourArray = ["Stimpson", "J", ["cat"]]
removedFromOurArray = ourArray.shift();
console.log(ourArray);
//[ 'J', [ 'cat' ] ]

var myArray = [["John", 23], ["dog", 3]];
removedFromMyArray = myArray.shift();
console.log(myArray);
//[ [ 'dog', 3 ] ]

var ourArray = ["Stimpson", "J", "cat"];
ourArray.shift();
console.log(ourArray);
// [ 'J', 'cat' ]
ourArray.unshift("Happy");
console.log(ourArray);
// [ 'Happy', 'J', 'cat' ]

var myArray = [["John", 23], ["dog", 3]]
myArray.shift();
console.log(myArray);
//[ [ 'dog', 3 ] ]
myArray.unshift(["Paul", 35]);
console.log(myArray);
// [ [ 'Paul', 35 ], [ 'dog', 3 ] ]


var myList = [];
myList.unshift(["Chocolat", 10], ["Milk", 1], ['Eggs', 12], ["Bananas", 6], ["Water", 2]);
console.log(myList);
//[ [ 'Chocolat', 10 ],
// [ 'Milk', 1 ],
// [ 'Eggs', 12 ],
// [ 'Bananas', 6 ],
// [ 'Water', 2 ] ]
