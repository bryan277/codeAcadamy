let catName;
let quote;
function catTalk() {
  "use stric";

  catName = "Oliver";
  quote = catName + " says Meow!";

}

catTalk();


// var printNumTwo;
// for (var i = 0; i < 3; i++) {
//   if (i === 2) {
//     printNumTwo = function () {
//       return i;
//     };
//   }
// }
//
// console.log(printNumTwo());
// //3

let printNumTwo;
for (let i = 0; i < 3; i++) {
if (i === 2) {
printNumTwo = function() {
return i;
};
}
}
console.log(printNumTwo());
// returns 2
console.log(i);
// returns "i is not defined"
