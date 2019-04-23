//Accessing Objects Properties with the Dot Operator
var myObj = {
  "prop1": "val1",
  prop2: "val2",
};

var prop1val = myObj.prop1;
console.log(prop1val);
//val1
console.log(myObj.prop2);
//val2

var testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleat"
};

var hatValue = testObj.hat;
console.log(hatValue);
//ballcap
var shirtValue = testObj.shirt;
console.log(shirtValue);
//jersey


//Accessing Objects Properties with Bracket Notation
var myObj = {
  "Space Name": "Kirk",
  "More Space": "Spock"
};

console.log(myObj["Space Name"]);
//Kirk
console.log(myObj["More Space"]);
//Spock

var testObj1 = {
  'an entree': 'hamburger',
  'my side': 'veggies',
  'the drink': 'water'
}

var entreeValue = testObj1['an entree'];
console.log(entreeValue);
//hamburger
var drinkValue = testObj1['the drink'];
console.log(drinkValue);
//water

//Accessing Objects Properties with Variables
var someProp = 'propName';
var myObj = {
  propName: 'Some Value'
}

myObj[someProp];
//Some Value

var myDog = "Hunter";
var dogs = {
  Fido: "Mutt",
  Hunter: "Doberman",
  Snoopie: "Beagle"
}

var breed = dogs[myDog];
console.log(breed);
//Doberman

var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

var playerNumber = 16;
var playerNumber1 = 19;
var player = testObj[playerNumber];
var player1 = testObj[playerNumber1];
console.log(player);
//Montana
console.log(player1);
//Unitas

var alpha = {
  1:"Z",
  2:"Y",
  3:"X",
  4:"W"
};

console.log(alpha[2]);
//Y
console.log(alpha[3]);
//X

var value = 2;
console.log(alpha[value]);
//Y


function phoneticLookup(val) {
  var result = "";

  var lookUp = {
    "alpha":"Adam",
    "brave":"Boston",
    "charlie":"Chicago",
    "delta":"Denver",
    "echo":"Easy",
    "foxtrot":"Frank",
    "":undefined

  }
  result = lookUp[val];
  return console.log(result);
}

phoneticLookup('charlie');
//Chicago
phoneticLookup('');
//undefinded
