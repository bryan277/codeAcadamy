function checkScope() {
  "use strict";

let i = 'function scope';
if (true) {
  let i = 'block scope';
  console.log("block scope i is: ", i);
}

console.log('Function scope i is: ', i);
return i;
}

checkScope();
