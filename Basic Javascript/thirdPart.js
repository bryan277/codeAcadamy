function ourReuseableFuntion() {
  console.log("hey, World");
}

ourReuseableFuntion();
//hey, World

var reusableFuntion = () => console.log('Hi world');
reusableFuntion();
//Hi world

function reusableFuntion() {
  console.log('Hi world');
}

reusableFuntion();
//Hi world


function ourFunctionWithArgs(a,b) {
  console.log(a - b);
}
ourFunctionWithArgs(10, 5);
//5

function myFunctionWithArgs(a, b){
  console.log(a + b);
}

myFunctionWithArgs(1,2);
myFunctionWithArgs(7,9);
//3
//16
