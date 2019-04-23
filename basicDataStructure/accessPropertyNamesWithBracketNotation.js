let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};
console.log(foods.apples);
//25
function checkInventory(scannedItem) {
    return foods[scannedItem];
}

console.log(checkInventory('apples'));
// checkInventory("apples") should return 25
// checkInventory("bananas") should return 13
// checkInventory("strawberries") should return 27
