var myGlobal = 10;

function fun1() {
  oppsGlobal = 5;
}

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}


//Local Scope and Functions
var outerWear = 'T-shirt';
console.log(outerWear + ' global');
//T-shirt
function myOutfit() {
  var outerWear = 'sweater';
  return console.log(outerWear + ' local');
}
myOutfit();
//sweater
console.log(outerWear + ' global');


//Return a Value from a Function with Return
//ex.
function plusThree(num) {
  return num + 3;
}
var answer = plusThree(5);
console.log(answer);
//8

function timesFives(num) {
  return num *=5;
}

console.log(timesFives(5));
//25

// Assignment with a Returned Value
var changed = 0;

function change(num) {
  return (num + 5) / 3;
}
changed = change(10);
console.log(changed);
//5

var processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

processed = processArg(7);
console.log(processed);
//2
console.log(processArg(7));
//2
