for (let i = 0; i < 99; i++) {
  if (i > 5) {
    break;
  }

  console.log('Banana')
}
// Banana
// Banana
// Banana
// Banana
// Banana
// Banana

const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

for (let i = 0; i < rapperArray.length; i++){
  console.log(rapperArray[i]);
  if (rapperArray[i] === 'Notorious B.I.G.'){
    break;
  }
}

console.log("And if you don't know, now you know.");
