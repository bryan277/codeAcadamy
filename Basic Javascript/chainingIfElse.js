//Chaining If else
function testSize(num) {
  if (num < 5) {
    console.log("Tiny");
  } else if (num < 10) {
    return "Small";
  } else if (num < 15) {
    return "Medium";
  } else if (num < 20) {
    return "Large";
  } else if (num >= 20) {
    return "HUGE";
  }
}
testSize(3)
// Tiny
console.log(testSize(23))
// HUGE
